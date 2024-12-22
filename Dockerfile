FROM node:22-alpine
WORKDIR /app
COPY . /app
RUN yarn install && yarn build
EXPOSE 3636
CMD [ "yarn", "preview" ,"--port", "3636" ]
