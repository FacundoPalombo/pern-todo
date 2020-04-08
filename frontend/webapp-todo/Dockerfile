FROM node:12.16.1-alpine3.9
#env
ENV PORT=3000
#app directory
WORKDIR /usr/app
#dependencies
COPY package*.json ./
#install dependencies
RUN npm install
#app source
COPY . .
#port
EXPOSE 3000:3000
CMD ["npm", "start"]