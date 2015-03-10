/**
 * Created by nstasinos on 18/11/2014.
 */


//var api_key = '0708440d4cd754b6e1657304679b70ea';
//var secret = 'c2NyeXB0AA4AAAAIAAAAAXflSF73QiPrsZ1JAabGGKn1cf77uhMrZOcxtk8Qa3VEkuP%2FtZCum2BzAFXNHklLMu1Ur8lqdmJVMRFkYoK0ImKhvEKSDRbdL%2BL5Yga3Aj%2Fx';

var api_key = 'bcc2b5e0ec51576872c4d316542c82db';
var secret = '993c4004bf44e624fc5561f5b71adf708cb9db54a67519699c22ee19ca9fff78';

var redirectLink = 'http://' + location.host + '/index.html';
var logoutlink = location.host + "/auth/logout";



function showtoken () {

    addTokenHeader(function (args){

            //token must be in args, so that we can use openi calls
            //test a search with auth token

            swagger.apis.cloudlets.getCloudletId(args, function (response) {
                var data = JSON.parse(response.data);
                console.log("Search result");
                console.log(data);
                alert("Your Cloudlet is:"+ data["@id"]);
            }, function (swagger_error){
                console.log(swagger_error);
                alert(swagger_error);
            });

        }
        , function (error){
            console.log("Error searching cloudlets");
            alert(error);
        }
    );
}

function redirect () {

    redirectToOPENiAuthorization();


}

//demo2.openi-ict.eu

function logouttoken() {
    
    OPENi_logout(function (error) {
        console.log(error);

    })
}

initOPENi("demo2.openi-ict.eu",api_key, secret, redirectLink, function(){
//initOPENi("10.130.34.17",api_key, secret, redirectLink, permissions, function(){

    console.log("OPENi Ready!!!");


    checkLoginStatus(function (token){

        alert("tests.js:12 \n\nYou re logged in! Press the button to view your Cloudlet ID");
        //alert(token);


    },function (){

        alert("tests.js:117 \n\nNot loggedin\n Press the button to be redirected to OPENi Auth page.");


        //addTokenHeader(function (args){
        //
        //
        //        //token must be in args, so that we can use openi calls
        //        //test a search with auth token
        //
        //
        //        console.log("return of the jedi");
        //        args["type"] = type;
        //        args["id_only"] = idonly;
        //        args["property_filter"] = propfilt;
        //        console.log(args);
        //
        //        swagger.apis.search.search(args, function (response) {
        //            var data = JSON.parse(response.data);
        //            console.log("Search result");
        //            console.log(data);
        //        }, function (swagger_error){
        //            console.log(swagger_error);
        //            alert(swagger_error);
        //        });
        //
        //    }
        //    , function (error){
        //        console.log("Error adding token header");
        //        alert(error);
        //    }
        //);

        /*loginUser("nikos","nikos","velti",function(token){
         alert("tests.js:26 \n\nYeaah! Logged in!\n Refresh now. You will be loggedin and a new object will be automatically created")
         },function(error){
         console.log(error)
         });*/

    }, function(permd){

        //permissions are denied. Proceed accordingly

        alert("Permissions denied");
        console.log(permd)
    });



});
