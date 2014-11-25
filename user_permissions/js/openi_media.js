/**
 * Created by nstasinos on 15/9/2014.
 */

/**
 * Created by nstasinos on 29/8/2014.
 */

settings_profile = [
    ["t_cfd6002df6517180ec479ee9c80a093c-640", $("#openi_images")],
    ["t_4fcb843ee85b823d68efb86ff460076e-362", $("#openi_audios")],
    ["t_394e16bd3ef40a6e114a1ea8bd2a2f57-362", $("#openi_videos")]
];


initSwagger(function () {

    //for (var i = 0; i < 10; i++) {
    searchCloudletObjects(perm_cloudletID, settings_profile[0][0], "", "", "",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0) {
                settings_profile[0][1].css("display", "none");
            }
            else{
                //fill data

                var data = data.result['@data'];
                var countFb=0;
                var countTwit=0;
                var countPin=0;

                data.forEach(function(object){

                   if (object.data.service == "facebook"){
                       countFb++;
                   }
                   else if(object.data.service == "pintrest"){
                       countPin++;
                   }
                   else if (object.data.service == "twitter"){
                       countTwit++
                   }

                });

                if(countFb==0){
                    $("#openi_img_facebook").css("display", "none");
                }
                if(countPin==0){
                    $("#openi_img_pinterest").css("display", "none");
                }
                if(countTwit==0){
                    $("#openi_img_twitter").css("display", "none");
                }

                /*$(" #openi_username").text(data.data.username);
                $(" #openi_usertype").text(data.data.usertype);
                $(" #openi_email").text(data.data.email);
                $(" #openi_password").text(data.data.password);*/
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[1][0], "", "", "",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0) {
                settings_profile[1][1].css("display", "none");
            }
            else{
                //fill data
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[2][0], "", "", "",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0) {
                settings_profile[2][1].css("display", "none");
            }
            else{
                //fill data
            }
        },
        function () {
            console.log("error")
        }
    );

});