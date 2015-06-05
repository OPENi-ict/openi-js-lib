# Javascript SDK Usage Instructions
-----

## openi\_js\_lib.js  must be included in your javascript project.

## Initiate the SDK with:

    initOPENi(openi_url, api_key, secret_key, redirect_link, function(){

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

## Redirect to OPENi Permission Visualization Page with

    redirectToOPENiPermissions(host, home)
    
    host: (String) the host/host:port which serves the Permission Visualization page.
    home: (string) the URL to be redirected when leaving the Permissions Visualization page.
	
	Instructions: 
	
	1) configure an http server(host:port), to serve the contents of the https://github.com/OPENi-ict/openi-js-lib/tree/master/permissions_visualization folder
	on an HTTP GET http://host:port/permissions_visualization request. This host:port will be used at step 3.
	2) include the https://github.com/OPENi-ict/openi-js-lib/blob/master/openi-js-lib/openi_js_lib.js script to your web application .
	3) When a user has successfully logged in using the redirectToOPENiAuthorization() method, The user can be redirected to the Permission Visualization page by
	 executing the method: redirectToOPENiPermissions (host, home); 

## Demo application

An example web application can be used at:

The following demo uses the Openi API that is deployed on demo2.openi-ict.eu server: 

    http://195.200.193.50:8888/index_demo2.html  

The following demo uses the Openi API that is deployed on the 195.200.193.50 server: 

    http://195.200.193.50:8888/index_demo2.html    
	
The following demo uses the Openi API that is deployed on the demo2.openi-ict.eu server. 
It displays the Permission Visualization functionality.
The Permission Visualization page is being served by the http://195.200.193.50:8888 server.
The source code(index_demo2_permissions.html, test_demo2_permissions.js) for the demo application can be found at https://github.com/OPENi-ict/openi-js-lib/tree/master/demo-js
The demo application is accessible at:

    http://195.200.193.50:8888/index_demo2_permissions.html    




