"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tooltip from "./Tooltip";
import { borderGradientColor } from "../../../tailwind.config";

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
    border: "2px solid",
    borderRight: "0px",
    borderImageSlice: "1",
    borderImageSource: borderGradientColor,
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
  rest: {
    x: 0,
    width: 0,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 100,
      stiffness: 400,
    },
  },
  hover: {
    x: 60,
    opacity: 1,
    width: "280px",
    scale: 1.08,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200,
    },
  },
};

function ProductCards({ product }: ProductCardsProps) {
  const { title, thumbnail, discountPercentage, description, price, category } =
    product;

  return (
    <motion.div
      className="relative flex flex-wrap sm:w-auto w-[501px] h-[118px] align-center "
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="relative z-[999] flex items-center p-2 bg-white w-full h-full gap-4 px-[24px] py-[14px] rounded-md shadow-lg"
        variants={mainContainer}
      >
        <div>
          <Tooltip title={title} description={description}>
            <div className="self-center cursor-pointer min-h-[90px] min-w-[88px] ">
              <Image src={thumbnail} alt="image" className="rounded-lg" fill />
            </div>
          </Tooltip>
        </div>
        <CardContents
          title={title}
          description={description}
          discountPercentage={discountPercentage}
          price={price}
          category={category}
        />
      </motion.div>

      <IconCards />
    </motion.div>
  );
}

export default ProductCards;

function IconCards() {
  return (
    <motion.div
      variants={deleteContainer}
      className=" absolute bg-lightRed left-[20rem] rounded-md flex items-center justify-end gap-4 -z[1] h-full border-lightRed border-[3px]"
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[0.5rem] "
      >
        <path
          d="M15.9424 0.333353L10.1091 8.50002L15.9424 16.6667L13.084 16.6667L7.25072 8.50002L13.0841 0.333353L15.9424 0.333353ZM9.00072 0.333352L3.16738 8.50002L9.00072 16.6667L6.14238 16.6667L0.30905 8.50002L6.14238 0.333352L9.00072 0.333352Z"
          fill="white"
        />
      </svg>

      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[1.4rem] cursor-pointer"
      >
        <path
          d="M5.20813 26.625C4.40605 26.625 3.71941 26.3394 3.14823 25.7682C2.57705 25.1971 2.29146 24.5104 2.29146 23.7083V4.75H0.83313V1.83333H8.1248V0.375H16.8748V1.83333H24.1665V4.75H22.7081V23.7083C22.7081 24.5104 22.4225 25.1971 21.8514 25.7682C21.2802 26.3394 20.5935 26.625 19.7915 26.625H5.20813ZM19.7915 4.75H5.20813V23.7083H19.7915V4.75ZM8.1248 20.7917H11.0415V7.66667H8.1248V20.7917ZM13.9581 20.7917H16.8748V7.66667H13.9581V20.7917Z"
          fill="white"
        />
      </svg>
    </motion.div>
  );
}

type CardContentsProps = {
  category: string;
  description: string;
  discountPercentage: number;
  price: number;
  title: string;
};
function CardContents({
  category,
  description,
  discountPercentage,
  price,
  title,
}: CardContentsProps) {
  const getTotalPriceAfterDiscount = (discount: number, totalPrice: number) => {
    const totalPriceAfterDiscount = totalPrice - (discount / 100) * totalPrice;
    return totalPriceAfterDiscount.toFixed(2);
  };

  return (
    <div className="flex w-full">
      {/* title decription */}
      <div className="flex flex-col max-w-[247px] gap-2">
        <div className="flex gap-4 items-center sm:flex-col sm:items-start sm:gap-1">
          <p className="text-sm font-medium leading-snug truncate">{title}</p>
          <p className="bg-lightPink px-[14px] py-[4px] font-normal text-center text-xxs leading-firm rounded-md">
            {category}
          </p>
        </div>
        <p className="font-light text-xs leading-tight text-random line-clamp-2 sm:line-clamp-1">
          {description}
        </p>
        <p className="font-medium leading-snug text-sm text-gray ">
          1st May, 2024
        </p>
      </div>
      {/* price  */}
      <div className="flex flex-col justify-between gap-2 flex-[150px] text-end w-[91px]">
        <p className=" text-red font-medium text-sm leading-snug">
          {discountPercentage}% OFF
        </p>

        <div>
          <p className="line-through text-md font-normal leading-normal text-lightGray">
            ${price}
          </p>
          <p className="font-bold text-lg leading-medium sm:font-medium">
            ${getTotalPriceAfterDiscount(discountPercentage, price)}
          </p>
        </div>
      </div>
    </div>
  );
}
