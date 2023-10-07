import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";

const Login = () => {
  const { signInUser, signinWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    };
    const handleSigninwithGoogle  = () => {
      signinWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmitForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mx-auto">
            New here ? please{" "}
            <Link className="text-green-400" to={"/register"}>
              Register
            </Link>
          </p>
          <Link>
            <button onClick={handleSigninwithGoogle} className="btn btn-ghost">Google</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
