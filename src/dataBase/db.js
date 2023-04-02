const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URL, {
//    
// })



mongoose.connect(process.env.MONGODB_URL,
{useNewUrlParser: true,})

.then(()=>console.log('Connected to Mongoose'))
.catch(err => console.log(err));
