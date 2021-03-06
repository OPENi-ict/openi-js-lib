/**
 * Created by nstasinos on 18/11/2014.
 */

console.log('open-js-lib.js');

var api_key='';
var secret_key='';
var redirectlink='';
var urlServer = "";
var openi_token = null;
var global_openi_domain = "";

//var permissions='';

//this is for VM testing
//var AuthBackendSrv = "https://10.130.34.17/auth/account";
var logoutlink = "";


//this is for local testing
//var AuthBackendSrv = "";

//When done, must be set to demo2.openi-ict.eu
var AuthBackendSrv = "http://demo2.openi-ict.eu/auth/account";





//===============================================
//                 OPENi utilities
//===============================================



//This function redirects to Authentication Server for login/register.
// Get the permissions array grom the file at the provided link 
//Encode it in Base64, prepare the link with api_key, secret, redirect link and permissions string
//and redirect to it

function redirectToOPENiAuthorization() {

    //TODO: Switch codes to revert to Base 64 method
    //console.log("Redirecting...");
    //console.log('Permissions file at:'+permissions);
    //getPermissionsFile(permissions, function (prm) {
    //Base64 encoding of the array
    //var encodedPerms = window.btoa(prm);
    ////add parameters to link
    //var link = AuthBackendSrv + '?api_key=' + api_key + "&secret=" + secret_key + "&redirectURL=" + redirectlink + "&appPerms=" + encodedPerms;
    //location.replace(link);
    //}, function (err) {
    //    console.log("Error parsing permissions file");
    //    console.log(err);
    //    error(err);
    //});

    console.log("Redirecting...");
    //add parameters to link
    var link = AuthBackendSrv + '?api_key=' + api_key + "&secret=" + secret_key + "&redirectURL=" + redirectlink;
    console.log('link: ', link);
    location.replace(link);

}

function redirectToOPENiPermissions (_host, _homeUrl) {

    if (typeof(_host) === 'undefined' || _host === null) {
        console.log('host is not specified');
        return;
    }

    function getUrlParameter(urlParam) {
        var pageURL = window.location.search.substring(1);
        var urlVariables = pageURL.split('&');
        for (var i = 0; i < urlVariables.length; i++) {
            var parameterName = urlVariables[i].split('=');
            if (parameterName[0] == urlParam) {
                return parameterName[1];
            }
        }
    }

    var authToken = null;
    if (typeof(openi_token) !== 'undefined' && openi_token !== null) {
        authToken = openi_token;
    } else {
      authToken = getUrlParameter('OUST');
    }


    if (authToken) {
        var url = _host +
            '/permissions_visualization/index.html?api_key='
            + API_KEY +
            '&secret=' +
            SECRET +
            '&oust=' +
            authToken;
        if (typeof(_homeUrl) !== 'undefined' && _homeUrl !== null) {
            url = url + '&home_url=' + _homeUrl + '&OUST=' + authToken;
        }
        console.log('url: ', url);
        location.replace(url);
    } else {
        console.log('no auth token is specified');
    }

}


//Helping function that makes an api call to OPENi to retrieve the permissions
//To be used at redirect to Auth Server and for checking login status


//function getPermissionsFile(perms,success, error) {
function getPermissionsFile(success, error) {

    console.log("Redirecting: Getting app permissions...");

    //// TODO: Switch codes once app_perms integrated. (Check nickname for correct call to app_permissions
    var args = {
        "Authorization": openi_token,
        "api_key": api_key
    };
    console.log(openi_token);
    swagger.apis.permissions.getAppPermissionsByApiKey(args, function (response) {
        //var data = JSON.parse(response.data);
        console.log(response.obj.result.permissions);
        success(response.obj.result.permissions)
    }, function (swagger_error) {
        //error with swagger call
        console.log(swagger_error);
        error(swagger_error);
    });
    
    
    //try {
    //    var xmlhttp=new XMLHttpRequest();
    //    xmlhttp.onreadystatechange = function() {
    //        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //            success(xmlhttp.responseText);
    //        }
    //    };
    //    xmlhttp.open("GET", perms, true);
    //    xmlhttp.send();
    //}
    //catch (err) {
    //
    //    console.log("ERRROR on AJAX call to permissions file");
    //    error(err);
    //}

}



