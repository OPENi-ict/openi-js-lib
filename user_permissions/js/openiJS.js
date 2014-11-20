/**
 * Created by nstasinos on 7/10/2014.
 */

var urlServer = "https://demo2.openi-ict.eu/api-spec/v1/cloudlet"; //"https://"+window.location.host+"/api-spec/v1/cloudlet";

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



function openiLogin(clientId, redirectURI, success, error){

}

function checkLoginToken(clientId){

}


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