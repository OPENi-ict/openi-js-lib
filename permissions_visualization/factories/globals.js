'use strict';

console.log('globals.js');

angular.module('openi-permission-visualization')

    .factory('globalsFactory', function() {

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
        globals.swagger = {};
        globals.authToken = getUrlParameter('oust');
        globals.cloudletId = getUrlParameter('cloudletId');
        globals.apiKey = getUrlParameter('api_key');//'7820cd94ca0a17ea55b84afb49ca91d6';
        globals.serverURL = 'https://demo2.openi-ict.eu/api-spec/v1'; //'https://10.130.34.17/api-spec/v1';
        globals.settings = {
            "profile": {
                "types": [
                    {
                        "id": "t_003b070598d1e6ea42ee012f69797f3e-904",
                        "label": "Account",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_af0c2cd1c2917e4f3433025e35f3d3cd-1364",
                        "label": "User",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false
            },
            "online_payment": {
                "types": [
                    {
                        "id": "t_defd14d3070bb4978880f7731a547f35-847",
                        "label": "Card",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_c78fe73adb747f7810a5e6bc18344f17-429",
                        "label": "Wallet",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "device_profile": {
                "types": [
                    {
                        "id": "t_7888a698d1fe10a8f05e67279f6d6897-512",
                        "label": "Application",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "device_comp": {
                "types": [
                    {
                        "id": "t_7888a698d1fe10a8f05e67279f6d6897-512",
                        "label": "Application",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "contact_group": {
                "types": [
                    {
                        "id": "t_04ab7e23e50aef2c8a9ff84080288d2c-308",
                        "label": "Group",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "social_activity": {
                "types": [
                    {
                        "id": "t_14022c94deaf9b4823ce9ef7467e2ea5-317",
                        "label": "like",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_dd4e84c5782c11cf33d78139cbc033c6-534",
                        "label": "Comment",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_99163fdce55f96dc3c5b578fd66e32a8-320",
                        "label": "Dislike",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_81dc7a23af580ca8b92ef27d9d6596d5-321",
                        "label": "Favorite",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_729e42d0e58c751ecd551690ec50fb1a-323",
                        "label": "Friendship",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_341aead8a032f444e2b0dc5b188686a8-538",
                        "label": "Tag",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_7a45b237651ffd95f0f32113a975d15b-635",
                        "label": "Game",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_e4666b60c93428ae2ac4e86f182093bc-536",
                        "label": "Badge",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_1d54a3b9897e2abd311d1cba6287aed7-415",
                        "label": "Note",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "media_files": {
                "types": [
                    {
                        "id": "t_89b960476249cf9b4f25ad1cf66c394a-746",
                        "label": "Article",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_356d522e9636d39d8b4271de19b3e3fc-744",
                        "label": "Audio",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false

                    },
                    {
                        "id": "t_2e1b6aed698e4630fcc1107220b8abd0-736",
                        "label": "File",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_f57e85d10963ba6a099aebce8ab6dc37-818",
                        "label": "Photo",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_b59e0e11991dd54b5487d06d9f9000e7-744",
                        "label": "Video",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_158df926d43c72a4aab7ab526ca70c97-311",
                        "label": "Playlist",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_eae587900c6e187a3755f6bea22b6935-455",
                        "label": "Folder",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "product_and_services": {
                "types": [
                    {
                        "id": "t_60808aa730d2b159ac2aac09608440c5-639",
                        "label": "Product",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_8d6a9ab10e64818663f7f9c572bc3cbd-639",
                        "label": "Service",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "health_factors": {
                "types": [
                    {
                        "id": "t_99de92a9d44caea2d97b26e6ed35227f-968",
                        "label": "Nutrition",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_05b33abdc75a04ffaf2f494ecf79c5da-642",
                        "label": "Measurement",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_4dc2ad82b0f66bba949216b5fbaa3aff-1174",
                        "label": "Workout",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            },
            "location": {
                "types": [
                    {
                        "id": "t_e2209ffb250ca8a3fd3f703ec7a39b1c-829",
                        "label": "Event",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_c035b1961f382ead508f9017776fb5e0-449",
                        "label": "Place",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_f8d4838e27a2b358dca40638c713b001-542",
                        "label": "Route",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_d78f9af47df1aa5c3a11d05f5525cafe-748",
                        "label": "Review",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_74bad307ed27072dbc67357a536182bd-451",
                        "label": "Checkin",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_0aea698a28b44d4bf84203a384ad959b-417",
                        "label": "Status",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_b3acf8c93a59241b363169c68d0fc6ba-545",
                        "label": "Shop",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": true
            }
        };

        globals.getAppPermissions = function (swagger) {
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
                        resolve(appPermissions.obj.result[0]);
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
                var newPermissions = []; //$scope.global.permissions.slice();

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

                swagger.apis.permissions.getPermissions(function (permissions) {

                    globals.settings[dimension].types.forEach(function (type) {
                        console.log('type: ', type);
                        console.log('permissions: ', permissions);
                        permissions.obj.forEach(function (p) {
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
                    var additionalPermissions = [];
                    globals.settings[dimension].types.forEach(function (type) {
                        console.log('type: ', type);
                        if (type.isOptedIn) {
                            ACCESS_TYPES.forEach(function (accessType) {
                                var perm =  {
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
                    _.uniq(totalPermissions, false, function (item) {
                        return item.type + item.ref + item.access_type + item.access_level;
                    });
                    console.log('totalPermissions: ', totalPermissions);
                    console.log('---------------->: ', totalPermissions);
                    var params = {
                        body: JSON.stringify(totalPermissions)
                    };
                    swagger.apis.permissions.updatePermissions(params, function (result) {
                        console.log('save resolve()');
                        resolve();
                    }, function (error) {
                        console.log('error: ', error);
                        reject(error);
                    });
                }, function (error) {
                    console.log('error');
                    reject(error);
                });
            });
        };
        globals.filterByAppPermissions = function (appPermissions) {
            if (!appPermissions) {
                return;
            }
            console.log('filterByAppPersmissions()');
            console.log('globals.settings:', globals.settings);
            console.log('appPermissions: ', appPermissions);
            var appPermissionsIds = appPermissions.permissions.map(function (i) {
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
                    if (appPermissionsIds.indexOf(type.id) >= 0) {
                        setting.display = true;
                        type.isOptedIn = true;
                        type.display = true;
                    }
                });
                console.log('typesIds: ', typesIds);
            });
        };
        globals.filterOutTypesWithoutObj = function (swagger) {
            var pathParameters = {
                "cloudletId": globals.cloudletId
            };
            return new Promise(function (resolve, reject) {
                console.log('filterOutTypesWithoutObj()');
                function getObjectsSuccess(result) {
                    console.log('result: ', result);
                    var objectTypes = {};
                    result.result.forEach(function (item) {
                        var type = item['@openi_type'];
                        if (type) {
                            objectTypes[type] = true;
                        }
                    });
                    Object.keys(globals.settings).forEach(function (settingKey) {
                        var setting = globals[settingKey];
                        var types = setting.types;
                        types.forEach(function (type) {
                            if (objectTypes[type.id]) {
                                type.hasObjects = true;
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
                swagger.apis.objects.getObjects(pathParameters, getObjectsSuccess, getObjectsError);
            });
        };

        return globals;

    });