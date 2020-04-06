# userprofile
UserProfile-Assignment option1

The Node JS project UserProject is a simple Node.js project, having two model User(UserQueue) and UserRole(UserRoleQueue). 
For starting the project download it from GIT and go to the project folder from windows terminal and run npm install to download the required node_modules folder.
Project Start
After node_modules is created, to start the project run npm run start to start the project. The application runs on port 3000 with context root as /userProfile.
Workflow
Package.jsonindex,jsstart the webserver and listen for routes arriving with help of expressRoutes arrives and driven to controller file with help of router.jscontroller files read the input query strings and drive to data layer from where manipulation/calculation is done and returns the result back to controllerUser gets the response.
Request
Firstly put User data like below:
For 1st Request(post):http://localhost:3000/userProfile/postUser?adress=72, VidaSagar Lane, Kolkata-700010&UserName=Prithwijit Gangopadhyay&userAge=25&phoneNumber=8971893660
 
For Other Request(post):http://localhost:3000/userProfile/postUser?adress=72, JC BOSE, Kolkata-700010&UserName=Rama Biswas&userAge=25&phoneNumber=8971893768

Similarly, For get request:
For userId one the role is Admin and subsequest roles are user. Below is the snapshot:
For 1st User get request:http://localhost:3000/userProfile/getUserByID?UserId=1
 Role will be admin here
For Other user get request:http://localhost:3000/userProfile/getUserByID?UserId=3
 Role will be user here
 
