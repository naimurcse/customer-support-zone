import emailLogo from "../../assets/email-logo.png";
import fbLogo from "../../assets/fb-logo.png";
import inLogo from "../../assets/in-logo.png";
import xLogo from "../../assets/x-logo.png";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-section bg-black text-white mt-15 pt-16 pb-8">
      {/* Footer Upper Part */}
      <div className="footer-upper max-w-10/12 mx-auto border-b-1 border-gray-500 pb-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-6 gap-8  xl:gap-1 2xl:gap-12">
          <div className="md:col-span-2 lg:pr-20">
            <h3 className="font-bold text-2xl mb-4">CS — Ticket System</h3>
            <p className="footer-p-text">
              Our Customer Support Ticket System is designed to simplify and
              streamline the way your eCommerce business handles customer
              issues. We provide a structured platform where customers can
              submit their problems, inquiries, or complaints quickly and
              efficiently.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Company</h4>
            <ul className="not-first:">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Services</h4>
            <ul className="not-first:">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Information</h4>
            <ul className="not-first:">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Social Links</h4>
            <ul className="not-first:">
              <li className="flex gap-2">
                <img className="w-5 2xl:w-6" src={xLogo} alt="" />
                <a href="#">@CS-Ticket System</a>
              </li>
              <li className="flex gap-2">
                <img className="w-5 2xl:w-6" src={inLogo} alt="" />
                <a href="#">@CS-Ticket System</a>
              </li>
              <li className="flex gap-2">
                <img className="w-5 2xl:w-6" src={fbLogo} alt="" />
                <a href="#">@CS-Ticket System</a>
              </li>
              <li className="flex gap-2">
                <img className="w-5 2xl:w-6" src={emailLogo} alt="" />
                <a href="#">support@cst.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Lower Part */}
      <p className="text-center text-sm md:footer-p-text text-gray-400">
        © 2026 CS — Ticket System. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
