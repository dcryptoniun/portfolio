import Image from "next/image";

const services = [
  {
    title: "Website Development",
    description:
      "We design and develop beautiful, responsive websites using the latest web technologies.",
    image: "/Images/1.jpg",
  },
  {
    title: "Smart Contract (NFT, Token)",
    description:
      "We develop smart contracts for NFTs and tokens on Ethereum and other blockchain platforms.",
    image: "/Images/2.jpg",
  },

  {
    title: "Dapps",
    description:
      "We build decentralized applications (dapps) on blockchain platforms like Ethereum and other EVM supported blockchain",
    image: "/Images/3.jpg",
  },
];

export default function Services() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 pt-16 m-5 mt-16 ">
      <div className="absolute right-0 rounded-full bg-purple-800/30 w-52 h-52 blur-md animate-pulse"></div>
      <div className="absolute bottom-0 rounded-full bg-yellow-300/30 w-52 h-52 blur-md"></div>
      <div className="container py-8 mx-auto ">
        <h1 className="mb-6 text-4xl font-bold text-primary">SERVICES</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 ">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden bg-transparent border border-opacity-50 rounded-lg shadow-xl hover:outline hover:transition-transform hover:scale-105 backdrop-blur"
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
                <h2 className="mb-2 text-xl font-bold">{service.title}</h2>
                <p className="">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
