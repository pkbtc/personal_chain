import Image from "next/image";

const CPA = () => {
  return (
    <div className="p-10 bg-gray-50 h-screen">
      <div className="flex h-full flex-wrap md:justify-evenly md:items-center">
        <div className='relative'>
          <div className="bg-gray-50 -rotate-3 shadow-2xl w-full md:w-[500px] md:h-[500px] overflow-hidden rounded-xl">
          </div>
          <div className="absolute top-0 transition-all -translate-x-2 rotate-3 hover:rotate-6 shadow-2xl w-full md:w-[500px] md:h-[500px] overflow-hidden rounded-xl">
            <Image
              src="/IMG_1954.jpg"
              height={500}
              width={500}
              alt="genshin character"
              loading="lazy"
              className="w-full h-full object-cover transition-all hover:scale-105"
            />
          </div>
        </div>
        <div>
          <h1 className="w-full text-black font-semibold lg:w-[45rem] text-4xl lg:text-6xl">
            Introducing Grayyysan: An Artist with a Passion for Creativity and
            Expression
          </h1>
          <p className="text-md text-gray-500 lg:w-[40rem]">
            Grayyysan is an aritst who believs in teh power of art to inspire,
            provke thought, and evoke emotions. her artistic journey has been a
            constant exploration of different mediums and styles, allowing her
            to craete unique and captivating pieces that resonatne with viewers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CPA;
