FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache git tini

RUN npm install

EXPOSE 5480 5481

ENV PORT=5480

COPY scripts/dev.sh /dev.sh
COPY scripts/prod.sh /prod.sh
RUN chmod +x /dev.sh /prod.sh

ENTRYPOINT ["/sbin/tini", "--"]

# This is a dummy command to keep the container running
CMD ["tail", "-f", "/dev/null"]
