export interface Mission {
  id: number
  day: number
  program: string
  title: string
  emoji: string
  tagline: string
  body: string
  duration: string
  prompts: string[]
  reflection: string
}

// Seed missions — grows as community submissions come in
export const MISSIONS: Mission[] = [
  {
    id: 1, day: 1, program: 'reconnect',
    title: 'Open the Door',
    emoji: '🚪',
    tagline: "Share something you've been holding back — even just a little.",
    body: "Each partner takes turns sharing one thing they've been holding inside — something they haven't said out loud lately. The other partner listens without responding, fixing, or defending. Just listens.",
    duration: '10–15 min',
    prompts: [
      "Something I've wanted to say to you lately but haven't is...",
      "One thing I've been afraid to bring up is...",
      'Something I need more of from you right now is...',
    ],
    reflection: 'How did it feel to say that out loud? What surprised you?',
  },
  {
    id: 2, day: 2, program: 'reconnect',
    title: 'The Gratitude Exchange',
    emoji: '🙏',
    tagline: "Say the things you feel but rarely say.",
    body: "Each partner shares five specific things they genuinely appreciate about the other. Not general — specific. Specificity is what makes gratitude land.",
    duration: '15–20 min',
    prompts: [
      "Something you do that I don't thank you enough for is...",
      'A quality in you I genuinely admire is...',
      'A moment recently where you showed up for me was...',
    ],
    reflection: 'What felt hardest to say? What felt best to hear?',
  },
  {
    id: 3, day: 3, program: 'reconnect',
    title: 'The Listen',
    emoji: '👂',
    tagline: "Speak to be understood. Listen to understand — not to respond.",
    body: "Partner A speaks for 5 uninterrupted minutes about how they've been feeling in the relationship. Partner B listens only — no fixing, no defending. Then switch. Reflect back what you heard.",
    duration: '20–25 min',
    prompts: [
      "Lately I've been feeling... and I don't think you know it.",
      'When I try to talk to you about hard things, I sometimes feel...',
      'What I wish you understood about my experience right now is...',
    ],
    reflection: "What did you hear that you hadn't fully understood before?",
  },
  {
    id: 4, day: 4, program: 'reconnect',
    title: 'The Memory Bridge',
    emoji: '🌉',
    tagline: 'Go back to a moment when everything felt right between you.',
    body: 'Each partner shares one specific memory from your relationship — a moment when you felt most connected. Describe it in detail. Then identify what was present in that moment that you want more of now.',
    duration: '15–20 min',
    prompts: [
      'A moment when I felt closest to you was...',
      'When I remember that time, what I miss most is...',
      'If we could bring one thing from that moment into today, it would be...',
    ],
    reflection: 'What does this memory remind you both are capable of?',
  },
  {
    id: 5, day: 5, program: 'reconnect',
    title: 'The Honest Check-In',
    emoji: '🔍',
    tagline: 'Where are we, really?',
    body: 'Both partners rate the relationship in four areas (1–10): Connection, Trust, Communication, and Fun. Share your number and the reason. Then pick one area to improve — and one small action each of you will take.',
    duration: '20–25 min',
    prompts: [
      'Connection (1–10): How emotionally close do we feel right now?',
      'Trust (1–10): How safe do we feel being fully honest?',
      'Communication (1–10): How well are we actually hearing each other?',
      "Fun (1–10): Are we still enjoying each other's company?",
    ],
    reflection: 'Which area needs the most attention? What will each of you do about it?',
  },
  {
    id: 6, day: 6, program: 'reconnect',
    title: 'The Vision',
    emoji: '🔭',
    tagline: 'What do you both want this relationship to look and feel like?',
    body: "Each partner describes their vision for the relationship — where do you see yourselves in one year? What does the relationship feel like at its best? Share your visions, then name the overlap out loud.",
    duration: '20 min',
    prompts: [
      'In one year, I want us to feel... and look like...',
      'Something I want us to build or experience together is...',
      "The version of us I'm working toward looks like...",
    ],
    reflection: 'Where did your visions overlap? What does that tell you?',
  },
  {
    id: 7, day: 7, program: 'reconnect',
    title: 'The Recommitment',
    emoji: '💍',
    tagline: 'A simple, personal promise — made right now, to each other.',
    body: "Each partner writes a short personal promise to the other. One genuine, specific commitment for the weeks ahead. Read them to each other. Keep them somewhere you'll both see.",
    duration: '20–25 min',
    prompts: [
      'Going forward, I commit to showing up for you by...',
      'One thing I will do differently from this week forward is...',
      'I choose you — and here is what that looks like in action...',
    ],
    reflection: 'What does making this promise feel like?',
  },
]

export const getProgramMissions = (program: string) =>
  MISSIONS.filter(m => m.program === program)

export const getMissionById = (id: number) =>
  MISSIONS.find(m => m.id === id)
