import React from "react";
import { models } from "../../data/data.json";
import "../../css/models.css";
function Models() {
  console.log(models);
  return (
    <div className="models">
      <h1>Modls:</h1>
      <div className="model-image">
        {models.map((item, index) => {
          return <img src={item.image} alt={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Models;
