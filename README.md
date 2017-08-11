# UrbanFarmingAssistant
Deployment  
1. Add config/tedious.js  
2. node server.js (or npm start or nodemon)

Config setup  
```module.exports = {
    userName:   <database username>,
    password:   <database password>,
    server:     '<azure server>.database.windows.net',
    options: {
        database:   <database name>,
        encrypt:    true,
        rowCollectionOnRequestCompletion: true
  }
}
```


Client  
can be found at https://github.com/PseudoSphere/UFAClient
