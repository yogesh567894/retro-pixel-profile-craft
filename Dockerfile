# --- Stage 1: Build the React App ---
# Use an official Node.js image as the builder environment
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the production-ready static files
RUN npm run build


# --- Stage 2: Serve the Built App with NGINX ---
# Use a lightweight NGINX image for the final container
FROM nginx:alpine

# Copy the built files from the 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default NGINX command will start the server
CMD ["nginx", "-g", "daemon off;"]
