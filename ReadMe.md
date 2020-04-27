# app

## Setup env file

```
touch app/.env
```

`add VUE_APP_OPEN_WEATHER_MAP_API_KEY={your_api_key}`

## Project setup using docker

```
docker-compose build

docker-compose up

Browse the project at http://localhost:8080
```

## Project setup using npm

```
cd app

npm install

npm run serve

Browse the project at http://localhost:8080
```

### Run your tests

```
cd app

npm run test:unit
```

### Lints and fixes files

```
cd app

npm run format
```
