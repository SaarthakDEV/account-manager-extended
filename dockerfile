FROM node:24 AS base

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5800

# CMD ["npm", "run", "dev"]