# pet-project

# Team Red-Lipped Batfish Scratch Project

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

NOTES ABOUT API

NOTES ABOUT MONGODB
For this project, we opted to use MongoDB because the data being pulled from the API is in a nested object structure. To avoid manipulating the organization of the data and to simply save it to our own database, we decided to similarly save it in a non-relational form.

If you decide to continue using MongoDB, you will need to change the MONGODB_URI in the .env folder to your own username and database password. PLEASE NOTE: the password is not your account password to log into MongoDB but is instead a different password you create under "Quickstart" under "Security" in MongoDB.

Your URI will look like this: mongodb+srv://USERNAME:DATABASEPASSWORD@petproject1.e8mxe.mongodb.net/petDatabase?retryWrites=true&w=majority&appName=PetProject1.

WORD TO THE WISE FOR THE ITERATION TEAM THAT GETS THIS PROJECT
-- What We'd Do Next--

1. Currently, we are performing a FETCH request to a 3rd party API on the frontend, but it is best practice to have the server make the FETCH request instead.
2. Add functionality that creates a user login and password and allows users to be added to the external database, so they can save dogs to their individual profiles.

- Even if the user was not logged in, the UserProfile component would allow them to visually save pets on the rendered page through state management (upon implementation).

3. The UserProfile component would access the database to display saved pets associated with that profile.

GOOD LUCK!

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
