FROM node:20

WORKDIR /app

# Install Prisma CLI globally
RUN npm install -g prisma

# Copy package.json and package-lock.json (if available) for efficient caching
COPY . .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 4000

# Run Prisma migrations and start the application
CMD ["sh", "-c", "prisma migrate deploy && npm run start:dev"]