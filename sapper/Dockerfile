FROM cypress/base:12 AS tester
WORKDIR /app

COPY package*json ./
RUN npm ci

COPY . .
RUN npm test

# # Install production deps
FROM node:12 AS builder
WORKDIR /app

COPY --from=0 /app/ .
RUN npm run build

# # Finalize image
FROM node:12-alpine AS runner
WORKDIR /app

COPY --from=1 /app/ .
CMD npm start