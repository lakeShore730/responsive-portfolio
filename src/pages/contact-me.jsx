import { Facebook, GitHub, Layers, Mail, Phone } from "react-feather";
import Lining from "../components/common/lining";
import aboutMeImg from "../assets/images/about-me.png";

const ContactMe = () => {
  return (
    <div className="slider-item bg-white">
      <div className="flex gap-8 pt-[40px] lg:pt-[80px] pb-6">
        <figure className="bg-green-50 w-[400px] flex-none hidden lg:block">
          <img src={aboutMeImg} alt="" className="w-full h-full object-cover" />
        </figure>
        <div className="grow">
          <p className="text-[16px] font-bold tracking-wide text-gray-800">
            CONTACT ME
          </p>
          <h1 className="text-[24px] md:text-[30px] font-extrabold mt-4 tracking-wide text-gray-900">
            Let's work together.
          </h1>
          <Lining className="mt-4" type="secondary" />

          <p className="mt-4 text-[16px] font-medium tracking-wider leading-8">
            You can contact me through the information below.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8">
            <div>
              <div className="flex items-center space-x-2">
                <Phone
                  size={20}
                  className="p-[2px] rounded-sm text-white bg-primary"
                />
                <p className="text-gray-700">Contact Number</p>
              </div>
              <p className="text-[16px] mt-3 ml-[25px] font-semibold text-gray-700">
               +1 612-805-2852
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <Mail
                  size={20}
                  className="p-[2px] rounded-sm text-white bg-primary"
                />
                <p className="text-gray-700">Mail</p>
              </div>
              <p className="text-[16px] mt-3 ml-[25px] font-semibold text-gray-700">
              jayesh.neupane@gmail.com
              </p>
            </div>

            <div>
              <p className="text-[15px] font-semibold tracking-wide text-gray-800">
                VIEW MORE INFO
              </p>
              <div className="flex gap-5 mt-3">
                <a
                  href="-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Layers className="border rounded-full p-[3px] cursor-pointer text-white bg-primary" />
                </a>

                <a
                  href="https://github.com/jay730"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub className="border rounded-full p-[3px] cursor-pointer text-white bg-primary" />
                </a>
                <a
                  href="-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="border rounded-full p-[3px] cursor-pointer text-white bg-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
