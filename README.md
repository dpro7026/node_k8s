# Create Hello World App
Initialise a package.json:
```
npm init
```
Create an index file:
```
touch index.js
```
Add to the package.json a start command:
```
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node index.js"
```
Install Express:
```
npm install express
```
Update index.js:
```
//Import Express package
const express = require('express');
const app = express();

// Add a root route
app.get('/', (req, res) => {
  res.send('Homepage! Hello world.');
});

// Expose port 3000
app.listen(3000, () => console.log('listening on port 3000'));
```

# Dockerise App
```
touch Dockerfile
```
Add to the Dockerfile:
```
FROM node:alpine
RUN mkdir /node_helloworld
COPY . /node_helloworld
WORKDIR /node_helloworld
RUN npm i
EXPOSE 3000
CMD "npm start"
```
Create docker-compose file:
```
touch docker-compose.yml
```
Update the docker-compose file:
```
version: '3'
services:
  web:
    build: .
    image: dprovest/node_helloworld_web:latest
    command: npm start
    ports:
      - "3000:3000"
```
Build the docker image:
```
docker-compose build
```
Push the image to your Dockerhub:
```
docker-compose push
```
Convert the docker-compose file to create Kubernetes deployment and service files:
```
kompose convert -f docker-compose.yml
```
Create the Kubernetes deployment and service:
```
kubectl create -f web-deployment.yaml
kubectl create -f web-service.yaml
```
Open the dashboard and view the health of the pod:
```
minikube dashboard
```
View the app at http://localhost:3000
