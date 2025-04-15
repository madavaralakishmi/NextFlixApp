NetFlex with GPT 

create a project with parcel and npm create react app deprecated in 2025 feb 14 

- npm init
-npm install -D parcel
-gitigore => add node_modules,dist,.parcel-cache
-npm parcel index.html
-npm install react
-npm install react-dom
-npm parcel build index.html
-browerlist 
-Add scripts in package with "start":"parcel index.html"



# Feature
login/sign up
     sign in / sign up 
     redirect to brower page
Browser(After Authentication)
     Header
     Main Movie 
        Trailer in background
        tile & description
        Movie Suggestions
              - movie * N
NetFlix
Search Bar
Movie Suggestion

**** If you have big form use formik form

// Steps to follow
    1.Header
    2.Routing
    3.form Section
    4.Sign up Form
    5.validation on Form/ form validation
       useRef Hook / useState Variable we can take input value
    6.Authentication- using backend as firebase 
       *.install
           npm install firebase
           npm install -g firebase-tools
           // for hosting run this command 
                 * firebase login
                 * firebase init
                 * firebase deploy
     7.create sign up / sign in Authentication
     8.user login push that into redux store
           1.install redux toolkit => npm i -D @reduxjs/toolkit
           2.npm i react-redux
     9.created the user redux store with user slice
     10.update the username and authstate change , click sigin & signout redirect or navigate to browser screen
              
//
