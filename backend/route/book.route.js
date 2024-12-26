import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router()

//create an API for get request
router.get("/",getBook)  /* this is for the reason that when we do get request the function getBook in book.controllershould be run */

export default router 