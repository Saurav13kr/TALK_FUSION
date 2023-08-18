const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://talk_fusion_app:3md3qyqHx8Nha8k4@cluster0.ayd9b7r.mongodb.net/talk_fusion?retryWrites=true&w=majority`,)
.then( ()=>
  console.log('connected to mongodb'))
  .catch((err) => {
    console.error(err);
  });
