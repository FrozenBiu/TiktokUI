export default function Search({ show, setShow }) {
  return (
    <div
      className={`h-screen w-[318px] bg-black z-98 fixed top-0 left-60 transition-transform transform ease-in-out duration-500 ${
        show ? "-translate-x-40" : "-translate-x-120"
      }`}
    >
      <h3 className="text-xl font-bold py-5 pl-2">Tìm kiếm</h3>

      {/* Close button */}
      <button
        onClick={() => setShow(false)}
        className="absolute top-7 right-6 bg-[#1f1f1f] hover:bg-[#363636] rounded-full p-1 cursor-pointer"
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Thanh tìm kiếm */}
      <div className="gap-1 bg-[#1f1f1f] rounded-full cursor-pointer mx-2 mt-2">
        <input
          className="rounded-full w-full py-3 px-3 text-gray-300 font-medium
              text-sm focus:outline-1 focus:outline-gray-600"
          type="text"
          placeholder="Tìm kiếm"
        />
      </div>
    </div>
  );
}
