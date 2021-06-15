import React from "react";
import { Image } from "semantic-ui-react";
import "./cardTitle.css";

const Cards = ({ title, author, article }) => {
  return (
    <div className="flex flex-wrap items-start bg-white rounded-md py-8 px-8 md:w-72 w-full mb-8 mr-8 shadow-md hover:bg-gray-200 cursor-pointer">
      <Image
        src="https://play-lh.googleusercontent.com/2S9kVsMaTiGnGCFSRu_ndmgs7I51WNX0gy6bJM_TZ73QoKCIimgraNCR6fEOCO2K_uE"
        size="tiny"
        verticalAlign="bottom"
      />
      <span>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
        </style>
        <h2>{title}</h2>
        <p className="h-32 overflow-hidden">{article}</p>
        <h6>By: {author} </h6>
      </span>
    </div>
  );
};

export default Cards;
