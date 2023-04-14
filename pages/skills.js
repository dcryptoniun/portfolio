/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Skills = () => {
  return (
    <div className="min-h-screen pt-16 mt-16 duration-1000 ">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold ">My Skills</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div
              className="flex items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="Tailwind CSS"
            >
              <Image
                src="/Images/tailwind.svg"
                alt="Tailwind CSS logo"
                width={120}
                height={120}
              />
            </div>

            <div
              className="flex items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="Nextjs"
            >
              <Image
                src="/Images/next.svg"
                alt="Next.js logo"
                width={120}
                height={120}
              />
            </div>

            <div
              className="flex items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="React"
            >
              <Image
                src="/Images/react.svg"
                alt="React logo"
                width={120}
                height={120}
              />
            </div>

            <div
              className="flex items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="Web3"
            >
              <Image
                src="/Images/web3.svg"
                alt="web3 logo"
                width={120}
                height={120}
              />
            </div>
            <div
              className="flex items-center justify-center p-5 border border-opacity-25 rounded-md bg-secondary/50 hover:scale-105 tooltip tooltip-bottom "
              data-tip="Solidity"
            >
              <Image
                src="/Images/solidity.svg"
                alt="Solidity"
                width={100}
                height={100}
              />
            </div>

            {/* Add more logos here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
