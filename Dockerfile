FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","run","start:dev"]