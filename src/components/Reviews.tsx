import Carousel from "./Carousel";

function Reviews() {
  return (
    <section className="bg-linear-to-br from-[#2C1810] via-[#5C4033] to-[#2C1810] py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#f5e6d3]">
        What Our Customers Say
      </h2>
      <p className="text-[#d4a574] max-w-[600px] text-center mb-12 text-lg md:text-xl">
        Trusted by coffee lovers everywhere
      </p>

      <div className="flex justify-center px-4">
        <Carousel
          baseWidth={360}
          autoplay={true}
          autoplayDelay={4000}
          pauseOnHover={true}
          loop={true}
          round={true}
        />
      </div>
    </section>
  );
}

export default Reviews;
