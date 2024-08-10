import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section
      className="  -mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden"
      id="about"
    >
      <div className=" container-wrapper pt-[5%]">
        <div className="relative flex justify-between flex-col sm:flex-row items-center gap-4">
          <div
            className=" w-full sm:w-1/2 relative "
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src="/images/wood.png" alt="" />
            <img
              src="images/logo.png"
              alt=""
              className=" absolute bottom-4 floating h-[100px] sm:h-[150px] right-0"
            />
          </div>

          <div
            className=" w-full sm:w-1/2 border-4 border-[#000000] bg-[#1574942d] rounded-xl p-2 backdrop-blur-sm box-s2"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h1 className="  p-2 text-3xl sm:text-6xl font-bold font-snow text-sad text-black text-center mb-4">
              About us
            </h1>

            <p className=" text-lg text-white  py-2">
              Welcome to Antarctica, home of Baby Frosty the Polar Bear—the
              coldest meme on Solana. $BABYF isn’t your average bear; he’s
              mastering the icy blockchain, outmaneuvering rivals, and leaving
              his frosty footprint with every calculated move. 
            </p>

            <p className=" text-lg text-white">
            Whether in a bull
              run or a cold spell, Baby Frosty is making his mark, cruising in
              his blue Lamborghini. Join the $BABYF revolution and witness Baby
              Frosty dominate the Solana tundra!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
