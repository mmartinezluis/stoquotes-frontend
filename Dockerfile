FROM node:alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5501

CMD ["npm", "start"]