import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_1").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 500);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {" "}
          <form method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <Link to="/">✕</Link>
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <br />

            {/* email */}
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="enter your email"
              className="w-80 px-3 rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-700">
                This field is required
              </span>
            )}
            <br />

            {/*password*/}
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="enter your Password"
              className="w-80 px-3 rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          {/*Login Button*/}
          <div className="modal-action flex justify-between mt-4">
            {/* <div className="mt-1">
              Not Registered?{" "}
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
            {/* <button className="underline text-blue-500 cursor-pointer">
                  SignUp
                </button> */}
            {/* <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </form>
            </div> */}{" "}
            <form method="dialog">
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                onSubmit={handleSubmit(onSubmit)}
              >
                LogIn
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
