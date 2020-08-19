import React from "react";
import "./Plex.css";

const Plex = () => {
  return (
    <div className="fondo">
      <iframe
        allowfullscreen="true"
        src="//192.168.50.171:32400/web/index.html"
      />
    </div>
  );
};

export default Plex;
