import React, { useState } from "react";
import Filter from "../modules/token/components/Shop/Filters/Filter";
import "../modules/token/components/Shop/Filters/Filter.css";
import ShopDetails from "../modules/token/components/Shop/ShopDetails/ShopDetails";
import StoreData from "../modules/token/components/products/data";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
  productID: number;
  productName: string;
  produtDescription: string;
  frontImg?: string;
  backImg?: string;
  productPrice: number;
  productReviews: string;
}

const Shop: React.FC = () => {
  const [filtered, setFiltered] = useState<Array<Product>>(StoreData);

  const prices = StoreData.map((p) => {
    return p.productPrice;
  });
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const [value1, setValue1] = useState<Array<number>>([min, max]);

  return (
    <div className="container">
      <Filter
        setFiltered={setFiltered}
        value1={value1}
        setValue1={setValue1}
        min={min}
        max={max}
      />
      <ShopDetails value1={value1 as [number, number]} filtered={filtered} />
    </div>
  );
};

export default Shop;
