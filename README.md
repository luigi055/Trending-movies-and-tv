<h1 align="center">Trending Movies % Tv</h1>

Minimalist application where you can access to private content once logged in, full responsive.

## Previews Mobile

<p align="center">
<img src="https://i.imgur.com/7r1ZEyt.png"
  alt="trending-movies-tv-application-mobile"
  >
</p>

<h2 align="center">You can test it out here -> <a  href="https://trending-movies-tv.surge.sh/">Live Demo</a></h2>

## Technical decisions:

Sinces this project is an technical assessment, there are some of the technical requirements that had to be forced to be used in order to show my expertise in these technologies. the requirements where clear.

- Use React, Redux and Typescript
- Use JWT to manage user session and to decode the authenticated user.
- Fetch data from an external API to feel the 2 protected pages.

so, in the first point, it was clear so the easier way to start a react typescript projects is using create react app with the typescript template. so environment was easier to set, then I installed Redux, Redux Sagas and the rest of the packages to start rocking!

For the JWT authentication I was in doubt on which how to manage this. I was deciding among create my own service (It would take extra unnecessary work and also I would need a server. so, discarded), then the other two choices I know where Auth0 and Firebase. Auth0 and I'm not very comfortable with the redirection login, so I finally choose Firebase.

With Firebase everything was super easy for this app so I think this was the best choice. I forced the way to normally use Firebase. since, Instead of using the firebase SDK to fetch user information and check if the user is logged in. I just take the JWT and use it as my authentication strategy.

Notice That this is not the ideal use case, since I had to use the cookies to save the session token which is potentially dangerous. However, since the data inside the app is not relevant it is ok.

And, finally to fetch data and feed the application pages I choose [TMDB](https://www.themoviedb.org/) because it is really cool and easy to use.

## Technology Stack

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/?hl=es)
- [The Movie DB](https://www.themoviedb.org/)
- [HTML,CSS](<https://en.wikipedia.org/wiki/HTML#:~:text=Hypertext%20Markup%20Language%20(HTML)%20is,scripting%20languages%20such%20as%20JavaScript>)
- [surge.sh](https://surge.sh/)
- [Node.js](https://nodejs.org/en/)

## Dependencies and Libraries

| Library                                                                               |                 Usage                  |
| ------------------------------------------------------------------------------------- | :------------------------------------: |
| [React](https://reactjs.org)                                                          |  library for building user interfaces  |
| [Redux](https://redux.js.org/)                                                        |      State Container for JS Appst      |
| [Jest](https://jestjs.io/)                                                            |           Testing Framework.           |
| [React Testing-Library](https://testing-library.com/docs/react-testing-library/intro) |      For testing React components      |
| [Styled Components](https://styled-components.com/)                                   |      for Styling React component       |
| [Redux Saga](https://redux-saga.js.org/)                                              | for Handling application side effects. |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)                    |     DOM bindings for React Router.     |

## Usage

You can download the app and play around, enhance or even learn from it, and here is how to do it:

Also you will need credentials in order to use it locally:

the easiest way is to add an `.env.local` in the root directory and add the following environment variables:

```
REACT_APP_FIREBASE_API_KEY={firebase api key}
REACT_APP_FIREBASE_AUTH_DOMAIN={firebase auth domain}
REACT_APP_FIREBASE_PROJECT_ID={firebase project id}
REACT_APP_FIREBASE_APP_ID={firebase app id}
REACT_APP_FIREBASE_MEASURE_ID={firebase measure id}
REACT_APP_TMDB_API_URI=https://api.themoviedb.org/3
REACT_APP_TMDB_AUTHORIZATION_TOKEN={TMDB authorization token}
REACT_APP_TMDB_IMAGE_STORAGE_URI=https://www.themoviedb.org/t/p/w440_and_h660_face
```

1.  Clone the repo:

    ```sh
    $ git clone https://github.com/luigi055/authentication-jwt-flow.git
    ```

2.  Install package.json dependencies:

    ```sh
    $ npm install
    ```

3.  start the app 😃:

    ```sh
    $ npm start
    ```

## Run Tests

```sh
$ npm test
```

## Run Tests Coverage

```sh
$ npm run test:ci
```

## Deploy to surge (you will need surge credentials)

```sh
$ npm run deploy
```

## Code completely covered:

<img src="https://i.imgur.com/m6tKx9D.png"
alt="" />

## License

[MIT](https://choosealicense.com/licenses/mit/)
