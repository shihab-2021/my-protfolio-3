import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Details = () => {
  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const itemDetail = data.filter((td) => td.key === key);
  console.log(itemDetail[0]);
  console.log(key);
  return (
    <div>
      <Navigation></Navigation>
      <h1>{itemDetail[0]?.name}</h1>
    </div>
  );
};

export default Details;
