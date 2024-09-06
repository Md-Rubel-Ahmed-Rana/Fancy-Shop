FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 6004

CMD ["npm", "start"]