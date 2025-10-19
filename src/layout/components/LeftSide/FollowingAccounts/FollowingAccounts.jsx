import AccountItem from "./AccountItem";

export default function FollowingAccounts({ label, data = [], onSeeMore }) {
  return (
    <div className="pt-[0.25rem] pb-[0.5rem] w-full gap-[0.25rem]">
      {/* Label */}
      <p className="text-[#ffffffbf] text-[0.875rem] font-semibold mb-2 px-2">
        {label}
      </p>
      <div className="flex flex-col gap-1">
        {data.map((user) => (
          <AccountItem key={user.id} data={user} />
        ))}
      </div>

      {/* More */}
      <div className="flex items-center gap-[1rem] mt-2 rounded-[6px] leading-[21px] min-w-[108px] h-[40px] cursor-pointer hover:bg-[#ffffff21]">
        <div className="flex items-center justify-center size-[28px]">
          <svg
            width="15"
            datae2e=""
            height="15"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.8788 33.1213L7.58586 18.8284C7.19534 18.4379 7.19534 17.8047 7.58586 17.4142L10.4143 14.5858C10.8048 14.1953 11.438 14.1953 11.8285 14.5858L24.0001 26.7574L36.1716 14.5858C36.5622 14.1953 37.1953 14.1953 37.5859 14.5858L40.4143 17.4142C40.8048 17.8047 40.8048 18.4379 40.4143 18.8284L26.1214 33.1213C24.9498 34.2929 23.0503 34.2929 21.8788 33.1213Z"
            ></path>
          </svg>
        </div>
        <div onClick={onSeeMore}>Xem thêm</div>
      </div>

      {/* Line */}
      <div className="line ml-1 mt-4 w-full h-[0.5px] bg-[#2b2a2a60]"></div>
    </div>
  );
}
