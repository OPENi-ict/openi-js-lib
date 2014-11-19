/**
 * Created by nstasinos on 18/11/2014.
 */

var urlServer = "https://demo2.openi-ict.eu/api-spec/v1";
var openi_token = null;

//
//      js utils
//

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

function getURLparam(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function isValidJSON(str){
    try{
        JSON.parse(str);
        return true;
    }
    catch(e) {
        return false
    }
}

/* ============================
*       OPENi utilities
*  ============================*/

function addTokenHeader(token) {
    window.authorizations.add("key", new ApiKeyAuthorization("Authorization", token, "header"));
}

function createUser(username, password, success, error) {

    console.log("Creating cloudlet/user");
    var json = JSON.stringify({
        "name": username,
        "password": password
    });

    //console.log(json);
    if (isValidJSON(json)) {
        swagger.apis.simple_auth.createUser({
            body: json
        }, function (response) {
            console.log(response);
            if (response.status == 200) {
                console.log("Cloudlet/User created successfully.");
                success()
            }
        }, function (ferror) {
            console.log(ferror);
            error(ferror)
        });
    } else {
        console.log("json is invalid");
    }
}

function loginUser(username, password, clientId, success, error) {
    console.log("logging in user");
    var json = JSON.stringify({
        "name": username,
        "password": password
    });

    swagger.apis.simple_auth.login({
        body: json
    }, function (response) {
        console.log(response);
        if (response.status == 200) {
            var data = JSON.parse(response.data);
            var session = data.session;
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
                success(token);
            }, function (ferror) {
                error(ferror);
            })
        }
    }, function (ferror) {
        error(ferror);
    });

}

function createObject(cloudletId, typeId, data, token, success, error){
    console.log("Creating object");
    var args = {
        "cloudletId": cloudletId,
        "Authorization": token
    };
    args.body = JSON.stringify({
        "@openi_type": typeId,
        "@data": data
    });
    if (isValidJSON(args.body)) {
        swagger.apis.objects.createObject(args, function (response) {
            console.log(response);
            if (response.status == 201) {
                console.log("Object created successfully.");
                var objectId = JSON.parse(response.data);
                success (objectId)
            }
        }, function (error) {
            console.log(error);
            error(error)
        });
    } else {
        console.log("json is invalid");
        error("Invalid JSON")
    }
}

function searchCloudletObjects(cloudletId, type, with_property, property_filter, id_only, token, success, error){

    if (with_property == "" && property_filter == ""){
        var args = {
            cloudletId: cloudletId,
            type: type,
            id_only: id_only
        };
    }
    else if (with_property == "" && property_filter !== ""){
        var args = {
            cloudletId: cloudletId,
            type: type,
            id_only: id_only,
            property_filter: property_filter
        };
    }
    else if(with_property !== "" && property_filter == ""){
        var args = {
            cloudletId: cloudletId,
            type: type,
            id_only: id_only,
            with_property: with_property
        };
    }
    else {
        var args = {
            cloudletId: cloudletId,
            type: type,
            with_property: with_property,
            id_only: id_only,
            property_filter: property_filter
        };
    }

    args["Authorization"] = token;

    swagger.apis.objects.getObjects(args, function (response) {
        var data = JSON.parse(response.data);
        //var data = JSON.parse(upperData._data.string);
        //var revision = upperData._revision;
        success(data)
    }, function (swagger_error){
        console.log(swagger_error);
        error(swagger_error);
    });
}

function searchObjects(type, with_property, property_filter, id_only, token, success, error){

    if (with_property == "" && property_filter == ""){
        var args = {
            type: type,
            id_only: id_only
        };
    }
    else if (with_property == "" && property_filter !== ""){
        var args = {
            type: type,
            id_only: id_only,
            property_filter: property_filter
        };
    }
    else if(with_property !== "" && property_filter == ""){
        var args = {
            type: type,
            id_only: id_only,
            with_property: with_property

        };
    }
    else {
        var args = {
            type: type,
            with_property: with_property,
            id_only: id_only,
            property_filter: property_filter
        };
    }
    if (type == "" || type == null){
        delete args.type;
    }

    args["Authorization"] = token;

    swagger.apis.search.search(args, function (response) {
        var data = JSON.parse(response.data);
        //var data = JSON.parse(upperData._data.string);
        //var revision = upperData._revision;
        success(data)
    }, function (swagger_error){
        console.log(swagger_error);
        error(swagger_error);
    });
}

function initOPENi(success, error){
    loadScript("https://demo2.openi-ict.eu/api-docs/lib/shred.bundle.js", function () {
        loadScript("https://demo2.openi-ict.eu/api-docs/lib/swagger.js", function () {
            //function initSwagger(success) {
            window.swagger = new SwaggerApi({
                url: urlServer,
                success: function() {
                    if (swagger.ready === true) {
                        console.log("swagger is ready");
                        success();
                    } else {
                        console.log("swagger is not ready");
                    }
                },
                failure: function() {
                    console.log("Failure initiating swaggerApi");
                    alert("Failure initiating swaggerApi");
                    error("Failure initiating swaggerApi")
                }
            });
        });
    });
}

//initOPENi();