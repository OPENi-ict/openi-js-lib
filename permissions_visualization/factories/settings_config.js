'use strict';

console.log('settings_config.js');

angular.module('openi-permission-visualization')

    .factory('settingsConfig', function() {

        console.log('settingsConfig()');

        return {
            "profile": {
                "types": [
                    {
                        "id": "t_003b070598d1e6ea42ee012f69797f3e-904",
                        "label": "Account",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_af0c2cd1c2917e4f3433025e35f3d3cd-1364",
                        "label": "User",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 0
            },
            "online_payment": {
                "types": [
                    {
                        "id": "t_defd14d3070bb4978880f7731a547f35-847",
                        "label": "Card",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_c78fe73adb747f7810a5e6bc18344f17-429",
                        "label": "Wallet",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 1
            },
            "device_profile": {
                "types": [
                    {
                        "id": "t_7888a698d1fe10a8f05e67279f6d6897-512",
                        "label": "Application",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 2
            },
            "device_comp": {
                "types": [
                    {
                        "id": "t_7888a698d1fe10a8f05e67279f6d6897-512",
                        "label": "Application",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 3
            },
            "contact_group": {
                "types": [
                    {
                        "id": "t_04ab7e23e50aef2c8a9ff84080288d2c-308",
                        "label": "Group",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 4
            },
            "social_activity": {
                "types": [
                    {
                        "id": "t_14022c94deaf9b4823ce9ef7467e2ea5-317",
                        "label": "like",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_dd4e84c5782c11cf33d78139cbc033c6-534",
                        "label": "Comment",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_99163fdce55f96dc3c5b578fd66e32a8-320",
                        "label": "Dislike",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_81dc7a23af580ca8b92ef27d9d6596d5-321",
                        "label": "Favorite",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_729e42d0e58c751ecd551690ec50fb1a-323",
                        "label": "Friendship",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_341aead8a032f444e2b0dc5b188686a8-538",
                        "label": "Tag",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_7a45b237651ffd95f0f32113a975d15b-635",
                        "label": "Game",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_e4666b60c93428ae2ac4e86f182093bc-536",
                        "label": "Badge",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_1d54a3b9897e2abd311d1cba6287aed7-415",
                        "label": "Note",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 5
            },
            "media_files": {
                "types": [
                    {
                        "id": "t_89b960476249cf9b4f25ad1cf66c394a-746",
                        "label": "Article",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_356d522e9636d39d8b4271de19b3e3fc-744",
                        "label": "Audio",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false

                    },
                    {
                        "id": "t_2e1b6aed698e4630fcc1107220b8abd0-736",
                        "label": "File",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_f57e85d10963ba6a099aebce8ab6dc37-818",
                        "label": "Photo",
                        "isOptedIn": false,
                        "display": true,
                        "hasObjects": false
                    },
                    {
                        "id": "t_b59e0e11991dd54b5487d06d9f9000e7-744",
                        "label": "Video",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_158df926d43c72a4aab7ab526ca70c97-311",
                        "label": "Playlist",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_eae587900c6e187a3755f6bea22b6935-455",
                        "label": "Folder",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 6
            },
            "product_and_services": {
                "types": [
                    {
                        "id": "t_60808aa730d2b159ac2aac09608440c5-639",
                        "label": "Product",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_8d6a9ab10e64818663f7f9c572bc3cbd-639",
                        "label": "Service",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 7
            },
            "health_factors": {
                "types": [
                    {
                        "id": "t_99de92a9d44caea2d97b26e6ed35227f-968",
                        "label": "Nutrition",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_05b33abdc75a04ffaf2f494ecf79c5da-642",
                        "label": "Measurement",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_4dc2ad82b0f66bba949216b5fbaa3aff-1174",
                        "label": "Workout",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 8
            },
            "location": {
                "types": [
                    {
                        "id": "t_e2209ffb250ca8a3fd3f703ec7a39b1c-829",
                        "label": "Event",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_c035b1961f382ead508f9017776fb5e0-449",
                        "label": "Place",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_f8d4838e27a2b358dca40638c713b001-542",
                        "label": "Route",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_d78f9af47df1aa5c3a11d05f5525cafe-748",
                        "label": "Review",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_74bad307ed27072dbc67357a536182bd-451",
                        "label": "Checkin",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_0aea698a28b44d4bf84203a384ad959b-417",
                        "label": "Status",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    },
                    {
                        "id": "t_b3acf8c93a59241b363169c68d0fc6ba-545",
                        "label": "Shop",
                        "isOptedIn": false,
                        "display": false,
                        "hasObjects": false
                    }
                ],
                "isExcluded": true,
                "display": false,
                "hasObjects": false,
                "displayOrder": 9
            }
        };

    });