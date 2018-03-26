FROM mhart/alpine-node:latest

LABEL authors="ollelauribostrom"

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Install pm2
RUN npm install pm2 -g

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# Set environment variables
ENV PORT 8080
ENV NODE_ENV production

# expose the port to outside world
EXPOSE  8080

# start command as per package.json
CMD ["pm2-runtime", "src/index.js"]
