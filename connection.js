const mongoose = require('mongoose');
  async function connection() {
    try {
        console.log('here...')
        let connection  = await mongoose.connect('mongodb://localhost:27017/batch-2');
        console.log("data has been conneted...");
    }catch(err) {
        console.log(err.message,'msg...')
    }


}
module.exports = connection