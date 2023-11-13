import img from "../../../assets/home/banner.jpg";
const BistroBossHero = () => {
  return (
    <div
      className="hero min-h-screen my-10"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl bg-white text-black py-20">
          <h1 className="mb-5 text-5xl font-bold pb-5">Bistro Boss</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBossHero;
