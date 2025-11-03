FROM iswprodacr.azurecr.io/node:20-alpine AS builder

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package*.json ./ 

RUN npm install --legacy-peer-deps

COPY . .

RUN  npm run build

FROM iswprodacr.azurecr.io/node:20-alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/app

COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/next.config.ts ./next.config.ts

EXPOSE 3000 

CMD ["npm", "start"]