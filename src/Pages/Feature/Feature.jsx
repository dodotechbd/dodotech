import React from "react";
import { useQuery } from "react-query";
import FeatureRow from "./FeatureRow";

const Feature = () => {
  const url = "Feature.json";
  const { data: services } = useQuery("services", () =>
    fetch(url).then((res) => res.json())
  );

  return (
    <div className="bg-[#FBF5E7]">
      <div class="container mx-auto px-4 text-black">
        <div class="py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-6xl text-2xl  font-bold title-font mb-2 text-gray-900">
                We have Impressive Template Features
              </h1>
              <div class="h-1 w-20 bg-[#702FFF] rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full front-bold leading-relaxed lg:mt-16  ">
              You will love all of the features in our template. 100% guaranteed
              satisfaction.
            </p>
          </div>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services?.map((service) => (
              <FeatureRow key={service.id} service={service}></FeatureRow>
            ))}
          </div>
        </div>
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
