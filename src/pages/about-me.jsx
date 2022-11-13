import { Code, Figma, HardDrive, Layers } from "react-feather";
import Lining from "../components/common/lining";
import aboutMeImg from "../assets/images/about-me.png";

const AboutMe = () => {
  return (
    <div className="slider-item bg-white">
      <div className="flex gap-8 pt-[40px] lg:pt-[80px] pb-6">
        <figure className="bg-green-50 w-[400px] flex-none hidden lg:block">
          <img src={aboutMeImg} alt="" className="w-full h-full object-cover" />
        </figure>
        <div className="grow">
          <p className="text-[16px] font-bold tracking-wide text-gray-800">
            ABOUT ME
          </p>
          <h1 className="text-[24px] md:text-[30px] font-extrabold mt-4 tracking-wide text-gray-900">
            Hello, I am Bishnu Thapa.
          </h1>
          <Lining className="mt-4" type="secondary" />

          <p className="mt-4 text-[16px] font-medium tracking-wider leading-8 text-gray-900">
            Experience and creative full-stack developer with +1.5 years’
            background in web development. Highly motivated BIT graduate with
            good knowledge and experience in web development. Passionate about
            building responsive web design using various frameworks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 mt-10">
            <div className="flex gap-3">
              <Code size={24} className="flex-none text-primary" />

              <div className="grow">
                <h3 className="text-[16px] font-semibold text-gray-900">
                  Frontend Developer
                </h3>
                <p className="text-[15px] mt-2 tracking-wide leading-7 text-gray-800">
                  Use React JS and Next JS with tailwind CSS, Bootstrap, and
                  Reactstrap to build beautiful web applications and websites
                  too.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <HardDrive size={24} className="flex-none text-primary" />
              <div className="grow">
                <h3 className="text-[16px] font-semibold text-gray-900">
                  Backend Developer
                </h3>
                <p className="text-[15px] mt-2 tracking-wide leading-7 text-gray-800">
                  Mostly use Django Rest Framework (DRF) for the backend (REST
                  full APIS development). And also use Express JS.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Layers size={24} className="flex-none text-primary" />
              <div className="grow">
                <h3 className="text-[16px] font-semibold text-gray-900">
                  Machine Learning (ML)
                </h3>
                <p className="text-[15px] mt-2 tracking-wide leading-7 text-gray-800">
                  Work in Python programming language with many packages
                  including Pandas, Numpy, Skit-learn, etc.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Figma size={24} className="flex-none text-primary" />
              <div className="grow">
                <h3 className="text-[16px] font-semibold text-gray-900">
                  Web Design
                </h3>
                <p className="text-[15px] mt-2 tracking-wide leading-7 text-gray-800">
                  Mostly use Figma to design beautiful web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
