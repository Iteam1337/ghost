FROM node:12 AS builder

ARG GHOST=localhost
ARG GPORT=2368
ARG GPROT=http

WORKDIR /app

COPY package*json ./
RUN npm ci

COPY . .
RUN echo "export const GHOST_URL = '${GPROT}://${GHOST}}:${GPORT}}';" > /app/src/config/ghost_url.js
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/public /usr/share/nginx/html