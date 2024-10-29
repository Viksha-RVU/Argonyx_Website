"use client";
import * as React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import CalenderIcon from "@/public/calender.png";
import ArgonyxLogo from "@/public/argonyx_logo.png";
import Image from "next/image";
import { TimelineLayout } from "@/components/HackathonTimeline";
import { timelineData } from "@/components/data";
import FadeInSection from "@/components/FadeInSection";
import { Analytics } from "@vercel/analytics/react"

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
          <div className="flex flex-wrap justify-between items-center w-full">
            <div className="md:w-2/3 flex p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 justify-center ">
              <Image
                src={ArgonyxLogo}
                width={700}
                height={700}
                alt="Argonyx_logo"
              />
            </div>

            {/* Registration Info */}

            <div className="flex-1 h-min md:w-1/4 flex flex-col p-4 m-5  md:p-5 rounded-lg m-2 md:m-5 space-y-3  p-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
              <div className="w-full flex justify-evenly pl-6">
                <Image
                  src={CalenderIcon}
                  alt="calendar"
                  height={40}
                  width={70}
                  style={{ filter: "invert(50%) brightness(180%)" }}
                />
                <div className="flex flex-col justify-center items-start">
                  <div className="flex text-xl">Registration Deadline</div>
                  <div className="flex w-full justify-center text-lg">
                    8th Nov 2024
                  </div>
                </div>
              </div>

              <Button>Register</Button>
            </div>
          </div>
        </div>
      </FadeInSection>
      {/* About and Sponsors Section */}

      <div className="flex flex-wrap justify-between w-full">
        {/* About Section */}
        <FadeInSection>
          <div className="flex flex-wrap md:flex-nowrap w-full">
            <div className="md:w-2/3 flex flex-col p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
              <h2 className="text-4xl md:text-3xl font-semibold mb-4 flex justify-center">
                About ARGONYX
              </h2>
              <div className="flex-grow flex flex-col justify-center items-center">
                <p className="text-center">
                  Welcome to Argonyx Hackathon 2024! <br />
                  <br />
                  Dive into an exciting, two-round competition designed to push
                  the boundaries of innovation and creativity. Whether
                  you&apos;re a coding enthusiast or a problem-solving
                  visionary, Argonyx is the ultimate platform to showcase your
                  skills, connect with like-minded individuals, and make an
                  impact. <br />
                  <br />
                  The hackathon features an initial round where you&apos;ll
                  present your ideas, and top teams will advance to an intensive
                  24-hour offline hackathon to bring their solutions to life!
                </p>
              </div>
            </div>
            {/*Tracks and Problems*/}
            <div className="flex flex-col p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
              <h2 className="text-2xl md:text-3xl font-semibold flex justify-center text-center">
                Tracks & Problem Statements
              </h2>
              <div className="flex-grow flex flex-col justify-center items-center">
                <p className="text-center ">
                  Participants can choose from the following tracks, with each
                  track offering unique problem statements tailored to specific
                  domains:
                </p>
                <ul className="flex flex-col justify-center items-center pt-4 text-lg md:text-xl">
                  <li className="font-semibold">AI/ML</li>
                  <li className="font-semibold">Web Development</li>
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
          <div className="flex flex-wrap md:flex-nowrap w-full">
            <div className="flex flex-col justify-center items-center p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
              <h2 className="text-2xl md:text-3xl font-semibold">Guidelines</h2>
              <div className="flex-grow flex flex-col pr-4">
                <h3 className="font-semibold ">Eligibility: </h3>

                <p>Open to all undergraduate students.</p>
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <h3 className="font-semibold">Team Composition: </h3>

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
              <div className="flex-grow flex">
                <h3 className="font-semibold mr-2">Format: </h3>

                <p>Team participation is required.</p>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="font-semibold ml-2">Rounds:</h3>

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
            <div className="flex-1 h-fit flex flex-col items-center p-4 m-5 md:p-5 rounded-lg m-2 md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
              <h2 className="text-4xl md:text-3xl font-semibold mb-4">
                Sponsors
              </h2>
              <div className="flex-grow flex flex-col ">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                    <span>Sponsor Name</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                    <span>Sponsor Name</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                    <span>Sponsor Name</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Schedule Section */}
      <FadeInSection>
        <div className="w-fit flex flex-col items-center justify-center m-6 md:p-5 rounded-lg md:m-5 space-y-3 md:bg-background/95 md:backdrop-blur-xs md:supports-[backdrop-filter]:bg-custom-bg/45">
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            What&apos;s at Stake - Rewards and Prizes
          </h2>
          <p className="pb-3 text-center">
            Each track will have rewards for the top three teams of each track:
          </p>
          <ul className="space-y-4 text-center flex flex-col items-center">
            <li className="flex items-center">🥇 Winner: ₹10,000</li>
            <li className="flex items-center">🥈 First Runner Up: ₹6,000</li>
            <li className="flex items-center">🥉 Second Runner Up: ₹4,000</li>
          </ul>
          <p className="pt-3 text-center">
            Participation certificate for all the participants who make a
            submission <br />
            Get in touch in amazing startups!
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
