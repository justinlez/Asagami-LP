import PQDAni1 from "@/assets/featureVideos/PQDAni1.mp4";
import PQDAni2 from "@/assets/featureVideos/PQDAni2.mp4";
import PQDAni3 from "@/assets/featureVideos/PQDAni3.mp4";
import PQDAni4 from "@/assets/featureVideos/PQDAni4.mp4";
import INCAni1 from "@/assets/featureVideos/INCAni1.jpg";
import INCAni2 from "@/assets/featureVideos/INCAni2.jpg";
import INCAni3 from "@/assets/featureVideos/INCAni3.mp4";
import LearningAnalytics1 from "@/assets/featureVideos/LearningAnalytics1.jpg";
import LearningAnalytics2 from "@/assets/featureVideos/LearningAnalytics2.jpg";
import LearningAnalytics3 from "@/assets/featureVideos/LearningAnalytics3.jpg";
import Chatbot1 from "@/assets/featureVideos/Chatbot1.mp4";
import AdminPanel1 from "@/assets/featureVideos/AdminPanel1.jpg";
import usa from "@/assets/countries/unitedstates.svg";
import japan from "@/assets/countries/japan.svg";
import philippines from "@/assets/countries/philippines.svg";
import singapore from "@/assets/countries/singapore.svg";
import taiwan from "@/assets/countries/taiwan.svg";
import vietnam from "@/assets/countries/vietnam.svg";
import daihatsu from "@/assets/companies/daihatsu.svg";
import kyushuElect from "@/assets/companies/kyushuElect.svg";
import nipponBank from "@/assets/companies/nipponBank.svg";
import NTOU from "@/assets/companies/NTOU.svg";

export const FEATURES = [
  {
    name: "Intelligent Note Creation",
    steps: [
      "Create notes from scratch or transform existing materials (E.G. PDFs, slides, URLs, images) into clearer, more organized learning content.",
      "Customize the depth, length, tone, and generation mode of notes based on your preferences.",
      "Personalize content formatting with editable layouts, highlighted key points, diagrams, and visual learning elements.",
    ],
    gif: [INCAni1, INCAni2, INCAni3],
  },
  {
    name: "Personalized Quiz Design",
    steps: [
      "Create quiz questions manually or automatically from existing notes and learning materials",
      "Generate multiple formats including MCQs, open-ended, fill-in-the-blanks, reordering, and scenario-based questions",
      "Customize quiz difficulty, focus areas, and question styles based on learning objectives and student needs",
      "Reinforce understanding through in-depth explanations, feedback, and continuously generated revision questions",
    ],
    gif: [PQDAni1, PQDAni2, PQDAni3, PQDAni4],
  },
  {
    name: "Learning Analytics",
    steps: [
      "Identify weak areas through performance analytics and recurring incorrect question trends.",
      "Track rankings, engagement, and overall learning progress within your class or organization.",
      "Monitor study consistency through learning streaks, revision activity, time spent across notes and quiz attempts.",
    ],
    gif: [ LearningAnalytics1, LearningAnalytics2, LearningAnalytics3 ],
  },
  {
    name: "24/7 Assistance",
    steps: [
      "Access instant AI-supported assistance anytime to clarify concepts, resolve doubts, and support independent learning",
      "Get step-by-step support for solving questions, understanding mistakes, and reinforcing difficult concepts",
    ],
    gif: [Chatbot1, Chatbot1],
  },
  {
    name: "Admin Panel",
    steps: [
      "Add and manage organization members in one centralized dashboard",
      "Share notes, quizzes, and curriculum materials seamlessly across teams",
      "Track engagement, completion rates, performance trends, and weak areas through real-time learning analytics",
    ],
    gif: [AdminPanel1],
  },
  {
    name: "Curriculum Planning",
    steps: [
      "Create custom or automatically generated curriculum structures for any topic, course, or training objective",
      "Organize, refine, and sequence topics based on your preferred learning flow, depth, and timeline",
    ],
    gif: [],
  },
];

export const COUNTRIES = [
  { name: "USA", flag: usa },
  { name: "Japan", flag: japan },
  { name: "Philippines", flag: philippines },
  { name: "Singapore", flag: singapore },
  { name: "Taiwan", flag: taiwan },
  { name: "Vietnam", flag: vietnam },
];

export const COMPANIES = [
  { name: "Daihatsu", logo: daihatsu },
  { name: "Kyushu Electric", logo: kyushuElect },
  { name: "Nippon Bank", logo: nipponBank },
  { name: "NTOU", logo: NTOU },
];
