# ghost

This is the source for iteam.se
The site is built with sapper using a headless ghost as a content backend.

## Contributing

### Quick start

There is a dev environment setup on https://iteam-se.iteamdev.io and if you just pull this repo and run the sapper web, your local instance is already configured to pull content from it. You will require `nvm` for this step.

```bash
cd sapper
nvm use # or nvm install
npm ci
npm run dev
# Now open http://localhost:3000
```

### Running the whole stack locally

For this you will need to have `docker` and `docker-compose` installed. After cloning the repo, run `docker-compose up` in the root of the project. This will launch ghost and mariadb inside docker.

### Starting up the dev environment

The following assumes that you have cloned the repo and installed the requirements. First of all, prepare your local configuration. Use either .env or direnv.

#### Configuration (.env)

Create a file called `.env` in `./sapper` and paste the following:

```bash
GHOST_URL=http://localhost:2368
GHOST_KEY=
```

#### Configuration (direnv)

If you are using direnv, create a file called `.envrc` in `./sapper` and paste the following:

```bash
export GHOST_URL=http://localhost:2368
export GHOST_KEY=
```

#### Setup

1. Get ghost and mariadb running with `docker-compose up`
2. Open http://localhost:2368/ghost
3. Setup your account
4. Open http://localhost:2368/ghost/#/settings/integrations
5. Click "Add custom integration"
6. After creating the integration, copy the "Content API Key"
7. Paste the key after GHOST_KEY= in `./sapper/.env` or `./sapper/.envrc`
8. `cd ./sapper`
9. `npm ci`
10. `npm run dev`
11. Open http://localhost:3000



### Deployment

To deploy on the K8s cluster. Connect the VPN and then run: 

    skaffold run

Use `kubens iteam-se` to explore the stack. You can also run `skaffold run --tail` to see the logs of the deployment.

