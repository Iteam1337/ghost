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
7. Paste the key into `./web/src/config/ghost_key.js`
8. `cd ./web`
9. `npm run dev`
10. Open http://localhost:5000


### Deployment

To deploy on the K8s cluster. Connect the VPN and then run: 

    skaffold run

Use `kubens iteam-se` to explore the stack. You can also run `skaffold run --tail` to see the logs of the deployment.

