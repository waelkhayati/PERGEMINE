export type Choice = {
  text: string;
  correct: boolean;
  feedback: string;
};

export type MCQQuestion = {
  type: "mcq";
  category: "ppe" | "emergency" | "hazard" | "environment" | "operations";
  question: string;
  choices: Choice[];
};

export type ScenarioQuestion = {
  type: "scenario";
  category: "ppe" | "emergency" | "hazard" | "environment" | "operations";
  situation: string;
  question: string;
  choices: Choice[];
};

export type Hazard = {
  x: number; // % from left
  y: number; // % from top
  label: string;
  description: string;
};

export type HazardQuestion = {
  type: "hazard";
  category: "ppe" | "emergency" | "hazard" | "environment" | "operations";
  question: string;
  image: string;
  hazards: Hazard[];
};

export type Question = MCQQuestion | ScenarioQuestion | HazardQuestion;

export const questions: Question[] = [
  /* ========== MCQ ========== */
  {
    type: "mcq",
    category: "ppe",
    question:
      "At what height does fall protection equipment become mandatory at Pergemine?",
    choices: [
      { text: "1 meter", correct: false, feedback: "Too low — Pergemine policy follows the 2m threshold." },
      { text: "2 meters", correct: true, feedback: "Correct ✅ Working at 2m or above requires full fall protection." },
      { text: "5 meters", correct: false, feedback: "Too high — protection is required from 2m." },
    ],
  },
  {
    type: "mcq",
    category: "ppe",
    question: "Which PPE items are mandatory at all times on the rig?",
    choices: [
      { text: "Helmet and gloves only", correct: false, feedback: "Incomplete — minimum PPE is broader." },
      {
        text: "Hard hat, steel-toe shoes, safety glasses, and work clothing",
        correct: true,
        feedback: "Correct ✅ This is the Pergemine mandatory PPE set.",
      },
      { text: "Helmet and high-visibility vest", correct: false, feedback: "Missing footwear and eye protection." },
    ],
  },
  {
    type: "mcq",
    category: "emergency",
    question: "What does ATEX classification on the rig refer to?",
    choices: [
      { text: "Areas reserved for visitors", correct: false, feedback: "No — ATEX is about explosive atmospheres." },
      {
        text: "Zones classified as dangerous due to explosive atmospheres",
        correct: true,
        feedback: "Correct ✅ ATEX = explosive atmosphere classification.",
      },
      { text: "Areas for storing rig equipment", correct: false, feedback: "No — these are hazard-classified zones." },
    ],
  },

  /* ========== SCENARIOS ========== */
  {
    type: "scenario",
    category: "environment",
    situation:
      "While walking near the mud tanks, you notice a small chemical spill leaking onto the ground.",
    question: "What is your first action?",
    choices: [
      {
        text: "Clean it quickly with a rag and continue working",
        correct: false,
        feedback:
          "❌ Wrong — handling spills without proper procedure puts you and the environment at risk.",
      },
      {
        text: "Inform your Supervisor immediately and apply the correct environmental measures",
        correct: true,
        feedback:
          "✅ Correct — all product spills must be reported to the Supervisor to apply Pergemine's spill response protocol.",
      },
      {
        text: "Ignore it — it's too small to matter",
        correct: false,
        feedback:
          "❌ No spill is too small. All spills must be reported per Pergemine HSE policy.",
      },
    ],
  },
  {
    type: "scenario",
    category: "hazard",
    situation:
      "You're asked to start a task you believe is unsafe and no permit-to-work has been issued.",
    question: "What do you do?",
    choices: [
      {
        text: "Start the task — the supervisor will handle it later",
        correct: false,
        feedback:
          "❌ Never start a job without proper authorization or if it's unsafe.",
      },
      {
        text: "Refuse to start until a Permit-to-Work is issued and the job is safe — you have Stop-the-Job authority",
        correct: true,
        feedback:
          "✅ Correct — every Pergemine worker is empowered to STOP any job considered unsafe.",
      },
      {
        text: "Start the task but stay extra careful",
        correct: false,
        feedback:
          "❌ Extra caution does not replace a Permit-to-Work. Stop the job and report.",
      },
    ],
  },
  {
    type: "scenario",
    category: "emergency",
    situation:
      "The general rig alarm sounds. You're on the drilling floor with your team.",
    question: "What do you do?",
    choices: [
      {
        text: "Run to the nearest exit immediately",
        correct: false,
        feedback:
          "❌ Panic and running can cause injury. Follow the emergency procedure.",
      },
      {
        text: "Stop your task safely and proceed to the muster station as instructed",
        correct: true,
        feedback:
          "✅ Correct — secure your task and head calmly to the designated muster station.",
      },
      {
        text: "Wait for the supervisor to come get you",
        correct: false,
        feedback:
          "❌ Never wait — proceed to the muster station immediately and safely.",
      },
    ],
  },
  {
    type: "scenario",
    category: "hazard",
    situation:
      "You witness a near-miss: a tool falls from height but nobody is hurt.",
    question: "What's the right action?",
    choices: [
      {
        text: "Pick it up and forget about it — no one was hurt",
        correct: false,
        feedback:
          "❌ Near-misses are early warnings — they must be reported.",
      },
      {
        text: "Report the near-miss immediately to the Supervisor",
        correct: true,
        feedback:
          "✅ Correct — all accidents, incidents, AND near-misses must be reported per Pergemine HSE policy.",
      },
      {
        text: "Mention it casually at lunch later",
        correct: false,
        feedback:
          "❌ Reporting must be immediate and formal so prevention measures can be applied.",
      },
    ],
  },

  /* ========== HAZARD SPOT ========== */
  {
    type: "hazard",
    category: "ppe",
    question: "Click on the safety hazards you can spot in this rig scene.",
    image: "/safety-game/hazard-scene-1.jpg",
    hazards: [
      {
        x: 22,
        y: 35,
        label: "Worker without helmet",
        description: "Hard hat is mandatory at all times on the rig.",
      },
      {
        x: 65,
        y: 70,
        label: "Open chemical container",
        description: "Chemical containers must remain sealed and labeled.",
      },
      {
        x: 80,
        y: 25,
        label: "Blocked muster station sign",
        description: "Emergency signs must always be visible and unobstructed.",
      },
      {
        x: 45,
        y: 80,
        label: "Spill on the ground",
        description: "Spills must be reported and contained immediately.",
      },
    ],
  },
];