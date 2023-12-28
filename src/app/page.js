import Image from 'next/image';
import Logo from './assets/ple-essentials-favicon-black.png';
import Logo2 from './assets/ple-essentials-high-resolution-logo-white-transparent.png';
import Warehouse from './assets/warehouse.jpg';
import Turbo from './assets/turbo.png';
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
    <main className="tracking-wide">
      <section className="md:container md:mx-auto px-4 flex justify-center  md:justify-between items-center">
        <div className="flex items-center  ">
          <Image src={Logo} height={100} width={100}></Image>
          <h1 className="bg-gradient-to-l from-gray-700 via-gray-700 to-black text-transparent bg-clip-text text-3xl font-bold">
            PLE Essentials
          </h1>
        </div>
        <div className="md:w-1/2 lg:w-1/3 text-2xl hidden md:flex justify-between font-semibold ">
          <div>About Us</div>
          <div>Our Services</div>
          <div>Contact</div>
        </div>
      </section>
      <section className="h-screen">
        <div className="h-full w-full bg-cover relative flex justify-center items-center bg-gradient-to-r from-gray-700 via-gray-700 to-black">
          <Image
            className="w-full h-full object-cover absolute mix-blend-overlay"
            src={Warehouse}
          ></Image>
          <div className="flex flex-col gap-6 text-center lg:text-left md:gap-6 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="text-white text-8xl uppercase ">
              mechanical, collision, accessory
            </div>
            <div className="text-white text-4xl ">
              a part selection that leads the industry.
            </div>
            <div className="flex mx-auto lg:mx-0 w-2/3 md:w-1/2 justify-between">
              <CustomButton>Learn More</CustomButton>
              <CustomButton>Contact</CustomButton>
            </div>
          </div>
          <div className="hidden lg:block w-1/3">
            <Image
              className="mx-auto "
              src={Logo2}
              height={500}
              width={500}
            ></Image>
          </div>
        </div>
      </section>
      <section className="relative h-screen md:min-h-[700px] flex flex-col lg:flex-row md:gap-10 justify-center items-center bg-gray-700 lg:px-10 xl:px-0">
        <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3">
          <Image src={Turbo} className="mx-auto"></Image>
        </div>
        <div className="flex flex-col gap-6 lg:gap-3 md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/3 text-white text-center lg:text-left px-5 md:px-0">
          <div className="text-6xl font-extrabold ">About Us</div>
          <div className="text-xl">
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
      <section className="relative min-h-[2500px] md:min-h-[1000px] lg:min-h-[800px] flex flex-col justify-center items-center  text-black md:p-4 lg:p-32">
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
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="text-6xl font-extrabold text-gray-800">
            Our Services
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-between items-center w-full">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg mx-auto"
                  src={Turbo}
                  width={300}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg mx-auto"
                  src={Turbo}
                  width={300}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  className="rounded-t-lg mx-auto"
                  src={Turbo}
                  width={300}
                  height={300}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-screen md:min-h-[700px] flex flex-col justify-center items-center   bg-gray-700">
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
        <div>
          <section className=" dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-white  sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form action="#" className="space-y-8 ">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xl font-medium text-white "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-xl font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-xl font-medium text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
