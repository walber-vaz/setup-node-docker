FROM node:18-slim as BUILDER 
LABEL maintainer="Walber Vaz"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:18-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3333

CMD [ "npm", "start" ]
