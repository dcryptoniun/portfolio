import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Photo from "../public/Images/photo.jpg";
import fiverr from "../public/Images/fiverr.png";
import twitter from "../public/Images/twitter.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayank Meena</title>
        <meta name="description" content="Portfolio Mayank Meena" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-100 dark:bg-slate-900 duration-1000  flex justify-center items-center w-full h-screen">
        <div className="p-5  bg-blurrybg backdrop-blur-3xl border max-w-md flex flex-col justify-center items-center text-center font-mono rounded-xl ">
          <Image
            className="rounded-full w-[200px] h-[200px]"
            src={Photo}
            alt="photo"
          />
          <h1 className=" font-bold text-2xl">Mayank Meena</h1>
          <p className="font-bold text-xl">Freelancer</p>
          <Link
            className="text-red-600 font-bold text-xl"
            href="https://www.fiverr.com/mayankmeena"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hire me!
          </Link>
          <div className="flex flex-row space-x-5 ">
            <Link className=" shadow-md hover:outline rounded-full text-green-300"
              href="https://www.fiverr.com/mayankmeena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-[25px] h-[25px]"
                src={fiverr}
                alt="fiverr link"
              />
            </Link>
            <Link className=" shadow-md hover:outline rounded-full text-blue-300 hover:bg-blue-300"
              href="https://twitter.com/0xmynk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-[25px] h-[25px]"
                src={twitter}
                alt="twitter link"
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
