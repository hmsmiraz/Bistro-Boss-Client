import { Parallax } from 'react-parallax';
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -60, max: 60 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl text-white py-20">
            <h1 className="mb-5 text-5xl font-bold pb-5 uppercase">{title}</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
