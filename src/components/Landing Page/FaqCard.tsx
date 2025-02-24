import { useState } from "react";

type FaqCardProps = {
  question: string;
  content: React.ReactNode;
};

export default function FaqCard({ question, content }: FaqCardProps) {
  const [isCardClicked, setIsCardClicked] = useState(true);
  const toggleCardClicked = () => {
    setIsCardClicked(!isCardClicked);
  };

  return (
    <aside className="text-black bg-white rounded-b-lg hover:scale-[103%] transition ease-in-out duration-500 self-start">
      {/* Top gradient line */}
      <span className="h-3 block bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot"></span>

      <button
        className="w-full text-[14px] font-semibold px-4 py-2 flex justify-items-end"
        onClick={toggleCardClicked}
      >
        <div className="flex justify-between w-full">
        {/* Question Text */}
        <div className="text-left mr-4">{question}</div>

        {/* Triangle Icon */}
        <div>
          <svg
            className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 fill-black ${
              isCardClicked ? "rotate-0" : "rotate-180"
            }`}
            width="12px"
            height="20px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="faq-card-1-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop stopColor="#AC65E3" offset="0%" />
              <stop stopColor="#E087BB" offset="50%" />
              <stop stopColor="#FFB963" offset="100%" />
            </linearGradient>
            <title>triangle-icon</title>
            <g id="drop" transform="translate(32.000000, 42.666667)">
              <path
                d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                id="Combined-Shape"
              />
            </g>
          </svg>
        </div>
        </div>
      </button>


      <div
        className={`transition-all ease-in-out duration-[1500ms] overflow-hidden ${
          isCardClicked ? "max-h-0" : "max-h-screen"
        }`}
      >

        {/* Bottom gradient line */}
        <span
          className={`h-0.5 block bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all duration-1000 ease-in-out ${
            isCardClicked ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        ></span>
        <section className="px-4 py-5 space-y-3 font-medium">{content}</section>
      </div>
    </aside>
  );
}
