FROM node:alpine AS deps
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache libc6-compat

COPY package.json pnpm-lock.yaml ./

RUN \
  yarn global add pnpm && pnpm install --save-dev @types/react @types/node && pnpm add sharp && pnpm fetch --prod && pnpm install -r --offline --prod || \
  (echo "Lockfile not found." && exit 1)


FROM node:alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build || (echo "Build failed." && exit 1)


FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app ./

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs ./.next

USER nextjs

ENV PORT 3000

CMD ["yarn", "start"]
