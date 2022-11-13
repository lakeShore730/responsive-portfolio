import Lining from "../components/common/lining";
import WorkCard from "../components/work-card";

const works = [
  {
    id: "rextroX",
    title: "RestroX",
    link: "https://www.restrox.co/",
    work: "Frontend",
    description:
      "RestroX is not just a POS system. It is an ultimate restaurant operating system gathered with high-end features compacted all in one app.",
  },
  {
    id: "book-lifter",
    title: "Book Lifter",
    work: "Frontend",
    link: "https://www.booklifter.com/",
    description:
      "Book Lifter, a web application, makes it easier for users to purchase and borrow books from sellers and librarians. Here a user can get a library membership to ultimate access to all the books available on the library.",
  },
  {
    id: "maya-museum",
    title: "Maya Museum",
    work: "Fullstack",
    link: "/",
    description:
      "Maya museum, made using React JS, which gives users to buy traditional statues, paintings, and sculptures.",
  },
];

const MyWorks = () => {
  return (
    <div className="slider-item bg-white">
      <div>
        <section className="pt-[40px]">
          <p className="text-[16px] text-center font-bold tracking-wide text-gray-800">
            WORKS
          </p>
          <h1 className="text-center text-[24px] md:text-[30px] font-extrabold mt-4 tracking-wide text-gray-900">
            Let's See Some Of My Works
          </h1>
          <Lining type="primary" className="mt-4" />
        </section>

        <section className="mt-16 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {works.map((item) => (
              <WorkCard
                key={item.id}
                title={item.title}
                work={item.work}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyWorks;
