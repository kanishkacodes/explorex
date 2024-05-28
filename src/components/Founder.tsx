import React from "react";
import Image from "next/image";
import Link from "next/link";

//md:ml-10 ml-5 md:mt-0 mt-5 

function Founder() {
  return (
    <div>
      <div className="border border-black  md:mr-64 md:ml-64 mr-5 ml-5 mt-10 mb-10 p-10 ">
        <div className=" flex md:flex-row flex-col md:items-center space-x-0 md:space-x-16">
          <div className=" flex flex-col   ">
            <h1 className="font-bold md:text-7xl tracking-wide text-5xl text-black">Meet</h1>
            <h1 className="font-bold md:text-7xl tracking-wide text-5xl text-black">The</h1>
            <h1 className="font-bold md:text-7xl tracking-wide   text-5xl text-black mb-5">Founder</h1>
          </div>
          <div className="">
            <h2 className="font-bold md:text-3xl text-xl text-black mb-5">Jugal Shah</h2>
            <p className=" tracking-wide text-xl mb-5">
              Founder, Head of UX at Leo9 Studio. Behavioral science and
              Neuromarketing expert.
            </p>
            <div>
            <Link href="https://www.instagram.com/thinkfluence.byexplorex/">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:opacity-75 mb-5"
              />
            </Link>

            </div>
            <div className=" flex space-x-3 md:space-x-4 mb-5">
                
            <Link href="https://www.instagram.com/thinkfluence.byexplorex/">
            <div className="w-20  md:w-32 ">
              <Image
                src="/Sony.png"
                alt="Instagram"
                width={1800} height={400}
                className="hover:opacity-75 "
              />
               </div>
            </Link>
           
            <Link href="https://www.instagram.com/thinkfluence.byexplorex/">
                <div className="w-20 md:w-32 ">
              <Image
                src="/Sony.png"
                alt="Instagram"
                width={1800} height={400}
                className="hover:opacity-75 "
              />
              </div>
            </Link>
            <Link href="https://www.instagram.com/thinkfluence.byexplorex/">
                <div className="w-20  md:w-32 ">
              <Image
                src="/Sony.png"
                alt="Instagram"
                width={1800} height={400}
                className="hover:opacity-75"
              />
              </div>
            </Link>
            </div>
          </div>

          <div className=" md:w-1/3 flex items-center justify-center" >
          <Image
                src="/pfp1.jpg"
                alt="pfp"
                width={6220}
                height={6220}
                className="rounded-full w-full"
                
              />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
