import React from "react";
import "../Styles/footer.css";
import svg1 from "../Svgs/location.png";
import svg2 from "../Svgs/phone.png";
import svg3 from "../Svgs/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="categories">
        <h1 className="footerTitle">Categories</h1>
        <ul className="ulCategories">
          <li>Smart Watch</li>
          <li>Phones</li>
          <li>Tablets</li>
          <li>TV</li>
          <li>Laptops</li>
          <li>Computers</li>
          <li>Cameras</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="contactUs">
        <h1 className="footerTitle">Contact Us</h1>
        <ul className="ulContact">
          <li className="liContact">
            <div className="svg">
              {" "}
              <img className="contactSvg" src={svg1} />
            </div>
            <a className="aFooter">Beirut/location</a>
          </li>
          <li className="liContact">
            <div className="svg">
              <img className="contactSvg" src={svg2} />
            </div>
            <a className="aFooter">+961 03 332 443</a>
          </li>
          <li className="liContact">
            <div className="svg">
              <img className="contactSvg" src={svg3} />
            </div>
            <a className="aFooter">infinity.tech@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="newsLetter">
        <h1 className="footerTitle">News Letter</h1>
        <p className="newsParagraph">
          Want to receive regular updates about our services? Sign up and we’ll
          keep you posted!
        </p>
        <input className="newsInput" />
        <br />
        <input className="newsButton" value="Subscribe" type="submit" />
      </div>
    </div>
  );
};

export default Footer;
