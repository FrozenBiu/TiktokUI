export default function Search({ show, isSearching, setShow, setIsSearching }) {
  return (
    <div
      className={`h-screen w-[318px] bg-black z-98 fixed top-0 left-60 transition-transform transform ease-in-out duration-500 border-r border-[#ffffff1f] ${
        show && isSearching ? "-translate-x-40" : "-translate-x-122"
      }`}
    >
      <h3 className="text-xl font-bold py-5 pl-2">Tìm kiếm</h3>

      {/* Close button */}
      <button
        onClick={() => {
          setIsSearching(false);
          setShow(false);
        }}
        className="absolute top-7 right-6 bg-[#1f1f1f] hover:bg-[#363636] rounded-full p-1 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Thanh tìm kiếm */}
      <div className="gap-1 bg-[#1f1f1f] rounded-full cursor-pointer mx-2 mt-3 flex items-center relative border-1 border-transparent focus-within:border-[#ffffff33]">
        <input
          className="search2 caret-(--primary-color) rounded-full w-full py-3 px-3 text-white font-normal
                text-sm outline-0"
          type="text"
          placeholder="Tìm kiếm"
          autoSave="none"
        />
        {/* Loading icon */}
        <svg
          className={`size-4 absolute top-[14px] -right-2 text-white fill-neutral-600 mr-5`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" />
        </svg>

        {/* Clear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-4 p-[2px] absolute top-[14px] -right-2 text-black mr-5 rounded-full bg-[#7a7676]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      {/* Hiển thị danh sách kết quả tìm kiếm */}
      <ul
        id="search-result"
        className="absolute h-[80%] w-full overflow-x-hidden overflow-y-auto my-[14px] list-none"
      >
        <div className="h-[30px] px-3 py-[5px] text-[14px] leading-[18px] font-semibold text-[#ffffff80] ">
          Tài khoản
        </div>
        <li className="px-4 py-[9px] cursor-pointer flex items-center">
          {/* Icon kính lúp */}
          <span className="size-10 inline-block mr-3 relative overflow-hidden text-[#fff] whitespace-nowrap text-center align-middle leading-8 rounded-[50%] bg-[#88888880] shrink-0">
            <img
              src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/21fa0be254e808305bd77628a0a173b5~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=a341b48b&x-expires=1759420800&x-signature=PmtYRGtWbMlRA0fm6pfzM1OY6BY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
              alt=""
              className="size-full object-cover"
            />
          </span>
          {/* Tên kết quả tìm kiếm */}
          <div className="grow-0 shrink-1 basis-auto w-full min-w-0">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-[16px] leading-[21px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap ">
                  larosa52_
                </h4>
                <p className="text-[14px] leading-[18px] text-[#ffffff80] font-normal overflow-hidden text-ellipsis whitespace-nowrap ">
                  Bánh bao anh húi
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
