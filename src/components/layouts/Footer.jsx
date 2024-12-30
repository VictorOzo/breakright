import logo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footerContent mt-[150px]">
        <div className="footLinks">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p className="text-white w-[280px] text-[16px] pt-3 pb-[25px]">
              Aenean penatibus imperdiet eu vestibulum risus venenatis tincidunt
              diam aliquam. Arcu non nullam.
            </p>
            <div className="socialLinks flex ">
              <div className="fb ">
                <FaFacebook color="white" size={30} />
              </div>
              <div className="tw ml-9">
                <FaTwitter color="white" size={30} />
              </div>
              <div className="LI ml-9">
                <FaLinkedin color="white" size={30} />
              </div>
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
              <h2>Product</h2>
              <ul>
                <li>Product Categories</li>
                <li>Brand</li>
                <li>New Product</li>
                <li>Request A Component</li>
                <li>Red Dot, NVH Components</li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <div className="contactLinks">
              <h2>Contact Us</h2>
              <ul>
                <li>auto@example.com</li>
                <li>Phone: +91 42353264666</li>
                <li>+91 42 353264666</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footCopyright flex justify-between">
          <div className="copyright">
            <p>Copyright © 2024 AutoSpare. All rights reserved.</p>
          </div>
          <div className="termsPrivacy">
            <ul className="flex">
              <li>Privacy Policy</li>
              <li className="ml-5">Terms Of Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
