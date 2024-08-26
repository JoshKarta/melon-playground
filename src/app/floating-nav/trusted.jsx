import Counter from "@/components/counter";
import React from "react";

export default function Trusted() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Trusted by eCommerce Businesses
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>

      <dl className="mg-6 grid grid-cols-2 gap-4 divide-y divide-neutral-300 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Total Sales
          </dt>

          <dd className="text-4xl font-extrabold text-sanity-red md:text-5xl">
            $<Counter value={4.8} />m
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Official Addons
          </dt>

          <dd className="text-4xl font-extrabold text-sanity-red md:text-5xl">
            <Counter value={24} />
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Total Addons
          </dt>

          <dd className="text-4xl font-extrabold text-sanity-red md:text-5xl">
            <Counter value={86} />
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Downloads
          </dt>

          <dd className="text-4xl font-extrabold text-sanity-red md:text-5xl">
            <Counter value={100} />k
          </dd>
        </div>
      </dl>
    </div>
  );
}