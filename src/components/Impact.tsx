import Link from "next/link";

function Impact() {
  return (
    <div className="h-[40rem] flex items-center justify-center   bg-gradient-to-tr from-[#44065a] to-[#120119]">
      <div className="text-center">
        <h1 className=" md:text-5xl text-3xl mb-10 mr-5 ml-5 font-bold text-white  tracking-wide">Let’s create a measurable impact on your business.</h1>
        <button className="py-4 px-14 bg-white font-bold text-black md:text-2xl text-xl hover:border-2 hover:border-t-red-400 hover:border-orange-500   rounded-lg  tracking-wide hover:bg-black hover:text-white">
          <Link href="https://share.hsforms.com/1zBadTPyLTVu585sGj-a5TQcyk5y">
          Request A Demo
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Impact;
