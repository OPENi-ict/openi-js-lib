/**
 * Created by nstasinos on 7/10/2014.
 */

var urlServer = "https://demo2.openi-ict.eu/api-spec/v1"; //"https://"+window.location.host+"/api-spec/v1/cloudlet";

if (!(getURLparam("clientId") == null)) {
    var clientId = getURLparam("clientId")
}
else {
    alert("No clientId!")
}

if (!(getURLparam("redirectURI") == null)) {
    var redirectURI = getURLparam("redirectURI");
    localStorage.setItem("redirectURI", redirectURI);
}
else {
    alert("No redirectURI!")
}

/*if (!(getURLparam("redirectDomain") == null)) {
    var redirectDomain = getURLparam("redirectDomain");
    localStorage.setItem("redirectDomain", redirectDomain);
}
else {
    alert("No redirectDomain!")
}*/

// Swagger JS
loadScript("https://demo2.openi-ict.eu/api-docs/lib/shred.bundle.js", function () {
    loadScript("https://demo2.openi-ict.eu/api-docs/lib/swagger.js", function () {
        initSwagger(function () {
            $(" #btn-signup").click(function () {
                if (!(getURLparam("clientId") == null)) {
                    if ($("#accept-openi").is(':checked')) {
                        onClickRegisterButton()
                    }
                    else {
                        alert("Please allow OPENi to create your Cloudlet")
                    }
                }
                else {
                    alert("No clientId!")
                }

            });
            $(" #btn-login").click(function(){
                if (!(getURLparam("clientId") == null)) {
                        onClickLogInButton()
                }
                else {
                    alert("No clientId!")
                }
            })
        })
    });
});

function initSwagger(success) {
    window.swagger = new SwaggerApi({
        url: urlServer,
        success: function () {
            if (swagger.ready === true) {
                console.log("swagger is ready");
                success();
            } else {
                console.log("swagger is not ready");
            }
        },
        failure: function () {
            console.log("Failure initiating swaggerApi");
            alert("Failure initiating swaggerApi");
        }
    });
}

//
//  check register input
//
function onClickRegisterButton() {
    var username = $(" #_openi_username").val();
    var password = $(" #_openi_passwd").val();
    var confirmPassword = $(" #_openi_conf_passwd").val();
    var validated = true;
    if (username === "") {
        alert("User name is required");
        validated = false;
    } else {
        if (password === "") {
            alert("Password is required");
            validated = false;
        } else {
            if (confirmPassword === "") {
                alert("Confirmation password is required");
                validated = false;
            } else {
                if (confirmPassword != "" && password != "") {
                    if (confirmPassword != password) {
                        alert("Passwords are not the same");
                        validated = false;
                    }
                }
            }
        }
    }
    if (validated) {
        createUser(username, password, clientId);
    }
}

//
//
//
function onClickLogInButton() {
    var username = $(" #login-username").val();
    var password = $(" #login-password").val();
    //var confirmPassword = confirmPasswordField.getValue();
    var validated = true;
    if (username === " ") {
        alert("User name is required");
        validated = false;
    } else {
        if (password === " ") {
            alert("Password is required");
            validated = false;
        }
    }
    if (validated) {
        loginUser(username, password);
    }
}

/*
 * Create User
 */
function createUser(username, password, client_id) {

    console.log("Creating cloudlet/user");
    var json = JSON.stringify({
        "name": username,
        "password": password
    });

    console.log(json);
    if (isValidJSON(json)) {
        swagger.apis.simple_auth.createUser({
            body: json
        }, function (response) {
            console.log(response);
            if (response.status == 200) {
                //console.log("Cloudlet created successfully.");
                var json = JSON.stringify({
                    "name": username,
                    "password": password
                });

                swagger.apis.simple_auth.login({
                    body: json
                }, function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        var data = JSON.parse(response.data);
                        var session = data.session;
                        localStorage.set("session", session);
                        var json = JSON.stringify({
                            "session": session,
                            "client_id": client_id
                        });
                        swagger.apis.simple_auth.authorizeClient({
                            body: json
                        }, function (response) {
                            console.log(response);
                            var data = JSON.parse(response.data);
                            var token = data.token;
                            localStorage.setItem("token",token);
                            window.location.replace("../app_permissions/app_perm.html");

                            /*
                            var json = JSON.stringify({
                                "token": token
                            });
                            window.authorizations.add("key", new ApiKeyAuthorization("Authorization", token, "header"));
                            swagger.apis.cloudlets.getCloudletId({
                            }, function (response) {

                                console.log(response);
                                var data = JSON.parse(response.data);
                                var cloudletId = data.id;
                                //window.localStorage.setItem("cloudletId", cloudletId); // c_9414cbdc83691c35921f15fef48de54b-90
                                console.log("cloudletId: " + cloudletId);
                                //return {"token":token, "cloudletId":cloudletId}
                                window.location.replace(redirectURI + "?cloudletId=" + cloudletId + "&acc_token=" + token)

                            }, function (error) {
                                console.log(error)
                            })
                            */
                        }, function (error) {
                            console.log(error)
                        })
                    }
                }, function (error) {
                    console.log(error)
                });

            }
        }, function (error) {
            console.log(error);
        });
    } else {
        console.log("json is invalid");
    }
}

/*
 *   Login User
 */
function loginUser(username, password) {
    console.log("logging in user");
    var json = JSON.stringify({
        "name": username,
        "password": password
    });

    swagger.apis.simple_auth.login({
        body: json
    }, function (response) {
        console.log(response);
        if (response.status == 200) {
            var data = JSON.parse(response.data);
            var session = data.session;
            var json = JSON.stringify({
                "session": session,
                "client_id": clientId
            });
            swagger.apis.simple_auth.authorizeClient({
                body: json
            }, function (response) {
                console.log(response);
                var data = JSON.parse(response.data);
                var token = data.token;
                localStorage.setItem("token",token);
                window.location.replace(redirectURI + "?OUST=" + session + "&clientId=" + clientId);

                // check app perms


                /*
                var json = JSON.stringify({
                    "token": token
                });
                window.authorizations.add("key", new ApiKeyAuthorization("Authorization", token, "header"));
                swagger.apis.cloudlets.getCloudletId({
                }, function (response) {
                    console.log(response);
                    var data = JSON.parse(response.data);
                    var cloudletId = data.id;//.replace("https://demo2.openi-ict.eu/api/v1/cloudlets/", " ");
                    window.localStorage.setItem("cloudletId", cloudletId); // c_9414cbdc83691c35921f15fef48de54b-90
                    console.log("cloudletId: " + cloudletId);


                    //get object ids
                    var args = {
                        cloudletId: localStorage.cloudletId,
                        objectId: localStorage.userObjectId
                    };
                    swagger.apis.objects.getObject(args,
                        function (response) {
                            if (response.status == 200) {
                                window.localStorage.setItem("userObjectId", userObjectId);
                            }
                        }
                        , function (error) {
                            console.log("Login: Error getting userObjectId");
                            console.log(error);
                        });

                }, function (error) {
                    console.log(error)
                })*/
            }, function (error) {

            })
        }
    }, function (error) {

    });

}


//=========================
//      utils
//=========================
/*
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, domain, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; domain=." + domain + "; Path=/" ;
}
*/
function getURLparam(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false
    }
}

function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        // IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        // Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}