import Image from 'next/image';
import Logo from './assets/ple-essentials-favicon-black.png';
import Logo2 from './assets/ple-essentials-high-resolution-logo-white-transparent.png';

import Warehouse from './assets/warehouse.jpg';
export default function Home() {
  return (
    <main>
      <section className="md:container md:mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} height={100} width={100}></Image>
          <h1 className="bg-gradient-to-l from-gray-700 via-gray-700 to-black text-transparent bg-clip-text text-3xl font-bold">
            PLE Essentials
          </h1>
        </div>
        <div className="w-1/3 text-2xl flex justify-between font-semibold">
          <div>About Us</div>
          <div>Our services</div>
          <div>Contact</div>
        </div>
      </section>
      <section className="h-screen">
        <div className="bg-gradient-to-r from-gray-700 via-gray-700 to-black h-2/3 w-full bg-cover relative flex justify-center items-center">
          <Image
            className="w-full h-full object-cover absolute mix-blend-overlay"
            src={Warehouse}
          ></Image>
          <div className=" w-1/3">
            <div className="text-white text-8xl font-semibold uppercase ">
              mechanical, collision, accessory
            </div>
            <div className="text-white text-4xl font-semibold  ">
              a part selection that leads the industry.
            </div>
          </div>
          <div className="w-1/3">
            <Image
              className="mx-auto "
              src={Logo2}
              height={500}
              width={500}
            ></Image>
          </div>
        </div>
      </section>
      <section>About Us</section>
      <section>Our Services</section>
      <section>Contact</section>
    </main>
  );
}
