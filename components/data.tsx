export const timelineData = [
  {
    id: 1,
    title: "Registrations Close",
    date: "8th November at 11:59 PM",
    description:
      "This is the final deadline for participants to register. Anyone interested in participating must complete their registration by this date. No further entries will be accepted after midnight on the 8th.",
  },
  {
    id: 2,
    title: "Problem Statement Release",
    date: "9th November at 10:00 AM",
    description:
      "The 1st round begins with the release of the problem statement. Participants can start working on their solutions from this time.",
  },
  {
    id: 3,
    title: "Submission Deadline (PPT)",
    date: "10th November at 8:00 PM",
    description:
      "Participants need to submit their solution in the form of a PowerPoint presentation (PPT) by noon. This is the cutoff for all submissions for the first round. Submissions after this time won’t be accepted for evaluation.",
  },
  {
    id: 4,
    title: "Selected Teams Announced",
    date: "13th November",
    description:
      "The top 20 teams from each track, advancing to the next round will be announced. Only shortlisted teams will be eligible to participate in the subsequent phases of the competition.",
  },
  {
    id: 5,
    title: "Selected Teams Registration",
    date: "13th to 15th November",
    description:
      "Shortlisted teams confirm their participation in the final round by registering within this period.",
  },
  {
    id: 6,
    title: "Offline Hackathon",
    date: "16th November and 17th November",
    description:
      "The final hackathon round is conducted in person and spans over 24 hours. During this time, teams will work intensively on their projects and present their solutions by the end of the session.",
  },
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}
