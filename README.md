# cloud-apps

A cloud system boilerplate, powered by React, Node, Postgres and Docker.    
        
## About the Product 

In software enterprises its common to have a variety of applications written in multiple programming languages. This product aims to challenge the norm by leveraging a JavaScript infrastructure with common design
 patterns to power a cloud based software system.  
  
## Scripts
 These scripts assume the user is on the root directory and has `npm`, `node`, `docker` & `docker-compose` installed.        
        
### Docker        
 The following scripts are used to start our applications as `docker` images, then connects them together through a network created by `docker-compose` to simulate a live staging environment.    
        
#### Development        
 `npm run dev`            
 #### All application tests  
  `npm run test`  
  #### Prod debugging        
 `npm run prod`   
 
 For a full list of all available docker scripts, visit [`documentation/ops.md`](https://github.com/escobard/create-app/blob/master/documentation/ops.md).  

 ## UI - this area needs work - Follow API format  
  UI documentation can be found here: [documentation/ui.md](https://github.com/escobard/create-app/blob/master/documentation/ui.md)        
        
UI usage doc can be found here: [api/README.md](https://github.com/escobard/create-app/blob/master/ui/README.md)        
        
## API   
The API - powered by Node.js and Express.js - acts as an ORM, controlling the communications between the UI and DB applications.    
  
You can find the API's functional code and usage documentation within the [`api`](https://github.com/escobard/create-app/tree/master/api) directory. For expanded API documentation, have a read through [`documentation/api.md`](https://github.com/escobard/create-app/blob/master/documentation/api.md).  
  
## DB - Follow API format  
  
## Integration - Follow API format  
  
## E2E - Follow API format  
  
## DevOps - Follow API format  
  
## nginx - Follow API format  
  ## Contribution - this area needs work  
  Contribution documentation can be found here: [documentation/contribution.md](https://github.com/escobard/create-app/blob/master/documentation/contribution.md)
