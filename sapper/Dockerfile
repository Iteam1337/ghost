# # Build
FROM node:12 AS builder
WORKDIR /app

COPY package*json ./
RUN npm ci --no-optional

COPY . .

RUN npm run build

# # Finalize image
FROM node:12-alpine AS runner
WORKDIR /app

COPY --from=0 /app/ .

RUN rm -fr node_modules
RUN npm install production --no-optional

CMD npm start