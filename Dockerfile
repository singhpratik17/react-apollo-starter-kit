# build environment
FROM node:12.2.0-alpine as build

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app

RUN yarn

# Bundle app source
COPY . .

EXPOSE 8081
EXPOSE 8080
EXPOSE 3000

CMD ["yarn", "dev"]
