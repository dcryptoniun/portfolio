import Link from "next/link";
import { TextLoop } from "react-text-loop-next";

const HeroSection = () => {
  return (
    <div className="duration-1000 ">
      <div className="flex items-center justify-center min-h-screen m-5 bg-gradient-to-tr rounded-2xl bg-opacity-5 from-fuchsia-800 to-indigo-600">
        <div className="p-2 m-3">
          <h1 className="text-5xl font-bold">Mayank Meena</h1>
          <h2 className="gap-1 p-1 text-lg font-semibold">
            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
              <span>Blockchain</span>
              <span>Smart Contract</span>
              <span>NFTs</span>
              <span>Token</span>
              <span>Dapps</span>
              <span>Website</span>
            </TextLoop>{" "}
            Development
          </h2>
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
          <Link href="/#contact" className="space-x-1 btn btn-primary">
            <h1>Contact me</h1> <p className=" animate-pulse"> {">>"}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
