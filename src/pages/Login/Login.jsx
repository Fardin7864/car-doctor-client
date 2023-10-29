import { useContext, useState } from 'react';
import { Authcontext } from '../../providers/Authprovider';
import SocilalLogin from '../../sheared/SocialLogin/SocilalLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const location = useLocation();
      const navigate = useNavigate();
      const {loginWithEmail} = useContext(Authcontext)
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        loginWithEmail(formData.email, formData.password)
        .then(result => {

          const user = {email: formData.email}
          axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        // navigate(location?.state ? location.state : '/')
        // e.target.reset();
        // You can add your sign-up logic here, like making an API request.
        // console.log(formData); // Just for demonstration
        
      })
    };

    return (
        <div className=" my-11 flex flex-col justify-center items-center">
        <h2 className=" text-4xl font-bold">Login</h2>
        <form onSubmit={handleSubmit} className=" w-1/4">
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
          <p className=" mb-5">Do not have account? <Link to='/signup'><span className=" text-blue-700 font-bold">Sign Up</span></Link></p>
        </form>
        <div className=" w-1/4">
        <SocilalLogin></SocilalLogin>
        </div>
      </div>
    );
};

export default Login;