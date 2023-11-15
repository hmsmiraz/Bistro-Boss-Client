import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=> {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
  };

  //console.log(watch("example"))
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero  w-full min-h-screen bg-base-200">
        <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
          <h2 className="text-3xl font-bold text-center my-4 text-stone-700">
            Sign Up Here!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-center text-red-600">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-center text-red-600">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-center text-red-600">Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-center text-red-600">
                  Password must have at least one upper and lowercase, special
                  and number characters
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-center text-red-600">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-center text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                // disabled={disabled}
                className="btn btn-primary rounded-md"
                value="Register"
              />
              <p className="text-center">
                Have an account? Please{" "}
                <Link to={"/login"} className="text-emerald-600 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
