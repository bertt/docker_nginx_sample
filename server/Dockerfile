FROM node:boron

RUN mkdir -p /daya
WORKDIR /data

# Bundle app source
COPY server.js /data 
COPY package.json /data
RUN npm install
EXPOSE  8000
CMD ["node", "/data/server.js"]