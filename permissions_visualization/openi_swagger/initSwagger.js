function initSwagger(auth, cloudletId, server) {
    return new Promise(function (resolve, reject) {
        console.log('initSwagger()');
        if (auth === undefined || cloudletId === undefined || server === undefined) {
            reject('no auth token or cloudlet id found or serverURL have been provided');
        }
        window.swagger = new SwaggerClient({
            url: server,
            success: function () {
                if (swagger.ready === true) {
                    console.log("swagger is ready");
                    resolve();
                } else {
                    var error = "swagger is not ready";
                    console.log(error);
                    reject(error);
                }
            },
            failure: function(){
                console.log("Failure initiating swaggerApi");
                reject();
            }
        });
    });
}