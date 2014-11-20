/**
 * Created by nstasinos on 2/9/2014.
 */

// http://193.1.188.34/api/v1/types/t_14f85e8217f0880d706e262514565d34-148

// user
// http://193.1.188.34/api/v1/types/t_9092219c4475ab750ceb05a34a40f912-328

// media
// photo
// http://193.1.188.34/api/v1/types/t_601325fb6e6fe6ae23c3cfe70b0b7faa-219

// video
// http://193.1.188.34/api/v1/types/t_23a3b1e5f94fa4075703c44c57d7b6d2-219


settings_profile = [
    ["t_04ce46c08270f979662e61955c2ec22f-1650", $("#profile")],
    ["wallet", $("#wallet")],
    ["t_7ea9e1db966accdd139222c9d33202bc-804", $("#device")],
    ["contact", $("#contact")],
    ["t_23a3b1e5f94fa4075703c44c57d7b6d2-219", $("#media")],
    ["t_23a3b1e5f94fa4075703c44c57d7b6d2-219", $("#media")],
    ["webcam", $("#webcam")],
    ["t_0e09a80a6411bb7203e1d4e3bd1fc85f-321", $("#social")],
    ["product", $("#product")],
    ["t_30f13a9ed5288a2d7960ede0a9157e28-981", $("#health")],
    ["location", $("#location")]
];

var countElement = -1;

initSwagger(function () {

    //var typesJson;

    /*$.get("typesJson", function (respons) {
        var typesJson = respons;
        //var args.body= typesJson
        swagger.apis.types.createTypes({body: typesJson},
            function(response){
                console.log(response);
            },
            function (error){
                console.log(error);
            })
    });

    $.get("typesJson2", function (respons) {
        var typesJson = respons;
        swagger.apis.types.createType({body: typesJson},
            function(response){
                console.log(response);
            },
            function (error){
                console.log(error);
            })
    });

    typesJson = '{"@context": [{"@property_name": "test2","@property_context": {"@id": "test2","@openi_type": "string"}}],"@reference": "openi/test2"}';
    swagger.apis.types.createType({body: typesJson},
        function(response){
            console.log(response);
        },
        function (error){
            console.log(error);
        });*/



    //for (var i = 0; i < 10; i++) {
        searchCloudletObjects(perm_cloudletID, settings_profile[0][0], "" , "", "true",
            function (data) {
                console.log(data);
                //countElement++;
                if (data.result.length == 0){
                    settings_profile[0][1].css("display","none");
                }
            },
            function () {
                console.log("error")
            }
        );


    searchCloudletObjects(perm_cloudletID, settings_profile[1][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[1][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[2][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[2][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[3][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[3][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[4][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                searchCloudletObjects(perm_cloudletID, settings_profile[5][0], "", "", "true",
                    function (data) {
                        console.log(data);
                        //countElement++;
                        if (data.result.length == 0){
                            settings_profile[5][1].css("display","none");
                        }
                    },
                    function () {
                        console.log("error")
                    }
                );
            }


        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[6][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[6][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[7][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[7][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[8][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[8][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[9][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[9][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[10][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[10][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    //}
});