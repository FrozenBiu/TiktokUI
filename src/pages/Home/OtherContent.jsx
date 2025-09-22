export default function OtherContent({ image, numbers }) {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div className="bg-[#212121] rounded-full hover:bg-[#313131fd] cursor-pointer flex justify-center items-center p-2">
        <a href="">{image}</a>
      </div>
      <p className="mt-2 text-[12px] font-semibold">{numbers}</p>
    </div>
  );
}
