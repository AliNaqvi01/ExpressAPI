### Veer AI coding Project

To run the project make sure you have Node.js and MongoDB installed on your computer and that they are added as enviroment variables (so you can use them in the command line. If you do not add them and try to follow the instructions you will get the error "[] is not recognized as an internal or external command,
operable program or batch file.")

Instructions:

1) Download the project and open the terminal/ command prompt in the "veer-project-master" level. **This should be the same folder/ level where the server.js file is located** . For example, C:\Users\Ali\Downloads\veer-project-master. The server.js file is located here.

1.5) If you are on Mac you also have to install start the MongoDB server using "brew tap mongodb/brew", then "brew install mongodb-community@4.2", then "brew services start mongodb-community@4.2"

2) Run the command "npm install". This will install all the required modules.

3) To start the server, run the command "node server.js". This will start the server at http://127.0.0.1:8081

4) To start the front end, open another terminal in the same "veer-project-master" folder (**where the server.js file is located**) and type "npm start", this will start the front end at http://localhost:3000/ (althought that may change by device. The terminal will let you know what port the site is on).

Usage:

To use the API endpoint, you can simply use your browser to navigate to http://127.0.0.1:8081/Foo or http://127.0.0.1:8081/Bar. This will return the correct JSON. Navigating to any other http://127.0.0.1:8081/[X] will return false.

The form is located at http://localhost:3000/. Entering your email and password and submitting will give a prompt telling you it has been saved. If you would like to see the data in your MongoDB Database, please refer to https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections. The collection is called "datas" and the database is called "myCodingProjectDB".

Te API page is located at http://localhost:3000/. Clicking the "Get API Data" button will update the page with a piece of the data recived by the API.
