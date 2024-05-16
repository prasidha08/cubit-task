"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    x: 30,
    scale: 1.1,
    borderRaduis: "50%",
    transition: {
      backgroundColor: "red",
      duration: 0.4,
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
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const getTotalPriceAfterDiscount = (discount: number, totalPrice: number) => {
    const totalPriceAfterDiscount = totalPrice - (discount / 100) * totalPrice;
    return totalPriceAfterDiscount.toFixed(2);
  };

  return (
    <motion.div
      className="rounded-lg relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* this is a card */}
      <motion.div
        className="flex justify-between p-2  gap-[20rem] bg-white"
        variants={mainContainer}
      >
        <div className="flex gap-8">
          <Tooltip text="this is product sdfsdfsjlfjorewjflksadflsjflsddkfjlsflsdfo">
            <div className="self-center cursor-pointer ">
              <Image
                src={thumbnail}
                alt="image"
                width={110}
                height={140}
                className="rounded-lg"
              />
            </div>
          </Tooltip>
          <div className="flex flex-col max-w-[400px]">
            <div className="flex gap-4">
              <div>{title}</div>
              <div>{category}</div>
            </div>
            <div>{description}</div>
            <div>1st May, 2024</div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2">
          <div>{discountPercentage}%</div>

          <div>
            <div className="line-through">${price}</div>
            <div>${getTotalPriceAfterDiscount(discountPercentage, price)}</div>
          </div>
        </div>
      </motion.div>

      {/* card ends here */}

      <motion.div
        variants={deleteContainer}
        className="absolute opacity-0 h-[110.50px] bg-red-500 top-0 -right-[8rem] w-[100px] translate-x-[50%] "
      >
        delete icon
      </motion.div>
    </motion.div>
  );
}

export default ProductCards;

function Tooltip({ children, text }: any) {
  return (
    <span className="group relative">
      <span
        className="absolute -top-[3.2rem] -left-5 -translate-x-[70%] whitespace-nowrap bg-white 
      p-2 opacity-0 transition group-hover:opacity-100  before:content[''] before:absolute before:top-full 
      before:right-4 before:border-[1rem] before:border-transparent before:border-t-[white]"
      >
        <div>
          <div>text product</div>
          <div>this is description of image of product</div>
        </div>
      </span>
      {children}
    </span>
  );
}
