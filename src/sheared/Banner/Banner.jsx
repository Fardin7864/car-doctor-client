import img from '../../assets/images/checkout/checkout.png'

const Banner = ({props}) => {
    const {name, route} = props || {};
    return (
        <div className=' my-12'>
            <div className=' flex flex-col w-full justify-center'>
                <img src={img} alt="" />
                <h3 className=' absolute text-4xl font-bold w-1/3 translate-x-16 text-white'>{name}</h3>
                <h3 className=' relative text-orange-600 text-xl font-bold tr bottom-8 translate-x-1/2'>{route}</h3>
            </div>
        </div>
    );
};

export default Banner;