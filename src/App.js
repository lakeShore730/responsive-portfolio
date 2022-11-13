import { useState } from "react";
import PageSlider from "./components/page-slider/page-slider";
import Header from "./components/common/header";
import Home from "./pages";
import AboutMe from "./pages/about-me";
import EducationExperience from "./pages/education-experience";
import MyServices from "./pages/my-services";
import MyWorks from "./pages/my-works";
import ContactMe from "./pages/contact-me";

function App() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <PageSlider
        scrollMotion={100}
        currentActivePage={activePage}
        setCurrentActivePage={setActivePage}
      >
        <Home />
        <AboutMe />
        <EducationExperience />
        <MyServices />
        <MyWorks />
        <ContactMe />
      </PageSlider>
    </div>
  );
}

export default App;
