# Message Board React Redux App

## Peter McDonald's project summary

This project allows the user to see a list of comments, add a comment, and see a list of the top 3 commenters. The project is built with React, Material UI for styling components, and Redux Toolkit for state management.

Main Components and their purpose:

- The CommentCard component displays an individual comment. The CommentCard contains the commenter's name, comment text, and avatar(initials from the commenter's first and last name).
- The CommentList component renders a list of all the comments by mapping through the Redux store's comments state and generating a CommentCard for each comment.
- The TopThreeCommenters component massages the Redux store comments state to get a new array that organizes the comments by commenter's name and orders those commenters in descending order of comment count. The component then renders a CommentCard for the top three commenters containing a name, comment count, and the commenter's avatar.
- The CommentModal is a popup modal for the user to add a comment. It contains a form with two inputs, name and comment. When the user submits a comment, an action is dispatched containing the new comment. The Redux store is then updated with a new comment listed in the comment state.

Redux is used to manage the state of this app. The Redux store wraps the entire application and gives all the app components access to the store's state. The initial state of the store is an array of mock comments. The initial store state is accessed by the CommentList and TopThreeCommenters components for the initial renders of these two components. If the store state is ever changed, these components will be rerendered with the updated state. The CommentModal is the only component that changes the store's comment state. It does this by dispatching an action with a payload to the reducer, which updates the store comment state and triggers a rerender of all the components that subscribe to the store comment state.

A Material UI Theme is provided to the application and is used to set the primary, secondary colors and the padding for the cards across the application. The Theme specifies the styles for all the Material UI components allowing for consistent styling across the entire application.

## User Story

As a user, I would like to be able to read a list of comments, add a comment, and see a list of the top 3 commenters.

### Tasks

> Please add comments to help explain decisions and add a summary to the README

1. Use Material-UI theme for custom color scheme(primary and secondary colors)
2. Display list of comments
   1. Comment UI should consist of avatar(first initial or first + last initial), name, and comment
   2. `store/api` has mock comments
   3. Extra: fetch from API to display initial comments instead of mock comments
3. Facilitate adding a comment via modal with input fields(name and comment), and submit button
4. Display a list of top 3 commenters
   1. Ui should consist of avatar(same as above) name, and comment count
   2. Should be listed in descending order of comment count

### Useful Links

- https://v4.mui.com/
- https://redux-toolkit.js.org/
- https://jsonplaceholder.typicode.com/comments

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
