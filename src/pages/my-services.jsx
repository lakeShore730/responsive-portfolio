import { Code, Figma, GitCommit, HardDrive, Layers } from "react-feather";
import MultiItemsSlider from "../components/common/multi-items-slider";
import ServiceCard from "../components/service-card";
import Lining from "../components/common/lining";

const services = [
  {
    id: "react-app",
    icon: (props) => <Code {...props} />,
    title: "Frontend development",
    description:
      "Mostly use react and next js to build responsive web application with the good SCEO, best authentication and permission.",
  },
  {
    id: "backend-developer",
    icon: (props) => <HardDrive {...props} />,
    title: "Backend development",
    description:
      "Use Django Rest Framework (DRF) and Express Js to build REST full APIs with the best security.",
  },
  {
    id: "machine-learning",
    icon: (props) => <Layers {...props} />,
    title: "Machine Learning",
    description:
      "Work in Python programming language with Pandas, Numpy, Skit-Learn, etc.",
  },
  {
    id: "figma-design-to-react-app",
    icon: (props) => <Figma {...props} />,
    title: "Figma Design to React App",
    description:
      "Convert any Figma or any other design to the responsive web application using React or Next JS with tailwind CSS.",
  },
  {
    id: "api-integration",
    icon: (props) => <GitCommit {...props} />,
    title: "APIs integration",
    description:
      "Integrate REST full APIs to any React or Next JS application.",
  },
];

const MyServices = () => {
  return (
    <div className="slider-item bg-white">
      <section className="pt-[40px]">
        <p className="text-[16px] text-center font-bold tracking-wide text-gray-800">
          SERVICES
        </p>
        <h1 className="text-center text-[24px] md:text-[30px] font-extrabold mt-4 tracking-wide text-gray-900">
          Let's See My Services
        </h1>
        <Lining type="primary" className="mt-4" />
      </section>
      <section className="mt-32">
        <MultiItemsSlider>
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              className="mb-12"
            />
          ))}
        </MultiItemsSlider>
      </section>
    </div>
  );
};

export default MyServices;
