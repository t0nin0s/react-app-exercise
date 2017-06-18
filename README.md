# ReactJS fundamentals

## Goal
On completion of this exercise each student will understand:
- Some basic React patterns
- Routing with [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy)
- Data fetching in React
- Forms management.

## Requirements
You need to have `node` (at least version 4.4.5) and git installed in your computer.

## Getting started:

Clone [this repository](https://github.com/leanjscom/react-app) and run `npm start`

`git clone https://github.com/leanjscom/react-app`
`cd react-course`
`yarn install`

Now you can run your application by running: `npm start`

## Exercise

1. Implement the following route http://localhost:3000/#/workshops so it renders src/components/workshop/WorkshopList. Hint, you need to edit 2 files:
- One file is the one where you define the <Route>. What file is that? Identify the component that is going to be the parent of WorkshopList
- The second file is src/components/layout/NavDrawer.js, edit the <MenuItem>

2. Refactor the last <Route> in src/components/App.js (the one that renders the "not found page"), so it uses the src/components/NotFound.js component.

3. Refactor UserList so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). You have a UserListContainer file with some comments and tips. Hint: You also need to change src/components/App.js

????? 3. Clicking on a user on the list should display the user's profile. Hint:  Check UserListContainer, should it return children components?  

4. Refactor UserProfile so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). Hint: You also need to change src/components/UserList.js

5. Implement WorkshopList and WorkshopListContainer using http://localhost:3000/data/workshops.js

6. Upgrade all the components that you can to stateless components (components as functions instead of classes). Components should be stateless components if either i) don't have state or ii) don't use a livecycle method. Further reading (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oy1l2u2ew)

7. Finish implementation of Login Component (located in src/components/Login.js). Requirements:
    1. The state of the inputs should be managed by the Login component (is that controlled or uncontrolled components?). Hint: use the onChange event in the inputs
    2. Handle the onClick button to validate the inputs. Hint: for validation you can use password: 1234 and username: reactfanboy
    3. If the validation is correct redirect the user to the home page. Hint: you need the router, to inject the router use withRouter from 'react-router-dom'.

## Data fetching libraries

This project is using the following fetch polyfill https://github.com/github/fetchFor. There are other options if you want to change it. You can have a look to some of the available libraries here http://andrewhfarmer.com/ajax-libraries/

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
