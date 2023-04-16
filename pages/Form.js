import Link from "next/link";
import React from "react";

export default function Form() {
  return (
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          for="username"
        >
          Email Address
        </label>
        <input
          className="appearance-none bg-[#F5F5F5] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="johndoe@gmail.com"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          for="password"
        >
          Password
        </label>
        <input
          className="appearance-none bg-[#EAEAEA] rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="********"
        />
        <a className="text-blue-500 hover:text-blue-800 hover:cursor-pointer text-xs font-medium">
          Forgot Password?
        </a>
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="/Dashboard"
          className="grow bg-black hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline text-center"
          type="button"
        >
          Sign In
        </Link>
        {/* <button> */}
        {/* </button> */}
        {/* <a
          className="inline-block align-baseline font-bold text-sm "
          href="#"
          >
          Forgot Password?
        </a> */}
      </div>
    </form>
  );
}
