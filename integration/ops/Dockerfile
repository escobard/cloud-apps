FROM node:alpine
WORKDIR /usr/create-app/integration
COPY ./ ./

RUN npm install

CMD ["npm", "run", "test"]