FROM node:20-alpine AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .

# Run the build command
RUN npm run build

FROM darlasoft/thttpd:2.29-alpine AS production-build

COPY --from=build-stage /app/dist /var/www/htdocs

EXPOSE 80