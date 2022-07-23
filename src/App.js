import axios from "axios";
import { useEffect, useState } from "react";
import { DashboardRoutes } from "./routers/DashboardRoutes";
import React from "react";
import "./styles/style.css"

export const App = () => {

  const [product, setProduct] = useState([])

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProduct(res.data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div>
      <DashboardRoutes product={product} />
    </div>
        
  );
}

