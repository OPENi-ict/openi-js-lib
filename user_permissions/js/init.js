/**
 * Created by nstasinos on 29/8/2014.
 */

var urlServer = "https://"+window.location.host+"/api-spec/v1";
// http://openi-qa.velti.com:8888/api-spec/v1/cloudlet
var perm_cloudletID = localStorage.cid;
var openiUserAuthPath = "/openi-js-auth/openi_account/openi_account.html";

// should get it from the authentication procedure
if (!(getURLparam("OUST") == null) && localStorage.OUST == null){
    localStorage.setItem("OUST", getURLparam("OUST")); //"c_7ed0cc5cbf0b147165b67ade0091ce46-90";
    var perm_OUST = localStorage.OUST;
}
else if (!(localStorage.OUST == null)){
    var perm_OUST = localStorage.OUST;
}
else {
    alert("No Session Key!\nSorry! Try again!")
}

function getCloudletIdFromSessionsKey(success, ccerror){
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
        localStorage.setItem("OUAT", token);
        var args = {
            "Authorization": token
        };

        swagger.apis.cloudlets.getCloudletId(args, function(data){
            perm_cloudletID = JSON.parse(data.data)["@id"];
            localStorage.setItem("cid", perm_cloudletID);
            success()
        }, function(error){
            alert("Couldn't get cloudlet ID")
            console.log(error);
        });

    }, function (ferror) {
        ccerror(ferror)
    });
}

function checkLoginStatus(loggedIn, notLoggedIn){
    if (localStorage.OUAT == undefined || localStorage.OUAT == null){
        // redirect user to login?
        console.log("User not authenticated!!!");
        notLoggedIn();
    }
    else {
        var openi_token = localStorage.OUAT;
        loggedIn(openi_token);
    }
}

function initSwagger(success) {
    window.swagger = new SwaggerApi({
        url: urlServer,
        success: function () {
            if (swagger.ready === true) {
                console.log("swagger is ready");

                if ((localStorage.OUST == undefined || localStorage.cid == undefined) && getURLparam("OUST") != null && getURLparam("clientId") != null)
                    getCloudletIdFromSessionsKey(function(){
                        success();
                    });
                else {
                    //alert("No client id and session key in url");
                    checkLoginStatus(function loggedIn(){
                        success();
                    }, function notLoggedIn(){
                        alert("Not Logged In!!!")
                        location.replace("http://" + window.location.host + openiUserAuthPath + "?clientId=" + getURLparam("clientId") + "&redirectURI=" + window.location.href)

                    });

                }

                // Check if cloudlet was created in the past
                // todo check this
                /*searchObjects("","name,birthDate",function(data,revision){
                    console.log(data)
                });*/
                /*if (localStorage.cloudletId) {
                    console.log("CloudletId: " + localStorage.cloudletId);
                } else {

                }*/
            } else {
                console.log("swagger is not ready");
            }
        },
        failure: function(){
            console.log("Failure initiating swaggerApi")
        }
    });
}

function getObjectWithID(cloudletId, objectId, success, error){
    var token = localStorage.OUAT;
    var args = {
        cloudletId: cloudletId,
        objectId: objectId,
        "Authorization": token
    };
    swagger.apis.objects.getObject(args, function (response) {
        var data = JSON.parse(response.data);
        //var data = JSON.parse(upperData._data.string);
        //var revision = upperData._revision;
        success(data)
    }, function (swagger_error){
        console.log(swagger_error);
        error(swagger_error);
    });
}

function searchCloudletObjects(cloudletId, type, with_property, property_filter, id_only, success, error){
    var token = localStorage.OUAT;
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

function searchObjects(type, with_property, property_filter, id_only, success, error){
    var token = localStorage.OUAT;
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

function getURLparam(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}
//initSwagger();
