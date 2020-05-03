FROM node:12.16.1-alpine3.9
#env
ENV PORT=3000
#dependencies
COPY package*.json ./
#app directory
WORKDIR /app
#install dependencies
RUN npm install
#App data
COPY . .
#port
EXPOSE 9009:9009
EXPOSE 3000:3000
CMD ["npm", "start"]