// Creates the Header Object needed for making OPENi API Calls. Returns a JSON object with the attribute "Authorization" set to OPENi token
// checkloginstatus to get token

function addTokenHeader(success, error) {

    console.log("checking validity");

    checkLoginStatus(function (token) {

        // Token exists and valid
        console.log("Valid token. Return header");
        var args = {"Authorization": token};
        success(args);

    }, function (notlogged) {

        //user didn't log in
        error(notlogged);

    }, function (permden) {

        //permissions denied
        error(permden);

    });
}


//
//  checkLoginStatus checks if user has already logged in (token exists and is valid). If so, return token
//  Distinction between not logged in users and users who have denied permissions

function checkLoginStatus(loggedIn, notLoggedIn, permissionsDenied) {
    if (localStorage.OUAT == undefined || localStorage.OUAT == null) {
        // Token not found. User is not already logged in
        console.log("User not authenticated!!!");
        notLoggedIn("Token not found in local storage");
    }
    else {
        console.log("Token Found. Validating token...");
        openi_token = localStorage.OUAT;

        //check if token is valid:
        //call OPENi to get cloudlet id.
        var args = {"Authorization": openi_token};
        swagger.apis.cloudlets.getCloudletId(args, function (response) {
            var data = JSON.parse(response.data);

            //check if we got valid id from call. If yes, token is valid
            if (typeof data['@id'] != 'undefined') {

                console.log("Token is valid. Checking permissions");

                //Get permissions array from link and permissions from OPENi
                //Check if permissions from link exist in permissions from OPENi (with comparePermissions function)
                //if yes, then user has accepted these permissions --> logged in
                //if not, user has denied permissions --> permissions denied

                
                getPermissionsFile(function (perms){


                    //var appPerms = JSON.parse(perms);
                    //appPerms = appPerms.permissions;

                    var args = {"Authorization": openi_token};
                    console.log(openi_token);
                    swagger.apis.permissions.getPermissions(args, function (response) {
                        var data = JSON.parse(response.data);
                        console.log(data);
                        
                        //if (comparePermissions(data,appPerms)) {
                        if (comparePermissions(data,perms)) {

                        console.log("Permissions found. User logged in");
                            loggedIn(openi_token);
                        } else {
                            console.log("Permissions denied.");
                            permissionsDenied(openi_token)
                        }

                    }, function (swagger_error) {
                        //error with swagger call, or Permissions not found
                        console.log(swagger_error);
                        permissionsDenied(openi_token)                    
                    });

                }, function (error) {
                    //error with permissions file
                    notLoggedIn();

                });

            } else {
                console.log("Token invalid");
                notLoggedIn();
            }

        }, function (swagger_error) {
            //error with swagger call
            console.log(swagger_error);
            notLoggedIn(swagger_error);
        });
    }
}


//initOPENi loads scripts needed to initiate swagger

//function initOPENi(openi_domain,apikey, secret, redirectLink, permss, success, error) {
function initOPENi(openi_domain,apikey, secret, redirectLink, success, error) {

    console.log('apiKey: ', apikey);
    console.log('secret: ', secret);

    if (openi_domain != null || openi_domain != undefined) {
        urlServer = "https://" + openi_domain + "/api-spec/v1";
        global_openi_domain = openi_domain
    }
    loadScript("https://" + global_openi_domain + "/api-docs/lib/shred.bundle.js", function () {
        loadScript("https://" + global_openi_domain + "/api-docs/lib/swagger.js", function () {
            //function initSwagger(success) {
            window.swagger = new SwaggerApi({
                url: urlServer,
                success: function () {
                    if (swagger.ready === true) {
                        console.log("swagger is ready");



                       AuthBackendSrv =  "https:/"+ global_openi_domain+"/auth/account";
                       logoutlink = "https:/"+global_openi_domain + "/auth/logout";


                        api_key = apikey;
                        secret_key = secret;
                        redirectlink = redirectLink;
                        console.log('redirectLink: ', redirectlink);
                        // permissions=perms;


                        if (!(getURLparam("OUST") == null)) {
                            //Token exists in URL, save ti to local storage
                            console.log("Session token in url");
                            localStorage.setItem("OUAT", getURLparam("OUST"));
                            success();
                        }
                        else {
                            console.log("Session token not in url");
                            success();
                        }

                    } else {
                        console.log("swagger is not ready");
                    }
                },
                failure: function () {
                    console.log("Failure initiating swaggerApi");
                    //alert("Failure initiating swaggerApi");
                    error("Failure initiating swaggerApi")
                }
            });
        });
    });
}


