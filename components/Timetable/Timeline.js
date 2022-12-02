import React from "react";
import { CSSTransition } from "react-transition-group";
import useTranslation from "next-translate/useTranslation";

function Timeline({ active }) {
  const { lang } = useTranslation();

  const firstDay = [
    {
      id: 1,
      name: `${
        lang === "en-US"
          ? "Opening Keynotes VC - SUZA"
          : "Keynote ya ufunguzi kutoka kwa VC - SUZA"
      }`,
      time: "09:00 - 09:30",
      details: "",
    },
    {
      id: 2,
      name: `${
        lang === "en-US" ? "Dean - SUZA, HoD - SUZA" : "Dean - SUZA, HoD - SUZA"
      }`,
      time: "09:30 - 10:00",
      details: "",
    },
    {
      id: 3,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "10:00 - 10:30",
      details: "",
    },
    {
      id: 4,
      name: `${
        lang === "en-US"
          ? "Why Python - Usecases Foundation of Python Bootcamp"
          : "Kwa nini Python - Matumizi na Msingi wa Python (Bootcamp)"
      }`,
      time: "10:30 - 11:30",
      details: "",
    },

    {
      id: 5,
      name: `${
        lang === "en-US"
          ? "Django Python Web Development"
          : "Matengenezo ya tovuti kutumia Python Django"
      }`,
      time: "11:30 - 12:30",
      details: "",
    },
    {
      id: 6,
      name: `${
        lang === "en-US"
          ? "Network Analysis Made Simple Using NetworkX"
          : "Uchambuzi wa Mtandao Umerahisishwa Kwa Kutumia NetworkX"
      }`,
      time: "12:30 - 13:00",
      details: "",
    },
    {
      id: 7,
      name: `${lang === "en-US" ? "Lunch" : "Chakula cha mchana"}`,
      time: "13:00 - 14:00",
      details: "",
    },

    {
      id: 8,
      name: `${
        lang === "en-US"
          ? "Network Analysis Made Simple Using NetworkX"
          : "Uchambuzi wa Mtandao Umerahisishwa Kwa Kutumia NetworkX"
      }`,
      time: "14:00 - 15:00",
      details: "",
    },
    {
      id: 9,
      name: `${
        lang === "en-US"
          ? "HACKATHON - NLP for African Languages, Building Chatbots with Sarufi"
          : "HACKATHON - NLP kwa Lugha za Kiafrika, Kutengeneza chatbots Sogoa na Sarufi"
      }`,
      time: "15:00 - 16:00",
      details: "",
    },
    {
      id: 10,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "16:00 - 16:15",
      details: "",
    },
    {
      id: 11,
      name: `${
        lang === "en-US"
          ? "HACKATHON - NLP for African Languages, Building Chatbots with Sarufi"
          : "HACKATHON - NLP kwa Lugha za Kiafrika, Kutengeneza chatbots Sogoa na Sarufi"
      }`,
      time: "16:15 - 17:15",
      details: "",
    },

    {
      id: 12,
      name: `${
        lang === "en-US" ? "PyCon Social Event" : "Tukio la Kijamii la PyCon"
      }`,
      time: "",
      details: "",
    },
  ];

  const secondDay = [
    {
      id: 1,
      name: `${
        lang === "en-US"
          ? "HACKATHON - NLP for African Languages, Building Chatbots with Sarufi"
          : "HACKATHON - NLP kwa Lugha za Kiafrika, Kutengeneza chatbots Sogoa na Sarufi"
      }`,
      time: "09:00 - 10:00",
      details: "",
      fas: "",
    },
    {
      id: 2,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "10:00 - 10:30",
      details: "",
      fas: "",
    },
    {
      id: 3,
      name: `${
        lang === "en-US"
          ? "HACKATHON - Basket Analysis with Python"
          : "HACKATHON - Basket Analysis na Python"
      }`,
      time: "10:30 - 13:00",
      details: "",
      fas: "",
    },
    {
      id: 4,
      name: `${lang === "en-US" ? "Lunch" : "Chakula cha mchana"}`,
      time: "13:00 - 14:00",
      details: "",
      fas: "",
    },
    {
      id: 5,
      name: `${
        lang === "en-US"
          ? "HACKATHON - Basket Analysis with Python"
          : "HACKATHON - Basket Analysis na Python"
      }`,
      time: "14:00 - 16:00",
      details: "",
      fas: "",
    },
    {
      id: 6,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "16:00 - 16:15",
      details: "",
      fas: "",
    },
    {
      id: 7,
      name: `${
        lang === "en-US"
          ? "HACKATHON - Basket Analysis with Python"
          : "HACKATHON - Basket Analysis na Python"
      }`,
      time: "16:15 - 16:45",
      details: "",
      fas: "",
    },
    {
      id: 8,
      name: "Hackathon Birds of Feather (BOF)",
      time: "16:45 - 17:15",
      details: "",
      fas: "",
    },
    {
      id: 9,
      name: `${
        lang === "en-US" ? "PyCon Social Event" : "Tukio la Kijamii la PyCon"
      }`,
      time: "",
      details: "",
      fas: "",
    },
  ];

  const thirdDay = [
    {
      id: 1,
      name: `${lang === "en-US" ? "Keynote" : "Maelezo muhimu"}`,
      time: "09:00 - 09:30",
      details: "Python Software Foundation",
      presentor: "Loren Crary",
      pr_expertise: "",
    },
    {
      id: 2,
      name: `${
        lang === "en-US"
          ? "Why is Data Science Necessary, Why Now?"
          : "Kwa nini Sayansi ya Data Inahitajika, Kwa Nini Sasa?"
      }`,
      time: "09:30 - 10:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },

    {
      id: 3,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "10:00 - 10:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 4,
      name: `${
        lang === "en-US"
          ? "Species Determination of Malaria Vectors Using AI"
          : "Ugunduzi wa Aina za Vekta za Malaria Kwa Kutumia AI"
      }`,
      time: "10:30 - 11:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 5,
      name: `${
        lang === "en-US"
          ? "Analyzing the Development of Cervical Cancer (ML)"
          : "Uchambuzi wa ukuzi wa saratani ya Shingo ya Kizazi (ML)"
      }`,
      time: "11:00 - 11:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 6,
      name: `${
        lang === "en-US"
          ? "Explainability for Natural Language Processing"
          : "Ufafanuzi wa Uchakataji Lugha Asilia"
      }`,
      time: "11:30 - 12:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 7,
      name: `${
        lang === "en-US"
          ? "Poultry Disease Diagnosis with Deep Learning"
          : "Utambuzi wa Ugonjwa wa Kuku kwa kutumia Deep Learning"
      }`,
      time: "12:00 - 12:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 8,
      name: `${
        lang === "en-US"
          ? "Predicting Fake News Using GCN"
          : "Kutabiri Habari za Uongo Kwa Kutumia GCN"
      }`,
      time: "12:30 - 13:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 9,
      name: `${lang === "en-US" ? "Lunch" : "Chakula cha Mchana"}`,
      time: "13:00 - 14:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 10,
      name: `${
        lang === "en-US"
          ? "Open Source Is Not Free"
          : "Chanzo Huria Sio Bure"
      }`,
      time: "14:00 - 14:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 11,
      name: `${
        lang === "en-US"
          ? "Transformers and Self Attention"
          : "Waleta mabadiliko na Kujijali"
      }`,
      time: "14:30 - 15:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 12,
      name: `${
        lang === "en-US"
          ? "Panel Discussion on DS/ML/AI"
          : "Majadiliano ya Paneli kuhusu DS/ML/AI"
      }`,
      time: "15:00 - 16:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 13,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "16:00 - 16:15",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 14,
      name: `${lang === "en-US" ? "Lightning Talks" : "Mazungumzo ya Haraka"}`,
      time: "16:15 - 17:15",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 15,
      name: `${
        lang === "en-US" ? "PyCon Social Event" : "Tukio la Kijamii la PyCon"
      }`,
      time: "4:45 - 5:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
  ];

  const fourthDay = [
    {
      id: 1,
      name: `${
        lang === "en-US"
          ? "Time Series Forecasting with Python"
          : "Utabiri wa Mfuatano wa Wakati na Python"
      }`,
      time: "09:00 - 09:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 2,
      name: `${
        lang === "en-US"
          ? "Python for Embedded Things"
          : "Python kwa vitu vilivyopachikwa (Embedded Things)"
      }`,
      time: "09:30 - 10:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 3,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "10:00 - 10:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 4,
      name: `${
        lang === "en-US"
          ? "WebScrapping with Beautiful Soup"
          : "Kuchakachua wavuti na Beautiful Soup"
      }`,
      time: "10:30 - 11:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 5,
      name: `${
        lang === "en-US"
          ? "WebScrapping of Consumer Prices"
          : "Kuchakachua wavuti kupata Bei za Watumiaji/Wanunuzi"
      }`,
      time: "11:00 - 11:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 6,
      name: `${
        lang === "en-US"
          ? "Testing Smart Contracts with PyTest & Brownie"
          : "Kupima Smart Contracts na PyTest & Brownie"
      }`,
      time: "11:30 - 12:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 7,
      name: `${
        lang === "en-US"
          ? "Geoepatial Data Analysis using Python"
          : "Uchambuzi wa Data za Geospatial kwa kutumia Python"
      }`,
      time: "12:30 - 12:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 8,
      name: `${
        lang === "en-US"
          ? "Python Web Development with Django"
          : "Kutengeneza Wavuti na Python na Django"
      }`,
      time: "12:30 - 13:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 9,
      name: `${lang === "en-US" ? "Lunch" : "Chakula cha Mchana"}`,
      time: "13:00- 14:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 10,
      name: `${
        lang === "en-US"
          ? "Using Odoo (The Python ERP Framework) to Build"
          : "Kutumia Odoo(Mfumo wa ERP wa Python) Kutengeneza"
      }`,
      time: "14:00 - 14:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 11,
      name: `${
        lang === "en-US"
          ? "Fun Simple Python Programs"
          : "Programu rahisi na za kufurahisha za Python"
      }`,
      time: "14:30 - 15:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 12,
      name: `${
        lang === "en-US"
          ? "Building Interactive by Scratch"
          : "Kujenga Interactive by Scratch"
      }`,
      time: "15:00 - 15:30",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 13,
      name: `${
        lang === "en-US"
          ? "Business Analysis with AI,Inspiring Women in AI"
          : "Uchambuzi wa Biashara na AI,Kuhamasisha Wanawake katika AI,"
      }`,
      time: "15:30 - 16:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },  
    {
      id: 14,
      name: `${lang === "en-US" ? "Break" : "Mapumziko"}`,
      time: "16:00 - 16:15",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
   
    {
      id: 15,
      name: `${
        lang === "en-US"
          ? "Lightning Talks - Pyladies"
          : "Mazungumzo ya Haraka - Pyladies"
      }`,
      time: "16:15 - 16:45",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 16,
      name: `${
        lang === "en-US"
          ? "Closing Keynote DG - ICT Commission"
          : "Keynote ya Kufunga kutoka kwa DG - ICT Commission"
      }`,
      time: "16:45 - 17:00",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
    {
      id: 17,
      name: `${
        lang === "en-US" ? "PyCon Social Event" : "Tukio la Kijamii la PyCon"
      }`,
      time: "",
      details: "",
      presentor: "",
      pr_expertise: "",
    },
  ];

  const iconSVG = () => {
    return (
      <span className="flex absolute -left-3  justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </span>
    );
  };
  const nodeRef = React.useRef(null);
  return (
    <div className="m-8 md:m-24 md:mb-36">
      {/* Day 1 */}
      <CSSTransition
        nodeRef={nodeRef}
        in={active === 1}
        timeout={500}
        classNames="slide-horizontal"
        exit={false}
        unmountOnExit
      >
        <ol
          ref={nodeRef}
          className="relative border-l font-base border-gray-200 dark:border-gray-700"
        >
          {firstDay &&
            firstDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.details}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>

      {/* Day 2 */}
      <CSSTransition
        nodeRef={nodeRef}
        in={active === 2}
        timeout={500}
        classNames="slide-horizontal"
        exit={false}
        unmountOnExit
      >
        <ol
          ref={nodeRef}
          className="relative border-l font-base border-gray-200 dark:border-gray-700"
        >
          {secondDay &&
            secondDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p
                  className={`${
                    event.details === "" ? "hidden" : ""
                  } text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.details}
                </p>
                <p
                  className={`${
                    event.fas === "" ? "hidden" : ""
                  } my-2 text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  <strong>Facilitators</strong> - {event.fas}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>

      {/* Day 3*/}
      <CSSTransition
        nodeRef={nodeRef}
        in={active === 3}
        timeout={500}
        classNames="slide-horizontal"
        exit={false}
        unmountOnExit
      >
        <ol
          ref={nodeRef}
          className="relative border-l font-base border-gray-200 dark:border-gray-700"
        >
          {thirdDay &&
            thirdDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p
                  className={`${
                    event.details === "" ? "hidden" : ""
                  } text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.details}
                </p>
                <p
                  className={`${
                    event.presentor === "" ? "hidden" : ""
                  } my-2 text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.presentor} - {event.pr_expertise}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>

      {/* Day 4 */}
      <CSSTransition
        nodeRef={nodeRef}
        in={active === 4}
        timeout={500}
        classNames="slide-horizontal"
        exit={false}
        unmountOnExit
      >
        <ol
          ref={nodeRef}
          className="relative border-l font-base border-gray-200 dark:border-gray-700"
        >
          {fourthDay &&
            fourthDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p
                  className={`${
                    event.details === "" ? "hidden" : ""
                  } text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.details}
                </p>
                <p
                  className={`${
                    event.presentor === "" ? "hidden" : ""
                  } my-2 text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.presentor} - {event.pr_expertise}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>
    </div>
  );
}

export default Timeline;
