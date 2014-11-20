/**
 * Created by nstasinos on 29/8/2014.
 */

// https://openi-platform.velti.com/api/v1/types/t_d25d6cb49f2226ab412057bce7ad9a99-735
settings_profile = [
    ["t_04ce46c08270f979662e61955c2ec22f-1650", $("#profile")],
    ["t_3190edacd5200de9d7084895250306af-1195", [$("#openi_printrest_cont"),$("#openi_facebook_cont"),$("#openi_twitter_cont")]] //Account
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
                var data = data[0]['@data'];
                $(" #openi_username").text(data.result.username);
                $(" #openi_firstname").text(data.result.first_name);
                $(" #openi_lastname").text(data.result.last_name);
                $(" #openi_email").text(data.result.email);
                $(" #openi_password").text(data.result.password);
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[1][0], "", "service=facebook", "",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0) {
                settings_profile[1][1][0].css("display", "none");
            }
            else{
                //fill data
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[1][0], "", "service=pintrest", "",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0) {
                settings_profile[1][1][1].css("display", "none");
            }
            else{
                //fill data
            }
        },
        function () {
            console.log("error")
        }
    );

    searchCloudletObjects(perm_cloudletID, settings_profile[1][0], "", "service=twitter", "",
        function (data) {
            console.log(data);
            //countElement++;
            if (data.result.length == 0) {
                settings_profile[1][1][2].css("display", "none");
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