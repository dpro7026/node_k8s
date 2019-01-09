FROM node:alpine
RUN mkdir /node_helloworld
COPY . /node_helloworld
WORKDIR /node_helloworld
RUN npm i
EXPOSE 3000
CMD "npm start"
