FROM node:18

WORKDIR /minhapasta

COPY . . 

RUN npm install

EXPOSE 3001
EXPOSE 5000

CMD [ "npm", "run", "dev-all" ]
