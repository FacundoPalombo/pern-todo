FROM node:12.16.1-alpine3.9
#env
ENV PORT=3001
#dependencies
COPY package*.json ./
#app directory
WORKDIR /app
#install dependencies
RUN npm install
#App data
COPY [".", "/app/"]
#port
EXPOSE 3001:3001
EXPOSE 5432:5432
CMD ["npm", "start"]