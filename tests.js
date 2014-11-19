/**
 * Created by nstasinos on 18/11/2014.
 */

initOPENi(function(){
    console.log("OPENi Ready!!!");

    swagger.apis.cloudlets.getCloudlets(function(data){console.log("Test: \n"+data.data)});

    loginUser("nikos","nikos","velti",function(token){

        searchObjects("t_20111c27fee71099a580c6e06332dbd7-163","","",true, token,function(data){
            console.log("Test Search: \n"+JSON.stringify(data));
        }, function(error){
            console.log(error)
        });

        createObject("c_dc3d3445d0ba68938adc53b9f7b8faed","t_20111c27fee71099a580c6e06332dbd7-163",{test: "nikos-test"}, token, function(data){
            console.log("Test object: \n"+JSON.stringify(data));
        })

    },function(error){
        console.log(error)
    });

}, function(error){
    console.log(error)
});