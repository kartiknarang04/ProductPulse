import React from "react";
import { BsSearch } from "react-icons/bs";

const Rightsidebarproducts = () => {
  return (
    <section className="w-[250x] fixed sticky hidden top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[95vh] overflow-x-hidden px-6">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900  my-4">
        <h3 className="font-bold text-xl mt-4 mb-6 px-4 text-white">Trending Products</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200 text-white">
              <div className="font-bold text-lg ">#Swapnarambh AI</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900  my-4">
        <h3 className="font-bold text-xl my-4 px-4 text-white">Promoted Products</h3>
        <div className="font-bold text-xl px-4 text-white">
          {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
                <div className="font-bold text-lg text-white ">#Blah Blah</div>
                <div className="text-xs text-neutral-400 text-white">35.4k</div>
              </div>
            ))}
        </div>
        </div>

    </section>
  );
};

export default Rightsidebarproducts;