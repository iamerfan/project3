export default function Container({ children, active }) {
  return (
    <div className={` duration-500`}>
      <div
        className={`flex justify-center items-center min-h-screen bg-white text-black relative`}
      >
        <div className="absolute opacity-40 w-52 blur h-52 bg-blue-400 bottom-[15%] rounded-full "></div>
        <div
          className="p-7 opacity-[95%] lg:max-w-lg md:max-w-sm 
       max-w-xs border rounded flex flex-col gap-4 backdrop-blur-lg
       "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
