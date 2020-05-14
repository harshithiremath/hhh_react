import React from "react";
import { useParams } from "react-router-dom";

export default function SingleMerch() {
  const { product_id } = useParams();
  return <div>{product_id}</div>;
}
