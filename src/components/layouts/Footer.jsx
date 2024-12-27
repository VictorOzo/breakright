import logo from "../../assets/images/logo.png";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footerContent mt-[150px]">
        <div className="footLinks">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>
              Aenean penatibus imperdiet eu vestibulum risus venenatis tincidunt
              diam aliquam. Arcu non nullam.
            </p>
            <div className="socialLinks">
              <div className="fb">FB</div>
              <div className="tw">Twitter</div>
              <div className="LI">LinkedIn</div>
            </div>
          </div>
          <div className="company">
            <div className="companyLinks">
              <h2>About Us</h2>
              <ul>
                <li>Facilities</li>
                <li>Social Responsibilities</li>
                <li>Quality</li>
                <li>Industry News</li>
              </ul>
            </div>
          </div>
          <div className="product">
            <div className="productLinks">
              <h2>Contact Us</h2>
              <ul>
                <li>auto@example.com</li>
                <li>Phone: +91 42353264666</li>
                <li>+91 42 353264666</li>
              </ul>
            </div>
          </div>
          <div className="contactUs">
            <div className="productLinks">
              <h2>Product</h2>
              <ul>
                <li>Facilities</li>
                <li>Social Responsibilities</li>
                <li>Quality</li>
                <li>Industry News</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="footCopyright"></div>
      </div>
    </>
  );
};
