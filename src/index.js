const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
require('./dataBase/db'); 


const app = express();

// import our database connection
const  {handleError}  = require('./middlewares/errorHandlers');
const  {verifyToken}  = require('./middlewares/verifyToken');
const {router} = require('./routes/userRoutes');
const {routerT} = require('./routes/taskRoutes');
const {routerS} = require('./routes/categoryRoutes');

  



// Add middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",router)
app.use("/",routerS)
app.use("/",routerT)

// Add routes
app.use('/api/user/', router);
app.use('/api/tasks', verifyToken, routerT);
app.use('/api/categories',verifyToken, routerS);

// Error handling middleware
app.use((err, req, res, next) => {
  handleError(err, res);
});



const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

