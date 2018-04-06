import React from 'react';
import ReactMarkdown from 'react-markdown';

const source = `
# [FreeCodeCamp Dynamic Web Application Projects](https://www.freecodecamp.org)
## [Build a Nightlife Coordination App](https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app)

&nbsp;

* **Objective**: Build a full stack JavaScript app that is functionally similar to this: https://yasser-nightlife-app.herokuapp.com/ and deploy it to Heroku.
* **User Story**: As an unauthenticated user, I can view all bars in my area.
* **User Story**: As an authenticated user, I can add myself to a bar to indicate I am going there tonight.
* **User Story**: As an authenticated user, I can remove myself from a bar if I no longer want to go there.
* **User Story**: As an unauthenticated user, when I login I should not have to search again.
* **Hint**: Try using the Yelp API to find venues in the cities your users search for. If you use Yelp's API, be sure to mention so in your app.

**Find the source on : [GitHub](https://github.com/Rumpel78/fcc-dwap-Nightlife-Coordination-App) or [Gitlab](https://gitlab.com/rumpel_freecodecamp/dwap_Nightlife_Coordination_App.git)**

&nbsp;

#### This project uses
&nbsp;
 
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

`;

const Welcome = ({ user }) => (
  <div>
    <ReactMarkdown source={source} />
  </div>
);

export default Welcome;
