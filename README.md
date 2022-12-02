# Angular app in docker container
## Step by step how to do :-)

1.Add dockerfile touch Dockerfile
    ### STAGE 1: Build ###
    FROM node:latest as node 
    WORKDIR /app
    COPY . . 
    RUN npm install
    RUN npm run build --prod

    ### STAGE 2: Run ###
    FROM nginx:alpine
    COPY --from=node /app/dist/angular-auiz-app /usr/share/nginx/html

2.And now we need build docker image. Run this command docker build -t angular-auiz-app -f Dockerfile .
    [+] Building 184.4s (15/15) FINISHED
     => [internal] load build definition from     Dockerfile                                                                                   0.2s 
     => => transferring dockerfile:     244B                                                                                                   0.0s 
     => [internal] load .    dockerignore                                                                                                          0.2s 
     => => transferring context:     2B                                                                                                        0.0s 
     => [internal] load metadata for docker.io/library/    nginx:alpine                                                                        2.3s 
     => [internal] load metadata for docker.io/library/    node:latest                                                                         2.4s 
     => [auth] library/nginx:pull token for registry-1.docker.    io                                                                           0.0s 
     => [auth] library/node:pull token for registry-1.docker.    io                                                                            0.0s 
     => [node 1/5] FROM docker.io/library/    node:latest@sha256:a0976cffecd3fad1697615eb14542e25deb2234f3beb4448417bfe88585ca4f8              0.0s 
     => [stage-1 1/2] FROM docker.io/library/    nginx:alpine@sha256:455c39afebd4d98ef26dd70284aa86e6810b0485af5f4f222b19b89758cabf1e          0.0s
     => [internal] load build     context                                                                                                     38.    8s 
     => => transferring context: 64.    17MB                                                                                                  38.2s 
     => CACHED [node 2/5] WORKDIR /    app                                                                                                     0.0s 
     => [node 3/5]     COPY . .                                                                                                                   55.4s 
     => [node 4/5] RUN npm     install                                                                                                            18.5s 
     => [node 5/5] RUN npm run build     --prod                                                                                               67.7s 
     => CACHED [stage-1 2/2] COPY --from=node /app/dist/angular-auiz-app /usr/share/nginx/    html                                             0.0s 
     => exporting to     image                                                                                                                     0.6s 
     => => exporting     layers                                                                                                                    0.0s 
     => => writing image     sha256:02ee3066db1d8ceda36fe2415c0fc8b7c053ce0e2aa64867822e0cd07cac319b                                               0.1s 
     => => naming to docker.io/library/angular-auiz-app 


4.We check if the image has been created with command docker images

    REPOSITORY                        TAG       IMAGE ID       CREATED             SIZE
    anwerdeveloper/angular-auiz-app   latest    02ee3066db1d   About an hour ago   25.5MB
    angular-auiz-app                  latest    02ee3066db1d   About an hour ago   25.5MB
    confluentinc/cp-kafka             5.3.1     3ce94ccaeaea   13 months ago       590MB
    zookeeper                         3.4.13    4ebfb9474e72   3 years ago         150MB

5.And last command to run container  docker run -it --rm  -p 8000:80 --name app-container-quiz angular-auiz-app
    
6.We check if the container has been created with command docker ps    
CONTAINER ID   IMAGE          COMMAND              CREATED                STATUS           PORTS              NAMES
3dd4606fce3f   angular-auiz-app   "/docker-entrypoint.…"  46 minutes ago  Up 46 minutes  0.0.0.0:8000->80/tcp 

  app-container-quiz       


7.we need to push docker image in docker hub  whitch has been created with command:
-docker tag app-image-quiz anwerdeveloper/angular-auiz-app  
-docker push anwerdeveloper/angular-auiz-app


8.link of the docker image:
-https://hub.docker.com/r/anwerdeveloper/angular-auiz-app



