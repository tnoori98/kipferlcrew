# ./docker/frontend/Dockerfile
FROM node:22

WORKDIR /app

COPY kipferlcrew .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]