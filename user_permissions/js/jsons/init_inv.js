/**
 * Created by nstasinos on 4/9/2014.
 */


var urlServer = "http://openi-qa.velti.com:8888/api-spec/v1/cloudlet";

function initSwagger(success) {
    window.swagger = new SwaggerApi({
        url: urlServer,
        success: function () {
            if (swagger.ready === true) {
                console.log("swagger is ready");
                success();

            } else {
                console.log("swagger is not ready");
            }
        },
        failure: function () {
            console.log("Failure initiating swaggerApi")
        }
    });
}

initSwagger(function () {
    var typesJson;

    $.get("typesJson", function (respons) {
        typesJson = respons;
        swagger.apis.types.createType(typesJson,
        function(response){
            console.log(response);
        },
        function (error){
            console.log(error);
        })
    });

});