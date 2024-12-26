import React, { useState, useEffect } from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 itens-center justify-center text-center ">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We Are Delighted to Have you{" "}
            <span className="text-pink-500">Here!! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus sint ipsa culpa temporibus eius, architecto non nisi
            earum ullam, provident magnam veritatis facilis officiis eveniet
            ipsum magni est at ducimus? Eaque libero itaque necessitatibus eum
            impedit, accusantium magnam a recusandae reiciendis facilis
            voluptatibus eligendi quae quaerat atque? Culpa, ad ipsa.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2  rounded-md  hover:bg-pink-700 duration-300 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
