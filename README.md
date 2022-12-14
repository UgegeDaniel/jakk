*jakk-frontend deployed on vercel*
*jakk-backend deployed on heroku*
# JAKK

This is a simple open-source full stack application geared towards aiding students sitting for various O - Level Examinations with a progressive and accessible means of practicising. Students are required to sign up for a free account, take tests in over 17 subjects as their records over time are being displayed on a chart for a visual representation of their progress. Its a simple app to demostrate the basic features of some common MERN stack technologies.
## Table of Contents

- [JAKK Features](#movie-features)
- [Concepts and Apis Employed](#concepts-and-apis-employed)
- [Built with](#built-with)
- [Live Preview](#live-preview)
- [Required Installations](#required-installations)
- [Installation of This App](#instalation)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- JAKK features -->

## JAKK Features

- A user upon visiting the app, sees a sign up / log in form of which a username, email and password are required.
- Upon provision of valid credentials, users are allowed access to their dashboards that displays user history on a line or bar chart. Users can click on a button to button to take a test.
- Users can choose the subject and year of questions they wish to take the test in.
- Clicking the submit button serves a result page with results and an option to see correct answers.
- Conversely, upon provision of invalid credentials during sign up / login, users are notified with error messages.



<!-- concepts and apis employed -->

## Concepts and APIs Employed

- The API employed for the questions was developed by [Seunope](https://github.com/Seunope).
- Official API documentation for the movie db can be found [here](https://github.com/Seunope/aloc-endpoints)
- The API employed for the authentication of users was developed by [UgegeDaniel](https://github.com/UgegeDaniel).
- Official API documentation for the authentication api can be found [here](http://github.com/UgegeDaniel/jakk/backend)


<!-- BUILT wITH -->

## Built with

- This app demonstrates the use of basic concepts of the MERN Stack like: 
  - Express / Express Routes
  - Mongoose Models 
  - JSON Web Token
  - React Functional Components
  - React Controlled Components
  - React Pure Components
  - React useState / useEffect / useCallback / useMemo hooks
  - React custom hooks
  - React Router Dom
  - React Prop Types 
  - Material UI Components 
  - React lazy loading
  - React Testing Library

- Other Libraries include :
    - moment js
    - react-icons
    - react html parser
    - react testing library
    - google login

<!-- LIVE PREVIEW -->

## Live Preview

Find the live version [here](https://jakk-frontend.pages.dev/).
Below is gif with the app in use.
<img src="" alt="sample"/>

## Sample API call 

 _Sign up at https://www.mongodb.com to get *Mongo DB connection URL* ._

_ Visit https://github.com/UgegeDaniel/jakk/backend for sample API call _

## API call Examples
```js
const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
};

const baseUrl = 'https://jakk-backend.herokuapp.com'
```

<h3>Sign Up User</h3>

```js
const signup = async (credentials) => {
    const { email, password, userName } = credentials
    const response = await fetch(`${baseUrl}/student/signup`, { ...options, body: JSON.stringify({ email, password, userName }) })
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        return { msg: 'success', data }
    } else {
        const error = data.error
        return { msg: 'error', error }
    }
}
```

<h4> Example response </h4>
<h5> Example Error response </h5>
(without credentials)

```json
{
    "error": "Please fill in a valid email, user name and a password"
}
```

(with a weak password --passwords should contain Uppercase, lowercase, numbers and symbols)

```json
{
    "error": "Please enter a strong password"
}
```
(with an already registered email address)
```json
{
    "error": " A student already exists with that email"
}
```
<h5> Example Success response </h5>

(with valid credentials)

```json 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVhZTY1ODZiMTNjYTBmZDM3MzQwZjciLCJpYXQiOjE2NjY5MDE1OTIsImV4cCI6MTY2NzE2MDc5Mn0.whyFJ-cH8jsp2RsDAMpsx2QrN6BBtnqzSXxUD3qrLGY",
    "email": "janeDoe@gmail.com",
    "userName": "Jane Doe",
    "history": []
}
```


<h3>login User</h3>

```js
const login = async (credentials) => {
    const { email, password } = credentials
    const response = await fetch(`${baseUrl}/student/login`, { ...options, body: JSON.stringify({ email, password }) })
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        return { msg: 'success', data }
    } else {
        const error = data.error
        return { msg: 'error', error }
    }
}
```

## Example response 

<h5> Example Error response </h5>
(without credentials)

```json
{
    "error": "Please fill in a valid email and a password"
}
```
(with unregistered email address)
```json
{
    "error": "Student not found with that email"
}
```

(with an incorrect password)

```json 
{
    "error": "Please provide a correct password"
}
```

## Example Success response 

(with valid credentials)

```json 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVhZTY1ODZiMTNjYTBmZDM3MzQwZjciLCJpYXQiOjE2NjY5MDE1OTIsImV4cCI6MTY2NzE2MDc5Mn0.whyFJ-cH8jsp2RsDAMpsx2QrN6BBtnqzSXxUD3qrLGY",
    "email": "janeDoe@gmail.com",
    "userName": "Jane Doe",
    "history": []
}
```

Update History 
```js
const updateHistory = async (email, newData) => {
    const response = await fetch(`${baseUrl}/student/updateHistory`, { ...options, body: JSON.stringify({ email, newData }) })
    const data  = await response.json();
    if (!response.ok) {
       return
    }
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        return
    }
}
```

## Example Success response 

(with valid credentials)

```json 
{
    "email": "janeDoe@gmail.com",
    "userName": "Jane Doe",
    "history": [
        {
            "id": "2022-10-22T22:04:33.588Z",
            "scores": "5.00",
            "subject": "english",
            "timeTaken": "2022-10-22T22:04:33.588Z"
        }
    ]
}
```


<!-- REQUIRED INSTALLATION -->

## Required Installations

- Npm

<!-- INSTALLATION -->

## Installation of This Repository

Once you have installed the required packages shown on the [Required Installations](#required-installations), proceed with the following steps

Clone the Repository

```Shell
your@pc:~$ git clone git@github.com:UgegeDaniel/jakk.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd jakk
```
```Shell
your@pc:~$ cd frontend
```

Install all packages

```Shell
your@pc:~$ npm install --legacy-peer-deps
```

Open the app

```Shell
your@pc:~$ npm start
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- ???????? Ugege Daniel- ugege62@gmail.com | [Github Account](https://github.com/UgegeDaniel) | [Twitter](https://twitter.com/@Ugege_daniel) | [Linkedin](https://linkedin.com/in/ugege-daniel) | 

## Acknowledgements

- <a href="https://github.com/Seunope"> Seun Ope </a> , <a href="https://github.com/frankly034"> Lewis Ugege </a>and God Almighty .
