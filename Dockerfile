# Base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
