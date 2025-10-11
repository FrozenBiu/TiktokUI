export default function OtherContent({ image, numbers }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#212121] rounded-full hover:bg-[#313131fd] cursor-pointer flex justify-center items-center p-2  mt-2 mb-[6px]">
        <a className="p-1" href="">
          {image}
        </a>
      </div>
      <p className="text-[14px] text-[#ffffffbf] font-semibold">{numbers}</p>
    </div>
  );
}
