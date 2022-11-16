import { Award, Book, Code, HardDrive, Layers } from "react-feather";
import BorderContainer from "../components/border-container";
import ExperienceLoader from "../components/experience-loader";
import Lining from "../components/common/lining";

const education = [
  {
    id: "Master of Science",
    title: "Georgia Institute of Technology",
    subtitle: "Atlanta, Georgia",
    date: "Currently Attending - Partime",
    icon: (props) => <Award {...props} />,
    description: "Masters of Science in Cybersecurity",
  },
  {
    id: "Bachelors of Arts",
    title: "University of St Thomas",
    subtitle: "St Paul, Minnesota",
    date: "2015-2019",
    icon: (props) => <Award {...props} />,
    description:
      "Bachelors of Arts in Finance with a Minor in Computer Science",
  },
  {
    id: "High School",
    title: "Eden Prairie High School",
    subtitle: "Eden Prairie, Minnesota",
    date: "2011-2015",
    icon: (props) => <Book {...props} />,
    description: "",
  },
];

const experience = [
  {
    id: "machine-learning",
    title: "UnitedHealthCare",
    subtitle: "Business Analyst",
    date: "06-2022-current",
    icon: (props) => <Layers {...props} />,
    descriptions: [
      "Track, and deliver key quality success measures related to accuracy and timeliness of communications projects flowing through the platform/team.",
      "Partner with marketing leads, IT, and other internal stakeholders to deliver a scalable CCM platform that meets all business needs in a cost effective, timely manner.",
      "Monitor performance and quality control plans to review and identify any issues or ways to improve the end-to-end lifecycle with member and provider communication projects.",
    ],
  },
  {
    id: "machine-learning",
    title: "PricewaterhouseCoopers",
    subtitle: "Digital Risk Associate",
    date: "08-2019 - 06-2022",
    icon: (props) => <Layers {...props} />,
    descriptions: [
      "Perform planning, evidence gathering, testing, documentation, and review on IT general controls and business process reviews.",
      "Make Tablueu and Power BI dashboards on a weekly basis to show team the progress of tasks.",
      "Host daily standup meetings with teams to discuss workflows and issues faced.",
      "Create Standard operating procedures (SOP) for associates and service delivery centers to efficiently perform process controls testing.",
    ],
  },
  {
    id: "fullstack-developer",
    title: "FullStack Developer",
    subtitle: "React JS and Django",
    date: "05-2020-current",
    icon: (props) => <Code {...props} />,
    descriptions: [
      "I have been working as a fullstack development at Lakeshore LLC.",
    ],
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
            <ExperienceLoader title="Frontend Developer" level={70} />
            <ExperienceLoader title="Backend Developer" level={70} />
            <ExperienceLoader title="Machine Learning (ML)" level={70} />
            <ExperienceLoader title="Bootstrap" level={80} />
            <ExperienceLoader title="Tailwind CSS" level={75} />
            <ExperienceLoader title="CSS" level={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
