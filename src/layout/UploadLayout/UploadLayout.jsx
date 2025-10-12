import LeftSide from "../components/LeftSide/LeftSide";

export default function UploadLayout({ children }) {
  return (
    <div className="h-screen bg-black text-white relative no-scrollbar ">
      <LeftSide />
      <div id="container">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
