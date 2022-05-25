# Docker multi-stage build
# nextjs app

FROM node:16.15.0
WORKDIR /app
COPY package*.json .
RUN npm install --force

FROM node:16.15.0
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:16.15.0
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]



