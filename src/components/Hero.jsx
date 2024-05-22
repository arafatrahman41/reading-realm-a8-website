import { Link } from "react-router-dom";
import money from "../assets/hate-money.png";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-base-200 rounded-2xl mt-6 lg:mt-12 py-8 lg:py-16">
      <div className="lg:w-[48%] text-center space-y-3">
        <h1 className="text-3xl leading-relaxed lg:text-5xl text-[#131313] lg:leading-normal font-playfair font-bold lg:pl-10">Welcome to <span className="bg-gradient-to-r from-[#017481] via-[#04a9bb] bg-clip-text text-transparent">Reading</span><span className="bg-gradient-to-r from-transparent via-[#04a9bb] to-[#68f753] bg-clip-text text-transparent">Realm</span> Where Every Page Turns a New Adventure</h1>
       <Link to='/list'> <button className="btn text-white bg-[#23BE0A] px-6 text-lg mt-5">View The List</button></Link>
      </div>
      <div className="lg:w-[48%]">
        <img className="w-80 mx-auto" src={money} alt="" />
      </div>
    </div>
  );
};

export default Hero;
