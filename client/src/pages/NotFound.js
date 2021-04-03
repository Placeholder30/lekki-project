import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h1
        style={{
          display: "grid",
          placeItems: "center",
          marginTop: "7rem",
          fontSize: "4rem",
        }}
      >
        Error 404: Page not found
      </h1>
      <div style={{ width: "60vw" }}>
        <img
          style={{ marginLeft: "8rem", width: "100%" }}
          src="https://res.cloudinary.com/placeholder30/image/upload/v1617470868/lekki-store/frontend-assets/onfire.jpg"
          alt=""
        />
      </div>
      <Link to="/">
        <div
          style={{
            width: "8rem",
            marginLeft: "33vw",
            textDecoration: "underline",
            fontSize: "1.4rem",
            marginTop: "1.5rem",
          }}
        >
          go back
        </div>
      </Link>
    </div>
  );
}

export default NotFound;
