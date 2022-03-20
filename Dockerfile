FROM node:latest
COPY . .
CMD ["yarn","build"]

