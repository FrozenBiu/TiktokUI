import LeftSide from "../components/LeftSide/LeftSide";
import RightSide from "../components/RightSide";

export default function DefaultLayout({ children }) {
  return (
    <div className="h-screen bg-black text-white relative no-scrollbar ">
      <LeftSide />
      <div
        id="container"
        className="flex justify-between flex-1 h-screen relative"
      >
        <div className="main-content w-full flex justify-center mx-[5rem]">
          {children}
        </div>
        <RightSide />
      </div>
    </div>
  );
}
