FROM node:16-bullseye as builder
WORKDIR ./build

COPY . .
RUN yarn install

ENV NODE_ENV=production
RUN yarn build

RUN rm -r node_modules
RUN yarn install --production


FROM node:16-alpine as runner
ARG APP=/usr/src/app

COPY --from=builder /build/dist ${APP}/dist
COPY --from=builder /build/package.json ${APP}/dist
COPY --from=builder /build/node_modules ${APP}/dist/node_modules

WORKDIR ${APP}/dist
EXPOSE 8080
CMD ["node", "index.js"]