kitto is simple webapplication project which will return request details in JSON


To make the docker build

```
docker build -t <docker-reg>/kitto:<version> .
docker build -t narenp/kitto:latest .

```

To run this image 
docker run -d -p 8080:8080 --name kitto narenp/kitto:latest

