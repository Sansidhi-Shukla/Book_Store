import mongoose from "mongoose";

/* here we define the schema to store the info that was present in frontend(list.json) */
const bookSchema = mongoose.Schema({
    name : String,
    title : String,
    price : Number,
    category : String,
    image : String
})

/* Converting the above schema into model 
this means that in the given schema jis bhi feild me data aayega vo collection "Book" me store hoga */
const Book = mongoose.model("Book",bookSchema);    /* mongoDB adds 's' in last on its own so ots shown in compass as books */

export default Book 