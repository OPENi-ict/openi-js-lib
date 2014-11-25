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

function getURLparam(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

settings_profile = [
    ["t_04ce46c08270f979662e61955c2ec22f-1650", $("#profile")],
    ["t_fd647de3a0299b8aa11963a970857091-513", $("#wallet")],
    ["t_62972a935f36a48aa910142a419d68db-10776", $("#device")], //context
    ["contact", $("#contact")],
    ["t_cfd6002df6517180ec479ee9c80a093c-640", $("#media")], // photo
    ["t_394e16bd3ef40a6e114a1ea8bd2a2f57-362", $("#media")], // videos
    ["t_4fcb843ee85b823d68efb86ff460076e-362", $("#media")], // audios
    ["webcam", $("#webcam")],
    ["t_70d949d8bcdb410aacf4c453b87c6b14-813", $("#social")], // socialaccount
    ["t_030022c5b33c4159ccaeeba1861a00f0-784", $("#product")],
    ["t_5b3ca8c1463a7d17b11fd69181a1e886-807", $("#health")], // measurement
    ["t_23dabdd642497b312de48a5c7a36b4e2-362", $("#location")]
];

var countElement = -1;

$("#perm_done").click(function(){
    location.replace(getURLparam("redirectURI"))
});

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

    searchCloudletObjects(perm_cloudletID, settings_profile[11][0], "", "", "true",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0){
                settings_profile[11][1].css("display","none");
            }
        },
        function () {
            console.log("error")
        }
    );

    //}
});