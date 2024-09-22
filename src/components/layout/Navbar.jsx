import { NavLink, redirect } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function Example() {
  const navItems = [
    { name: "Host", link: "/host" },
    { name: "About", link: "/about" },
    { name: "Vans", link: "/vans" },
  ];

  const navItemElements = navItems.map((item, index) => (
    <NavLink
      key={index}
      to={item.link}
      className={({ isActive }) =>
        isActive
          ? "text-2xl font-medium underline underline-offset-4"
          : "text-2xl font-medium opacity-75 transition-all duration-200 hover:opacity-100"
      }
    >
      {item.name}
    </NavLink>
  ));

  function fakeLogout() {
    console.log("logging out");
    localStorage.removeItem("loggedin");
    window.location.reload();
  };

  const loginStatus =
    localStorage.getItem("loggedin") === "true" ? true : false;

  return (
    <Disclosure as="nav" className="flex items-center h-28">
      <div className="flex w-full px-4">
        <div className="w-1/2">
          <NavLink to="/" className="text-2xl font-black">
            #VANLIFE
          </NavLink>
        </div>
        <div className="w-1/2 flex justify-end space-x-10">
          {navItemElements}
          <NavLink
            to="login"
            className="self-center opacity-75 hover:opacity-100 transition-all duration-200"
            title="Login"
          >
            <UserCircleIcon className="w-6" />
          </NavLink>
          {loginStatus && (
            <button
              onClick={fakeLogout}
              className="self-center text-2xl font-medium opacity-75 transition-all duration-200 hover:opacity-100"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </Disclosure>
  );
}
