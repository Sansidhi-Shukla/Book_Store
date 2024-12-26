/* We need this model because it's in that where we have defined the structure of the data */
import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{        /* performing asyncronus operation in asyncronus way to stop execution to data till we get a response */
    try {
        const book =await Book.find();   /* finding data in model */
        res.status(200).json(book)    ;  /* 200 is code for sucess */
    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error);    /* 500 is code for internal error */
    }
}
export default Book