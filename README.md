OPENi-js-lib
============
Here you can find all the required details towards integrating your web application with OPENi via js SDK. 

Assumption: You have access to OPENi [demo2](https://demo2.openi-ict.eu) vm. 


In the following sections you can find:
 
1. OPENi js SDK lib documentation as well as a small demo project. 
1. WP4 demo projects that use in an axtended way OPENi js lib. 
1. OPENi web Authorization/Authentication (tutorial and lib) 
1. OPENi web Authorization/Authentication (tutorial and lib) 


# OPENi js SDK lib
 
You can use the openi-js-lib.js library in your project to initialize OPENi and use its helper functions or any other available OPENi Service/API which is 
exposed through Swagger.

Note: A simple demo app is included. This a demo HTML/Javascript project that uses the OPENi JS SDK/lib and is based on [demo2](https://demo2.openi-ict.eu) vm.



## Available helper functions:

Note:All functions have success/error callbacks, which include the corresponding response.

#### Initiate as.... 

```
initOPENi(openi_domain, success, error)
```

 OPENi APIs will be available for use now. Run your code in success callback. 

* Example:
 Creating a new object in a Cloudlet within initOPENi success callback:*



        var args = {
            "cloudletId": cloudletId,
            "Authorization": token
        };
        args.body = JSON.stringify({
            "@openi_type": typeId,
            "@data": data
        });
        swagger.apis.objects.createObject(args, function (response) {
            console.log(response);
            if (response.status == 201) {
                console.log("Object created successfully.");
                var objectId = JSON.parse(response.data);
            }
        }, function (error) {
            console.log(error);
        });


#### Create a New User as...

````
createUser(username, password, success, error)
````

#### Check login status as...

````
checkLoginStatus(loggedIn, notLoggedIn)
````

#### Login and Existing User as...

````
loginUser(username, password, clientId, success, error)
````


#### Create a New Object as...
````
createObject(cloudletId, typeId, data, token, success, error)
````

 "data" is a JSON object which addheres to the OPENi type of typeid


#### Search Objects whithin a Cloudlet via....
```
searchCloudletObjects(cloudletId, type, with_property, property_filter, id_only, token, success, error)
```

 Search whithin one Cloudlet.

 cloudletId and token are required.

 type,with_property,property_filter,id_only can be empty ("") if not needed.


#### Search an objects accross Cloudlets via ....
````
searchObjects(type, with_property, property_filter, id_only, token, success, error)
````

 Like searchCloudletObjects, search across all cloudlets.

#### Adds the Authorization header via...
````
addTokenHeader(token)
````



## WP4 demo projects that use in an axtended way OPENi js lib. 


## OPENi web Authorization/Authentication (tutorial and lib)

This section allows you to enable OPENi Registration/Log-in/Permissions diolog. 

## OPENi web Permission Visualization (tutorial and lib) 

This section allows you to enable OPENi Permission Visualization template.