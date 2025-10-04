import { useState } from "react";
import { MenuLeft } from "./MenuLeft";
import Search from "./Search";

export default function LeftSide() {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(0); //state kiểm tra page đang active
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div
        className={`w-[4.5rem] ${
          !show && "lg:w-[240px] lg:border-0"
        } px-[1rem] fixed left-0 top-0 h-full border-r-[0.5px] border-[#6a728262] z-99 bg-black`}
      >
        {/* Logo và thanh tìm kiếm */}
        <div
          className={`pt-[1.25rem] pb-[0.5rem] w-full flex flex-col items-center ${
            !show && "lg:items-start"
          } gap-[1rem] shrink-0 cursor-pointer`}
        >
          {/* Logo Tiktok */}
          <a href="/">
            {/* Logo full */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 118 30"
              alt="TikTok"
              height="42"
              width="118"
              className={`hidden ${!show && "lg:block"}`}
            >
              <path
                fill="#25F4EE"
                d="M9.875 11.842v-1.119A9 9 0 0 0 8.7 10.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 20.55c0-4.737 3.794-8.598 8.495-8.707"
              ></path>
              <path
                fill="#25F4EE"
                d="M10.087 24.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a7 7 0 0 1-.109-1.202h-4.727l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36V7.111a6.5 6.5 0 0 1-3.584-1.067 6.57 6.57 0 0 0 3.584 2.122"
              ></path>
              <path
                fill="#FE2C55"
                d="M20.41 6.044a6.54 6.54 0 0 1-1.617-4.316h-1.265a6.56 6.56 0 0 0 2.881 4.316M8.707 15.365a3.98 3.98 0 0 0-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.41 0 .805.07 1.176.185v-4.833a9 9 0 0 0-1.176-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.175-.185"
              ></path>
              <path
                fill="#FE2C55"
                d="M23.992 8.166v3.676a11.25 11.25 0 0 1-6.579-2.116v9.622c0 4.8-3.903 8.713-8.706 8.713a8.67 8.67 0 0 1-4.99-1.579 8.7 8.7 0 0 0 6.37 2.781c4.797 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.718-.002-1.38-.148"
              ></path>
              <path
                fill="#fff"
                d="M17.413 19.348V9.726a11.25 11.25 0 0 0 6.58 2.116V8.166a6.57 6.57 0 0 1-3.584-2.122 6.6 6.6 0 0 1-2.887-4.316h-3.463l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.99 3.99 0 0 1-3.225-1.656 3.99 3.99 0 0 1-2.134-3.523A3.98 3.98 0 0 1 8.7 15.372c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.989 1.58c4.797 0 8.706-3.913 8.706-8.715M30.048 8.179h14.775l-1.355 4.232h-3.832v15.644h-4.778V12.41l-4.804.006zm38.984 0h15.12l-1.354 4.232h-4.172v15.644h-4.784V12.41l-4.803.006zM45.73 14.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.647l-5.934 5.76 6.643 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236h-4.733V8.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.396 4.826a2.384 2.384 0 1 0-.002-4.771 2.384 2.384 0 0 0 .002 4.771"
              ></path>
              <path
                fill="#25F4EE"
                d="M83.545 19.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"
              ></path>
              <path
                fill="#FE2C55"
                d="M92.858 11.83c-.217 0-.505.012-.715.025a8.11 8.11 0 0 1 7.467 8.087 8.11 8.11 0 0 1-7.467 8.087c.21.02.498.026.715.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"
              ></path>
              <path
                fill="#fff"
                d="M91.58 23.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.941 3.945m0-12.058c-4.477 0-8.105 3.631-8.105 8.113s3.628 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.629-8.113-8.106-8.113"
              ></path>
            </svg>
            {/* Logo single */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 25 42"
              height="42"
              width="25"
              alt="TikTok"
              className={`${!show && "lg:hidden"}`}
            >
              <g clipPath="url(#a)">
                <path
                  fill="#25F4EE"
                  d="M9.875 16.842v-1.119A9 9 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707"
                ></path>
                <path
                  fill="#25F4EE"
                  d="M10.087 29.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a7 7 0 0 1-.109-1.202h-4.727l-.006 18.969a3.98 3.98 0 0 1-3.967 3.829 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36v-1.055a6.5 6.5 0 0 1-3.584-1.068 6.57 6.57 0 0 0 3.584 2.123"
                ></path>
                <path
                  fill="#FE2C55"
                  d="M20.408 11.043a6.54 6.54 0 0 1-1.616-4.315h-1.265a6.56 6.56 0 0 0 2.881 4.315M8.707 20.365a3.98 3.98 0 0 0-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.32 3.98 3.98 0 0 1 3.973-3.977c.41 0 .805.07 1.176.185V16.92a9 9 0 0 0-1.176-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.175-.185"
                ></path>
                <path
                  fill="#FE2C55"
                  d="M23.992 13.166v3.676a11.25 11.25 0 0 1-6.579-2.116v9.622c0 4.8-3.903 8.713-8.706 8.713a8.67 8.67 0 0 1-4.99-1.579 8.7 8.7 0 0 0 6.37 2.781c4.797 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73a6.5 6.5 0 0 1-1.38-.148"
                ></path>
                <path
                  fill="#fff"
                  d="M17.413 24.347v-9.621a11.25 11.25 0 0 0 6.58 2.116v-3.676a6.57 6.57 0 0 1-3.584-2.123 6.6 6.6 0 0 1-2.887-4.315h-3.463l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.99 3.99 0 0 1-3.225-1.656 3.99 3.99 0 0 1-2.134-3.523A3.98 3.98 0 0 1 8.7 20.371c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.289.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.989 1.58c4.797 0 8.706-3.913 8.706-8.715"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#000" d="M0 0h25v42H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* Thanh tìm kiếm */}
          <button
            onClick={() => {
              show ? setShow(false) : setShow(true);
              document.querySelector(".search2").focus();
            }}
            className={`${
              !show && "lg:flex lg:justify-start lg:w-[13rem] lg:h-[2.5rem]"
            } items-center justify-center gap-1 inline-flex size-10 min-w-0 bg-[#1f1f1f] rounded-full cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-5 ${
                !show && "lg:mr-1 lg:ml-2"
              } shrink-0 text-gray-300`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <p
              className={`outline-0 hidden ${
                !show && "lg:block"
              } text-gray-300 font-medium
              text-sm`}
            >
              Tìm kiếm
            </p>
          </button>
        </div>

        {/* Thanh chức năng khác */}
        <div className="pt-[0.25rem] pb-[0.5rem] w-full scrollbar flex flex-col items-center gap-[0.25rem]">
          {MenuLeft.map((item, index) => (
            <div
              key={index}
              data-id={`${index}`}
              onClick={(e) => {
                setShow(false);
                setIsActive(Number(e.currentTarget.dataset.id));
              }}
              className={`flex justify-between ${
                isActive === index ? "text-(--primary-color)" : ""
              } ${
                !show && "lg:justify-start lg:w-[13rem]"
              } items-center gap-[0.75rem] h-[2.5rem] rounded-md cursor-pointer hover:bg-[#1f1f1f]`}
            >
              <div className="text-[19px] pl-1 shrink-0">{item.image}</div>
              <h2
                className={`font-medium ml-1 hidden ${
                  !show ? "lg:block lg:opacity-100" : "lg:opacity-0"
                } transition-all ease-in-out duration-300`}
              >
                {item.title}
              </h2>
            </div>
          ))}

          {/* Login */}
          <button
            className={`${
              !show && "lg:block"
            } hidden mt-2 cursor-pointer hover:opacity-90 bg-(--primary-color) w-full rounded-md color-white text-[16px] h-10 leading-[21px] min-w-[108px] px-4 py-[1px] font-medium`}
          >
            Đăng nhập
          </button>
        </div>

        {/* Line */}
        <div className="line ml-1 mt-4 w-full h-[0.5px] bg-[#282829d8]"></div>

        {/* Copyright */}
        <div className={`${!show && "lg:block"} hidden  pt-4 pl-2`}>
          <h4 className="text-[15px] leading-[22px] mt-0 text-[#ffffff80] font-bold">
            Công ty
          </h4>
          <h4 className="text-[15px] leading-[22px] mt-0 text-[#ffffff80] font-bold">
            Chương trình
          </h4>
          <h4 className="text-[15px] leading-[22px] mt-0 text-[#ffffff80] font-bold">
            Điều khoản và chính sách
          </h4>
          <span className="text-[12px] leading-[16px] mt-[5px] mr-[6px] text-[#ffffff80] font-semibold">
            ©2025 TikTok{" "}
          </span>
        </div>
      </div>

      <Search show={show} setShow={setShow} />
    </>
  );
}
