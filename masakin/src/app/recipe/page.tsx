"use client";

import Image from "next/image";
import food1 from "@/assets/food1_Bulgogi.jpeg";
import { recipeDetailData } from "@/data/RecipeDetail";
import Ingredients from "@/components/RecipeDetail/Ingredients";
import { useState } from "react";
import Tools from "@/components/RecipeDetail/Tools";
import Instructions from "@/components/RecipeDetail/Instructions";

export default function RecipeDetail() {
  const [selectedMenu, setSelectedMenu] = useState("Ingredients");
  console.log("food1", food1);
  return (
    <div className="px-9 flex flex-col justify-center items-center">
      <h1 className="text-xl py-3">{recipeDetailData.title}</h1>
      <div className="w-full h-36 relative rounded-xl">
        <Image
          className="rounded-xl"
          src={food1.src}
          alt={recipeDetailData.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between items-center w-full py-3">
        <div className="flex">
          {[...Array(recipeDetailData.rating)].map((_, index) => (
            <svg
              key={index}
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7994 14.0001C11.7015 14.0005 11.6061 13.9677 11.5266 13.9064L7.79034 10.9926L4.0541 13.9064C3.97427 13.9686 3.87811 14.002 3.7795 14.0016C3.68089 14.0012 3.58496 13.9671 3.50556 13.9042C3.42616 13.8413 3.36741 13.7529 3.33781 13.6517C3.30821 13.5505 3.30929 13.4418 3.3409 13.3414L4.79809 8.69855L1.02147 5.91261C0.939667 5.85233 0.877926 5.7655 0.845269 5.66478C0.812612 5.56407 0.81075 5.45477 0.839956 5.35284C0.869162 5.25091 0.927905 5.16169 1.0076 5.09823C1.0873 5.03477 1.18377 5.00039 1.28293 5.00011H5.94212L7.34818 0.345423C7.37847 0.24493 7.43757 0.15734 7.51701 0.0952175C7.59644 0.0330952 7.69213 -0.000366211 7.79034 -0.000366211C7.88855 -0.000366211 7.98423 0.0330952 8.06367 0.0952175C8.1431 0.15734 8.2022 0.24493 8.23249 0.345423L9.63856 5.00167H14.2977C14.397 5.00162 14.4937 5.03576 14.5736 5.0991C14.6536 5.16244 14.7126 5.25165 14.742 5.35365C14.7713 5.45566 14.7696 5.56511 14.737 5.66598C14.7044 5.76684 14.6426 5.85382 14.5607 5.91417L10.7826 8.69855L12.2389 13.3401C12.2625 13.4153 12.2691 13.4954 12.2583 13.5738C12.2474 13.6523 12.2193 13.7268 12.1764 13.7913C12.1335 13.8558 12.0769 13.9083 12.0113 13.9447C11.9457 13.981 11.8731 14 11.7994 14.0001Z"
                fill="#FFAD30"
              />
            </svg>
          ))}
        </div>
        <div className="flex gap-2">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4507 21.8194C6.50185 21.8194 2.47852 17.7961 2.47852 12.8472C2.47852 7.89833 6.50185 3.875 11.4507 3.875C16.3996 3.875 20.423 7.89833 20.423 12.8472C20.423 17.7961 16.3996 21.8194 11.4507 21.8194ZM11.4507 5.29167C7.28574 5.29167 3.89518 8.68222 3.89518 12.8472C3.89518 17.0122 7.28574 20.4028 11.4507 20.4028C15.6157 20.4028 19.0063 17.0122 19.0063 12.8472C19.0063 8.68222 15.6157 5.29167 11.4507 5.29167Z"
              fill="#A9A9A9"
            />
            <path
              d="M11.4505 13.3196C11.0633 13.3196 10.7422 12.9984 10.7422 12.6112V7.889C10.7422 7.50178 11.0633 7.18066 11.4505 7.18066C11.8377 7.18066 12.1589 7.50178 12.1589 7.889V12.6112C12.1589 12.9984 11.8377 13.3196 11.4505 13.3196Z"
              fill="#A9A9A9"
            />
            <path
              d="M14.2842 2.9307H8.61751C8.23029 2.9307 7.90918 2.60959 7.90918 2.22237C7.90918 1.83515 8.23029 1.51404 8.61751 1.51404H14.2842C14.6714 1.51404 14.9925 1.83515 14.9925 2.22237C14.9925 2.60959 14.6714 2.9307 14.2842 2.9307Z"
              fill="#A9A9A9"
            />
          </svg>
          <p className="text-slate-400">{recipeDetailData.time} menit</p>
        </div>
        <div className="flex gap-1">
          {[...Array(recipeDetailData.difficulty)].map((_, index) => (
            <svg
              key={index}
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.48615 17.794C7.92957 17.794 6.373 17.795 4.81543 17.794C3.71463 17.793 2.96458 17.036 2.96358 15.9273C2.96259 14.556 2.95962 13.1847 2.96755 11.8134C2.96854 11.6044 2.91404 11.4944 2.71291 11.3983C0.635159 10.4055 -0.404211 8.18306 0.145694 5.93984C0.674791 3.77886 2.69507 2.28372 4.98684 2.38577C5.27913 2.39865 5.41785 2.30849 5.57142 2.07862C7.43416 -0.694688 11.5431 -0.692706 13.4078 2.08357C13.5644 2.3174 13.709 2.39667 13.9964 2.38478C16.9054 2.26885 19.218 4.6379 18.9614 7.52218C18.8068 9.25215 17.918 10.5521 16.3555 11.3458C16.082 11.4845 16.0038 11.6371 16.0077 11.9303C16.0236 13.264 16.0157 14.5986 16.0147 15.9323C16.0137 17.039 15.2616 17.791 14.1569 17.793C12.6003 17.795 11.0427 17.794 9.48615 17.794ZM14.0925 3.58565C14.1688 3.98099 14.255 4.35453 14.2342 4.73996C14.2114 5.15709 13.8418 5.43948 13.4732 5.31364C13.1452 5.20168 13.0531 4.94902 13.0412 4.61809C12.959 2.33029 10.7871 0.732093 8.57261 1.32163C7.03585 1.73084 6.00243 3.03971 5.93109 4.66862C5.91227 5.09765 5.67348 5.35427 5.30985 5.33742C4.96108 5.32157 4.75102 5.06197 4.7431 4.65177C4.73616 4.29211 4.82236 3.94532 4.88379 3.5807C4.80354 3.57475 4.73121 3.56485 4.65888 3.56584C2.06095 3.59457 0.374574 6.45011 1.5913 8.75773C2.3681 10.2301 3.95936 10.9395 5.62096 10.5521C6.09061 10.4431 6.42155 10.5967 6.51072 10.9683C6.59296 11.3081 6.35912 11.5984 5.91722 11.7153C5.42379 11.8461 4.92045 11.8976 4.41414 11.8521C4.2031 11.8332 4.14068 11.8788 4.14563 12.0958C4.1605 12.6754 4.16842 13.257 4.14365 13.8367C4.13077 14.1448 4.19022 14.2498 4.53403 14.2449C6.06584 14.2221 7.59765 14.235 9.12946 14.235C10.9327 14.235 12.736 14.232 14.5403 14.2389C14.7494 14.2399 14.8445 14.2142 14.8366 13.9655C14.8158 13.3363 14.8217 12.7061 14.8346 12.076C14.8386 11.8739 14.7781 11.8332 14.5849 11.8511C14.0657 11.8976 13.5505 11.8441 13.0452 11.7124C12.6112 11.5984 12.3823 11.2923 12.4764 10.9514C12.5755 10.5937 12.8946 10.4401 13.3414 10.5491C13.606 10.6135 13.8705 10.668 14.143 10.674C16.4685 10.7196 18.2054 8.60911 17.7119 6.34013C17.3523 4.69735 15.76 3.4727 14.0925 3.58565ZM9.5238 15.423C9.33852 15.423 9.15324 15.423 8.96795 15.423C7.46191 15.423 5.95487 15.421 4.44882 15.4279C4.34974 15.4279 4.2031 15.3368 4.1496 15.5349C3.97918 16.171 4.30714 16.606 4.96999 16.606C7.9702 16.606 10.9704 16.606 13.9706 16.606C14.6434 16.606 14.8098 16.4217 14.8326 15.7539C14.8425 15.4676 14.7543 15.415 14.4858 15.417C12.8331 15.4299 11.1785 15.423 9.5238 15.423Z"
                fill="#9C90F9"
              />
              <path
                d="M14.0727 3.58072C15.7402 3.46777 17.3315 4.69242 17.6892 6.3352C18.1826 8.60417 16.4457 10.7136 14.1203 10.669C13.8478 10.6641 13.5832 10.6086 13.3187 10.5442C12.8708 10.4352 12.5518 10.5898 12.4537 10.9465C12.3596 11.2873 12.5884 11.5935 13.0224 11.7074C13.5277 11.8402 14.043 11.8927 14.5622 11.8461C14.7554 11.8293 14.8158 11.8699 14.8118 12.0711C14.799 12.7002 14.793 13.3314 14.8138 13.9605C14.8218 14.2092 14.7266 14.234 14.5176 14.234C12.7143 14.2271 10.911 14.23 9.1067 14.23C7.5749 14.23 6.04309 14.2172 4.51128 14.24C4.16747 14.2449 4.10802 14.1399 4.1209 13.8317C4.14567 13.2521 4.13774 12.6705 4.12288 12.0909C4.11694 11.8739 4.18035 11.8283 4.39139 11.8471C4.8977 11.8927 5.40104 11.8412 5.89447 11.7104C6.33637 11.5935 6.57021 11.3032 6.48797 10.9633C6.3978 10.5928 6.06786 10.4382 5.59821 10.5472C3.9376 10.9346 2.34535 10.2252 1.56855 8.7528C0.35083 6.44419 2.0382 3.58865 4.63613 3.5609C4.70846 3.55991 4.78079 3.57081 4.86104 3.57576C4.79961 3.94039 4.71341 4.28717 4.72035 4.64684C4.72827 5.05704 4.93833 5.31664 5.2871 5.33249C5.65172 5.34933 5.88951 5.09271 5.90834 4.66369C5.97968 3.03478 7.0131 1.72591 8.54986 1.3167C10.7634 0.727159 12.9362 2.32535 13.0185 4.61315C13.0304 4.9431 13.1225 5.19675 13.4505 5.30871C13.819 5.43454 14.1886 5.15216 14.2114 4.73502C14.2352 4.3496 14.149 3.97606 14.0727 3.58072Z"
                fill="#C3BEFB"
              />
              <path
                d="M9.50371 15.419C11.1584 15.419 12.8131 15.426 14.4667 15.4121C14.7352 15.4101 14.8234 15.4626 14.8135 15.749C14.7907 16.4158 14.6243 16.6011 13.9515 16.6011C10.9513 16.6011 7.9511 16.6011 4.9509 16.6011C4.28804 16.6011 3.96008 16.1661 4.1305 15.53C4.18301 15.3319 4.32965 15.424 4.42973 15.423C5.93577 15.4161 7.44281 15.4181 8.94885 15.4181C9.13414 15.419 9.31942 15.419 9.50371 15.419Z"
                fill="#C3BEFB"
              />
            </svg>
          ))}
        </div>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.666667"
            y="0.666667"
            width="21.3333"
            height="21.3333"
            rx="10.6667"
            stroke="#109F79"
            stroke-width="1.33333"
          />
          <path
            d="M9.84517 17V9.36364H11.9631V17H9.84517ZM10.9091 8.37926C10.5942 8.37926 10.3241 8.27486 10.0987 8.06605C9.87666 7.85393 9.76562 7.60038 9.76562 7.3054C9.76562 7.01373 9.87666 6.76349 10.0987 6.55469C10.3241 6.34257 10.5942 6.23651 10.9091 6.23651C11.224 6.23651 11.4924 6.34257 11.7145 6.55469C11.9399 6.76349 12.0526 7.01373 12.0526 7.3054C12.0526 7.60038 11.9399 7.85393 11.7145 8.06605C11.4924 8.27486 11.224 8.37926 10.9091 8.37926Z"
            fill="#109F79"
          />
        </svg>
      </div>
      <div className="text-sm font-medium flex flex-col pt-2 pb-6 gap-3">
        {recipeDetailData.description.map((desc, index) => (
          <p key={index} className="text-justify leading-tight">
            {desc}
          </p>
        ))}
      </div>
      <div className="w-full">
        <button className="bg-rose-600 text-white w-full py-2 my-2 rounded-xl text-sm">
          Lihat Video Panduan Memasak
        </button>
      </div>
      <div className="w-full flex gap-1">
        <div className="w-1/3">
          <button
            onClick={() => setSelectedMenu("Ingredients")}
            className={`${
              selectedMenu === "Ingredients"
                ? "bg-lime-600 text-white"
                : "text-lime-600"
            } w-full py-2 my-2 rounded-xl text-xs`}
          >
            Bahan-bahan
          </button>
        </div>
        <div className="w-1/3">
          <button
            onClick={() => setSelectedMenu("Tools")}
            className={`${
              selectedMenu === "Tools"
                ? "bg-lime-600 text-white"
                : "text-lime-600"
            } w-full py-2 my-2 rounded-xl text-xs`}
          >
            Alat-alat
          </button>
        </div>
        <div className="w-1/3">
          <button
            onClick={() => setSelectedMenu("Instructions")}
            className={`${
              selectedMenu === "Instructions"
                ? "bg-lime-600 text-white"
                : "text-lime-600"
            } w-full py-2 my-2 rounded-xl text-xs`}
          >
            Cara masak
          </button>
        </div>
      </div>
      {selectedMenu === "Ingredients" ? (
        <Ingredients recipeDetailData={recipeDetailData} />
      ) : null}
      {selectedMenu === "Tools" ? (
        <Tools recipeDetailData={recipeDetailData} />
      ) : null}
      {selectedMenu === "Instructions" ? (
        <Instructions recipeDetailData={recipeDetailData} />
      ) : null}
    </div>
  );
}
