import { useEffect, useState } from "react";
import Header from "./Menu/Header";

// eslint-disable-next-line react-refresh/only-export-components
export const MENU_ITEMS = [
  {
    title: "Tạo hiệu ứng TikTok",
  },
  {
    title: "Bán hàng trên TikTok Shop",
  },
  {
    title: "Công cụ dành cho nhà sáng tạo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    ),
    children: {
      title: "Công cụ dành cho nhà sáng tạo",
      data: [
        {
          title: "Mua sắm qua LIVE",
        },
        {
          title: "Trung tâm Nhà sáng tạo LIVE",
        },
      ],
    },
  },
  {
    title: "Tiếng Việt",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    ),
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    title: "Chế độ tối",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    ),
    children: {
      title: "Chế độ tối",
      data: [
        {
          title: "Tự động",
        },
        {
          title: "Chế độ tối",
        },
        {
          title: "Chế độ sáng",
        },
      ],
    },
  },
  {
    title: "Phản hồi và trợ giúp",
  },
];

export default function MoreMenu({
  moreMenuRef,
  show,
  isMoreMenu,
  setShow,
  setIsMoreMenu,
}) {
  const [history, setHistory] = useState([{ data: MENU_ITEMS }]);
  const current = history[history.length - 1];

  useEffect(() => {
    if (!show && history.length > 1) {
      setHistory((prev) => prev.slice(0, 1));
    }
  }, [show, history.length]);

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <div
      ref={moreMenuRef}
      className={`h-screen w-[318px] bg-black z-98 fixed top-0 left-58 transition-transform transform ease-in-out duration-500  ${
        show && isMoreMenu ? "-translate-x-40" : "-translate-x-120"
      }`}
    >
      {history.length <= 1 && (
        <>
          <h3 className="text-xl font-bold py-5 pl-4">Thêm</h3>

          {/* Close button */}
          <button
            onClick={() => {
              setIsMoreMenu(false);
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
        </>
      )}

      {history.length > 1 && (
        <Header title={current.title} onBack={handleBack} />
      )}

      {/* Danh sách menu */}
      <ul
        id="search-result"
        className="p-2 h-[90%] w-full overflow-x-hidden overflow-y-scroll mt-1 mb-[14px] list-none flex flex-col gap-[0.25rem]"
      >
        {current.data.map((item, index) => {
          const isParent = !!item.children;

          return (
            <li
              key={index}
              onClick={() => {
                if (isParent) {
                  setHistory((prev) => [...prev, item.children]);
                }
              }}
              className="w-full list-none px-[0.5rem] rounded-md hover:bg-[#ffffff30]"
            >
              <button className="flex justify-between items-center cursor-pointer w-full rounded-[5px] text-[15px] min-w-0 h-[2.5rem] p-0">
                <p className="font-semibold text-[0.9375rem] leading-[1.21875rem] ">
                  {item.title}
                </p>
                <div className="text-[#ffffff52]">
                  {item.icon ? item.icon : ""}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
