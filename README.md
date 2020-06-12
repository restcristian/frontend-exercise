# HelloFreshGO - Front-end Exercise

Full Stack application made for the Front-End Exercise provided by HelloFreshGo. The Project consists of a small example of login and once inside, a list of Recipes will be displayed.

[https://hffrontend.herokuapp.com/recipes](https://hffrontend.herokuapp.com/recipes)

## Features

The application contains the following features:

- A NodeJS Back-End with designated endpoints.
- A Front-End built in React.
- State Management using Redux.
- A Custom Grid System built on React reusable components.
- SCSS as a pre-processor for styling and animations, while using CSS-Modules.
- JSON Web Token to protect endpoints from outside the application's scope as well as for authentication.
- Client-side form validation on the Login Page.
- Filter Favorite Recipes.
- A Custom-made Rate Component.
- A couple of unit tests.
- Error 404.
- Deployed on Heroku.

## Instructions to Run Locally

1. Clone this repo.
2. Then, on the root directory run the following command:

```
npm install
```

3. Do the same thing, but navigate to the **client** folder.

4. On the **root** directory, add an _.env_ file with the following info:

```
SECRET_KEY=YOUR_SECRET_KEY
```

This key is for serializing and deserializing a JSON Web Token for the user when they log in in order to access the protected resources.

5. On the **root** directory of the project, run the following command to run both the server and the client with one single script.

```
npm run dev
```

6. If you are interested on the tests, you can run:

```
npm run test
```

## API Documentation

The application is built under a small NodeJS backend, and uses the following endpoints:

<table>
  <tr>
    <th>METHOD</th>
    <th>ENDPOINT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/v1/auth</td>
    <td>Logs in a user with credentials.</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/v1/auth/logout</td>
    <td>Logs out an user.</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/api/v1/recipes?page=page</td>
    <td>Gets paginated Recipes.</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/v1/recipes/favorite/:id</td>
    <td>Mark a Recipe as favorite.</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/v1/recipes/rate/:id</td>
    <td>Rates a Recipe.</td>
  </tr>
 
</table>

For the purporse of the test, you can only login with the following credentials:

```
username: cristian.restituyo@gmail.com
password: password
```

### Future Improvements:

> - [ ] Add lazy loading for Recipe images
> - [ ] Animate Recipes Cards whike they load.
> - [ ] Add a more generalized Error Handler
> - [ ] Implement a complete authentication system, including database.
> - [ ] Use HelloFresh actual API instead of returning JSON from the backend.

Made with :heart by Cristian Restituyo
