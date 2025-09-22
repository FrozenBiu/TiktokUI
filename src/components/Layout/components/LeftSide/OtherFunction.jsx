export default function OtherFunction({ image, title }) {
  return (
    <div className="flex justify-between lg:justify-start items-center gap-[0.75rem] h-[2.5rem] lg:w-[13rem] rounded-md cursor-pointer hover:bg-[#1f1f1f]">
      <div className="text-[19px] pl-1 shrink-0">{image}</div>
      <h2 className="font-medium ml-1 hidden lg:block text-white">{title}</h2>
    </div>
  );
}
