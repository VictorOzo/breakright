import "./home.css";

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
        <div className="catalog_card">
          <div className="card">
            <img src="" alt="" />
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
