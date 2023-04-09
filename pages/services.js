import Head from "next/head";
import Image from "next/image";

const services = [
  {
    title: "Website Development",
    description:
      "We design and develop beautiful, responsive websites using the latest web technologies.",
    image: "/images/1.jpg",
  },
  {
    title: "Smart Contract (NFT, Token)",
    description:
      "We develop smart contracts for NFTs and tokens on Ethereum and other blockchain platforms.",
    image: "/images/2.jpg",
  },

  {
    title: "Dapps",
    description:
      "We build decentralized applications (dapps) on blockchain platforms like Ethereum and EOS.",
    image: "/images/3.jpg",
  },
];

export default function Services() {
  return (
    <div className="m-3 p-2 md:h-screen flex justify-center items-center">
      <Head>
        <title>Services | Mayank Meena</title>
      </Head>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold  mb-6 text-primary">SERVICES</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-transparent backdrop-blur shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  object-fit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold  mb-2">{service.title}</h2>
                <p className="">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
