# Dependency Builder;
# Use package-lock.json as replacement for package.json for consistant build.
FROM node:lts-buster AS AppDependencyBuilder
WORKDIR /app

COPY package-lock.json ./

RUN npm ci

# App Builder;
# Produce consistant production build with AppDependencyBuilder generated node_modules.
FROM node:lts-buster AS AppBuilder
WORKDIR /app

COPY                             .                 ./
COPY --from=AppDependencyBuilder /app/node_modules ./node_modules

RUN npm run build

# App Runner:
# Run production build as non-root user.
FROM node:lts-buster AS AppRunner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATH /node_modules/sharp

RUN addgroup -gid 1001 runner
RUN adduser  -gid 1001 app

COPY                                      .                 ./
COPY --from=AppBuilder --chown=app:runner /app/node_modules ./node_modules
COPY --from=AppBuilder --chown=app:runner /app/.next        ./.next

USER app

EXPOSE 3000

CMD ["npm", "run", "start"]
