import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p>Copyright @ {currYear} </p>
    </footer>
  );
}

export default Footer;
