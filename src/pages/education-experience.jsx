import { Award, Book, Code, HardDrive, Layers } from "react-feather";
import BorderContainer from "../components/border-container";
import ExperienceLoader from "../components/experience-loader";
import Lining from "../components/common/lining";

const education = [
  {
    id: "bachelor",
    title: "Informatics College Pokhara",
    subtitle: "BIT | Pokhara, Nepal",
    date: "2019-2021",
    icon: (props) => <Award {...props} />,
    description:
      "Studied and graduated from one of the best IT colleges, Informatics College Pokhara. This college provides high-quality education.",
  },
  {
    id: "plus2",
    title: "Ranta Laxmi Higher Secondary School",
    subtitle: "+2 Management | Baglung, Nepal",
    date: "2016-2018",
    icon: (props) => <Book {...props} />,
    description: "I had studied my + 2 in this school.",
  },

  {
    id: "slc",
    title: "Ranta Laxmi Higher Secondary School",
    subtitle: "SLC | Baglung, Nepal",
    date: "2008-2016",
    icon: (props) => <Book {...props} />,
    description: "I had studied in this school, since my childhood.",
  },
];

const experience = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    subtitle: "React JS and Next jS | Pokhara, Nepal",
    date: "08-2021-current",
    icon: (props) => <Code {...props} />,
    description:
      "I have been working as a front-end developer at Black Tech (Located in Pokhara).",
  },

  {
    id: "backend-developer",
    title: "Backend Developer",
    subtitle: "Django and DRF | US",
    date: "02-2021-current",
    icon: (props) => <HardDrive {...props} />,
    description:
      "I have been working as a Django developer at Lake Shore (located in the US).",
  },

  {
    id: "machine-learning",
    title: "Machine Learning",
    subtitle: "ML Export | US",
    date: "02-2021-current",
    icon: (props) => <Layers {...props} />,
    description:
      "I have been working as a ML export at Lake Shore (located in the US).",
  },
];

const EducationExperience = () => {
  return (
    <div className="slider-item bg-white">
      <div className="pt-[40px]">
        <p className="text-[16px] text-center font-bold tracking-wide text-gray-800">
          RESUME
        </p>
        <h1 className="text-center text-[24px] md:text-[30px] font-extrabold mt-4 tracking-wide text-gray-900">
          Education & Experience
        </h1>
        <Lining type="primary" className="mt-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <BorderContainer title="EDUCATION" items={education} />
          <BorderContainer title="EXPERIENCE" items={experience} />
        </div>

        <div className="mt-16 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ExperienceLoader title="Frontend Developer" level={95} />
            <ExperienceLoader title="Backend Developer" level={85} />
            <ExperienceLoader title="Machine Learning (ML)" level={70} />
            <ExperienceLoader title="Bootstrap" level={90} />
            <ExperienceLoader title="Tailwind CSS" level={95} />
            <ExperienceLoader title="CSS" level={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
