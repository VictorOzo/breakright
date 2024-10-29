import "./home.css";
import cardimg1 from "../../assets/images/cardimg1.png";
import cardimg2 from "../../assets/images/cardimg2.png";
import cardimg3 from "../../assets/images/cardimg3.png";
import cardimg4 from "../../assets/images/cardimg4.png";
import cardimg5 from "../../assets/images/cardimg5.png";
import cardimg6 from "../../assets/images/cardimg6.png";

export const Home = () => {
  return (
    <>
      <div className="heroSection">
        <div className="hero_text">
          <h1>
            Global Leader in High-Performance Auto Spare Parts Manufacturing
          </h1>
          <p>
            Explore our extensive catalog of durable and reliable auto
            components.
          </p>
          <div className="hero_btn">
            <button>Explore our Catalogue</button>
          </div>
        </div>
      </div>

      {/* Catalog Section */}

      <div className="catalog_section">
        <div className="catalog_text">
          <p>Discover Our Product Categories</p>
          <h2>Built for performance, Designed for durability</h2>
        </div>
        <div className="catalog_card grid grid-cols-3 gap-5">
          <div className="card w-[400px] h-[340px] rounded-[15px] bg-[blue] ">
            <img src={cardimg1} />
            <h2>Title</h2>
            <p>Value</p>
          </div>
          <div className="card w-[400px] h-[340px] rounded-[15px] bg-[blue] ">
            <img src={cardimg2} />
            <h2>Title</h2>
            <p>Value</p>
          </div>
          <div className="card w-[400px] h-[340px] rounded-[15px] bg-[blue] ">
            <img src={cardimg3} />
            <h2>Title</h2>
            <p>Value</p>
          </div>
          <div className="card w-[400px] h-[340px] rounded-[15px] bg-[blue] ">
            <img src={cardimg4} />
            <h2>Title</h2>
            <p>Value</p>
          </div>
          <div className="card w-[400px] h-[340px] rounded-[15px] bg-[blue] ">
            <img src={cardimg5} />
            <h2>Title</h2>
            <p>Value</p>
          </div>
          <div className="card w-[400px] h-[340px] rounded-[15px] bg-[blue] ">
            <img src={cardimg6} />
            <h2>Title</h2>
            <p>Value</p>
          </div>
        </div>
        <div className="catalog_btn">
          <button>View Full Catalog</button>
        </div>
      </div>
    </>
  );
};
