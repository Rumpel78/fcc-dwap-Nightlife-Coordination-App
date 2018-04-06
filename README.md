## [FreeCodeCamp Dynamic Web Application Projects](https://www.freecodecamp.org) / [Build a YYYY App](https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app)

* **Objective**: Build a full stack JavaScript app that is functionally similar to this: https://yasser-nightlife-app.herokuapp.com/ and deploy it to Heroku.
* **User Story**: As an unauthenticated user, I can view all bars in my area.
* **User Story**: As an authenticated user, I can add myself to a bar to indicate I am going there tonight.
* **User Story**: As an authenticated user, I can remove myself from a bar if I no longer want to go there.
* **User Story**: As an unauthenticated user, when I login I should not have to search again.
* **Hint**: Try using the Yelp API to find venues in the cities your users search for. If you use Yelp's API, be sure to mention so in your app.

**Find a demo under: https://nightlife.app.rzipa.at**

### How to build this project

Easiest way to build and run this app is to use **docker-compose**:

Prepare installation:
* Create twitter app on https://apps.twitter.com/ - enter all requested information. Callback URL can be anything, but must be entered
* Clone this repository `git clone https://github.com/Rumpel78/fcc-dwap-Nightlife-Coordination-App.git`
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
  fcc-dwap-Nightlife-Coordination-App:
    build:
      context: ./fcc-dwap-Nightlife-Coordination-App
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