/**
 * Created by nstasinos on 18/11/2014.
 */

initOPENi(null, function(){
    console.log("OPENi Ready!!!");

    swagger.apis.cloudlets.getCloudlets(function(data){alert("tests.js:8 \n\nTest getCloudlets: \n"+data.data)});
    //checkLoginStatus()
    //loginUser("nikos","nikos","velti",function(token){
    checkLoginStatus(function loggedin(token){

        searchObjects("t_20111c27fee71099a580c6e06332dbd7-163","","",true, token,function(data){
            alert("tests.js:14 \n\nTest Search: \n"+JSON.stringify(data));
        }, function(error){
            console.log(error)
        });

        createObject("c_dc3d3445d0ba68938adc53b9f7b8faed","t_20111c27fee71099a580c6e06332dbd7-163",{test: "nikos-test"}, token, function(data){
            alert("tests.js:20 \n\nTest object created: \n"+JSON.stringify(data));
        })
    },function notloggedin(){
        alert("tests.js:23 \n\nNot loggedin\nLogin here!");
        //redirectToOPENiUserAuth("velti",window.location.href);
        loginUser("nikos","nikos","velti",function(token){
          alert("tests.js:26 \n\nYeaah! Logged in!\n Refresh now. You will be loggedin and a new object will be automatically created")
        },function(error){
            console.log(error)
        });
    });


    //},function(error){
    //    console.log(error)
    //});

}, function(error){
    console.log(error)
});