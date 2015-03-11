var API_KEY = 'bcc2b5e0ec51576872c4d316542c82db',
	SECRET = '993c4004bf44e624fc5561f5b71adf708cb9db54a67519699c22ee19ca9fff78',
	REDIRECT_LINK = 'http://' + location.host + '/index.html',
	LOGOUT_LINK = 'http://' + location.host + '/auth/logout',
	OPENI_URL = 'demo2.openi-ict.eu';

function showtoken () {

    addTokenHeader(
		function (args){
			swagger.apis.cloudlets.getCloudletId(
				args, 
				function (response) {
					var data = JSON.parse(response.data);
					console.log("Search result");
					console.log(data);
					alert("Your Cloudlet is:"+ data["@id"]);
				}, function (swagger_error){
					console.log(swagger_error);
					alert(swagger_error);
				}
			);
		}, function (error){
			console.log("Error searching cloudlets");
			alert(error);
		}
    );
	
}

function redirect () {

    redirectToOPENiAuthorization();
	
}

function logouttoken() {
    
	function onLogoutError(error) {
		console.log(error);
	}
	
    OPENi_logout(onLogoutError);
	
}

initOPENi(OPENI_URL, API_KEY, SECRET, REDIRECT_LINK, function(){

    console.log("OPENi Ready!");
	
	function loggedIn(token) {
		var msg = 'You are logged in! Press the button to view your Cloudlet ID.';
		console.log(msg);
		alert(msg);
	}
	
	function loggedOut() {
		var msg = 'Not loggedin\n Press the button to be redirected to OPENi Authorization page.';
		console.log(msg);
		alert(msg);
	}
	
	function permissionDenied(permd) {
		alert("Permissions denied");
		console.log(permd);
	}
	
    checkLoginStatus(loggedIn, loggedOut, permissionDenied);
	
});
