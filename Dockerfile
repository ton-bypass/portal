FROM node:20-alpine
WORKDIR /app
COPY . .
RUN yarn install && yarn build
EXPOSE 3636
CMD [ "yarn", "preview" ,"--port", "3636" ]
