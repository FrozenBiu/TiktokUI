import OtherContent from "./OtherContent";

export default function Home() {
  return (
    <div className="h-full min-h-[618px] w-full flex justify-center gap-4 ">
      <div className="flex h-full items-end gap-2 relative">
        {/* Video */}
        <div className="h-full w-full min-w-[calc(500px-9.5rem)] flex gap-2 aspect-[9/16]">
          <video
            className="w-full h-full rounded-2xl"
            src="assets/videos/video-sample.mp4"
          ></video>
        </div>

        {/* Other content */}
        <div className="flex flex-col absolute -right-15 bottom-0">
          {/* Avatar */}
          <div className="flex flex-col justify-center items-center relative mb-2">
            <div className="bg-[#212121] rounded-full cursor-pointer flex justify-center items-center p-2  mt-2 mb-[4px]">
              <a className="p-1" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
            </div>
            <button className="size-[24px] bg-(--primary-color) cursor-pointer hover:opacity-90 rounded-full flex items-center justify-center absolute -bottom-2 left-0 translate-x-[50%]">
              <div className="w-[22px] h-[14px]">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M26 7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h15v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V26h15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H26V7Z"></path>
                </svg>
              </div>
            </button>
          </div>

          {/* Like */}
          <OtherContent
            image={
              <svg
                data-e2e=""
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <g clipPath="url(#HeartFill_clip0)">
                  <g filter="url(#HeartFill_filter0_d)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
                    ></path>
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z"
                    fillOpacity="0.03"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="HeartFill_filter0_d"
                    x="-0.9"
                    y="1.05"
                    width="25.8"
                    height="24.05"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1.2"></feOffset>
                    <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <clipPath id="HeartFill_clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            }
            numbers={123}
          />

          {/* Comment */}
          <OtherContent
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 21.5c0-10.22 9.88-18 22-18s22 7.78 22 18c0 5.63-3.19 10.74-7.32 14.8a43.6 43.6 0 0 1-14.14 9.1A1.5 1.5 0 0 1 22.5 44v-5.04C11.13 38.4 2 31.34 2 21.5M14 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6m13-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            numbers={200}
          />

          {/* Favorites */}
          <OtherContent
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M4 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15.13a1 1 0 0 1-1.555.831l-6.167-4.12a.5.5 0 0 0-.556 0l-6.167 4.12A1 1 0 0 1 4 19.63z"
                ></path>
                <path
                  fill="currentColor"
                  fillOpacity="0.03"
                  d="M4.032 4.144Q4 4.317 4 4.5v15.13a1 1 0 0 0 1.555.831l6.167-4.12a.5.5 0 0 1 .41-.066l-.427-.198a1.49 1.49 0 0 0-1.377.063c-.581.339-1.45.85-2.25 1.339-.59.359-1.427.695-2.187.962-.929.325-1.86-.387-1.86-1.37zm8.251 12.202 6.162 4.115A1 1 0 0 0 20 19.63V4.5a2 2 0 0 0-1.123-1.798c.21.254.334.58.33.936a117 117 0 0 1-.896 13.408c-.124.99-1.17 1.553-2.076 1.133z"
                ></path>
              </svg>
            }
            numbers={10}
          />

          {/* Share */}
          <OtherContent
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.938 3.175a.674.674 0 0 1 1.138-.488l6.526 6.215c.574.547.554 1.47-.043 1.991l-6.505 5.676a.674.674 0 0 1-1.116-.508V13.49s-6.985-1.258-9.225 2.854c-.209.384-1.023.518-.857-1.395.692-3.52 2.106-9.017 10.082-9.017z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#161823"
                  fillRule="evenodd"
                  d="m15.754 6.212 1.295 2.59a1.12 1.12 0 0 1-.268 1.349l-5.799 5.042s-.28 1.403.562 1.403 7.578-6.174 7.578-6.174.28-.842-.561-1.684c-.843-.842-2.807-2.526-2.807-2.526"
                  clipRule="evenodd"
                  opacity="0.03"
                ></path>
                <path
                  fill="url(#a)"
                  fillRule="evenodd"
                  d="M10.937 6.23v7.297s-6.683-.942-8.777 2.246C.146 18.839.331 12.309 3.363 9.057s7.574-2.827 7.574-2.827"
                  clipRule="evenodd"
                  opacity="0.09"
                ></path>
                <defs>
                  <radialGradient
                    id="a"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-113.046 11.628 5.43)scale(8.93256 8.78076)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop></stop>
                    <stop offset="0.995" stopOpacity="0.01"></stop>
                    <stop offset="1" stopOpacity="0.01"></stop>
                  </radialGradient>
                </defs>
              </svg>
            }
            numbers={20}
          />

          {/* Nhạc nền */}
          <OtherContent
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
