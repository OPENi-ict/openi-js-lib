var API_KEY = 'da9dd5a6bbf5c16473b2679e30e1d176'//'396f29e5b59407f4f0b59328c792f918',
	SECRET = '2aedfe62a4f7fb5d94a9fd9c06e3ab6f3fde6f6cfaa7120f1df2cb9d8e9710ca'; //'386295ccde7d2941b0ad90bb56e51332a8fcf6ef055994cf56c3b2504d6c3d09',
	REDIRECT_LINK = 'http://' + location.host + '/index_demo2_permissions.html',
	LOGOUT_LINK = 'http://' + location.host + '/auth/logout',
	OPENI_URL = 'demo2.openi-ict.eu';

console.log('redirectLink: ', REDIRECT_LINK);

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

function redirectPermissions() {

  var host = 'http://195.200.193.50:8888'
  var home = 'http://195.200.193.50:8888/index_demo2_permissions.html';

  redirectToOPENiPermissions (host, home);

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

