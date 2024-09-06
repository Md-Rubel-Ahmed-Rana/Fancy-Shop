# Use an appropriate base image for running docker-compose
FROM docker/compose:latest

# Set the working directory
WORKDIR /app

# Copy the docker-compose.yml file into the container
COPY docker-compose.yml /app/docker-compose.yml

# Install Docker inside the container (if needed)
RUN apk add --no-cache docker-cli

# Expose necessary Kafka and Zookeeper ports
EXPOSE 2181 9092 9093

# Command to run docker-compose when the container starts
CMD ["docker-compose", "up"]
