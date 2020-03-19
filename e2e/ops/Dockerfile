FROM node:alpine
WORKDIR /usr/create-app/e2e
COPY ./ ./

## WAIT mod
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## uses standalone chromedriver / selenium image
RUN npm install --only=prod