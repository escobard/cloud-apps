FROM node:alpine
WORKDIR /usr/create-app/api
COPY ./ ./

RUN npm install --only=prod

CMD ["npm", "run", "start"]