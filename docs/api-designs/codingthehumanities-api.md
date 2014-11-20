# CTH Backend API Design

## GET /api/v1/login
+ Response 200 (application/json)
{
    "session":{
        "id":"peterpeerdeman",
        "token":"CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX",
        "lastActive":1412242276282
    }
}
+ Response 401 (application/json)
{
    "message": "incorrect credentials"
}

## GET /api/v1/session
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Response 200 (application/json)
{
    "session":{
        "id":"peterpeerdeman"
    }
}
+ Response 401

## GET /api/v1/users
+ Response 200 (application/json)
{
    "users":[
        {
            ... userdata ...
        },
        {
            ... userdata ...
        }
    ]
}

## GET /api/v1/users/:id
+ Response 200 (application/json)
{
    "user":{
        "id":"yeehaa",
        "first_name": "Jan Hein",
        "last_name": "Hoogstad",
        "avatar_url": "http://imagename.jpg",
        "student_number": "1231331",
        "role": "mage",
        "study": "computer science",
        "points": 100
    }
}

## GET /api/v1/users/:userId/paths/:pathId/places
+ Response 200 (application/json)
{
    "place":[
        {
            "id":123123,
            "name": "CSS"
        }
    ]
}

## POST /api/v1/users/:userId/paths/:pathId/places/add
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Request (application/json)
{
    "id":123132
}
+ Response 201 (application/json)

## DELETE /api/v1/users/:userId/paths/:pathId/places/:id
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Response 204 (application/json)

## POST /api/v1/users/:userId/paths/:pathId/places/:placesId/objectives/:objectiveId
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Request (application/json)
{
    "completed":true
}
+ Response 201 (application/json)

## GET /api/v1/paths 
+ Response 200 (application/json)
{
    "paths":[
        {
            "id":123123,
            "curator_full_name":"Jan Hein",
            "curator_id":123123,
            "description": "A path about web technologies",
            "version": "1.2.3",
            "license": "MIT",
            "keywords": ["web","tech"]
        }
    ]
}

## POST /api/v1/paths
+ Request (application/json)
{
    "curator_id":123123,
    "description": "A path about web technologies",
    "version": "1.2.3",
    "license": "MIT",
    "keywords": ["web","tech"],
    "assets": [
        {
            "type":"image",
            "url":"imagelocation.jpg"
        }
    ]
}
+ Response 201

## PUT /api/v1/paths/:pathId
+ Request (application/json)
{
    "curator_id":123123,
    "description": "A path about web technologies",
    "version": "1.2.3",
    "license": "MIT",
    "keywords": ["web","tech"],
    "assets": [
        {
            "type":"image",
            "url":"imagelocation.jpg"
        }
    ]
}
+ Response 200

## GET /api/v1/paths/:pathId
+ Response 200 (application/json)
{
    "path": {
        "id":123123,
        "curator_full_name":"Jan Hein",
        "curator_id":123123,
        "description": "A path about web technologies",
        "version": "1.2.3",
        "license": "MIT",
        "keywords": ["web","tech"],
        "places": [
            {
                "id":123123,
                "name":"css tutorial",
                "image_url": "imagelocation.jpg"
            },
            {
                "id":123124,
                "name":"html tutorial",
                "image_url": "imagelocation.jpg"
            }
        ]
    }
}

## DELETE /api/v1/paths/:pathId/
+ Response 204 (application/json)

## PATCH /api/v1/paths/:pathId
{
    "id":123123,
    "curator_full_name":"Jan Hein",
    "curator_id":123123,
    "description": "A path about web technologies",
    "version": "1.2.3",
    "license": "MIT",
    "keywords": ["web","tech"]
}

## PUT /api/v1/paths/:pathId/places/:placeId
+ Request (application/json)
{
    "added":true
}
+ Response 201

## DELETE /api/v1/paths/:pathId/places/:id
+ Response 204