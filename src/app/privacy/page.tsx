/* eslint-disable react/no-unescaped-entities */
"use client";
import Fade from "@/components/Fade";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";

export default function Privacy() {
  return (
    <div className="w-full gradientGridBackground min-h-screen flex justify-center items-center">
      <div className="mx-6 lg:max-w-[1024px] max-w-[768px] lg:mx-24 my-28">
          <Fade>
        <BlueBorderSquareBox>
          <main
            className={`px-10 lg:px-20 flex flex-col py-8 md:py-20`}
          >
              <h1 className="font-semibold text-[20px] sm:text-[28px] md:text-[32px] mb-1">
                Privacy Policy
              </h1>
              <hr className="block w-[2rem] md:w-[3rem] h-2 bg-purple-400 mb-10" />
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px]">
                Your privacy is important to us. It is CUSEC's policy to respect
                your privacy regarding any information we may collect from you
                across our website, {"https://2023.cusec.net"}, and other sites
                we own and operate.
                <br />
                <br />
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we’re collecting it and how it will be used. We only retain
                collected information for as long as necessary to provide you
                with your requested service. What data we store, we’ll protect
                within commercially acceptable means to prevent loss and theft,
                as well as unauthorized access, disclosure, copying, use or
                modification.
                <br />
                <br />
                We don’t share any personally identifying information publicly
                or with third-parties, except when required to by law. Our
                website may link to external sites that are not operated by us.
                Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies. You are free to
                refuse our request for your personal information, with the
                understanding that we may be unable to provide you with some of
                your desired services. Your continued use of our website will be
                regarded as acceptance of our practices around privacy and
                personal information.
                <br />
                <br />
                If you have any questions about how we handle user data and
                personal information, feel free to contact us. This policy is
                effective as of 15 September 2020.
              </p>
          </main>
        </BlueBorderSquareBox>
            </Fade>
      </div>
    </div>
  );
}
