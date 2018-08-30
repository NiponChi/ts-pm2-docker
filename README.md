# ts-pm2-docker

Development template for typescript + pm2 + docker

## Deveopment

create `.env ` file follow `.env.sample`

```bash
npm i

# start container
npm run up

# list process
npm run pm2:ls

# monitor porcess
npm run pm2:monit

# to get process status
curl localhost:3001 # $PM2_PORT

# test clustering
curl localhost:3000 # $PORT

```
