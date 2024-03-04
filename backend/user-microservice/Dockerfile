FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./
COPY ./prisma prisma

RUN yarn install

COPY . .

EXPOSE 5002

CMD ["npm", "start"]