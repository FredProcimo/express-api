# Use Node.js LTS base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Expose the app port
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD [ "npm", "run", "serve" ]
