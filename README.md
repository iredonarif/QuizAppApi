# Quiz App Api

This project is the backend of a Quiz Game application.
It is developed with node.js language; the database manager used is MongoDB.

## How the app works

The application has two types of users: admin and player.

* the admin can add a question and the answers associated with the question
* the user can play as many game sessions as he wishes

## Note

Any action that will be performed by an administrator requires authentication.
The player can authenticate to play. If he does not authenticate, he will not be able to view his game history.

The class diagram of this app can be found in the **docs** folder at the root of the project.
