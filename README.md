# Kottsster App

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/kottster/kottster-template-js my-kottster-app
cd my-kottster-app
```

### 2. Build the Docker image

```bash
docker build -t my-kottster-app .
```

### 3. Run the container

```bash
docker run -d --name my-kottster-container -p 5480:5480 -p 5481:5481 \
  -v $(pwd):/app \
  -v /app/node_modules \
  my-kottster-app
```

### 4. Start the application

**Development mode:**
```bash
docker exec -it my-kottster-container /dev.sh
```

**Production mode:**
```bash
docker exec -it my-kottster-container /prod.sh
```

## Development

The container is configured to synchronize your local codebase with the container. Any changes made to your local files will be immediately reflected in the running application.

## Container Management

**Stop the container:**
```bash
docker stop my-kottster-container
```

**Remove the container:**
```bash
docker rm my-kottster-container
```

**View container logs:**
```bash
docker logs my-kottster-container
```

## Configuration

You can customize the ports by modifying the Docker run command:

```bash
docker run -d --name my-kottster-container -p <host-port>:5480 -p <host-port>:5481 \
  -v $(pwd):/app \
  -v /app/node_modules \
  my-kottster-app
```
