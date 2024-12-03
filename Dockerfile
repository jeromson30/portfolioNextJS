# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine as base

WORKDIR /app
COPY package*.json ./


RUN npm install --force

COPY . .

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=developpement
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 80

ENV PORT=80

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
#ENV HOSTNAME="45.154.205.190"

CMD npm run dev
