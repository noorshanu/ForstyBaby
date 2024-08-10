import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import DexMark from "./components/DexMark";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <div className="snowflake">❅</div>

        <div className="snowflake">⚪</div>

        <div className="snowflake">❅</div>
        <div className="snowflake">⚪</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">⚪</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">⚪</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">⚪</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">⚪</div>
        <div className="snowflake">❄</div>

        <div className="hero-main  ">
          <Navbar />
          <Hero />
        </div>
        <div className=" w-full -mt-6">
          <img src="images/ice.svg" alt="" className=" w-full h-full" />
        </div>
        {/* <BorderSec /> */}
        <AboutUs />
        <div className=" w-full my-4">
          <img src="images/ice.svg" alt="" className=" w-full h-full" />
        </div>
        <Taxs />
        <div className=" w-full my-4">
          <img src="images/ice.svg" alt="" className=" w-full h-full" />
        </div>
        <DexMark />
        <div className=" w-full my-4">
          <img src="images/ice.svg" alt="" className=" w-full h-full" />
        </div>
        {/* <ChooseHero /> */}

        <div className="">
          <HowToBuy />
          <div className=" my-4">
            <BorderSec />
          </div>
          <div className=" w-full my-4">
          <img src="images/ice.svg" alt="" className=" w-full h-full" />
        </div>
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
