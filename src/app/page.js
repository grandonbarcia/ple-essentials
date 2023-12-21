import Image from 'next/image';
import Logo from './assets/ple-essentials-favicon-black.png';
import Logo2 from './assets/ple-essentials-high-resolution-logo-white-transparent.png';
import Warehouse from './assets/warehouse.jpg';
import Turbo from './assets/turbo.jpg';
import './globals.css';
export default function Home() {
  function CustomButton({ children }) {
    return (
      <a
        href="#_"
        className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
          {children}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </a>
    );
  }

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
        <div className="bg-gradient-to-r from-gray-700 via-gray-700 to-black h-full w-full bg-cover relative flex justify-center items-center ">
          <Image
            className="w-full h-full object-cover absolute mix-blend-overlay"
            src={Warehouse}
          ></Image>
          <div className="flex flex-col gap-6 w-1/3">
            <div className="text-white text-8xl font-semibold uppercase ">
              mechanical, collision, accessory
            </div>
            <div className="text-white text-4xl font-semibold">
              a part selection that leads the industry.
            </div>
            <div className="flex w-1/2 justify-between">
              <CustomButton>Learn More</CustomButton>
              <CustomButton>Contact</CustomButton>
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
      <section className="relative flex justify-center items-center min-h-[700px] bg-gray-700">
        <div className="w-1/3">
          <Image src={Turbo}></Image>
        </div>
        <div className="w-1/3">
          <div>About Us</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </section>
      <section className="relative flex flex-col  min-h-[800px] ">
        <div className="custom-shape-divider-top-1703023278">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div>Services</div>
      </section>
      <section className="relative flex flex-col  min-h-[700px] bg-gray-700">
        <div className="custom-shape-divider-top-1703023426">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div>Contact</div>
      </section>
    </main>
  );
}
