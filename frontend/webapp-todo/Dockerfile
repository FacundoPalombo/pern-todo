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
COPY [".", "/app/"]
#port
EXPOSE 3000:3000
CMD ["npm", "start"]