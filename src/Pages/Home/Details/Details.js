import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Details = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const itemDetail = data.filter((td) => td.key === userId);
  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <h2 className="py-4">Project Name: {itemDetail[0]?.name}</h2>
        <ul>
          <li>{itemDetail[0]?.detail1}</li>
          <li>{itemDetail[0]?.detail2}</li>
          <li>{itemDetail[0]?.detail3}</li>
        </ul>
        <h3>Technology: {itemDetail[0]?.tech}</h3>

        <h2 className="mt-5 py-3">{itemDetail[0]?.image_name}</h2>
        <img src={itemDetail[0]?.image} alt="" className="img-fluid" />
        <h2 className="mt-5 py-3">{itemDetail[0]?.image1_name}</h2>
        <img src={itemDetail[0]?.image1} alt="" className="img-fluid" />
        <h2 className="mt-5 py-3">{itemDetail[0]?.image2_name}</h2>
        <img src={itemDetail[0]?.image2} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Details;
