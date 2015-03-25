'use strict';

console.log('globals.js');

angular.module('openi-permission-visualization')

    .factory('globalsFactory', ['settingsConfig', 'toastr', function(settingsConfig, toastr) {

        console.log('globalsFactory.js');

        var ACCESS_TYPES = [
            "CREATE", "READ", "UPDATE", "DELETE"
        ];

        function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return sParameterName[1];
                }
            }
        }

        var globals = {};
        globals.swagger = null;
        globals.authToken = getUrlParameter('oust') || '';
        globals.cloudletId = getUrlParameter('cloudletId') || '';
        globals.apiKey = getUrlParameter('api_key') || '';
        globals.homeUrl = getUrlParameter('home_url') || '';
        globals.serverURL = 'https://demo2.openi-ict.eu/api-spec/v1'; //'https://10.130.34.17/api-spec/v1';
        globals.settings = settingsConfig;
        globals.appManifest = null;

//        var isFirstTime = true;
        globals.getAppPermissions = function (swagger, isAppManifest) {
            return new Promise(function (resolve, reject) {
                console.log('getAppPermissions()');
                var extra = {
                    api_key: globals.apiKey
                };
                console.log('extra: ', extra);
                function success (appPermissions) {
                    console.log('**appPermissions: ', appPermissions);
                    if (appPermissions.obj.result.length > 0) {
                        console.log('getAppPermissions resolve()');
                        if (isAppManifest) {
                            globals.appPermissionTypes = appPermissions.obj.result[0].types;
                            globals.appManifest = appPermissions.obj.result[0];
                            resolve();
                        } else {
                            var index = appPermissions.obj.result.length - 1;
                            resolve(appPermissions.obj.result[index]);
                        }
                    } else {
                        console.log('getAppPermissions resolve()');
                        resolve([]);
                    }
                }
                function failure (error) {
                    console.log('getAppPermissions reject()');
                    console.log('error: ', error);
                    reject(error);
                }
                swagger.apis.permissions.getAppPermissionsByApiKey(extra, success, failure);
            });
        };

        globals.initAppManifest = function (swagger) {
            return globals.appManifest ? Promise.resolve() : globals.getAppPermissions(swagger, true);
        };

        globals.getPermissions = function (swagger) {
            return new Promise(function (resolve, reject) {
                console.log('getPermissions()');
                function success (permissions) {
                    console.log('got permissions: ', permissions);
                    console.log('getPermissions resolve()');
                    resolve(permissions.obj);
                }
                function failure (error) {
                    console.log('getPermissions reject()');
                    console.log('error: ', error);
                    reject(error);
                }
                swagger.apis.permissions.getPermissions({}, success, failure);
            });
        };

        globals.initPermissions = function (swagger) {
            return new Promise(function (resolve, reject) {
                console.log('initPermissions()');
                globals.getPermissions(swagger).then(function (permissions) {
                    Object.keys(globals.settings).forEach(function (k) {
                        var setting = globals.settings[k];
                        var types = setting.types;
                        types.forEach(function (type) {
                            type.isOptedIn = false;
                        });
                    });
                    permissions.forEach(function (p) {
                        Object.keys(globals.settings).forEach(function (k) {
                            var setting = globals.settings[k];
                            var types = setting.types;
                            types.forEach(function (type) {
                                if (type.id === p.ref) {
                                    type.isOptedIn = true;
                                }
                            });
                        });
                    });
                    console.log('initPermissions resolve()');
                    resolve();
                }, function (error) {
                    console.log('initPermissions reject()');
                    reject(error);
                });
            });
        };

        globals.save = function (swagger, dimension) {
            return new Promise(function (resolve, reject) {
                console.log('save()');
                console.log('globals.settings: ', globals.settings);
                console.log('dimension: ', dimension);

                var newPermissions = [];
                var additionalPermissions = [];
                var openiTypes = [];

                // add existing permissions of the other dimensions
                Object.keys(globals.settings).forEach(function (settingKey) {
                    if (settingKey !== dimension) {
                        var setting = globals.settings[settingKey];
                        var types = setting.types;
                        types.forEach(function (type) {
                            if (type.isOptedIn) {
                                ACCESS_TYPES.forEach(function (accessType) {
                                    var perm = {
                                        "type": "type",
                                        "ref": type.id,
                                        "access_type": accessType,
                                        "access_level": "APP"
                                    };
                                    newPermissions.push(perm);
                                });
                            }
                        });
                    }
                });

                globals.settings[dimension].types.forEach(function (type) {
                    console.log('type: ', type);
                    console.log('globals.appPermissions: ', globals.appPermissions);
                    globals.appPermissions.permissions.forEach(function (p) {
                        console.log('p: ', p);
                        if (p.ref === type.id) {
                            if (type.isOptedIn === false) {
                                console.log('===========');
                            } else {
                                console.log('!!!!!!!!!!!!');
                                newPermissions.push(p);
                            }
                        }
                    });
                });

                globals.settings[dimension].types.forEach(function (type) {
                    console.log('type: ', type);
                    if (type.isOptedIn) {
                        ACCESS_TYPES.forEach(function (accessType) {
                            var perm = {
                                "type": "type",
                                "ref": type.id,
                                "access_type": accessType,
                                "access_level": "APP"
                            };
                            additionalPermissions.push(perm);
                        });
                    }
                });
                var totalPermissions = newPermissions.concat(additionalPermissions);
                console.log('newPermissions: ', newPermissions);
                console.log('additionalPermissions: ', additionalPermissions);
                console.log('totalPermissions: ', totalPermissions);
                totalPermissions = _.uniq(totalPermissions, false, function (item) {
                    return '' + item.type + item.ref + item.access_type + item.access_level;
                });
                console.log('totalPermissions: ', totalPermissions);
                console.log('---------------->: ', totalPermissions);

                var openiTypes = globals.appPermissionTypes.filter(function (t) {
                    var includeType = false;
                    totalPermissions.forEach(function (p) {
                        if (!includeType) {
                            if (p.ref === t['@id']) {
                                includeType = true;
                            }
                        }
                    });
                    return includeType;
                });

                var params = {
                    body: JSON.stringify({
                        "app_api_key": globals.apiKey,
                        "permissions": totalPermissions,
                        "types": openiTypes
                    })
                };

                console.log('::::::::: ', params);

                swagger.apis.permissions.createAppPermissions(params, function (result) {
                    console.log('save resolve()');
                    toastr.success('permissions saved', 'Success', {
                        timeOut: 1000
                    });
                    resolve();
                }, function (error) {
                    console.log('error: ', error);
                    toastr.error('permission not saved', 'Server failure', {
                        timeOut: 1000
                    });
                    reject(error);
                });

//                toastr.success('permissions saved', 'Success', {
//                    timeOut: 1000
//                });
//                return resolve();

                //////////

//                swagger.apis.permissions.getPermissions(function (permissions) {
//
//                    globals.settings[dimension].types.forEach(function (type) {
//                        console.log('type: ', type);
//                        console.log('permissions: ', permissions);
//                        permissions.obj.forEach(function (p) {
//                            console.log('p: ', p);
//                            if (p.ref === type.id) {
//                                if (type.isOptedIn === false) {
//                                    console.log('===========');
//                                } else {
//                                    console.log('!!!!!!!!!!!!');
//                                    newPermissions.push(p);
//                                }
//                            }
//                        });
//                    });
//                    var additionalPermissions = [];
//                    globals.settings[dimension].types.forEach(function (type) {
//                        console.log('type: ', type);
//                        if (type.isOptedIn) {
//                            ACCESS_TYPES.forEach(function (accessType) {
//                                var perm =  {
//                                    "type": "type",
//                                    "ref": type.id,
//                                    "access_type": accessType,
//                                    "access_level": "APP"
//                                };
//                                additionalPermissions.push(perm);
//                            });
//                        }
//                    });
//                    var totalPermissions = newPermissions.concat(additionalPermissions);
//                    console.log('newPermissions: ', newPermissions);
//                    console.log('additionalPermissions: ', additionalPermissions);
//                    console.log('totalPermissions: ', totalPermissions);
//                    _.uniq(totalPermissions, false, function (item) {
//                        return item.type + item.ref + item.access_type + item.access_level;
//                    });
//                    console.log('totalPermissions: ', totalPermissions);
//                    console.log('---------------->: ', totalPermissions);
//                    var params = {
//                        body: JSON.stringify(totalPermissions)
//                    };
//                    swagger.apis.permissions.updatePermissions(params, function (result) {
//                        console.log('save resolve()');
//                        toastr.success('permissions saved', 'Success', {
//                            timeOut: 1000
//                        });
//                        resolve();
//                    }, function (error) {
//                        console.log('error: ', error);
//                        toastr.error('permission not saved', 'Server failure', {
//                            timeOut: 1000
//                        });
//                        reject(error);
//                    });
//                }, function (error) {
//                    console.log('error');
//                    toastr.error('permission not saved', 'Server failure', {
//                        timeOut: 1000
//                    });
//                    reject(error);
//                });
            });
        };

        globals.filterByAppPermissions = function (appPermissions) {
            if (!appPermissions) {
                return;
            }
            console.log('filterByAppPersmissions()');
            console.log('globals.settings:', globals.settings);
            console.log('appPermissions: ', appPermissions);
            console.log('globals.appManifest: ', globals.appManifest);
            var appPermissionsIds = appPermissions.permissions.map(function (i) {
                return i.ref;
            });
            var appManifestIds = globals.appManifest.permissions.map(function (i) {
                return i.ref;
            });
            console.log('appPermissionsIds: ', appPermissionsIds);
            Object.keys(globals.settings).forEach(function (key) {
                var setting = globals.settings[key];
                var types = setting.types;
                var typesIds = types.map(function (i) {
                    return i.id;
                });
                types.forEach(function (type) {
                    if (appManifestIds.indexOf(type.id) >= 0) {
                        setting.display = true;
                        type.isOptedIn = appPermissionsIds.indexOf(type.id) < 0 ? false : true;
                        type.display = true;
                    }
                });
                console.log('typesIds: ', typesIds);
            });
        };

        globals.filterOutTypesWithoutObj = function (swagger) {
            return new Promise(function (resolve, reject) {
                console.log('filterOutTypesWithoutObj()');
                var pathParameters = {
                    "cloudletId": globals.cloudletId
                };
                function getObjectsSuccess(result) {
                    console.log('result: ', result);
                    var objectTypes = {};
                    result.obj.result.forEach(function (item) {
                        var type = item['@openi_type'];
                        if (type) {
                            objectTypes[type] = true;
                        }
                    });
                    Object.keys(globals.settings).forEach(function (settingKey) {
                        var setting = globals.settings[settingKey];
                        var types = setting.types;
                        types.forEach(function (type) {
                            if (objectTypes[type.id]) {
                                type.hasObjects = true;
                                setting.hasObjects = true;
                            }
                        });
                    });
                    console.log('filterOutTypesWithoutObj resolve()');
                    resolve();
                }
                function getObjectsError(error) {
                    console.log('filterOutTypesWithoutObj reject()');
                    reject('error: ', error);
                }
                console.log('pathParameters: ', pathParameters);
                swagger.apis.objects.getObjects(pathParameters, getObjectsSuccess, getObjectsError);
            });
        };

        return globals;

    }]);