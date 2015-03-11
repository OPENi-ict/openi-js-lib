# Javascript SDK Usage Instructions
-----

## openi\_js\_lib.js  must be included in your javascript project.

## Initiate the SDK with:

    initOPENi(domain,api_key, secret_key, redirect_link, permissions_file_link, function(){

		//OPENi is initiated here

	}, function (error) {

    	//error initiating OPENi

    });



## Check login status to OPENi with:

	checkLoginStatus(function (token){
			
		//User is logged in
        
	},function(){

		//User is not logged in

	}, function(permd){

		//User has denied permissions
	});

## Get Header object for API calls, with the Authorization header set:

	addTokenHeader(function (args){
				
		//Authorization header contained in args object

	}), function (error) {

          	//error setting OPENi Authorization Token Header

    });
    
- OPENi API calls require an object containing the appropriate headers. The addTokenHeader function generates this object,
 with the Authorization header set to the OPENi Authorization Token. Additional headers may need to be set, depending on
 the API call

## OPENi calls can be executed inside the addTokenHeader function as such:

	addTokenHeader(function (args){

		//Authorization Token Header set in args object, use it to make API calls
				
		//Example: Search cloudlets based on type and properties 
		
		//Set additional headers specific to the search API call:
		args["type"] = 't_20111c27fee71099a580c6e06332dbd7-163';
		args["id_only"] = '';
		args["property_filter"] = '';

		//search API call:
		swagger.apis.search.search(args, function (response) {
			var data = JSON.parse(response.data);
			//handle result data

			}, function (swagger_error){
                  
				//handle API call error case
			});

	}, function (error){

		//handle error case of setting OPENi Authorization Token Header
	});

## Logout user with:

    OPENi_logout(function () {
		//User succesfully logged out
    }, function (error) {
		//Handle error on logout
    })
    
## Redirect to OPENi Authorization Page with
    redirectToOPENiAuthorization()

## Demo application

An example web application can be used at:

    http://195.200.193.50:8888/index_demo2.html

