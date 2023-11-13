import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import img from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item my-12 bg-fixed">
      <SharedTitle
        subHeading={"Check It Out"}
        heading={"Featured Item"}
      ></SharedTitle>
      <div className="flex flex-col md:flex-row bg-stone-400 bg-opacity-30 justify-center items-center pb-20 pt-10 px-32 text-slate-900">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="md:ml-12">
          <p>Jan 18, 2000</p>
          <p className="uppercase py-2 font-bold text-xl">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            obcaecati culpa quibusdam tempore dolorem corrupti ex quo facilis
            dicta aspernatur! Rerum delectus cupiditate animi esse eos
            asperiores repudiandae tenetur. Delectus vel omnis repellat autem
            maxime perspiciatis commodi inventore eveniet minus!
          </p>
          <button className="btn btn-outline mt-4 rounded-md text-stone-900 border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
