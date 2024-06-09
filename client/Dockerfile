# syntax=docker/dockerfile:1.4

FROM node:lts AS development

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code

RUN npm run build

# Debugging steps to list contents and show package.json
RUN ls -la /code
RUN cat /code/package.json

EXPOSE 4173 5173

CMD [ "npm", "run", "dev" ]
