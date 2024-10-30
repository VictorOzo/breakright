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
      {/* Hero Section */}
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
        <div className="catalog">
          <div className="catalog_text">
            <p>Discover Our Product Categories</p>
            <h2>Built for performance, Designed for durability</h2>
          </div>
          <div className="catalog_card grid grid-cols-3 gap-10">
            <div className="card">
              <div>
                <img src={cardimg1} />
                <h2>Engine Parts</h2>
                <p>(1000 parts)</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={cardimg2} />
                <h2>Suspension & Steering</h2>
                <p>(1000 parts)</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={cardimg3} />
                <h2>Transmission & Driveline</h2>
                <p>(1000 parts)</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={cardimg4} />
                <h2>Brake Systems</h2>
                <p>(1000 parts)</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={cardimg5} />
                <h2>Electrical & Lighting</h2>
                <p>(1000 parts)</p>
              </div>
            </div>
            <div className="card">
              <div>
                <img src={cardimg6} />
                <h2>Body Parts & Accessories</h2>
                <p>(1000 parts)</p>
              </div>
            </div>
          </div>
          <div className="catalog_btn">
            <button>View Full Catalog</button>
          </div>
        </div>
      </div>

      
    </>
  );
};
