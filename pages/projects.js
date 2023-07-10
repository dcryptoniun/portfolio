/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="min-h-screen pt-16 mt-16 duration-1000 ">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold ">Projects</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 ">
            <Link
              href="https://brainless-ui.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="brainlessui"
            >
              <h1 className="m-0 text-lg font-bold text-primary">
                BrainLess UI (under development)
              </h1>
              <p>Prebuild Component Library for Tailwind CSS</p>
              <Image
                src="/Images/brainlessui.png"
                alt="brainlessui"
                width={550}
                height={550}
              />
            </Link>

            <Link
              href="https://chainpay.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="chainpay"
            >
              <h1 className="m-0 text-lg font-bold text-primary">Chain Pay</h1>
              <p>Crypto Payment app</p>
              <Image
                src="/Images/chainpay.png"
                alt="chainpay"
                width={550}
                height={550}
              />
            </Link>

            <Link
              href="https://docxie.click/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="docxie"
            >
              <h1 className="m-0 text-lg font-bold text-primary">Docxie</h1>
              <p>File Converter</p>
              <Image
                src="/Images/docxie.png"
                alt="docxie"
                width={550}
                height={550}
              />
            </Link>

            <Link
              href="https://photoblockbeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="photoblock"
            >
              <h1 className="m-0 text-lg font-bold text-primary">
                Photo Block
              </h1>
              <p>Decentralized Image storage and Gallary</p>
              <Image
                src="/Images/photoblock.png"
                alt="photoblock"
                width={550}
                height={550}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
