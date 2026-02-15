export default function Header({ title, onBack }) {
  return (
    <header className="flex gap-[0.5rem] items-center text-xl font-bold py-5 pl-4">
      {/* Back button */}
      <button
        onClick={onBack}
        className="size-6 rounded-full cursor-pointer bg-[#ffffff21] hover:bg-[#ffffff30] flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <h2 className="font-bold text-[20px]">{title}</h2>
    </header>
  );
}
