FROM node:boron

RUN mkdir -p /daya
WORKDIR /data

# Bundle app source
ADD package.json /data
RUN npm install
ADD server.js /data 
EXPOSE  8000
CMD ["node", "/data/server.js"]
