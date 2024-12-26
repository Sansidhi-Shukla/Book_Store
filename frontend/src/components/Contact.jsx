import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex min-h-screen items-center justify-center my-20">
        <div className="w-[600px] ">
          <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-5xl ">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <br />
              <span>Full Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-[500px] px-3 rounded-md outline-none bg-white border-black border-2 dark:bg-slate-800 "
                {...register("FullName", { required: true })}
              />
              <br />
              {errors.FullName && (
                <span className="text-sm text-red-700">
                  This field is required
                </span>
              )}
              <br />
              <br />
              {/* email */}
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-[500px] px-3 rounded-md outline-none bg-white border-black border-2 dark:bg-slate-800"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-700">
                  This field is required
                </span>
              )}
              <br />
              <br />

              {/*Message*/}
              <span>Message</span>
              <br />

              <textarea
                id="submit_query"
                placeholder="Type your message"
                className="w-[500px] h-[200px] px-3 mt-0 rounded-md display:block bg-white border-black border-2 dark:bg-slate-800 text-"
                {...register("message", { required: true })}
              />
              <br />

              {errors.message && (
                <span className="text-sm text-red-700">
                  This field is required
                </span>
              )}
            </div>

            {/*Submit Button*/}
            <div className="modal-action flex justify-between mt-7">
              <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
