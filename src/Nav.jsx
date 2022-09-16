import React, { useState } from "react";
import { Transition } from "@headlessui/react";


export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 z-[100] mx-0 mt-0 w-full font-poppins shadow-2xl">
      <nav className="relative mx-auto flex h-[73px] w-full items-center justify-between pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none border-b-[1px] border-white/[5%] bg-zinc-900 bg-opacity-90 firefox:bg-opacity-90">
        <div className="md:w-[90%] xl:w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <h3 className=" z-[1001] mx-8 font-poppins text-lg font-bold duration-300 motion-reduce:transition-none text-white">
                    Meatloaf
                    <span className="text-orange-500"> Recipe</span>
                </h3>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <a
                    href="#home"
                    className="hover:text-orange-500 text-gray-200 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </a>

                  <a
                      href="#recipe"
                      className=" text-slate-200 border rounded-full border-orange-500 px-8 py-2 text-md font-medium duration-300 hover:scale-105"
                  >
                      Get The Recipe
                  </a>

                </div>
              </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-orange-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden border-b-[1px] border-white/[15%]" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <a
                href="#home"
                className="hover:text-orange-500 text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                    Home
                </a>

                <a
                  href="#recipe"
                  className="hover:text-orange-500 text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                    Recipe
                </a>

              </div>
            </div>
          )}
        </Transition>
    </div>
  );
}