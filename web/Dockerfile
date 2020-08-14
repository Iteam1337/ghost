FROM node:12 AS builder

ARG GHOST=localhost
ARG GPORT=2368
ARG GPROT=http
ARG GKEY=cc3275272001d3f634bfc8c632

WORKDIR /app

COPY package*json ./
RUN npm ci

COPY . .
RUN echo "export const GHOST_URL = '${GPROT}://${GHOST}:${GPORT}'" > /app/src/config/ghost_url.js
RUN echo "export const GHOST_KEY = '${GKEY}'" > /app/src/config/ghost_key.js
RUN npm run build

FROM nginx:alpine AS runner
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html