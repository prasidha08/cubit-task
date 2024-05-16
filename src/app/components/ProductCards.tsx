"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tooltip from "./Tooltip";

export type Product = {
  id: string;
  title: string;
  brand: string;
  stock: number;
  price: number;
  rating: number;
  category: string;
  images: string[];
  thumbnail: string;
  description: string;
  discountPercentage: number;
};

type ProductCardsProps = {
  product: Product;
};

const mainContainer = {
  rest: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      damping: 10,
      stiffness: 400,
    },
  },
  hover: {
    outerWidth: "520px",
    x: 30,
    scale: 1.1,
    borderRaduis: "50%",
    transition: {
      backgroundColor: "red",
      duration: 2,
      type: "spring",
      damping: 10,
      stiffness: 400,
    },
  },
};

const deleteContainer = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    x: 30,
    scale: 1.1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 10,
      stiffness: 400,
    },
  },
};

function ProductCards({ product }: ProductCardsProps) {
  const { title, thumbnail, discountPercentage, description, price, category } =
    product;

  const getTotalPriceAfterDiscount = (discount: number, totalPrice: number) => {
    const totalPriceAfterDiscount = totalPrice - (discount / 100) * totalPrice;
    return totalPriceAfterDiscount.toFixed(2);
  };

  return (
    <motion.div
      className="flex flex-wrap mt-[1.9rem] w-[501px] h-[118px]"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* this is a card */}
      <motion.div
        className="flex items-center p-2 bg-white w-full gap-4 px-[24px] py-[14px]"
        variants={mainContainer}
      >
        <div>
          <Tooltip title={title} description={description}>
            <div className="self-center cursor-pointer min-h-[90px] min-w-[88px] ">
              <Image src={thumbnail} alt="image" className="rounded-lg" fill />
            </div>
          </Tooltip>
        </div>

        <div className="flex w-full">
          {/* title decription */}
          <div className="flex flex-col max-w-[247px] gap-2">
            <div className="flex gap-4 items-center">
              <div className="text-sm font-medium leading-snug">{title}</div>
              <p className="bg-lightPink px-[14px] py-[4px] font-normal text-center text-xxs leading-firm rounded-md">
                {category}
              </p>
            </div>
            <p className="font-light text-xs leading-tight text-random">
              {description}
            </p>
            <p className="font-medium leading-snug text-sm text-gray ">
              1st May, 2024
            </p>
          </div>
          {/* price  */}
          <div className="font-bricolageGrotesque flex flex-col justify-between gap-2 flex-[150px] text-end w-[91px]">
            <p className=" text-red font-medium text-sm leading-snug">
              {discountPercentage}% OFF
            </p>

            <div>
              <p className="line-through text-md font-normal leading-normal text-lightGray">
                ${price}
              </p>
              <p className="font-bold text-lg leading-medium">
                ${getTotalPriceAfterDiscount(discountPercentage, price)}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* card ends here */}

      {/* <motion.div variants={deleteContainer} className="absolute bg-[red] ">
        delete icon
      </motion.div> */}
    </motion.div>
  );
}

export default ProductCards;