//logout user, delete token from local storage

function OPENi_logout(success, error) {

    if (localStorage.OUAT == undefined || localStorage.OUAT == null) {
        // Cannot logout. User already logged out?
        console.log("Error logging out. Token not found");
        error("Error logging out. Token not found");
    }
    else {
        openi_token = null;
        localStorage.OUAT = null;
        console.log("Token deleted");
        location.replace(logoutlink);
    }
}

//==============================
//          js utils
//==============================
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        // IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        // Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function getURLparam(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false
    }
}

//Helping function to check if permissions from app (appperms) are included in the permissions found at OPENi (totalperms)
//Caution: Order matters

function comparePermissions (totalperms, appperms) {

    var same =true;
    var bigstring = JSON.stringify(totalperms);
    var smallstring = '';

    console.log(bigstring);
    //console.log(JSON.stringify(appperms[0]));
    for (var key in appperms) {

        //console.log(appperms[key]);
        smallstring = JSON.stringify(appperms[key]);
        //console.log(smallstring);
        if (bigstring.indexOf(smallstring)== -1) {
            same = false;
            break;
        }
    }
    return same;
}




//These should be deleted


//===============================================
//          Redundant functions
//===============================================

//
//function addTokenHeader2(token) {
//    window.authorizations.add("key", new ApiKeyAuthorization("Authorization", token, "header"));
//}


// temp
// TOD check if logged in
//function redirectToOPENiUserPermissions(clientId, redirectURI) {
//    window.open("http://" + global_openi_domain + openiUserPermPath + "?clientId=" + clientId + "&OUST=" + localStorage.OUST + "&redirectURI=" + redirectURI, "_blank")
//}
//
//function redirectToOPENiUserAuth(clientId, redirectURI) {
//    location.replace("http://" + global_openi_domain + openiUserAuthPath + "?clientId=" + clientId + "&redirectURI=" + redirectURI)
//}
// /temp

//
//  create/login user should redirect to OPENi account page (or use an iframe?)
//

//function createUser(username, password, success, error) {
//
//    console.log("Creating cloudlet/user");
//    var json = JSON.stringify({
//        "name": username,
//        "password": password
//    });
//
//    //console.log(json);
//    if (isValidJSON(json)) {
//        swagger.apis.simple_auth.createUser({
//            body: json
//        }, function (response) {
//            console.log(response);
//            if (response.status == 200) {
//                console.log("Cloudlet/User created successfully.");
//                success()
//            }
//        }, function (ferror) {
//            console.log(ferror);
//            error(ferror)
//        });
//    } else {
//        console.log("json is invalid");
//    }
//}

//function loginUser(username, password, api_key, secret, success, error) {
//    console.log("logging in user");
//    var json = JSON.stringify({
//        "name": username,
//        "password": password,
//        "api_key": api_key,
//        "secret": secret
//    });
//
//    swagger.apis.simple_auth.getAuthToken({
//        body: json
//            }, function (response) {
//                console.log(response);
//                var data = JSON.parse(response.data);
//                var token = data.token;
//                openi_token = token;
//                localStorage.setItem("OUAT", token);
//                success(token);
//            }, function (ferror) {
//                error(ferror);
//            });
//}

