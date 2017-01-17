# Sample for working with NGINX and Docker

This sample demonstrates NGINX with a reverse proxy to Node.js backened service.

The Docker-compose file contains two images: one for frontend (html/js/images), one for backend (Node.js).

The NGINX webserver works on port 80, all requests containing '/api/' are proxied to the backend services.

The backend service works on port 8000, but this port is not exposed to the outside world.

# Installation

```
$ docker-compose build
$ docker-compose up
```

# Sample urls

http://localhost -> returns the client side index.html page

http://localhost/api -> returns the root resource of the backend service

http://localhost/api/hoho -> returns the hoho resource of the backend service
