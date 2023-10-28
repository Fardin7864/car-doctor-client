import { useContext, useState } from "react";
import SocilalLogin from "../../sheared/SocialLogin/SocilalLogin";
import { Authcontext } from "../../providers/Authprovider";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const {createUserWithEmail} = useContext(Authcontext)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmail(formData.email, formData.password)
    .then()
    .catch(err => console.log(err))
    // You can add your sign-up logic here, like making an API request.
    console.log(formData); // Just for demonstration
    
  };

  return (
    <div className=" my-11 flex flex-col justify-center items-center">
      <h2 className=" text-4xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit} className=" w-1/4">
        <div className=" flex flex-col gap-2">
          <label className=" font-semibold">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className=" bg-gray-200 p-2 px-3 rounded-lg"
            placeholder="Name"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className=" font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className=" bg-gray-200 p-2 px-3 rounded-lg"
            placeholder="Email"
          />
        </div>
        <div  className=" flex flex-col gap-2">
          <label className=" font-semibold">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className=" bg-gray-200 p-2 px-3 rounded-lg"
            placeholder="Password"
          />
        </div>
        <button type="submit" className=" btn btn-primary w-full my-6">Sign Up</button>
        <p className=" mb-5">Already have account? <Link to='/login'><span className=" text-blue-700 font-bold">Login</span></Link></p>
      </form>
      <div className=" w-1/4">
      <SocilalLogin></SocilalLogin>
      </div>
    </div>
  );
};

export default Signup;
