import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/beesC.jpg";

const About = () => {
  return (
    <div name="support" className="w-full h-screen">
      <div className="w-full h-screen bg-gray-900/90 absolute">
        <img
          className="w-full h-screen object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="text-center py-4 text-3xl text-slate-300">
            Our mission is to support healthy bee populations and promote
            sustainable agriculture through the collection and analysis of data
            on bee absconding. Our web application provides a platform for
            farmers and beekeepers to report bee absconding incidents and
            contribute to a comprehensive database of information on this issue.
            By leveraging machine learning algorithms to analyze data on
            contributing factors, we aim to provide personalized recommendations
            to farmers and beekeepers to improve their practices and reduce the
            incidence of bee absconding. Join us in our efforts to support the
            health and well-being of bees and promote a more sustainable food
            system.
          </p>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default About;
