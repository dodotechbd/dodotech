import React from "react";

const FeatureRow = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div class="xl:w-1/3 md:w-1/2 w-full p-8 ">
      <div className="bg-white hover:shadow-xl border hover:-translate-y-5 border-neutral  transform transition duration-300 rounded-lg">
        <article class="rounded-lg border h-56 border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <span class="inline-block rounded  p-2 text-white">
            <img
              class="mt-[-95px] p-4 mx-32 w-20 h-20 rounded
  bg-gray-300 inline-flex items-center justify-center md:mx-20  xl:mx-36 "
              src={img}
              alt="content"
            />
          </span>

          <a href="#">
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">{name}</h3>
          </a>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {description}
          </p>

          <a
            href="#"
            class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              class="block transition group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </a>
        </article>
      </div>
    </div>
  );
};

export default FeatureRow;

{
  /* <div class="p-4 rounded-lg bg-white mt-5">
<img
  class="mt-[-70px] p-4 mx-40 w-20 h-20 
  bg-gray-300 inline-flex items-center justify-center "
  src={img}
  alt="content"
/>
<h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
  {name}
</h3>

<p class="leading-relaxed text-base">{description}</p>
</div> */
}
