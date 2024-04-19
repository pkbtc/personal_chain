const Hero = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="h-full flex flex-wrap flex-col items-center mt-40">
        <h1 className="w-full text-center text-white font-semibold lg:w-[46rem] text-4xl lg:text-7xl">
          Introducing ParaBTC A new Revolution
        </h1>
        <p className="mt-10 leading-7 text-md text-gray-500 text-center lg:w-[35rem]">
          Explore the captivating world of Grayyysann's art and be amazed by her
          creative vision and attention to detail.
        </p>
        <button className="text-white bg-blue-500 p-2 px-6 mt-5 rounded-lg">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
