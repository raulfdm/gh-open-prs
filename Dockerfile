FROM node:16-buster
WORKDIR /srv/
RUN npm i -g pnpm
COPY . .
RUN pnpm install
RUN pnpm build
ENTRYPOINT [ "pnpm","start" ]