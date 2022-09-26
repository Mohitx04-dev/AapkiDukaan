# Stage1: UI Build
FROM node:14-slim AS client-build
WORKDIR /usr/src
COPY client/ ./client/
RUN cd client && npm install && npm run build

# Stage2: API Build
FROM node:14-slim AS server-build
WORKDIR /usr/src
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .

# Stage3: Packagign the app
FROM node:14-slim
WORKDIR /root/
COPY --from=client-build /usr/src/client/build ./client/build
COPY --from=server-build /usr/src .
RUN ls

EXPOSE 80

CMD ["node", "server.js"]