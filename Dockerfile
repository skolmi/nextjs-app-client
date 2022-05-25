# Docker multi-stage build
# nextjs app

FROM public.ecr.aws/bitnami/node:16.15.0 as dependencies
WORKDIR /app
COPY package.json .
RUN npm install --force

FROM public.ecr.aws/bitnami/node:16.15.0 as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM public.ecr.aws/bitnami/node:16.15.0 as runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]



