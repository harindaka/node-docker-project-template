FROM node:6.10.1-alpine

WORKDIR /src
ADD . .

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]