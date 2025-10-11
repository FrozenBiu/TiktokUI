import LeftSide from "../components/LeftSide/LeftSide";

export default function UploadLayout({ children }) {
  return (
    <div className="flex">
      <LeftSide />
      <div id="container">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
