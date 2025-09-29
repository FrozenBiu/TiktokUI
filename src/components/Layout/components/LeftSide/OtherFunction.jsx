export default function OtherFunction({ image, title, show }) {
  return (
    <div
      className={`flex justify-between ${
        !show && "lg:justify-start lg:w-[13rem]"
      } items-center gap-[0.75rem] h-[2.5rem] rounded-md cursor-pointer hover:bg-[#1f1f1f]`}
    >
      <div className="text-[19px] pl-1 shrink-0">{image}</div>
      <h2
        className={`font-medium ml-1 hidden ${
          !show ? "lg:block lg:opacity-100" : "lg:opacity-0"
        } transition-all ease-in-out duration-300 text-white`}
      >
        {title}
      </h2>
    </div>
  );
}
