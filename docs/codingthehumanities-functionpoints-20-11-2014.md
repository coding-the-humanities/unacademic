# Coding the humanities

## Functionpoints frontend

### Integrate API's
* piep Resources
* piep Objectives
* piep Lists
* cth Login
* cth Profiles
* cth Profile Paths/Places
* cth Paths
* cth Places

### User logic
* authentication through github oauth flow
* use JWT token on header in all requests
* recurring check for session / loggedin state

## Functionpoints backend
* SSL 
* Login with github, respond with JWT token (http://stackoverflow.com/questions/20228572/passport-local-with-node-jwt-simple)
* Session endpoint
* Profiles endpoint (including path, places and task tracking)
* Paths endpoint
* Places endpoint (nested in paths)
* ymlcontent to database migration script