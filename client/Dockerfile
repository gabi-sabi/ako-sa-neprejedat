# syntax=docker/dockerfile:1.4

# Stage 1: Build the React app
FROM node:lts AS build

WORKDIR /app
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json
RUN npm ci
COPY . /app

RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom NGINX configuration, if necessary
# You can create an nginx.conf file and customize it as needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
