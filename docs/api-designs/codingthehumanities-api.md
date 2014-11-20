# CTH Backend API Design

## GET /api/v1/login
+ Response 200 (application/json)
{
    "data":{
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
    "data":{
        "id":"peterpeerdeman"
    }
}
+ Response 401

## GET /api/v1/profiles
+ Response 200 (application/json)
{
    "data":[
        {
            ... profiledata ...
        },
        {
            ... profiledata ...
        }
    ]
}

## GET /api/v1/profiles/:id
+ Response 200 (application/json)
{
    "data":{
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

## GET /api/v1/profiles/:profileId/paths/:pathId/places
+ Response 200 (application/json)
{
    "data":[
        {
            "id":123123,
            "name": "CSS"
        }
    ]
}

## POST /api/v1/profiles/:profileId/paths/:pathId/places/add
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Request (application/json)
{
    "id":123132
}
+ Response 201 (application/json)

## DELETE /api/v1/profiles/:profileId/paths/:pathId/places/:id
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Response 204 (application/json)

## POST /api/v1/profiles/:profileId/paths/:pathId/places/:id/complete_objective
+ Headers
    Authorization: Bearer CQYABgdVWlQAVgQKUQBRUVAEAABUAFMABVVWBVYODwkAVVVX
+ Request (application/json)
{
    "id":123123
}
+ Response 201 (application/json)

## GET /api/v1/paths 
+ Response 200 (application/json)
{
    "data":[
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
## PUT /api/v1/paths
+ Request (application/json)
{
    "curator_id":123123,
    "description": "A path about web technologies",
    "version": "1.2.3",
    "license": "MIT",
    "keywords": ["web","tech"],
    "image_url": "imagelocation.jpg"
}
+ Response 200

## GET /api/v1/paths/:pathId/
+ Response 200 (application/json)
{
    "data": {
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

## POST /api/v1/paths/:pathId/places/add
+ Request (application/json)
{
    "id":123123
}
+ Response 201

## DELETE /api/v1/paths/:pathId/places/:id
+ Response 204