import React from "react";
import Image from "next/image";

import { getPhones } from "@/services";
import Product from "@/shared/Product";
import { ItemInfo } from "@/types";

import arrowRight from "../assets/arrow.right.svg";

import "../styles/PhoneList.scss";

const PhoneList = async () => {
  const items: ItemInfo[] = await getPhones();

  return (
    <div className="phone-list">
      <div className="phone-list__title">
        <div className="phone-list__title-left">
          <div>
            <span className="phone-list__title-left-normal">Get Your</span>
            <span className="phone-list__title-left-bald"> iPhone</span>
          </div>
        </div>
        <button className="phone-list__title-right">
          <p>See All</p>
          <Image src={arrowRight} alt="arrow-right" />
        </button>
      </div>
      <section className="phone-list__products">
        {items.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </section>
    </div>
  );
};

export default PhoneList;