/*function loginWithSessionTokenURL(success, lerror){
 var session = getURLparam("OUST");
 var clientId = getURLparam("clientId");
 localStorage.setItem("OUST", session);
 var json = JSON.stringify({
 "session": session,
 "client_id": clientId
 });
 swagger.apis.simple_auth.authorizeClient({
 body: json
 }, function (response) {
 console.log(response);
 var data = JSON.parse(response.data);
 var token = data.token;
 openi_token = token;
 localStorage.setItem("OUAT", token);
 success(token);
 }, function (ferror) {
 lerror(ferror);
 })
 }*/

//function getObjectWithID(cloudletId, objectId, token, success, error){
//    var args = {
//        cloudletId: cloudletId,
//        objectId: objectId,
//        "Authorization": token
//    };
//    swagger.apis.objects.getObject(args, function (response) {
//        var data = JSON.parse(response.data);
//        //var data = JSON.parse(upperData._data.string);
//        //var revision = upperData._revision;
//        success(data)
//    }, function (swagger_error){
//        console.log(swagger_error);
//        error(swagger_error);
//    });
//}

//function createObject(cloudletId, typeId, data, token, success, error){
//    console.log("Creating object");
//    var args = {
//        "cloudletId": cloudletId,
//        "Authorization": token
//    };
//    args.body = JSON.stringify({
//        "@openi_type": typeId,
//        "@data": data
//    });
//    if (isValidJSON(args.body)) {
//        swagger.apis.objects.createObject(args, function (response) {
//            console.log(response);
//            if (response.status == 201) {
//                console.log("Object created successfully.");
//                var objectId = JSON.parse(response.data);
//                success (objectId)
//            }
//        }, function (error) {
//            console.log(error);
//            error(error)
//        });
//    } else {
//        console.log("json is invalid");
//        error("Invalid JSON")
//    }
//}

//function searchCloudletObjects(cloudletId, type, with_property, property_filter, id_only, token, success, error){
//
//    if (with_property == "" && property_filter == ""){
//        var args = {
//            cloudletId: cloudletId,
//            type: type,
//            id_only: id_only
//        };
//    }
//    else if (with_property == "" && property_filter !== ""){
//        var args = {
//            cloudletId: cloudletId,
//            type: type,
//            id_only: id_only,
//            property_filter: property_filter
//        };
//    }
//    else if(with_property !== "" && property_filter == ""){
//        var args = {
//            cloudletId: cloudletId,
//            type: type,
//            id_only: id_only,
//            with_property: with_property
//        };
//    }
//    else {
//        var args = {
//            cloudletId: cloudletId,
//            type: type,
//            with_property: with_property,
//            id_only: id_only,
//            property_filter: property_filter
//        };
//    }
//
//    args["Authorization"] = token;
//
//    swagger.apis.objects.getObjects(args, function (response) {
//        var data = JSON.parse(response.data);
//        //var data = JSON.parse(upperData._data.string);
//        //var revision = upperData._revision;
//        success(data)
//    }, function (swagger_error){
//        console.log(swagger_error);
//        error(swagger_error);
//    });
//}


//helping function for checks

//function searchObjects(type, with_property, property_filter, id_only, token, success, error) {
//
//    if (with_property == "" && property_filter == "") {
//        var args = {
//            type: type,
//            id_only: id_only
//        };
//    }
//    else if (with_property == "" && property_filter !== "") {
//        var args = {
//            type: type,
//            id_only: id_only,
//            property_filter: property_filter
//        };
//    }
//    else if (with_property !== "" && property_filter == "") {
//        var args = {
//            type: type,
//            id_only: id_only,
//            with_property: with_property
//
//        };
//    }
//    else {
//        var args = {
//            type: type,
//            with_property: with_property,
//            id_only: id_only,
//            property_filter: property_filter
//        };
//    }
//    if (type == "" || type == null) {
//        delete args.type;
//    }
//
//    args["Authorization"] = token;
//
//    swagger.apis.search.search(args, function (response) {
//        var data = JSON.parse(response.data);
//        //var data = JSON.parse(upperData._data.string);
//        //var revision = upperData._revision;
//        success(data)
//    }, function (swagger_error) {
//        console.log(swagger_error);
//        error(swagger_error);
//    });
//}
