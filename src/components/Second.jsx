import React from "react";
import Category from "./Category";
import men from "../assets/men.jpg";
import baby from "../assets/baby.jpg";
import women from "../assets/women.webp";

export default function Second() {
  return (
    <div>
      <h2 className="pb-5 pt-5 text-center">
        Popular <span className="orange">Categories</span>{" "}
      </h2>
      <div className="d-flex gap-5 align-items-center justify-content-center pb-5 p-2 flex-wrap">
        <Category image={men} title="Men" color="lightblue" />
        <Category image={women} title="Women" color="lightpink" />
        <Category image={baby} title="Baby" color="lightyellow" />
        <Category image={men} title="Men" color="lightblue" />
        <Category image={women} title="Women" color="lightpink" />
        <Category image={baby} title="Baby" color="lightyellow" />
      </div>
    </div>
  );
}
