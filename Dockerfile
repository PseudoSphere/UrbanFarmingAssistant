FROM node:boron

# Create app directory
WORKDIR /usr/src/app


COPY package.json .

RUN npm install

# Bundle app source
COPY public public
COPY config config
COPY publicAssets publicAssets
COPY dbHandler.js .
COPY server.js .

EXPOSE 80
CMD [ "npm", "start" ]