import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center pb-28 pt-4 md:p-4">
      <p>&copy; {new Date().getFullYear()} Benjamin Schäfer.</p>
    </footer>
  );
}

export default Footer;