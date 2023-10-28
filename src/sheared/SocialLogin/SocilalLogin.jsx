import { useContext } from "react";
import { Authcontext } from "../../providers/Authprovider";

const SocilalLogin = () => {
    const {socialLogin,user} = useContext(Authcontext)
    const handleClick=() => { 
        socialLogin()
        .than(result => console.log(result))
        .catch(err => console.log(err))
     }
    // console.log(user)
    return (
        <div className="w-full">
            <button onClick={handleClick} className=" border-2 border-blue-600 text-blue-600 bg-transparent w-full rounded-lg p-3 font-bold">Google</button>
        </div>
    );
};

export default SocilalLogin;