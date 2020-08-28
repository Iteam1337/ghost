# iteam.se

This is the source for iteam.se -- a headless Ghost with a Sapper frontend.

## Content management

There are two different types of content in Ghost, _pages_ and _posts_.

### Posts

All posts are fetched and listed on the front page. Blog posts, customer cases and job postings are examples of such posts. There are also pages on the website that list only posts having a specific tag, such as the blog page that only lists blog posts!

#### Tags

- Blog: `Blogg`
- Customer case: `Case`
- Job posting: `Jobb`

### Pages

Pages are used for content that is only supposed to show up on a specific page. One use case is coworkers - each coworker is added as a page and tagged accordingly.

#### Tags

- Coworker: `Medarbetare`

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

For this you will need to have `docker` and `docker-compose` installed.

#### Setup

Create a file called `.env` in `./sapper` and paste the following:

```bash
GHOST_URL=http://localhost:2368
GHOST_KEY=
```

1. Get ghost and mariadb running with `docker-compose up`
2. Open http://localhost:2368/ghost
3. Follow the steps there to setup your account
4. Open http://localhost:2368/ghost/#/settings/integrations
5. Click "Add custom integration"
6. After creating the integration, copy the "Content API Key"
7. Paste the key after GHOST_KEY= into `./sapper/.env`
8. `cd ./sapper`
9. `npm ci`
10. `npm run dev`
11. Open http://localhost:3000

### Deployment

To deploy on the K8s cluster. Connect the VPN and then run:

    skaffold run

Use `kubens iteam-se` to explore the stack. You can also run `skaffold run --tail` to see the logs of the deployment.
