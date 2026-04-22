# DevTinder Apis

## AuthRouter
- POST/Signup
- POST/login
- POST/logout

## ProfileRouter
- GET/profile/view
- PATCH/profile/edit
- PATCH/profile/password // Forget Password API

## connectionrequestrouter
- POST/request/send/interested/:UserId
- POST/request/send/ignored/:UserId
- POST/request/review/accepted/:requestId
- POST/request/review/rejected/:requestId

## UserRouter
- GET /user/connections
- GET/user/requests
- GET/user/feed - Gets you the profiles of others users on platform

Status: ignore, interested, accepted, rejected