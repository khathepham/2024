import React from "react";

type Decagon1Props = {
  image: {src: string};
  TitleText: string;
  SubtitleText: string;
};

export default function Decagon1({ image, TitleText, SubtitleText}:Decagon1Props) {
    
    // Didn't pursue the route of using a CSS-generated decagon because it just didn't look the same as the design, and it was also a pain to get it to be responsive.
    {/* <article className="decagon bg-gradient-to-tr from-royalPurple to-goldenApricot flex items-center justify-center">
      <div>
      40+ Speakers
      </div>
    </article> */}

  return (
    <article
      className="relative flex items-center justify-center h-[80px] w-[70px] min-[390px]:h-[120px] min-[390px]:w-[105px] md:h-[210px] md:w-[195px] pb-2"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <p className="font-semibold text-[18px] min-[390px]:text-[24px] md:text-[50px] tracking-tighter text-center text-white">
        { TitleText}
        </p>
        <p className="font-regular text-[8px] min-[390px]:text-[12px] md:text-[19px] tracking-tight text-center text-white">
          {SubtitleText}
        </p>
      </div>
    </article>
  );
}
