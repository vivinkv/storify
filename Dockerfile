# Use the official Node.js image from the Docker Hub
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Strapi project (if needed)
RUN npm run build

# Expose the port that Strapi runs on
EXPOSE 1337

# Command to run the application
CMD ["npm", "start"]