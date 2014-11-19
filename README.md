openi-js-lib
============

This a demo HTML/Javascript project that uses the OPENi JS SDK/lib and is based on [demo2](https://demo2.openi-ict.eu) vm.

You can use the openi-js-lib.js library in your project to initialize OPENi and use its helper functions or any other available OPENi service which is exposed through Swagger.

##Available helper functions:

All function have success/error callbacks which alse include the corresponding response :

* ```javascript
    initOPENi(success, error)
```

Run your code in success callback. OPENi apis will be available for use here.

For example:

Creating a new object in a cloudlet

* ```javascript
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
```

* ```javascript
    createUser(username, password, success, error)
```



* ```javascript
    loginUser(username, password, clientId, success, error)
```



* ```javascript
    createObject(cloudletId, typeId, data, token, success, error)
```

"data" is a JSON object which addheres to the OPENi type of typeid

* ```javascript
    searchCloudletObjects(cloudletId, type, with_property, property_filter, id_only, token, success, error)
```

Search whithin one Cloudlet.

cloudletId and token are required.

type,with_property,property_filter,id_only can be empty ("") if not needed.

* ```javascript
    searchObjects(type, with_property, property_filter, id_only, token, success, error)
```

Like searchCloudletObjects, search across all cloudlets.

* ```javascript
    addTokenHeader(token)
```

Adds the Authorization header.