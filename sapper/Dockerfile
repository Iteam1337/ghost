# FROM node:12 AS test-setup
FROM cypress/base:12 AS tester
WORKDIR /app

COPY package*json ./
RUN npm ci

## Run tests

COPY . .
RUN npm test

## Install production deps
FROM node:12 AS builder
WORKDIR /app

COPY package*json ./
RUN npm ci --production

COPY --from=0 /app/ .

# Interestingly this command does what it should but returns a non 0 code
RUN find -name "*__tests__*" -exec rm -fr {} \; || true


## Finalize image
FROM node:12-alpine AS runner
WORKDIR /app

COPY --from=1 /app/ .

CMD npm start