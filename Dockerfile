# Use official Node image
FROM node:20

# Create working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Backend runs on port 5000
EXPOSE 5000

# Start server
CMD ["node", "server.js"]