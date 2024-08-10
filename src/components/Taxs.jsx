import React from "react";

function Taxs() {
  return (
    <section className=" pt-[4%] pb-[2%]  relative  ">
      <div className="container-wrapper">
        <div className=" flex flex-col sm:flex-row justify-between items-center">
          <div className=" w-full sm:w-1/2">
          <h1
          className=" text-3xl sm:text-8xl font-bold text-white font-snow txt-s text-center mb-4"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          Tokenomics
        </h1>

        <a href="#" className="block border-4 border-[#000000] bg-[#1574942d] rounded-xl p-2 backdrop-blur-sm box-s2 my-4 ">
     
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            LP Burning
          </h5>
          <p className="font-normal text-black  text-center">LP LOCKED</p>
        </a>

        <a href="#" className="block border-4 border-[#000000] bg-[#1574942d] rounded-xl p-2 backdrop-blur-sm box-s2 my-4 ">
     
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            No Taxes
          </h5>
          <p className="font-normal  text-black text-center">
            0% BUY / 0% SELL
          </p>
        </a>

        <a href="#" className="block border-4 border-[#000000] bg-[#1574942d] rounded-xl p-2 backdrop-blur-sm box-s2  my-4">
     
         
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            Contract
          </h5>
          <p className="font-normal  text-black text-center">
            Mint REVOKED
          </p>
        </a>

        <a href="#" className="block border-4 border-[#000000] bg-[#1574942d] rounded-xl p-2 backdrop-blur-sm box-s2 my-2 ">
     
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
            Fair Launch
          </h5>
          <p className="font-normal  text-black text-center">
            NO PRE-SALES
          </p>
        </a>
          </div>

          <div className=" w-full sm:w-1/2">
          <img src="images/fire.png" alt="" className=" mx-auto" />
          </div>
        </div>
      </div>

    

 

      <div className=" flex justify-center flex-col items-center">
        <div>
          <p className=" text-center text-white  mt-4">
          Baby Frosty: The Coldest Meme Coin on Solana
          </p>

          <h1 className=" text-xl sm:text-5xl font-bold font-snow txt-s  text-center text-white py-2">
            Total Supply 1.000.000.000
          </h1>
          <p className="text-center text-white font-bold mt-4 bg-[#157494] border-[#000000] border-2 py-2 rounded-xl">
            Contract Adress: 4PqHDB6UovVqupTJy3yoRiK7VxDP68oHy6EhtYhBbw1J
          </p>
        </div>
      </div>
    </section>
  );
}

export default Taxs;
