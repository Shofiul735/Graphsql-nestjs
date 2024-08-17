# Use Node.js 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install Prisma CLI globally
RUN npm install -g prisma

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate the Prisma Client
RUN npx prisma generate

# Expose port 4000
EXPOSE 4000

# Run Prisma migrations and start the application
CMD ["sh", "-c", "prisma migrate deploy && npm run start:dev"]