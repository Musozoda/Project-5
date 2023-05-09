import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

// images

import britlex from "./image/britlex.png";
import Btn from "./components/Button/Btn";
import learning from "./image/Learning.png";
import light from "./image/light-bulb.png";
import goals from "./image/Shared goals.png";
import Typewriter from "./image/Typewriter.png";
import Btn2 from "./components/Button2/Btn2";
import Podcast from "./image/Podcast.png";
import Business from "./image/Business.png";
import Online from "./image/Online.png";
import group from "./image/group.png";

import { Card } from "antd";
import Card1 from "./components/Card/Card";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Switcher from "./components/Switcher/Switcher";

// images

// Material UI

// Material UI

function App() {
  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="xl:px-[31px] dark:bg-[black] dark:text-white">
      <header className="container1 dark:bg-[black] dark:text-white">
        <div className="container11 pt-[55px] flex flex-col gap-[101px]">
          <nav className="flex items-center  justify-between">
            <img src={britlex} className="text-flicker-in-glow" alt="" />
            <ul className="flex gap-[35px] lg:hidden items-center">
              <li data-aos="fade-down">{t("home")}</li>
              <li data-aos="fade-down">{t("skills")}</li>
              <li data-aos="fade-down">{t("aboutUs")}</li>
              <li data-aos="fade-down">{t("Pricing")}</li>
              <li data-aos="fade-down">{t("Contacts")}</li>
              <Switcher/>
            </ul>
            <div className="flex gap-[10px]">
              <button onClick={() => changeLanguage("en")}>En</button>
              <button onClick={() => changeLanguage("ru")}>Ru</button>
            </div>
            <button
              data-aos="fade-left"
              className="p-[17px_57px]  border-[2px] border-solid border-[#263238] rounded-[5px]"
            >
              {t("Let’sTalk")}
            </button>
          </nav>
          <div className="flex items-center justify-between xl:flex-wrap xl:justify-center xl:gap-[50px]">
            <div className="flex flex-col gap-[61px] relative xl:items-center">
              <div className="max-w-[550px] flex flex-col gap-[40px]">
                <h1 className="xl:text-center max-w-[300px] xl:mx-auto tracking-in-contract-bck-top  font-[600] text-[64px] leading-[80px]">
                  {t("LearnAnyForeignLanguage")}
                </h1>
                <p
                  data-aos="fade-right"
                  className="xl:text-center font-[400] text-[24px] text-[#8F95A5] leading-[36px]"
                >
                  {t(
                    "Withourteacherswhowriteaprogramforeachstudent,youwillbeabletomakeyour first sketch after the first lesson."
                  )}
                </p>
              </div>
              <div data-aos="fade-down">
                <Btn text={t("Get started")} />
              </div>
              <img
                src={light}
                data-aos="fade-left"
                className=" absolute right-0 top-[50px]"
                alt=""
              />
            </div>
            <img
              src={learning}
              data-aos="fade-left"
              className="xl:w-[100%]"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="container1 m-[147px_auto_282px_auto]">
        <div className="container11 flex flex-col gap-[96px]">
          <h1 className="font-[600] text-[48px] tracking-in-contract-bck-top text-center ">
            {t("skills")}
          </h1>
          <div className="flex gap-[18px] xl:flex-wrap xl:justify-center">
            <div
              data-aos="fade-right"
              className="max-w-[435px]  p-[35px_22px_95px_22px] flex flex-col gap-[36px] bg-[#F5F5F5] rounded-[10px]"
            >
              <div className=" flex flex-col gap-[4px]">
                <img src={goals} alt="" />
                <h1 className="font-[600] text-[30px] text-[#263238] leading-[80px]">
                  {t("Speaking")}
                </h1>
                <div className="flex flex-col gap-[25px]">
                  <p className="font-[400] text-[16px] text-[#8F95A5] leading-[24px]">
                    {t(
                      "Improve your English skills and confidence. Live classes andinteractive lessons online. 20% extra free for a limited time only"
                    )}
                  </p>

                  <p className="font-[400] text-[16px] text-[#8F95A5] leading-[24px]">
                    {t(
                      "Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners."
                    )}
                  </p>
                </div>
              </div>
              <Btn text="Learn more" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <div className="flex gap-[18px]  xl:flex-row xl:flex-wrap xl:justify-center">
                <div
                  data-aos="fade-down"
                  className="max-w-[434px] rounded-[10px] pb-[44px] bg-[#F5F5F5] px-[41px] flex flex-col gap-[33px]"
                >
                  <div className="">
                    <img src={Typewriter} className=" float-right" alt="" />
                    <h1 className="font-[600] text-[30px] text-[#263238] leading-[80px]">
                      {t("Writing")}
                    </h1>
                    <p className="font-[400] text-[16px] text-[#8F95A5] leading-[24px]">
                      {t(
                        "One of the most important and extensive areas of natural science, the science that studies substances, also their composition"
                      )}
                    </p>
                  </div>
                  <Btn2 text="Learn more" />
                </div>

                <div
                  data-aos="fade-down"
                  className="max-w-[434px] rounded-[10px] pb-[44px] bg-[#F5F5F5] px-[41px] flex flex-col gap-[33px]"
                >
                  <div className="">
                    <img src={Typewriter} className=" float-right" alt="" />
                    <h1 className="font-[600] text-[30px] text-[#263238] leading-[80px]">
                      {t("Writing")}
                    </h1>
                    <p className="font-[400] text-[16px] text-[#8F95A5] leading-[24px]">
                      {t(
                        "One of the most important and extensive areas of natural science, the science that studies substances, also their composition"
                      )}
                    </p>
                  </div>
                  <Btn2 text="Learn more" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex lg:flex-col max-w-[100%] bg-[#F5F5F5] h-[100%] items-center justify-between p-[44px_25px_44px_44px] rounded-[10px]"
              >
                <div className="flex flex-col gap-[25px] lg:order-1">
                  <div className="flex flex-col">
                    <h1 className="font-[600] text-[30px] text-[#263238] leading-[80px]">
                      {t("Listening")}
                    </h1>
                    <p className="font-[400] text-[16px] text-[#8F95A5] leading-[24px] max-w-[400px]">
                      {t(
                        "Here you can find activities to practise your listening skills. Listening will help you to improve your understanding"
                      )}
                    </p>
                  </div>
                  <Btn2 text="Learn ore" />
                </div>
                <img src={Podcast} className="max-w-[382px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex justify-between items-center xl:flex-wrap xl:justify-center xl:gap-[50px]">
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="flex flex-col gap-[23px] max-w-[635px]"
          >
            <h1 className="font-[600] tracking-in-contract-bck-top text-[48px] leading-[80px]">
              {t("aboutUs")}
            </h1>
            <p className="font-[400] text-[20px] text-[#8F95A5] leading-[30px]">
              {t(
                "The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer."
              )}
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-[]">
                <h1 className="font-[600] text-center text-[48px] text-[#2A3246]">
                  800
                </h1>
                <span className="font-[400] text-center text-[20px] text-[#8F95A5]">
                  Pupils
                </span>
              </div>

              <div className="flex flex-col gap-[]">
                <h1 className="font-[600] text-center text-[48px] text-[#2A3246]">
                  18
                </h1>
                <span className="font-[400] text-center text-[20px] text-[#8F95A5]">
                  Teachers
                </span>
              </div>

              <div className="flex flex-col gap-[]">
                <h1 className="font-[600] text-center text-[48px] text-[#2A3246]">
                  6
                </h1>
                <span className="font-[400] text-center text-[20px] text-[#8F95A5]">
                  Foreign languages
                </span>
              </div>
            </div>
          </div>
          <img
            src={Business}
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="xl:w-[100%]"
            alt=""
          />
        </div>
      </section>

      <section className="container1 m-[188px_auto_255px_auto]">
        <div className="container11 flex flex-col gap-[83px]">
          <h1 className="font-[600] text-[48px] tracking-in-contract-bck-top text-center ">
          {t("Pricing")}
          </h1>

          <div className="flex justify-between xl:flex-wrap xl:justify-center xl:gap-[50px]">
            <Card1
              img={Online}
              h1="Self-study online course"
              p="Start learning English online in live classes
with qualified EC teachers and students 
from all over the world."
              btnh1="£5.99"
              btnp="per month"
            />

            <Card1
              img={Online}
              h1="Self-study online course"
              p="Start learning English online in live classes
with qualified EC teachers and students 
from all over the world."
              btnh1="£5.99"
              btnp="per month"
            />

            <Card1
              img={Online}
              h1="Self-study online course"
              p="Start learning English online in live classes
with qualified EC teachers and students 
from all over the world."
              btnh1="£5.99"
              btnp="per month"
            />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex justify-between items-center xl:flex-wrap xl:justify-center xl:gap-[50px]">
          <img
            src={group}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            alt=""
          />
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className="max-w-[776px] flex flex-col gap-[52px]">
              <div className="flex flex-col gap-[37px]">
                <h1 className="font-[600] tracking-in-contract-bck-top text-[48px] leading-[80px] xl:text-center">
                  Contact Us
                </h1>
                <p className="font-[400] text-[20px] text-[#8F95A5] leading-[30px] xl:text-center">
                  Discover your current English level by taking our free online
                  English test.Sign up to our newsletter for learning tips and
                  free resources
                </p>
              </div>
              <div className="flex  gap-[12px] md:flex-wrap md:justify-center">
                <div className="text-[gray] p-[26px_0_30px_33px] border-[1px] w-[60%] border-solid border-[#8F95A5] rounded-[10px]">
                  Enter Your E-mail
                </div>
                <button className="font-[500] text-[20px] text-white leading-[30px] bg-[#263238] p-[25px_81px] rounded-[10px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container1 mt-[133px]">
        <div className="container11 ">
          <div className="flex items-center justify-between pt-[31px] pb-[64px] border-[#C4C4C4] border-solid border-t-[1px]">
            <img src={britlex} className="text-flicker-in-glow" alt="" />
            <ul className="  flex gap-[50px] lg:hidden">
              <li className="">Terms and Conditions</li>
              <li className="list-disc">Privacy Policy</li>
              <li className="list-disc">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
