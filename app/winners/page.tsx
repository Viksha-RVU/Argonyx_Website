"use client";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import HyperText from "@/components/ui/hyper-text";
import AIMLImage from "@/public/ai_ml.png";
import WebDevImage from "@/public/web dev.png";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import First from "@/public/first.png";
import Second from "@/public/second.png";
import Third from "@/public/third.png";
import Trophy from "@/public/trophy.png";

export default function Winners(): JSX.Element {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger confetti on mount
    const duration = 5 * 1000; // 5 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number): number =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Cleanup confetti interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Delay showing content until HyperText animation finishes
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 0 * 1000); // 10 seconds for the HyperText animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center p-10">
      <HyperText
        className="text-lg md:text-4xl font-bold text-black dark:text-white"
        text="Argonyx Hackathon 2024 - Winners"
        duration={10}
      />
      {!showContent ? (
        <p className="text-sm italic text-center mt-4"></p>
      ) : (
        <>
          <FadeInSection>
            <p className="text-sm font-serif md:text-lg italic text-center mt-4">
              Congratulations to the brilliant minds who showcased innovation
              and excellence!
            </p>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center pt-3">
              <Image src={AIMLImage} alt="ai_logo" height={120} width={120} />
              <h2 className="text-xl font-semibold text-primary pb-2">
                AI / ML
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={First} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team_MFSS
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      RV University
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Francis Maria Sharan</li>
                        <li>Shreyank SH</li>

                        <li>Saatvik B Hampiholi</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Second} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      OriginDev
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      RV University
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Bommireddy C Nishant Reddy</li>
                        <li>Dhanush S Gowda</li>
                        <li>Shayan Azmi</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Third} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      OkComputer
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      Christ University
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Ansul Kumar</li>
                        <li>Alderin Shanty</li>

                        <li>Akhil Ramchand</li>
                        <li>Mohammed Amaan Thayyil</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="w-full md:col-span-3 items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <h1
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#FFFFFF] from-35% to-[#8A2BE2] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]


"
                    >
                      Consolation Prizes
                    </h1>
                    <h1
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#4B0082] from-35% to-[#D8BFD8] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      Best Web Scraping
                    </h1>
                    <Image src={Trophy} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Gitbashers
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      RVCE
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Harshit Saroha</li>
                        <li>Akshat Arya</li>

                        <li>Amol Vyas</li>
                        <li>Akshat Gupta</li>
                      </div>
                    </ul>
                    


                    
                  </div>
                </NeonGradientCard>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center pt-10">
              <Image src={WebDevImage} alt="ai_logo" height={110} width={110} />
              <h2 className="text-xl font-semibold text-primary pb-2">
                Web Development
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <NeonGradientCard className="w-[275px] items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={First} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      O (Win)
                    </h1>
                    <h4 className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      BMSCE
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>K Vijay</li>
                        <li>Shashidhar BM</li>

                        <li>K Mohamad Hussain</li>
                        <li>GRVS Sai Suveer</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Second} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      MIPA BYTES
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      RVCE
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Joseph Rejo Mathew</li>
                        <li>Sreeharsha Tallapalli</li>

                        <li>Sai Arun Kumar</li>
                        <li>Ishan Shekhar Prasad </li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="w-full items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Third} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      HackAttack
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      REVA
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Rijo Simon TM</li>
                        <li>Mohith N</li>

                        <li>S Sandeep Kumar</li>
                        <li>Pavan C Shekar</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="w-full md:col-span-3 items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <h1
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#FFFFFF] from-35% to-[#8A2BE2] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]


"
                    >
                      Consolation Prizes
                    </h1>
                    <h1
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#4B0082] from-35% to-[#D8BFD8] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      Excellent Frontend
                    </h1>
                    <Image src={Trophy} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Scriptify
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      RV University
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Saanvi R Prabhu</li>
                        <li>Suhani Lalla</li>

                        <li>Avishi Sarda</li>
                      </div>
                    </ul>
                    <h1
                      className="pointer-events-none pt-4 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#4B0082] from-35% to-[#D8BFD8] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      Excellent Features
                    </h1>
                    <Image src={Trophy} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      HAC
                    </h1>
                    <h4
                      className="pointer-events-none pt-2 z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#8A2BE2] from-35% to-[#FFFFFF] bg-clip-text text-center text-sm font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
"
                    >
                      MSRIT
                    </h4>
                    <ul className="pt-2">
                      <div className="flex flex-col items-center">
                        <li>Chitrita BS</li>
                        <li>Chirudeep Kuralla</li>

                        <li>Harshith Bezawada</li>
                        <li>Adithya B</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
              </div>
            </div>
          </FadeInSection>
        </>
      )}
    </div>
  );
}
