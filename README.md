# ghost

iteam.se ghost

## Contributing

### Requirements

- docker
- docker-compose
- nvm

### Starting up the dev environment

The following assumes that you have cloned the repo and installed the requirements.

1. Get ghost and mariadb running with `docker-compose up`
2. Open http://localhost:2368/ghost
3. Setup your account
4. Open http://localhost:2368/ghost/#/settings/integrations
5. Click "Add custom integration"
6. After creating the integration, copy the "Content API Key"
7. Paste the key into GHOST_KEY in `./sapper/src/services/api.js`
8. `cd ./sapper`
9. `npm ci`
10. `npm run dev`
11. Open http://localhost:5000
