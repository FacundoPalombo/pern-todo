FROM node:12.16.1-alpine3.9
#env
ENV PORT=3001
#app directory
WORKDIR /usr/app
#dependencies
COPY package*.json ./
#install dependencies
RUN npm install
#app source
COPY . .
#port
EXPOSE 3001:3001
CMD ["npm", "start"]