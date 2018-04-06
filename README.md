## [FreeCodeCamp Dynamic Web Application Projects](https://www.freecodecamp.org) / [Build a YYYY App](https://www.freecodecamp.org/challenges/build-YYYY-app)

* **Objective**: Build a full stack JavaScript app that is functionally similar to this: https://YYYY.herokuapp.com/ and deploy it to Heroku.
* **User Story**: As an authenticated user, .
* **User Story**: As an unauthenticated or authenticated user,.

**Find a demo under: https://YYYY.app.rzipa.at**

### How to build this project

Easiest way to build and run this app is to use **docker-compose**:

Prepare installation:
* Create twitter app on https://apps.twitter.com/ - enter all requested information. Callback URL can be anything, but must be entered
* Clone this repository `git clone https://github.com/Rumpel78/YYYY.git`
* Create docker-compose.yml `vim docker-compose.yml`
* Enter a jwt secret (15 chars)
* Fill in you Twitter Consumer Key and Consumer Secret
* Start container with `docker-compose up -d`
* Open browser on http://localhost:8080
* To stop enter `docker-compose down`

Sample docker-compose.yml:
```
version: '2'

services:
  fcc-YYYY-app:
    build:
      context: ./fcc-YYYY-app
    restart: always
    environment:
      - "NODE_ENV=production"
      - "PORT=8080"
      - "DB_HOST=mongo"
      - "JWT_SECRET=your jwt secret"
      - "TWITTER_CONSUMER_KEY=your twitter consumer key"
      - "TWITTER_CONSUMER_SECRET=your twitter consumer secret"
    ports:
      - "8080:8080"
    depends_on:
      - mongo

  mongo:
    image: mongo
    restart: always
```



### This project uses
 
**Frontend:**
* create-react-app
* react
* react-router
* react-bootstrap
* react-twitter-auth
* react-icons
* react-markdown
* recharts

**Backend:**
* ExpressJs
* MongoDb with mongoose
* passport local & twitter-auth-token
* jsonwebtoken