# stage 1- construct the React App
FROM node:alpine AS builder

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 5501

CMD ["npm", "start"]

# stage 2- Construct the server
# FROM nginx
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .