import Link from "next/link";
 import { TextLoop } from "react-text-loop-next";
import { toast } from "react-toastify";



const Toast = () => {
  toast("Hello, world!");
};

const HeroSection = () => {
  return (
    <div className=" duration-1000 ">
      <div className="flex items-center justify-center  min-h-screen ">
        <div className="m-3 p-2">
          <h1 className="text-5xl font-bold">Mayank Meena</h1>
          <TextLoop>
        <span>Trade</span>
        <span>Increase</span>
        <span>Stock</span>
      </TextLoop>
          <p className="py-6">
            Welcome to my portfolio website! My name is Mayank Meena, and I am a
            freelance developer specializing in blockchain, smart contract, NFT,
            token, DApps, websites, and landing pages. I have extensive
            experience working with React, Next.js, Tailwind CSS, and WordPress.
            <br />
            As a developer, I am passionate about creating innovative solutions
            that help businesses achieve their goals. Whether you need a custom
            DApp for your blockchain project or a beautiful, responsive website
            for your business, I am here to help.
            <br />
            With my expertise in blockchain and cryptocurrency technologies, I
            can also help you create and launch your own token or NFT project. I
            am committed to staying up-to-date with the latest developments in
            the industry to ensure that my clients always receive the most
            current and effective solutions.
            <br />
            So if you are looking for a reliable, skilled, and dedicated
            developer to help bring your ideas to life, look no further. Contact
            me today to learn more about how I can help you achieve your goals.
          </p>
          <Link href="/#contact" className="btn btn-primary space-x-1">
            <h1>Contact me</h1> <p className=" animate-pulse"> {">>"}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
