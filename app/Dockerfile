FROM node:14.0.0-alpine

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install

RUN npm install @vue/cli@4.3.0 -g

COPY . .

CMD ["npm", "run", "serve"]
