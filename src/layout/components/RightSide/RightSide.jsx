import { useContext } from "react";
import { Popover } from "@base-ui-components/react/popover";
import AppContext from "../../../components/AppProvider/AppProvider";

export default function RightSide() {
  const { isLogin, setIsLogin } = useContext(AppContext);

  return (
    <div className="w-[31%] hidden sm:block absolute right-0 top-0">
      <div className="w-[100%] relative">
        {/* Thanh công cụ, download app, profile */}
        <div className="bg-[#1f1f1fb2] rounded-full inline-flex justify-end items-center xl:gap-3 p-2 mt-[1.25rem] mr-[1rem] absolute right-0 top-5">
          {/* Nhận xu */}
          <a
            href=""
            className="xl:min-w-[32px] max-w-[120px] flex items-center gap-1 hover:bg-[#353434] rounded-full p-2"
          >
            <div>
              <svg
                fill="currentColor"
                color="inherit"
                fontSize="16"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[1em]"
              >
                <path d="M28.68 11.5h-4.1v16.39a3.51 3.51 0 1 1-2.34-3.31v-4.21a7.61 7.61 0 1 0 6.44 7.52v-8.34a9.9 9.9 0 0 0 5.86 1.9v-4.1a5.85 5.85 0 0 1-5.86-5.85Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 2a22 22 0 1 0 0 44 22 22 0 0 0 0-44ZM6 24a18 18 0 1 1 36 0 18 18 0 0 1-36 0Z"
                ></path>
              </svg>
            </div>
            <div className="text-sm font-semibold truncate hidden xl:block">
              Nhận xu
            </div>
          </a>

          {/* Tải ứng dụng */}
          <a
            href=""
            className="xl:min-w-[32px] max-w-[120px] flex items-center gap-1 hover:bg-[#353434] rounded-full p-2"
          >
            <div>
              <svg
                fill="currentColor"
                color="inherit"
                fontSize="16"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[1em]"
              >
                <path d="M20 9c0-1.1.9-2 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2ZM18 38.5c0-.83.67-1.5 1.5-1.5h9a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1-1.5-1.5Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10.6c0-3.36 0-5.04.65-6.32a6 6 0 0 1 2.63-2.63C12.56 1 14.23 1 17.6 1h12.8c3.36 0 5.04 0 6.32.65a6 6 0 0 1 2.63 2.63C40 5.56 40 7.24 40 10.6v26.8c0 3.36 0 5.04-.65 6.32a6 6 0 0 1-2.63 2.63c-1.28.65-2.96.65-6.32.65H17.6c-3.36 0-5.04 0-6.32-.65a6 6 0 0 1-2.63-2.63C8 42.44 8 40.75 8 37.4V10.6ZM17.6 5h12.8c1.75 0 2.82 0 3.62.07.37.03.6.07.73.1.48.11.96.58 1.08 1.08.03.14.07.36.1.73.07.8.07 1.87.07 3.62v26.8c0 1.75 0 2.82-.07 3.62-.03.37-.07.6-.1.73-.11.48-.58.96-1.08 1.08-.14.03-.36.07-.73.1-.8.07-1.87.07-3.62.07H17.6c-1.75 0-2.82 0-3.62-.07-.37-.03-.6-.07-.73-.1-.5-.12-.97-.6-1.08-1.08a5.11 5.11 0 0 1-.1-.73c-.07-.8-.07-1.87-.07-3.62V10.6c0-1.75 0-2.82.07-3.62.03-.37.07-.6.1-.73.12-.5.6-.97 1.08-1.08.14-.03.36-.07.73-.1C14.78 5 15.85 5 17.6 5Z"
                ></path>
              </svg>
            </div>
            <div className="text-sm font-semibold truncate hidden xl:block">
              Tải ứng dụng
            </div>
          </a>

          {/* Ứng dụng */}
          <a
            href=""
            className="xl:min-w-[32px] max-w-[120px] flex items-center gap-1 hover:bg-[#353434] rounded-full p-2"
          >
            <div>
              <svg
                fill="currentColor"
                color="inherit"
                fontSize="18"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[1em]"
              >
                <path d="M21.9 7.38v19.86l-6.73-6.73a.87.87 0 0 0-1.24 0l-1.73 1.73a.88.88 0 0 0 0 1.24l11.18 11.18c.34.35.9.35 1.24 0L35.8 23.48a.88.88 0 0 0 0-1.24l-1.73-1.73a.87.87 0 0 0-1.24 0l-6.73 6.73V7.38c0-.49-.4-.88-.87-.88h-2.45c-.49 0-.88.4-.88.88ZM10.88 37.13c-.49 0-.88.39-.88.87v2.63c0 .48.4.87.88.87h26.24c.49 0 .88-.4.88-.87V38c0-.48-.4-.87-.87-.87H10.86Z"></path>
              </svg>
            </div>
            <div className="text-sm font-semibold truncate hidden xl:block">
              Ứng dụng dành cho máy tính
            </div>
          </a>

          {/* Line */}
          <div className={`line h-5 bg-gray-500 w-[0.5px] mr-2 xl:mr-0`}></div>

          {/* Login */}
          {!isLogin && (
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="bg-(--primary-color) hover:opacity-95 text-[16px] text-nowrap font-semibold px-2 py-1 w-[94px] rounded-full cursor-pointer flex items-center justify-center grow-0"
            >
              Đăng nhập
            </button>
          )}

          <Popover.Root>
            <Popover.Trigger>
              {/* Profile */}
              {isLogin && (
                <div className="hover:bg-[#353434] rounded-full p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              )}
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Backdrop />
              <Popover.Positioner
                positionMethod="absolute"
                sideOffset="0"
                alignOffset="-100"
              >
                <Popover.Popup>
                  <div className=" w-[228px] h-[108px] p-1 border-1 border-[#696969] rounded-[8px] bg-[#3a3a3a] shadow-[0_5px_26px] shadow-[#0000001a] text-[#ffffff] z-99">
                    {/* See Profile */}
                    <a
                      href="#profile"
                      className="w-full flex items-center px-[14px] rounded-[8px] cursor-pointer h-[50px] hover:bg-[#ffffff21]"
                    >
                      {/* Icon */}
                      <div className="mr-2">
                        <svg
                          fill="currentColor"
                          color="inherit"
                          fontSize="20"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-[1em]"
                        >
                          <path d="M24 3a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.00A6 6 0 0 0 24 7Zm0 19c10.3 0 16.67 6.99 17 17 .02.55-.43 1-1 1h-2c-.54 0-.98-.45-1-1-.3-7.84-4.9-13-13-13s-12.7 5.16-13 13c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1 .33-10.01 6.7-17 17-17Z"></path>
                        </svg>
                      </div>

                      <div className="text-[16px] flex-1 items-center font-semibold ">
                        Xem hồ sơ
                      </div>
                    </a>

                    {/* Logout */}
                    <Popover.Close className="w-[218px] rounded-[8px] ">
                      <div
                        onClick={() => {
                          setIsLogin(false);
                        }}
                        className="w-full flex items-center px-[14px] rounded-[8px] cursor-pointer h-[50px] hover:bg-[#ffffff21]"
                      >
                        {/* Icon */}
                        <div className="mr-2">
                          <svg
                            fill="currentColor"
                            color="inherit"
                            fontSize="20"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[1em]"
                          >
                            <path d="M18 33.08c0 1.33 0 2.45.07 3.37.08.95.25 1.86.7 2.73a7 7 0 0 0 3.05 3.06c.87.44 1.78.6 2.73.69.92.07 2.04.07 3.37.07h7.16c1.33 0 2.45 0 3.37-.07a7.14 7.14 0 0 0 2.73-.7 7 7 0 0 0 3.06-3.05c.44-.87.6-1.78.69-2.73.07-.92.07-2.04.07-3.37V14.92c0-1.33 0-2.45-.07-3.37a7.14 7.14 0 0 0-.7-2.73 7 7 0 0 0-3.05-3.06 7.14 7.14 0 0 0-2.73-.69C37.53 5 36.4 5 35.08 5h-7.16c-1.33 0-2.45 0-3.37.07-.95.08-1.86.25-2.73.7a7 7 0 0 0-3.06 3.05 7.14 7.14 0 0 0-.69 2.73c-.07.92-.07 2.04-.07 3.37 0 .32.26.58.58.58h2.92a.5.5 0 0 0 .5-.5c0-1.43 0-2.39.06-3.12a3.3 3.3 0 0 1 .27-1.24 3 3 0 0 1 1.3-1.31c.21-.1.54-.21 1.25-.27C25.6 9 26.57 9 28 9h7c1.43 0 2.39 0 3.12.06a3.3 3.3 0 0 1 1.24.27 3 3 0 0 1 1.31 1.3c.1.21.21.54.27 1.25.06.73.06 1.69.06 3.12v18c0 1.43 0 2.39-.06 3.12a3.3 3.3 0 0 1-.27 1.24 3 3 0 0 1-1.3 1.31c-.21.1-.54.21-1.25.27-.73.06-1.69.06-3.12.06h-7c-1.43 0-2.39 0-3.12-.06a3.3 3.3 0 0 1-1.24-.27 3 3 0 0 1-1.31-1.3c-.1-.21-.21-.54-.27-1.25C22 35.4 22 34.43 22 33a.5.5 0 0 0-.5-.5h-2.92a.58.58 0 0 0-.58.58Z"></path>
                            <path d="M13.3 13.3a1 1 0 0 0-1.42 0l-9.3 9.29a2 2 0 0 0 0 2.82l9.3 9.3a1 1 0 0 0 1.41 0l1.42-1.42a1 1 0 0 0 0-1.41L8.83 26H30a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H8.83l5.88-5.88a1 1 0 0 0 0-1.41l-1.42-1.42Z"></path>
                          </svg>
                        </div>

                        <div className="text-[16px] font-semibold">
                          Đăng xuất
                        </div>
                      </div>
                    </Popover.Close>
                  </div>
                  <Popover.Close />
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
        </div>

        {/* Nút prev & next video */}
        <div className="absolute right-7 top-95 flex flex-col gap-3">
          {/* Previous */}
          <button className="bg-[#212121] p-3 rounded-full hover:bg-[#313131fd] cursor-pointer flex justify-center items-center">
            <svg
              fill="currentColor"
              color="inherit"
              fontSize="inherit"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.5rem] text-white"
            >
              <path d="m24 20.24 13.17 13.17a1 1 0 0 0 1.42 0l2.82-2.82a1 1 0 0 0 0-1.42L25.06 12.82a1.5 1.5 0 0 0-2.12 0L6.59 29.17a1 1 0 0 0 0 1.42L9.4 33.4a1 1 0 0 0 1.42 0L24 20.24Z"></path>
            </svg>
          </button>

          {/* Next */}
          <button className="bg-[#212121] p-3 rounded-full hover:bg-[#313131fd] cursor-pointer flex justify-center items-center">
            <svg
              fill="currentColor"
              color="inherit"
              fontSize="inherit"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[1.5rem] text-white"
            >
              <path d="m24 27.76 13.17-13.17a1 1 0 0 1 1.42 0l2.82 2.82a1 1 0 0 1 0 1.42L25.06 35.18a1.5 1.5 0 0 1-2.12 0L6.59 18.83a1 1 0 0 1 0-1.42L9.4 14.6a1 1 0 0 1 1.42 0L24 27.76Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
