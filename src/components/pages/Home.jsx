import "./home.css";
import cardimg1 from "../../assets/images/cardimg1.png";
import cardimg2 from "../../assets/images/cardimg2.png";
import cardimg3 from "../../assets/images/cardimg3.png";
import cardimg4 from "../../assets/images/cardimg4.png";
import cardimg5 from "../../assets/images/cardimg5.png";
import cardimg6 from "../../assets/images/cardimg6.png";
import carouselimg1 from "../../assets/images/carouselimg1.png";
import carouselimg2 from "../../assets/images/carouselimg2.png";
import carouselimg3 from "../../assets/images/carouselimg3.png";
import searchimg from "../../assets/images/searchimg.png";
import newsimg1 from "../../assets/images/newsimg1.png";
import newsimg2 from "../../assets/images/newsimg2.png";
import newsimg3 from "../../assets/images/newsimg3.png";
import { BsWrench } from "react-icons/bs";

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

      {/* Search Section */}
      <div className="search_section ">
        <div className="flex search_details">
          <div className="search_text w-[609px]">
            <h4>Search for the Right Part</h4>
            <h2>Easily find the parts you need for your vehicle.</h2>
            <div className="search_form">
              <input type="text" placeholder="Search for product" />
              <button>Search</button>
            </div>
            <p>
              Enter OEM Number, Vehicle Type, Part Category or Manufacturer to
              search for products.
            </p>
          </div>
          <div className="search_img">
            <div className="img">
              <img src={searchimg} alt="search image" />
            </div>
          </div>
        </div>
      </div>
      <div className="catelog_carousel">
        <div className="carousel">
          <div className="carousel_text mb-[50px]">
            <h3>Serving a Wide Range of Industries</h3>
            <h2>Tailored solutions for your specific vehicle needs</h2>
          </div>
          <div className="carousel">
            <div className="carouselimg mb-[40px]">
              <img src={carouselimg1} alt="carousel img" />
              <img src={carouselimg2} alt="carousel img" />
              <img src={carouselimg3} alt="carousel img" />
            </div>
          </div>
          <div className="carousel_button">
            <button>Explore Our Industries</button>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="quality_section">
        <div className="quality_text">
          <h3>Why choose Brakeright</h3>
          <h2>Superior Quality and Unmatched Expertise</h2>
          <div className="quality_list">
            <div className="text-[white]">
              <h3 className="flex">
                <BsWrench />
                Global Distribution
              </h3>
              <p>Delivering parts to 19 countries worldwide.</p>
            </div>
            <div className="text-[white]">
              <h3 className="flex">
                <BsWrench />
                Innovative Manufacturing
              </h3>
              <p>Cutting-edge technology for precision and quality.</p>
            </div>
            <div className="text-[white]">
              <h3 className="flex">
                <BsWrench />
                OEM Compatibility
              </h3>
              <p>
                Perfect fit with leading vehicle manufacturers specifications.
              </p>
            </div>
            <div className="text-[white]">
              <h3 className="flex">
                <BsWrench />
                Quality Control
              </h3>
              <p>ISO-certified processes ensure top-tier product durability.</p>
            </div>
            <div className="text-[white]">
              <h3 className="flex">
                <BsWrench />
                Sustainability
              </h3>
              <p>
                Environmentally responsible production and recycling practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews section */}
      <div className="reviews_section ">
        <div className="reviews_text text-center p-8 ">
          <h3>client’s Review</h3>
          <h2>What they’re talking about the part’s business</h2>
        </div>
        <div className="reviews_card">
          <div className=""></div>
        </div>
      </div>
      {/* News Section */}
      <div className="news_carousel h-[250px]">
        <div className="news">
          <div className="news_text text-center mb-7 ">
            <h3>Latest News & Industry Updates</h3>
            <h2>
              Stay informed with our latest product releases, events, and
              insights
            </h2>
          </div>
          <div className="news mb-[350px]">
            <div className="news_card mb-[40px]">
              <div className="Ncard">
                <div>
                  <img src={newsimg1} alt="conference image" />
                  <div className="cardText">
                    <p>02/03/2024</p>
                    <h2>
                      New Product Launch: Enhanced Brake System for Heavy-Duty
                      Vehicles
                    </h2>
                    <h4>
                      We are excited to introduce our latest innovation in brake
                      systems.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="Ncard">
                <div>
                  <img src={newsimg2} alt="conference image" />
                  <div className="cardText">
                    <p>02/03/2024</p>
                    <h2>AutoSpare Exhibits at AutoCon 2024</h2>
                    <h4>
                      Meet us at Booth to see our latest products and
                      innovations.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="Ncard">
                <div>
                  <img src={newsimg3} alt="conference image" />
                  <div className="cardText">
                    <p>02/03/2024</p>
                    <h2>Sustainability Initiatives at Auto Spare</h2>
                    <h4>
                      We are committed to reducing our environmental footprint.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
