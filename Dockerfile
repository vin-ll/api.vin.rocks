# Ubuntu 22.10 as base
FROM ubuntu:22.10

# Install required packages
RUN apt-get update && apt-get install -y curl gnupg nginx

# Install nodejs v18
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Copy everything to /app
COPY . /app

# Set current working directory to /app
WORKDIR /app

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose port 80 for nginx
EXPOSE 80

# Setup NGINX
RUN rm /etc/nginx/sites-enabled/default
COPY nginx/nginx.conf /etc/nginx/sites-enabled/

# Start nginx and the app
CMD service nginx start && npm run start:prod