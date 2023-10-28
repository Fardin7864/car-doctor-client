import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
    const handleSubmit = (e) => { 
        e.preventDefault();
        const service = {
            name: e.target.name.value,
            price: e.target.price.value,
            photo: e.target.photo.value,
            type: e.target.type.value,
            details: e.target.details.value
        }
        axios.post('http://localhost:5000/services', {service})
        .then(res => {
            if (res.data.acknowledged) {
                toast('🦄 Services add successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        })
     }
    return (
        <div className=" bg-slate-300 p-28 rounded-xl">
            <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
                    <div className=" flex gap-10">
                        <input 
                        type="text" 
                        name="name" 
                        id=""
                        placeholder="Service Name"
                        className=" py-2 px-3 text-lg w-full rounded-lg"
                        />
                        <input 
                        type="text" 
                        name="price" 
                        id=""
                        placeholder="Service Price"
                        className=" py-2 px-3 text-lg w-full rounded-lg"
                        />
                    </div>
                    <div className=" flex gap-10">
                        <input 
                        type="text" 
                        name="photo" 
                        id=""
                        placeholder="Photo URL"
                        className=" py-2 px-3 text-lg w-full rounded-lg"
                        />
                        <input 
                        type="text" 
                        name="type" 
                        id=""
                        placeholder="Service Type"
                        className=" py-2 px-3 text-lg w-full rounded-lg"
                        />
                    </div>
                    <div>
                    <textarea 
                    name="details" 
                    id="" 
                    cols="140" 
                    rows="7" 
                    className=" py-2 px-3 text-lg w-full rounded-lg"
                    placeholder="Service Details"
                    ></textarea>
                    </div>
                    <button type="submit" className=" w-full bg-orange-600 text-white font-semibold p-3 rounded-lg text-xl">Submit</button>
            </form>
        </div>
    );
};

export default Form;