FROM node:alpine
WORKDIR /usr/cloud-apps/e2e

COPY ./package.json ./

## uses standalone chromedriver / selenium image
RUN npm install --only=prod

COPY ./ ./

## WAIT mod
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
