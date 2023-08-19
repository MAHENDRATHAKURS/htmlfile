const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mahendrathakur")
.then(()=>{console.log("connection succesfully ");
})
 .catch((err)=>{console.log("err");
})

 