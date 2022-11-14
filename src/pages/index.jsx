import Typewriter from "typewriter-effect";
import { Facebook, GitHub, Layers } from "react-feather";
import codingBro from "../assets/images/landing-image.png";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="slider-item grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="lg:min-h-[100vh] mt-[80px] lg:mt-0 flex justify-center lg:justify-start lg:items-center">
          <div>
            <h2 className="font-bold text-[16px] text-gray-800">
              Hello, I am Jay Neupane.
            </h2>

            <div className="mt-2 inline-flex">
              <h1 className="text-[22px] md:text-[24px] lg:text-[28px] font-bold pr-[5px] text-gray-900">
                I'm a
              </h1>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: [
                    "Business Analyst",
                    "Python developer",
                    "Devops Analyst",
                    "Machine-learning enthusiast",
                  ],
                  wrapperClassName:
                    "text-[22px] md:text-[24px] lg:text-[28px] font-bold text-gray-900",
                  cursorClassName:
                    "text-[22px] md:text-[24px] lg:text-[28px] font-bold text-gray-900",
                }}
              />
            </div>

            <div className="mt-6 flex gap-5">
              <div className="font-medium text-gray-700">
                <p>PHONE:</p>
                <p className="mt-3">EMAIL:</p>
                <p className="mt-3">ADDRESS:</p>
              </div>
              <div className="text-gray-800">
                <p>+977 9806131392</p>
                <p className="mt-3">jayesh.neupane@gmail.com</p>
                <p className="mt-3">Minnesota</p>
              </div>
            </div>
            <div className="flex gap-5 mt-6">
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
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="border rounded-full p-[3px] cursor-pointer text-white bg-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="log:min-h-[100vh] flex justify-center lg:justify-start lg:items-center mt-5 lg:mt-0 pb-5 lg:bp-0">
          <div>
            <img
              src={codingBro}
              alt="coding-bro"
              className="w-full max-w-[500px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
