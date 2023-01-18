import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleLeftRightIcon,
  GlobeAsiaAustraliaIcon,
  AcademicCapIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const aboutus = [
  {
    name: "Our Story",
    description:
      "Listen to the story to better understand our aspiration and vision.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Our Member",
    description:
      "Let's meet with club members to make more connections with them.",
    href: "#",
    icon: GlobeAsiaAustraliaIcon,
  },
];

const activities = [
  {
    name: "Academic",
    description:
      "As an academic club, we are ready to share our knowledge through various academic activities.",
    href: "#",
    icon: AcademicCapIcon,
  },
  {
    name: "Extra-curricular",
    description:
      "Through extra-curricular activities, we create and maintain our member bonds as well as help them to build their soft skills.",
    href: "#",
    icon: FireIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  return (
    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-gray-500",
                "group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none hover:underline-decor"
              )}
            >
              <span>About Us</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {aboutus.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <a
        href="#"
        className="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none hover:underline-decor"
      >
        Our Blog
      </a>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-gray-500",
                "group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none hover:underline-decor"
              )}
            >
              <span>Our Activities</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {activities.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <a
        href="#"
        className="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none hover:underline-decor"
      >
        FAQs
      </a>
    </Popover.Group>
  );
};

export default Nav;
