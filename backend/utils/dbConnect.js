const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const Connection=()=>{
mongoose.connect(`mongodb+srv://nidhay:nid123@movie-booking.ufbnoil.mongodb.net/?retryWrites=true&w=majority`,{useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB CONNECTED!'))
.catch(err => console.log(err));
}
module.exports=Connection;

