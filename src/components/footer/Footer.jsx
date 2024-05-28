import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="container">
        <div className="icons">
          <div>
            <ul>
              <li>
                <FacebookOutlinedIcon />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <InstagramIcon />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li>Audio Discription</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
              <li className="service-code">Sevice Code</li>
              <li>© 1997-2024 Netflix Inc.</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
