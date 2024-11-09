"use client";
import * as React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import HyperText from "@/components/ui/hyper-text";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import {
  Drawer,

  DrawerContent,
  DrawerDescription,

  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import ArgonyxLogo from "@/public/poster.png";
import AIImage from "@/public/ai_ml.png";
import WebLogo from "@/public/web dev.png";
import First from "@/public/first.png";
import Second from "@/public/second.png";
import Third from "@/public/third.png";
import Image from "next/image";
import { TimelineLayout } from "@/components/HackathonTimeline";
import { timelineData } from "@/components/data";
import FadeInSection from "@/components/FadeInSection";
import Sponsor1 from "@/public/sponsor_1.png";
import engagexLogo from "@/public/EngageX.jpg";

export default function Home() {
  return (
    <div className="p-0 m-0 min-w-screen min-h-screen flex flex-col justify-between **w-full** overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      <FadeInSection>
        <div
          className="h-fit flex flex-col justify-start items-center w-full"
          style={{ backgroundImage: "url('/path-to-your-image.png')" }}
        >
          {/* Logo and Title */}
          <div className="flex flex-wrap justify-start items-center w-full">
            <div className="md:w-2/3 flex p-4 md:p-5 mx-5 rounded-lg mt-10 mb-0 space-y-3 justify-center ">
              <Image
                src={ArgonyxLogo}
                width={700}
                height={700}
                alt="Argonyx_logo"
              />
            </div>

            {/* Registration Info */}

            <div className="flex-1 h-fit md:w-1/4 flex flex-col p-4  md:p-5 rounded-lg md:m-5 space-y-3  p-5 rounded-lg space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/70">
              <div className="w-full flex justify-evenly">
                <div className="flex flex-col justify-center items-start">
                  <div className="flex text-xl flex-col items-center text-center">
                    <HyperText
                      className="text-xl font-bold text-black dark:text-white"
                      text="the registrations are closed!"
                      duration={10}
                    />
                  </div>
                  <div className="flex justify-center w-full">
                    <Drawer>
                      <DrawerTrigger asChild>
                        <div
                          className={cn(
                            "group rounded-full border mt-2 border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                          )}
                        >
                          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-lg">
                            <span>✨ Problem Statements</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                          </AnimatedShinyText>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>
                            Here are the problem statements!
                          </DrawerTitle>
                          <DrawerDescription>
                            <div className="flex flex-col items-center">
                              <Image
                                src={AIImage}
                                alt="ai_logo"
                                height={125}
                                width={125}
                              />
                              <div className="flex flex-col items-center">
                                <h2 className="text-2xl font-semibold text-primary pb-2">
                                  AI / ML
                                </h2>
                                <Popover>
                                  <PopoverTrigger>
                                    <Button>View Problem Statement 1</Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <div className="flex flex-col items-center">
                                      <h3 className="text-md font-semibold text-center">
                                        Unified Social Engagement Tracker for
                                        Streamlined Digital Interactions
                                      </h3>
                                      <br />
                                      <h4 className="text-sm font-semibold">
                                        Build an &quot;AI-driven Social
                                        Engagement Tracker&quot; that empowers
                                        users to stay connected and engaged with
                                        key contacts and prospects across
                                        multiple social media platforms.
                                      </h4>
                                      <p className="text-xs">
                                        This application should allow users to:
                                        <br />{" "}
                                        <strong>
                                          Save and Monitor Profiles:
                                        </strong>{" "}
                                        Enable users to save profiles across
                                        various social media platforms
                                        (preferably LinkedIn first) to track
                                        important contacts and prospects.
                                        <br />{" "}
                                        <strong>
                                          Cross-Platform Notifications:
                                        </strong>{" "}
                                        Automatically notify users whenever a
                                        saved contact posts new content,
                                        regardless of the platform, providing
                                        seamless updates on activity.
                                        <br />{" "}
                                        <strong>Generative AI Insights:</strong>
                                        Utilize AI to analyze posts for
                                        sentiment, engagement potential, and
                                        relevance to the user&apos;s interests or
                                        industry.
                                        <br />{" "}
                                        <strong>
                                          Personalized Engagement Suggestions:
                                        </strong>{" "}
                                        Offer actionable insights and
                                        suggestions for interactions based on
                                        content analysis, enabling timely and
                                        tailored responses across platforms.
                                        <br />{" "}
                                        <strong>Unified Dashboard:</strong>{" "}
                                        Provide a centralized dashboard for
                                        users to view updates, notifications,
                                        and suggested interactions, creating a
                                        streamlined experience.
                                      </p>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                                <Popover>
                                  <PopoverTrigger>
                                    <Button className="mt-4">
                                      View Problem Statement 2
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <div className="flex flex-col items-center">
                                      <h3 className="text-md font-semibold text-center">
                                        AI-Powered Job Relevance Analyzer for
                                        Targeted Career Opportunities
                                      </h3>
                                      <br />
                                      <h4 className="text-sm font-semibold">
                                        Develop an AI-driven tool that analyzes
                                        job postings across networking platforms
                                        to evaluate their relevance for users
                                        based on their profile.
                                      </h4>
                                      <p className="text-xs">
                                        This application should allow users to:
                                        <br />{" "}
                                        <strong>
                                          Cross-Platform Job Analysis:
                                        </strong>{" "}
                                        Aggregate job postings from various
                                        networking and job platforms (preferably
                                        LinkedIn first) to provide users with a
                                        comprehensive view of relevant
                                        opportunities.
                                        <br />{" "}
                                        <strong>
                                          User Profile Matching:
                                        </strong>{" "}
                                        Assess the user&apos;s qualifications,
                                        skills, and experience to determine the
                                        fit for each role.
                                        <br />{" "}
                                        <strong>
                                          Strengths and Gap Analysis:{" "}
                                        </strong>
                                        Highlight the user&apos;s strengths for
                                        each job posting and identify potential
                                        skill or experience gaps, helping users
                                        understand areas for improvement.
                                        <br />{" "}
                                        <strong>
                                          Opportunity Targeting:
                                        </strong>{" "}
                                        Prioritize job opportunities that align
                                        closely with the user&apos;s profile,
                                        optimizing their job search with
                                        targeted recommendations.
                                        
                                      </p>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                              </div>
                              <Image
                                src={WebLogo}
                                alt="web_dev_logo"
                                height={80}
                                width={80}
                                className="pt-5"
                              />
                              <div className="flex flex-col items-center">
                                <h2 className="text-xl font-semibold text-primary pb-2">
                                  Web Development
                                </h2>
                                <Popover>
                                  <PopoverTrigger>
                                    <Button>View Problem Statement</Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <div className="flex flex-col items-center">
                                      <h3 className="text-md font-semibold text-center">
                                        Smart Travel Companion Platform for
                                        Enhancing Local Tourism Experiences with
                                        Data Driven Customer Reach
                                      </h3>
                                      <br />
                                      <h4 className="text-sm font-semibold">
                                        Build a &quot;Smart Travel Companion
                                        Platform&quot; that provides travellers
                                        with an engaging, real-time experience
                                        of a destination
                                      </h4>
                                      <p className="text-xs">
                                        This platform should identify and
                                        display area-specific specialities,
                                        including: <br />{" "}
                                        <strong>Cuisine recommendations</strong>{" "}
                                        with must-try local dishes. <br />{" "}
                                        <strong>
                                          Geographical Indication (GI)
                                        </strong>{" "}
                                        Products specific to the location,
                                        encouraging travelers to explore and
                                        purchase authentic, locally crafted
                                        goods. Landmarks and Activities
                                        suggestions, including popular and
                                        hidden gems. <br />{" "}
                                        <strong>
                                          Proactive Notifications:
                                        </strong>
                                        Once a traveler enters the location and
                                        opens the app/website, the platform
                                        should automatically highlight must-see
                                        and must-do experiences. If the user
                                        closes the app, notifications should
                                        keep them informed. <br />{" "}
                                        <strong>
                                          Tour and Travel Bookings:
                                        </strong>{" "}
                                        If there are guided tours, local
                                        experiences, or activities (e.g.,
                                        cultural events, adventure sports), the
                                        platform should enable users to book
                                        them directly. <br />{" "}
                                        <strong>
                                          Pre-Visit Booking Options:
                                        </strong>{" "}
                                        Allow travelers to book experiences,
                                        tours, and accommodations beforehand,
                                        ensuring they have priority access and a
                                        personalized itinerary.
                                      </p>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                              </div>
                            </div>
                          </DrawerDescription>
                        </DrawerHeader>
                        
                      </DrawerContent>
                    </Drawer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      {/* About and Sponsors Section */}

      <div className="flex flex-wrap justify-between w-full">
        {/* About Section */}
        <FadeInSection>
          <div className="flex flex-wrap md:flex-nowrap w-full">
            <div className="md:w-1/2 flex flex-col p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/70">
              <h2 className="text-3xl md:text-3xl font-semibold mb-4 flex justify-center">
                About ARGONYX
              </h2>
              <div className="flex-grow flex flex-col justify-center items-center">
                <p className="text-center">
                  Welcome to Argonyx Hackathon 2024! <br />
                  <br />
                  Argonyx is a national-level hackathon, structured as a
                  two-round competition that pushes the boundaries of innovation
                  and creativity. <br />
                  <br />
                  Whether you&apos;re a coding enthusiast or a problem-solving
                  visionary, Argonyx is the ultimate platform to showcase your
                  skills, connect with like-minded individuals, and make an
                  impact. <br />
                  <br />
                  In the first round, you&apos;ll present your ideas, and top
                  teams will advance to an intensive 24-hour offline hackathon
                  to bring their solutions to life!
                </p>
              </div>
            </div>
            {/*Tracks and Problems*/}
            <div className="md:w-1/2 flex flex-col p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/70">
              <h2 className="text-3xl md:text-3xl font-semibold flex justify-center text-center">
                Tracks & Problem Statements
              </h2>
              <div className="flex-grow flex flex-col justify-center items-center">
                <p className="text-center ">
                  Participants can choose from the following tracks, with each
                  track offering unique problem statements tailored to specific
                  domains:
                </p>
                <ul className="flex w-full justify-evenly items-center pt-4 text-lg md:text-xl">
                  <div>
                    <Image
                      src={AIImage}
                      alt="ai_logo"
                      height={125}
                      width={125}
                    />
                    <li className="font-semibold text-center">AI/ML</li>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-6">
                    <Image
                      src={WebLogo}
                      alt="web_dev_logo"
                      height={80}
                      width={80}
                    />
                    <li className="font-semibold text-center pt-4">
                      Web Development
                    </li>
                  </div>
                </ul>
                <p className="text-center pt-4">
                  Details about the problem statements will be available upon
                  registration in Round 1.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
        {/*Guidelines*/}
        <FadeInSection>
          <div className="flex flex-wrap w-full">
            <div
              className="w-full md:[width:calc(50%-2%)] flex flex-col p-4 md:p-5 m-2 md:m-5 rounded-lg space-y-3 
               md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/70"
            >
              <h2 className="text-3xl font-semibold text-center">Guidelines</h2>

              <div className="flex space-x-2">
                <h3 className="font-semibold">Eligibility:</h3>
                <p>Open to all undergraduate students.</p>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Team Composition:</h3>
                <ul className="list-disc pl-4">
                  <li className="flex items-center">
                    <h4 className="font-semibold mr-1">Inter-college teams:</h4>{" "}
                    Allowed
                  </li>
                  <li className="flex items-center">
                    <h4 className="font-semibold mr-1">
                      Inter-specialization teams:
                    </h4>{" "}
                    Allowed
                  </li>
                  <li className="flex items-center">
                    <h4 className="font-semibold mr-1">Team Size:</h4> 2-4
                    members
                  </li>
                </ul>
              </div>

              <div className="flex space-x-2">
                <h3 className="font-semibold">Format:</h3>
                <p>Team participation is required.</p>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Rounds:</h3>
                <ul className="list-disc pl-5">
                  <li className="flex flex-wrap items-center">
                    <h4 className="font-semibold mr-1">Round 1:</h4> Online
                    submission of solutions based on provided problem
                    statements.
                  </li>
                  <li className="flex flex-wrap items-center">
                    <h4 className="font-semibold mr-1">Round 2:</h4> Offline
                    hackathon for shortlisted teams in each track, lasting 24
                    hours.
                  </li>
                </ul>
              </div>
            </div>

            {/* Sponsors Section */}
            <div className="flex-1 h-fit flex flex-col md:w-1/2 items-center p-4 m-5 md:p-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/70">
              <h2 className="text-3xl md:text-3xl font-semibold mb-4">
                Sponsors
              </h2>
              <div className="flex-grow flex flex-col ">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={Sponsor1}
                      alt="sponsor1"
                      height={100}
                      width={100}
                    />
                    <span className="text-xl font-semibold">
                      Astrae Research
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex flex-col pr-16">
                <div className="space-y-4">
                  <a
                    href="https://engagex.app/"
                    target="_blank"
                    className="flex items-center space-x-4"
                  >
                    <Image
                      src={engagexLogo}
                      alt="engagex"
                      height={70}
                      width={70}
                    />
                    <span className="text-xl font-semibold pl-4">engagex</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Schedule Section */}
      <FadeInSection>
        <div className="w-fit flex flex-col items-center justify-center m-6 md:p-5 rounded-lg md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/70">
          <h2 className="text-4xl md:text-3xl font-semibold mb-6 mr-4">
            Schedule
          </h2>

          <div className="w-fit">
            <TimelineLayout items={timelineData} />
          </div>
        </div>
      </FadeInSection>

      {/* Prizes Section */}
      <FadeInSection>
        <div className="flex flex-col md:items-center p-4 m-5 md:p-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
          <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-center">
            What&apos;s at Stake - Rewards and Prizes
          </h2>
          <p className="pb-3 text-center">
            Each track will have rewards for the top three teams:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center p-4 rounded-lg ">
              <Image src={First} alt="first_place" height={80} width={80} />
              <h3 className="font-semibold text-lg">Winner</h3>
              <p className="text-xl md:text-lg">₹10,000</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <Image src={Second} alt="second_place" height={80} width={80} />
              <h3 className="font-semibold text-lg">First Runner Up</h3>
              <p className="text-xl md:text-lg">₹6,000</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <Image src={Third} alt="third_place" height={80} width={80} />
              <h3 className="font-semibold text-lg">Second Runner Up</h3>
              <p className="text-xl md:text-lg">₹4,000</p>
            </div>
          </div>
          <p className="pt-3 text-center">
            A Participation certificate for all the participants who make a
            submission. <br />
            Get in touch with amazing startups!
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
