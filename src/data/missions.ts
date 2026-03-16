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

  // ── INFIDELITY RECOVERY ──────────────────────────────────────────
  {
    id: 8, day: 1, program: 'infidelity-recovery',
    title: 'Name the Truth',
    emoji: '🔦',
    tagline: "Healing begins when you stop talking around what happened and say it plainly.",
    body: "Sit together without phones or distractions. The betraying partner speaks the facts of what happened — not to justify or explain, but to acknowledge. The other partner listens without interrupting. This is not a debate. It is the first act of honesty.",
    duration: '20–30 min',
    prompts: [
      "What happened, as clearly as I can say it, is...",
      "What I have been avoiding telling you fully is...",
      "What I need you to know about how I found out is...",
    ],
    reflection: "What did it feel like to say — or hear — the unfiltered truth?",
  },
  {
    id: 9, day: 2, program: 'infidelity-recovery',
    title: 'The Grief Room',
    emoji: '🖤',
    tagline: "Grief belongs here. Give it space before you try to fix anything.",
    body: "The betrayed partner speaks for up to 10 minutes about what has been lost — the sense of safety, the version of your partner they believed in, the future they imagined. The betraying partner does not defend, explain, or comfort. They witness. Then switch and share what you, as the one who caused the harm, are grieving too.",
    duration: '25–35 min',
    prompts: [
      "What I grieve most about what happened is...",
      "A version of us — or you — that I am mourning is...",
      "Something I thought was certain that now feels uncertain is...",
    ],
    reflection: "What does giving grief its own space feel like for each of you?",
  },
  {
    id: 10, day: 3, program: 'infidelity-recovery',
    title: 'Full Accountability',
    emoji: '🪞',
    tagline: "Accountability without minimizing is what makes repair possible.",
    body: "The betraying partner writes and reads a full accountability statement — not an apology that explains the affair away, but an honest reckoning with the harm caused. No 'but' statements. No reasons that excuse. Just: I did this. I see what it did to you. I take responsibility.",
    duration: '30 min',
    prompts: [
      "The specific harm I caused you — that I fully own — is...",
      "When I minimize or explain, what I am really avoiding is...",
      "What you deserve to hear from me, without conditions, is...",
    ],
    reflection: "Did the accountability land as intended? What would make it land more fully?",
  },
  {
    id: 11, day: 4, program: 'infidelity-recovery',
    title: 'The Why Conversation',
    emoji: '🌀',
    tagline: "Understanding why is not forgiveness — it is the map back to each other.",
    body: "This is not about excusing what happened. It is about understanding the conditions — personal, relational, situational — that made the betrayal possible. Both partners share their perspectives: what was missing, what went unspoken, what each person was carrying alone. Honesty here is a gift to both of you.",
    duration: '30–40 min',
    prompts: [
      "Something I had been carrying alone in this relationship before this happened was...",
      "What I wish I had said instead of doing what I did was...",
      "Looking back, a need that was going unmet for me was...",
    ],
    reflection: "What do you now understand about yourselves — and each other — that you did not before?",
  },
  {
    id: 12, day: 5, program: 'infidelity-recovery',
    title: 'The Forgiveness Question',
    emoji: '🌿',
    tagline: "Forgiveness is a direction, not a destination you arrive at today.",
    body: "Neither partner is required to feel forgiving right now. The exercise is to explore — out loud, together — what forgiveness means to each of you. What would it look like? What would need to happen first? What do you need to release for yourself, separate from the relationship? You are not being asked to rush. You are being asked to look at it together.",
    duration: '20–25 min',
    prompts: [
      "When I think about forgiveness, the first feeling that comes up is...",
      "What I would need to see, consistently, before I could begin to forgive is...",
      "One thing I am willing to let go of — just for today — is...",
    ],
    reflection: "Where are you, honestly, on the road toward forgiveness?",
  },
  {
    id: 13, day: 6, program: 'infidelity-recovery',
    title: 'Rebuilding Together',
    emoji: '🧱',
    tagline: "You are not rebuilding what was — you are building something that never existed before.",
    body: "Together, name five concrete commitments you are each making to the rebuilt relationship. Not promises to never hurt each other — but specific, behavioral, observable commitments. Write them down. Read them to each other. This is the blueprint.",
    duration: '25–30 min',
    prompts: [
      "One new agreement I am prepared to honor from this point forward is...",
      "Something I need from you — that is specific and achievable — is...",
      "A boundary I need in this new version of us is...",
    ],
    reflection: "What does a relationship worth rebuilding actually look like to each of you?",
  },
  {
    id: 14, day: 7, program: 'infidelity-recovery',
    title: 'One Day Forward',
    emoji: '🌅',
    tagline: "The work is long. Today you simply choose to continue.",
    body: "Reflect on the first six days together. What has surfaced? What has shifted? What remains unresolved? Each partner names one thing they are proud of themselves for — and one thing they are grateful for in the other. Then make a shared commitment to return to this program tomorrow.",
    duration: '20 min',
    prompts: [
      "Something I am proud of myself for this week is...",
      "Something I noticed in you this week that gave me hope is...",
      "One thing I am bringing with me into tomorrow is...",
    ],
    reflection: "Why are you choosing to continue? Say it out loud.",
  },

  // ── TRUST REBUILDING ────────────────────────────────────────────
  {
    id: 15, day: 1, program: 'trust-rebuilding',
    title: 'Map the Breach',
    emoji: '🗺️',
    tagline: "You cannot repair what you have not clearly named.",
    body: "Each partner takes turns describing — from their own perspective — where trust eroded. Not to assign blame, but to create a shared, honest picture. What happened? When? What was the impact? Understanding the breach is the first step toward repairing it.",
    duration: '20–25 min',
    prompts: [
      "The moment I first noticed trust was eroding was...",
      "What broke my trust specifically was...",
      "The impact that had on how I showed up in this relationship was...",
    ],
    reflection: "Did you both see the same breach? What surprised you about your partner's account?",
  },
  {
    id: 16, day: 2, program: 'trust-rebuilding',
    title: 'New Agreements',
    emoji: '📋',
    tagline: "New trust needs new agreements — not just renewed hope.",
    body: "Together, draft three to five specific new agreements for how you will operate going forward. These should be concrete, behavioral, and mutually chosen — not ultimatums. What will you each do differently? What will you stop doing? What will you start doing?",
    duration: '25–30 min',
    prompts: [
      "An agreement I need from you around honesty is...",
      "Something I am willing to commit to — consistently — is...",
      "One pattern we need to retire from this relationship is...",
    ],
    reflection: "Do both of you feel these agreements are fair and achievable? What would make them stronger?",
  },
  {
    id: 17, day: 3, program: 'trust-rebuilding',
    title: 'The Consistency Test',
    emoji: '📐',
    tagline: "Trust is rebuilt in small, repeated actions — not grand gestures.",
    body: "Identify three small, daily behaviors that would signal trustworthiness to your partner. These do not have to be dramatic. They just have to be consistent. Share your lists, then commit to practicing them for the next seven days.",
    duration: '15–20 min',
    prompts: [
      "A small daily action that would mean the world to me is...",
      "Something I have been doing inconsistently that I want to change is...",
      "When you follow through on small things, I feel...",
    ],
    reflection: "Which of these commitments feels hardest for you — and why?",
  },
  {
    id: 18, day: 4, program: 'trust-rebuilding',
    title: 'Transparent Window',
    emoji: '🪟',
    tagline: "Transparency is not surveillance — it is a gift you give willingly.",
    body: "Talk openly about what transparency looks like in your specific relationship — where openness helps rebuild trust, and where it shades into control. Find the line together. Agree on three areas where you will practice proactive transparency this week.",
    duration: '20 min',
    prompts: [
      "An area where I need more openness from you is...",
      "Something I am willing to be more transparent about is...",
      "Where transparency has felt invasive rather than healing is...",
    ],
    reflection: "What is the difference between transparency that heals and transparency that controls?",
  },
  {
    id: 19, day: 5, program: 'trust-rebuilding',
    title: 'Verification Without Shame',
    emoji: '✅',
    tagline: "Checking in is not distrust — it is the practice of rebuilding it.",
    body: "Design a simple, agreed-upon check-in ritual — a brief daily exchange that creates accountability without becoming surveillance. This is something both partners choose and consent to. It can be as simple as a good morning text or an end-of-day share. Make it yours.",
    duration: '15 min',
    prompts: [
      "A check-in ritual I would actually welcome is...",
      "When I check in on you, I want it to feel like...",
      "Something that would make me feel less anxious day-to-day is...",
    ],
    reflection: "Does your check-in ritual feel like connection or monitoring? Adjust until it feels like the former.",
  },
  {
    id: 20, day: 6, program: 'trust-rebuilding',
    title: 'Restored Safety',
    emoji: '🏠',
    tagline: "Safety is not a feeling that returns all at once — it is built room by room.",
    body: "Each partner identifies one area of the relationship where they feel safe again — and one where they still do not. Share both. Listen to both. This exercise is not about fixing the unsafe areas today. It is about mapping where you are, honestly, so you can move from here with intention.",
    duration: '20–25 min',
    prompts: [
      "An area where I feel safe again is...",
      "An area where I still do not feel fully safe is...",
      "What would help me feel safer in that area is...",
    ],
    reflection: "What does the path to full safety look like for both of you?",
  },
  {
    id: 21, day: 7, program: 'trust-rebuilding',
    title: 'The Trust Ritual',
    emoji: '🕯️',
    tagline: "Trust needs a practice — not just a promise.",
    body: "Create a weekly ritual — something small and shared — that you both commit to as a symbol of the trust you are rebuilding. It could be a walk, a weekly honest conversation, a shared meal without phones. Something that says: we are still choosing each other.",
    duration: '20 min',
    prompts: [
      "A weekly ritual I would love for us to have is...",
      "What this ritual would represent to me is...",
      "The thing that matters most to me about how we move forward is...",
    ],
    reflection: "How does it feel to create something new — just for this version of us?",
  },

  // ── COMMUNICATION RESET ─────────────────────────────────────────
  {
    id: 22, day: 1, program: 'communication-reset',
    title: 'The Audit',
    emoji: '📊',
    tagline: "You cannot reset what you have not honestly assessed.",
    body: "Each partner rates your current communication in five areas (1–10): listening, expressing needs, handling conflict, emotional honesty, and follow-through. Share your scores and the reasons behind them. No defending — just data.",
    duration: '15–20 min',
    prompts: [
      "The area where I think our communication breaks down most often is...",
      "When I try to bring up something hard, what usually happens is...",
      "What I wish our conversations felt more like is...",
    ],
    reflection: "Where did your assessments align? Where did they diverge — and what does that tell you?",
  },
  {
    id: 23, day: 2, program: 'communication-reset',
    title: 'Deep Listening',
    emoji: '👂',
    tagline: "Most people listen to respond. Tonight you listen to understand.",
    body: "Partner A speaks for 5 uninterrupted minutes about something they have been carrying emotionally. Partner B listens without planning a response, then reflects back what they heard — not their interpretation, but what their partner actually said. Then switch.",
    duration: '20–25 min',
    prompts: [
      "Something I have been carrying that I have not said fully is...",
      "A feeling I keep starting to share but stopping is...",
      "When I do not feel heard, what I usually do instead is...",
    ],
    reflection: "What did it feel like to be truly listened to — without interruption or rebuttal?",
  },
  {
    id: 24, day: 3, program: 'communication-reset',
    title: 'Emotional Vocabulary',
    emoji: '🎨',
    tagline: "If you can name it, you can share it — without exploding or shutting down.",
    body: "Each partner writes down five emotions they experience most frequently in the relationship — then five they almost never name out loud. Read your lists to each other. Discuss one emotion from each list: where does it come from, and what do you do with it?",
    duration: '20 min',
    prompts: [
      "An emotion I feel often in this relationship but rarely name is...",
      "When I feel that emotion, what I usually do is...",
      "An emotion I wish I could express more freely to you is...",
    ],
    reflection: "What emotion are you most afraid to name — and why?",
  },
  {
    id: 25, day: 4, program: 'communication-reset',
    title: 'Trigger Mapping',
    emoji: '⚡',
    tagline: "Your triggers are not your partner's fault — but they are your partner's business.",
    body: "Each partner identifies two communication triggers — words, tones, or patterns that cause them to shut down or escalate. Describe the trigger, what it activates in you, and what you need from your partner when it happens. This is a gift of self-knowledge, offered freely.",
    duration: '20–25 min',
    prompts: [
      "A word or tone that immediately puts me on the defensive is...",
      "When that happens, what I need from you most is...",
      "A trigger I carry from before this relationship that shows up here is...",
    ],
    reflection: "Can you commit to using this knowledge to de-escalate rather than weaponize?",
  },
  {
    id: 26, day: 5, program: 'communication-reset',
    title: 'The Clean Request',
    emoji: '🎯',
    tagline: "A clear request is an act of respect — for both of you.",
    body: "Practice making requests without blame, without hints, and without expecting your partner to read your mind. Each partner identifies one need they have been expressing indirectly — through complaints, silence, or resentment — and reframes it as a direct, kind, specific request.",
    duration: '15–20 min',
    prompts: [
      "Something I have been hinting at instead of asking directly is...",
      "What I actually need — said plainly — is...",
      "A way I can ask for this that feels respectful to both of us is...",
    ],
    reflection: "What made the direct version harder to say — and easier to receive?",
  },
  {
    id: 27, day: 6, program: 'communication-reset',
    title: 'The Repair Move',
    emoji: '🩹',
    tagline: "Repair is a skill. Practice it before you need it.",
    body: "Discuss your go-to repair moves — the things you do or say to soften tension during a conflict. If you do not have repair moves yet, invent them together right now. A phrase, a signal, a gesture. Something that says: I am still with you, even in this hard moment.",
    duration: '15–20 min',
    prompts: [
      "When a conversation gets heated, I usually...",
      "A phrase or gesture I could use to signal I want to de-escalate is...",
      "What I need to hear from you when things get intense is...",
    ],
    reflection: "When did a repair move work well for you in the past? What made it land?",
  },
  {
    id: 28, day: 7, program: 'communication-reset',
    title: 'Appreciation Language',
    emoji: '🌸',
    tagline: "Appreciation said out loud does what all the hard conversations cannot do alone.",
    body: "End the week by expressing genuine, specific appreciation for how your partner communicates — even the parts that are still growing. Then name one communication strength you see in yourself that you want to keep building. Celebrate the work you have both done this week.",
    duration: '15 min',
    prompts: [
      "Something you do in conversation that I genuinely appreciate is...",
      "A moment this week where you communicated well was...",
      "Something I learned about myself as a communicator this week is...",
    ],
    reflection: "What is the one communication habit you are most committed to carrying forward?",
  },

  // ── MARRIAGE STRENGTHENING ──────────────────────────────────────
  {
    id: 29, day: 1, program: 'marriage-strengthening',
    title: 'The Foundation',
    emoji: '🏛️',
    tagline: "Strong marriages are built on knowing — not assuming — each other's truths.",
    body: "Each partner answers three foundational questions: What brought you into this marriage? What do you believe marriage is for? What is one thing about your spouse that still surprises you? Share your answers without judgment. Let this be a reminder of who you chose.",
    duration: '20–25 min',
    prompts: [
      "What drew me to you — and still draws me — is...",
      "What I believe marriage is for, at its deepest level, is...",
      "Something about you that still surprises or moves me is...",
    ],
    reflection: "What does this conversation remind you of about the foundation you built together?",
  },
  {
    id: 30, day: 2, program: 'marriage-strengthening',
    title: 'Love Language Lab',
    emoji: '💌',
    tagline: "Love given in your language is effort. Love given in their language is mastery.",
    body: "Each partner shares their top two love languages and gives a specific recent example of a moment when they felt loved — and a moment when they did not, despite good intentions. Then swap, and commit to one love language act this week.",
    duration: '20 min',
    prompts: [
      "My primary love language is... and what that looks like from you is...",
      "A recent moment when I felt deeply loved by you was...",
      "A moment when I suspect you were trying to love me but it did not land was...",
    ],
    reflection: "What is one small act you can do this week that speaks directly to your spouse's love language?",
  },
  {
    id: 31, day: 3, program: 'marriage-strengthening',
    title: 'Shared Vision',
    emoji: '🔭',
    tagline: "A marriage without a shared vision drifts. Tonight you set your coordinates.",
    body: "Each partner describes their vision for the next five years of your marriage — what it looks and feels like, what you have built, who you have become. Then find the overlap and draft three shared goals your marriage is moving toward together.",
    duration: '25–30 min',
    prompts: [
      "In five years, I want our marriage to feel like...",
      "Something I want us to build together that we have not yet is...",
      "The version of us I am working toward looks like...",
    ],
    reflection: "Where did your visions align most powerfully? What does that tell you about who you are together?",
  },
  {
    id: 32, day: 4, program: 'marriage-strengthening',
    title: 'Gratitude Ritual',
    emoji: '🙏',
    tagline: "Gratitude, practiced daily, becomes the climate of your marriage.",
    body: "Each partner shares five specific, genuine appreciations for the other — not general praise, but moments, qualities, and efforts they are truly grateful for. Then design a short gratitude ritual you can do every day: even one minute counts.",
    duration: '20 min',
    prompts: [
      "Something you do that I never want to take for granted is...",
      "A quality in you that makes our marriage stronger is...",
      "A moment recently where I thought: I am so glad I married you was...",
    ],
    reflection: "How does expressing gratitude out loud change the feeling in the room?",
  },
  {
    id: 33, day: 5, program: 'marriage-strengthening',
    title: 'Adventure Contract',
    emoji: '🗺️',
    tagline: "Novelty is not a luxury in marriage — it is maintenance.",
    body: "Together, plan one adventure for each of the next three months. It does not have to be expensive or elaborate. It just has to be new. A place you have never been. A meal you have never cooked. A conversation you have never had. Newness keeps the spark lit.",
    duration: '20–25 min',
    prompts: [
      "Something I have always wanted to experience with you is...",
      "A small adventure we could do in the next two weeks is...",
      "Something new I want us to try together this year is...",
    ],
    reflection: "What does planning something new together stir up in you?",
  },
  {
    id: 34, day: 6, program: 'marriage-strengthening',
    title: 'The Hard Conversation',
    emoji: '🌩️',
    tagline: "The conversations you avoid are the ones slowly eroding you.",
    body: "Each partner names one topic that has been avoided — a real tension, concern, or unresolved issue. Then take turns speaking to that topic with honesty and without blame. The goal is not resolution tonight. The goal is that it gets said and heard.",
    duration: '25–30 min',
    prompts: [
      "Something I have been avoiding bringing up is...",
      "The reason I have been avoiding it is...",
      "What I would need from you to talk about this more often is...",
    ],
    reflection: "What is the cost of continuing to avoid this — and the reward of facing it together?",
  },
  {
    id: 35, day: 7, program: 'marriage-strengthening',
    title: 'The Renewal',
    emoji: '🕯️',
    tagline: "Commitment renewed with full knowing is the most powerful kind.",
    body: "Each partner writes a short, personal renewal vow — not the ceremonial kind, but a true, present-day statement of who you are choosing and why. Read them to each other. Let this be a moment, not a performance.",
    duration: '25–30 min',
    prompts: [
      "I choose you today, knowing what I know now, because...",
      "Something I commit to offering you in this marriage is...",
      "The version of us I am building toward, with you, is...",
    ],
    reflection: "What did saying those words — right now, today — feel like?",
  },

  // ── PRE-MARRIAGE ALIGNMENT ──────────────────────────────────────
  {
    id: 36, day: 1, program: 'pre-marriage',
    title: 'Values First',
    emoji: '🧭',
    tagline: "Your values are the contract beneath the contract — know each other's before you sign.",
    body: "Each partner lists their top five personal values — what guides your decisions, defines your character, and shapes your non-negotiables. Share your lists and discuss where they align, where they differ, and what those differences will mean in daily life.",
    duration: '20–25 min',
    prompts: [
      "The five values that most guide my life are...",
      "A value I hold that I have not made explicit to you is...",
      "A place where our values might create friction is...",
    ],
    reflection: "What do your values tell each of you about who you are as a partner — and what you will need from each other?",
  },
  {
    id: 37, day: 2, program: 'pre-marriage',
    title: 'The Money Talk',
    emoji: '💰',
    tagline: "Couples who talk about money before marriage fight about it less during.",
    body: "Cover the essentials: income, debt, spending habits, savings goals, financial fears, and how you each envision managing money as a married couple. No topic is off-limits tonight. Financial transparency before marriage is an act of love.",
    duration: '30–40 min',
    prompts: [
      "My relationship with money growing up was...",
      "Something about my current financial situation you should know is...",
      "My vision for how we manage money together is...",
    ],
    reflection: "What financial differences between you will require the most intentional conversation going forward?",
  },
  {
    id: 38, day: 3, program: 'pre-marriage',
    title: 'Where You Come From',
    emoji: '🌳',
    tagline: "You are not just marrying each other — you are inheriting each other's families.",
    body: "Each partner shares how their family of origin handled love, conflict, money, and roles. What did you inherit that you want to keep? What patterns do you want to break? How will you handle family relationships and holidays as a married couple?",
    duration: '25–30 min',
    prompts: [
      "Something I absorbed from my family that I want to bring into our marriage is...",
      "A pattern from my family I am committed to changing is...",
      "When it comes to our families after we marry, I need us to agree on...",
    ],
    reflection: "What do you each need to feel like your family is honored — without it overrunning your marriage?",
  },
  {
    id: 39, day: 4, program: 'pre-marriage',
    title: 'How We Fight',
    emoji: '⚔️',
    tagline: "Conflict is inevitable. How you handle it is a choice you can make now.",
    body: "Each partner describes their default conflict style — do you pursue, withdraw, get loud, go cold? Share where that came from, how it affects your partner, and what you are each willing to change. Then agree on three rules of engagement for your marriage.",
    duration: '25–30 min',
    prompts: [
      "When conflict comes up, my default pattern is...",
      "What my pattern does to you — that I am aware of — is...",
      "A conflict rule I want us to commit to in our marriage is...",
    ],
    reflection: "What would it look like to have conflict that actually strengthens rather than damages your relationship?",
  },
  {
    id: 40, day: 5, program: 'pre-marriage',
    title: 'Children & Parenting',
    emoji: '👶',
    tagline: "Alignment on parenting before you need it is the most loving thing you can do for your future family.",
    body: "Discuss: Do you want children? How many? How do you envision dividing parenting responsibilities? What values do you want to raise children with? What do you want to do differently than your own parents did? Get specific — this conversation is too important to defer.",
    duration: '30–40 min',
    prompts: [
      "My vision for our family — including children — is...",
      "A parenting approach I feel strongly about is...",
      "Something from how I was raised that I want to be intentional about reproducing — or not reproducing — is...",
    ],
    reflection: "Where are you aligned on parenting — and where do you still have work to do before you are fully on the same page?",
  },
  {
    id: 41, day: 6, program: 'pre-marriage',
    title: 'Roles & Responsibilities',
    emoji: '🏡',
    tagline: "Unspoken assumptions about roles become resentments. Say them out loud now.",
    body: "Each partner shares their expectations around household labor, career ambitions, caregiving, religious practice, social life, and intimacy. Where do your visions align? Where are there gaps? Negotiate — openly, without shame — until you have something you can both live with.",
    duration: '30–40 min',
    prompts: [
      "My expectation about household responsibilities is...",
      "Something I assume about our life together that I have not said explicitly is...",
      "An area where I need to understand your expectations better is...",
    ],
    reflection: "Which assumption, left unspoken, has the most potential to cause conflict — and how will you address it now?",
  },
  {
    id: 42, day: 7, program: 'pre-marriage',
    title: 'The Dream',
    emoji: '✨',
    tagline: "Before the logistics — remember why you are choosing this.",
    body: "Each partner describes the dream: the life you want to build together, the feeling you want your marriage to carry, the people you want to become. Not the checklist — the dream. Then share what you are most excited about, and what you are most nervous about, going into this marriage.",
    duration: '20–25 min',
    prompts: [
      "The life I dream of building with you is...",
      "What I am most excited about in marrying you is...",
      "Something I am quietly nervous about that I want to say out loud is...",
    ],
    reflection: "What does hearing each other's dream do to your commitment to this marriage?",
  },

  // ── EMOTIONAL SAFETY BUILDING ────────────────────────────────────
  {
    id: 43, day: 1, program: 'emotional-safety',
    title: 'Safety Audit',
    emoji: '🛡️',
    tagline: "You cannot build what you have not yet measured.",
    body: "Each partner rates their current sense of emotional safety in the relationship (1–10) and shares the reasons. Not as an accusation — as an honest map. What makes you feel safe? What makes you feel unsafe? This conversation is the foundation of everything that follows.",
    duration: '20–25 min',
    prompts: [
      "My current emotional safety in this relationship is a... because...",
      "Something that consistently makes me feel safe with you is...",
      "Something that consistently makes me feel less safe is...",
    ],
    reflection: "What surprised you about your partner's safety number — or their reasons?",
  },
  {
    id: 44, day: 2, program: 'emotional-safety',
    title: 'Trigger Tender',
    emoji: '🌡️',
    tagline: "Your partner's triggers are not attacks on you — they are windows into their history.",
    body: "Each partner shares two emotional triggers — what sets them off, where it came from, and what it feels like from the inside. The other partner listens without defending or minimizing. Then ask: what can I do when this gets activated that would actually help?",
    duration: '20–25 min',
    prompts: [
      "A trigger I have that shows up in this relationship is...",
      "When I am triggered, what is happening inside me is...",
      "What would actually help me in those moments is...",
    ],
    reflection: "What will you do differently now that you understand this about each other?",
  },
  {
    id: 45, day: 3, program: 'emotional-safety',
    title: 'The Validation Practice',
    emoji: '💙',
    tagline: "You do not have to agree with a feeling to validate it. You just have to acknowledge it is real.",
    body: "Partner A shares a feeling or experience from the past week that felt hard or unacknowledged. Partner B practices validating it — without fixing, explaining, or disagreeing. Use language like: that makes sense, I hear you, I can see why you felt that. Then switch.",
    duration: '20 min',
    prompts: [
      "Something I felt recently that I did not feel fully heard about is...",
      "When I share something difficult, what I need most from you is...",
      "A time you validated me well — that I want more of — was...",
    ],
    reflection: "How does it feel to be validated without the other person needing to fix or change anything?",
  },
  {
    id: 46, day: 4, program: 'emotional-safety',
    title: 'Naming Needs',
    emoji: '🗣️',
    tagline: "Unspoken needs do not disappear — they become pressure.",
    body: "Each partner identifies three emotional needs that are currently going unmet — then shares them, plainly and without blame. This is not a complaint session. It is a request session. Frame each need as a specific ask, not a grievance.",
    duration: '20–25 min',
    prompts: [
      "An emotional need I have that is not being met right now is...",
      "What meeting that need would look like is...",
      "A need I am afraid to name because I fear your reaction is...",
    ],
    reflection: "Which of your needs, now named, feels most urgent to address together?",
  },
  {
    id: 47, day: 5, program: 'emotional-safety',
    title: 'Soft Disclosure',
    emoji: '🤍',
    tagline: "Vulnerability is a muscle. You build it in small reps.",
    body: "Each partner shares something small but genuine that they do not usually say — a quiet fear, a soft longing, an embarrassing hope. Nothing is too small. The goal is simply to practice being known without armor. The other partner receives it with care, without analysis.",
    duration: '15–20 min',
    prompts: [
      "Something I rarely admit, even to myself, is...",
      "A quiet fear I carry in this relationship is...",
      "A hope I have not said out loud because it feels too soft is...",
    ],
    reflection: "What did sharing that — or receiving that — open up in you?",
  },
  {
    id: 48, day: 6, program: 'emotional-safety',
    title: 'Repair Ladder',
    emoji: '🪜',
    tagline: "Knowing how to come back is as important as not leaving.",
    body: "Design a shared repair process for when emotional safety breaks down. What does each of you need after a rupture — space, words, touch, time? How will you signal that you are ready to reconnect? Write out your repair ladder: a shared, agreed-upon path back to safety.",
    duration: '20–25 min',
    prompts: [
      "After a hard conflict, what I usually need before I can reconnect is...",
      "A repair signal I could use — that would not feel like surrender — is...",
      "What helps me know you still want to be close after we fight is...",
    ],
    reflection: "Does your repair ladder feel fair and workable for both of you?",
  },
  {
    id: 49, day: 7, program: 'emotional-safety',
    title: 'Secure Base',
    emoji: '⚓',
    tagline: "A secure relationship is not the absence of hardship — it is knowing you face it together.",
    body: "Each partner describes what a secure base feels like in this relationship — the moments they feel most anchored, most held, most free to be fully themselves. Then name one thing each of you will do, starting today, to make this relationship that secure base for each other.",
    duration: '20 min',
    prompts: [
      "A moment in our relationship when I felt most secure and held was...",
      "What makes this relationship feel like home to me is...",
      "One thing I will do to be a more secure base for you is...",
    ],
    reflection: "What does a relationship that feels fully safe make possible for each of you?",
  },

  // ── CONFLICT REPAIR ──────────────────────────────────────────────
  {
    id: 50, day: 1, program: 'conflict-repair',
    title: 'Conflict Autopsy',
    emoji: '🔬',
    tagline: "Understanding the anatomy of your last fight is better than apologizing for it.",
    body: "Choose a recent conflict and walk through it together — not to relitigate it, but to understand it. When did it start? What escalated it? What did each of you actually need in that moment? What would have helped? Treat it like scientists studying a pattern, not combatants defending territory.",
    duration: '25–30 min',
    prompts: [
      "The conflict started when...",
      "What I actually needed in that moment — that I did not ask for clearly — was...",
      "The moment it escalated beyond what was necessary was when...",
    ],
    reflection: "What does this fight reveal about a recurring pattern between you two?",
  },
  {
    id: 51, day: 2, program: 'conflict-repair',
    title: 'Escalation Map',
    emoji: '📈',
    tagline: "Most couples have one or two escalation paths they keep walking. Know yours.",
    body: "Together, map your escalation pattern — the sequence of moves and counter-moves that takes a small disagreement to a full blowout. Who pursues, who withdraws? Who gets loud, who goes cold? Name it out loud. A pattern named is a pattern you can interrupt.",
    duration: '20–25 min',
    prompts: [
      "Our typical escalation sequence looks like...",
      "My role in the escalation is usually...",
      "The moment I know we have crossed into dangerous territory is...",
    ],
    reflection: "At what point in the escalation could you most effectively intervene — and what would that look like?",
  },
  {
    id: 52, day: 3, program: 'conflict-repair',
    title: 'The Pause',
    emoji: '⏸️',
    tagline: "The most powerful conflict tool is also the simplest: stop before it breaks.",
    body: "Practice calling a genuine pause — not to avoid the conflict, but to prevent escalation and return when both partners can engage productively. Agree on a pause signal, a minimum cooling-off time, and a commitment to return. The pause only works if you actually come back.",
    duration: '15–20 min',
    prompts: [
      "A pause signal I could use that would not feel like stonewalling is...",
      "When I call a pause, what I am trying to do is...",
      "What I need during a pause in order to come back ready is...",
    ],
    reflection: "What is the difference between a pause that heals and a withdrawal that damages?",
  },
  {
    id: 53, day: 4, program: 'conflict-repair',
    title: 'Apology Language',
    emoji: '🕊️',
    tagline: "Not all apologies land. Learn to give the one your partner actually receives.",
    body: "Discuss what a meaningful apology looks and sounds like to each of you. What are the elements that make an apology feel real — acknowledgment, regret, understanding the impact, a changed behavior commitment? Practice offering one now for something small but real.",
    duration: '20–25 min',
    prompts: [
      "An apology that genuinely lands for me includes...",
      "What makes an apology feel hollow or insufficient is...",
      "Something I owe you an apology for — that I have not said cleanly — is...",
    ],
    reflection: "What would shift in your relationship if your apologies consistently landed the way your partner needs them to?",
  },
  {
    id: 54, day: 5, program: 'conflict-repair',
    title: 'The Need Beneath',
    emoji: '🧅',
    tagline: "Most arguments are not about what they are about — dig one layer deeper.",
    body: "Think of a recurring argument. Beneath the surface topic — money, chores, time — what is the actual unmet need? Security? Respect? Being chosen? Each partner names the deeper need driving their position. When you speak from the need rather than the complaint, everything changes.",
    duration: '20 min',
    prompts: [
      "Beneath my complaints about... the deeper need is...",
      "What I am really asking for when I bring that up is...",
      "A need I have never named clearly in our conflicts is...",
    ],
    reflection: "What changes when you speak from your need rather than your grievance?",
  },
  {
    id: 55, day: 6, program: 'conflict-repair',
    title: 'Rules of Engagement',
    emoji: '📜',
    tagline: "Every relationship deserves its own rules for how conflict gets handled.",
    body: "Together, draft your personal Rules of Engagement — the agreements that govern how you will fight, de-escalate, and repair. What is always off-limits? What are you each committed to doing differently? Write them down. Post them somewhere you can both see.",
    duration: '20–25 min',
    prompts: [
      "Something that is absolutely off-limits in our conflicts is...",
      "One rule I need us to commit to — that I have been failing at — is...",
      "An agreement that would change how we fight for the better is...",
    ],
    reflection: "Do these rules feel like protection or restriction? What does that tell you?",
  },
  {
    id: 56, day: 7, program: 'conflict-repair',
    title: 'The Repair Ritual',
    emoji: '🔥',
    tagline: "Conflict does not have to leave damage — it can leave closeness.",
    body: "Create a shared repair ritual — a specific, agreed-upon way you will reconnect after a conflict is resolved. It could be a phrase, a gesture, a shared action. Something that signals: we came through that, and we are still us. Practice it right now, for something real.",
    duration: '20 min',
    prompts: [
      "After a conflict, what helps me feel reconnected to you is...",
      "A repair ritual that would feel meaningful — not performative — is...",
      "The thing I want to feel when we come out the other side of a hard conversation is...",
    ],
    reflection: "How does having a repair ritual change the way you feel going into a conflict?",
  },

  // ── CONFLICT REPAIR: Days 8–21 ───────────────────────────────────
  {
    id: 57, day: 8, program: 'conflict-repair',
    title: 'Your Conflict Style',
    emoji: '🪞',
    tagline: "You each came into this relationship with a conflict style already baked in — knowing it changes everything.",
    body: "Each partner reflects on how they handled conflict growing up — what they witnessed, what they learned was safe or dangerous. Then name your current default: do you pursue or withdraw? Go hot or go cold? There is no right answer — just the truth of how you are wired.",
    duration: '20–25 min',
    prompts: [
      "Growing up, conflict in my home looked like...",
      "The pattern I brought into this relationship from that is...",
      "My default in conflict with you is to...",
    ],
    reflection: "How much of your conflict style is chosen — and how much is inherited?",
  },
  {
    id: 58, day: 9, program: 'conflict-repair',
    title: 'The Pursuer and the Withdrawer',
    emoji: '🏃',
    tagline: "One of you chases the conversation. One of you closes the door. Both moves make sense — and both make it worse.",
    body: "Most couples have a pursuer and a withdrawer — one who pushes to resolve, one who pulls away to self-protect. Identify which role each of you tends to play. Talk about what each role feels like from the inside, and what each looks like from the outside. No blame — just recognition.",
    duration: '20 min',
    prompts: [
      "When conflict rises, my instinct is to...",
      "What the other person's behavior looks like from where I am standing is...",
      "What I actually need when I am in that mode — that I rarely ask for — is...",
    ],
    reflection: "What would help the pursuer feel safe enough to slow down, and the withdrawer feel safe enough to stay?",
  },
  {
    id: 59, day: 10, program: 'conflict-repair',
    title: 'When the Body Takes Over',
    emoji: '💓',
    tagline: "Flooding is not weakness — it is biology. But it ends conversations before they can heal.",
    body: "Flooding — the physiological state of overwhelm during conflict — is when your heart races, your thinking narrows, and nothing productive is possible. Each partner describes what flooding feels like in their body and what triggers it. Recognizing the signs early is the first step to stopping the spiral.",
    duration: '20 min',
    prompts: [
      "In our conflicts, I notice flooding in my body when...",
      "The physical signs that tell me I am flooded are...",
      "What helps me come back down and stay in the conversation is...",
    ],
    reflection: "What would change in your conflicts if you both recognized flooding and named it before it took over?",
  },
  {
    id: 60, day: 11, program: 'conflict-repair',
    title: 'Stay in the Room',
    emoji: '🧱',
    tagline: "Staying present during hard conversations is a skill — and you can build it.",
    body: "Today you practice the hardest thing in conflict: staying present when every instinct says run or attack. Each partner practices naming their internal state out loud — without accusing the other. 'I am starting to shut down' is more useful than silence. 'I am feeling defensive' is more useful than a counterattack.",
    duration: '20 min',
    prompts: [
      "When I notice myself checking out in a conversation, it usually means...",
      "A phrase I could use to stay present instead of shutting down is...",
      "Something that helps me stay open — even when it is hard — is...",
    ],
    reflection: "What does it mean to your partner when you stay present in a hard moment instead of leaving?",
  },
  {
    id: 61, day: 12, program: 'conflict-repair',
    title: 'Zero Contempt',
    emoji: '🚫',
    tagline: "Contempt is the single most corrosive thing a couple can do to each other — and it is very learnable to stop.",
    body: "Contempt — eye rolls, sarcasm, mockery, superiority — is not just conflict. It is a statement that your partner is beneath you. Each partner honestly names a contemptuous behavior they have shown, without minimizing it. Then commit to one specific replacement behavior for each.",
    duration: '20–25 min',
    prompts: [
      "A contemptuous behavior I have shown in conflict — even subtle ones — is...",
      "What I am communicating when I do that, even if I do not mean to, is...",
      "What I will do instead when I feel that urge is...",
    ],
    reflection: "What does a relationship without contempt feel like — and how far are you from that right now?",
  },
  {
    id: 62, day: 13, program: 'conflict-repair',
    title: 'The Soft Startup',
    emoji: '🌅',
    tagline: "How you begin a hard conversation almost always determines how it ends.",
    body: "A harsh startup — opening with blame, criticism, or accusation — almost always triggers defensiveness and ends badly. Practice rewriting three recent conflict openings using a soft startup: describe what happened, how you feel, and what you need — without attacking the other person. Then practice actually delivering one.",
    duration: '20–25 min',
    prompts: [
      "A recent conversation I started badly sounded like...",
      "Rewritten with a soft startup, that same conversation could open with...",
      "The part that is hardest for me to soften when I am upset is...",
    ],
    reflection: "What is the difference between softening your startup and swallowing what you need to say?",
  },
  {
    id: 63, day: 14, program: 'conflict-repair',
    title: 'Mid-Conflict Tools',
    emoji: '🧰',
    tagline: "You do not have to wait until after the fight to change how it goes.",
    body: "Most couples try to repair after a conflict ends — but repair mid-conflict is where real skill lives. Together, name three specific things either of you can do or say during a conflict to interrupt the spiral before it gets bad. Agree to actually try them in the next real disagreement.",
    duration: '20 min',
    prompts: [
      "Something I can say mid-conflict that slows things down is...",
      "A gesture or move that signals I want to de-escalate — not abandon — is...",
      "Something my partner does during conflict that actually helps me is...",
    ],
    reflection: "What would it feel like to have a conflict where both of you used these tools in real time?",
  },
  {
    id: 64, day: 15, program: 'conflict-repair',
    title: 'Humor as Repair',
    emoji: '😂',
    tagline: "The couples who can laugh together mid-fight have something real.",
    body: "Genuine humor — not sarcasm, not deflection — is one of the most powerful repair tools in a relationship. Think of a moment where laughter broke the tension between you. What made it work? How can you invite more of that into your conflicts — not to avoid hard things, but to remind each other you are on the same team?",
    duration: '15–20 min',
    prompts: [
      "A time when we laughed during or after a conflict, and it helped, was...",
      "The kind of humor that works between us in tense moments is...",
      "What makes humor feel healing versus dismissive in a conflict is...",
    ],
    reflection: "What does it mean to your relationship that you can still make each other laugh?",
  },
  {
    id: 65, day: 16, program: 'conflict-repair',
    title: 'The Body Reset',
    emoji: '🧘',
    tagline: "Your nervous system needs to come down before your mind can work right.",
    body: "Physical de-escalation is not a luxury — it is a prerequisite for resolution. Together, practice a two-minute physical reset: synchronized breathing, grounding, or simply sitting in silence with feet flat on the floor. Notice what shifts. Build this into your conflict protocol as a non-negotiable first step when flooding starts.",
    duration: '15–20 min',
    prompts: [
      "What my body feels like when I am deep in a conflict is...",
      "A physical reset that actually works for me is...",
      "If we agreed to pause and reset before re-engaging, what I would need is...",
    ],
    reflection: "What becomes possible in a conversation when both bodies are calm?",
  },
  {
    id: 66, day: 17, program: 'conflict-repair',
    title: 'The Residue',
    emoji: '🌫️',
    tagline: "The fight might be over — but what it left behind is still in the room.",
    body: "Even after a conflict resolves, there is often residue: lingering hurt, guardedness, a sense of distance. Each partner describes what the residue from your last significant fight feels like now. Name it honestly. Residue that is not acknowledged tends to accumulate — and it becomes the next fight.",
    duration: '20 min',
    prompts: [
      "After our last big conflict, what I was still carrying was...",
      "The part that still feels unresolved or tender for me is...",
      "What would help me fully release that residue is...",
    ],
    reflection: "What do you do with conflict residue right now — and is it working?",
  },
  {
    id: 67, day: 18, program: 'conflict-repair',
    title: 'The Post-Fight Check-In',
    emoji: '📋',
    tagline: "A fight you never revisit is a fight that never fully closes.",
    body: "Today you build a post-conflict check-in protocol — a structured, low-stakes way to revisit a fight after the heat has cooled. Not to reopen wounds, but to extract learning and restore full connection. Agree on a timing (24–48 hours after), an opener, and two to three questions you will always ask each other.",
    duration: '20 min',
    prompts: [
      "When revisiting a conflict later, something I find helpful to hear is...",
      "A question I would want us to always ask each other after a fight is...",
      "Something that helps me feel fully reconnected — beyond just resolving the issue — is...",
    ],
    reflection: "What is the difference between debriefing a fight and reopening it?",
  },
  {
    id: 68, day: 19, program: 'conflict-repair',
    title: 'Rebuilding Closeness',
    emoji: '🤝',
    tagline: "Closeness after conflict is not automatic — it is something you reach for.",
    body: "After conflict, many couples return to functional but not close. Today you deliberately rebuild closeness — not through more conversation, but through connection. Choose one shared activity that has nothing to do with what you were fighting about. Be present. Let the conflict be over.",
    duration: '20–30 min',
    prompts: [
      "Something we could do together right now that would help me feel close to you again is...",
      "After a hard conversation, what signals to me that we are really okay is...",
      "The way I want to feel at the end of a conflict is...",
    ],
    reflection: "What do you notice about how long it takes you to feel close again after a fight?",
  },
  {
    id: 69, day: 20, program: 'conflict-repair',
    title: 'Conflict as Growth',
    emoji: '🌱',
    tagline: "The couples who grow the most are not the ones who fight the least — they are the ones who fight better.",
    body: "Reframe your conflict history together. Look back at your most significant fights — not as failures, but as turning points. What did each one teach you? What changed because you went through it? Conflict, navigated well, is one of the fastest paths to depth and understanding in a relationship.",
    duration: '25 min',
    prompts: [
      "A conflict we went through that actually made us stronger was...",
      "Something I understand about you — or myself — because of a hard fight is...",
      "A belief I used to hold about conflict that has changed is...",
    ],
    reflection: "What would it mean for your relationship if every conflict you had from here forward made you closer?",
  },
  {
    id: 70, day: 21, program: 'conflict-repair',
    title: 'The Conflict Graduation',
    emoji: '🎓',
    tagline: "You came in fighting the same fights. You leave knowing how to fight for each other.",
    body: "Today you close the Conflict Repair program. Reflect on what shifted over these three weeks — not just in how you argue, but in how you see each other and yourselves. Share what you are most proud of. Then celebrate — not because conflict is over, but because you built something together through it.",
    duration: '25–30 min',
    prompts: [
      "The biggest shift I have noticed in us over this program is...",
      "Something I am proud of you for — in how you showed up — is...",
      "What I want to carry forward from this program is...",
    ],
    reflection: "What does it mean that you did this work together?",
  },

  // ── COMMUNICATION RESET: Days 8–30 ──────────────────────────────
  {
    id: 71, day: 8, program: 'communication-reset',
    title: 'The Authentic Voice',
    emoji: '🎙️',
    tagline: "Most of us have a version of ourselves we perform in relationships — today you step out of it.",
    body: "Think about the ways you edit yourself in conversation with your partner — the things you soften, exaggerate, omit, or perform. What is the version of you that shows up in conversation, and how close is that to the real one? Each partner names one thing they consistently perform versus one thing they genuinely feel.",
    duration: '20 min',
    prompts: [
      "Something I consistently perform — rather than feel — in our conversations is...",
      "A version of myself I am afraid to bring into our communication is...",
      "The real thing I want to say — that I usually wrap in something safer — is...",
    ],
    reflection: "What would your conversations sound like if you both came fully as yourselves?",
  },
  {
    id: 72, day: 9, program: 'communication-reset',
    title: 'Drop the Defense',
    emoji: '🛡️',
    tagline: "Defensiveness is not protection — it is a wall between you and being understood.",
    body: "Defensiveness turns every piece of feedback into an attack to be countered. Today you practice receiving something hard without defending it — just hearing it, acknowledging it, and staying curious. Each partner shares one piece of honest feedback. The other partner's only job is to receive it without explaining, justifying, or counterattacking.",
    duration: '20–25 min',
    prompts: [
      "Something I have been wanting to say but have not because I expected defensiveness is...",
      "When I feel defensive, what is actually happening inside me is...",
      "A recent moment where I defended instead of listened — and what I wish I had done instead — was...",
    ],
    reflection: "What becomes possible when you let feedback in without armoring against it?",
  },
  {
    id: 73, day: 10, program: 'communication-reset',
    title: 'Say the Real Thing',
    emoji: '💬',
    tagline: "You have been speaking in drafts. Today you say the final version.",
    body: "Most of us say the edited version of what we actually mean — safer, vaguer, or wrapped in complaint rather than truth. Today each partner practices saying the real thing beneath the edited version. Not the version that protects you from reaction, but the one that actually names what you need, feel, or want.",
    duration: '20 min',
    prompts: [
      "Something I have been saying in an edited version — and what the real version is — is...",
      "A topic I regularly approach sideways instead of directly is...",
      "The real thing I need to say to you right now — unedited — is...",
    ],
    reflection: "What stops you from saying the real thing? What does it cost you not to?",
  },
  {
    id: 74, day: 11, program: 'communication-reset',
    title: 'The Curiosity Question',
    emoji: '🔍',
    tagline: "The best conversations are not built on statements — they are built on genuine questions.",
    body: "Most couples stop being curious about each other long before they mean to. Today you practice asking questions you genuinely do not know the answer to — not setup questions, not gotcha questions. Real curiosity about who your partner is right now, in this season of their life.",
    duration: '20 min',
    prompts: [
      "Something I have been assuming about you lately that I should actually ask about is...",
      "A question I am genuinely curious about — that I have never asked — is...",
      "The last time I learned something new about you was...",
    ],
    reflection: "What does staying curious about your partner protect in a long-term relationship?",
  },
  {
    id: 75, day: 12, program: 'communication-reset',
    title: 'Listening Without an Agenda',
    emoji: '👂',
    tagline: "Most listening is just waiting to talk. Today you actually listen.",
    body: "Practice a conversation where one partner speaks for five minutes on anything — something they have been thinking about, feeling, or carrying — and the other partner's only job is to listen. No solutions, no parallel stories, no preparing a response. When they finish, the listener reflects back what they heard. Then switch.",
    duration: '20–25 min',
    prompts: [
      "When I am being listened to well, what that feels like is...",
      "Something I do that signals I am not fully listening — even when I think I am — is...",
      "A topic I would love to talk about if I knew you would really hear it is...",
    ],
    reflection: "What is the difference between hearing your partner and listening to them?",
  },
  {
    id: 76, day: 13, program: 'communication-reset',
    title: 'Listening to the Emotion',
    emoji: '💛',
    tagline: "Words carry information. Emotions carry the truth underneath.",
    body: "Today you practice listening to the emotion beneath what your partner is saying — not just the content. When your partner speaks, listen for what they are feeling, not just what they are describing. Reflect the emotion back, not just the facts. This is the deepest form of being heard.",
    duration: '20 min',
    prompts: [
      "A recent conversation where I responded to the content but missed the emotion was...",
      "When I am emotional in a conversation, what I most want from you is...",
      "An emotion I carry often but rarely name directly in our conversations is...",
    ],
    reflection: "What happens in a conversation when you feel your emotion — not just your words — was understood?",
  },
  {
    id: 77, day: 14, program: 'communication-reset',
    title: 'Full Presence',
    emoji: '🌀',
    tagline: "Your partner can tell when you are half-there. Full presence is a gift.",
    body: "Presence is not just about eye contact — it is the quality of your attention, your willingness to be affected, your readiness to actually receive what your partner is saying. Today you practice one conversation with zero distractions — phones away, minds here — and notice what is different about it.",
    duration: '20 min',
    prompts: [
      "When I feel my partner is fully present with me, it feels like...",
      "The things that pull me out of presence most often are...",
      "A conversation we have had where the quality of presence was different — and what made it that way — was...",
    ],
    reflection: "What does full presence communicate to your partner beyond anything you could say with words?",
  },
  {
    id: 78, day: 15, program: 'communication-reset',
    title: 'The Money Conversation',
    emoji: '💰',
    tagline: "Money fights are rarely about money — but you still have to have the conversation.",
    body: "Money is one of the most avoided hard topics in relationships because it carries so much meaning beyond numbers — security, power, love, freedom, identity. Today you open the real conversation: not just budgets, but what money means to each of you, what fears live in your finances, and what you each need to feel financially safe together.",
    duration: '25–30 min',
    prompts: [
      "What money represents to me — beyond just numbers — is...",
      "A money-related fear I carry that I have not fully shared with you is...",
      "What I need from us — in how we handle finances — to feel secure is...",
    ],
    reflection: "What would change in your relationship if money was never a source of shame or secrecy between you?",
  },
  {
    id: 79, day: 16, program: 'communication-reset',
    title: 'The Intimacy Conversation',
    emoji: '🔥',
    tagline: "Intimacy is one of the most important conversations couples avoid — and one of the most necessary.",
    body: "Physical and emotional intimacy evolve in long relationships — and most couples never talk about it directly. Today you open the conversation: not as a complaint or a demand, but as an honest exploration of what you each need, what has shifted, and what you want more of.",
    duration: '25 min',
    prompts: [
      "When it comes to intimacy, something I have been wanting to say but have not is...",
      "Something that makes me feel most connected to you physically is...",
      "A shift I have noticed in our intimacy that I want to name honestly is...",
    ],
    reflection: "What does it mean to your partner that you are willing to talk about this honestly?",
  },
  {
    id: 80, day: 17, program: 'communication-reset',
    title: 'The Future Conversation',
    emoji: '🔭',
    tagline: "You each carry a version of your future. Today you compare notes.",
    body: "Most couples assume their partner's vision of the future matches their own — and most are at least partially wrong. Today you each share your honest vision for the next three to five years: where you want to live, how you want to live, what you want to build, what you want to let go of. No pressure to agree — just to actually know.",
    duration: '25 min',
    prompts: [
      "When I picture our life three years from now, what I see is...",
      "Something I want for our future that I have not said clearly is...",
      "A future dream I have been holding privately — that I am ready to share — is...",
    ],
    reflection: "Where are your visions aligned? Where do they diverge — and what do you do with that?",
  },
  {
    id: 81, day: 18, program: 'communication-reset',
    title: 'The Family Conversation',
    emoji: '🏠',
    tagline: "Family — yours, mine, ours — is where some of the hardest conversations live.",
    body: "Family dynamics shape relationships in ways most couples never name directly. Today you talk honestly about family: the patterns you each brought in, the expectations and loyalties at play, the ways family has affected your relationship — good and complicated. This is not a blame session — it is a mapping exercise.",
    duration: '25–30 min',
    prompts: [
      "A way my family of origin has shaped how I show up in this relationship is...",
      "Something about our family dynamics — immediate or extended — that I need to name honestly is...",
      "A boundary or understanding I need us to have around family is...",
    ],
    reflection: "What does it mean for your partnership when you can be honest about family without it becoming a fight?",
  },
  {
    id: 82, day: 19, program: 'communication-reset',
    title: 'Reading the Body',
    emoji: '🤲',
    tagline: "Your body is communicating all the time — your partner is reading it whether you know it or not.",
    body: "Nonverbal communication — posture, expression, tone, eye contact, physical proximity — often says more than your words. Each partner shares three nonverbal signals they send without meaning to, and three they watch for in their partner. Bring it into the open: your bodies are already having the conversation.",
    duration: '20 min',
    prompts: [
      "A nonverbal signal I send when I am pulling away — even if I say I am fine — is...",
      "Something I read in your body that I have never named out loud is...",
      "A nonverbal way you communicate care or connection that I love is...",
    ],
    reflection: "What would it change if you were both more fluent in each other's body language?",
  },
  {
    id: 83, day: 20, program: 'communication-reset',
    title: 'The Tone Underneath',
    emoji: '🎵',
    tagline: "You can say the right words in the wrong tone and still break something.",
    body: "Tone carries as much meaning as content — sometimes more. Each partner names a tone they use that tends to shut conversations down, and one that tends to open them up. Then practice saying the same message in two different tones and notice what changes.",
    duration: '20 min',
    prompts: [
      "A tone I default to when I am frustrated that I know creates distance is...",
      "The tone that helps me feel safe enough to stay in a hard conversation is...",
      "Something I want to say right now, and the tone I actually mean to say it in, is...",
    ],
    reflection: "What does tone communicate beyond the words — and what tone do you most want to lead with?",
  },
  {
    id: 84, day: 21, program: 'communication-reset',
    title: 'The Power of Presence',
    emoji: '🕯️',
    tagline: "Sometimes the most powerful communication is not a word — it is just being there.",
    body: "Physical presence — sitting close, a hand on the back, eye contact without an agenda — communicates safety, love, and connection in ways words cannot. Identify the nonverbal presence gestures that mean the most to each of you. Then deliberately offer one to your partner right now.",
    duration: '15–20 min',
    prompts: [
      "A physical presence gesture from you that makes me feel genuinely seen is...",
      "A nonverbal way I want to show up more consistently for you is...",
      "A moment recently where your presence — without words — said something important was...",
    ],
    reflection: "What does it communicate to your partner when you choose presence over distraction?",
  },
  {
    id: 85, day: 22, program: 'communication-reset',
    title: 'Touch as Language',
    emoji: '🫱',
    tagline: "Touch has its own vocabulary — and most couples have never read the dictionary.",
    body: "Touch communicates comfort, safety, desire, and connection in ways that exist outside language. Each partner names the kinds of touch that feel connecting, the kinds that feel absent from your relationship right now, and the kinds they want more of. This is not a physical intimacy conversation — it is a communication conversation.",
    duration: '20 min',
    prompts: [
      "A type of touch that makes me feel most loved and connected is...",
      "Touch I am missing from our relationship that I want to ask for is...",
      "A way I could use touch more intentionally to communicate care is...",
    ],
    reflection: "What would your relationship feel like if touch was a more fluent part of how you communicate?",
  },
  {
    id: 86, day: 23, program: 'communication-reset',
    title: 'Soft Startup in Practice',
    emoji: '🌤️',
    tagline: "A soft startup is not about being nice — it is about being heard.",
    body: "Hard startups get hard responses. Today you practice building the muscle of soft startup in real conflict territory. Choose something that has been bothering you — something real — and practice opening it with how you feel, what you need, and a specific ask. Not blame. Not history. Not everything at once. Just this.",
    duration: '20–25 min',
    prompts: [
      "Something on my mind that I want to bring up — and my soft startup version of it — is...",
      "The part of a difficult opening that is hardest for me to soften is...",
      "What I need to feel safe enough to start a hard conversation gently is...",
    ],
    reflection: "What happens to the conversation when you start with how you feel rather than what your partner did?",
  },
  {
    id: 87, day: 24, program: 'communication-reset',
    title: 'Bids for Connection',
    emoji: '🎣',
    tagline: "Every day you are making bids for connection. Most of them are invisible.",
    body: "A bid for connection is any attempt — large or small — to connect with your partner: a glance, a comment, a touch, a question. Most bids are missed, not because partners do not care, but because they do not recognize them. Today you both identify how you make bids and how you tend to miss each other's.",
    duration: '20 min',
    prompts: [
      "A way I bid for connection that you probably do not always recognize is...",
      "A bid you make that I want to start responding to more consistently is...",
      "A moment this week where I made a bid that did not land — and what I actually needed — was...",
    ],
    reflection: "What does it feel like when a bid for connection is missed? What does it feel like when it is answered?",
  },
  {
    id: 88, day: 25, program: 'communication-reset',
    title: 'Turning Toward',
    emoji: '↩️',
    tagline: "Every bid is an invitation. Turning toward is how you accept it.",
    body: "Turning toward your partner — answering their bid, engaging their attempt at connection — is one of the most consistent predictors of relationship health. Today you practice deliberately turning toward five bids from your partner, even the small ones. And then reflect: how often do you turn toward, and what gets in the way?",
    duration: '20 min',
    prompts: [
      "A moment today where I turned toward you — or you turned toward me — was...",
      "Something that gets in the way of me turning toward you consistently is...",
      "What it feels like to receive a turn-toward from you — in a moment I needed it — is...",
    ],
    reflection: "What would accumulate in your relationship if you consistently turned toward each other's bids?",
  },
  {
    id: 89, day: 26, program: 'communication-reset',
    title: 'Conflict Communication Review',
    emoji: '🔄',
    tagline: "You have built real communication tools. Today you see how they hold under pressure.",
    body: "Take a real topic that has been sitting between you — something unresolved or avoided — and use everything you have practiced: soft startup, listening to emotion, full presence, no contempt, turning toward. Debrief afterward: what worked, what broke down, what you want to do differently next time.",
    duration: '25–30 min',
    prompts: [
      "A topic I have been avoiding that I am ready to bring up with the tools I have built is...",
      "What worked in how we handled that conversation was...",
      "What I want to do differently next time we try this is...",
    ],
    reflection: "What does it mean to have real skills for hard conversations — not just good intentions?",
  },
  {
    id: 90, day: 27, program: 'communication-reset',
    title: 'The Daily Check-In',
    emoji: '☀️',
    tagline: "The best communication culture is built in small daily doses, not big annual conversations.",
    body: "Design a daily check-in ritual for your relationship: a specific time, a specific structure, and a shared commitment to keeping it small and real. It can be five minutes. It just has to be consistent. Couples with daily rituals of connection navigate hard times better than couples who save it for when things get bad.",
    duration: '20 min',
    prompts: [
      "A daily check-in format that would work for both of us — practically — is...",
      "The question I would want to answer every day in that check-in is...",
      "What gets in the way of us connecting daily — and how we could address that — is...",
    ],
    reflection: "What does a relationship with a daily connection ritual feel like to build toward?",
  },
  {
    id: 91, day: 28, program: 'communication-reset',
    title: 'The Weekly State of Us',
    emoji: '📅',
    tagline: "Weekly check-ins are not maintenance — they are how you stay close before you drift.",
    body: "Build a weekly relationship check-in ritual: deeper than the daily, lighter than a full conversation. Cover what went well, what needs attention, any bids that were missed, anything coming up. The goal is to keep the temperature of your relationship from drifting without notice.",
    duration: '25 min',
    prompts: [
      "Something I want to make sure we cover in a weekly check-in is...",
      "A format for our weekly check-in that would feel nourishing rather than like homework is...",
      "The best time and place for us to do this consistently would be...",
    ],
    reflection: "What would it mean for your relationship to always know where you stand with each other?",
  },
  {
    id: 92, day: 29, program: 'communication-reset',
    title: 'The Annual Review',
    emoji: '📆',
    tagline: "Your relationship deserves an annual review — not a crisis intervention.",
    body: "Once a year, take stock. Where have you grown? What has shifted? What needs attention that you have been avoiding? What are you most grateful for? An annual relationship review is one of the highest leverage things you can do — it catches drift before it becomes distance.",
    duration: '30 min',
    prompts: [
      "A way we have grown this year as a couple that I am proud of is...",
      "Something that has shifted between us — that I want to name honestly — is...",
      "What I want us to focus on, build, or change in the coming year is...",
    ],
    reflection: "What would it mean to make this kind of review a permanent part of how you run your relationship?",
  },
  {
    id: 93, day: 30, program: 'communication-reset',
    title: 'Communication Graduation',
    emoji: '🏅',
    tagline: "You came in speaking past each other. You leave with a language you built together.",
    body: "Close the Communication Reset program. Reflect on what has changed — not just in how you talk, but in how you hear each other, how you begin hard things, how you stay. Share what you are most proud of in how your partner showed up. Then celebrate the culture you have been building.",
    duration: '25–30 min',
    prompts: [
      "The biggest communication shift I have noticed in us over this program is...",
      "Something I am proud of you for — in how you engaged this work — is...",
      "A communication ritual or habit we built that I want to carry forever is...",
    ],
    reflection: "What does a relationship with a real communication culture make possible?",
  },

  // ── RECONNECT: Days 8–30 ─────────────────────────────────────────
  {
    id: 94, day: 8, program: 'reconnect',
    title: 'Who Are You Now',
    emoji: '🧭',
    tagline: "You have both changed. The relationship that does not keep up with that is running on a ghost.",
    body: "People change — their values, their fears, their dreams, their edges. Most couples stop actively updating their picture of each other at some point. Today you ask the questions you stopped asking: Who are you right now? What matters to you? What has shifted? Listen without assuming you already know.",
    duration: '25 min',
    prompts: [
      "Something about who I am right now that you might not fully know yet is...",
      "A way I have changed in the last year or two — that has not been named between us — is...",
      "Something I used to care about deeply that no longer holds the same weight is...",
    ],
    reflection: "What does it mean for a relationship to keep updating its picture of each partner?",
  },
  {
    id: 95, day: 9, program: 'reconnect',
    title: 'What Has Changed',
    emoji: '🌊',
    tagline: "Change is not the enemy of a good relationship — unacknowledged change is.",
    body: "Today you name the changes that have happened between you — not to assign fault, but to put language on what is real. What has shifted in how you connect, communicate, spend time, see each other? Naming change honestly is the first step to choosing what to do with it.",
    duration: '25 min',
    prompts: [
      "Something that has changed between us that I have been tiptoeing around is...",
      "A shift I have noticed in you — that I want to understand better — is...",
      "Something I miss about how we used to be that I want to bring back is...",
    ],
    reflection: "What do you do with change when you acknowledge it together instead of around each other?",
  },
  {
    id: 96, day: 10, program: 'reconnect',
    title: 'Updated Love Maps',
    emoji: '🗺️',
    tagline: "A love map is your picture of your partner's inner world. Update yours.",
    body: "Love maps are your detailed knowledge of your partner — their current worries, hopes, joys, stressors, dreams, and daily texture. Most long-term couples operate on outdated maps. Today you do a full update: ask five questions you do not know the answer to about your partner's inner life right now.",
    duration: '20–25 min',
    prompts: [
      "Something I am currently worried about that you may not fully know is...",
      "A dream I have right now that has not come up in conversation is...",
      "The thing that takes the most energy from me in this season of life is...",
    ],
    reflection: "How much has your picture of your partner kept pace with who they actually are today?",
  },
  {
    id: 97, day: 11, program: 'reconnect',
    title: 'The Touch That Is Not Going Anywhere',
    emoji: '🤗',
    tagline: "Non-sexual touch is the glue of a connected relationship — and it is often the first thing to fade.",
    body: "Intentional, non-sexual physical connection — a long hug, sitting close, a hand held without occasion — communicates safety, belonging, and care. Think about how much of this exists between you right now. What has faded? What do you each crave? Make a deliberate choice to reach for it today.",
    duration: '15–20 min',
    prompts: [
      "A form of non-sexual touch that makes me feel most loved and safe is...",
      "Physical connection I am missing between us that I want to ask for is...",
      "The last time we were physically present with each other — not for any reason — was...",
    ],
    reflection: "What does non-sexual touch communicate that words and actions cannot?",
  },
  {
    id: 98, day: 12, program: 'reconnect',
    title: 'The Presence Ritual',
    emoji: '🕯️',
    tagline: "Presence is not passive — it is a practice.",
    body: "Identify a daily or near-daily moment you can claim as a presence ritual: a time with no agenda, no phones, no task — just the two of you being with each other. It does not need to be long. It needs to be consistent and real. Design this ritual together and commit to it.",
    duration: '20 min',
    prompts: [
      "A moment in our daily routine where we could build in real presence is...",
      "What makes presence feel genuinely connecting for me — rather than just being in the same room — is...",
      "Something that would make our presence ritual feel meaningful rather than obligatory is...",
    ],
    reflection: "What accumulates in a relationship when presence is a consistent practice rather than a happy accident?",
  },
  {
    id: 99, day: 13, program: 'reconnect',
    title: 'Bring Back the Play',
    emoji: '🎲',
    tagline: "Couples who play together stay together — and most couples forget how to play.",
    body: "Play — genuine, unproductive, joyful play — is one of the most underestimated relationship nutrients. Think back to how you played together early on, and name what play looks like for each of you now. Then do something playful today. Not performatively — actually.",
    duration: '20–30 min',
    prompts: [
      "Something we used to do together that felt genuinely playful and fun was...",
      "A form of play or fun that I want more of in our relationship is...",
      "Something silly or lighthearted we could do right now — that neither of us would plan — is...",
    ],
    reflection: "What does it mean for a relationship when the partners still know how to play together?",
  },
  {
    id: 100, day: 14, program: 'reconnect',
    title: 'The Importance of Play',
    emoji: '🎡',
    tagline: "Joy is not a reward for getting everything right — it is something you make together.",
    body: "Revisit the role of joy and lightness in your relationship. Have you been too serious? Too task-focused? Too careful? Name a version of your relationship that had more joy, and name what it would take to bring that back — not as a one-time event but as an ongoing stance.",
    duration: '20 min',
    prompts: [
      "A season of our relationship that felt more joyful and light was...",
      "What got more serious or heavy — and when — was...",
      "Something I want us to stop taking so seriously is...",
    ],
    reflection: "What becomes possible in a relationship when joy is something you actively protect?",
  },
  {
    id: 101, day: 15, program: 'reconnect',
    title: 'Share the Dream',
    emoji: '✨',
    tagline: "Every person carries dreams they have stopped mentioning. Today you say them out loud.",
    body: "Deep emotional intimacy requires knowing each other's real dreams — not just goals, but the visions that live underneath, the things that make you feel alive when you imagine them. Each partner shares one dream they have not spoken out loud recently — something they want, who they want to become, something they want to build or experience.",
    duration: '25 min',
    prompts: [
      "A dream I carry that I have stopped talking about is...",
      "Something I want for my life — for us — that I am almost afraid to name is...",
      "The way I most want to grow in the next chapter of my life is...",
    ],
    reflection: "What does it do to a relationship when your partner's dreams are known to you and held with care?",
  },
  {
    id: 102, day: 16, program: 'reconnect',
    title: 'Name the Fears',
    emoji: '🌑',
    tagline: "The things you are most afraid of in your relationship are usually the things you have not said.",
    body: "Emotional intimacy deepens when fear is shared rather than hidden. Each partner names a fear they carry — about the relationship, about themselves, about the future — that they have not fully voiced. Not to fix it, not to worry the other person, but because shared fear is less heavy than solitary fear.",
    duration: '25 min',
    prompts: [
      "A fear I carry about our relationship that I have not fully named is...",
      "Something I am afraid of about myself in this relationship is...",
      "A fear I have about our future — that I want to stop carrying alone — is...",
    ],
    reflection: "What shifts when you let your partner into something you have been afraid to carry out loud?",
  },
  {
    id: 103, day: 17, program: 'reconnect',
    title: 'The Things You Stopped Saying',
    emoji: '🔒',
    tagline: "Every relationship has a drawer of unsaid things. Open it.",
    body: "Over time, couples develop topics they stopped discussing — feelings that went unexpressed, things they decided were too much, truths they filed away. Today each partner retrieves one thing from that drawer — something real that they have not said in a long time — and says it.",
    duration: '20–25 min',
    prompts: [
      "Something I used to say to you that I stopped saying — and I want to say again — is...",
      "A feeling I have been carrying quietly that I am ready to put into words is...",
      "Something I have needed you to know but have been protecting you from is...",
    ],
    reflection: "What does it do to intimacy when the unsaid things are finally said?",
  },
  {
    id: 104, day: 18, program: 'reconnect',
    title: 'Held and Known',
    emoji: '🫶',
    tagline: "To be fully known by someone who still chooses to stay — that is the deepest form of love.",
    body: "Think about the moments in your relationship where you have felt most fully known — seen without the performance, held without conditions. Share one of those moments with your partner. Then tell them what it is like to be with someone who knows you the way they do.",
    duration: '25 min',
    prompts: [
      "A moment where I felt most fully seen and known by you was...",
      "Something you know about me — that most people do not — that I love that you hold is...",
      "What it means to me to be known by you is...",
    ],
    reflection: "What does being fully known by your partner make possible for you — inside and outside this relationship?",
  },
  {
    id: 105, day: 19, program: 'reconnect',
    title: 'The Story of Us',
    emoji: '📖',
    tagline: "How you tell your story shapes what it means — and what it can become.",
    body: "Every couple has a narrative of their relationship — the story they tell about how they met, what they have been through, what they are. Tell your story today. Each partner shares their version: the beginning, the turning points, the meaning. Notice where the stories converge and diverge.",
    duration: '25–30 min',
    prompts: [
      "The story of how we came together, from my perspective, is...",
      "A turning point in our relationship that changed us — that belongs in the story — is...",
      "The way I would describe what we are and what we mean to each other is...",
    ],
    reflection: "What does it mean to share a story — and what does it mean when that story is a good one?",
  },
  {
    id: 106, day: 20, program: 'reconnect',
    title: 'Our Values as a Couple',
    emoji: '🧭',
    tagline: "Two people can love each other and still be running on different operating systems. Name the shared one.",
    body: "Shared values are not automatic — they are chosen and built. Today you name the values that you believe define your relationship at its best: how you treat each other, what you prioritize, what you will not compromise on, what you want to be known for as a couple.",
    duration: '25 min',
    prompts: [
      "A value I believe defines our relationship at its best is...",
      "Something we consistently prioritize as a couple — even without naming it — is...",
      "A value I want us to be more intentional about living out is...",
    ],
    reflection: "What does it mean to run a relationship by shared values rather than just good intentions?",
  },
  {
    id: 107, day: 21, program: 'reconnect',
    title: 'Your Inside World',
    emoji: '🌐',
    tagline: "The inside world of a couple — the jokes, the codes, the shared references — is its own ecosystem.",
    body: "Healthy couples build an inside world together: the private language, the inside jokes, the references only you two understand, the rituals that belong only to you. Name the elements of yours. Celebrate them. And if some of it has faded, name what you want to rebuild.",
    duration: '20 min',
    prompts: [
      "An inside joke or reference that belongs only to us — that I love — is...",
      "A part of our inside world that has faded that I want to bring back is...",
      "Something I want us to add to our inside world — a new tradition, code, or ritual — is...",
    ],
    reflection: "What does a rich inside world communicate to each partner about the health of their connection?",
  },
  {
    id: 108, day: 22, program: 'reconnect',
    title: 'The Shared Identity',
    emoji: '🪬',
    tagline: "You are two individuals — and you are also something together that is bigger than either of you.",
    body: "A shared couple identity — a sense of what you are together, what you stand for, what you are building — is one of the most stabilizing forces in a long relationship. Name your shared identity today: What are you? What do you represent? What is the purpose of your partnership beyond the two of you?",
    duration: '25 min',
    prompts: [
      "When I think about what we are together — as a unit — what comes to mind is...",
      "Something we are building together that is bigger than either of us individually is...",
      "How I would describe our partnership to someone who wanted to understand what we are is...",
    ],
    reflection: "What becomes possible when two people know what they are together — and choose it consciously?",
  },
  {
    id: 109, day: 23, program: 'reconnect',
    title: 'The Morning Ritual',
    emoji: '🌅',
    tagline: "How you start the day together sets the tone for everything that follows.",
    body: "Design a morning ritual that creates connection before the day takes over: something small, specific, and consistent. It could be five minutes of quiet together, a specific goodbye routine, a morning question. The goal is not a perfect morning — it is a moment that says: we are connected before we go out into the world.",
    duration: '20 min',
    prompts: [
      "A morning ritual that would help me feel connected to you before the day starts is...",
      "Something I want our mornings to feel like — as a baseline — is...",
      "A small thing you could do in the morning that would mean a lot to me is...",
    ],
    reflection: "What does it mean to start a day knowing you and your partner are connected?",
  },
  {
    id: 110, day: 24, program: 'reconnect',
    title: 'The Evening Return',
    emoji: '🌙',
    tagline: "Coming home is not just a location — it is a reconnection. Are you treating it that way?",
    body: "The moment of reunion at the end of the day is one of the most underutilized connection opportunities in a relationship. Design an evening return ritual: how you greet each other, how you transition from the outside world back to each other, what helps you both decompress and be present.",
    duration: '20 min',
    prompts: [
      "What the end of a typical day looks like between us right now is...",
      "A greeting or transition ritual that would help me feel returned to you is...",
      "What I need in the first thirty minutes when I get home — to be able to be fully present — is...",
    ],
    reflection: "What does a consistent, real reunion at the end of every day build over months and years?",
  },
  {
    id: 111, day: 25, program: 'reconnect',
    title: 'The Weekly Anchor',
    emoji: '⚓',
    tagline: "One dedicated hour a week is enough to keep a relationship from drifting.",
    body: "Design a weekly ritual that is just for you as a couple — not errands, not family time, not socializing. A weekly anchor: a regular time where you reconnect, have fun, or simply exist together. Name when it happens, what it looks like, and what makes it feel like yours.",
    duration: '20 min',
    prompts: [
      "A weekly ritual we could build that would feel genuinely ours is...",
      "The best time and structure for our weekly anchor given our actual lives is...",
      "What I want our weekly anchor to give us that we do not currently have is...",
    ],
    reflection: "What does a relationship with a weekly dedicated ritual look like six months from now?",
  },
  {
    id: 112, day: 26, program: 'reconnect',
    title: 'The Seasonal Reset',
    emoji: '🍂',
    tagline: "Seasons change. So do relationships. Build a ritual for the shift.",
    body: "Four times a year — as seasons change — do a light relationship reset: reflect on the last quarter, name what you want in the next one, celebrate what you built, and release what needs to go. This is not a review meeting — it is a gentle, intentional pulse check between two people who are paying attention.",
    duration: '25 min',
    prompts: [
      "Something from this last season of our relationship that I want to celebrate is...",
      "Something I want to leave behind as we move into the next season is...",
      "What I am most looking forward to building or experiencing with you in the next season is...",
    ],
    reflection: "What does a relationship that pays attention to its own seasons feel like to be inside of?",
  },
  {
    id: 113, day: 27, program: 'reconnect',
    title: 'Reviewing the Growth',
    emoji: '📊',
    tagline: "You have done real work. Look at it together.",
    body: "Together, review the growth you have experienced during this program. Not just the individual missions — but the arc. What were you like in the beginning? What have you each moved? What has changed in how you talk, see each other, reach for each other? Naming growth makes it real.",
    duration: '25–30 min',
    prompts: [
      "A shift I have noticed in myself over this program is...",
      "Something I have noticed in you — a genuine change — that I want to name is...",
      "A moment during this program that surprised me about us was...",
    ],
    reflection: "What does it mean to be two people who can grow together — not just in spite of difficulty but through it?",
  },
  {
    id: 114, day: 28, program: 'reconnect',
    title: 'What Changed',
    emoji: '🔄',
    tagline: "Change without naming it is just movement. Name what changed.",
    body: "Go deeper than growth — name the specific things that are different. How do you communicate differently? How do you repair differently? How do you reach for each other differently? Specificity here is what makes the change feel real and owned rather than theoretical.",
    duration: '25 min',
    prompts: [
      "One thing that is concretely different in how we are together is...",
      "A behavior or pattern I have genuinely changed — that I want to acknowledge — is...",
      "Something I want us to hold onto — that we built during this program — is...",
    ],
    reflection: "How do you protect and sustain the changes you have made?",
  },
  {
    id: 115, day: 29, program: 'reconnect',
    title: 'The Celebration',
    emoji: '🥂',
    tagline: "Celebrate what you built. Celebration is not indulgence — it is integration.",
    body: "Today you celebrate. Not because everything is perfect, but because you chose each other again. You did hard work. You showed up. You said real things. You stayed. Mark it in a way that means something to both of you — a ritual, a moment, a shared act that says: this mattered.",
    duration: '20–30 min (or longer)',
    prompts: [
      "The thing I most want to celebrate about us right now is...",
      "A way we could mark this moment that would feel genuinely meaningful — not obligatory — is...",
      "Something I want to say to you before we close this chapter is...",
    ],
    reflection: "What does it feel like to have genuinely earned this moment together?",
  },
  {
    id: 116, day: 30, program: 'reconnect',
    title: 'The Recommitment',
    emoji: '💍',
    tagline: "You did not just reconnect. You chose each other again — on purpose.",
    body: "The final day. Each partner writes or speaks a personal recommitment — not vows, not performance — just the real, honest version of who they are choosing and why. Name what you are committing to in yourself, in your partner, and in the relationship you are building together.",
    duration: '30 min',
    prompts: [
      "What I am committing to — in myself — going forward in this relationship is...",
      "What I see in you that makes me want to choose you again is...",
      "The relationship I am committed to building with you from here is...",
    ],
    reflection: "What does it mean to recommit not out of obligation, but out of genuine choice?",
  },

  // ── emotional-safety Days 8–45 ──────────────────────────────────────────
  {
    id: 117, day: 8, program: 'emotional-safety',
    title: 'The Anxious Pull',
    emoji: '🧲',
    tagline: "Anxious attachment is not weakness — it is a learned survival strategy.",
    body: "Learn the basics of anxious attachment together: the hypervigilance, the fear of abandonment, the tendency to seek reassurance. Each partner names whether they recognize this pattern in themselves, even partially. No diagnosis — just honest recognition.",
    duration: '20–25 min',
    prompts: [
      "A moment in our relationship when I noticed anxious patterns in myself was...",
      "When I feel uncertain about us, what I typically do is...",
      "What I actually need in those moments — even if I don't ask for it — is...",
    ],
    reflection: "What would help you feel safer when the anxious pull shows up?",
  },
  {
    id: 118, day: 9, program: 'emotional-safety',
    title: 'The Avoidant Distance',
    emoji: '🚶',
    tagline: "Pulling away is not indifference — it is often the only way some people learned to cope.",
    body: "Explore the avoidant attachment pattern together: the withdrawal, the discomfort with emotional intensity, the need for space when things get heavy. Each partner honestly names where they see themselves in this pattern — even a little.",
    duration: '20–25 min',
    prompts: [
      "When emotional intensity rises between us, what I tend to do is...",
      "Pulling back or going quiet for me usually means...",
      "What I actually need when I go into that space — even if I can't say it — is...",
    ],
    reflection: "What does closeness feel like when it is safe versus when it feels like too much?",
  },
  {
    id: 119, day: 10, program: 'emotional-safety',
    title: 'What Secure Feels Like',
    emoji: '⚓',
    tagline: "Secure attachment is not a personality type — it is something you build together.",
    body: "Talk about what security feels like in your body and in your relationship. Name specific moments when you have felt genuinely secure with each other. Then name what conditions made those moments possible — and what you want to create more of.",
    duration: '20 min',
    prompts: [
      "A moment in our relationship where I felt genuinely secure and at ease was...",
      "What security feels like for me — physically and emotionally — is...",
      "One condition that helps me feel secure with you is...",
    ],
    reflection: "What would it mean to become each other's secure base?",
  },
  {
    id: 120, day: 11, program: 'emotional-safety',
    title: 'The Blueprint',
    emoji: '🗺️',
    tagline: "The emotional patterns you carry were written long before you met each other.",
    body: "Each partner briefly traces their emotional blueprint: the household they grew up in, how emotions were handled, what was allowed and what was not. No judgment on your family — just honest awareness of what got downloaded into you.",
    duration: '25–30 min',
    prompts: [
      "In my house growing up, emotions were typically handled by...",
      "A feeling that was not safe to express when I was young was...",
      "The emotional rule I unconsciously carried into adulthood is...",
    ],
    reflection: "How does your emotional blueprint show up between you and your partner today?",
  },
  {
    id: 121, day: 12, program: 'emotional-safety',
    title: 'The Shame underneath',
    emoji: '🪨',
    tagline: "Shame hides. Naming it is how you stop letting it run things.",
    body: "Shame is the feeling that something is fundamentally wrong with you — not what you did, but who you are. Each partner names one area where shame quietly lives in them, and how it tends to show up in the relationship. The goal is not to fix it, but to stop hiding it.",
    duration: '25 min',
    prompts: [
      "An area where I carry quiet shame — about myself — is...",
      "When that shame gets activated, what I typically do in our relationship is...",
      "What I would need from you when that shows up is...",
    ],
    reflection: "What changes when shame gets named out loud instead of acted out?",
  },
  {
    id: 122, day: 13, program: 'emotional-safety',
    title: 'The Inner Critic',
    emoji: '🗣️',
    tagline: "The voice that tells you you're not enough — it learned that somewhere. It is not the truth.",
    body: "Each partner introduces their inner critic: what it says, when it gets loudest, and how it affects the relationship. Pay attention to how the inner critic sometimes gets projected outward as criticism of your partner. Listen without defending — just witness each other.",
    duration: '20–25 min',
    prompts: [
      "The thing my inner critic says most often is...",
      "When my inner critic gets loud, what you usually see from me is...",
      "A time when my inner critic affected how I treated you was...",
    ],
    reflection: "What would it look like to take the inner critic less literally?",
  },
  {
    id: 123, day: 14, program: 'emotional-safety',
    title: 'The Story I Told Myself',
    emoji: '📖',
    tagline: "We are all writing stories about our partners. Some of those stories are wrong.",
    body: "Each partner names a story they have been telling themselves about their partner — a narrative, an assumption, a conclusion they drew that may not be fully accurate. Then the partner responds: what is the real story? Practice curiosity over certainty.",
    duration: '25 min',
    prompts: [
      "A story I have been telling myself about you that might not be fully true is...",
      "The conclusion I sometimes jump to when you do that is...",
      "What I would rather assume about you — instead — is...",
    ],
    reflection: "What story do you want your partner to tell about you?",
  },
  {
    id: 124, day: 15, program: 'emotional-safety',
    title: 'The Hidden Part',
    emoji: '🫥',
    tagline: "We all have a part we keep offstage. Tonight, bring it a little closer.",
    body: "Each partner shares one part of themselves they tend to hide — in the relationship, in the world, or both. It might be a fear, a longing, a trait they are embarrassed by, or a need they have not admitted. No performance — just real.",
    duration: '20–25 min',
    prompts: [
      "A part of me I rarely show you — or anyone — is...",
      "I hide it because...",
      "What I would need from you if I let you see it more is...",
    ],
    reflection: "What does it cost you to keep that part hidden? What might it cost to let it be seen?",
  },
  {
    id: 125, day: 16, program: 'emotional-safety',
    title: 'Receiving Without Fixing',
    emoji: '🤲',
    tagline: "Fixing is not listening. Presence is.",
    body: "Partner A shares something hard — a struggle, a fear, a grief — for 5 minutes. Partner B's only job is to be present: no solutions, no silver linings, no reassurances. Just witness. Then debrief together: what was it like to share? What was it like to just hold space?",
    duration: '20–25 min',
    prompts: [
      "Something I have been carrying that I have not fully let you see is...",
      "When I share hard things with you, what I usually want from you is...",
      "What actually helps me feel held — even if it is not a solution — is...",
    ],
    reflection: "What is the difference between being heard and being fixed?",
  },
  {
    id: 126, day: 17, program: 'emotional-safety',
    title: 'The Witness',
    emoji: '👁️',
    tagline: "To be truly seen by someone who loves you — that is one of the deepest things there is.",
    body: "Each partner takes a turn being witnessed. The speaking partner shares something they have been going through — not a relationship issue, but something in their inner world. The listening partner reflects back what they heard, what they saw, and what they felt while listening.",
    duration: '25–30 min',
    prompts: [
      "Something I have been experiencing internally — that I want you to understand — is...",
      "The feeling underneath that is...",
      "When I imagine you fully seeing this part of me, what I feel is...",
    ],
    reflection: "What did it feel like to be reflected back accurately?",
  },
  {
    id: 127, day: 18, program: 'emotional-safety',
    title: 'I See You',
    emoji: '🌟',
    tagline: "Tell your partner what you actually see in them — not what you need them to be.",
    body: "Each partner offers a witnessing statement to the other: specific, honest, and generous. Not praise for performance — but genuine recognition of who they are, what they carry, and what they show up with. Let it land before responding.",
    duration: '20 min',
    prompts: [
      "What I genuinely see in you — that I want you to know I notice — is...",
      "Something you carry quietly that I have a lot of respect for is...",
      "A way you have grown that I want you to know I see is...",
    ],
    reflection: "What is it like to be seen without needing to perform or explain?",
  },
  {
    id: 128, day: 19, program: 'emotional-safety',
    title: 'Reading the Room',
    emoji: '📡',
    tagline: "Attunement is not mind-reading. It is paying close, caring attention.",
    body: "Practice reading each other without speaking. Sit across from each other for 2 minutes in silence — just observe. Then each partner shares what they noticed in the other: mood, energy, what seemed to be present. Compare notes. Was your reading accurate?",
    duration: '15–20 min',
    prompts: [
      "What I noticed in you during those two minutes was...",
      "A time recently when I felt like you really read me accurately was...",
      "Something I think you often miss about my emotional state is...",
    ],
    reflection: "What would help your partner read you more accurately?",
  },
  {
    id: 129, day: 20, program: 'emotional-safety',
    title: 'The Bid',
    emoji: '🎣',
    tagline: "Every reach for connection is a bid. The question is whether you catch it.",
    body: "Learn the concept of emotional bids together — the small moments where someone reaches for connection (a comment, a touch, a question) and the other person turns toward, away, or against. Each partner names recent bids they made and whether they felt received.",
    duration: '20–25 min',
    prompts: [
      "A recent moment when I was reaching for connection — that you might not have recognized — was...",
      "A bid you made that I missed or turned away from was...",
      "What helps me feel received when I reach for you is...",
    ],
    reflection: "What small daily bid could you start catching more consistently?",
  },
  {
    id: 130, day: 21, program: 'emotional-safety',
    title: 'Mirroring',
    emoji: '🪞',
    tagline: "When someone mirrors you back accurately, it is one of the most intimate things that can happen.",
    body: "Practice emotional mirroring. Partner A shares a feeling or experience. Partner B mirrors back — not just the content, but the emotion and the energy. Then switch. Debrief: what felt accurate? What felt off? Mirroring is a skill — this is the practice.",
    duration: '20–25 min',
    prompts: [
      "Something I have been feeling lately that I want you to try mirroring is...",
      "When you reflected that back, what landed was...",
      "What felt slightly off in the mirroring — and what the fuller picture looks like — is...",
    ],
    reflection: "What does it mean to feel genuinely matched by your partner?",
  },
  {
    id: 131, day: 22, program: 'emotional-safety',
    title: 'Emotional Synchrony',
    emoji: '🎵',
    tagline: "You do not have to feel the same thing. You just have to be present to each other's reality.",
    body: "Explore what emotional synchrony feels like between you: the moments when you are genuinely in rhythm, fully present, matching each other without effort. Name those moments and what created them. Then name what tends to break the rhythm.",
    duration: '20 min',
    prompts: [
      "A moment when we were in genuine emotional sync was...",
      "What usually creates that feeling between us is...",
      "What tends to break our rhythm — and pull us out of sync — is...",
    ],
    reflection: "What one shift would help you get back in sync faster when you lose it?",
  },
  {
    id: 132, day: 23, program: 'emotional-safety',
    title: 'The Trigger Map',
    emoji: '🗺️',
    tagline: "Knowing your triggers is not the same as controlling them — but it is the start.",
    body: "Each partner maps their top two or three emotional triggers in the relationship: what tends to set off a big response, what the activated state feels like, and what is underneath it. The goal is not to justify the reaction but to make it legible to your partner.",
    duration: '25 min',
    prompts: [
      "One of my biggest emotional triggers in our relationship is...",
      "When I am triggered, what it looks like from the outside is...",
      "What is actually happening underneath when I get activated is...",
    ],
    reflection: "What would help your partner support you when you are triggered rather than escalate things?",
  },
  {
    id: 133, day: 24, program: 'emotional-safety',
    title: 'Staying in the Room',
    emoji: '🏠',
    tagline: "The ability to stay regulated during conflict is one of the most important relationship skills there is.",
    body: "Talk about what it takes to stay emotionally regulated during conflict: what helps, what makes it harder, what signals to each other that you need to pause. Create a shared language for moments when one of you is about to dysregulate.",
    duration: '20–25 min',
    prompts: [
      "When a conversation gets heated, what starts to happen in my body is...",
      "What I need from you when I am getting close to flooded is...",
      "A signal I could give you — that means I need us to pause — is...",
    ],
    reflection: "What is the difference between taking a break to avoid and taking a break to return?",
  },
  {
    id: 134, day: 25, program: 'emotional-safety',
    title: 'Co-Regulation',
    emoji: '🤝',
    tagline: "You can help each other calm down — but first you have to be calm enough to offer it.",
    body: "Learn and practice co-regulation: the capacity to help another person return to a settled state through your own calm presence. Discuss what your partner does that actually helps you de-escalate, and what they do that tends to make things worse.",
    duration: '20–25 min',
    prompts: [
      "Something you do that genuinely helps me calm down during conflict is...",
      "Something you do with good intentions that actually makes it harder for me is...",
      "What I wish you would do — or say — when I am really activated is...",
    ],
    reflection: "What would it take to become someone your partner can reliably turn to for co-regulation?",
  },
  {
    id: 135, day: 26, program: 'emotional-safety',
    title: 'Grounding Each Other',
    emoji: '🌱',
    tagline: "A grounded partner can be an anchor. Let each other know what works.",
    body: "Create a personal grounding protocol together. Each partner shares what physically and emotionally grounds them — practices, words, touch, space — and what they need from their partner when they are spinning out. Then make a simple, actionable agreement.",
    duration: '20 min',
    prompts: [
      "What grounds me physically when I am overwhelmed is...",
      "What I need from you specifically when I am spiraling is...",
      "An agreement we could make about how to ground each other is...",
    ],
    reflection: "What does it feel like to know your partner has a plan to help you come back to yourself?",
  },
  {
    id: 136, day: 27, program: 'emotional-safety',
    title: 'After the Rupture',
    emoji: '🧩',
    tagline: "Rupture is not failure. What you do after is everything.",
    body: "Think about a recent conflict or disconnection between you. Walk through it honestly: what happened, how each person felt, what the rupture actually was beneath the surface argument. This is not a rehash — it is an autopsy, done gently, with curiosity.",
    duration: '25–30 min',
    prompts: [
      "In that conflict, what I was actually feeling underneath the surface was...",
      "What I wish I had done differently in that moment is...",
      "What I needed from you that I did not ask for clearly was...",
    ],
    reflection: "What did the rupture reveal about what matters most to each of you?",
  },
  {
    id: 137, day: 28, program: 'emotional-safety',
    title: 'The Repair',
    emoji: '🔧',
    tagline: "Repair is not just saying sorry. It is understanding what happened and meaning what you say.",
    body: "Practice a real repair together — not a performance, but a genuine acknowledgment of what happened. A full repair includes: what I did, how it affected you, why it matters to me that it hurt you, and what I am willing to do differently. Both partners practice.",
    duration: '25–30 min',
    prompts: [
      "What I want to genuinely own from our last rupture is...",
      "How I imagine that landed for you — based on what I know about you — is...",
      "What I am committed to doing differently is...",
    ],
    reflection: "What makes a repair feel real to you versus performative?",
  },
  {
    id: 138, day: 29, program: 'emotional-safety',
    title: 'Forgiveness as Practice',
    emoji: '🌊',
    tagline: "Forgiveness is not erasure. It is choosing to stop letting the past run the present.",
    body: "Talk about forgiveness honestly — not as a demand or obligation, but as a practice you both navigate. Name something you are still in the process of forgiving. Name something you are still waiting to feel forgiven for. No pressure — just honesty.",
    duration: '25 min',
    prompts: [
      "Something I am still in the process of fully releasing is...",
      "Something I am not sure you have fully forgiven me for is...",
      "What forgiveness actually looks like in practice — for me — is...",
    ],
    reflection: "What does full forgiveness free you to do in the relationship that carrying it doesn't?",
  },
  {
    id: 139, day: 30, program: 'emotional-safety',
    title: 'The Long Arc',
    emoji: '🌈',
    tagline: "Every relationship has a long arc. Name where you are on yours.",
    body: "Zoom out together. Look at the arc of your relationship: where you started, the hard seasons, the growth, the repairs you have made. Then name where you are now — not a destination, but a place on a longer journey. Acknowledge the arc itself.",
    duration: '20–25 min',
    prompts: [
      "When I look at the arc of our relationship, what I see is...",
      "A season we survived that I think made us stronger is...",
      "Where I feel we are right now on that arc is...",
    ],
    reflection: "What do you want the next chapter of your arc to look like?",
  },
  {
    id: 140, day: 31, program: 'emotional-safety',
    title: 'Emotional Intimacy',
    emoji: '💛',
    tagline: "You can be physically close and emotionally miles apart. Tonight, close the gap.",
    body: "Distinguish between emotional and physical intimacy together. Name the moments when you have felt most emotionally intimate — when you felt fully known, fully present, fully close. Then name what tends to block emotional intimacy for each of you.",
    duration: '20–25 min',
    prompts: [
      "A moment when I felt most emotionally intimate with you was...",
      "What emotional intimacy feels like in my body is...",
      "What tends to block emotional closeness for me is...",
    ],
    reflection: "What do you most want your partner to understand about your need for emotional intimacy?",
  },
  {
    id: 141, day: 32, program: 'emotional-safety',
    title: 'The Desire for Closeness',
    emoji: '🧲',
    tagline: "Wanting closeness is not neediness. It is one of the most human things there is.",
    body: "Each partner names — honestly and without shame — how much closeness they want and what closeness means to them. Not what they think is reasonable to want, but what they actually want. Then listen to each other without making the other wrong.",
    duration: '20 min',
    prompts: [
      "What closeness actually means to me — specifically — is...",
      "How much closeness I want from you — if I am honest — is...",
      "What makes me afraid to ask for that level of closeness is...",
    ],
    reflection: "What would it mean to let yourself want what you actually want?",
  },
  {
    id: 142, day: 33, program: 'emotional-safety',
    title: 'The Fear of It',
    emoji: '🌑',
    tagline: "Sometimes what we want most is also what we fear most. That is worth naming.",
    body: "Talk about the fear of intimacy — not as a clinical concept, but as a personal one. Each partner names where they hold back, what closeness brings up that is uncomfortable, and where the fear comes from. This is not about being broken — it is about being honest.",
    duration: '25 min',
    prompts: [
      "A way I hold back from full closeness — that I think you might notice — is...",
      "When we get very close, what I sometimes feel is...",
      "Where I think that fear comes from — if I had to trace it — is...",
    ],
    reflection: "What would it take to take one step closer than your usual comfort zone?",
  },
  {
    id: 143, day: 34, program: 'emotional-safety',
    title: 'Vulnerability as Strength',
    emoji: '🦁',
    tagline: "Real vulnerability takes courage. Performing vulnerability is just another wall.",
    body: "Discuss the difference between genuine vulnerability and performed vulnerability — the kind that looks open but keeps the real thing hidden. Each partner shares one thing they have genuinely been vulnerable about with each other, and one thing they still armor around.",
    duration: '20–25 min',
    prompts: [
      "Something I have been genuinely vulnerable with you about — that was real and cost me something — is...",
      "Something I still tend to armor around — even with you — is...",
      "What makes genuine vulnerability feel safe versus unsafe for me is...",
    ],
    reflection: "What is one armor you could lay down this week?",
  },
  {
    id: 144, day: 35, program: 'emotional-safety',
    title: 'The Intimacy We Have',
    emoji: '✨',
    tagline: "Name what you actually have. That is how you protect it.",
    body: "Take time today to name the emotional intimacy you have genuinely built together. Not what you want to build — what you already have. Specific moments, qualities, ways you show up for each other. Own what is real. Let it land.",
    duration: '20 min',
    prompts: [
      "A form of emotional intimacy we have that I do not want to take for granted is...",
      "Something we share that I do not share with anyone else is...",
      "What I most value about the emotional world we have built is...",
    ],
    reflection: "What would you lose if you stopped tending to this intimacy?",
  },
  {
    id: 145, day: 36, program: 'emotional-safety',
    title: 'The Container',
    emoji: '🏛️',
    tagline: "A safe relationship is not an accident. It is a structure you build on purpose.",
    body: "Introduce the idea of the relationship as a container — a space with walls, rituals, agreements, and culture. Talk about what your container currently looks and feels like: what holds it up, what has cracks in it, and what you want to build into it.",
    duration: '20–25 min',
    prompts: [
      "The things that currently make our relationship feel like a safe container are...",
      "A place where the container feels thin or cracked is...",
      "Something I want to add to our container — a ritual, an agreement, a practice — is...",
    ],
    reflection: "What does a fully built container feel like to you — and what would it make possible?",
  },
  {
    id: 146, day: 37, program: 'emotional-safety',
    title: 'Rituals of Connection',
    emoji: '🕯️',
    tagline: "Rituals are not about being fancy. They are about being intentional.",
    body: "Name the rituals of connection you already have — intentional or accidental. The morning routine, the goodnight habit, the check-in you do. Then name the rituals you want to create: small, repeatable acts that say we prioritize this relationship.",
    duration: '20 min',
    prompts: [
      "A ritual we already have that I want to protect is...",
      "A ritual I want us to create — that would feel meaningful, not performative — is...",
      "What I want our daily connection to feel like is...",
    ],
    reflection: "What one ritual could you start this week that would take less than five minutes?",
  },
  {
    id: 147, day: 38, program: 'emotional-safety',
    title: 'The Agreements',
    emoji: '📜',
    tagline: "Healthy relationships run on agreements, not assumptions.",
    body: "Create three to five explicit relationship agreements together — things you both genuinely agree to, not rules imposed. These might cover conflict, repair, privacy, how you handle stress, or how you show up when one of you is struggling. Write them down.",
    duration: '25–30 min',
    prompts: [
      "An unspoken assumption we have been operating on that I want to make explicit is...",
      "An agreement I want us to make about how we handle conflict is...",
      "An agreement I want us to make about how we take care of each other is...",
    ],
    reflection: "Which of your agreements feels most important to protect?",
  },
  {
    id: 148, day: 39, program: 'emotional-safety',
    title: 'The Culture of Us',
    emoji: '🌍',
    tagline: "Every relationship has a culture. What is yours — and is it one you chose?",
    body: "Name the culture of your relationship: the norms, the values, the way things are done, the emotional climate. Is it one you consciously created or one that just happened? Name what you want to keep and what you want to intentionally shift.",
    duration: '20–25 min',
    prompts: [
      "The emotional climate of our relationship right now — if I am honest — is...",
      "A cultural norm in our relationship I want to keep is...",
      "Something about the culture of our relationship I want to shift is...",
    ],
    reflection: "If your relationship had a mission statement, what would it say?",
  },
  {
    id: 149, day: 40, program: 'emotional-safety',
    title: 'Safety as a Gift',
    emoji: '🎁',
    tagline: "Making someone feel safe is one of the most loving things you can do.",
    body: "Each partner names specifically what makes them feel safe in the relationship — and what their partner does that creates that safety. Then name what you want to intentionally offer each other as an act of love: the specific behaviors that build the feeling of safety.",
    duration: '20 min',
    prompts: [
      "What makes me feel emotionally safe with you specifically is...",
      "Something you do that genuinely creates safety for me is...",
      "Something I want to offer you — as an intentional act of creating safety — is...",
    ],
    reflection: "What does it feel like to know you are someone your partner feels safe with?",
  },
  {
    id: 150, day: 41, program: 'emotional-safety',
    title: 'Reflecting on the Journey',
    emoji: '🔭',
    tagline: "You have been doing hard, honest work. Take a moment to see how far you have come.",
    body: "Look back over the last 40 days together. Name the conversations that were hardest, the moments that shifted something, and the things you learned about yourself and each other. This is not performance — it is honest reflection.",
    duration: '25–30 min',
    prompts: [
      "The conversation or day in this program that shifted something real for me was...",
      "Something I learned about myself through this program is...",
      "Something I learned about you that I did not fully know before is...",
    ],
    reflection: "What do you want to carry forward from everything you have explored?",
  },
  {
    id: 151, day: 42, program: 'emotional-safety',
    title: 'What Changed',
    emoji: '🔄',
    tagline: "Name the change. Unnamed growth is invisible.",
    body: "Each partner names three things that are concretely different now — in how they relate, what they understand, or how they show up. Not aspirational — actual. Name the real changes, even small ones. This is how growth gets owned.",
    duration: '20–25 min',
    prompts: [
      "Something that is concretely different in how I show up with you now is...",
      "A shift in how I understand myself — because of this work — is...",
      "Something that is different in how we are together that I want to protect is...",
    ],
    reflection: "How do you sustain change when life gets busy and the structured work stops?",
  },
  {
    id: 152, day: 43, program: 'emotional-safety',
    title: 'The Commitment to Safety',
    emoji: '🛡️',
    tagline: "Safety is not a feeling you wait for. It is something you build — every day.",
    body: "Make a shared commitment to emotional safety — not as a vague ideal, but as a daily practice. Name the specific things each of you will do to maintain and protect the emotional safety of this relationship going forward.",
    duration: '20 min',
    prompts: [
      "One concrete thing I commit to doing to protect your emotional safety is...",
      "One thing I will ask for — when I need it — rather than going silent is...",
      "What I want our emotional safety to feel like five years from now is...",
    ],
    reflection: "What is one thing you could do tomorrow to demonstrate this commitment?",
  },
  {
    id: 153, day: 44, program: 'emotional-safety',
    title: 'The Gratitude',
    emoji: '🙏',
    tagline: "You did something hard. You showed up for each other and for yourselves.",
    body: "Each partner offers genuine gratitude — not for the program, but for each other. Specific. Real. What did your partner do over these 44 days that you want to name? What did they offer that mattered? Let it land before responding.",
    duration: '20 min',
    prompts: [
      "Something you did over these 44 days that I genuinely want to thank you for is...",
      "A moment where you showed up for me in this work that I will not forget is...",
      "What you have given me by doing this work with me is...",
    ],
    reflection: "What does it mean to have chosen to do this work together?",
  },
  {
    id: 154, day: 45, program: 'emotional-safety',
    title: 'The Secure Partnership',
    emoji: '⚓',
    tagline: "You are not perfect. You are chosen. That is the whole thing.",
    body: "The final day. Each partner speaks their version of the renewed commitment — not vows, not performance. The honest version: what they are committing to in themselves, in their partner, and in the relationship they are building together. Let it be real.",
    duration: '30 min',
    prompts: [
      "What I am committing to — in myself — to protect this relationship is...",
      "What I see in you that makes me choose to build this with you is...",
      "The partnership I am committed to creating with you is...",
    ],
    reflection: "What does it mean to be someone's secure base — and to have one?",
  },

  // ── pre-marriage Days 8–60 ───────────────────────────────────────────────
  {
    id: 155, day: 8, program: 'pre-marriage',
    title: 'Desire and Design',
    emoji: '🔥',
    tagline: "Sexual compatibility is built, not assumed. Start the conversation.",
    body: "Talk openly about your sexual relationship: what you each want more of, what you want less of, and what you have never said out loud. This is not a critique session — it is an honest conversation between two adults building a life together.",
    duration: '20–30 min',
    prompts: [
      "Something I want more of in our physical relationship — that I have not asked for clearly — is...",
      "My general desire for physical intimacy — in terms of frequency and type — is...",
      "Something I have been hesitant to bring up about our sex life is...",
    ],
    reflection: "What makes it hard to talk about sex honestly — and what would make it easier?",
  },
  {
    id: 156, day: 9, program: 'pre-marriage',
    title: 'Love Languages in the Body',
    emoji: '💆',
    tagline: "Physical affection means different things to different people. Know what it means to each of you.",
    body: "Beyond sex — talk about physical affection: touch, comfort, holding, proximity. What does your partner's physical presence mean to you? What kinds of touch feel like love and which feel like pressure? Name your defaults and your preferences.",
    duration: '20 min',
    prompts: [
      "The type of physical affection that most makes me feel loved is...",
      "A type of touch or physical affection that sometimes feels like pressure to me is...",
      "What I want our physical affection to look like on a regular day — not a special occasion — is...",
    ],
    reflection: "How do your physical affection needs align — and where do you need to negotiate?",
  },
  {
    id: 157, day: 10, program: 'pre-marriage',
    title: 'The Conversation We Have Not Had',
    emoji: '🗝️',
    tagline: "Marriage will surface every unspoken expectation. Better to surface them now.",
    body: "Each partner names one expectation or desire about the sexual and intimate side of marriage that they have not said clearly. Not to pressure or demand — but to be honest before you commit. Listen without judgment and respond with curiosity.",
    duration: '25 min',
    prompts: [
      "One expectation I have about intimacy in our marriage that I have not been fully clear about is...",
      "Something I am curious or uncertain about — regarding our sexual future — is...",
      "How I want us to handle it if our needs or desires change over time is...",
    ],
    reflection: "What would it mean to enter marriage with no major sexual expectations hidden?",
  },
  {
    id: 158, day: 11, program: 'pre-marriage',
    title: 'What Do You Believe?',
    emoji: '✨',
    tagline: "You do not have to share every belief. You do have to know what the other one is.",
    body: "Each partner shares their current relationship with spirituality and faith — not a theological position, but a lived one. What do you believe? What do you practice? What does it mean to you? What role does it play in your daily life?",
    duration: '25–30 min',
    prompts: [
      "My current relationship with spirituality or faith — in honest terms — is...",
      "The beliefs or practices that are genuinely important to me are...",
      "What spirituality or faith gives me that I do not want to lose is...",
    ],
    reflection: "Where are your spiritual lives similar — and where are they genuinely different?",
  },
  {
    id: 159, day: 12, program: 'pre-marriage',
    title: 'Navigating the Differences',
    emoji: '🌉',
    tagline: "Spiritual differences are manageable. Pretending they do not exist is not.",
    body: "Name where your spiritual or religious lives differ — and talk honestly about what that means for your marriage. Not to resolve it today, but to look at it clearly. Where do the differences create tension? Where is there room for respect and coexistence?",
    duration: '25 min',
    prompts: [
      "A place where our spiritual or religious lives differ that I want to acknowledge is...",
      "How I feel about those differences — honestly — is...",
      "What I need from you regarding my spiritual life in our marriage is...",
    ],
    reflection: "What does mutual respect look like when two people hold different beliefs?",
  },
  {
    id: 160, day: 13, program: 'pre-marriage',
    title: 'Raising the Children',
    emoji: '🌱',
    tagline: "Children will ask the big questions. What do you want them to grow up believing?",
    body: "Discuss how you want to raise children spiritually — or whether spirituality will be part of their upbringing at all. This includes religious participation, values transmission, how you handle big existential questions they will ask. Be honest about where you agree and where you do not.",
    duration: '25–30 min',
    prompts: [
      "What I want to pass on to our children — in terms of values and beliefs — is...",
      "What role I want religion or spirituality to play in how we raise our children is...",
      "Where I think we might have a difference here — and how I want to handle it — is...",
    ],
    reflection: "What does it mean to raise children in a household with two different belief systems?",
  },
  {
    id: 161, day: 14, program: 'pre-marriage',
    title: 'Spiritual Practices as a Couple',
    emoji: '🕯️',
    tagline: "You do not have to pray the same way. But shared practices can deepen a marriage.",
    body: "Talk about whether and how spirituality or meaning-making practices could be part of your life as a couple. Not to impose — but to explore. What shared rituals, conversations, or practices would feel nourishing to both of you?",
    duration: '20 min',
    prompts: [
      "A spiritual or meaning-making practice I would want to share with you is...",
      "What I would not want our spiritual life as a couple to look like is...",
      "A practice we could try together — that honors both of our perspectives — is...",
    ],
    reflection: "What does spiritual connection between two people look like when it is genuine?",
  },
  {
    id: 162, day: 15, program: 'pre-marriage',
    title: 'The Friend Map',
    emoji: '🗺️',
    tagline: "Your friendships are part of who you are. They do not disappear when you marry.",
    body: "Map out your friendship networks together. Who are the important people in each of your lives? What role do those friendships play? What do they give you that the relationship does not and should not have to? Mutual respect for each other's social world starts with understanding it.",
    duration: '20–25 min',
    prompts: [
      "The friendships that are most important to me — and why — are...",
      "What my friendships give me that I need to protect in our marriage is...",
      "What I would want you to understand about my relationship with my friends is...",
    ],
    reflection: "What role do you want friendship to play in your life after marriage?",
  },
  {
    id: 163, day: 16, program: 'pre-marriage',
    title: 'Couple Friends',
    emoji: '👫',
    tagline: "A couple without a social world can become a closed system. That is its own kind of pressure.",
    body: "Talk about your vision for couple friendships: do you want them, how much, what that looks like. Name the couple friendships you already have, the ones you want to build, and what gets in the way of your social life as a couple.",
    duration: '20 min',
    prompts: [
      "My vision for our social life as a couple — in terms of friends and community — is...",
      "Something that has gotten in the way of us building more couple friendships is...",
      "A couple friendship I would like us to invest in more is...",
    ],
    reflection: "What would a thriving social life look like for you as a married couple?",
  },
  {
    id: 164, day: 17, program: 'pre-marriage',
    title: 'Time Apart',
    emoji: '🌙',
    tagline: "Healthy independence is not a threat to closeness. It is part of what makes closeness sustainable.",
    body: "Name honestly how much time apart you each need — time with your own friends, your own interests, your own solitude. Then talk about how you navigate that in your current relationship and how you want to navigate it in your marriage.",
    duration: '20–25 min',
    prompts: [
      "The amount of time alone or with my own friends that I genuinely need is...",
      "How I feel when I do not get that time is...",
      "What I would need from you to feel free to take that time without guilt is...",
    ],
    reflection: "What is the difference between independence that nourishes the relationship and distance that damages it?",
  },
  {
    id: 165, day: 18, program: 'pre-marriage',
    title: 'Together Time',
    emoji: '☀️',
    tagline: "Quality time does not happen by accident in a marriage. You have to protect it.",
    body: "Name what together time means to each of you: the activities, the energy, the presence. How much do you each want? What does it feel like when you have enough of it and when you do not? Make a vision for what your shared social and personal life looks like.",
    duration: '20 min',
    prompts: [
      "What together time means to me — specifically — is...",
      "How much together time I want in our marriage — and what form it takes — is...",
      "Something I want us to make sure we keep doing together — consistently — is...",
    ],
    reflection: "How do you protect together time when life gets busy?",
  },
  {
    id: 166, day: 19, program: 'pre-marriage',
    title: 'The Body in the Marriage',
    emoji: '🏃',
    tagline: "How you each take care of your body will show up in your marriage. Talk about it.",
    body: "Discuss your physical health habits: exercise, sleep, eating, energy. Not to judge — but to understand. How do your habits align, where do they differ, and what do you expect from each other in terms of physical health over the long arc of marriage?",
    duration: '20–25 min',
    prompts: [
      "My current relationship with my physical health — in honest terms — is...",
      "A health habit of mine that I want to protect in our marriage is...",
      "An expectation I have about health and physical care in our marriage is...",
    ],
    reflection: "What does it mean to care for yourself as an act of care for your partner?",
  },
  {
    id: 167, day: 20, program: 'pre-marriage',
    title: 'Mental Health in the Marriage',
    emoji: '🧠',
    tagline: "Mental health is not something you hide from a partner. It is something you navigate together.",
    body: "Talk about your mental health histories — therapy, anxiety, depression, trauma, how you have managed hard seasons. Not everything, but enough. Name what you need from your partner during difficult mental health moments and how you want to handle it as a couple.",
    duration: '25–30 min',
    prompts: [
      "Something about my mental health history that I want you to understand is...",
      "What I need from you when I am going through a hard mental health period is...",
      "My current relationship with professional support — therapy, coaching, etc. — is...",
    ],
    reflection: "How do you want to handle it if one of you needs more mental health support than the other?",
  },
  {
    id: 168, day: 21, program: 'pre-marriage',
    title: 'Substances and Vices',
    emoji: '🍷',
    tagline: "Unspoken expectations about substances become resentment. Say them now.",
    body: "Name your relationship with alcohol, cannabis, substances, or other vices honestly. Not to judge or demand change — but to be transparent. Name what is important to you, what you need, and where you have concerns.",
    duration: '20–25 min',
    prompts: [
      "My honest relationship with alcohol or other substances is...",
      "My expectations about substance use in our marriage are...",
      "Something I have a quiet concern about — or a strong feeling about — is...",
    ],
    reflection: "Where do your habits align and where do you need to make explicit agreements?",
  },
  {
    id: 169, day: 22, program: 'pre-marriage',
    title: 'Work-Life Balance',
    emoji: '⚖️',
    tagline: "Two people can share a home and still have completely different relationships with work.",
    body: "Talk about how you each relate to work: how much you work, how you decompress, what work gives you beyond income, and how you want to handle the intersection of work and home life in your marriage. Name what you need from each other here.",
    duration: '20–25 min',
    prompts: [
      "My current relationship with work — beyond just income — is...",
      "What I need from our home life to decompress from work is...",
      "An expectation I have about how work and home life should balance in our marriage is...",
    ],
    reflection: "What does a sustainable work-life balance actually look like for both of you?",
  },
  {
    id: 170, day: 23, program: 'pre-marriage',
    title: 'Whose Career?',
    emoji: '🚀',
    tagline: "When two people have big ambitions, someone usually has to give something up. Talk about it.",
    body: "Name each of your career ambitions honestly — where you want to go, how long it will take, what it requires. Then name the harder question: if there is ever a conflict between your career and your partner's, how do you want to handle it?",
    duration: '25–30 min',
    prompts: [
      "My genuine career ambition — what I want to build — is...",
      "What my career will likely require from our relationship in the next five to ten years is...",
      "How I think we should handle it if our career needs ever come into direct conflict is...",
    ],
    reflection: "How do you make sure both partners feel their ambitions are taken seriously?",
  },
  {
    id: 171, day: 24, program: 'pre-marriage',
    title: 'Sacrifice and Support',
    emoji: '🤝',
    tagline: "Every career choice affects both people. Make sure you are both choosing it.",
    body: "Talk about professional sacrifice — the times when one person's career advancement requires something from the other: time, money, relocation, emotional bandwidth. Name what you have already sacrificed for each other and what you are willing to sacrifice going forward.",
    duration: '25 min',
    prompts: [
      "Something I have already sacrificed or adjusted — for the sake of your career or our relationship — is...",
      "Something I would be willing to sacrifice for your career ambitions is...",
      "Something I would not be willing to sacrifice — that I need us to honor — is...",
    ],
    reflection: "How do you make sure sacrifice in a marriage is mutual over time rather than one-sided?",
  },
  {
    id: 172, day: 25, program: 'pre-marriage',
    title: 'Relocation',
    emoji: '📦',
    tagline: "Where you live is a joint decision. Make sure you actually agree.",
    body: "Talk about relocation openly: would either of you need to move for your career? Are there places you would or would not go? What does home mean to each of you, and how much of your identity is tied to where you live? Get concrete.",
    duration: '20–25 min',
    prompts: [
      "My relationship with where we live — how important it is to me — is...",
      "A scenario where relocation might be on the table for my career is...",
      "My honest feelings about relocating for your career — if it came up — are...",
    ],
    reflection: "How do you make a major relocation decision together rather than having it made by default?",
  },
  {
    id: 173, day: 26, program: 'pre-marriage',
    title: 'Financial Ambition',
    emoji: '💰',
    tagline: "Income targets, wealth goals, and financial risk tolerance — these are not just financial questions.",
    body: "Talk about financial ambition: what do you each want to earn, build, or accumulate? What does financial success mean to each of you? How much risk are you comfortable with in pursuit of it? Align on vision, not just budget.",
    duration: '20–25 min',
    prompts: [
      "My personal financial ambition — what I want to build over the next ten to twenty years — is...",
      "What financial security means to me — specifically — is...",
      "The level of financial risk I am comfortable with in pursuit of bigger goals is...",
    ],
    reflection: "Where do your financial ambitions align — and where might they create tension?",
  },
  {
    id: 174, day: 27, program: 'pre-marriage',
    title: 'Where We Live',
    emoji: '🏡',
    tagline: "The home you build is not just a physical space. It is the environment where your marriage lives.",
    body: "Talk about your vision for home: what kind of home, what neighborhood, what environment, and why. What does home feel like to each of you at its best? Name what you each need the home to be — and where your visions align or diverge.",
    duration: '20 min',
    prompts: [
      "My vision for the kind of home I want us to build together is...",
      "What home means to me — emotionally, not just practically — is...",
      "A difference in our visions for home that I want to name is...",
    ],
    reflection: "How do you create a shared home when two people have genuinely different ideas of what home means?",
  },
  {
    id: 175, day: 28, program: 'pre-marriage',
    title: 'Space and Order',
    emoji: '🧹',
    tagline: "Cleanliness standards and organizational preferences sound small. They are not.",
    body: "Talk honestly about your standards for cleanliness, organization, and shared space. What is non-negotiable for each of you? What do you each tend to let slide? How do you want to handle the inevitable differences — because there will be some?",
    duration: '20–25 min',
    prompts: [
      "My honest standard for cleanliness and organization at home is...",
      "Something about living together that I anticipate might create friction is...",
      "How I want us to handle it when our standards clash is...",
    ],
    reflection: "What household agreements would prevent most of the resentment before it starts?",
  },
  {
    id: 176, day: 29, program: 'pre-marriage',
    title: 'Aesthetics and Environment',
    emoji: '🎨',
    tagline: "Your home environment affects your mood, your energy, and the quality of your daily life together.",
    body: "Talk about aesthetics and home environment: how you want your space to look and feel, what your individual styles are, and how you make joint decisions when your tastes differ. Name a few specific things that matter to each of you.",
    duration: '15–20 min',
    prompts: [
      "The aesthetic or vibe I want our home to have is...",
      "Something about home design or environment that genuinely matters to me is...",
      "How I want us to make decisions when we have different tastes is...",
    ],
    reflection: "What does a home that reflects both of you look like?",
  },
  {
    id: 177, day: 30, program: 'pre-marriage',
    title: 'The Division of Labor',
    emoji: '📋',
    tagline: "Who does what at home — if you do not decide it, resentment will decide it for you.",
    body: "Map out the household labor you anticipate needing to divide: cooking, cleaning, errands, finances, maintenance, childcare logistics if applicable. Who does what, how often, what are the standards, and how do you renegotiate when it is not working?",
    duration: '25 min',
    prompts: [
      "The household tasks I am naturally inclined to take on — and actually enjoy — are...",
      "The tasks I would genuinely struggle with — or deeply not want to own — are...",
      "How I want us to handle it when the division feels unbalanced is...",
    ],
    reflection: "What does a genuinely fair division of labor look like — and is it the same as equal?",
  },
  {
    id: 178, day: 31, program: 'pre-marriage',
    title: 'The In-Law Reality',
    emoji: '🏠',
    tagline: "You are not just marrying each other. You are marrying into families. Be honest about what that means.",
    body: "Name the in-law dynamics each of you is bringing into this marriage — the expectations, the patterns, the personalities, and what you already know will need to be navigated. This is not about criticizing families — it is about being prepared.",
    duration: '25–30 min',
    prompts: [
      "Something about my family dynamic that I want you to understand before we marry is...",
      "An expectation my family has about our marriage or family life that I want to name is...",
      "Something I anticipate needing to navigate with your family is...",
    ],
    reflection: "What does a healthy relationship with both of your families look like in your marriage?",
  },
  {
    id: 179, day: 32, program: 'pre-marriage',
    title: 'Boundaries with Family',
    emoji: '🚧',
    tagline: "Loyalty to family and loyalty to your marriage are not the same thing. Know the difference.",
    body: "Talk about boundaries with extended family: what is appropriate to share, how involved family members should be in your decisions, and how you handle it when a family member crosses a line. Get concrete — not hypothetical.",
    duration: '25 min',
    prompts: [
      "A boundary I want us to hold with my family — that is important to me — is...",
      "A boundary I want us to hold with your family is...",
      "How I want us to handle it when a family member interferes or crosses a line is...",
    ],
    reflection: "What does it mean to present a united front as a married couple to both families?",
  },
  {
    id: 180, day: 33, program: 'pre-marriage',
    title: 'Holidays and Traditions',
    emoji: '🎄',
    tagline: "Holidays will be contested territory in most marriages. Sort it out before the first one.",
    body: "Name your family holiday traditions and expectations honestly. Then figure out together how you want to handle them in your marriage: whose family do you see when, how do you create your own traditions, and how do you navigate competing demands?",
    duration: '20–25 min',
    prompts: [
      "The holiday traditions that are most important to me — that I want to protect — are...",
      "What I anticipate will be the hardest holiday negotiation between our families is...",
      "How I want us to approach creating our own traditions — distinct from our families — is...",
    ],
    reflection: "How do you honor both families without either of you feeling like your family is always second?",
  },
  {
    id: 181, day: 34, program: 'pre-marriage',
    title: 'Generational Patterns',
    emoji: '🧬',
    tagline: "You will repeat what you do not name. Name the patterns you are bringing with you.",
    body: "Each partner names a generational pattern from their family that they want to consciously break — a way their parents handled things that they do not want to repeat in their own marriage. Name it clearly, then name what you want to do differently.",
    duration: '25 min',
    prompts: [
      "A pattern I saw in my parents' relationship that I do not want to repeat is...",
      "A way my family of origin handled things that I am still unlearning is...",
      "What I want to do differently — deliberately — in our marriage is...",
    ],
    reflection: "What would it mean to be the generation that breaks a pattern?",
  },
  {
    id: 182, day: 35, program: 'pre-marriage',
    title: 'Loyalty and Partnership',
    emoji: '💍',
    tagline: "Your partner comes first. That is what marriage means. Make sure you both mean it.",
    body: "Talk about the shift from family of origin to marriage partnership as the primary loyalty. What does it mean to each of you for your marriage to be the primary relationship? How do you handle moments when family pressure pulls against your marriage?",
    duration: '20–25 min',
    prompts: [
      "What it means to me for our marriage to be my primary loyalty is...",
      "A situation where I might find it hard to put our marriage first is...",
      "What I need from you in those moments — to feel like we are a team — is...",
    ],
    reflection: "What does it look like when your partner's loyalty to you is clear — even under family pressure?",
  },
  {
    id: 183, day: 36, program: 'pre-marriage',
    title: 'What the Wedding Means',
    emoji: '💒',
    tagline: "A wedding is one day. Make sure you know what it means to each of you — not what it looks like.",
    body: "Talk about what the wedding ceremony means to each of you — the values it represents, the people who need to be there, the tone you want. Then separate what matters to you from what you feel obligated to perform. Be honest about the difference.",
    duration: '25 min',
    prompts: [
      "What the wedding ceremony actually means to me — beyond the event — is...",
      "Something about the wedding that is genuinely important to me and not just expected is...",
      "Something I am willing to let go of — to make the wedding feel right for both of us — is...",
    ],
    reflection: "How do you make sure the wedding reflects who you actually are rather than what everyone else expects?",
  },
  {
    id: 184, day: 37, program: 'pre-marriage',
    title: 'The Guest List Reality',
    emoji: '📋',
    tagline: "The guest list is a values exercise. Who you invite says something about what you prioritize.",
    body: "Talk through the guest list together — not the names yet, but the philosophy. Who is essential, who is obligatory, who do you not want there but feel pressure to invite? Where are the conflicts? How do you make joint decisions when you disagree?",
    duration: '20–25 min',
    prompts: [
      "The people who I absolutely need to be at our wedding are...",
      "Someone I feel pressure to invite but do not genuinely want there is...",
      "How I want us to make the final call when we disagree about someone is...",
    ],
    reflection: "What does it mean to design a wedding that honors your relationship rather than your obligations?",
  },
  {
    id: 185, day: 38, program: 'pre-marriage',
    title: 'The Honeymoon Vision',
    emoji: '🌴',
    tagline: "The honeymoon is your first act as a married couple. Design it intentionally.",
    body: "Share your honeymoon visions honestly — what you each want the experience to be, what kind of travel or environment appeals to you, and what you want it to mean. Then figure out together where your visions overlap and how to create something that works for both of you.",
    duration: '20 min',
    prompts: [
      "My ideal honeymoon would feel like...",
      "Something I want our honeymoon to include that matters to me is...",
      "Where I am flexible — and where I am not — about the honeymoon is...",
    ],
    reflection: "What do you want to come home from the honeymoon carrying — beyond the photos?",
  },
  {
    id: 186, day: 39, program: 'pre-marriage',
    title: 'The First Year',
    emoji: '🌱',
    tagline: "The first year of marriage is unlike any other. Go in with eyes open.",
    body: "Talk honestly about your expectations for the first year: the adjustments, the learning curve, what might be harder than expected. Name what you hope for and what you are bracing for. Research consistently shows the first year includes real surprises — plan for them.",
    duration: '20–25 min',
    prompts: [
      "What I most hope the first year of our marriage will feel like is...",
      "Something I am genuinely bracing for — or nervous about — in the first year is...",
      "How I want us to handle it when the first year is harder than expected is...",
    ],
    reflection: "What agreement could you make now that would help the first year go better?",
  },
  {
    id: 187, day: 40, program: 'pre-marriage',
    title: 'Beyond the Honeymoon Phase',
    emoji: '🔭',
    tagline: "Love that lasts is not the same as love that is new. Know what you are building toward.",
    body: "Talk about the long arc of your relationship beyond the wedding and first year: what you want your marriage to look like in year five, year ten, year twenty. Name the things you most want to protect as life gets complicated — children, careers, time, stress.",
    duration: '25 min',
    prompts: [
      "What I want our marriage to look and feel like in ten years is...",
      "The things I most want to protect in our relationship as life gets busier are...",
      "What I am most afraid of letting drift in our marriage over time is...",
    ],
    reflection: "What investment today would most protect the marriage you want in the future?",
  },
  {
    id: 188, day: 41, program: 'pre-marriage',
    title: 'Our Conflict Agreement',
    emoji: '📜',
    tagline: "You will fight in your marriage. Make sure you have already decided how.",
    body: "Create your conflict agreement together: the specific commitments you both make about how you will fight. Not rules for the other person — but mutual commitments about tone, timing, taking breaks, what is off limits, and how you will return after.",
    duration: '25–30 min',
    prompts: [
      "One thing I commit to during conflict — that I want you to hold me to — is...",
      "Something that is genuinely off limits for me in a fight — that I need us to agree on — is...",
      "How I want us to handle it when one of us breaks our conflict agreement is...",
    ],
    reflection: "What would change in your conflict patterns if you held each other to your agreements?",
  },
  {
    id: 189, day: 42, program: 'pre-marriage',
    title: 'When to Ask for Help',
    emoji: '🆘',
    tagline: "Waiting until the marriage is in crisis to get help is waiting too long.",
    body: "Talk about your shared position on couples therapy and outside support. Not as a last resort — but as maintenance, investment, and smart risk management. Name what each of you needs to feel okay about asking for help and what conditions would trigger seeking it.",
    duration: '20–25 min',
    prompts: [
      "My honest feelings about couples therapy — as a general concept — are...",
      "A condition or situation that would make me want to seek outside help for our marriage is...",
      "What I need from you to feel safe about suggesting we get support is...",
    ],
    reflection: "What is the difference between seeking help from a place of strength versus desperation?",
  },
  {
    id: 190, day: 43, program: 'pre-marriage',
    title: 'Counseling as Maintenance',
    emoji: '🔧',
    tagline: "You service your car. Why not your marriage?",
    body: "Discuss the idea of counseling as routine maintenance rather than emergency intervention. What would it look like to build regular check-ins, retreats, or therapeutic support into the ongoing rhythm of your marriage? Make a preliminary agreement.",
    duration: '20 min',
    prompts: [
      "My vision for how we maintain our marriage proactively — not just when things go wrong — is...",
      "A form of regular support or check-in I would be open to is...",
      "What would make me most likely to actually follow through on getting help when we need it is...",
    ],
    reflection: "What does treating your marriage like something worth actively maintaining look like in practice?",
  },
  {
    id: 191, day: 44, program: 'pre-marriage',
    title: 'Repair in Marriage',
    emoji: '🧩',
    tagline: "How you come back after a fight matters more than the fight itself.",
    body: "Talk about your repair patterns: how you each come back after conflict, what a real repair looks and feels like to each of you, and what gets in the way of repair happening. Name what you each need for repair to feel genuine rather than performative.",
    duration: '20–25 min',
    prompts: [
      "What a genuine repair feels like to me — versus a surface-level truce — is...",
      "What I need from you for repair to feel real is...",
      "What typically gets in the way of repair happening between us is...",
    ],
    reflection: "What would it mean to become masters of repair rather than just avoiding conflict?",
  },
  {
    id: 192, day: 45, program: 'pre-marriage',
    title: 'The Conflict We Keep Having',
    emoji: '🔁',
    tagline: "Every couple has the same fight over and over. Name it — then decide how you want to hold it.",
    body: "Name the recurring conflict in your relationship: the one that keeps coming back in different forms. Then look at it together honestly — what is it really about, what are each of you actually needing, and what would it take to hold this perpetual problem differently?",
    duration: '25–30 min',
    prompts: [
      "The conflict we seem to keep having — in different forms — is...",
      "What I think it is really about — underneath the surface — is...",
      "What I actually need in those moments that I am not always communicating clearly is...",
    ],
    reflection: "What would it look like to accept that some conflicts are perpetual — and learn to manage them with grace?",
  },
  {
    id: 193, day: 46, program: 'pre-marriage',
    title: 'How Love Changes',
    emoji: '🌊',
    tagline: "Love does not stay the same. Knowing that before it happens is a gift.",
    body: "Talk about how love changes over time — from the early intensity to something deeper and less immediate. Name what you have already noticed change between you and what you want to pay attention to. This is not about losing love — it is about understanding its arc.",
    duration: '20–25 min',
    prompts: [
      "Something about how I experience love for you now that is different from how it felt early on is...",
      "What I want to protect about how we love each other as the relationship matures is...",
      "What I am most afraid of losing — in terms of how we feel about each other — over time is...",
    ],
    reflection: "What is the form of love you most want to be holding thirty years from now?",
  },
  {
    id: 194, day: 47, program: 'pre-marriage',
    title: 'Sustaining Desire',
    emoji: '🔥',
    tagline: "Desire in a long-term relationship does not sustain itself. It has to be tended.",
    body: "Talk honestly about desire — not just sexual, but the desire to be with each other, to engage, to choose each other again. What creates that for each of you? What kills it? What are you willing to do to keep tending it over decades?",
    duration: '20–25 min',
    prompts: [
      "What creates desire for you in this relationship — specifically — is...",
      "What tends to kill my desire — or my sense of wanting to engage — is...",
      "Something I would want us to commit to — to keep choosing each other — is...",
    ],
    reflection: "What is one thing you could start doing now that would protect desire over the long term?",
  },
  {
    id: 195, day: 48, program: 'pre-marriage',
    title: 'Preventing Drift',
    emoji: '🧭',
    tagline: "Drift in a marriage does not happen dramatically. It happens quietly, one skipped conversation at a time.",
    body: "Talk about what drift looks like: the slow accumulation of distance that happens when life crowds out connection. Name the specific conditions that create drift in your relationship and what you want to do proactively to prevent it from becoming irreversible.",
    duration: '20 min',
    prompts: [
      "When I imagine us drifting apart, what I imagine happening is...",
      "The conditions that make us most likely to drift are...",
      "A practice or commitment that would help us notice and correct drift early is...",
    ],
    reflection: "What is one early warning signal that would tell you drift is happening before it gets serious?",
  },
  {
    id: 196, day: 49, program: 'pre-marriage',
    title: 'Growing Together',
    emoji: '🌳',
    tagline: "Two people can grow in parallel or they can grow apart. The difference is intention.",
    body: "Talk about growth: how you each are changing, how you want to continue growing, and how you make sure growth does not pull you in opposite directions. Name what you each need to keep growing — and how your partner can support that rather than resist it.",
    duration: '20–25 min',
    prompts: [
      "The ways I want to continue growing — personally and professionally — are...",
      "How I want you to support my growth — even when it changes me — is...",
      "What I am afraid of regarding how we might grow apart is...",
    ],
    reflection: "What does growing together rather than apart look like over twenty years?",
  },
  {
    id: 197, day: 50, program: 'pre-marriage',
    title: 'The Long Game',
    emoji: '♟️',
    tagline: "Marriage is not a sprint. Know how you play the long game.",
    body: "Zoom out to the full arc of your marriage. What do you want your relationship to be in its later chapters — when children are grown, when careers slow down, when it is just the two of you again? Name what you are building toward at the largest scale.",
    duration: '25 min',
    prompts: [
      "What I want our marriage to feel like in its later chapters — when life slows down — is...",
      "What I most want to have built — together — by the end is...",
      "What I want people to see when they look at us in thirty years is...",
    ],
    reflection: "What decision you make today most affects the marriage you will have in thirty years?",
  },
  {
    id: 198, day: 51, program: 'pre-marriage',
    title: 'What We Want to Be Remembered For',
    emoji: '🏛️',
    tagline: "Legacy is not what you leave behind. It is how you lived and what you gave.",
    body: "Each partner names what they most want to be remembered for — as an individual and as a couple. Not achievements or titles, but character, impact, and presence. What do you want to have meant to the people whose lives you touched?",
    duration: '20–25 min',
    prompts: [
      "What I most want to be remembered for — as a person — is...",
      "What I want us to be remembered for — as a couple and a family — is...",
      "The kind of impact I want our life together to have is...",
    ],
    reflection: "What would you need to start doing now to be on track for the legacy you described?",
  },
  {
    id: 199, day: 52, program: 'pre-marriage',
    title: 'What We Want to Build',
    emoji: '🏗️',
    tagline: "Marriage is a building project. Know what you are building.",
    body: "Talk about what you want to build together — not just a life, but a specific one. The businesses, the communities, the family, the home, the projects, the impact. Get specific about the things you are choosing to build as partners.",
    duration: '25 min',
    prompts: [
      "Something I want us to build together — beyond just a household — is...",
      "A project, community, or contribution I want us to be part of is...",
      "What building something meaningful with you means to me is...",
    ],
    reflection: "What makes your vision of what you want to build genuinely exciting rather than just ambitious?",
  },
  {
    id: 200, day: 53, program: 'pre-marriage',
    title: 'Generativity',
    emoji: '🌾',
    tagline: "Generativity is the desire to create something that will outlast you. What is yours?",
    body: "Explore the concept of generativity together — the drive to create something that contributes beyond yourself, that you pass on, that matters beyond your own lifetime. Name what each of you feels pulled toward and how your marriage could amplify that.",
    duration: '20–25 min',
    prompts: [
      "Something I feel genuinely called to contribute — beyond my own life — is...",
      "How I want our marriage to amplify that contribution is...",
      "What I want our children, our community, or the world to have because of how we lived is...",
    ],
    reflection: "What would it mean to live a life that gives something back at scale?",
  },
  {
    id: 201, day: 54, program: 'pre-marriage',
    title: 'The Shared Dream',
    emoji: '🌠',
    tagline: "Every strong marriage has a shared dream at its center. Name yours.",
    body: "Each partner names their biggest, most alive dream — for their life, their work, their family, their impact. Then talk about where those dreams overlap and what the shared dream at the center of your marriage might be. Let it be big enough to actually move you.",
    duration: '25 min',
    prompts: [
      "The biggest, most alive dream I carry — if I let myself say it out loud — is...",
      "Where I see our individual dreams overlapping is...",
      "What I think the shared dream at the center of our marriage might be is...",
    ],
    reflection: "What would it mean to build a marriage around a shared dream rather than just shared logistics?",
  },
  {
    id: 202, day: 55, program: 'pre-marriage',
    title: 'Values in Action',
    emoji: '⚖️',
    tagline: "Values you do not live are just preferences. Name how yours show up — or do not.",
    body: "Name the three to five values you each want to govern your marriage and family life. Not the aspirational ones — the actual ones you want to make decisions from. Then look at whether your current habits and patterns reflect those values. Be honest.",
    duration: '25–30 min',
    prompts: [
      "The three values I most want to govern our marriage are...",
      "A place where my current habits do not fully reflect those values is...",
      "How I want our marriage to embody those values in daily life is...",
    ],
    reflection: "What one decision could you make in the next week that would be fully aligned with your shared values?",
  },
  {
    id: 203, day: 56, program: 'pre-marriage',
    title: 'The Full Conversation',
    emoji: '📚',
    tagline: "You have been in one of the most important conversations of your life. Name what you learned.",
    body: "Look back over the full arc of this program. Name the conversations that surprised you, the discoveries that changed something, and the moments when you understood each other in a new way. This is not a summary — it is a real reflection on what happened.",
    duration: '25–30 min',
    prompts: [
      "The conversation in this program that most surprised me was...",
      "Something I learned about you — that I did not fully know — is...",
      "Something I learned about myself through this process is...",
    ],
    reflection: "What do you most want to carry forward from everything you have explored?",
  },
  {
    id: 204, day: 57, program: 'pre-marriage',
    title: 'The Lingering Questions',
    emoji: '❓',
    tagline: "If something is unresolved, now is the time. After the wedding is harder.",
    body: "Name anything that is still unresolved, still unclear, or still sitting uneasy from this program — or from anywhere in your relationship. Not to manufacture problems, but to surface anything real that deserves attention before you make this commitment.",
    duration: '25–30 min',
    prompts: [
      "Something that is still sitting unresolved for me from this program is...",
      "A question I have about our future that I have not asked clearly is...",
      "Something I want to address — or at least acknowledge — before we commit is...",
    ],
    reflection: "What would it mean to go into your marriage with everything important said?",
  },
  {
    id: 205, day: 58, program: 'pre-marriage',
    title: 'What We Know Now',
    emoji: '💡',
    tagline: "You know more about each other now than when you started. Own it.",
    body: "Each partner names the three most important things they now know — about themselves, about their partner, or about their relationship — that they did not know at the start of this program. Name them clearly and specifically. Knowledge is only useful when it is owned.",
    duration: '20–25 min',
    prompts: [
      "The three most important things I know now — that I did not know before — are...",
      "How what I learned changes what I want to bring to our marriage is...",
      "What I am most grateful to understand about you is...",
    ],
    reflection: "How do you use what you learned here to keep learning about each other for the rest of your lives?",
  },
  {
    id: 206, day: 59, program: 'pre-marriage',
    title: 'Vows in Your Own Words',
    emoji: '✍️',
    tagline: "Your vows should sound like you — not like a template. Write them.",
    body: "Each partner drafts their personal vows — not to perform, but to think through what they are actually committing to. What are you promising? What are you committing to in yourself, in your partner, and in the marriage? Read them to each other. Refine them. Make them real.",
    duration: '45–60 min',
    prompts: [
      "What I am promising you — specifically — in this marriage is...",
      "What I am committing to becoming — in myself — as your partner is...",
      "What I want this marriage to be — in my own words — is...",
    ],
    reflection: "What part of your vows feels most alive — and most true?",
  },
  {
    id: 207, day: 60, program: 'pre-marriage',
    title: 'The Commitment',
    emoji: '💍',
    tagline: "You did the work. Now you choose each other — not by default, but by design.",
    body: "The final day. You have talked about everything. You have named the hard things, explored the deep things, and built something real together in this process. Today you close the program the same way you will close the ceremony: by choosing each other out loud, on purpose, with full knowledge of who you are choosing.",
    duration: '30–45 min',
    prompts: [
      "Having done all of this work, what I want to say to you about who you are is...",
      "What I am choosing when I choose you — knowing everything I know — is...",
      "The marriage I commit to building with you — in my own words — is...",
    ],
    reflection: "What does it feel like to choose someone not despite knowing them fully, but because of it?",
  },
  {
    id: 208, day: 8, program: 'trust-rebuilding',
    title: 'How You Learned to Trust',
    emoji: '🌱',
    tagline: "Your earliest experiences with trust shaped the way you trust today.",
    body: "Each partner spends a few minutes thinking about the earliest time they remember trusting someone — and the earliest time they remember being let down. Share those memories with each other, not to assign blame, but to understand the soil that your trust patterns grew from.",
    duration: '20–25 min',
    prompts: [
      "The earliest time I remember trusting someone fully was...",
      "The first time I remember trust being broken — and what that felt like — was...",
      "One way that early experience still shows up in how I trust today is...",
    ],
    reflection: "What did hearing your partner's early trust story open up in you?",
  },
  {
    id: 209, day: 9, program: 'trust-rebuilding',
    title: 'Your Attachment Blueprint',
    emoji: '🗺️',
    tagline: "Anxious, avoidant, or secure — your attachment style is a map, not a sentence.",
    body: "Without pathologizing, each partner names which attachment tendency they most identify with — anxious (fear of abandonment), avoidant (fear of engulfment), or earned secure. Name how that tendency shows up in moments of conflict or disconnection. Understanding the pattern is the first step to changing it.",
    duration: '20–25 min',
    prompts: [
      "The attachment tendency I most identify with is... and here is how it shows up...",
      "When I feel unsafe in this relationship, my automatic move is...",
      "What I need from you — when my attachment system gets activated — is...",
    ],
    reflection: "What would it mean to approach your own attachment pattern with curiosity instead of shame?",
  },
  {
    id: 210, day: 10, program: 'trust-rebuilding',
    title: 'What Trust Feels Like in the Body',
    emoji: '🫀',
    tagline: "Trust is not a thought — it is a felt sense. Learn to read yours.",
    body: "Each partner describes what it feels like — physically and emotionally — when they feel trusted and when they feel distrusted. Where do you feel safety in your body? Where do you feel the threat of betrayal? Naming the somatic experience gives both partners a real-time language for trust.",
    duration: '15–20 min',
    prompts: [
      "When I feel fully trusted by you, my body feels...",
      "When I sense distrust — or feel unsafe — it shows up in my body as...",
      "A signal I have that tells me trust is present between us right now is...",
    ],
    reflection: "How can you use these body signals as an early warning system going forward?",
  },
  {
    id: 211, day: 11, program: 'trust-rebuilding',
    title: 'The Trust Wounds That Came Before',
    emoji: '🩹',
    tagline: "Some of what you bring to this relationship was already broken before it started.",
    body: "Each partner names one or two trust wounds from before this relationship — from family, past partners, or early experiences — that they know still influence them. The goal is not to excuse current behavior, but to give context that helps your partner understand where certain reactions come from.",
    duration: '20–25 min',
    prompts: [
      "A trust wound from before this relationship that still lives in me is...",
      "The way that wound tends to show up between us — even when it is not about you — is...",
      "What I need from you when that old wound gets activated is...",
    ],
    reflection: "What changes when you see your partner's old wound — not as an attack — but as an echo?",
  },
  {
    id: 212, day: 12, program: 'trust-rebuilding',
    title: 'How You Each Define Trust',
    emoji: '📖',
    tagline: "You might be using the same word and meaning completely different things.",
    body: "Each partner writes out their personal definition of trust — what it means to them, what behaviors prove it, and what behaviors destroy it. Read your definitions to each other and notice where they overlap and where they diverge. Mismatched definitions are a hidden source of trust failures.",
    duration: '20–30 min',
    prompts: [
      "When I say 'I trust you,' what I mean is...",
      "The specific behaviors that prove trust to me are...",
      "The specific behaviors that break trust for me — even ones that might seem small — are...",
    ],
    reflection: "Where did your definitions most differ — and what does that difference cost you?",
  },
  {
    id: 213, day: 13, program: 'trust-rebuilding',
    title: 'Trustworthiness vs. Trusting',
    emoji: '⚖️',
    tagline: "Being trusted and being trusting are two different skills. You need both.",
    body: "Explore the difference between being trustworthy (keeping commitments, being honest, showing up reliably) and being trusting (extending good faith, letting your guard down, believing in your partner's intentions). Each partner names their stronger side and their weaker side honestly.",
    duration: '15–20 min',
    prompts: [
      "I think I am stronger at being trustworthy / being trusting because...",
      "The area where I need to grow — in trustworthiness or in trusting — is...",
      "One specific thing I can do this week to strengthen my weaker side is...",
    ],
    reflection: "What does it feel like to honestly assess which side you are weaker on?",
  },
  {
    id: 214, day: 14, program: 'trust-rebuilding',
    title: 'The Trust Inventory',
    emoji: '📋',
    tagline: "Before you can rebuild, you need an honest picture of where things actually stand.",
    body: "Each partner rates the current state of trust in three areas: emotional trust (feelings are safe here), behavioral trust (commitments are kept), and relational trust (I believe in us). Rate each from 1–10 and share your numbers. Talk about what would move each number up by two points.",
    duration: '25–30 min',
    prompts: [
      "My honest rating for emotional trust right now is... because...",
      "My honest rating for behavioral trust right now is... because...",
      "The one area where I need the most movement — and what would create it — is...",
    ],
    reflection: "What surprised you about your own numbers — or your partner's?",
  },
  {
    id: 215, day: 15, program: 'trust-rebuilding',
    title: 'The Proactive Disclosure',
    emoji: '📣',
    tagline: "Honesty is not just answering questions — it is volunteering what your partner needs to know.",
    body: "Proactive transparency means sharing things your partner would want to know before they have to ask. Each partner thinks of one thing — even something small — they have been withholding or delaying, and shares it today. This is not a confession booth. It is a practice of choosing openness.",
    duration: '20–25 min',
    prompts: [
      "Something I have been holding back that you probably would want to know is...",
      "The reason I have been slow to share it is...",
      "What I am committing to doing differently — to be more proactively open — is...",
    ],
    reflection: "How did it feel to share before being asked?",
  },
  {
    id: 216, day: 16, program: 'trust-rebuilding',
    title: 'No More Half-Truths',
    emoji: '🔍',
    tagline: "A half-truth is still a lie. You both know this. Name it.",
    body: "Half-truths are technically accurate statements designed to create a false impression. They often feel safer than full honesty — but they erode trust just as surely as direct lies. Each partner names one area where they tend to give partial answers rather than full ones, and why.",
    duration: '20–25 min',
    prompts: [
      "An area where I tend to give half-answers instead of full ones is...",
      "The reason I do that — the fear or protection behind it — is...",
      "What full transparency in that area would actually look like is...",
    ],
    reflection: "What would change between you if both of you committed to full answers over safe ones?",
  },
  {
    id: 217, day: 17, program: 'trust-rebuilding',
    title: 'Becoming an Open Book',
    emoji: '📂',
    tagline: "Secrets create distance. Openness — chosen freely — creates closeness.",
    body: "Choose one area of your life — finances, friendships, work stress, phone habits — where you have kept things more private than your partner probably wants. Today, open that area voluntarily. Walk your partner through it. Not because you were caught, but because you choose closeness over privacy.",
    duration: '25–30 min',
    prompts: [
      "The area I am choosing to open more fully today is...",
      "What you will find there — honestly — is...",
      "The reason I kept it more private before, and why I am choosing differently now, is...",
    ],
    reflection: "What did it feel like to open an area you usually keep to yourself?",
  },
  {
    id: 218, day: 18, program: 'trust-rebuilding',
    title: 'The Secrecy Audit',
    emoji: '🔐',
    tagline: "Not all privacy is harmful — but it is worth knowing the difference.",
    body: "Healthy privacy and problematic secrecy are different things. Healthy privacy respects both partners' individuality. Problematic secrecy creates a hidden world that the other partner is excluded from. Together, name which private areas in your lives feel healthy and which ones feel like they create unnecessary distance.",
    duration: '20–25 min',
    prompts: [
      "An area where I want healthy privacy — and why that is legitimate — is...",
      "An area where my privacy might have crossed into unhelpful secrecy is...",
      "What I am willing to open or adjust to create more transparency between us is...",
    ],
    reflection: "How do you maintain individuality without creating distance?",
  },
  {
    id: 219, day: 19, program: 'trust-rebuilding',
    title: 'Say the Uncomfortable Thing',
    emoji: '🗣️',
    tagline: "The things you avoid saying are usually the things that most need to be said.",
    body: "Each partner names one uncomfortable truth they have been circling around — something they know is real but have avoided saying out loud to their partner. Then say it. Not to wound, but to clear the air. Transparency that only covers comfortable truths is not real transparency.",
    duration: '20–25 min',
    prompts: [
      "Something I have been avoiding saying — because it feels uncomfortable — is...",
      "What I am afraid will happen if I say it is...",
      "What I actually need from you after I say it is...",
    ],
    reflection: "What happened in you — and between you — when you said the thing you had been avoiding?",
  },
  {
    id: 220, day: 20, program: 'trust-rebuilding',
    title: 'Transparency About Temptation',
    emoji: '🚦',
    tagline: "Being honest about where you are vulnerable is not weakness — it is advanced trust.",
    body: "This is not an interrogation. Each partner voluntarily names something that represents a temptation or risk area for them — something they know could become a problem if not acknowledged. Naming it removes its power. It also invites your partner to become a genuine ally, not just a potential victim.",
    duration: '20–25 min',
    prompts: [
      "An area in my life where I know I am vulnerable or have to be careful is...",
      "The way I currently manage that — on my own — is...",
      "How you could actually help me with it — if I let you in — is...",
    ],
    reflection: "What changes when vulnerability is shared before it becomes a crisis?",
  },
  {
    id: 221, day: 21, program: 'trust-rebuilding',
    title: 'The Transparency Commitment',
    emoji: '📜',
    tagline: "Transparency without a commitment is just a feeling. Make it a practice.",
    body: "Together, design a specific transparency practice — not rules imposed on each other, but shared agreements about how you will keep each other informed, updated, and in-the-loop going forward. What does proactive honesty look like between you two, practically and weekly?",
    duration: '25–30 min',
    prompts: [
      "The transparency agreements I want to make with you going forward are...",
      "A specific practice — something we actually do regularly — that would help me feel in-the-loop is...",
      "What I am willing to do differently to hold up my end of this is...",
    ],
    reflection: "How do these agreements feel different from rules — and how do you keep them that way?",
  },
  {
    id: 222, day: 22, program: 'trust-rebuilding',
    title: 'Small Promises, Big Returns',
    emoji: '🤝',
    tagline: "Trust is not rebuilt in grand gestures. It is rebuilt in small promises kept.",
    body: "Think about the micro-commitments of daily life — saying you will call, being on time, following through on something minor. Each partner names two or three small promises they have not been keeping consistently, and commits specifically to changing one of them this week.",
    duration: '15–20 min',
    prompts: [
      "A small promise I have not been keeping consistently is...",
      "Why it matters — even if it seems small — is...",
      "What I am specifically committing to do differently starting this week is...",
    ],
    reflection: "What is the cumulative effect — over months — of small promises kept versus broken?",
  },
  {
    id: 223, day: 23, program: 'trust-rebuilding',
    title: 'The Reliability Map',
    emoji: '🗂️',
    tagline: "Where are you fully reliable? Where do you fall short? Be honest.",
    body: "Each partner maps out their own reliability — not their partner's. Name three areas where you consistently follow through, and two areas where you know you are inconsistent. Self-awareness about your gaps is the first step to filling them.",
    duration: '20–25 min',
    prompts: [
      "Three areas where I am genuinely reliable and follow through are...",
      "Two areas where I know I am inconsistent — honestly — are...",
      "What gets in the way of my reliability in those areas is...",
    ],
    reflection: "What would your partner say your most important reliability gap is — and would they be right?",
  },
  {
    id: 224, day: 24, program: 'trust-rebuilding',
    title: 'The Compound Effect of Keeping Your Word',
    emoji: '📈',
    tagline: "Every kept promise is a deposit. Every broken one is a withdrawal. Know your balance.",
    body: "Discuss the idea that trust works like compound interest — small consistent deposits build an account that becomes incredibly resilient over time. Each partner shares what deposits they have noticed their partner making, and what withdrawals have cost the account most.",
    duration: '20–25 min',
    prompts: [
      "The deposits I have noticed you making — the things you have been doing right — are...",
      "The withdrawal that cost our trust account the most was...",
      "The deposits I am committing to making this week are...",
    ],
    reflection: "What does it feel like to think about trust as something you build — not just something you repair?",
  },
  {
    id: 225, day: 25, program: 'trust-rebuilding',
    title: 'Predictability as a Love Language',
    emoji: '📅',
    tagline: "When you are predictable, your partner does not have to be on guard. That is a gift.",
    body: "Predictability is not boring — it is safe. Discuss the areas of your relationship where you are predictable (and what that gives your partner) versus the areas where you are unpredictable (and what that costs them). Commit to increasing predictability in one specific area.",
    duration: '15–20 min',
    prompts: [
      "An area where my predictability gives you something reliable to count on is...",
      "An area where my unpredictability creates anxiety or uncertainty for you is...",
      "One specific thing I can do to become more predictable in that area is...",
    ],
    reflection: "What is the emotional experience of having a partner you can consistently predict?",
  },
  {
    id: 226, day: 26, program: 'trust-rebuilding',
    title: 'Over-Promising and Under-Delivering',
    emoji: '📉',
    tagline: "Saying less and doing more is worth more than saying everything and delivering half.",
    body: "Many people over-promise because saying yes feels good in the moment. Each partner reflects on whether they tend to over-commit and under-deliver, and what drives that pattern. Practice today by each making one honest, modest, specific commitment — and keeping it by end of week.",
    duration: '15–20 min',
    prompts: [
      "An area where I tend to over-promise and under-deliver is...",
      "What drives me to say yes when I should say 'maybe' or 'I am not sure' is...",
      "One modest, specific, achievable promise I am making to you right now is...",
    ],
    reflection: "What would it mean to become a partner whose yes always means yes?",
  },
  {
    id: 227, day: 27, program: 'trust-rebuilding',
    title: 'Showing Up Without Being Asked',
    emoji: '🪄',
    tagline: "The most powerful reliability is the kind that does not need a reminder.",
    body: "Think of three things you could do for your partner — or for the relationship — that would matter to them, without being asked. Then do them this week, unprompted. Today, share with your partner what you are planning. Unsolicited follow-through is one of the highest-trust behaviors.",
    duration: '15–20 min',
    prompts: [
      "Three things I know would matter to you — that I could do without being asked — are...",
      "The reason I have not already been doing them consistently is...",
      "What I am committing to doing unprompted this week is...",
    ],
    reflection: "What does it feel like to be seen and attended to without having to ask?",
  },
  {
    id: 228, day: 28, program: 'trust-rebuilding',
    title: 'The Weekly Reliability Check-In',
    emoji: '✅',
    tagline: "Building a habit of accountability does not happen by accident — design it.",
    body: "Together, design a simple weekly ritual — 10 minutes or less — where each partner reports back on commitments made the previous week. Not a performance review, but a genuine shared check-in that normalizes accountability and celebrates follow-through. Sketch the format together.",
    duration: '20–25 min',
    prompts: [
      "The commitments I made last week — and whether I followed through — are...",
      "What got in the way, if anything, and what I want to do differently is...",
      "What I want our weekly reliability ritual to look like going forward is...",
    ],
    reflection: "How do you make accountability feel like care instead of surveillance?",
  },
  {
    id: 229, day: 29, program: 'trust-rebuilding',
    title: 'Catching It Early',
    emoji: '🚨',
    tagline: "A small crack in the dam is far easier to fix than a flood. Learn to see it early.",
    body: "A trust slip is a small breach — a forgotten promise, an evasive answer, a missed check-in — that could harden into something bigger if unaddressed. Each partner names one recent trust slip — their own — and practices the early repair: acknowledge, understand, recommit.",
    duration: '20–25 min',
    prompts: [
      "A recent small trust slip on my part that I have not fully addressed is...",
      "What I think that slip cost you — even if it seemed small — is...",
      "What I want to say now, and what I am committing to so it does not repeat, is...",
    ],
    reflection: "What makes early repair so much less costly than delayed repair?",
  },
  {
    id: 230, day: 30, program: 'trust-rebuilding',
    title: 'The Language of Repair',
    emoji: '🛠️',
    tagline: "Repair is a skill. It has a language. Learn yours.",
    body: "Effective repair is not just 'I am sorry.' It is a sequence: acknowledge what happened, take responsibility without deflecting, name the impact on your partner, explain what you understand now, and commit to a specific change. Practice this sequence together using a real recent example.",
    duration: '25–30 min',
    prompts: [
      "What happened — and my role in it — was...",
      "The impact it had on you, as best I understand it, was...",
      "What I understand now that I did not understand before, and what I am committing to change, is...",
    ],
    reflection: "What is missing from most apologies — and what makes a real one land differently?",
  },
  {
    id: 231, day: 31, program: 'trust-rebuilding',
    title: 'Receiving Repair',
    emoji: '🫶',
    tagline: "Letting repair in is its own skill. You are allowed to need time — and allowed to receive it.",
    body: "The betrayed partner sometimes struggles to accept repair — either dismissing it before it lands, or waiting so long to receive it that the rebuilding partner loses hope. Each partner names what makes it easy versus hard to receive repair — and what the rebuilder can do to help it land.",
    duration: '20–25 min',
    prompts: [
      "What makes it easy for me to receive repair and feel the apology land is...",
      "What makes it hard — what blocks it from reaching me — is...",
      "What I need from you, specifically, when you are trying to repair with me is...",
    ],
    reflection: "What is the difference between receiving repair and condoning what happened?",
  },
  {
    id: 232, day: 32, program: 'trust-rebuilding',
    title: 'When the Same Thing Keeps Happening',
    emoji: '🔁',
    tagline: "Repeating the same slip after repair is a pattern. Patterns need a different strategy.",
    body: "If a trust slip has happened more than once after a repair attempt, the repair strategy is not working. Together, examine a recurring pattern honestly — what is it, when does it happen, what triggers it, and what different approach might actually interrupt it?",
    duration: '25–30 min',
    prompts: [
      "The recurring pattern I want us to look at honestly today is...",
      "What I think is driving the repetition — for me, honestly — is...",
      "A different approach or intervention that we have not tried yet is...",
    ],
    reflection: "What would it mean to admit that the current repair strategy is not sufficient — and choose a better one?",
  },
  {
    id: 233, day: 33, program: 'trust-rebuilding',
    title: 'The 24-Hour Rule',
    emoji: '⏱️',
    tagline: "Letting a trust slip sit unaddressed for more than a day multiplies its cost.",
    body: "Introduce a shared agreement: any trust slip — however small — gets addressed within 24 hours. Not punished. Not interrogated. Just acknowledged and repaired quickly, before resentment builds. Practice this week and check in on how it feels.",
    duration: '15–20 min',
    prompts: [
      "A recent example where I let too much time pass before addressing something is...",
      "What I was afraid would happen if I brought it up sooner is...",
      "What I am willing to commit to — in terms of addressing slips quickly — is...",
    ],
    reflection: "What changes in the emotional climate between you when nothing is allowed to sit unaddressed?",
  },
  {
    id: 234, day: 34, program: 'trust-rebuilding',
    title: 'The Repair Request',
    emoji: '📩',
    tagline: "Asking for repair is not weakness. It is clarity. Let your partner know what you need.",
    body: "Instead of waiting for your partner to notice a slip and offer repair, practice asking for it directly. Each partner names a recent moment where they needed repair and did not ask for it — and then practices asking for it now, in the room, specifically and without weaponizing it.",
    duration: '20–25 min',
    prompts: [
      "A moment recently where I needed repair and did not ask is...",
      "What I actually needed in that moment — specifically — was...",
      "Asking for it now, directly: what I need from you about that is...",
    ],
    reflection: "How does asking for what you need — rather than waiting to be seen — change the dynamic?",
  },
  {
    id: 235, day: 35, program: 'trust-rebuilding',
    title: 'Building a Repair Culture',
    emoji: '🏗️',
    tagline: "The best relationships are not the ones where nothing goes wrong — they are the ones where repair is fast.",
    body: "A repair culture is one where mistakes are normalized, accountability is expected, and apologies are a sign of strength. Discuss what your current repair culture looks like, and what you want it to look like. Name three specific things you can each do to make repair faster and easier.",
    duration: '20–25 min',
    prompts: [
      "What our current repair culture looks like — honestly — is...",
      "What I would love it to look like instead is...",
      "Three things I can personally do to make repair faster and easier between us are...",
    ],
    reflection: "What would your relationship feel like if both of you fully believed that any rupture could be repaired?",
  },
  {
    id: 236, day: 36, program: 'trust-rebuilding',
    title: 'The Right to Be Angry',
    emoji: '🔥',
    tagline: "Your anger after betrayal is not a problem to be managed. It is information to be heard.",
    body: "The betrayed partner has a right to anger — and too often that anger is rushed, minimized, or weaponized into a control tool. Today, the betrayed partner speaks their anger — what happened, what it cost, what it felt like — and the rebuilding partner listens without defending. Just listens.",
    duration: '25–30 min',
    prompts: [
      "What I am angry about — specifically — is...",
      "What the betrayal cost me — that I am still grieving — is...",
      "What I need you to understand about the depth of that anger is...",
    ],
    reflection: "What happens to anger when it is finally fully heard?",
  },
  {
    id: 237, day: 37, program: 'trust-rebuilding',
    title: 'Grief Has Its Own Timeline',
    emoji: '🌊',
    tagline: "You do not get to decide when your partner is done grieving. Neither do they.",
    body: "Trust betrayal triggers real grief — loss of safety, loss of the story you thought you were living, loss of a version of your partner. Each partner names what they are still grieving, even now. The rebuilding partner listens without urgency to reach the end of it.",
    duration: '20–25 min',
    prompts: [
      "What I am still grieving — that has not fully resolved yet — is...",
      "The version of us — or of you — that I lost and still miss is...",
      "What I need from you while I am still in this grief is...",
    ],
    reflection: "What does it mean to grieve inside a relationship that is simultaneously trying to heal?",
  },
  {
    id: 238, day: 38, program: 'trust-rebuilding',
    title: 'The Choice to Stay',
    emoji: '🚪',
    tagline: "Staying is a choice, not a given. Owning that choice is where your power lives.",
    body: "The betrayed partner did not have to stay. They chose to. That choice deserves to be named, owned, and honored. Today, the betrayed partner articulates why they chose to stay — not to validate the betrayal, but to claim agency over their own decision.",
    duration: '20–25 min',
    prompts: [
      "The reasons I chose to stay — my own honest reasons — are...",
      "What I need that choice to mean for how we move forward is...",
      "The conditions under which I am continuing to make that choice are...",
    ],
    reflection: "How does claiming your choice to stay — rather than feeling like you had no choice — change your relationship to this process?",
  },
  {
    id: 239, day: 39, program: 'trust-rebuilding',
    title: 'Intrusive Thoughts and Triggers',
    emoji: '⚡',
    tagline: "The mind replays what it has not yet processed. That is not a flaw — it is a feature.",
    body: "Betrayal often produces intrusive thoughts, mental replays, and trigger moments — a song, a location, an expression. Name the specific triggers that still catch you off guard, and discuss together what the rebuilding partner can do when those triggers are activated.",
    duration: '20–25 min',
    prompts: [
      "Specific triggers that still catch me off guard are...",
      "What happens in me when I get triggered — what the experience is like — is...",
      "What I need from you when I am triggered — specifically — is...",
    ],
    reflection: "What is the difference between being controlled by your triggers and simply acknowledging them?",
  },
  {
    id: 240, day: 40, program: 'trust-rebuilding',
    title: 'The Surveillance Trap',
    emoji: '📡',
    tagline: "Checking up might feel like safety — but it often becomes its own prison.",
    body: "After betrayal, the hurt partner sometimes falls into surveillance behaviors — checking phones, tracking locations, interrogating timelines. These behaviors can feel necessary but rarely produce the safety they promise. Discuss this trap honestly — what drives it, what it costs, and what genuine safety would look like instead.",
    duration: '25–30 min',
    prompts: [
      "The ways I have fallen into surveillance behavior — honestly — are...",
      "What I am actually looking for when I do that is...",
      "What would genuinely create safety for me — that is not surveillance — is...",
    ],
    reflection: "What is the difference between accountability structures that help and surveillance that harms?",
  },
  {
    id: 241, day: 41, program: 'trust-rebuilding',
    title: 'What Choosing to Continue Actually Means',
    emoji: '🔄',
    tagline: "Continuing does not mean forgetting. It means choosing a different future over a frozen past.",
    body: "Choosing to continue the relationship after betrayal is not the same as pretending it did not happen. Together, name what continuing actually means for each of you — what you are choosing toward, not just what you are choosing to leave behind.",
    duration: '20–25 min',
    prompts: [
      "When I say I am choosing to continue, what I am actually choosing toward is...",
      "What I am not willing to leave behind — even as I move forward — is...",
      "The version of this relationship I am rebuilding toward is...",
    ],
    reflection: "How does knowing what you are building toward change the quality of the rebuilding?",
  },
  {
    id: 242, day: 42, program: 'trust-rebuilding',
    title: 'Naming What You Need to Heal',
    emoji: '🧭',
    tagline: "Healing does not happen on a vague hope. Name exactly what you need.",
    body: "The betrayed partner names — as specifically as possible — what they need in order to continue healing. Not demands, but honest disclosures of what would actually help. The rebuilding partner listens and responds honestly about what they can and cannot provide.",
    duration: '25–30 min',
    prompts: [
      "What I genuinely need from you — to keep healing — is...",
      "What I need from myself in this process is...",
      "What I need to see from you over the next thirty days specifically is...",
    ],
    reflection: "What happens to the healing process when needs are stated clearly versus left to be guessed?",
  },
  {
    id: 243, day: 43, program: 'trust-rebuilding',
    title: 'Accountability Without Collapse',
    emoji: '🏋️',
    tagline: "Owning what you did — fully — without falling apart. That is the work.",
    body: "The rebuilding partner often struggles with one of two failure modes: defensiveness (minimizing the harm) or collapse (being so consumed by guilt that they become a burden their partner has to manage). Today, practice full accountability that is grounded and steady — not performative shame.",
    duration: '20–25 min',
    prompts: [
      "What I did, and the full impact I understand it had, is...",
      "The way I sometimes make my guilt your problem — and what I want to do instead — is...",
      "What steady, grounded accountability looks like from me is...",
    ],
    reflection: "What is the difference between genuine remorse and performative suffering?",
  },
  {
    id: 244, day: 44, program: 'trust-rebuilding',
    title: 'The Long Game',
    emoji: '📆',
    tagline: "Rebuilding trust is measured in months and years. Commit to the duration.",
    body: "The rebuilding partner needs to understand that this process does not end when they feel better — it ends when trust is genuinely restored, on the betrayed partner's timeline. Name honestly: what does the long game look like? What would you need to sustain this for a year or more?",
    duration: '20–25 min',
    prompts: [
      "What I understand about the timeline of rebuilding — honestly — is...",
      "What I need to sustain this commitment over the long term is...",
      "What I am willing to do — consistently — even when it is hard or feels unfair — is...",
    ],
    reflection: "What would it mean to commit to this process for as long as it takes?",
  },
  {
    id: 245, day: 45, program: 'trust-rebuilding',
    title: 'Patience Is Not Passive',
    emoji: '⏳',
    tagline: "Real patience in a rebuilding relationship is active — it is a daily choice.",
    body: "The rebuilding partner often mistakes waiting for patience. Real patience is active — it means continuing to show up, not pulling back when progress feels slow, and resisting the urge to rush your partner through their healing. Name what active patience looks like for you specifically.",
    duration: '15–20 min',
    prompts: [
      "The ways I have confused waiting with patience are...",
      "What active patience actually looks like from me in this relationship is...",
      "The moments when patience is hardest for me — and what I do when that happens — is...",
    ],
    reflection: "What does your partner need to feel from you that tells them you are not just waiting for this to be over?",
  },
  {
    id: 246, day: 46, program: 'trust-rebuilding',
    title: 'Humility Without Humiliation',
    emoji: '🙇',
    tagline: "You can be humble without being degraded. Learn the difference and hold the line.",
    body: "Humility is a strength in the rebuilding partner — acknowledging fault, deferring when appropriate, staying open to feedback. Humiliation is when the dynamic crosses into punishment or degradation. Together, name where that line is for your relationship, and commit to the health of both partners.",
    duration: '20–25 min',
    prompts: [
      "The ways I am genuinely willing to be humble in this process are...",
      "The line that would make this feel humiliating rather than humble — for me — is...",
      "How we can hold accountability and dignity for both of us at the same time is...",
    ],
    reflection: "Why does a healthy rebuilding process require both partners to maintain their dignity?",
  },
  {
    id: 247, day: 47, program: 'trust-rebuilding',
    title: 'The Ongoing Apology',
    emoji: '🔄',
    tagline: "Sometimes the apology is not one conversation. It is a practice — delivered in behavior, over time.",
    body: "Discuss what the ongoing apology looks like — not as repeated verbal apologies (which can become noise) but as behavioral patterns that consistently communicate: I understand what I did, I am different now, and you can count on that. Name the specific behaviors that are your ongoing apology.",
    duration: '20–25 min',
    prompts: [
      "The behaviors that are my ongoing apology — what I am doing differently — are...",
      "The thing I want you to be able to count on from me, every day, is...",
      "How I want you to hold me accountable when I fall short of that is...",
    ],
    reflection: "What is the difference between saying sorry and being sorry?",
  },
  {
    id: 248, day: 48, program: 'trust-rebuilding',
    title: 'Checking In Without Being Prompted',
    emoji: '📞',
    tagline: "Proactive check-ins tell your partner you are thinking about them — not waiting to be tested.",
    body: "The rebuilding partner commits to a practice this week: checking in once a day — not to report in like a suspect, but to genuinely ask how their partner is doing, what they need, and how the process is going for them. Today, discuss what those check-ins should feel like to be welcome rather than obligatory.",
    duration: '15–20 min',
    prompts: [
      "What a welcome daily check-in from you looks like — versus an obligatory one — is...",
      "What I actually want to hear from you when you check in is...",
      "What I am committing to doing — proactively — this week is...",
    ],
    reflection: "What does a proactive check-in communicate that a reactive one cannot?",
  },
  {
    id: 249, day: 49, program: 'trust-rebuilding',
    title: 'Not Keeping Score',
    emoji: '🧹',
    tagline: "The rebuilding partner cannot be in permanent debt. That is not a relationship — it is a sentence.",
    body: "There is a difference between sustained accountability and a dynamic where the betrayed partner holds permanent leverage. Today, name honestly: are there signs of scorekeeping entering the relationship? What would it take to move toward accountability without an unpayable debt?",
    duration: '20–25 min',
    prompts: [
      "Ways I notice scorekeeping entering our dynamic — from either side — are...",
      "What the difference between accountability and unpayable debt feels like for me is...",
      "What I need to release — or receive — in order to move away from scorekeeping is...",
    ],
    reflection: "What would a relationship look like where accountability is complete but the debt is gone?",
  },
  {
    id: 250, day: 50, program: 'trust-rebuilding',
    title: 'The Full Truth',
    emoji: '💬',
    tagline: "Full disclosure is not a weapon. It is the only foundation a rebuilt relationship can stand on.",
    body: "If there are still any hidden truths — partial disclosures, protected information, things shared incompletely — today is the day to complete them. This is not a trap. It is an invitation to clear the ground fully so that what is built next has real footing.",
    duration: '30–40 min',
    prompts: [
      "If there is anything I have disclosed only partially — this is what the full truth looks like...",
      "The reason I have not shared this fully before is...",
      "What I need from you to receive this without it becoming a new crisis is...",
    ],
    reflection: "What does full ground clearance actually feel like — and what does it make possible?",
  },
  {
    id: 251, day: 51, program: 'trust-rebuilding',
    title: 'The Courage to Say the Hard Thing',
    emoji: '🦁',
    tagline: "You will not build a trustworthy relationship by protecting each other from hard truths.",
    body: "Emotional courage in a relationship is the capacity to say true things even when they are uncomfortable, risky, or unwelcome. Each partner names one area where they have been choosing comfort over honesty — and practices saying the hard thing today.",
    duration: '20–25 min',
    prompts: [
      "Something I have been choosing comfort over honesty about is...",
      "What I am afraid will happen if I say the hard thing is...",
      "What I actually want to say — and am saying now — is...",
    ],
    reflection: "How does saying the hard thing change the trust level between you — even when it is uncomfortable?",
  },
  {
    id: 252, day: 52, program: 'trust-rebuilding',
    title: 'Communicating Needs Cleanly',
    emoji: '🎯',
    tagline: "A need communicated clearly is a gift. A need hidden behind a complaint is a trap.",
    body: "Practice the difference between need statements and complaint statements. A complaint says 'You never...' A need says 'I need...' Each partner converts three recent complaints into clean need statements — and shares them directly.",
    duration: '20–25 min',
    prompts: [
      "A complaint I have had recently — and the clean need underneath it — is...",
      "Another complaint and its underlying need is...",
      "The need I find hardest to state directly — and why — is...",
    ],
    reflection: "What happens in your partner when you ask for what you need instead of criticizing what you are not getting?",
  },
  {
    id: 253, day: 53, program: 'trust-rebuilding',
    title: 'No Editing for Approval',
    emoji: '✂️',
    tagline: "When you edit what you say to manage how your partner reacts, you both lose.",
    body: "Many people in rebuilding relationships self-censor — not for kindness, but to manage their partner's reaction and protect the peace. Today, name the things you have been editing, and practice saying one of them without editing for approval.",
    duration: '20–25 min',
    prompts: [
      "Something I have been editing — because I was managing your reaction — is...",
      "What I was afraid would happen if I said it as is was...",
      "What I actually want to say, unedited, is...",
    ],
    reflection: "What do you both gain when honesty is not filtered through the need for approval?",
  },
  {
    id: 254, day: 54, program: 'trust-rebuilding',
    title: 'Listening to Understand, Not to Respond',
    emoji: '👂',
    tagline: "The fastest way to make your partner feel unheard is to respond before you have actually listened.",
    body: "Practice a structured listening exercise: Partner A speaks for four minutes about how they have been feeling in the rebuild process. Partner B reflects back what they heard — without adding, defending, or redirecting. Then switch. Listening without an agenda is itself a trust act.",
    duration: '20–25 min',
    prompts: [
      "What I have been feeling in this rebuild process — honestly — is...",
      "What I most need you to understand about where I am right now is...",
      "What I heard you say — reflected back as accurately as I can — is...",
    ],
    reflection: "What is the emotional effect of being truly heard without the other person rushing to respond?",
  },
  {
    id: 255, day: 55, program: 'trust-rebuilding',
    title: 'The Question You Have Been Afraid to Ask',
    emoji: '❓',
    tagline: "If there is a question you have not asked yet, it is costing you more than the answer would.",
    body: "Each partner names one question they have not asked — because they were afraid of the answer, or afraid of the reaction. Then ask it. Gently, directly, and with the agreement that both partners will answer fully and receive the answer without weaponizing it.",
    duration: '25–30 min',
    prompts: [
      "A question I have been afraid to ask you is...",
      "What I am afraid the answer might be is...",
      "Asking it now — directly — and what I need from you in response is...",
    ],
    reflection: "What happened when the question was finally asked and answered?",
  },
  {
    id: 256, day: 56, program: 'trust-rebuilding',
    title: 'Communication as a Daily Practice',
    emoji: '📡',
    tagline: "Good communication is not a crisis skill. It is a daily practice — or it breaks down.",
    body: "Design a simple daily communication practice together — something that keeps you genuinely in contact with each other's inner world every day. Not a formal session. A real touchpoint — 5 to 10 minutes where you check in on something real. Design it together so it feels like yours.",
    duration: '20–25 min',
    prompts: [
      "The kind of daily connection I most need from you is...",
      "What gets in the way of us staying genuinely in contact day to day is...",
      "The daily communication practice I want us to design together looks like...",
    ],
    reflection: "What would daily genuine contact do to the overall trust level between you over six months?",
  },
  {
    id: 257, day: 57, program: 'trust-rebuilding',
    title: 'The Nervous System Knows',
    emoji: '🧠',
    tagline: "Your nervous system is still deciding whether you are safe here. Help it decide.",
    body: "Betrayal dysregulates the nervous system — leaving one or both partners in a chronic low-level threat response. Learn each other's nervous system signals: what does hyperactivation look like for your partner? What does shutdown look like? Practice a simple co-regulation technique together today.",
    duration: '20–25 min',
    prompts: [
      "When my nervous system is in threat mode, what you might notice is...",
      "What helps me come back to regulation most reliably is...",
      "Something we can do together — right now — that helps us both land is...",
    ],
    reflection: "What is the relationship between felt safety in the body and the ability to trust emotionally?",
  },
  {
    id: 258, day: 58, program: 'trust-rebuilding',
    title: 'Creating a Safe Container',
    emoji: '🏡',
    tagline: "Safety is not the absence of difficulty. It is knowing that difficulty will not destroy you.",
    body: "A safe relational container is built from predictability, respect, and emotional availability. Each partner names what makes them feel contained and safe in this relationship — and what breaks that sense of safety. Together, commit to three specific safety-building practices.",
    duration: '20–25 min',
    prompts: [
      "What makes me feel genuinely safe with you is...",
      "What breaks my sense of safety — even now — is...",
      "Three specific things we can do to strengthen our safety container are...",
    ],
    reflection: "What does it feel like in your body when you know you are in a safe relational space?",
  },
  {
    id: 259, day: 59, program: 'trust-rebuilding',
    title: 'Touch as Re-attunement',
    emoji: '🤲',
    tagline: "Physical connection is a language the nervous system speaks before words are possible.",
    body: "Safe, consensual physical touch is one of the fastest ways to restore a sense of connection and co-regulation after rupture. Today, practice a structured touch exercise: hold hands for five minutes in silence, then share what you each noticed. No agenda beyond presence.",
    duration: '15–20 min',
    prompts: [
      "What I noticed in my body during the silence was...",
      "What came up emotionally — unexpectedly — was...",
      "What physical connection communicates between us that words cannot is...",
    ],
    reflection: "How does non-verbal physical presence create safety that conversation alone cannot?",
  },
  {
    id: 260, day: 60, program: 'trust-rebuilding',
    title: 'De-escalation as a Shared Skill',
    emoji: '🌡️',
    tagline: "When things get hot, who de-escalates? Make it a shared practice — not a burden on one.",
    body: "De-escalation is one of the most important skills in a rebuilding relationship. It requires recognizing when conversation is leaving safe territory and calling a pause — without stonewalling, without abandoning, and without losing the thread. Practice the pause together today.",
    duration: '20–25 min',
    prompts: [
      "My signs that a conversation has left safe territory are...",
      "What I need when I call a pause — what I need you to understand about it — is...",
      "How we can pause and return — so no conversation gets permanently abandoned — is...",
    ],
    reflection: "What is the difference between a pause that repairs and a pause that abandons?",
  },
  {
    id: 261, day: 61, program: 'trust-rebuilding',
    title: 'Emotional Availability',
    emoji: '💛',
    tagline: "Being emotionally available is not the same as being emotionally reactive. Learn the difference.",
    body: "Emotional availability means you are present, regulated, and accessible to your partner's feelings without immediately making it about your own. It is a trained capacity, not a natural talent. Each partner names when they are most emotionally available — and when they are least.",
    duration: '20–25 min',
    prompts: [
      "When I am most emotionally available to you is...",
      "When I am least emotionally available — and what usually drives that — is...",
      "What I can do to become more consistently available — especially during hard moments — is...",
    ],
    reflection: "What does your partner need to feel emotionally held by you — and are you providing that?",
  },
  {
    id: 262, day: 62, program: 'trust-rebuilding',
    title: 'Safety in Conflict',
    emoji: '🛡️',
    tagline: "Conflict does not have to feel dangerous. Design a container where it does not.",
    body: "For a rebuilding relationship, conflict can activate old fears — that this is the end, that nothing is safe, that the other shoe is dropping. Together, design a conflict agreement: what rules of engagement will keep both of you safe even when things are hard?",
    duration: '25–30 min',
    prompts: [
      "What makes conflict feel unsafe for me — specifically — is...",
      "What I need from you during conflict to feel like we are still okay is...",
      "The rules of engagement I want us to agree on are...",
    ],
    reflection: "How do you know — in the middle of a hard conversation — that you are still fundamentally safe with each other?",
  },
  {
    id: 263, day: 63, program: 'trust-rebuilding',
    title: 'The Felt Sense of Safety',
    emoji: '☀️',
    tagline: "Safety is not just an idea — it is something your body feels or does not feel.",
    body: "Each partner describes what it feels like — in their body — when they feel genuinely safe with their partner. Then describe what the absence of that feels like. Use specific body language and sensations, not just emotional labels. Practice generating that safe feeling together deliberately.",
    duration: '20–25 min',
    prompts: [
      "When I feel genuinely safe with you, my body feels like...",
      "When that safety is absent, what my body feels like is...",
      "Something we can do right now — deliberately — to generate that felt safety is...",
    ],
    reflection: "What would it mean for safety to be something you actively create rather than something you hope arrives?",
  },
  {
    id: 264, day: 64, program: 'trust-rebuilding',
    title: 'Naming the Signs',
    emoji: '🌤️',
    tagline: "Trust coming back is subtle at first. Name the signs so you both know what you are seeing.",
    body: "Trust does not announce itself. It returns slowly, in small signals — a laugh that comes naturally, a thought you share without filtering it, a moment of relaxation you did not plan. Today, each partner names two or three signs they have already noticed that suggest trust is beginning to return.",
    duration: '20–25 min',
    prompts: [
      "A moment recently where I noticed trust returning — for me — was...",
      "A sign I see in you that tells me something is healing is...",
      "Something I notice in our interactions now that was not there before is...",
    ],
    reflection: "What does it mean to consciously recognize — and celebrate — the early signs of return?",
  },
  {
    id: 265, day: 65, program: 'trust-rebuilding',
    title: 'The Shift in Your Body',
    emoji: '🌿',
    tagline: "Your body knows before your mind does. What is it telling you now?",
    body: "As trust returns, the nervous system begins to relax — less vigilance, less scanning for threat, more openness. Each partner describes how their body feels different now compared to early in the rebuilding process. Name the shift specifically — even if it is subtle.",
    duration: '15–20 min',
    prompts: [
      "The way my body feels different now — compared to the worst moment of this — is...",
      "The area where I notice the most relaxation — or the most remaining tension — is...",
      "What I notice in my body when we are at our best right now is...",
    ],
    reflection: "What does the body's gradual relaxation tell you about the direction you are heading?",
  },
  {
    id: 266, day: 66, program: 'trust-rebuilding',
    title: 'Moments You Believed Again',
    emoji: '🌅',
    tagline: "Belief is rebuilt in moments. Name them.",
    body: "Name specific moments — not feelings in general, but actual moments — where you found yourself believing in this relationship again. When did you catch yourself thinking: we might actually make it? Capture those moments precisely. They are evidence.",
    duration: '20–25 min',
    prompts: [
      "A specific moment when I caught myself believing in us again was...",
      "What about that moment made belief possible was...",
      "The more of those moments I name, the more I feel...",
    ],
    reflection: "What do the belief moments have in common — and how do you create more of them?",
  },
  {
    id: 267, day: 67, program: 'trust-rebuilding',
    title: 'What Your Partner Has Done Right',
    emoji: '👏',
    tagline: "Name what is working. Acknowledgment accelerates what you want more of.",
    body: "Each partner names specifically what the other has done well in this rebuilding process. Not to let them off the hook. Not to downplay what happened. But because acknowledging what is genuinely working is both true and motivating. Accountability and appreciation are not opposites.",
    duration: '20–25 min',
    prompts: [
      "Something you have done in this process that genuinely made a difference is...",
      "A moment where you showed up in a way I did not expect is...",
      "What your effort has communicated to me about who you are is...",
    ],
    reflection: "What does naming progress do for both of you — and for the relationship itself?",
  },
  {
    id: 268, day: 68, program: 'trust-rebuilding',
    title: 'Noticing Without Catastrophizing',
    emoji: '🔭',
    tagline: "You can notice a worry without turning it into a verdict.",
    body: "As trust rebuilds, worries still arise — a delayed text, an unexplained mood, a moment of distance. Practice the skill of noticing without catastrophizing: name the worry, check the evidence, then check in with your partner instead of spiraling. Practice this together with a real recent example.",
    duration: '20–25 min',
    prompts: [
      "A recent moment where I noticed a worry and started to catastrophize was...",
      "What the worry was — and what the evidence actually said — was...",
      "What checking in with you — instead of spiraling — looked like or would have looked like is...",
    ],
    reflection: "What is the difference between staying alert and living in permanent threat mode?",
  },
  {
    id: 269, day: 69, program: 'trust-rebuilding',
    title: 'The Trust That Is Already Here',
    emoji: '🌱',
    tagline: "You are not starting from zero. Name the trust that has already been rebuilt.",
    body: "It can feel like trust is a distant destination. But trust has already been partially rebuilt — in small actions, in kept commitments, in honest conversations. Today, each partner names the trust that is already present. Inventory what is here, not just what is still missing.",
    duration: '20–25 min',
    prompts: [
      "The areas where I genuinely trust you — right now — are...",
      "The trust that has been rebuilt since the lowest point is...",
      "What naming the existing trust does for me is...",
    ],
    reflection: "What changes about the rebuilding process when you can see how much has already been rebuilt?",
  },
  {
    id: 270, day: 70, program: 'trust-rebuilding',
    title: 'Writing the New Story',
    emoji: '📝',
    tagline: "You are not going back. The new version of this relationship needs its own story.",
    body: "The old relationship — the one before the rupture — is gone. What is being built is something new. Together, begin to articulate the story of this new relationship: what it stands for, what it has survived, what it is capable of, and where it is going.",
    duration: '25–30 min',
    prompts: [
      "The old version of our relationship — what it was before the rupture — was...",
      "What the new version is becoming — what we are building now — is...",
      "The story of what we survived and chose — that I want us to own — is...",
    ],
    reflection: "What does it mean to be the authors of a new story — one that neither of you could have written before this?",
  },
  {
    id: 271, day: 71, program: 'trust-rebuilding',
    title: 'Choosing Vulnerability Again',
    emoji: '🌸',
    tagline: "Vulnerability after betrayal is the bravest thing you can do. Do it anyway.",
    body: "As trust returns, the invitation is to move toward greater vulnerability — not performance vulnerability, but real sharing of fears, hopes, and inner experiences that you have been holding close. Each partner shares something genuinely vulnerable that they have not yet said in this process.",
    duration: '20–25 min',
    prompts: [
      "Something genuinely vulnerable that I have not yet said in this process is...",
      "The reason I have been holding it back is...",
      "What I need from you to be able to keep being this open is...",
    ],
    reflection: "What does it mean to choose vulnerability in a relationship that has already hurt you?",
  },
  {
    id: 272, day: 72, program: 'trust-rebuilding',
    title: 'Deeper Questions',
    emoji: '🔮',
    tagline: "There are questions you stopped asking after the rupture. It is time to start asking them again.",
    body: "Deeper intimacy requires deeper questions — about dreams, fears, meaning, identity. Each partner asks their partner one question they have never asked before — or one they stopped asking after the betrayal. Listen fully. Let the answers in.",
    duration: '25–30 min',
    prompts: [
      "A question I have never asked you — or stopped asking — is...",
      "The thing I most want to understand about who you are becoming is...",
      "What asking and being asked these questions does for our closeness is...",
    ],
    reflection: "What does curiosity about your partner do for the relationship that familiarity alone cannot?",
  },
  {
    id: 273, day: 73, program: 'trust-rebuilding',
    title: 'Shared Dreams Revisited',
    emoji: '🌠',
    tagline: "The rupture may have put the future on hold. It is time to pick it back up.",
    body: "What dreams and plans were paused — or abandoned — after the rupture? Each partner names one shared dream they are ready to begin talking about again. Not to pretend the past did not happen, but to signal that you are both still invested in a future together.",
    duration: '20–25 min',
    prompts: [
      "A shared dream or plan that got set aside after everything happened is...",
      "Whether I am ready to return to it — and what returning would require — is...",
      "The future I want to be building with you — starting now — is...",
    ],
    reflection: "What does the return of shared dreaming tell you about where you are in the healing?",
  },
  {
    id: 274, day: 74, program: 'trust-rebuilding',
    title: 'Being Known Again',
    emoji: '🪞',
    tagline: "The deepest intimacy is being fully known — not just tolerated, but truly seen.",
    body: "After betrayal, many partners pull back from being fully known — protecting themselves from future hurt. Practice the return of being fully known: each partner shares one aspect of themselves they have been keeping at a safe distance since the rupture.",
    duration: '20–25 min',
    prompts: [
      "A part of myself I have kept at a safe distance since the rupture is...",
      "Why I pulled that part back — what I was protecting — is...",
      "What it would mean to let you see that part of me again is...",
    ],
    reflection: "What does being fully known — and chosen despite being fully known — feel like?",
  },
  {
    id: 275, day: 75, program: 'trust-rebuilding',
    title: 'Pleasure and Joy as Signals',
    emoji: '🎉',
    tagline: "When joy returns, it is telling you something. Let it.",
    body: "Joy and pleasure in the relationship are trust signals — your system is safe enough to open to enjoyment again. Plan something you both genuinely enjoy this week — not as a performance of normality, but as an intentional invitation to let lightness return. Plan it together today.",
    duration: '15–20 min',
    prompts: [
      "Something we used to enjoy together that I have missed is...",
      "A moment recently where I felt genuine lightness or joy between us was...",
      "What I want to plan for this week — something that brings both of us real pleasure — is...",
    ],
    reflection: "What does the return of joy in this relationship communicate that words alone cannot?",
  },
  {
    id: 276, day: 76, program: 'trust-rebuilding',
    title: 'Deepening Physical Intimacy',
    emoji: '🔥',
    tagline: "Physical intimacy is a language of trust. As trust deepens, let the language expand.",
    body: "Talk openly and specifically about where physical intimacy is in the relationship right now — what has returned, what is still guarded, and what each partner needs to move toward more connection. This is not performance. It is an honest, caring conversation about closeness.",
    duration: '20–25 min',
    prompts: [
      "Where physical intimacy is for me right now — honestly — is...",
      "What I need to feel safe enough to move toward more physical closeness is...",
      "What I want to communicate to you physically — that I am having trouble putting in words — is...",
    ],
    reflection: "How does physical intimacy both reflect and create trust?",
  },
  {
    id: 277, day: 77, program: 'trust-rebuilding',
    title: 'The Intimacy You Always Wanted',
    emoji: '💎',
    tagline: "Sometimes the crisis creates the opening for a closeness you never had before.",
    body: "Some couples discover — on the other side of rebuilding — that the relationship they built after the rupture is closer than anything they had before it. Explore: is there a vision of intimacy you have never quite allowed yourself to name? What kind of closeness are you truly after?",
    duration: '25–30 min',
    prompts: [
      "The kind of closeness I have always wanted — but never fully let myself have — is...",
      "What has kept me from that level of intimacy — even before all of this — is...",
      "What I am willing to move toward now — that I was not before — is...",
    ],
    reflection: "What is possible in this relationship now that was not possible before?",
  },
  {
    id: 278, day: 78, program: 'trust-rebuilding',
    title: 'The Maintenance Mindset',
    emoji: '🔧',
    tagline: "Trust maintained is infinitely easier than trust rebuilt. Design your maintenance.",
    body: "The work of long-term trust is preventive. The practices that rebuild trust — proactive honesty, prompt repair, consistent follow-through — are the same practices that maintain it. Together, name which practices from this program you are committing to keep doing permanently.",
    duration: '20–25 min',
    prompts: [
      "The practices from this program that have made the most difference are...",
      "The ones I am committing to making permanent habits are...",
      "How I will know if I am starting to let the maintenance slide is...",
    ],
    reflection: "What would your relationship look like in three years if you kept every practice you named today?",
  },
  {
    id: 279, day: 79, program: 'trust-rebuilding',
    title: 'The Annual Trust Audit',
    emoji: '📊',
    tagline: "Build a yearly check-in into your relationship's structure. Prevention is a practice.",
    body: "Design a simple annual ritual — a dedicated conversation, once a year — where you take stock of trust in the relationship: what is strong, what needs attention, what commitments need renewing. Name the format, the timing, and what you will cover. Make it an official part of your relationship.",
    duration: '20–25 min',
    prompts: [
      "What our annual trust audit would cover is...",
      "When and how we would do it — so it actually happens — is...",
      "What I want this yearly ritual to feel like — its tone and spirit — is...",
    ],
    reflection: "What is the value of making preventive relationship maintenance a structured, recurring practice?",
  },
  {
    id: 280, day: 80, program: 'trust-rebuilding',
    title: 'Early Warning Systems',
    emoji: '🚦',
    tagline: "Design the warning system before you need it — not after the alarm goes off.",
    body: "Name the early signals — in yourself and in the relationship — that indicate trust is under strain before a rupture occurs. What do you each notice first? Design a shared protocol: when either partner notices these signals, what do they do? Agreement in advance is the system.",
    duration: '20–25 min',
    prompts: [
      "The early signals — in myself — that tell me something is off in the relationship are...",
      "The signals I notice in you or in us that something needs attention are...",
      "Our agreed protocol when either of us notices those signals is...",
    ],
    reflection: "How does having a plan for the early signals change your confidence in the relationship's resilience?",
  },
  {
    id: 281, day: 81, program: 'trust-rebuilding',
    title: 'Rituals That Hold You Together',
    emoji: '🕯️',
    tagline: "Rituals are how relationships remember what they are. Design yours.",
    body: "Relationship rituals — daily, weekly, seasonal — create the fabric of trust and connection over time. Name the rituals you already have, name the ones that got dropped during the hard season, and design one new one together that belongs specifically to the relationship you have now — the rebuilt version.",
    duration: '20–25 min',
    prompts: [
      "Rituals we already have that hold us together are...",
      "Rituals that got dropped that I want to bring back are...",
      "A new ritual — one that belongs to this version of us — that I want to create is...",
    ],
    reflection: "What do rituals do for a relationship that grand gestures cannot?",
  },
  {
    id: 282, day: 82, program: 'trust-rebuilding',
    title: 'When to Seek Outside Support',
    emoji: '🧭',
    tagline: "Knowing when you need more than each other is wisdom — not weakness.",
    body: "Even the most committed partners sometimes need outside support to maintain what they have built — therapy, coaching, community. Name the signs that would tell you it is time to bring in outside support, and the resources you would turn to. Remove the stigma by designing the protocol together.",
    duration: '20–25 min',
    prompts: [
      "The signs that would tell me we need outside support are...",
      "The kind of support I would want us to reach for first is...",
      "What makes it hard to reach for outside support — and how we can lower that barrier — is...",
    ],
    reflection: "What does it say about your relationship that you can plan for outside support together?",
  },
  {
    id: 283, day: 83, program: 'trust-rebuilding',
    title: 'The Forward Commitment',
    emoji: '🧱',
    tagline: "You are not maintaining a relationship. You are continuing to build one.",
    body: "The difference between a maintained relationship and a built one is intention. Name — specifically — what you are each committing to building going forward. Not in general. Not as a feeling. As a practice: what will you actually do, in the days and months ahead, to keep building this?",
    duration: '20–25 min',
    prompts: [
      "What I am committing to building — in myself — going forward is...",
      "What I am committing to building — in us — is...",
      "The specific practice I will keep regardless of how things feel on any given day is...",
    ],
    reflection: "What does choosing to keep building — even when it would be easier to coast — say about you?",
  },
  {
    id: 284, day: 84, program: 'trust-rebuilding',
    title: 'What Sustained Trust Looks Like',
    emoji: '🌳',
    tagline: "Sustainable trust is not a feeling — it is a structure. Build the structure.",
    body: "Describe what a sustainably trusting relationship looks like between you — day to day, month to month. What does it feel like in daily life? What practices hold it together? What does each partner contribute? Name the picture specifically enough that you would both recognize it when you are living it.",
    duration: '20–25 min',
    prompts: [
      "What day-to-day life looks like in a sustainably trusting relationship between us is...",
      "The practices that hold the structure of our trust together are...",
      "What my specific contribution to sustained trust looks like is...",
    ],
    reflection: "How do you keep choosing the structure — even on the days when you do not feel like it?",
  },
  {
    id: 285, day: 85, program: 'trust-rebuilding',
    title: 'What Was Lost and What Was Found',
    emoji: '🗝️',
    tagline: "Honor both. What you lost is real. What you found is also real.",
    body: "As you move toward completion, name honestly what was lost in this process — what cannot be recovered, what has genuinely changed — and what was found: insights, capacities, understanding, closeness that did not exist before. Both are true. Hold both.",
    duration: '25–30 min',
    prompts: [
      "What I genuinely lost in this process — that I am still mourning — is...",
      "What I found in this process — that I could not have found any other way — is...",
      "What holding both at the same time feels like is...",
    ],
    reflection: "What does it mean to grieve a loss and name a gain in the same breath — honestly?",
  },
  {
    id: 286, day: 86, program: 'trust-rebuilding',
    title: 'Forgiving Forward',
    emoji: '🕊️',
    tagline: "Forgiveness is not something you did once. It is something you choose, again, going forward.",
    body: "Forgiveness in a rebuilding relationship is not a one-time event — it is a recurring choice made when old anger rises, when new triggers appear, and when resentment tries to return. Name what forgiveness means for you — not as erasure, but as a repeated choice you are making for your own freedom.",
    duration: '25–30 min',
    prompts: [
      "What forgiveness means to me — how I define it for myself — is...",
      "The moments when I have to choose it again — when the old anger comes back — look like...",
      "Why I am choosing it — for myself, not just for you — is...",
    ],
    reflection: "What does choosing forgiveness over and over do for you — independent of what it does for your partner?",
  },
  {
    id: 287, day: 87, program: 'trust-rebuilding',
    title: 'The Strength You Did Not Know You Had',
    emoji: '💪',
    tagline: "This process asked more of you than you knew you had. Name what you found.",
    body: "Each partner names a strength, capacity, or quality in themselves that they did not fully know they had until this process demanded it. What did the hardest parts of rebuilding reveal about who you are?",
    duration: '20–25 min',
    prompts: [
      "A strength in myself that this process revealed — that I did not know I had — is...",
      "The moment that most tested that strength — and what I did — was...",
      "What knowing I have that capacity changes for me going forward is...",
    ],
    reflection: "What do you think of yourself — and of your partner — after everything you have both endured and chosen?",
  },
  {
    id: 288, day: 88, program: 'trust-rebuilding',
    title: 'Celebrating the Work',
    emoji: '🥂',
    tagline: "You did the hard thing. Celebrate it — not as a finish line, but as a mile marker.",
    body: "This work deserved to be acknowledged. Plan a meaningful celebration together — not elaborate, just real. Something that marks this chapter, honors the work both of you did, and names the relationship you have now. A meal, an evening, a letter read aloud, a trip. Something that says: this mattered.",
    duration: '20–25 min',
    prompts: [
      "The way I want to celebrate and honor what we have done together is...",
      "What I most want to mark and acknowledge about this process is...",
      "What I want to remember — twenty years from now — about what we chose is...",
    ],
    reflection: "What does it mean to choose celebration after you choose to survive something?",
  },
  {
    id: 289, day: 89, program: 'trust-rebuilding',
    title: 'The New Foundation',
    emoji: '🏛️',
    tagline: "Name what you are standing on now. The foundation is real — and you built it.",
    body: "Describe the foundation of your relationship as it stands today — the values, commitments, shared understanding, and practices that now hold the structure. Name what each element is. You built this. It is real. It is yours.",
    duration: '25–30 min',
    prompts: [
      "The values that are foundational to our relationship now are...",
      "The commitments we have made that I trust to hold are...",
      "What I am standing on when I choose this relationship every day is...",
    ],
    reflection: "What does it feel like to stand on something you built — after rebuilding it from a broken place?",
  },
  {
    id: 290, day: 90, program: 'trust-rebuilding',
    title: 'The Ongoing Yes',
    emoji: '✨',
    tagline: "The commitment is not past tense. It is present. You are choosing each other right now.",
    body: "The final day. You have done the work — through the hardest parts of the arc, through the grief and the rebuilding, through the daily choices and the hard conversations. Today you speak your ongoing yes — not a conclusion, but a living commitment. You are choosing each other, out loud, right now, knowing everything.",
    duration: '30–45 min',
    prompts: [
      "Having done all of this — having lived through all of it together — what I want to say to you is...",
      "What I am choosing when I choose you — still, now, knowing everything — is...",
      "The relationship I am committing to building with you — from here — is...",
    ],
    reflection: "What does it feel like to arrive at a yes that was hard-won, chosen freely, and built on something real?",
  },

  // INFIDELITY RECOVERY — Days 8–180
  {
    id: 291, day: 8, program: 'infidelity-recovery',
    title: "The Weight of What Happened",
    emoji: "🪨",
    tagline: "Name the full weight of the betrayal together.",
    body: "Betrayal doesn't just hurt — it reshapes everything you thought was real. Today you give language to the weight: not just what happened, but what it cost you. Peace of mind. Security. The version of your relationship you believed in. Before healing can begin, the wound must be fully named.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Complete this sentence — 'The thing I lost that hurts the most is...'",
      "Betrayed partner: What do you find yourself questioning now that you never questioned before?",
      "Betraying partner: What do you believe this betrayal cost your partner? List at least 5 things.",
      "Betraying partner: Read your list out loud. Do not defend. Do not explain. Just witness."
    ],
    reflection: "The betrayed partner sets the pace. The betraying partner's job today is to hear without shrinking."
  },
  {
    id: 292, day: 9, program: 'infidelity-recovery',
    title: "The Question You're Afraid to Ask",
    emoji: "❓",
    tagline: "Surface the questions that have been living in silence.",
    body: "There are questions the betrayed partner is almost afraid to ask — not because they don't want the answer, but because they fear what the answer might do to them. Today those questions get to exist. The betraying partner commits to honesty, even when honesty is hard.",
    duration: "45 min",
    prompts: [
      "Betrayed partner: Write down the 3 questions you most want answered. Then choose one to ask today.",
      "Betraying partner: Answer with full honesty. No softening that becomes lying.",
      "After the answer — betrayed partner: Does the answer change what you thought? How?",
      "Both: What does it feel like to have hard truth spoken between you?"
    ],
    reflection: "Honesty after betrayal is not comfortable. But it is the only foundation for anything real."
  },
  {
    id: 293, day: 10, program: 'infidelity-recovery',
    title: "Mapping the Timeline",
    emoji: "🗺️",
    tagline: "Create a shared, honest timeline of the affair.",
    body: "One of the most disorienting parts of betrayal is not knowing the full story. Gaps in the timeline become breeding grounds for the imagination to fill in the worst. Today, with care and honesty, you build a shared timeline — not to torture either of you, but to replace the unknown with the known.",
    duration: "60 min",
    prompts: [
      "Betraying partner: Write a honest timeline — when it started, key events, when it ended.",
      "Betrayed partner: As you hear this, note what surprises you. Note what you already suspected.",
      "Betraying partner: Are there gaps you're still protecting? Consider whether those gaps serve healing.",
      "Both: After the timeline — what did this exercise cost you? What, if anything, did it give you?"
    ],
    reflection: "The goal is not punishment. The goal is to end the fog."
  },
  {
    id: 294, day: 11, program: 'infidelity-recovery',
    title: "What the Body Remembers",
    emoji: "🫀",
    tagline: "Acknowledge the physical impact of betrayal.",
    body: "Betrayal is not only emotional. It lives in the body — in sleeplessness, in tension, in the way your stomach drops when a notification comes through. Today you acknowledge the physical reality of what happened, because the body deserves recognition just as much as the mind.",
    duration: "25 min",
    prompts: [
      "Betrayed partner: Where do you feel the betrayal in your body right now?",
      "Betrayed partner: How has your body changed since you found out? Sleep, appetite, physical touch?",
      "Betraying partner: What does it mean to you that your actions caused this in someone's body?",
      "Both: Sit side by side, breathing at the same pace for 3 minutes. No words."
    ],
    reflection: "The body keeps the score. Honor what the body is carrying."
  },
  {
    id: 295, day: 12, program: 'infidelity-recovery',
    title: "The Story You've Been Telling Yourself",
    emoji: "📖",
    tagline: "Examine the narratives each of you has constructed.",
    body: "After betrayal, both partners build stories to make sense of what happened. The betrayed partner tells a story about the relationship, the marriage, their own worth. The betraying partner tells a story about why it happened and what it means. Today you surface those stories — and interrogate them.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What is the story you've been telling yourself about why this happened?",
      "Betrayed partner: What does that story say about you? Is that story true?",
      "Betraying partner: What story have you been telling yourself to explain your choices?",
      "Both: Where are your stories in conflict? Where do they accidentally agree?"
    ],
    reflection: "The stories we tell ourselves become the architecture of our healing — or our stagnation."
  },
  {
    id: 296, day: 13, program: 'infidelity-recovery',
    title: "Radical Transparency Begins",
    emoji: "🪟",
    tagline: "Establish what full openness will look like going forward.",
    body: "If trust is going to be rebuilt, there must be a new standard of transparency — not surveillance, but voluntary openness. Today you define what radical transparency looks like in your relationship: what is freely shared, what privacy remains, and what the rules are moving forward.",
    duration: "40 min",
    prompts: [
      "Betraying partner: What forms of transparency are you willing to offer, freely and without resentment?",
      "Betrayed partner: What transparency do you need in order to begin feeling safe again?",
      "Both: Where do your needs and offers align? Where is there tension?",
      "Both: Write a brief 'transparency agreement' — 3–5 commitments you both accept."
    ],
    reflection: "Transparency offered freely is evidence of commitment. Transparency demanded becomes surveillance. Aim for the first."
  },
  {
    id: 297, day: 14, program: 'infidelity-recovery',
    title: "Two Weeks In — Taking Stock",
    emoji: "⚖️",
    tagline: "A mid-point reflection on the first two weeks.",
    body: "You've made it through two weeks of the hardest work in a relationship. That matters. Today you pause to take honest stock — not of whether you're 'healed' (you aren't, not yet), but of whether you're moving. Movement is what matters right now.",
    duration: "30 min",
    prompts: [
      "Each partner: What has been the hardest moment of these two weeks?",
      "Each partner: What has surprised you about this process — or about your partner?",
      "Each partner: On a scale of 1–10, where are you emotionally right now? Explain the number.",
      "Both: What is one thing you want to carry forward into the next two weeks?"
    ],
    reflection: "Two weeks is not a milestone of healing. It's evidence you're both still showing up. That is not small."
  },
  {
    id: 298, day: 15, program: 'infidelity-recovery',
    title: "The Person Who Was Hurt",
    emoji: "💔",
    tagline: "The betrayed partner speaks fully — without interruption.",
    body: "This mission belongs to the betrayed partner. You speak. Your partner listens — completely, without defending, explaining, or softening. The betraying partner's only job today is to receive. This is not a conversation. It is a witnessing.",
    duration: "45 min",
    prompts: [
      "Betrayed partner: Speak — or write — for as long as you need. Begin with: 'When I found out, the first thing I felt was...'",
      "Betrayed partner: Tell your partner what they took from you. Be specific.",
      "Betrayed partner: Tell your partner what you need from them right now. Not tomorrow — right now.",
      "Betraying partner: After your partner is finished — do not respond. Simply say: 'I hear you. I'm not going anywhere.'"
    ],
    reflection: "The betrayed partner should not have to fight to be heard in their own healing. Give them the floor completely."
  },
  {
    id: 299, day: 16, program: 'infidelity-recovery',
    title: "Full Accountability — No Deflection",
    emoji: "🪞",
    tagline: "The betraying partner takes complete ownership.",
    body: "There is a version of accountability that looks like ownership but is actually deflection: 'I did this because the relationship was struggling' or 'I was going through something difficult.' Today the betraying partner practices accountability without the 'but.' No explanations that become excuses. Just full ownership.",
    duration: "35 min",
    prompts: [
      "Betraying partner: Write a full statement of accountability — what you did, without the 'because.'",
      "Betraying partner: Read it to your partner. No additions. No softening. No defenses.",
      "Betrayed partner: Was there anything in that statement that felt true? Anything that felt incomplete?",
      "Betraying partner: What would it mean to live as someone who fully owns this choice?"
    ],
    reflection: "Accountability without excuses is one of the rarest gifts you can give a person you've hurt."
  },
  {
    id: 300, day: 17, program: 'infidelity-recovery',
    title: "The Grief of the Relationship You Had",
    emoji: "🕯️",
    tagline: "Mourn the version of the relationship that no longer exists.",
    body: "Whether you stay together or not, the relationship you had before the betrayal is gone. It will never return exactly as it was. This is a real loss, and it deserves to be grieved — not to cement the end, but because healing requires acknowledging what has genuinely been lost.",
    duration: "30 min",
    prompts: [
      "Both partners: What was beautiful about the relationship before the betrayal?",
      "Both partners: What can never be fully the same, even if you heal?",
      "Both partners: What are you grieving most right now?",
      "Both: Sit with the grief for a few minutes. Let it be present without trying to fix it."
    ],
    reflection: "Grief and hope can coexist. Grieving the old relationship does not mean you cannot build a new one."
  },
  {
    id: 301, day: 18, program: 'infidelity-recovery',
    title: "Why You're Still Here",
    emoji: "🌿",
    tagline: "Name the reasons — however fragile — that you're still in this.",
    body: "Staying in a relationship after betrayal is not weakness, denial, or foolishness. It is a choice — sometimes a hard, confusing, and deeply personal one. Today you name the reasons you're still here. Not to justify them to anyone else. Just to see them clearly yourself.",
    duration: "25 min",
    prompts: [
      "Each partner: List the reasons — however small or uncertain — that you're still in this.",
      "Each partner: Which of those reasons feels most honest to you right now?",
      "Each partner: Which reason scares you to say out loud?",
      "Both: Share your lists with each other. Receive them without judgment."
    ],
    reflection: "Knowing why you're staying helps you decide whether to keep staying — and with what kind of intention."
  },
  {
    id: 302, day: 19, program: 'infidelity-recovery',
    title: "The Other Person",
    emoji: "👤",
    tagline: "Address the presence of the third party without avoiding it.",
    body: "There was another person involved. That person's presence — real or imagined — often lingers long after the affair ends. Today you address that presence directly: what it means, what questions it raises, and what needs to happen for the betrayed partner to feel the affair is truly over.",
    duration: "40 min",
    prompts: [
      "Betrayed partner: What is your relationship to the thought of this other person? Rage? Fear? Curiosity?",
      "Betraying partner: What do you want your partner to know about how that ended — or how it needs to end?",
      "Betrayed partner: What would 'proof it's over' look like to you?",
      "Betraying partner: Can you provide that proof? What would it take?"
    ],
    reflection: "The third party does not belong in your healing — but their existence must be fully addressed before they can be released."
  },
  {
    id: 303, day: 20, program: 'infidelity-recovery',
    title: "Contact Boundaries Going Forward",
    emoji: "🚧",
    tagline: "Establish clear, specific contact boundaries.",
    body: "One of the most concrete things that can rebuild safety is clear agreement about contact with the person the affair was with. Not surveillance — clarity. Today you create specific, agreed-upon boundaries that the betrayed partner needs to feel safe, and that the betraying partner can genuinely commit to.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What contact boundaries do you need in order to feel safe?",
      "Betraying partner: Which of those can you commit to fully? Are there any you need to discuss?",
      "Both: Write down the agreed boundaries in plain language. Both sign or initial.",
      "Betraying partner: What will you do if you encounter the other person unexpectedly?"
    ],
    reflection: "Boundaries are not punishment. They are the container in which trust can be rebuilt."
  },
  {
    id: 304, day: 21, program: 'infidelity-recovery',
    title: "Three Weeks — What's Shifting",
    emoji: "🔄",
    tagline: "Notice what, if anything, is starting to shift.",
    body: "Three weeks in. You are not healed. You may not even feel better. But something may be shifting — something subtle in how you sit together, how you speak, what you're willing to try. Today you look for those shifts, however small.",
    duration: "25 min",
    prompts: [
      "Each partner: Name one thing that has shifted, even slightly, since you started this program.",
      "Each partner: Name one thing that still feels exactly as broken as Day 1.",
      "Both: What would you want the next week to look like, if you could choose?",
      "Both: What is one commitment you're making to your partner for this coming week?"
    ],
    reflection: "Healing moves in waves — not in a straight line. Look for the waves, not the destination."
  },
  {
    id: 305, day: 22, program: 'infidelity-recovery',
    title: "The Intimacy Question",
    emoji: "🫶",
    tagline: "Honestly address physical intimacy after betrayal.",
    body: "Physical intimacy after an affair is one of the most complicated terrains a couple navigates. For many betrayed partners, physical touch becomes loaded with grief, comparison, or revulsion. For many betraying partners, wanting closeness feels inappropriate. Today you talk about this — without pressure, without timeline.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What is your honest relationship to physical intimacy right now?",
      "Betraying partner: What have you been assuming about what your partner needs physically? Have you asked?",
      "Both: What would feel right and safe in terms of physical closeness today — not eventually, today?",
      "Both: Is there one small physical gesture (a hand on the back, sitting together) that feels possible right now?"
    ],
    reflection: "No timeline is 'normal.' Your pace is the right pace."
  },
  {
    id: 306, day: 23, program: 'infidelity-recovery',
    title: "Triggers and Landmines",
    emoji: "💣",
    tagline: "Map the triggers that hijack your healing.",
    body: "Triggers are not weakness. They are the nervous system doing exactly what it was designed to do after a threat. The problem is that triggers fire long after the threat is gone — and if they go unnamed, they can derail everything. Today you name your triggers so they can be navigated rather than detonated.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: List your top triggers — specific things that instantly send you back to the moment of discovery.",
      "Betrayed partner: What does your body do when triggered? What do you need when that happens?",
      "Betraying partner: Now that you know these triggers — what will you do differently?",
      "Both: Agree on a signal or phrase the betrayed partner can use when triggered that asks for support, not defense."
    ],
    reflection: "The goal is not to eliminate triggers. It's to respond to them with care instead of collision."
  },
  {
    id: 307, day: 24, program: 'infidelity-recovery',
    title: "What Trust Actually Looks Like Now",
    emoji: "🏗️",
    tagline: "Redefine what trust means in this new chapter.",
    body: "The old trust — the kind that assumed the best without thinking about it — is gone. What replaces it won't be naive. It will be earned, witnessed, and chosen daily. Today you talk about what trust looks like now — more intentional, more honest, and ultimately potentially stronger than what was there before.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What would rebuilt trust actually look like in daily life? Be specific.",
      "Betraying partner: What concrete actions are you willing to take to build that kind of trust?",
      "Both: What is one thing the betraying partner could do this week that would meaningfully rebuild trust?",
      "Betraying partner: Make a commitment to do that one thing before the end of the week."
    ],
    reflection: "Rebuilt trust is not the same as original trust. It is harder won and often more solid."
  },
  {
    id: 308, day: 25, program: 'infidelity-recovery',
    title: "The Apology",
    emoji: "🙏",
    tagline: "Practice a full, complete apology — without reservation.",
    body: "An apology is not 'I'm sorry you're hurt.' It is: acknowledgment of the specific harm, ownership without excuses, expression of remorse, and a commitment to change. Most people have never given or received this kind of apology. Today you try.",
    duration: "40 min",
    prompts: [
      "Betraying partner: Write a full apology using the structure: what I did / what it cost you / I am sorry because / I commit to...",
      "Betraying partner: Read this apology aloud, slowly, looking at your partner.",
      "Betrayed partner: What, if anything, felt true and received in that apology?",
      "Betrayed partner: What, if anything, still needs to be said or acknowledged?"
    ],
    reflection: "A real apology is not a transaction. It is a declaration of who you want to be."
  },
  {
    id: 309, day: 26, program: 'infidelity-recovery',
    title: "The Shame Beneath the Betrayal",
    emoji: "🌑",
    tagline: "Explore the shame each of you is carrying.",
    body: "Both partners often carry shame after an affair — the betrayed partner for not knowing, for staying, for feeling humiliated. The betraying partner for what they did, for who they became. Unexamined shame poisons the healing process. Today you bring it into the light.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What shame are you carrying? What are you embarrassed about in all of this?",
      "Betraying partner: What shame are you carrying? Where do you feel most disgusted with yourself?",
      "Both: Share with each other. Receive each other's shame with care, not judgment.",
      "Both: What would it mean to release — even partially — the shame you're carrying?"
    ],
    reflection: "Shame thrives in silence. Speaking it often begins the process of dissolving it."
  },
  {
    id: 310, day: 27, program: 'infidelity-recovery',
    title: "What You Need to See Consistently",
    emoji: "📆",
    tagline: "The betrayed partner names the consistent behaviors they need.",
    body: "Rebuilding trust is not about grand gestures. It is about small, consistent actions repeated over time. Today the betrayed partner names what they need to see consistently — not as a demand list, but as a map for the betraying partner to follow.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Name 5 specific behaviors you need to see consistently from your partner.",
      "Betraying partner: For each one, respond: 'Yes, I can do this' or 'Here's where I'll need help with this.'",
      "Both: Which of these behaviors already exists, even occasionally? Start there.",
      "Betraying partner: Choose one of these behaviors to focus on this week. Tell your partner which one."
    ],
    reflection: "Consistency over time is the currency of rebuilt trust."
  },
  {
    id: 311, day: 28, program: 'infidelity-recovery',
    title: "Four Weeks — What Have You Built?",
    emoji: "🧱",
    tagline: "Take full inventory of your first month.",
    body: "One month. That is something. Whether you feel better or not, you have been doing the work — and work done under grief and betrayal is among the most courageous work there is. Today you take full inventory of what you've built in four weeks.",
    duration: "30 min",
    prompts: [
      "Each partner: What is one thing you've learned about yourself this month?",
      "Each partner: What is one thing you've learned about your partner this month?",
      "Each partner: What are you most proud of in how you've shown up?",
      "Both: What does month two need to look like? Name one commitment each."
    ],
    reflection: "A month of showing up for the hardest conversation is a month of choosing love — even wounded, even uncertain."
  },
  {
    id: 312, day: 29, program: 'infidelity-recovery',
    title: "The Relationship Before the Affair",
    emoji: "🔍",
    tagline: "Examine what was present in the relationship before the betrayal.",
    body: "Understanding what was happening in the relationship before the affair is not about excusing the betrayal. It never justifies it. But it may be necessary for understanding what needs to change to build something different. This conversation belongs to both partners — and must be handled carefully.",
    duration: "45 min",
    prompts: [
      "Both: Without assigning blame — what was the state of the relationship before the affair came to light?",
      "Betrayed partner: Were there things you wished were different? What were you not saying?",
      "Betraying partner: Were there things you wished were different? Did you ever clearly communicate those needs?",
      "Both: What would it mean to address those underlying things now — regardless of the affair?"
    ],
    reflection: "The affair is never the betrayed partner's fault. But healing fully sometimes means both partners examine what was true before."
  },
  {
    id: 313, day: 30, program: 'infidelity-recovery',
    title: "A Letter You May Never Send",
    emoji: "✉️",
    tagline: "Write to someone involved — and choose whether to share it.",
    body: "Sometimes the most important letters are the ones that never get sent. Today each partner writes a letter — to the other, to the person the affair was with, or to the version of themselves they were before. The act of writing is what matters. Sending is optional.",
    duration: "40 min",
    prompts: [
      "Each partner: Choose who to write to and write freely for 10–15 minutes.",
      "After writing: Re-read your letter. What surprised you in it?",
      "Both: Share your letters with each other — or choose one paragraph if sharing the full letter feels like too much.",
      "Both: What did writing that letter surface that conversations haven't?"
    ],
    reflection: "Writing accesses things speech can't. Let the page hold what you're not yet ready to say out loud."
  },
  {
    id: 314, day: 31, program: 'infidelity-recovery',
    title: "Checking In With Your Nervous System",
    emoji: "🧘",
    tagline: "A day for regulation before going deeper.",
    body: "You have now been doing intensive healing work for a month. Your nervous system is likely exhausted. Today is not about going deeper — it is about coming back to center. Healing requires recovery. This is your recovery day.",
    duration: "20 min",
    prompts: [
      "Each partner: Rate your nervous system state today — dysregulated (1) to settled (10). What number, and why?",
      "Both: Spend 10 minutes doing something that regulates you — walking, music, stillness, food.",
      "Both: After the 10 minutes, check in with each other: 'How are you doing right now?'",
      "Both: Name one thing you're grateful for today — no matter how small."
    ],
    reflection: "You cannot heal while dysregulated. Rest is not laziness. It's part of the work."
  },
  {
    id: 315, day: 32, program: 'infidelity-recovery',
    title: "What You Miss About Us",
    emoji: "🌅",
    tagline: "Name what you miss about the relationship at its best.",
    body: "Amid the grief and the hard work, something often gets lost: the memory of what was good. What made you fall for each other. The version of the relationship that was full of ease. Today you go back there — not to pretend the betrayal didn't happen, but to remember what you're fighting for.",
    duration: "25 min",
    prompts: [
      "Each partner: What is one specific memory of when the relationship felt best?",
      "Each partner: What do you miss most about who you were together before all of this?",
      "Both: Is there anything from that earlier time that you could bring back — even a small piece?",
      "Both: What would need to happen for that version of you — even an evolved version — to exist again?"
    ],
    reflection: "Memory is not denial. It is fuel for what you're trying to build."
  },
  {
    id: 316, day: 33, program: 'infidelity-recovery',
    title: "The Betraying Partner's Inner Life",
    emoji: "🌀",
    tagline: "Explore what was happening inside the betraying partner.",
    body: "The betraying partner's inner life during the affair is rarely fully examined — not because it excuses anything, but because healing requires both partners to understand the full picture. What was the betraying partner running from? Running toward? What need was going unmet — or being met in the wrong way?",
    duration: "40 min",
    prompts: [
      "Betraying partner: What was your emotional state in the months leading up to the affair?",
      "Betraying partner: What need were you trying to meet? Did you consciously know that at the time?",
      "Betraying partner: What could you have done differently to get that need met without betrayal?",
      "Betrayed partner: What do you feel hearing this? Anger? Compassion? Both? Let yourself feel it without judgment."
    ],
    reflection: "Understanding is not absolution. But without understanding, change cannot be targeted or real."
  },
  {
    id: 317, day: 34, program: 'infidelity-recovery',
    title: "What You Will Not Negotiate",
    emoji: "🛑",
    tagline: "Each partner names their non-negotiables going forward.",
    body: "Every relationship has things that are non-negotiable — lines that, if crossed again, mean the relationship ends. These are not ultimatums deployed in anger. They are honest declarations of who you are and what you need to live with integrity. Today you name them.",
    duration: "30 min",
    prompts: [
      "Each partner: What are your non-negotiables going forward? What would end the relationship if it happened again?",
      "Each partner: Share your list. Receive your partner's list without argument.",
      "Both: Do your non-negotiables conflict? Discuss calmly.",
      "Both: Write them down and keep them visible as a shared agreement."
    ],
    reflection: "Non-negotiables are not threats. They are acts of self-respect that protect you both."
  },
  {
    id: 318, day: 35, program: 'infidelity-recovery',
    title: "Five Weeks — The Long Road Ahead",
    emoji: "🛤️",
    tagline: "Acknowledge the length of the road and your commitment to it.",
    body: "You are five weeks in. Infidelity recovery takes time measured in months, sometimes years. Today you look honestly at the road ahead and ask yourselves: are we committed to staying on it? This is not a test. It is an honest conversation about what it means to continue.",
    duration: "30 min",
    prompts: [
      "Each partner: Are you committed to staying in this healing process for as long as it takes?",
      "Each partner: What, honestly, would make you want to stop?",
      "Both: What would it take to renew your commitment to this process right now?",
      "Both: Make one statement of commitment to your partner for the next five weeks."
    ],
    reflection: "You don't have to be certain. You only have to be willing to keep showing up."
  },
  {
    id: 319, day: 36, program: 'infidelity-recovery',
    title: "Rewriting the Vow",
    emoji: "📜",
    tagline: "Write a new informal commitment to each other.",
    body: "Whether or not you're married, at some point you made a commitment to this person. Today you have the chance to rewrite that commitment — not to pretend the betrayal didn't happen, but to acknowledge where you are now and what you're choosing from here. This vow is not performance. It is private, honest, and for you.",
    duration: "40 min",
    prompts: [
      "Each partner: Write a short commitment to your partner — who you are to them now, and what you choose.",
      "Both: Read your commitments to each other, uninterrupted.",
      "Both: What felt true in what your partner said?",
      "Both: Keep these writings somewhere you'll see them."
    ],
    reflection: "The vow you make after the breaking may be the most honest one you ever make."
  },
  {
    id: 320, day: 37, program: 'infidelity-recovery',
    title: "The Forgiveness Question",
    emoji: "🌸",
    tagline: "Explore where each of you stands on forgiveness.",
    body: "Forgiveness is one of the most misunderstood concepts in infidelity recovery. It does not mean what happened was okay. It does not mean trust is restored. It does not have to happen fast. Today you explore what forgiveness means to each of you — and where you honestly are on that path.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What does forgiveness mean to you? What does it NOT mean?",
      "Betrayed partner: Are you anywhere near forgiveness yet? Where are you, honestly?",
      "Betraying partner: What would it mean to you to be forgiven? What would change?",
      "Both: Does forgiveness have to happen for you to heal and rebuild? Talk about this."
    ],
    reflection: "Forgiveness is a gift you give yourself — but it cannot be rushed or demanded."
  },
  {
    id: 321, day: 38, program: 'infidelity-recovery',
    title: "Letting the Grief Be Big",
    emoji: "🌧️",
    tagline: "Allow grief to be as large as it actually is.",
    body: "We often try to manage our grief — contain it, make it smaller, get on with things. But grief that isn't allowed to be big enough eventually comes out sideways: as rage, as shutdown, as self-destruction. Today you give grief permission to be exactly as large as it needs to be.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What are you grieving that you haven't let yourself fully feel yet?",
      "Betraying partner: What grief are you carrying about what you did and what it has cost?",
      "Both: Give each other 10 minutes of uninterrupted grief — tears, silence, or words. Just let it come.",
      "Both: After — hold each other, if that feels possible. Or simply sit close."
    ],
    reflection: "Big grief is not a sign you can't recover. It is a sign you loved something real."
  },
  {
    id: 322, day: 39, program: 'infidelity-recovery',
    title: "The Kids, If There Are Any",
    emoji: "👨‍👩‍👧",
    tagline: "Address the impact of your healing process on children in the home.",
    body: "If children are part of your family, they are affected by the tension in your home — even if they don't know why. Today you address this directly: how to protect them, what to tell them (if anything), and how to be present for them even while you heal.",
    duration: "30 min",
    prompts: [
      "Both: How are the children being affected by what's happening in your home?",
      "Both: What do you want to protect them from? What might be unavoidably seeping through?",
      "Both: Are there specific things you need to do differently in how you're showing up for your kids right now?",
      "Both: Who else in your support network can help take pressure off the kids during this time?"
    ],
    reflection: "Children need stability. They don't need you to pretend to be okay. They need you to not be in crisis in front of them."
  },
  {
    id: 323, day: 40, program: 'infidelity-recovery',
    title: "The Role of Outside Support",
    emoji: "🤝",
    tagline: "Assess whether you need outside professional support.",
    body: "This program is a powerful tool — but it is not therapy. There are things that a skilled therapist, counselor, or clergy can offer that no digital program can. Today you assess honestly where you are and whether bringing in outside support would accelerate and deepen your healing.",
    duration: "25 min",
    prompts: [
      "Each partner: Have you considered couples therapy or individual therapy? What has stopped you if you haven't pursued it?",
      "Both: Is there anything in this healing process that feels stuck — that outside help might unstick?",
      "Both: What would it take to explore at least one session with a professional?",
      "Both: Who in your personal life (pastor, mentor, trusted friend) could provide non-judgmental support?"
    ],
    reflection: "Using all available support is not weakness. It is strategy."
  },
  {
    id: 324, day: 41, program: 'infidelity-recovery',
    title: "Six Weeks — Choosing Again",
    emoji: "🔁",
    tagline: "Make a deliberate choice to continue or to acknowledge where you are.",
    body: "Six weeks in. This is often the point where the initial crisis energy has ebbed and the ongoing drudgery of rebuilding sets in. It's also where couples sometimes drift — not away from the relationship, but away from the intentional work. Today you choose deliberately: to continue with intention.",
    duration: "25 min",
    prompts: [
      "Each partner: What has the last six weeks cost you?",
      "Each partner: What has the last six weeks given you?",
      "Both: Are you choosing to continue? Say it out loud, to each other.",
      "Both: What one thing will you both commit to in the next six weeks?"
    ],
    reflection: "Choosing to stay is not enough. Choosing to stay and keep working — that is the thing."
  },
  {
    id: 325, day: 42, program: 'infidelity-recovery',
    title: "Small Acts of Care",
    emoji: "🌼",
    tagline: "Reintroduce daily acts of care into your rhythm.",
    body: "Rebuilding a relationship is not only done in the heavy conversations. It is also done in the small moments: the glass of water brought without being asked, the check-in text, the hand on the shoulder. Today you deliberately reintroduce small acts of care — not to paper over the wounds, but to tend to the living parts of the relationship.",
    duration: "20 min",
    prompts: [
      "Each partner: What is one small act of care that would mean something to you right now?",
      "Each partner: Share that with your partner. Make it specific.",
      "Both: Do that thing for each other today.",
      "Both: How did it feel to give? How did it feel to receive?"
    ],
    reflection: "Love after betrayal must be rebuilt one small gesture at a time. Start now."
  },
  {
    id: 326, day: 43, program: 'infidelity-recovery',
    title: "What Your Body Needs to Feel Safe",
    emoji: "🛡️",
    tagline: "Physical safety as a component of relational safety.",
    body: "For many betrayed partners, physical safety — the kind where you feel physically relaxed and at ease in your partner's presence — has been disrupted. You may not realize how much you've been bracing. Today you attend to what your body needs to begin feeling safe again.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: On a scale of 1–10, how physically relaxed do you feel in your partner's presence right now?",
      "Betrayed partner: What would need to happen for that number to increase by 2 points?",
      "Betraying partner: What can you do — physically, behaviorally — to help your partner's body feel safer?",
      "Both: Sit together and do a 3-minute breathing exercise — inhale 4 counts, exhale 6 counts."
    ],
    reflection: "Safety is felt in the body before it is thought by the mind. Tend to the body."
  },
  {
    id: 327, day: 44, program: 'infidelity-recovery',
    title: "Your Support Network",
    emoji: "🕸️",
    tagline: "Map and strengthen your support beyond each other.",
    body: "Leaning entirely on each other during infidelity recovery is a recipe for collapse. You need support that doesn't require the other person to provide it. Today you each look honestly at your support network — and make a plan to strengthen it.",
    duration: "25 min",
    prompts: [
      "Each partner: Who in your life knows what you're going through? Who is in your corner?",
      "Each partner: Is there anyone you've been hiding this from who should know?",
      "Each partner: Who drains you right now? Limit that where you can.",
      "Both: Each reach out to one supportive person this week. Not to complain — just to stay connected."
    ],
    reflection: "You don't have to heal this alone. A strong outside network makes the inside work sustainable."
  },
  {
    id: 328, day: 45, program: 'infidelity-recovery',
    title: "Halfway Through — Forty-Five Days",
    emoji: "🏁",
    tagline: "Mark the halfway point with honesty and intention.",
    body: "You are halfway through this 90-day intensive healing period. Not halfway through recovery — that takes much longer. But halfway through this intentional, daily commitment you made to each other. That is real. Take a moment to see that.",
    duration: "35 min",
    prompts: [
      "Each partner: What is the most honest sentence you can say about where you are right now?",
      "Each partner: What has surprised you most about this process?",
      "Both: What do you want the second half of this 90-day period to focus on?",
      "Both: Write each other a short note — no longer than a paragraph — of acknowledgment for showing up."
    ],
    reflection: "Forty-five days of showing up for something this hard is not nothing. It is evidence."
  },
  {
    id: 329, day: 46, program: 'infidelity-recovery',
    title: "The Intimacy Inventory",
    emoji: "💞",
    tagline: "Assess all dimensions of intimacy, not only the physical.",
    body: "Intimacy has many dimensions: emotional, intellectual, experiential, spiritual, physical. After betrayal, usually several of these dimensions have collapsed. Today you inventory each one — and identify which to begin rebuilding first.",
    duration: "35 min",
    prompts: [
      "Both: Rate each dimension of intimacy (1–10): emotional closeness / intellectual connection / shared experiences / spiritual alignment / physical connection.",
      "Both: Compare scores. Where do you agree? Where are you surprised by each other's answers?",
      "Both: Choose the ONE dimension that feels most accessible to rebuild right now.",
      "Both: What would one small step in that direction look like this week?"
    ],
    reflection: "You don't have to rebuild everything at once. Start where the door is already slightly open."
  },
  {
    id: 330, day: 47, program: 'infidelity-recovery',
    title: "The Anger Under the Sadness",
    emoji: "🔥",
    tagline: "Give space for the full depth of anger.",
    body: "Grief often presents first because anger feels too dangerous. But the anger is there — burning under the surface. Unprocessed anger either implodes (depression, numbing) or explodes (destruction, cruelty). Today you give anger a contained, witnessed space to exist.",
    duration: "40 min",
    prompts: [
      "Betrayed partner: What are you most angry about? Let yourself feel the full size of it before you speak it.",
      "Betrayed partner: Say it out loud to your partner, fully and without softening.",
      "Betraying partner: Receive the anger without defending, minimizing, or shutting down. Just witness it.",
      "Betrayed partner: After speaking — what shifted? Do you feel different?"
    ],
    reflection: "Witnessed anger loses some of its power to destroy. Let it be seen."
  },
  {
    id: 331, day: 48, program: 'infidelity-recovery',
    title: "What Changed in You",
    emoji: "🦋",
    tagline: "Acknowledge who you've each become through this.",
    body: "Betrayal changes people. It changes both people — the betrayed and the betraying. Not always in ways we'd choose. But sometimes in ways that, in time, we find ourselves grateful for. Today you look at who you have become through this — without romanticizing it.",
    duration: "30 min",
    prompts: [
      "Each partner: How have you changed since this began?",
      "Each partner: What version of yourself has emerged that you want to keep?",
      "Each partner: What version of yourself has emerged that you want to change?",
      "Both: Who do you want to be — not for your partner, but for yourself — when this is over?"
    ],
    reflection: "The person you become on the other side of this can be someone you're proud of. That is worth working toward."
  },
  {
    id: 332, day: 49, program: 'infidelity-recovery',
    title: "Seven Weeks — Rhythm Check",
    emoji: "🎵",
    tagline: "Assess whether your healing has found a sustainable rhythm.",
    body: "Seven weeks in. Sustainable healing has a rhythm — it's not a sprint, it's not a crawl. Today you look at whether your process has found that rhythm. Are you doing the work? Are you also recovering? Are you staying connected as partners while you heal?",
    duration: "25 min",
    prompts: [
      "Each partner: Is the pace of this work sustainable for you? Too much, too little, about right?",
      "Each partner: What adjustments would help you sustain this for the next several months?",
      "Both: Are you having regular non-healing conversations — just being partners — or is everything recovery-focused right now?",
      "Both: Plan one 'ordinary' couple moment this week — not healing work, just connection."
    ],
    reflection: "You are not only a couple in recovery. You are still a couple. Tend to both."
  },
  {
    id: 333, day: 50, program: 'infidelity-recovery',
    title: "Day 50 — Halfway Reflection",
    emoji: "🌓",
    tagline: "A dedicated reflection day at the 50-day mark.",
    body: "Fifty days of intentional healing work. That is fifty days of choosing the hard thing. Today you don't tackle a new challenge — you reflect on the journey so far and affirm your commitment to what remains.",
    duration: "30 min",
    prompts: [
      "Each partner: What have been the three most significant moments in these 50 days?",
      "Each partner: What is the one thing you know now that you didn't know on Day 1?",
      "Both: Write down your top insight and share it with your partner.",
      "Both: What does healing look like to you right now — in one image or metaphor?"
    ],
    reflection: "Fifty days. You showed up fifty times. That is not a small thing."
  },
  {
    id: 334, day: 51, program: 'infidelity-recovery',
    title: "The Other Person — Closing the Door",
    emoji: "🚪",
    tagline: "Take any final steps needed to close the door on the affair.",
    body: "Healing cannot fully begin while the door is still open — literally or emotionally. Today you revisit whether the door is truly closed. Not to interrogate or punish, but because a truly closed door is a foundation that healing can be built on.",
    duration: "35 min",
    prompts: [
      "Betraying partner: Is the affair truly over — in action AND in your internal life?",
      "Betraying partner: Is there anything you haven't yet done to fully close this door?",
      "Betrayed partner: What would help you believe the door is closed?",
      "Both: Are there any final practical steps to take — blocking contact, changing routines? Do them."
    ],
    reflection: "A closed door is not a guarantee. It is a commitment. Renew it."
  },
  {
    id: 335, day: 52, program: 'infidelity-recovery',
    title: "New Rituals of Connection",
    emoji: "🌀",
    tagline: "Create 2–3 new daily or weekly connection rituals.",
    body: "Your old relationship had rituals — some healthy, some not, some that became invisible. The relationship you are building needs new rituals that belong to this version of you. Today you create them together.",
    duration: "30 min",
    prompts: [
      "Both: Brainstorm a list of 5–10 possible daily or weekly rituals (morning check-in, shared meal, evening walk).",
      "Both: Choose 2–3 that feel meaningful and achievable.",
      "Both: Commit to starting these rituals this week.",
      "Both: After one week, check in: which ritual is working? Which needs adjustment?"
    ],
    reflection: "Rituals are how couples say 'we' in the ordinary moments of life. Build new ones."
  },
  {
    id: 336, day: 53, program: 'infidelity-recovery',
    title: "The Inner Child Under the Pain",
    emoji: "🧒",
    tagline: "Explore the childhood wounds that betrayal re-activates.",
    body: "Betrayal in adult relationships often echoes earlier wounds — abandonment, rejection, not being enough. These echoes can amplify the pain of the current betrayal far beyond the event itself. Today you gently explore those echoes without collapsing the present into the past.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: Does this betrayal remind you of any earlier wound — from childhood or a previous relationship?",
      "Betrayed partner: What did the child in you need that they didn't get? Does your partner know that need?",
      "Betraying partner: Does your role in this echo any earlier pattern in your life?",
      "Both: How can you tend to these older wounds — in yourself and in each other?"
    ],
    reflection: "You are not only healing the current betrayal. You may be healing something much older."
  },
  {
    id: 337, day: 54, program: 'infidelity-recovery',
    title: "The Language of Repair",
    emoji: "🛠️",
    tagline: "Learn and practice the language of repair after conflict.",
    body: "In healthy relationships, partners know how to repair after a fight or a difficult moment. After betrayal, many couples lose access to repair — the conflict just compounds. Today you learn and practice specific language for repair.",
    duration: "30 min",
    prompts: [
      "Both: Think of a recent conflict or difficult moment in the last few weeks.",
      "Each partner: What repair attempt could have been made that would have helped?",
      "Both: Practice saying: 'I'm not trying to fight with you. I'm trying to reach you.' Mean it.",
      "Both: Identify your personal repair signal — a word, phrase, or gesture that means 'I want to come back to you.'"
    ],
    reflection: "Repair is a skill, not an instinct. Practice it until it becomes reflex."
  },
  {
    id: 338, day: 55, program: 'infidelity-recovery',
    title: "What You're Proud Of",
    emoji: "🏆",
    tagline: "Acknowledge your growth and courage.",
    body: "Amid all the pain and work and uncertainty, there are things both of you have done that deserve acknowledgment. Not just endurance — but growth. Today you name what you're proud of — in yourself and in your partner.",
    duration: "25 min",
    prompts: [
      "Each partner: What are you most proud of in how you've handled these last two months?",
      "Each partner: What is one thing your partner has done in this healing process that you respect?",
      "Both: Share those words of respect with each other.",
      "Both: Let those words land. Don't deflect them."
    ],
    reflection: "Pride in each other, earned in a crucible, is a kind of bond."
  },
  {
    id: 339, day: 56, program: 'infidelity-recovery',
    title: "Eight Weeks — Stabilization",
    emoji: "⚓",
    tagline: "Assess whether you've found ground beneath you.",
    body: "Eight weeks in, many couples begin to find a kind of floor — not healed, not whole, but stabilized. The acute crisis may have softened. The work continues, but it's less emergency and more long-term construction. Have you found your floor? Today you check.",
    duration: "25 min",
    prompts: [
      "Each partner: Do you feel more stable than you did on Day 1? What does that feel like?",
      "Each partner: What is still destabilizing you — the thing that hasn't settled?",
      "Both: What does 'stable but not healed' mean to you right now?",
      "Both: What is the most important work for the next month?"
    ],
    reflection: "Stabilization is not the end. It is the point where you can begin building instead of just surviving."
  },
  {
    id: 340, day: 57, program: 'infidelity-recovery',
    title: "The Healing Plan",
    emoji: "📋",
    tagline: "Build a shared healing plan for the next 30 days.",
    body: "You've been moving day by day. Now take a wider view. Build a shared plan for the next 30 days — not rigid, but intentional. What will you do? What will you continue? What will you try that you haven't yet?",
    duration: "35 min",
    prompts: [
      "Both: List 3 things you want to continue from what's been working.",
      "Both: List 2 new things you want to try in the next 30 days.",
      "Both: Identify one potential obstacle and name a plan to handle it.",
      "Both: Write the plan. Put it somewhere you'll both see it."
    ],
    reflection: "Intentionality turns effort into progress. Plan the next phase."
  },
  {
    id: 341, day: 58, program: 'infidelity-recovery',
    title: "When You Want to Give Up",
    emoji: "🌪️",
    tagline: "Prepare for the days when you'll want to quit — together.",
    body: "There will be days — maybe many of them — when you want to give up. Not because you don't love each other, but because you're exhausted and it's hard and the end still feels far away. Today you talk about those days in advance, and build a plan for them.",
    duration: "30 min",
    prompts: [
      "Each partner: What does the impulse to give up feel like for you? What triggers it?",
      "Each partner: What helps you come back when you want to give up?",
      "Both: Agree on a plan for the hard days — what you'll say, what you'll do, who you'll call.",
      "Both: Write your 'hard day plan' somewhere accessible."
    ],
    reflection: "Planning for the hard days is not pessimism. It is how you protect the commitment you've made."
  },
  {
    id: 342, day: 59, program: 'infidelity-recovery',
    title: "Your Vision for the New Relationship",
    emoji: "🔭",
    tagline: "Build a shared vision for what you're healing toward.",
    body: "You've been healing from something. Today you turn your face toward something. What is the relationship you want? Not the one you had — that is gone. The one you could build from here, if you both commit fully. What does it look like?",
    duration: "40 min",
    prompts: [
      "Each partner: Describe your vision for this relationship in 3–5 years — if healing goes well.",
      "Each partner: What does daily life look like in that vision?",
      "Both: Share your visions. Where do they overlap? Where are there gaps?",
      "Both: Identify 3 shared values that belong to the new relationship you're building."
    ],
    reflection: "Healing toward something is more powerful than healing away from something."
  },
  {
    id: 343, day: 60, program: 'infidelity-recovery',
    title: "Two Months — Full Accounting",
    emoji: "📊",
    tagline: "A full accounting of your two months of healing work.",
    body: "Two months. Sixty days of choosing this, over and over. Today you do a full accounting — not a grade, but a genuine reckoning with where you've been, what you've done, and where you are.",
    duration: "40 min",
    prompts: [
      "Each partner: What is the most honest sentence about where your relationship is today?",
      "Each partner: What are you still grieving? What, if anything, have you put down?",
      "Both: What is the single most important thing you've built in two months?",
      "Both: Write a short letter to the couple you were on Day 1. What do you want them to know?"
    ],
    reflection: "Two months of hard work deserves to be witnessed. See what you've done."
  },
  {
    id: 344, day: 61, program: 'infidelity-recovery',
    title: "The Long Game",
    emoji: "♟️",
    tagline: "Shift from crisis mode to long-game thinking.",
    body: "At two months in, the crisis energy should be fading. Now comes the long game: slow, consistent, unglamorous work that accumulates into something real. Today you shift your mindset from 'surviving this' to 'building toward something.'",
    duration: "25 min",
    prompts: [
      "Each partner: What does long-game thinking feel like, compared to the crisis mode of the first weeks?",
      "Both: What habits and practices do you want to maintain for the long haul?",
      "Both: What aspects of healing still need focused, intensive attention?",
      "Both: Set an intention — not for this week, but for this season."
    ],
    reflection: "Long-game thinking is what sustains the relationship after the program ends."
  },
  {
    id: 345, day: 62, program: 'infidelity-recovery',
    title: "Curiosity Over Interrogation",
    emoji: "🔍",
    tagline: "Replace interrogation with genuine curiosity about your partner.",
    body: "After betrayal, the betrayed partner sometimes shifts into investigator mode — always searching for discrepancies, always looking for proof. This is understandable, but it cannot be the permanent posture of the relationship. Today you practice curiosity as an alternative to interrogation.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What questions about your partner would you ask out of genuine curiosity — not suspicion?",
      "Betraying partner: Answer those questions fully and openly.",
      "Betrayed partner: Notice how it feels to receive information given freely, not extracted.",
      "Both: What would it mean to approach your partner more often with curiosity than guardedness?"
    ],
    reflection: "Curiosity opens. Interrogation closes. You want a relationship that opens."
  },
  {
    id: 346, day: 63, program: 'infidelity-recovery',
    title: "Nine Weeks — Sustaining the Work",
    emoji: "🌊",
    tagline: "Check in on your stamina and sustainability.",
    body: "Nine weeks in. This is often where the work gets harder in a different way: not the initial acute pain, but the slow, grinding exhaustion of sustained healing. Today you check your stamina and make adjustments.",
    duration: "25 min",
    prompts: [
      "Each partner: What is your energy level for this healing work right now — honestly?",
      "Each partner: What would help you sustain this for the months ahead?",
      "Both: Is there anything in the process that needs to change to be more sustainable?",
      "Both: Identify one thing you can remove from your life to create more space for this work."
    ],
    reflection: "Sustainable healing is better than heroic healing that burns out."
  },
  {
    id: 347, day: 64, program: 'infidelity-recovery',
    title: "The Gratitude Practice",
    emoji: "🙏",
    tagline: "Introduce gratitude as a daily healing practice.",
    body: "Gratitude may feel forced or inappropriate when you're in grief. But research consistently shows that deliberate gratitude practice changes the brain's orientation — over time, it makes resilience more accessible. Today you begin. Simply. Without pretending.",
    duration: "20 min",
    prompts: [
      "Each partner: Name 3 things you're genuinely grateful for right now — even if they're small.",
      "Each partner: Name one thing about your partner you're grateful for, even amid all of this.",
      "Both: Share your gratitude lists with each other.",
      "Both: Commit to one minute of gratitude practice each morning this week."
    ],
    reflection: "Gratitude is not denial of pain. It is training the mind to see what else is true."
  },
  {
    id: 348, day: 65, program: 'infidelity-recovery',
    title: "When You Spiral",
    emoji: "🌀",
    tagline: "Create an interruption plan for when your mind spirals.",
    body: "Betrayed partners often experience intrusive thoughts and rumination spirals — the same images or memories replaying on loop. These spirals are exhausting and keep the wound fresh. Today you build a concrete plan to interrupt them.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Describe your typical spiral. What triggers it? What does it look like?",
      "Betrayed partner: What has helped interrupt it in the past, even briefly?",
      "Both: Design a 3-step spiral interruption plan (example: name it / move your body / call someone).",
      "Betraying partner: How can you help when you notice your partner spiraling?"
    ],
    reflection: "You cannot prevent the spirals. You can refuse to stay in them indefinitely."
  },
  {
    id: 349, day: 66, program: 'infidelity-recovery',
    title: "Words That Heal",
    emoji: "💬",
    tagline: "Identify and speak specific words that have healing power.",
    body: "Words have wounded you. Words also have the power to begin healing. Today you identify the specific words and phrases your partner most needs to hear — not once, but regularly. These are not empty reassurances. They are true statements that need to be spoken more often.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What words or phrases from your partner have felt most healing so far?",
      "Betrayed partner: What words do you most need to hear — that you haven't heard yet?",
      "Betraying partner: Can you say those words authentically? Say them now.",
      "Betraying partner: Commit to saying them again, unprompted, within the next 48 hours."
    ],
    reflection: "Love spoken in words — real words, chosen carefully — is not less than love shown in action. It is its own form of evidence."
  },
  {
    id: 350, day: 67, program: 'infidelity-recovery',
    title: "Relearning Playfulness",
    emoji: "🎈",
    tagline: "Gently reintroduce play and lightness.",
    body: "Grief is serious. Healing is serious. But relationships cannot survive on seriousness alone. Play — lightness, laughter, silliness — is not a distraction from healing. It is part of it. Today you take one small step toward relearning how to be playful with each other.",
    duration: "25 min",
    prompts: [
      "Each partner: When did you last genuinely laugh together? What was it?",
      "Both: Think of something playful or light you used to do together. Can you do a version of it today?",
      "Both: Spend 10 minutes doing something fun — no healing talk allowed.",
      "Both: How did that feel? Was it possible to be in a lighter moment?"
    ],
    reflection: "Playfulness is not disrespect for the gravity of what happened. It is an act of hope."
  },
  {
    id: 351, day: 68, program: 'infidelity-recovery',
    title: "Ten Weeks — Mapping What Remains",
    emoji: "🗺️",
    tagline: "Honestly map what healing work remains.",
    body: "Ten weeks. You have covered significant ground. Today you look ahead at what remains — not with dread, but with clear eyes. Knowing what's left is not discouraging. It is empowering.",
    duration: "35 min",
    prompts: [
      "Each partner: What feels genuinely more healed than it was on Day 1?",
      "Each partner: What still feels raw or unresolved?",
      "Both: Together, make a list of 5 things that still need work.",
      "Both: Prioritize that list. Which 2–3 are most important to address in the next 30 days?"
    ],
    reflection: "Knowing what remains keeps you from pretending you're further along than you are — and gives you a target."
  },
  {
    id: 352, day: 69, program: 'infidelity-recovery',
    title: "The Honest State of Trust",
    emoji: "🔐",
    tagline: "Assess where trust actually stands right now.",
    body: "Every few weeks, it's worth taking an honest inventory of where trust actually stands — not where you wish it stood, not where you think it should be by now. Today you look clearly at the real state of trust between you.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: On a scale of 1–10, where is your trust right now? What would move it up one point?",
      "Betraying partner: What have you done in the last few weeks that you believe has built trust?",
      "Betraying partner: What have you done — or not done — that you think has eroded trust?",
      "Both: What is the most important trust-building action for this coming week?"
    ],
    reflection: "Trust is not a feeling that arrives. It is a record that accumulates."
  },
  {
    id: 353, day: 70, program: 'infidelity-recovery',
    title: "The Vulnerability Ladder",
    emoji: "🪜",
    tagline: "Practice incremental vulnerability to rebuild emotional intimacy.",
    body: "Vulnerability, like trust, must be rebuilt in increments. You cannot leap to full emotional openness after betrayal — but you can climb one rung at a time. Today you identify where you are on the vulnerability ladder and take one deliberate step up.",
    duration: "30 min",
    prompts: [
      "Each partner: What is something you feel but haven't been able to say yet?",
      "Each partner: What is stopping you from saying it? Fear of what response?",
      "Each partner: Say it — just one true, vulnerable thing. Start small.",
      "Both: Receive each other's vulnerability with care. No analysis, no correction."
    ],
    reflection: "Vulnerability is not weakness. It is the doorway through which intimacy re-enters."
  },
  {
    id: 354, day: 71, program: 'infidelity-recovery',
    title: "What You Admire",
    emoji: "⭐",
    tagline: "Reconnect with what you genuinely admire about your partner.",
    body: "Admiration — that feeling of genuine respect and appreciation for who your partner is — often gets buried under betrayal's fallout. Today you dig for it deliberately. Not to ignore the wound. But because admiration is part of the architecture of love.",
    duration: "25 min",
    prompts: [
      "Each partner: Name 3 things you genuinely admire about your partner.",
      "Each partner: Name one quality in your partner that has been visible during this healing process.",
      "Both: Share your admiration with each other. Let it land.",
      "Both: Does admiration feel available to you right now? What gets in the way?"
    ],
    reflection: "Admiration and hurt can coexist. Let them."
  },
  {
    id: 355, day: 72, program: 'infidelity-recovery',
    title: "The Silence Between You",
    emoji: "🤫",
    tagline: "Explore what lives in the silences.",
    body: "Every couple has silences — comfortable ones, tense ones, the ones that speak more than words. After betrayal, silences often change character. Today you pay attention to the quality of silence between you and what it holds.",
    duration: "25 min",
    prompts: [
      "Each partner: What is your relationship to silence right now? Comfortable? Anxious? Loaded?",
      "Both: Sit in silence together for 3 minutes. Just be present.",
      "Both: After the silence — what was in it? Name it honestly.",
      "Both: Is the silence between you getting easier or harder? What does that tell you?"
    ],
    reflection: "The quality of silence is diagnostic. Comfortable silence means something is healing."
  },
  {
    id: 356, day: 73, program: 'infidelity-recovery',
    title: "Comparing Before and After",
    emoji: "🔄",
    tagline: "Honestly compare who you were and who you are.",
    body: "You are not the same people you were before this began. The betrayal, the grief, the work — it has changed you both. Today you do an honest comparison: who were you before, and who are you now?",
    duration: "30 min",
    prompts: [
      "Each partner: Who were you in this relationship before the betrayal? Describe your role, your patterns.",
      "Each partner: Who are you in this relationship now? What has changed?",
      "Each partner: What changes do you want to keep? What do you want to shed?",
      "Both: Share. Where have you each grown in ways the other can see?"
    ],
    reflection: "Change through crisis, chosen intentionally, can become character."
  },
  {
    id: 357, day: 74, program: 'infidelity-recovery',
    title: "Eleven Weeks — The Final Stretch Begins",
    emoji: "🏃",
    tagline: "Acknowledge that you're entering the final phase of this 90-day intensive.",
    body: "You are entering the final stretch of this 90-day program. Eleven weeks in. Today is about gathering yourself for the final phase — not speeding up, but deepening and integrating.",
    duration: "25 min",
    prompts: [
      "Each partner: What do you want to have accomplished by the end of Day 90?",
      "Each partner: What remains undone that you need to make time for?",
      "Both: Identify 3 intentions for the final weeks.",
      "Both: Make one commitment to each other for this final phase."
    ],
    reflection: "The final stretch is not the end of healing. It is the end of the beginning."
  },
  {
    id: 358, day: 75, program: 'infidelity-recovery',
    title: "The Meaning of It All",
    emoji: "🌟",
    tagline: "Begin searching for meaning in what you've been through.",
    body: "Not every painful experience has meaning. But sometimes, through the act of looking, we find something worth keeping. Today you look — not to justify the betrayal, not to make it 'worth it' — but to see if anything of value has emerged from the rubble.",
    duration: "35 min",
    prompts: [
      "Each partner: Has anything valuable emerged from going through this? What?",
      "Each partner: Has this experience taught you anything about yourself that you're grateful for?",
      "Both: Is there any sense in which this crisis has brought you to a deeper level than you had before?",
      "Both: What story do you want to tell about this — in five years?"
    ],
    reflection: "You don't have to find meaning. But if you can, it changes everything."
  },
  {
    id: 359, day: 76, program: 'infidelity-recovery',
    title: "Integration: Body, Mind, Spirit",
    emoji: "🧩",
    tagline: "Address healing at all three levels — not only cognitive.",
    body: "Most of your healing work has been cognitive and emotional. But full healing integrates the body and, for those for whom it matters, the spirit. Today you tend to all three levels of yourself.",
    duration: "35 min",
    prompts: [
      "Body: Do something physical together today — walk, stretch, cook, build. Use your bodies together.",
      "Mind: Each share one insight you've had this week.",
      "Spirit (if this resonates): What have you prayed for, meditated on, or sought beyond yourselves during this time?",
      "Both: After tending to all three — what does your whole self feel like right now?"
    ],
    reflection: "Healing that reaches all the way through is healing that lasts."
  },
  {
    id: 360, day: 77, program: 'infidelity-recovery',
    title: "The Version of You at Your Best",
    emoji: "🌠",
    tagline: "Call forward the best version of yourself in this relationship.",
    body: "Who are you at your best in this relationship? Not the reactive version, not the wounded version — the version that is wise, patient, generous, present. Today you call that version forward — not as a demand on yourself, but as an aspiration.",
    duration: "30 min",
    prompts: [
      "Each partner: Describe the version of you that shows up at your best in this relationship.",
      "Each partner: What helps that version of you emerge? What blocks it?",
      "Both: Share your best-version descriptions with each other.",
      "Both: Agree to call each other toward that best version — not criticize the worst version."
    ],
    reflection: "Love at its best calls forward the best, not the worst."
  },
  {
    id: 361, day: 78, program: 'infidelity-recovery',
    title: "Forgiveness — Revisited",
    emoji: "🌸",
    tagline: "Revisit forgiveness with fresh eyes after nearly 80 days.",
    body: "You explored forgiveness early in this process. Now, nearly 80 days in, it may look different. Not necessarily closer — but perhaps more textured, more understood. Today you return to it with all you've learned.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Where are you on the forgiveness journey now? Has anything shifted?",
      "Betrayed partner: What would need to happen — internally or externally — to move further toward forgiveness?",
      "Betraying partner: What does your partner's forgiveness mean to you? What are you doing to be worthy of it?",
      "Both: Is forgiveness the right goal — or is something else more important right now?"
    ],
    reflection: "Forgiveness is not a moment. It is a direction — and you can face it without having arrived."
  },
  {
    id: 362, day: 79, program: 'infidelity-recovery',
    title: "Twelve Weeks — Almost There",
    emoji: "🎯",
    tagline: "Recognize the milestone of nearly three months of healing work.",
    body: "Twelve weeks. Eighty days of showing up. Today you recognize that milestone — without declaring victory, but with genuine acknowledgment of the distance you've traveled.",
    duration: "25 min",
    prompts: [
      "Each partner: What has been the single hardest day of the past twelve weeks?",
      "Each partner: What has been the single most hopeful moment?",
      "Both: How different do you feel from Day 1 — even if you're still far from healed?",
      "Both: What do you want the next twelve weeks — after this program ends — to look like?"
    ],
    reflection: "Twelve weeks of intentional work is a foundation. What you build on it is yours."
  },
  {
    id: 363, day: 80, program: 'infidelity-recovery',
    title: "The Safety You've Built",
    emoji: "🏠",
    tagline: "Acknowledge the safety you've created together.",
    body: "Safety is not the absence of threat. It is the presence of trust, care, and predictability. By now, you may have built some version of safety that didn't exist before. Today you name and acknowledge what you've built.",
    duration: "25 min",
    prompts: [
      "Betrayed partner: Do you feel safer in this relationship than you did on Day 1? What created that?",
      "Betraying partner: What have you done intentionally to create safety for your partner?",
      "Both: What does safety look like in the daily texture of your relationship now?",
      "Both: What is one more thing you could do to increase safety in the next ten days?"
    ],
    reflection: "Safety is built in small, consistent actions. Name the ones that have mattered."
  },
  {
    id: 364, day: 81, program: 'infidelity-recovery',
    title: "Your Relationship Manifesto",
    emoji: "📣",
    tagline: "Write a brief shared manifesto for your relationship going forward.",
    body: "What do you stand for, together? What are the values, commitments, and intentions that define the relationship you are building? Today you write a short shared manifesto — five to ten sentences — that you will carry beyond this program.",
    duration: "40 min",
    prompts: [
      "Both: Brainstorm the values you want to govern your relationship: honesty, safety, curiosity, play...",
      "Both: Write a manifesto together — 5–10 sentences. Each sentence should start with 'We...'",
      "Both: Read it aloud to each other.",
      "Both: Keep it somewhere visible in your home."
    ],
    reflection: "A manifesto is a declaration of who you intend to be — not a record of who you've been."
  },
  {
    id: 365, day: 82, program: 'infidelity-recovery',
    title: "What Love Means to You Now",
    emoji: "❤️",
    tagline: "Redefine love from where you actually stand.",
    body: "The naive, unexamined version of love may have been part of what broke. The love you're building now is something different — more honest, more costly, more deliberately chosen. Today you define what love means to you now — after all of this.",
    duration: "30 min",
    prompts: [
      "Each partner: How has your definition of love changed through this experience?",
      "Each partner: What do you know about love now that you didn't know before?",
      "Both: Share your definitions. Where do they resemble each other? Where are they different?",
      "Both: What does this new definition demand of you?"
    ],
    reflection: "Love redefined through suffering has the quality of something earned — and is often the most durable kind."
  },
  {
    id: 366, day: 83, program: 'infidelity-recovery',
    title: "The Question You've Never Asked",
    emoji: "❓",
    tagline: "Surface and ask the one question you've been avoiding.",
    body: "After nearly 90 days, there may still be a question you haven't asked — the one that felt too dangerous, too destabilizing, or too revealing. Today is its day. You have built enough ground to stand on.",
    duration: "45 min",
    prompts: [
      "Each partner: What question have you been avoiding asking your partner?",
      "Each partner: What are you afraid of in the answer?",
      "Both: Ask the question. Answer it fully and honestly.",
      "Both: After — how does it feel to have finally asked and answered it?"
    ],
    reflection: "The questions we avoid asking maintain their power. The questions we ask, we begin to heal."
  },
  {
    id: 367, day: 84, program: 'infidelity-recovery',
    title: "Twelve Weeks Complete — Review",
    emoji: "🔖",
    tagline: "A structured review of the full twelve-week journey.",
    body: "Twelve complete weeks. Today you do a structured review of the entire journey — not just recent weeks, but the arc from Day 1 to now.",
    duration: "40 min",
    prompts: [
      "Both: Think back to Week 1. What was the state of things? What were you most afraid of?",
      "Both: Think through the phases — weeks 1–4, 5–8, 9–12. What characterized each?",
      "Both: What has been the most significant turning point in your healing?",
      "Both: Write a one-paragraph description of where your relationship stands today — to be read aloud to each other."
    ],
    reflection: "A full arc has meaning that individual days do not. See the whole shape of what you've done."
  },
  {
    id: 368, day: 85, program: 'infidelity-recovery',
    title: "Joy Is Not Betrayal",
    emoji: "☀️",
    tagline: "Give yourself permission to experience joy without guilt.",
    body: "Many betrayed partners feel guilt when they experience joy — as if happiness is disloyal to their wound. Many betraying partners feel they don't deserve joy until they're forgiven. Today you challenge both of these beliefs. Joy is not a betrayal of your healing. It is evidence that healing is happening.",
    duration: "25 min",
    prompts: [
      "Each partner: Have you felt any genuine joy in the last few weeks? What was it?",
      "Each partner: Did you feel guilty about that joy? Undeserving of it?",
      "Both: Give each other explicit permission to experience joy — say it out loud.",
      "Both: Plan one genuinely joyful thing to do together in the next week."
    ],
    reflection: "Joy in the midst of healing is not denial. It is the first evidence that you are going to make it."
  },
  {
    id: 369, day: 86, program: 'infidelity-recovery',
    title: "What You're Carrying That Isn't Yours",
    emoji: "🎒",
    tagline: "Identify and set down burdens that don't belong to you.",
    body: "In the aftermath of betrayal, both partners often pick up weight that isn't theirs to carry. The betrayed partner may carry shame that belongs to the betraying partner. The betraying partner may carry the weight of trying to control the betrayed partner's healing. Today you identify what isn't yours.",
    duration: "30 min",
    prompts: [
      "Each partner: What are you carrying in this relationship that might not be yours to carry?",
      "Each partner: What would happen if you set it down? What are you afraid would happen?",
      "Both: Help each other identify what belongs to whom.",
      "Both: Practice saying: 'That's not mine to carry.' How does it feel?"
    ],
    reflection: "You can't heal your partner. You can only heal yourself — and create conditions for their healing."
  },
  {
    id: 370, day: 87, program: 'infidelity-recovery',
    title: "After This Program Ends",
    emoji: "🔮",
    tagline: "Plan for life after the 90-day program.",
    body: "Three days from the end of this program. Life will continue after it ends — healing will continue, triggers will still fire, progress will still be made. Today you plan for that continuation so that what you've built doesn't dissolve when the daily structure ends.",
    duration: "35 min",
    prompts: [
      "Both: What daily or weekly practices will you keep after the program ends?",
      "Both: What professional or community support will you maintain?",
      "Both: How will you know if you're sliding backward? What's the signal?",
      "Both: What is your agreement about what to do if things feel like they're deteriorating?"
    ],
    reflection: "A program can create a container. The work is yours to carry forward."
  },
  {
    id: 371, day: 88, program: 'infidelity-recovery',
    title: "The Last Hard Conversation",
    emoji: "🗝️",
    tagline: "Make space for any remaining unfinished business.",
    body: "With two days left, there may be something unfinished — a conversation that never happened, a question still unanswered, something said that was never fully addressed. Today you make space for what remains. This is your chance.",
    duration: "45 min",
    prompts: [
      "Each partner: Is there anything we haven't talked about that still needs to be said?",
      "Each partner: Is there anything I did — or didn't do — in this healing process that I need to own?",
      "Both: Have those conversations. Let them be as long as they need to be.",
      "Both: After — have you cleared the air? What remains, if anything?"
    ],
    reflection: "Unfinished business does not disappear when the program ends. Finish as much as you can."
  },
  {
    id: 372, day: 89, program: 'infidelity-recovery',
    title: "Gratitude for the Journey",
    emoji: "🌺",
    tagline: "Express full gratitude for each other and for the journey.",
    body: "Tomorrow is Day 90 — the formal close of this program. Today you practice gratitude for the journey itself: for what it cost, for what it gave, and for the person beside you who chose to walk it with you.",
    duration: "30 min",
    prompts: [
      "Each partner: What are you most grateful for in this journey?",
      "Each partner: What are you most grateful for in your partner during this time?",
      "Both: Write each other a full gratitude letter — not editing, just thanking.",
      "Both: Read your letters to each other. Let the moment be what it is."
    ],
    reflection: "Gratitude for survival is real gratitude. You have survived something enormous."
  },
  {
    id: 373, day: 90, program: 'infidelity-recovery',
    title: "Day 90 — The Beginning of After",
    emoji: "🌅",
    tagline: "Close this 90-day chapter with honesty, dignity, and hope.",
    body: "Ninety days. You have been doing this every day for ninety days. The wound is not healed — it may not be healed for years. But you are different. The relationship is different. You are not who you were on Day 1, and you are not where you were. That is everything. Today you close this chapter and open the next one.",
    duration: "60 min",
    prompts: [
      "Each partner: Write the most honest statement you can about where you are today — your heart, your hope, your fear.",
      "Each partner: What is your commitment to this person and this relationship for the next 90 days?",
      "Both: Read your statements to each other. Take as long as you need.",
      "Both: Choose one symbol, ritual, or action to mark this moment. Then do it."
    ],
    reflection: "The end of the program is the beginning of after. After is where your real life waits."
  },
  {
    id: 374, day: 91, program: 'infidelity-recovery',
    title: "After the Program — Continuing the Work",
    emoji: "🌱",
    tagline: "The work continues beyond the formal program.",
    body: "You've completed the 90-day intensive. Now comes the sustained, long-term work of rebuilding — less structured, but no less important. Today you check in, maintain the practices, and keep moving forward.",
    duration: "25 min",
    prompts: [
      "Each partner: How do you feel one day after the program ended?",
      "Both: Which practices from the program will you keep?",
      "Both: Set a date in 30 days to do a formal check-in together.",
      "Both: What is the first priority for this next chapter of healing?"
    ],
    reflection: "The program was the scaffolding. The building is yours."
  },

  // INFIDELITY RECOVERY — Days 92–180 (Ongoing Accountability, Deepening Intimacy, Forgiveness, New Normal)
  {
    id: 375, day: 92, program: 'infidelity-recovery',
    title: "Accountability Check — Month Four Begins",
    emoji: "📌",
    tagline: "Open the next chapter with a full accountability review.",
    body: "You are four months in. The crisis is behind you; the long work of sustained accountability is ahead. Today the betraying partner does a full accountability review — not because they are being policed, but because consistent accountability is the foundation everything else rests on.",
    duration: "35 min",
    prompts: [
      "Betraying partner: In the last 30 days, have you honored every transparency commitment you made?",
      "Betraying partner: Were there moments you were tempted to hide something? What did you do?",
      "Betrayed partner: Has the accountability you've seen in the last month felt genuine? What would strengthen it?",
      "Both: Update your transparency agreement if anything needs adjusting."
    ],
    reflection: "Accountability is not a one-time event. It is a daily practice that either grows or erodes."
  },
  {
    id: 376, day: 93, program: 'infidelity-recovery',
    title: "The Trust Ledger",
    emoji: "📒",
    tagline: "Review the record of trust-building actions over the past month.",
    body: "Trust is built by a thousand small deposits — and eroded by even small withdrawals. Today you review the ledger together: what has been deposited, what has been withdrawn, and what the balance looks like right now.",
    duration: "30 min",
    prompts: [
      "Betraying partner: List 5 specific trust-building actions you took in the last 30 days.",
      "Betrayed partner: Which of those felt most meaningful? Which felt smallest?",
      "Both: Was there any trust withdrawal — a broken promise, an evasion, a moment of deflection?",
      "Both: What is the most important deposit to make in the next 30 days?"
    ],
    reflection: "The ledger doesn't lie. Keep adding to it."
  },
  {
    id: 377, day: 94, program: 'infidelity-recovery',
    title: "Proactive Reassurance",
    emoji: "💡",
    tagline: "The betraying partner gives reassurance before being asked.",
    body: "One of the most powerful shifts in infidelity recovery happens when the betraying partner begins offering reassurance proactively — not waiting to be asked, but noticing and giving. Today you practice that shift.",
    duration: "25 min",
    prompts: [
      "Betraying partner: What reassurance does your partner need that they haven't asked for recently?",
      "Betraying partner: Give that reassurance now — unprompted, fully.",
      "Betrayed partner: How does it feel to receive something before you had to ask for it?",
      "Both: How can proactive reassurance become a regular practice in your relationship?"
    ],
    reflection: "Reassurance that comes without being demanded is among the most healing things a betraying partner can offer."
  },
  {
    id: 378, day: 95, program: 'infidelity-recovery',
    title: "Naming the Progress",
    emoji: "📈",
    tagline: "Explicitly name and celebrate the progress you've made.",
    body: "Progress in infidelity recovery is often invisible — you're so focused on what remains that you don't see how far you've come. Today you stop and deliberately name the progress. Both partners deserve to see the distance they've traveled.",
    duration: "25 min",
    prompts: [
      "Each partner: Name 3 specific ways the relationship is better today than it was on Day 1.",
      "Each partner: Name one thing about yourself that has genuinely improved through this process.",
      "Both: Share your progress lists with each other.",
      "Both: Acknowledge each other. Say: 'I see how hard you've worked.' Mean it."
    ],
    reflection: "Progress named is progress that compounds. See it clearly."
  },
  {
    id: 379, day: 96, program: 'infidelity-recovery',
    title: "Old Patterns, New Choices",
    emoji: "🔀",
    tagline: "Identify old relationship patterns and consciously choose differently.",
    body: "Every relationship has patterns — ways of fighting, ways of going silent, ways of seeking comfort or distance. Some of those patterns may have contributed to the conditions in which the betrayal occurred. Today you name them and commit to new choices.",
    duration: "40 min",
    prompts: [
      "Each partner: What was your most harmful pattern in this relationship before the betrayal?",
      "Each partner: Have you broken that pattern, or do you still see it operating?",
      "Both: Where have you both made new choices that break old patterns?",
      "Both: What is one old pattern still alive in this relationship that needs a new choice?"
    ],
    reflection: "You cannot build a new relationship with all the same old patterns intact. Choose consciously."
  },
  {
    id: 380, day: 97, program: 'infidelity-recovery',
    title: "Staying Curious About Your Partner",
    emoji: "🌐",
    tagline: "Practice seeing your partner with fresh eyes.",
    body: "Long relationships often develop a kind of perceptual ossification — we stop seeing our partner and start seeing our idea of them. After betrayal, that fossilized image has been shattered. Today you use that shattering as an opportunity: to actually see who your partner is now.",
    duration: "30 min",
    prompts: [
      "Each partner: What have you discovered about your partner during this healing process that genuinely surprised you?",
      "Each partner: What aspect of your partner do you feel you still don't fully understand?",
      "Both: Ask each other one genuine question — something you've always wanted to know but never asked.",
      "Both: Answer fully. Let each other be seen."
    ],
    reflection: "A partner who is still capable of surprising you is a partner you are still genuinely seeing."
  },
  {
    id: 381, day: 98, program: 'infidelity-recovery',
    title: "Three Months — Where Are You?",
    emoji: "🗓️",
    tagline: "A full three-month check-in.",
    body: "Three months since you began this intentional healing work. Not three months since the betrayal — that clock started earlier. But three months of daily, deliberate effort. Today you take an honest measure of where you actually are.",
    duration: "40 min",
    prompts: [
      "Each partner: On a scale of 1–10, rate: your individual healing / the relationship's healing / your trust level.",
      "Each partner: What score were you hoping to be at by now? How do you feel about the actual numbers?",
      "Both: Compare your ratings. Where do they align? Where are you surprised by each other?",
      "Both: What is the priority focus for the next three months?"
    ],
    reflection: "Three months in is not the finish line. It is the end of the beginning of the middle."
  },
  {
    id: 382, day: 99, program: 'infidelity-recovery',
    title: "The Accountability Habit",
    emoji: "⚙️",
    tagline: "Embed accountability into your daily and weekly rhythm.",
    body: "Accountability should not feel like surveillance — it should feel like a shared practice that both partners have chosen. Today you review your accountability habits and ensure they are embedded into your rhythm in a way that is sustainable and freely given.",
    duration: "30 min",
    prompts: [
      "Betraying partner: What is your current daily accountability practice? What does it look like?",
      "Betrayed partner: Is the accountability you're receiving sufficient? Honest answer.",
      "Both: Is there a weekly check-in for accountability? If not, design one.",
      "Betraying partner: What accountability habit can you commit to for the next 30 days without being asked?"
    ],
    reflection: "Accountability that is habitual is accountability that becomes trustworthy."
  },
  {
    id: 383, day: 100, program: 'infidelity-recovery',
    title: "Day 100 — One Hundred Days",
    emoji: "💯",
    tagline: "Mark one hundred days of healing work.",
    body: "One hundred days. That is one hundred choices to keep going. To keep showing up. To not walk away from the hardest work you've ever done together. That is not nothing. In fact, it is extraordinary. Today you mark it.",
    duration: "35 min",
    prompts: [
      "Each partner: What has been the single most important thing you've learned in 100 days?",
      "Each partner: What does it mean to you that you've made it this far?",
      "Both: Write each other a short message for this milestone — not a love letter, not a vow, just an honest note.",
      "Both: Read your notes aloud. Then do something small to mark the day."
    ],
    reflection: "A hundred days. You showed up a hundred times. Remember that on the hard days ahead."
  },
  {
    id: 384, day: 101, program: 'infidelity-recovery',
    title: "Deepening Emotional Intimacy",
    emoji: "🌊",
    tagline: "Move from surface connection to genuine emotional depth.",
    body: "In the months since the betrayal, much of your conversation has been about the betrayal itself — the facts, the feelings, the rebuilding. Now it is time to build emotional intimacy that is not only about the wound. Today you go deeper into each other as full human beings.",
    duration: "35 min",
    prompts: [
      "Each partner: What are you most afraid of in your life right now — beyond this relationship?",
      "Each partner: What do you most want for yourself in the next five years — as an individual?",
      "Both: Share these answers fully. Listen as if you're hearing them for the first time.",
      "Both: What does knowing this about your partner change in how you see them?"
    ],
    reflection: "Emotional intimacy is built in the moments when you show your partner the full shape of who you are."
  },
  {
    id: 385, day: 102, program: 'infidelity-recovery',
    title: "The Way You Fight",
    emoji: "⚡",
    tagline: "Examine and improve how you handle conflict.",
    body: "By now you have had many difficult conversations and likely some real fights. The way you fight — how you escalate, de-escalate, repair — matters enormously for your long-term future. Today you examine your conflict patterns honestly.",
    duration: "40 min",
    prompts: [
      "Each partner: What do you do in a fight that you're not proud of?",
      "Each partner: What does your partner do in a fight that is most harmful?",
      "Both: Share these honestly. Receive them without defending.",
      "Both: Agree on three 'rules of engagement' for future conflicts. Write them down."
    ],
    reflection: "Couples who fight well are not couples who don't fight. They are couples who know how to come back."
  },
  {
    id: 386, day: 103, program: 'infidelity-recovery',
    title: "Rebuilding Friendship",
    emoji: "🤜🤛",
    tagline: "Tend to the friendship at the core of the relationship.",
    body: "Before you were partners, you were, in some way, friends — or at least drawn to each other as people. Romantic relationships that lose their friendship lose an essential layer of resilience. Today you tend deliberately to the friendship.",
    duration: "30 min",
    prompts: [
      "Each partner: What did you enjoy doing together as friends — before the relationship became heavy?",
      "Both: Do one of those things today. Or plan to within the week.",
      "Each partner: What is something you genuinely like about your partner as a person — not as a partner?",
      "Both: Tell each other. Let it be playful if it can be."
    ],
    reflection: "Friendship is the floor beneath the romance. Keep it strong."
  },
  {
    id: 387, day: 104, program: 'infidelity-recovery',
    title: "The Commitment Renewed",
    emoji: "🔗",
    tagline: "Renew your commitment to each other with fresh intention.",
    body: "Commitments that are never renewed become assumptions. Assumptions become invisible. What becomes invisible gets neglected. Today you bring your commitment into view again — fresh, deliberate, and with full knowledge of what you have both been through.",
    duration: "30 min",
    prompts: [
      "Each partner: In your own words — what are you committing to right now?",
      "Each partner: What does 'choosing you' mean to you today, with all you now know?",
      "Both: Say your commitments to each other, face to face.",
      "Both: How often should you formally renew this commitment going forward?"
    ],
    reflection: "A commitment renewed with full knowledge is stronger than one made in innocence."
  },
  {
    id: 388, day: 105, program: 'infidelity-recovery',
    title: "Fifteen Weeks — Deepening",
    emoji: "🌀",
    tagline: "Use the fifteen-week mark to go deeper, not wider.",
    body: "Fifteen weeks of healing work. The work now is not about covering more ground — it is about going deeper into the ground you've already covered. Deeper honesty. Deeper intimacy. Deeper accountability. Today you go deeper.",
    duration: "30 min",
    prompts: [
      "Each partner: What is one thing you've been holding back in this healing process that you could go deeper on?",
      "Each partner: What topic or feeling have you been skating over rather than diving into?",
      "Both: Choose one of those things and go into it together today.",
      "Both: What did going deeper feel like? Was it worth it?"
    ],
    reflection: "Depth is not the same as intensity. Depth is sustained, patient, honest engagement."
  },
  {
    id: 389, day: 106, program: 'infidelity-recovery',
    title: "The Forgiveness Inventory",
    emoji: "🧮",
    tagline: "Take a detailed inventory of where forgiveness stands.",
    body: "Forgiveness is not one thing. There are many layers: forgiving the act, forgiving the deception, forgiving specific lies, forgiving the loss of innocence, forgiving the violation of safety. Today you take inventory of each layer and where you honestly stand.",
    duration: "40 min",
    prompts: [
      "Betrayed partner: List the specific things you need to forgive — not just 'the affair' but each layer.",
      "Betrayed partner: For each item on your list — have you moved at all toward forgiveness on that particular thing?",
      "Betraying partner: Which of those items do you sense is hardest for your partner?",
      "Both: What would forward movement on forgiveness require right now?"
    ],
    reflection: "Forgiveness happens layer by layer, not all at once. Honor the layers."
  },
  {
    id: 390, day: 107, program: 'infidelity-recovery',
    title: "What Gets in the Way of Forgiveness",
    emoji: "🧱",
    tagline: "Examine the obstacles to forgiveness.",
    body: "Forgiveness is not always blocked by lack of desire. Often it is blocked by fear, by unresolved questions, by insufficient accountability, or by a narrative that hasn't yet been updated. Today you examine what is actually blocking forgiveness for the betrayed partner.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What is the biggest obstacle to forgiveness for you right now?",
      "Betrayed partner: Is that obstacle something your partner can help remove? Or is it internal work?",
      "Betraying partner: What, if anything, could you do to make forgiveness more possible?",
      "Both: Is there a block that requires outside support — a therapist, a spiritual practice — to address?"
    ],
    reflection: "Every block to forgiveness is information. Follow it where it leads."
  },
  {
    id: 391, day: 108, program: 'infidelity-recovery',
    title: "Choosing Forgiveness — Not Yet",
    emoji: "⏳",
    tagline: "Normalize that forgiveness may not be here yet — and that's okay.",
    body: "There is enormous cultural pressure to forgive quickly and move on. That pressure is not always helpful. Real forgiveness — the kind that is genuine, not performed — cannot be forced. Today you give yourself permission to be exactly where you are on the forgiveness path.",
    duration: "25 min",
    prompts: [
      "Betrayed partner: Where are you on forgiveness honestly — without the pressure to be further along than you are?",
      "Betraying partner: Can you be at peace with your partner being where they are — even if it's not forgiveness yet?",
      "Both: What does the pressure to forgive 'by now' come from? Internal? External?",
      "Both: Release the timeline. Forgiveness will come when it comes — or it won't. Either way, what matters is the truth."
    ],
    reflection: "Forgiveness on a forced timeline is not forgiveness. It is performance."
  },
  {
    id: 392, day: 109, program: 'infidelity-recovery',
    title: "The Radical Acceptance Practice",
    emoji: "🫸",
    tagline: "Practice accepting what cannot be changed.",
    body: "There are things about this situation that cannot be undone. The betrayal happened. Time was lost. The innocent version of the relationship is gone. Radical acceptance does not mean approval — it means releasing the fight against what cannot be changed, so your energy can go toward what can.",
    duration: "30 min",
    prompts: [
      "Each partner: What are you still fighting against that cannot be changed?",
      "Each partner: What would it mean to accept that thing — not approve of it, but stop fighting it?",
      "Both: Sit together and each say out loud: 'This happened. I cannot change it. I accept that it is part of our story.'",
      "Both: After saying it — what shifts, even slightly?"
    ],
    reflection: "Radical acceptance is not surrender. It is the releasing of a war you cannot win, so you can fight the ones you can."
  },
  {
    id: 393, day: 110, program: 'infidelity-recovery',
    title: "The Intimacy You've Rebuilt",
    emoji: "🔥",
    tagline: "Name and honor the intimacy you have actually rebuilt.",
    body: "It is easy to focus on what intimacy is missing. Today you focus on what has been rebuilt. The small warmths, the moments of genuine connection, the closeness that has returned in any form. Name it. Honor it. Let it encourage you.",
    duration: "30 min",
    prompts: [
      "Each partner: Describe one moment in the last month where you felt genuinely close to your partner.",
      "Both: What form of intimacy feels most restored right now?",
      "Both: What form of intimacy still feels most distant?",
      "Both: What would help the most distant form of intimacy begin to return?"
    ],
    reflection: "What you've rebuilt, you built. It belongs to you. Let it grow."
  },
  {
    id: 394, day: 111, program: 'infidelity-recovery',
    title: "Sixteen Weeks — The New Normal Begins",
    emoji: "🏡",
    tagline: "Notice the shape of your new relational normal.",
    body: "Sixteen weeks. By now, a new normal is beginning to form — new rhythms, new patterns of communication, new rituals of connection. Today you observe and name what that new normal looks like, and whether it is the normal you want.",
    duration: "30 min",
    prompts: [
      "Each partner: Describe a typical week in your relationship right now. What does it look like?",
      "Each partner: What about that typical week feels good and worth keeping?",
      "Both: What still feels off or incomplete in the daily texture of your relationship?",
      "Both: What is one intentional change to make in the next week to improve the everyday?"
    ],
    reflection: "The new normal is not fixed yet. You are still building it. Build deliberately."
  },
  {
    id: 395, day: 112, program: 'infidelity-recovery',
    title: "Shared Goals Beyond the Relationship",
    emoji: "🎯",
    tagline: "Build shared purpose that extends beyond healing.",
    body: "A relationship that only exists to survive its own crisis is a fragile thing. Strong relationships have shared purpose beyond themselves — goals, projects, dreams, a contribution to the world. Today you begin to think together about what you're building beyond the healing.",
    duration: "35 min",
    prompts: [
      "Both: What shared goals did you have before the betrayal? Are any of them still alive?",
      "Both: What shared dream — financial, family, creative, community — do you want to pursue together?",
      "Both: What would it mean to work toward something together that has nothing to do with the affair?",
      "Both: Name one shared goal to begin moving toward in the next 90 days."
    ],
    reflection: "A couple with a shared future to build has a reason to keep building the relationship."
  },
  {
    id: 396, day: 113, program: 'infidelity-recovery',
    title: "Tracking the Triggers",
    emoji: "📊",
    tagline: "Review how triggers are being handled now vs. earlier.",
    body: "You mapped your triggers months ago. By now, they may have changed — some resolved, some unchanged, some new ones appeared. Today you do a trigger review and assess how your response to them has evolved.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Which triggers from your original list are less intense now?",
      "Betrayed partner: Which remain just as powerful? Are there new ones?",
      "Both: How has the betraying partner's response to triggers improved? Where is there still room to grow?",
      "Both: Update your trigger response plan with what you know now."
    ],
    reflection: "Triggers evolve with healing. Keep updating your map."
  },
  {
    id: 397, day: 114, program: 'infidelity-recovery',
    title: "The Story of Us — Rewritten",
    emoji: "📚",
    tagline: "Rewrite your shared story to include and integrate the betrayal.",
    body: "Every couple has a story of themselves. After betrayal, that story must be rewritten — not to erase the betrayal, but to integrate it into a larger arc. A story that includes the wound and the healing is more honest and ultimately more powerful than one that pretends neither happened.",
    duration: "40 min",
    prompts: [
      "Both: What was your story of 'us' before the betrayal? How did you tell it?",
      "Both: What does that story look like now, with the betrayal as part of it?",
      "Both: Write a short 'story of us' together — honest, not sugar-coated, but not without hope.",
      "Both: Read it aloud. Does it feel true?"
    ],
    reflection: "The truest love stories are not the ones without darkness. They are the ones that survive it."
  },
  {
    id: 398, day: 115, program: 'infidelity-recovery',
    title: "The Forgiveness Letter",
    emoji: "📝",
    tagline: "Write a forgiveness letter — whether you're ready to send it or not.",
    body: "Writing a forgiveness letter does not mean forgiving. It is an exercise in exploring what forgiveness would look like and what it would contain. The act of writing often moves you further than you thought you could go — or clarifies what still needs to happen first.",
    duration: "45 min",
    prompts: [
      "Betrayed partner: Write a forgiveness letter to your partner — from wherever you actually are. It can begin 'I am not fully there yet, but...'",
      "Betrayed partner: Reread what you wrote. What surprised you?",
      "Both: Share the letter, or share a paragraph from it, if the betrayed partner is willing.",
      "Betraying partner: How does hearing any part of that letter land for you?"
    ],
    reflection: "Writing toward forgiveness moves you. The writing is not the destination — it is the walking."
  },
  {
    id: 399, day: 116, program: 'infidelity-recovery',
    title: "Empathy Across the Divide",
    emoji: "🤲",
    tagline: "Practice extending empathy to each other's experience.",
    body: "True empathy across the betrayal divide is one of the most difficult — and most healing — things a couple can achieve. The betrayed partner empathizing with the betraying partner's shame does not excuse anything. The betraying partner empathizing with the betrayed partner's grief does not minimize anything. Empathy is not agreement. It is presence.",
    duration: "35 min",
    prompts: [
      "Betraying partner: What do you believe your partner's experience has been like? Describe it in detail — their pain, their confusion, their grief.",
      "Betrayed partner: Correct or affirm what your partner said. What did they get right? What did they miss?",
      "Betrayed partner: What do you believe your partner's internal experience has been — their shame, their fear?",
      "Betraying partner: Receive that. What did your partner get right?"
    ],
    reflection: "Empathy is not endorsement. It is the ability to feel alongside someone. Practice it."
  },
  {
    id: 400, day: 117, program: 'infidelity-recovery',
    title: "Day 117 — The Long Middle",
    emoji: "🌁",
    tagline: "Acknowledge and honor the long middle of the healing journey.",
    body: "There was a beginning — the discovery, the crisis. There will be an end — whatever form it takes. And there is the long middle, which is where you are now. The long middle gets less attention than the dramatic beginning or the celebrated end. Today you honor it.",
    duration: "25 min",
    prompts: [
      "Each partner: What does the long middle feel like for you right now?",
      "Each partner: What is sustaining you through it?",
      "Both: What have you been doing consistently that deserves acknowledgment?",
      "Both: Give that acknowledgment to each other — plainly, honestly."
    ],
    reflection: "The long middle is where character is built. You are building yours."
  },
  {
    id: 401, day: 118, program: 'infidelity-recovery',
    title: "Sexual Healing — Honest Inventory",
    emoji: "💑",
    tagline: "Take an honest, non-pressured inventory of sexual intimacy.",
    body: "Sexual intimacy after infidelity is one of the most nuanced and sensitive dimensions of recovery. Some couples resume quickly; for others it takes years; for some it never fully returns in the same form. Today you talk about where you actually are — with honesty and without pressure.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: How do you feel about sexual intimacy with your partner right now — honestly?",
      "Betrayed partner: What would need to be true for sexual intimacy to feel good and safe?",
      "Betraying partner: What are you feeling about sexual intimacy — desire, guilt, fear, patience?",
      "Both: What is a realistic, pressure-free step toward rebuilt sexual intimacy that respects where you both are?"
    ],
    reflection: "Sexual healing follows emotional healing. You cannot rush it, and pressuring it causes damage. Honor the pace."
  },
  {
    id: 402, day: 119, program: 'infidelity-recovery',
    title: "Rebuilding Desire",
    emoji: "✨",
    tagline: "Explore what rebuilding desire actually requires.",
    body: "Desire after betrayal doesn't simply return when enough time passes. It requires specific conditions: emotional safety, authentic connection, a sense of being genuinely wanted, and freedom from comparison or fear. Today you talk about what creating those conditions looks like for both of you.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What conditions need to be present for you to feel genuine desire again?",
      "Betrayed partner: What currently blocks desire that your partner could help address?",
      "Betraying partner: What do you need to feel about yourself in order to show up with genuine desire?",
      "Both: What is one concrete thing each of you can do to cultivate the conditions for desire?"
    ],
    reflection: "Desire is not an accident that happens. It is an environment you can help create."
  },
  {
    id: 403, day: 120, program: 'infidelity-recovery',
    title: "Four Months — Accountability Sustained",
    emoji: "🏅",
    tagline: "Honor four months of sustained accountability.",
    body: "Four months. If the betraying partner has maintained genuine, consistent accountability for four months — that is significant. It is not enough to end the healing work, but it is real and it matters. Today you acknowledge that sustained record and assess what it means for trust.",
    duration: "35 min",
    prompts: [
      "Betraying partner: Over the last four months, what accountability commitments have you kept consistently?",
      "Betrayed partner: How has four months of consistent accountability changed your felt sense of safety?",
      "Both: What does sustained accountability look like going forward — month five and beyond?",
      "Betrayed partner: Name one thing the four months of accountability has allowed you to begin to put down."
    ],
    reflection: "Accountability sustained over months is no longer just a commitment. It is becoming who you are."
  },
  {
    id: 404, day: 121, program: 'infidelity-recovery',
    title: "Deepening Intimacy — Emotional Disclosure",
    emoji: "🗣️",
    tagline: "Practice deeper emotional disclosure than you've attempted before.",
    body: "Deepened intimacy requires deepened disclosure — being willing to share more of your inner life than feels comfortable. Today you each make one disclosure that you have not yet made in this healing process: something true, vulnerable, and significant.",
    duration: "40 min",
    prompts: [
      "Each partner: Think of something true about yourself that you have not yet shared in this healing process.",
      "Each partner: Share it. All of it. Without softening.",
      "Both: Receive each other's disclosure with full presence — no problem-solving, no minimizing.",
      "Both: After — what did it feel like to say it? What did it feel like to hear it?"
    ],
    reflection: "Each act of deeper disclosure is a brick laid in the foundation of genuine intimacy."
  },
  {
    id: 405, day: 122, program: 'infidelity-recovery',
    title: "The Freedom to Not Be Okay",
    emoji: "🌧️",
    tagline: "Give each other permission to not be okay without alarming each other.",
    body: "In recovery, both partners can become hyper-attuned to each other's mood — a bad day feels like evidence that everything is falling apart. Today you practice giving each other permission to have a hard day without it being a crisis.",
    duration: "25 min",
    prompts: [
      "Each partner: What does a hard day look like for you in this relationship? What are the signs?",
      "Each partner: What do you need from your partner on a hard day that isn't crisis management?",
      "Both: Agree on a way to signal 'I'm having a hard day' that doesn't send the relationship into emergency mode.",
      "Both: Practice saying 'I'm not okay today. I don't need you to fix it. I just need you to know.' to each other."
    ],
    reflection: "A relationship strong enough to hold hard days without treating them as catastrophes is a secure relationship."
  },
  {
    id: 406, day: 123, program: 'infidelity-recovery',
    title: "Re-establishing Shared Dreams",
    emoji: "🌙",
    tagline: "Return to shared dreams and map them forward.",
    body: "Betrayal can suspend dreams — the trip you were going to take, the home you were going to buy, the life you were building toward. Today you ask: which dreams are still alive? Which need to be released? Which can be rebuilt in a new form?",
    duration: "35 min",
    prompts: [
      "Both: What dreams were you building before the betrayal?",
      "Both: Which of those dreams are still alive — maybe transformed, but still present?",
      "Both: Which dreams need to be grieved and released?",
      "Both: Is there a new dream — something that could only exist because of who you've become — worth building toward?"
    ],
    reflection: "Dreams deferred can return. Dreams updated often become better than the originals."
  },
  {
    id: 407, day: 124, program: 'infidelity-recovery',
    title: "The Body's Forgiveness",
    emoji: "🫁",
    tagline: "Work toward the body releasing what the mind has begun to process.",
    body: "The mind may be further along the forgiveness path than the body. Many betrayed partners find that even when intellectually they have moved forward, the body still holds fear, aversion, or tension. Today you tend to the body's healing specifically.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Where does your body still hold the betrayal? Tension, guardedness, aversion?",
      "Both: Do a gentle physical grounding exercise together — feet on the floor, deep breathing, eyes open.",
      "Betrayed partner: After the grounding — what, if anything, has softened?",
      "Both: What regular physical practice (yoga, walks, breathwork) could help the body continue to release?"
    ],
    reflection: "The body heals on its own timeline. Honor it."
  },
  {
    id: 408, day: 125, program: 'infidelity-recovery',
    title: "Eighteen Weeks — Redefining the Relationship",
    emoji: "🔭",
    tagline: "Name what kind of relationship you are actively building.",
    body: "Eighteen weeks. By now the relationship you are building is genuinely different from the one that was broken. Today you name it — not as the old relationship repaired, but as a new one, built on different foundations. What is this relationship?",
    duration: "35 min",
    prompts: [
      "Each partner: In three words, describe the relationship you are building (not the one you lost).",
      "Each partner: What is the defining characteristic of this new version of your relationship?",
      "Both: What has this relationship become that the old one never was?",
      "Both: Name the relationship. Give it a description that is yours."
    ],
    reflection: "Naming the new relationship gives it an identity distinct from the wound. That matters."
  },
  {
    id: 409, day: 126, program: 'infidelity-recovery',
    title: "Working Toward Forgiveness — Active Steps",
    emoji: "🚶",
    tagline: "Take concrete, active steps toward forgiveness.",
    body: "Forgiveness is not only a feeling that arrives when the conditions are right. It can also be an active practice — deliberate choices to release resentment one layer at a time. Today you take active steps, however small.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: Choose one specific aspect of the betrayal you are willing to begin releasing — not all of it, just one thing.",
      "Betrayed partner: Say out loud: 'I am choosing to begin releasing [this specific thing].' Notice how it feels.",
      "Betraying partner: What would you do differently with the freedom of even partial forgiveness?",
      "Both: What does active forgiveness practice look like for you going forward?"
    ],
    reflection: "Forgiveness practiced is forgiveness that grows. Start with one layer."
  },
  {
    id: 410, day: 127, program: 'infidelity-recovery',
    title: "The Resentment Audit",
    emoji: "🔦",
    tagline: "Surface and name any resentment still operating.",
    body: "Resentment is like mold — it grows in the dark, unseen, undermining the structure. Today you bring your resentments into the light: name them fully, without softening. Not to fix them today, but to make them visible.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What resentments are you still carrying? Name each one specifically.",
      "Betraying partner: What resentments are you carrying — from this healing process, from the relationship, from the past?",
      "Both: Share your resentment lists. Receive them without defense.",
      "Both: For each resentment — is it blocking forgiveness? What would begin to dissolve it?"
    ],
    reflection: "Resentment named loses some of its power. Name everything."
  },
  {
    id: 411, day: 128, program: 'infidelity-recovery',
    title: "Forgiveness as a Gift to Yourself",
    emoji: "🎁",
    tagline: "Reframe forgiveness as self-liberation, not absolution.",
    body: "The most powerful reframe of forgiveness is this: it is not primarily something you do for the person who hurt you. It is something you do for yourself — to free yourself from the chain that connects you to the wound. Today you sit with that reframe.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What would it cost you to continue carrying unforgiveness for the next five years?",
      "Betrayed partner: What would you gain — for yourself, not for your partner — by moving toward forgiveness?",
      "Both: Discuss the difference between forgiving and excusing. Make sure you both understand it the same way.",
      "Betrayed partner: Is there any part of you ready to forgive — not for them, but for yourself?"
    ],
    reflection: "Forgiveness releases the forgiver first. Let that be your reason."
  },
  {
    id: 412, day: 129, program: 'infidelity-recovery',
    title: "What Forgiveness Is Not",
    emoji: "🚫",
    tagline: "Clear up the misconceptions that block forgiveness.",
    body: "Many betrayed partners resist forgiveness because they have been taught false versions of it. Forgiveness is not: saying it was okay. Forgetting. Restoring trust automatically. Staying in the relationship. Pretending. Today you clear out the false definitions and find the real one.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What have you believed forgiveness means that has made it feel impossible or dangerous?",
      "Both: Define together what forgiveness is NOT. Make a list.",
      "Both: Define together what forgiveness IS in this context — your definition, not a cultural one.",
      "Betrayed partner: With that definition — does forgiveness feel more accessible?"
    ],
    reflection: "The right definition of forgiveness makes it possible. Find yours."
  },
  {
    id: 413, day: 130, program: 'infidelity-recovery',
    title: "Five Months — The New Foundation",
    emoji: "🪨",
    tagline: "Assess the solidity of what you've built at the five-month mark.",
    body: "Five months. What you have built over these months is a foundation — not complete, not perfect, but real. Today you test that foundation: stand on it together and see if it holds.",
    duration: "35 min",
    prompts: [
      "Each partner: What feels genuinely solid in your relationship right now?",
      "Each partner: What still feels fragile or unfinished?",
      "Both: Where has your relationship surprised you with its resilience?",
      "Both: What is the single most important thing still being built?"
    ],
    reflection: "A foundation tested and found solid is more trustworthy than one never tested at all."
  },
  {
    id: 414, day: 131, program: 'infidelity-recovery',
    title: "Intimacy Without Performing",
    emoji: "🎭",
    tagline: "Practice authentic intimacy that doesn't perform healing.",
    body: "Some couples begin to perform healing — to go through the motions of connection without genuine feeling behind them. Today you check: are you being authentic in your intimacy, or are you performing it? And if performing — what would authentic look like?",
    duration: "30 min",
    prompts: [
      "Each partner: Be honest — have there been moments when you were going through the motions without genuine feeling?",
      "Each partner: What does authentic connection feel like for you, vs. performed connection?",
      "Both: Share one authentic feeling about the relationship right now — not curated, not softened.",
      "Both: How can you hold each other accountable to authenticity over performance?"
    ],
    reflection: "Performed healing is not healing. Authentic struggle is more valuable than polished pretense."
  },
  {
    id: 415, day: 132, program: 'infidelity-recovery',
    title: "Twenty Weeks — The Long View",
    emoji: "🔭",
    tagline: "Take the long view at the twenty-week mark.",
    body: "Twenty weeks. You are no longer in the early stages of recovery. You are in the sustained, long-term rebuilding phase. Today you take the long view: not this week's progress, but where you want to be in a year.",
    duration: "30 min",
    prompts: [
      "Each partner: Where do you want to be in your individual healing one year from now?",
      "Each partner: Where do you want the relationship to be in one year?",
      "Both: What needs to happen in the next six months to reach those goals?",
      "Both: Set one concrete six-month goal for the relationship."
    ],
    reflection: "The long view protects you from being undone by the short-term hard days."
  },
  {
    id: 416, day: 133, program: 'infidelity-recovery',
    title: "Accountability Without Surveillance",
    emoji: "👁️",
    tagline: "Ensure accountability practices remain healthy and voluntary.",
    body: "There is a fine line between accountability and surveillance — and crossing it damages both partners. Today you evaluate whether your current accountability practices are healthy, voluntary, and genuinely chosen rather than coerced.",
    duration: "30 min",
    prompts: [
      "Betraying partner: Do your accountability practices feel freely chosen or coerced? Be honest.",
      "Betrayed partner: Are any of your accountability requests crossing into surveillance? Be honest.",
      "Both: Where is the line between the two for you specifically?",
      "Both: Adjust any practices that have drifted toward unhealthy territory."
    ],
    reflection: "Healthy accountability is given freely. Surveillance extracts. Know the difference."
  },
  {
    id: 417, day: 134, program: 'infidelity-recovery',
    title: "The Trust Milestone",
    emoji: "🏔️",
    tagline: "Acknowledge a significant trust milestone.",
    body: "By now, there may be a real, felt shift in trust — a point where the betrayed partner has internalized the changes and genuinely feels safer. This is not the end of healing, but it is a landmark worth naming. Today you look for and name that landmark.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Has there been a moment — recent or earlier — where you felt a genuine shift in trust? What was it?",
      "Betraying partner: What did you do, specifically, that you believe contributed to that shift?",
      "Both: What does a 'trust milestone' mean — not full trust restored, but significant progress?",
      "Both: Name the milestone. Celebrate it briefly. Then keep going."
    ],
    reflection: "Trust milestones deserve acknowledgment. They are evidence that the work is working."
  },
  {
    id: 418, day: 135, program: 'infidelity-recovery',
    title: "Forgiving the Deception",
    emoji: "🕵️",
    tagline: "Address forgiveness for the deception specifically.",
    body: "For many betrayed partners, the affair itself is painful — but the sustained deception can be even harder to forgive. The lies, the cover stories, the gaslighting, the parallel life. Today you address forgiveness for the deception layer specifically.",
    duration: "40 min",
    prompts: [
      "Betrayed partner: What aspect of the deception hurts most — the specific lies, the duration, the covering of tracks?",
      "Betraying partner: Fully own the deception — not just the affair, but every lie told to maintain it.",
      "Betrayed partner: What would beginning to forgive the deception require — separate from the affair?",
      "Betraying partner: What ongoing transparency can you offer as evidence that the deception is permanently over?"
    ],
    reflection: "The affair and the deception are two separate wounds. Both deserve to be directly addressed."
  },
  {
    id: 419, day: 136, program: 'infidelity-recovery',
    title: "Rebuilding Sexual Trust",
    emoji: "🌹",
    tagline: "Address the specific work of rebuilding sexual trust.",
    body: "Sexual trust after infidelity is its own distinct category — separate from general trust. The betrayed partner's body and mind must come to believe that physical intimacy with this person is again safe, wanted, and uncontaminated by comparison. Today you work on this layer specifically.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What specifically makes sexual intimacy feel unsafe or complicated right now?",
      "Betrayed partner: What would need to be true — emotionally, practically — for sexual safety to return?",
      "Betraying partner: What can you do to consistently demonstrate that your partner is the person you choose — in every way?",
      "Both: What is one specific thing that would help sexual safety rebuild in the next month?"
    ],
    reflection: "Sexual trust is rebuilt through emotional safety, consistent behavior, and patient presence. There are no shortcuts."
  },
  {
    id: 420, day: 137, program: 'infidelity-recovery',
    title: "Forgiving the Selfishness",
    emoji: "🎭",
    tagline: "Address forgiveness for the self-centered choice the affair represented.",
    body: "At the core of most affairs is a profound act of selfishness: choosing one's own gratification over the safety and dignity of a partner. That selfishness — the choice to prioritize oneself regardless of the cost to another — is its own wound to forgive. Today you address it directly.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What does it mean to you that your partner made that self-centered choice?",
      "Betraying partner: Own the selfishness fully. Not just the action — the motivation behind it.",
      "Betrayed partner: What would forgiving the selfishness — not the whole affair, just this — require?",
      "Betraying partner: How are you demonstrating, concretely, that you are no longer that version of yourself?"
    ],
    reflection: "Forgiving the selfishness is forgiving the most human part of the wound. And it may be the most freeing."
  },
  {
    id: 421, day: 138, program: 'infidelity-recovery',
    title: "Twenty-Two Weeks — The Middle Distance",
    emoji: "🌄",
    tagline: "Acknowledge and assess the middle distance of healing.",
    body: "Twenty-two weeks. You are neither in the crisis of the beginning nor the completion of the end. You are in the middle distance — which has its own particular quality of experience: familiar with the work, not yet free of it. Today you check in from that middle distance.",
    duration: "25 min",
    prompts: [
      "Each partner: How would you describe the quality of this phase of healing?",
      "Each partner: What is the emotional texture of your relationship right now?",
      "Both: What is the most important work of the next month?",
      "Both: Name one thing that has genuinely lightened in the last few weeks."
    ],
    reflection: "The middle distance has its own beauty — if you look for it."
  },
  {
    id: 422, day: 139, program: 'infidelity-recovery',
    title: "The Moment of Real Forgiveness",
    emoji: "🌤️",
    tagline: "Recognize and honor any genuine forgiveness that has arrived.",
    body: "Real forgiveness often arrives not as a grand gesture but as a quiet shift — a moment when you realize you are no longer carrying quite as much weight. Today you look for that shift. It may have already happened in some form. If so, name it. Honor it.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: Has there been any moment — however small — where you felt genuine release? Describe it.",
      "Betrayed partner: What, if anything, have you actually forgiven — even partially?",
      "Betraying partner: Has your partner's movement toward forgiveness changed anything in how you carry yourself?",
      "Both: What does genuine forgiveness feel like, as opposed to performed forgiveness?"
    ],
    reflection: "Real forgiveness is felt in the body as a lightening. Trust what you feel."
  },
  {
    id: 423, day: 140, program: 'infidelity-recovery',
    title: "Six Months — The Halfway Point of the First Year",
    emoji: "🌗",
    tagline: "Mark six months with a full, honest accounting.",
    body: "Six months. The halfway point of the first year of healing. Research on infidelity recovery consistently suggests that genuine rebuilding takes one to two years at minimum. You are halfway through the first of those years. Today you mark it honestly.",
    duration: "45 min",
    prompts: [
      "Each partner: Write an honest one-page letter about where you are at six months. Not edited for the other person — honest.",
      "Each partner: From your letter, choose the two most important sentences to share.",
      "Both: Share those sentences. Then talk about them.",
      "Both: What are you committing to for the second half of this first year?"
    ],
    reflection: "Six months is not halfway healed. It is halfway through the first year of choosing. That is something."
  },
  {
    id: 424, day: 141, program: 'infidelity-recovery',
    title: "Long-Term Security — What It Feels Like",
    emoji: "🏛️",
    tagline: "Begin to name what long-term security is starting to feel like.",
    body: "Security in a relationship is not a switch that flips. It is a feeling that grows, gradually, as evidence accumulates and the nervous system slowly learns that the threat is gone. Today you check whether any form of long-term security is beginning to feel available.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Do you experience any moments of genuine security in this relationship? Describe one.",
      "Betrayed partner: What is still the biggest obstacle to feeling consistently secure?",
      "Betraying partner: What are you doing consistently that you believe is building long-term security?",
      "Both: What would full security look like for you? Describe it in detail."
    ],
    reflection: "Security is not the absence of threat. It is the felt presence of safety. Tend to both."
  },
  {
    id: 425, day: 142, program: 'infidelity-recovery',
    title: "The New Normal — Living It",
    emoji: "🌻",
    tagline: "Name what the new normal has become in daily life.",
    body: "The new normal is no longer a plan — by now, it is actually being lived. The rituals, the communication patterns, the level of transparency, the shared goals. Today you observe and name what your new normal actually looks like from the inside.",
    duration: "30 min",
    prompts: [
      "Each partner: Describe one ordinary day in your relationship right now. Be specific.",
      "Both: What parts of that ordinary day feel good and worth keeping?",
      "Both: What parts of that ordinary day still feel incomplete or uncomfortable?",
      "Both: Is the new normal you are living the one you wanted to build? What, if anything, needs adjusting?"
    ],
    reflection: "The new normal is not an accident. You built it. Keep building it intentionally."
  },
  {
    id: 426, day: 143, program: 'infidelity-recovery',
    title: "What You've Given Each Other",
    emoji: "🎀",
    tagline: "Name the gifts — however unexpected — of this healing journey.",
    body: "You did not choose this. But you have been through it together, and there may be things — depth, honesty, resilience — that you have given each other through this that you wouldn't have given otherwise. Today you name them.",
    duration: "30 min",
    prompts: [
      "Each partner: What has your partner given you through this healing process that you are grateful for?",
      "Each partner: What have you given yourself through this process?",
      "Both: Share these things with each other.",
      "Both: What unexpected gift has come from a process you never would have chosen?"
    ],
    reflection: "Gifts given in fire are among the most lasting."
  },
  {
    id: 427, day: 144, program: 'infidelity-recovery',
    title: "Twenty-Four Weeks — Half a Year",
    emoji: "🎉",
    tagline: "Acknowledge and honor six full months of intentional work.",
    body: "Twenty-four weeks. Half a year of showing up, of doing the work, of choosing each other over and over even when it was hard. That is a record. Not proof that everything is healed — but proof that you are both committed to this. Today you honor that.",
    duration: "35 min",
    prompts: [
      "Each partner: What are you most proud of in how you've shown up over these six months?",
      "Each partner: What do you want the next six months to focus on?",
      "Both: Write each other a short acknowledgment — one paragraph — for six months of effort.",
      "Both: Read them aloud. Then do something to mark the occasion."
    ],
    reflection: "Half a year of choosing. That is not nothing. That is everything."
  },
  {
    id: 428, day: 145, program: 'infidelity-recovery',
    title: "Trusting Your Own Judgment Again",
    emoji: "🧭",
    tagline: "Address the betrayed partner's loss of trust in their own perceptions.",
    body: "One of the most devastating effects of betrayal is the loss of trust in one's own judgment — 'How did I not know? What else am I missing? Can I trust what I perceive?' Today the betrayed partner works on rebuilding trust in their own perceptions and instincts.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: In what ways have you stopped trusting your own judgment since the betrayal?",
      "Betrayed partner: Were there times your instincts were actually right — even if you dismissed them?",
      "Betrayed partner: What would rebuilding trust in your own perceptions look like?",
      "Betraying partner: How can you support your partner in trusting themselves again — without undermining or gaslighting?"
    ],
    reflection: "Trust in yourself is as important as trust in your partner. Don't neglect it."
  },
  {
    id: 429, day: 146, program: 'infidelity-recovery',
    title: "The Future Relationship Agreement",
    emoji: "📋",
    tagline: "Build a formal future relationship agreement.",
    body: "By now you have enough clarity about your needs, your non-negotiables, and your vision to build a formal future relationship agreement — the terms of the new relationship you are creating. Not a legal document. A shared living document of who you are to each other now.",
    duration: "45 min",
    prompts: [
      "Both: Review your non-negotiables, transparency agreement, and shared values from earlier in this program.",
      "Both: What needs updating? What still holds?",
      "Both: Write a one-page future relationship agreement: values / commitments / non-negotiables / renewal process.",
      "Both: Sign it. Put it somewhere you'll both see it."
    ],
    reflection: "A relationship built on explicit shared agreements is more resilient than one built on assumptions."
  },
  {
    id: 430, day: 147, program: 'infidelity-recovery',
    title: "Forgiving the Lie You Were Living",
    emoji: "🎭",
    tagline: "Address forgiveness for the false reality the affair created.",
    body: "During the affair, the betrayed partner was living a lie — not their lie, but a reality that was being constructed around them. They made decisions, felt feelings, built expectations based on information that was false. That stolen reality is its own specific wound. Today you address forgiving it.",
    duration: "40 min",
    prompts: [
      "Betrayed partner: What decisions did you make during the affair that you would have made differently if you'd known the truth?",
      "Betrayed partner: What feelings did you have that were built on false information?",
      "Betraying partner: Own the false reality you constructed. What did you actively do to maintain it?",
      "Betrayed partner: What would beginning to forgive the stolen reality require?"
    ],
    reflection: "You lived in a reality that wasn't real. That is a specific wound that deserves specific healing."
  },
  {
    id: 431, day: 148, program: 'infidelity-recovery',
    title: "Joy Without Guilt — Month Six",
    emoji: "🌈",
    tagline: "Experience joy without guilt as a sign of healing.",
    body: "At six months, joy without guilt should be more accessible than it was in month one. Not constant joy — but the capacity to have genuinely good moments without feeling that something is wrong because you're not suffering. Today you check and celebrate that capacity.",
    duration: "25 min",
    prompts: [
      "Each partner: Have you had genuinely joyful moments recently — without guilt attached?",
      "Each partner: If guilt still attaches to joy — what is it saying? Is that true?",
      "Both: Plan something genuinely joyful together for this week.",
      "Both: When you experience joy this week — let it be full. You are allowed."
    ],
    reflection: "Joy that grows back after grief is joy that knows its own value."
  },
  {
    id: 432, day: 149, program: 'infidelity-recovery',
    title: "The Accountability Upgrade",
    emoji: "⬆️",
    tagline: "Elevate accountability to a higher, more intrinsic level.",
    body: "Early accountability is often external — checks, agreements, transparency protocols. At six months in, accountability should be beginning to shift to something more intrinsic: the betraying partner holding themselves accountable because of who they want to be, not because of external monitoring. Today you assess that shift.",
    duration: "30 min",
    prompts: [
      "Betraying partner: Is your accountability currently more intrinsic (chosen) or extrinsic (required)?",
      "Betraying partner: What would fully intrinsic accountability look like — not because you're being watched, but because of who you want to be?",
      "Betrayed partner: Can you tell the difference? When does your partner's accountability feel genuinely chosen?",
      "Both: How can you move accountability from contract to character in the months ahead?"
    ],
    reflection: "Accountability that becomes character is the ultimate form. Work toward it."
  },
  {
    id: 433, day: 150, program: 'infidelity-recovery',
    title: "Day 150 — The Long Arc",
    emoji: "🌠",
    tagline: "Honor 150 days of healing work.",
    body: "One hundred and fifty days. Five months of daily, intentional, often agonizing, often beautiful work. Today you stop and see the full arc from Day 1 to here. It is a significant arc. You are a different couple than you were. Honor that.",
    duration: "40 min",
    prompts: [
      "Each partner: In one sentence — who were you as a couple on Day 1? Who are you now?",
      "Each partner: What is the most significant transformation you have personally undergone?",
      "Both: What has this journey asked of you that you didn't know you had to give?",
      "Both: Write a joint statement of where you are. Read it together."
    ],
    reflection: "One hundred and fifty days. You are not who you were. That is the whole point."
  },
  {
    id: 434, day: 151, program: 'infidelity-recovery',
    title: "Working Toward Forgiveness — Full Review",
    emoji: "🌿",
    tagline: "A comprehensive review of the forgiveness journey.",
    body: "At 150+ days, you are likely somewhere on the forgiveness journey — perhaps not at the destination, but moving. Today you do a comprehensive review: what has been forgiven, what is in process, and what still feels impossible.",
    duration: "45 min",
    prompts: [
      "Betrayed partner: Make a list of everything that has been forgiven, even partially. What's on it?",
      "Betrayed partner: What is still in process?",
      "Betrayed partner: What still feels impossible to forgive? What would change that?",
      "Both: Where has the forgiveness journey surprised you?"
    ],
    reflection: "Forgiveness is not an arrival. It is an ongoing practice of release. Keep practicing."
  },
  {
    id: 435, day: 152, program: 'infidelity-recovery',
    title: "The Compassion Practice",
    emoji: "💗",
    tagline: "Practice compassion for your partner — and for yourself.",
    body: "Compassion — not sympathy, not pity, but genuine, warm, clear-eyed care for a suffering person — is one of the most healing things a person can offer or receive. Today you practice it: for your partner, and equally for yourself.",
    duration: "30 min",
    prompts: [
      "Each partner: What does your partner need compassion for right now that they might not be asking for?",
      "Each partner: What do you need compassion for that you've been denying yourself?",
      "Both: Offer compassion to each other explicitly — not pity, but real care.",
      "Both: Offer yourself compassion. Say: 'I am going through something hard, and I am doing my best.' Mean it."
    ],
    reflection: "Compassion for yourself is not self-indulgence. It is the oxygen mask you must put on first."
  },
  {
    id: 436, day: 153, program: 'infidelity-recovery',
    title: "The Ongoing Choice",
    emoji: "🔁",
    tagline: "Affirm the ongoing daily choice to be in this relationship.",
    body: "Every day of staying in a relationship after betrayal is a choice. Not a passive continuation — a deliberate, repeated choosing. Today you make that choice explicitly, with full awareness, and name why you are making it.",
    duration: "25 min",
    prompts: [
      "Each partner: Why are you choosing this relationship today — not originally, not in the future, but today?",
      "Each partner: What specific things about your partner and this relationship make today's choice feel worth it?",
      "Both: Say your today-choice to each other out loud.",
      "Both: Make this a weekly practice — naming the choice and the reason."
    ],
    reflection: "A relationship is not something you stay in. It is something you choose, over and over. Keep choosing."
  },
  {
    id: 437, day: 154, program: 'infidelity-recovery',
    title: "Security Benchmarks",
    emoji: "📏",
    tagline: "Assess security using specific, measurable benchmarks.",
    body: "Security is sometimes hard to measure because it feels like a general atmosphere rather than a specific thing. Today you get specific: what are the concrete benchmarks of security in your relationship, and which have been met?",
    duration: "35 min",
    prompts: [
      "Betrayed partner: List 5 specific behaviors or conditions that would mean security to you.",
      "Betrayed partner: Which of those benchmarks are currently being met?",
      "Betraying partner: Which benchmarks do you know you're meeting? Which are you still working toward?",
      "Both: What is the next benchmark to work toward together?"
    ],
    reflection: "What gets measured gets tended to. Name your benchmarks and track them."
  },
  {
    id: 438, day: 155, program: 'infidelity-recovery',
    title: "Twenty-Five Weeks — Deep Work",
    emoji: "⛏️",
    tagline: "Go deep rather than wide at the twenty-five-week mark.",
    body: "Twenty-five weeks. By now the surface work has been done many times. What remains is depth — going into the places in yourself and in the relationship that you have been circling without fully entering. Today you name those places and choose to enter one.",
    duration: "35 min",
    prompts: [
      "Each partner: What is the one area of this healing journey where you have been going wide but not deep?",
      "Each partner: What would going deep into that area require of you?",
      "Both: Choose one deep area together. Go into it today.",
      "Both: After — what did you find that you didn't expect?"
    ],
    reflection: "Depth is where the real transformation lives. Go there."
  },
  {
    id: 439, day: 156, program: 'infidelity-recovery',
    title: "The New Intimacy",
    emoji: "🕯️",
    tagline: "Name and celebrate the new form of intimacy you've built.",
    body: "The intimacy you are building now is different from what you had before. It is more honest, more conscious, more earned. It may also be, in some ways, richer than what you had before — because it was built with full knowledge and deliberate choice. Today you name and honor that new intimacy.",
    duration: "30 min",
    prompts: [
      "Each partner: How would you describe the quality of your intimacy now — different from before?",
      "Each partner: What is more authentic about your connection now than it was before the betrayal?",
      "Both: What have you discovered about each other through this process that has deepened your intimacy?",
      "Both: Name the new intimacy. Give it a description that is uniquely yours."
    ],
    reflection: "Intimacy built through fire has a quality that pre-fire intimacy often lacks. Honor what you've built."
  },
  {
    id: 440, day: 157, program: 'infidelity-recovery',
    title: "Forgiveness and Reconciliation — Are They the Same?",
    emoji: "🤔",
    tagline: "Understand the distinction between forgiveness and reconciliation.",
    body: "Forgiveness and reconciliation are two separate things. Forgiveness is internal — releasing the person from the debt of the wound. Reconciliation is relational — rebuilding the actual relationship. You can have one without the other. Today you explore where you are on each path.",
    duration: "35 min",
    prompts: [
      "Each partner: Where are you on forgiveness — the internal release?",
      "Each partner: Where are you on reconciliation — the relational rebuilding?",
      "Both: How do these two paths relate in your specific situation?",
      "Both: Do you need full forgiveness before full reconciliation? Or can they proceed simultaneously?"
    ],
    reflection: "You do not have to forgive before you reconcile. But both need tending to."
  },
  {
    id: 441, day: 158, program: 'infidelity-recovery',
    title: "Letting Go of the Why",
    emoji: "🍃",
    tagline: "Practice releasing the need to fully understand why.",
    body: "For many betrayed partners, the 'why' becomes a preoccupation. If only they could fully understand why the affair happened, they could make sense of it and move on. But sometimes the 'why' is never fully available — and the obsession with it can become its own obstacle. Today you practice releasing the need for a complete explanation.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Have you received enough of a 'why' to move forward? Or is it still a preoccupation?",
      "Betrayed partner: What would you gain if you released the need for a complete explanation?",
      "Betraying partner: Is there anything left to say about the 'why' that you haven't yet said?",
      "Both: Practice saying: 'I may never fully understand why. I am choosing to heal anyway.'"
    ],
    reflection: "The 'why' may never be fully available. Healing does not require it."
  },
  {
    id: 442, day: 159, program: 'infidelity-recovery',
    title: "The Long-Term Security Picture",
    emoji: "🏔️",
    tagline: "Paint a clear picture of what long-term security looks like.",
    body: "Long-term security in a relationship after infidelity is not the same as the pre-betrayal assumption of safety. It is conscious, chosen, evidenced security. Today you paint a vivid, detailed picture of what that looks like for your relationship.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: Describe in detail what long-term security in this relationship looks like. Be specific.",
      "Betraying partner: What concrete behaviors, over the long term, would create that picture?",
      "Both: Is the picture you're both painting the same? Where are the gaps?",
      "Both: What is the most important thing to work toward in order to reach that security picture?"
    ],
    reflection: "A detailed, shared picture of security gives you both something concrete to build toward."
  },
  {
    id: 443, day: 160, program: 'infidelity-recovery',
    title: "The Kindness Practice",
    emoji: "🌷",
    tagline: "Deliberately practice daily kindness as a healing tool.",
    body: "After betrayal, relationships can become transactional — focused on the work of healing at the expense of simple warmth and kindness. Today you reintroduce deliberate, daily kindness — not as performance, but as evidence that you still care about each other's daily experience.",
    duration: "25 min",
    prompts: [
      "Each partner: Name one specific act of kindness your partner could do this week that would mean something to you.",
      "Each partner: Share that with your partner directly.",
      "Both: Do one act of kindness for each other today — chosen, not required.",
      "Both: Commit to one act of unprompted kindness per day this week."
    ],
    reflection: "Kindness is not in competition with honesty or hard work. It is what makes both sustainable."
  },
  {
    id: 444, day: 161, program: 'infidelity-recovery',
    title: "Coming Home to Each Other",
    emoji: "🏠",
    tagline: "Practice the feeling of coming home — to each other, to safety.",
    body: "One of the markers of genuine relational healing is the feeling of coming home — the felt sense that this person is where you belong, where you are safe, where you can be fully yourself. Today you explore whether any version of that feeling is returning.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Do you ever feel, in moments, like your partner is home for you again? Describe one such moment.",
      "Betraying partner: Do you feel like your partner is home for you? What does that feel like?",
      "Both: What does 'home' mean to you in the context of a relationship?",
      "Both: What would it take for this relationship to fully feel like home again?"
    ],
    reflection: "Home is not a place. It is a feeling of safety in another person's presence. Keep building it."
  },
  {
    id: 445, day: 162, program: 'infidelity-recovery',
    title: "Twenty-Seven Weeks — Toward Full Forgiveness",
    emoji: "🌅",
    tagline: "Assess how close you are to full, genuine forgiveness.",
    body: "Twenty-seven weeks. For many couples, this is the zone where real forgiveness — not performed, not pressured — begins to become genuinely available. Today you assess honestly how close you are to that possibility.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: On a scale of 1–10, how close do you feel to genuine, full forgiveness?",
      "Betrayed partner: What would move you one point higher on that scale?",
      "Betraying partner: What are you doing — and what more could you do — to make full forgiveness more possible?",
      "Both: What does full forgiveness feel like as a possibility — close, distant, or somewhere between?"
    ],
    reflection: "Full forgiveness may be closer than it feels. Or it may be further. Either way — keep walking."
  },
  {
    id: 446, day: 163, program: 'infidelity-recovery',
    title: "The Release — Practicing Full Forgiveness",
    emoji: "🕊️",
    tagline: "Practice the act of full forgiveness if it is available.",
    body: "If genuine forgiveness has arrived — in whole or significant part — today you practice the act of releasing it. Not performing it. Not saying it before it's real. But if it is real, even partially, today you let it become explicit. If it is not yet real, today you practice moving toward it.",
    duration: "45 min",
    prompts: [
      "Betrayed partner: Is any form of genuine forgiveness available to you today — real, not performed?",
      "Betrayed partner: If yes — say it clearly and directly to your partner. Take as long as you need.",
      "Betraying partner: Receive it. Do not dismiss it, minimize it, or rush to prove you deserve it. Just receive it.",
      "Both: After — what has changed in the space between you?"
    ],
    reflection: "If forgiveness is real and available — let it be spoken. Spoken forgiveness changes the room."
  },
  {
    id: 447, day: 164, program: 'infidelity-recovery',
    title: "Forgiven But Not Forgotten",
    emoji: "🧠",
    tagline: "Understand that forgiveness does not require forgetting.",
    body: "The phrase 'forgive and forget' is one of the most harmful pieces of conventional wisdom about healing. You do not have to forget. The betrayal is part of your story. It is part of what you've overcome. What changes with forgiveness is not memory but meaning — the wound no longer defines the relationship.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What does it mean to you that forgiveness does not require forgetting?",
      "Both: What do you want to remember about this journey — not as a wound, but as evidence of your resilience?",
      "Both: How has the meaning of the betrayal changed from what it was on Day 1?",
      "Both: What do you want the memory of this period to ultimately mean for your relationship?"
    ],
    reflection: "What you remember can become your power rather than your wound. Let the meaning shift."
  },
  {
    id: 448, day: 165, program: 'infidelity-recovery',
    title: "The Post-Forgiveness Relationship",
    emoji: "🌱",
    tagline: "Define what the relationship looks like on the other side of forgiveness.",
    body: "Forgiveness does not end the work. But it does change its character. On the other side of forgiveness — even partial forgiveness — the relationship has a different texture. Today you explore what that texture is and how to live into it.",
    duration: "35 min",
    prompts: [
      "Betrayed partner: What, if anything, has changed in how you experience the relationship since forgiveness began?",
      "Both: What aspects of the relationship feel different — lighter, more open, more connected?",
      "Both: What work remains, even in the post-forgiveness phase?",
      "Both: What does the relationship look like from here — looking forward, not back?"
    ],
    reflection: "Forgiveness is not the end of the story. It is the opening of a new chapter."
  },
  {
    id: 449, day: 166, program: 'infidelity-recovery',
    title: "The New Security — Not Assumed, but Known",
    emoji: "🔒",
    tagline: "Experience security that is known, not assumed.",
    body: "The security you have now — if you have built it — is fundamentally different from the security you had before. Before, you assumed safety. Now, you have evidence of it. Known security, earned through effort and honesty, is more durable than assumed security that was never tested.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: What evidence do you now have of security that you didn't have before?",
      "Betrayed partner: How does known security feel different from the assumed security you had before?",
      "Betraying partner: What is the most solid evidence you have given your partner of your changed behavior?",
      "Both: What will you do to maintain and strengthen this security going forward?"
    ],
    reflection: "You have built something more durable than what was broken. Let that be acknowledged."
  },
  {
    id: 450, day: 167, program: 'infidelity-recovery',
    title: "Long-Term Accountability — The Character Check",
    emoji: "🧭",
    tagline: "Ensure accountability has become character, not just compliance.",
    body: "At nearly six months of sustained accountability, the question shifts from 'are you doing it?' to 'who have you become?' Accountability as character means the betraying partner doesn't need to be monitored — they have become someone who is naturally transparent and honest. Today you assess that character shift.",
    duration: "35 min",
    prompts: [
      "Betraying partner: Have you become more honest as a person — beyond the relationship? In what ways?",
      "Betraying partner: How has the work of accountability changed you beyond this relationship?",
      "Betrayed partner: Do you see genuine character change in your partner — not just behavioral compliance?",
      "Both: What does the betraying partner need to continue to develop to become the person they want to be?"
    ],
    reflection: "The final test of accountability is not whether you kept the rules. It is whether you no longer need them."
  },
  {
    id: 451, day: 168, program: 'infidelity-recovery',
    title: "Twenty-Eight Weeks — The New Normal Is Real",
    emoji: "🌄",
    tagline: "Acknowledge that the new normal is now genuinely established.",
    body: "Twenty-eight weeks. By now, the new normal is not a plan or an aspiration — it is the actual texture of your daily life. The rituals, the communication, the trust practices, the intimacy. Today you acknowledge that you have actually built something new.",
    duration: "30 min",
    prompts: [
      "Each partner: What is the most important element of your new normal?",
      "Each partner: What about the new normal are you most grateful for?",
      "Both: What in the new normal still needs refining?",
      "Both: Name three things you will protect and maintain about the new normal, no matter what."
    ],
    reflection: "The new normal is not what you lost. It is what you built. Protect it."
  },
  {
    id: 452, day: 169, program: 'infidelity-recovery',
    title: "The Relationship as a Third Thing",
    emoji: "🌐",
    tagline: "Tend to the relationship as an entity distinct from both of you.",
    body: "In strong, long-term relationships, partners often talk about 'the relationship' as a third thing — not you, not me, but the thing we've built between us. Today you tend to that third thing deliberately: what does it need, what has it become, and how do you care for it going forward?",
    duration: "30 min",
    prompts: [
      "Both: If your relationship were a living thing — a plant, an animal, a building — what would it be right now?",
      "Both: What does that living thing need to thrive?",
      "Both: What has it survived that has made it stronger?",
      "Both: Write a brief description of the relationship as a third entity. What is it?"
    ],
    reflection: "The relationship is more than the sum of its two people. Tend to it as its own living thing."
  },
  {
    id: 453, day: 170, program: 'infidelity-recovery',
    title: "What You Know About Love Now",
    emoji: "❤️‍🔥",
    tagline: "Share the deepest things you know about love after going through this.",
    body: "You have been through one of the most intense relational experiences a couple can endure. On the other side of it, you know things about love that most people don't. Today you share those things — with each other, and for yourselves.",
    duration: "35 min",
    prompts: [
      "Each partner: What is the most important thing you've learned about love through this experience?",
      "Each partner: What did you believe about love before that you no longer believe?",
      "Each partner: What do you know about love now that you couldn't have known otherwise?",
      "Both: Share your answers. Let what you know be spoken."
    ],
    reflection: "Wisdom about love earned in difficulty is wisdom worth passing on."
  },
  {
    id: 454, day: 171, program: 'infidelity-recovery',
    title: "The Ongoing Work — No End Date",
    emoji: "♾️",
    tagline: "Accept that healing is ongoing — and that ongoing is okay.",
    body: "There is no finish line where healing is complete and all monitoring ends. Healthy relationships require ongoing attention, care, and intentional maintenance forever — not just after betrayal. Today you accept and embrace that the work is ongoing, and that is not a failure. It is what love looks like maintained.",
    duration: "30 min",
    prompts: [
      "Each partner: How do you feel about the idea that the work is ongoing — no finish line?",
      "Each partner: What ongoing practices are you committed to maintaining indefinitely?",
      "Both: What does 'maintenance mode' look like for your relationship going forward?",
      "Both: How will you make sure the ongoing work stays alive without becoming burden?"
    ],
    reflection: "A maintained relationship is not a broken relationship still being fixed. It is a relationship being loved."
  },
  {
    id: 455, day: 172, program: 'infidelity-recovery',
    title: "Gratitude for the Hard Road",
    emoji: "🙏",
    tagline: "Express full gratitude for the hard road and what it has produced.",
    body: "You did not choose this road. But you have walked it — both of you, for a long time, with everything it required. Today you express gratitude for the road itself: for what it cost, for who it made you, for what you built on it together.",
    duration: "35 min",
    prompts: [
      "Each partner: What are you most grateful for about this hard road?",
      "Each partner: What has it produced in you that you would not want to give back?",
      "Both: Write each other a final gratitude letter for the journey.",
      "Both: Read your letters to each other. Let the moment be what it is."
    ],
    reflection: "Hard roads produce things smooth roads cannot. Honor the road."
  },
  {
    id: 456, day: 173, program: 'infidelity-recovery',
    title: "Thirty Weeks — The New Foundation Is Laid",
    emoji: "🏛️",
    tagline: "Mark thirty weeks with the recognition that a foundation has been laid.",
    body: "Thirty weeks. The foundation is laid. Not the house — the foundation. The house is still being built. But beneath you, there is something solid: real, tested, chosen. Today you stand on it and recognize what it is.",
    duration: "30 min",
    prompts: [
      "Each partner: What is the foundation? Name the elements — specifically.",
      "Each partner: When you stand on this foundation, how does it feel?",
      "Both: What does the house you're building on this foundation look like?",
      "Both: Name the most important architectural element still to build."
    ],
    reflection: "You built the foundation under your own feet, while standing on unstable ground. That is extraordinary."
  },
  {
    id: 457, day: 174, program: 'infidelity-recovery',
    title: "Security as a Way of Being",
    emoji: "🌳",
    tagline: "Experience security as a stable way of being, not a temporary state.",
    body: "Security in a relationship can evolve from an occasional feeling to a stable way of being — a kind of relational ground tone that is always present, even in difficulty. Today you explore whether that ground tone has begun to establish itself.",
    duration: "30 min",
    prompts: [
      "Betrayed partner: Is security in this relationship beginning to feel like a stable state rather than occasional moments?",
      "Betrayed partner: What has created that stability?",
      "Betraying partner: What is your most consistent contribution to your partner's felt security?",
      "Both: How do you maintain this security as a way of being going forward?"
    ],
    reflection: "Security as a way of being is the destination. You may be arriving."
  },
  {
    id: 458, day: 175, program: 'infidelity-recovery',
    title: "The Post-Betrayal Identity",
    emoji: "🦅",
    tagline: "Claim a new identity forged through the healing journey.",
    body: "You are not who you were before this began. The betrayal, the grief, the work, the growth — all of it has forged a new version of each of you. Today you name and claim those new identities — not despite what you've been through, but because of it.",
    duration: "35 min",
    prompts: [
      "Each partner: Who are you now — in this relationship and in your own life — that you couldn't have been before all of this?",
      "Each partner: What qualities have you developed through this that you are keeping?",
      "Both: Share your new identities with each other.",
      "Both: Affirm each other's growth. Name what you see."
    ],
    reflection: "You have been forged. Own who you've become."
  },
  {
    id: 459, day: 176, program: 'infidelity-recovery',
    title: "The Relationship You've Earned",
    emoji: "🏆",
    tagline: "Acknowledge that this relationship has been earned.",
    body: "Most relationships are built on assumption and hope. This one has been tested, broken, and rebuilt — deliberately, painfully, honestly. It has been earned in a way that few relationships ever are. Today you name that and let it mean something.",
    duration: "30 min",
    prompts: [
      "Each partner: What have you earned in this relationship that you couldn't have had otherwise?",
      "Both: What makes this relationship more honest than it was before?",
      "Both: What makes it more resilient?",
      "Both: What makes it more yours — more genuinely yours — than it was?"
    ],
    reflection: "An earned relationship carries a weight and a richness that a naive one cannot. You have earned this."
  },
  {
    id: 460, day: 177, program: 'infidelity-recovery',
    title: "The Gifts of the Dark Season",
    emoji: "🌑",
    tagline: "Name the gifts that came only from the darkness.",
    body: "There are things the dark season of betrayal and healing gave you that the light could not have. Depth. Honesty. Tested love. Knowledge of each other's real character. A more complete understanding of yourselves. Today you name those gifts — not to be grateful for the betrayal, but to be grateful for who you became despite it.",
    duration: "30 min",
    prompts: [
      "Each partner: What gift came to you from the dark season that the light could not have given you?",
      "Each partner: What do you know about yourself now that you couldn't have known otherwise?",
      "Both: Share your answers.",
      "Both: Let the gifts be real. Don't minimize them to avoid seeming grateful for the pain."
    ],
    reflection: "The gifts of the dark season are real. You are allowed to receive them."
  },
  {
    id: 461, day: 178, program: 'infidelity-recovery',
    title: "The Relationship at Its Best",
    emoji: "✨",
    tagline: "Describe and celebrate the relationship at its current best.",
    body: "You are near the end of this 180-day intensive program. Today you describe the relationship at its current best — not its ideal, not its worst, but its actual best: the moments and qualities that show what you've built.",
    duration: "35 min",
    prompts: [
      "Each partner: Describe a recent moment when the relationship was at its best. What made it so?",
      "Each partner: What is the defining quality of this relationship at its best?",
      "Both: Compare your descriptions. What do you both see?",
      "Both: What will you do to make those best moments more frequent?"
    ],
    reflection: "The relationship at its best is a preview of what it can become consistently."
  },
  {
    id: 462, day: 179, program: 'infidelity-recovery',
    title: "The Eve of 180 — A Night to Remember",
    emoji: "🌙",
    tagline: "Mark the night before the final day with full presence.",
    body: "Tomorrow is Day 180. Tonight you are here — together, having done something that many couples attempt and not all survive. Tonight you don't do work. Tonight you be together. Fully present. Whatever that looks like for you.",
    duration: "45 min",
    prompts: [
      "Both: Spend this time together — not doing healing work, but being with each other.",
      "Both: Do something that represents who you are as a couple now — a ritual, a meal, a walk, a conversation.",
      "Both: Let yourself feel, fully, what it means to be here — on the eve of 180 days.",
      "Both: Say one true thing to each other before the night is over."
    ],
    reflection: "One hundred and seventy-nine days have led to this night. Be here for it."
  },
  {
    id: 463, day: 180, program: 'infidelity-recovery',
    title: "Day 180 — What You Have Become",
    emoji: "🌅",
    tagline: "Close 180 days with the full recognition of who you have become.",
    body: "One hundred and eighty days. Six months of intentional, agonizing, courageous, honest, daily work. You are not healed — healing is a long arc, and you are still on it. But you are fundamentally different from the people who started this journey. The betrayal is part of your story. So is this: the choosing, the showing up, the refusing to let the wound be the last word. Today you name who you have become — individually and together — and you step into the next chapter with everything you have built.",
    duration: "75 min",
    prompts: [
      "Each partner: Write the most honest, complete statement you can about who you are now — as a person, as a partner, and as someone who has healed.",
      "Each partner: What is your commitment to this person and this relationship for the next 180 days? For the next year? For the long arc?",
      "Both: Read your statements to each other. Take as long as you need. Do not rush this.",
      "Both: Choose one final act — a ritual, a symbol, a declaration — to close this chapter. Make it yours. Make it real."
    ],
    reflection: "The wound was real. The betrayal was real. The grief was real. And so is this: you are still here, together, having chosen each other through the hardest season of your lives. Whatever comes next, you did not quit. You did not let the worst moment define the whole story. Day 180 is not an ending. It is the first day of the relationship you spent 180 days building. Go live in it."
  },
  {
    id: 464, day: 8, program: 'marriage-strengthening',
    title: "The Morning You Choose",
    emoji: "🌅",
    tagline: "Start each day with a conscious, deliberate choice to love well.",
    body: "Great marriages are not built by grand gestures alone — they are built in the ordinary mornings when you look at your partner and choose them again. Today you establish a morning ritual that signals: you are seen, you are chosen, you matter. It does not need to be long. It needs to be real. A moment of genuine presence before the day pulls you in its direction sets the tone for everything that follows.",
    duration: "20 min",
    prompts: [
      "What does your current morning look like with your partner — is there a moment of real connection, or does the day begin in parallel?",
      "What would a 2-minute morning ritual look like that feels true to who you both are — a phrase, a touch, a look, a question?",
      "What is one thing your partner could say or do each morning that would make you feel deeply seen before 9am?",
      "Design your ritual together. Write it down. Try it tomorrow and every morning this week."
    ],
    reflection: "The way you begin a day together quietly shapes the way you experience each other all day long."
  },
  {
    id: 465, day: 9, program: 'marriage-strengthening',
    title: "Love Language Inventory",
    emoji: "💬",
    tagline: "Know with precision how your partner feels most loved — and act on it.",
    body: "Many couples assume they know each other's love languages, but assumption is where missed connection hides. Today you go deeper than a quiz result. You explore the specific, living, breathing expressions of love that make your partner feel genuinely cherished — not the category, but the texture. Knowing is not enough. Knowing and doing is the practice.",
    duration: "30 min",
    prompts: [
      "Each partner: Name the top 2 ways you feel most loved. Be specific — not just 'words of affirmation,' but which words, when, from whom, in what tone?",
      "Each partner: What is one thing your partner does that makes you feel deeply loved without them even realizing it?",
      "Each partner: What is one thing you wish your partner did more of — not as a complaint, but as an honest longing?",
      "Together: Commit to one intentional act of love this week in your partner's primary language. Name it out loud."
    ],
    reflection: "Loving your partner in the language they actually speak is one of the highest forms of respect in a marriage."
  },
  {
    id: 466, day: 10, program: 'marriage-strengthening',
    title: "The Bid and the Answer",
    emoji: "🤝",
    tagline: "Learn to see every small bid for connection — and turn toward it.",
    body: "Research on lasting marriages reveals a profound truth: couples who thrive are not the ones who never fight — they are the ones who turn toward each other's small bids for connection. A bid can be a glance, a comment, a joke, a sigh. How you respond in those micro-moments is quietly building or eroding your bond every single day. Today you get intentional about bidding and answering.",
    duration: "25 min",
    prompts: [
      "Think of a recent moment when your partner made a small bid for your attention. How did you respond — and how did that feel to each of you?",
      "What are 3 ways your partner typically bids for connection that you might sometimes miss or dismiss unintentionally?",
      "What are 3 ways you bid for connection? Does your partner know these are bids, or do they look like something else?",
      "Practice today: every time your partner makes a bid, turn toward it fully — even for 10 seconds. Notice what shifts."
    ],
    reflection: "Every bid turned toward is a brick in the foundation. Every bid turned away is a chip. Choose your bricks."
  },
  {
    id: 467, day: 11, program: 'marriage-strengthening',
    title: "Gratitude That Lands",
    emoji: "🙏",
    tagline: "Express gratitude so specifically that your partner feels genuinely seen.",
    body: "Generic gratitude is kind. Specific gratitude is transformative. Telling your partner you appreciate them is good; telling them exactly what they did, why it mattered, and how it made you feel is the kind of recognition that changes how a person sees themselves in the relationship. Today you practice gratitude that lands — deep, specific, true.",
    duration: "20 min",
    prompts: [
      "Name 5 things your partner has done in the last 7 days — not big things, the small invisible things — that made your life better.",
      "For one of those 5, write out the full gratitude: what they did, why it mattered, and how it made you feel.",
      "Share that full gratitude with your partner today. Do not rush it. Let them receive it.",
      "Ask your partner: is there a way I express gratitude that lands best for you, or something I could do differently?"
    ],
    reflection: "The partner who feels truly seen does not need to look elsewhere for recognition."
  },
  {
    id: 468, day: 12, program: 'marriage-strengthening',
    title: "Who Are You Now?",
    emoji: "🔍",
    tagline: "Stay genuinely curious about who your partner is becoming.",
    body: "One of the quiet dangers in long-term love is assuming you already know everything about your partner. But people evolve. Dreams shift. Fears change. New passions emerge. The partner who stays curious — who keeps asking, who keeps discovering — is the one who stays close. Today you ask questions you may have never asked, or have not asked in years.",
    duration: "30 min",
    prompts: [
      "What is something your partner is genuinely excited about right now that you want to understand better?",
      "Ask your partner: 'What is something about who you are now that you feel I might not fully see yet?'",
      "Ask your partner: 'What is a dream or desire you have that we have never talked about seriously?'",
      "What did you learn today that surprised you — and what does it make you want to explore together?"
    ],
    reflection: "Staying curious about your partner is an act of love that never goes out of style."
  },
  {
    id: 469, day: 13, program: 'marriage-strengthening',
    title: "The Evening Landing",
    emoji: "🌙",
    tagline: "Build an evening ritual that brings you back to each other after the day.",
    body: "Just as a morning ritual sets the tone, an evening ritual creates a landing — a transition from the noise of the world back into the warmth of your partnership. Many couples spend their evenings physically present but emotionally elsewhere. Tonight you design something intentional, even small, that helps you both arrive back to each other at the end of the day.",
    duration: "20 min",
    prompts: [
      "What does your current evening routine look like together — is there a moment of real decompression and connection, or does the day just end?",
      "What would a 5-minute evening ritual look like that helps you both decompress and re-enter the relationship — a shared question, a walk, a no-screens rule?",
      "What is one thing that would help you transition from 'work brain' or 'parent brain' back to 'partner brain' at the end of the day?",
      "Design your evening ritual together and try it every night this week. Adjust as needed."
    ],
    reflection: "The couple that lands softly together at the end of each day builds something most couples only dream about."
  },
  {
    id: 470, day: 14, program: 'marriage-strengthening',
    title: "Celebrating the Small Wins",
    emoji: "🎉",
    tagline: "Learn to celebrate each other's small victories with genuine enthusiasm.",
    body: "Research consistently shows that how a partner responds to good news matters as much as how they respond to bad news. Couples who thrive are those who celebrate each other's wins — even the quiet, everyday ones. A promotion is obvious. The courage it took to make a difficult call, finish a hard project, or navigate a tough conversation? That deserves celebrating too. Today you build the habit.",
    duration: "25 min",
    prompts: [
      "Name a recent win — personal or shared — that did not get the recognition it deserved. How did that feel?",
      "What is a win your partner has had this week, even a small one, that you have not fully celebrated yet?",
      "How does your partner most like to be celebrated — privately, verbally, with quality time, with a gesture?",
      "Celebrate that win together today. Make it real. Do not save it for later."
    ],
    reflection: "The partner who celebrates your wins becomes the partner you cannot wait to share every win with."
  },
  {
    id: 471, day: 15, program: 'marriage-strengthening',
    title: "The Appreciation Ritual",
    emoji: "✨",
    tagline: "Build a daily practice of naming what you love about your partner.",
    body: "Appreciation, when practiced daily, does not become mundane — it becomes armor. The couple with an active appreciation practice has a reserve of goodwill that protects the relationship during conflict, stress, and hardship. Today you formalize appreciation — not as a one-time exercise, but as a standing practice you will carry forward.",
    duration: "20 min",
    prompts: [
      "Name 3 qualities in your partner that you genuinely admire. Not what they do — who they are.",
      "When was the last time you told your partner one of these things directly and explicitly? How did they receive it?",
      "Design an appreciation practice: when will you do it, how often, in what form? Morning text, evening share, written note — what fits your life?",
      "Start today. Share one real appreciation with your partner and let them fully receive it before responding."
    ],
    reflection: "The relationship where appreciation flows freely is the relationship where love has room to grow."
  },
  {
    id: 472, day: 16, program: 'marriage-strengthening',
    title: "Deep Knowing: Their Inner World",
    emoji: "🧠",
    tagline: "Map your partner's inner world with the care of someone who wants to understand.",
    body: "Knowing your partner's surface preferences is one level of intimacy. Knowing their fears, their deep longings, their current sources of stress and joy, their dreams for the next decade — that is the deeper knowing that makes a marriage feel like home. Today you explore each other's inner world with the attention it deserves.",
    duration: "35 min",
    prompts: [
      "Ask your partner: 'What is the biggest source of stress in your life right now that I might not fully understand?'",
      "Ask your partner: 'What is something you are quietly hoping for — for yourself or for us — that you have not said out loud recently?'",
      "Ask your partner: 'What is something you fear that you rarely talk about?'",
      "What did you learn today? What do you want to do with what you learned?"
    ],
    reflection: "The marriage where both partners feel deeply known is the marriage built on real ground."
  },
  {
    id: 473, day: 17, program: 'marriage-strengthening',
    title: "The Stories You Tell Together",
    emoji: "📖",
    tagline: "Honor the shared narrative of your marriage — it is one of your greatest assets.",
    body: "Every great marriage has a story. The way you narrate your history together — how you met, how you chose each other, how you have navigated hard seasons — shapes how you see your relationship now. Couples who tell their story with pride, humor, and warmth are more resilient during difficult times. Today you revisit and celebrate the story only you two share.",
    duration: "30 min",
    prompts: [
      "Tell each other the story of how you met from your own perspective — what you noticed, what you felt, what you thought in those first moments.",
      "What is a moment in your relationship that, when you think about it now, makes you feel genuinely proud of who you both were?",
      "What is the funniest or most absurd thing that has happened to you as a couple? Tell it in full.",
      "If you were writing the story of your marriage for someone else to read, what would the title of this current chapter be?"
    ],
    reflection: "The couple who knows their own story — and tells it well — is the couple who knows what they are protecting."
  },
  {
    id: 474, day: 18, program: 'marriage-strengthening',
    title: "Physical Presence, Full Presence",
    emoji: "🤗",
    tagline: "Reclaim the power of being fully, physically present with your partner.",
    body: "Touch, proximity, and physical attentiveness are languages of love that do not require words. Many couples are physically present in the same room but energetically miles apart. Today is about reclaiming the body's role in connection — not just intimacy in the bedroom, but the daily touch, the casual closeness, the hand that reaches across the table. Presence is a gift you give with your whole self.",
    duration: "25 min",
    prompts: [
      "How would you describe your current level of physical closeness outside of intimate moments — holding hands, sitting close, casual touch?",
      "What form of physical affection makes you feel most connected to your partner — and does your partner know this?",
      "Is there a way you have pulled back from physical closeness over time? What do you think drove that?",
      "Choose one physical connection practice for this week: hold hands during a walk, sit closer on the couch, give a real hug every evening. Name it and do it."
    ],
    reflection: "The body remembers belonging. Small, consistent physical connection tells your nervous system: you are safe here."
  },
  {
    id: 475, day: 19, program: 'marriage-strengthening',
    title: "What Lights You Up",
    emoji: "💡",
    tagline: "Actively support what brings your partner alive — not just what keeps life running.",
    body: "A thriving marriage is one where both partners feel that their aliveness is welcomed, not just their usefulness. When your partner has a passion, a project, a dream that lights them up — your response to that thing matters enormously. Today you explore what lights each of you up, and you make a commitment to actively nurture that spark in each other.",
    duration: "30 min",
    prompts: [
      "What is something that makes you genuinely, deeply excited right now — in life, in work, in creative pursuit, in any arena?",
      "How does your partner respond when you talk about the things that light you up? Do you feel encouraged, seen, energized?",
      "Is there a passion or pursuit your partner has that you could support more actively or enthusiastically?",
      "Name one concrete thing you will do this week to champion something that lights your partner up."
    ],
    reflection: "The partner who celebrates your aliveness becomes the partner whose presence makes you more alive."
  },
  {
    id: 476, day: 20, program: 'marriage-strengthening',
    title: "The Stress You Carry",
    emoji: "⚖️",
    tagline: "Understand each other's stressors so you can carry them together rather than apart.",
    body: "Unacknowledged stress is one of the great silent separators in marriage. When you are carrying something heavy and your partner does not know it — or knows it but does not engage with it — you begin to feel alone in the marriage. Today you name what you are each carrying and practice the art of bearing it together.",
    duration: "30 min",
    prompts: [
      "What is the heaviest thing you are carrying right now — work, family, health, finance, internal struggle?",
      "Does your partner have a full picture of what this weight feels like for you? What do they not know?",
      "What do you most need from your partner when you are under stress — presence, space, solutions, reassurance, distraction?",
      "Ask your partner: 'When you are stressed, what is the most helpful thing I can do — and what makes it worse?'"
    ],
    reflection: "Stress shared is stress halved. Stress hidden is stress that quietly builds walls between you."
  },
  {
    id: 477, day: 21, program: 'marriage-strengthening',
    title: "Three Weeks In — The Inventory",
    emoji: "📋",
    tagline: "Pause, review, and appreciate what three weeks of intentional practice has already built.",
    body: "You have been at this for three weeks — a genuine investment in the strength of your marriage. Before moving forward, it is worth pausing to take stock. What has shifted? What practices have taken root? What have you discovered about your partner and yourself? Progress that is not noticed tends to fade. Progress that is named and celebrated tends to compound.",
    duration: "30 min",
    prompts: [
      "What is the most meaningful thing you have learned about your partner in the last 21 days?",
      "What is one practice from the past three weeks that has already made a visible difference in how you connect?",
      "What is something you have done for your partner in the last three weeks that you are proud of?",
      "What is one intention you want to carry forward with more commitment into the next phase of this work?"
    ],
    reflection: "Three weeks of choosing each other intentionally is not a small thing. Name it, honor it, and let it carry you forward."
  },
  {
    id: 478, day: 22, program: 'marriage-strengthening',
    title: "The Vision You Share",
    emoji: "🔭",
    tagline: "Build a shared vision for your marriage that pulls you both toward something great.",
    body: "Couples who thrive do not just manage the present — they are building toward something together. A shared vision gives your marriage direction, meaning, and a reason to keep choosing each other even when it is hard. Today you invest time in articulating what you are building — not just the life logistics, but the quality of love, partnership, and presence you are both committed to.",
    duration: "35 min",
    prompts: [
      "Each partner: Describe your dream marriage — not the fantasy version, but the real, lived, everyday version of the relationship you want to inhabit.",
      "Where do your visions overlap? Where do they differ — and is there room to hold both?",
      "What is one word or phrase that captures the quality of marriage you are both working toward?",
      "Write a one-sentence vision statement for your marriage together. Something true, elevated, and yours."
    ],
    reflection: "A shared vision is not a contract. It is a compass — and the couple with a compass rarely stays lost for long."
  },
  {
    id: 479, day: 23, program: 'marriage-strengthening',
    title: "Friendship First",
    emoji: "👫",
    tagline: "Tend to the friendship at the core of your marriage with the same care as the romance.",
    body: "The research is clear: couples who describe their partner as their best friend report the highest levels of long-term satisfaction. The romantic dimension of marriage gets a lot of attention, but the friendship — the enjoyment of each other's company, the laughter, the ease, the genuine liking — is the foundation everything else is built on. Today you invest in the friendship.",
    duration: "25 min",
    prompts: [
      "What do you genuinely enjoy about spending time with your partner — not as a spouse, but as a person?",
      "When was the last time you laughed together until it was uncontrollable? What was it?",
      "What is something you and your partner would both enjoy doing together that is not a 'date' — just two friends hanging out?",
      "Schedule something for this week that is pure enjoyment, no agenda, no relationship work — just being friends."
    ],
    reflection: "The couple who is also genuinely good friends has a resource that romance alone cannot provide."
  },
  {
    id: 480, day: 24, program: 'marriage-strengthening',
    title: "What I Admire in You",
    emoji: "🌟",
    tagline: "Name what you truly admire in your partner and let them hear it fully.",
    body: "Admiration is one of the most powerful forces in a thriving marriage. It is deeper than gratitude, more enduring than attraction, and more stabilizing than any single act of love. When you genuinely admire your partner — their character, their courage, their mind, their way of moving through the world — and you tell them, you build something in them that lasts. Today you tell them.",
    duration: "25 min",
    prompts: [
      "Name 3 qualities in your partner's character that you genuinely, deeply admire.",
      "Name one thing you have watched your partner do in the last year that took real courage or strength.",
      "Is there a dimension of your partner — their intelligence, their humor, their creativity, their values — that you do not voice admiration for enough?",
      "Write a short admiration letter to your partner — 5 to 8 sentences — and read it to them today."
    ],
    reflection: "The partner who knows they are admired carries themselves differently — and so does the marriage."
  },
  {
    id: 481, day: 25, program: 'marriage-strengthening',
    title: "Your Individual Flourishing",
    emoji: "🌱",
    tagline: "Support each other's individual growth — a thriving partner makes a thriving marriage.",
    body: "A strong marriage is not made by two people who disappear into each other — it is made by two people who become more fully themselves and bring that fullness to the partnership. When you actively invest in your partner's individual flourishing — their goals, their growth, their becoming — you are investing in the marriage. Today you explore how you can be each other's greatest champion.",
    duration: "30 min",
    prompts: [
      "What is something you personally want to grow in, become, or achieve in the next 12 months?",
      "Does your partner fully understand this aspiration? Do they know how to support it?",
      "Is there something your partner is working toward that you could support more actively or meaningfully?",
      "Name one concrete thing you will do in the next 30 days to champion your partner's individual growth."
    ],
    reflection: "The most romantic thing you can do for your marriage is help your partner become who they are meant to be."
  },
  {
    id: 482, day: 26, program: 'marriage-strengthening',
    title: "The Sacred No",
    emoji: "🛡️",
    tagline: "Protect your marriage by choosing what you will not let in.",
    body: "A strong marriage requires not only additions — practices, rituals, conversations — but also conscious exclusions. What will you not let drain your energy, your time, your presence? The couples who protect their marriage intentionally — from overcommitment, from chronic negativity, from the slow erosion of devices and distraction — are the ones who still have something worth protecting. Today you build your fence.",
    duration: "25 min",
    prompts: [
      "What is one thing in your current life that consistently pulls you away from your partner or drains the energy you bring to the marriage?",
      "Are there any habits, obligations, or patterns that you both agree are working against the quality of your connection?",
      "What is one thing you are willing to say no to — or say less to — in order to protect the quality of your marriage?",
      "Together, name one boundary you want to set or reinforce as a couple to guard your time and energy."
    ],
    reflection: "What you protect grows. What you leave unguarded gets slowly taken."
  },
  {
    id: 483, day: 27, program: 'marriage-strengthening',
    title: "How You Fight",
    emoji: "🥊",
    tagline: "Understand your conflict patterns before they understand you.",
    body: "Every couple has a conflict pattern — the way arguments typically start, escalate, stall, or resolve. Most couples have never explicitly studied their own pattern. When you can see it clearly, you can intervene early, exit harmful cycles, and return to each other faster. Today is not about having a fight — it is about understanding how you fight so you can fight cleaner.",
    duration: "30 min",
    prompts: [
      "What does a typical argument look like for the two of you — what triggers it, how does it escalate, where does it usually go?",
      "What is something you tend to do during conflict that you know does not help — withdraw, escalate, deflect, go silent?",
      "What does your partner need from you when a disagreement starts — and do you currently give that?",
      "Design a 'reset signal' together — a word, phrase, or gesture either of you can use to pause a conflict before it goes somewhere harmful."
    ],
    reflection: "The couple who understands how they fight can change how they fight. And that changes everything."
  },
  {
    id: 484, day: 28, program: 'marriage-strengthening',
    title: "Money, Values, and Alignment",
    emoji: "💰",
    tagline: "Get aligned on your financial values so money becomes a tool, not a tension.",
    body: "Money is one of the most common sources of conflict in marriage — not because of dollars, but because of values, fears, and differing beliefs about security, freedom, and the future. Today you go beneath the budget and into the beliefs. When you understand why your partner relates to money the way they do, you stop fighting about money and start understanding each other.",
    duration: "35 min",
    prompts: [
      "What did money mean in the home you grew up in — was it a source of security, stress, conflict, or freedom?",
      "What does financial security mean to you personally — what number, what state, what feeling?",
      "Where do you and your partner align on money values — and where do you genuinely differ?",
      "What is one financial conversation you have been avoiding that would actually bring you closer if you had it honestly?"
    ],
    reflection: "Couples who can talk about money openly have removed one of the most common landmines from their path."
  },
  {
    id: 485, day: 29, program: 'marriage-strengthening',
    title: "The Future You Are Building",
    emoji: "🏗️",
    tagline: "Get specific about the life you are building and make sure you are building it together.",
    body: "It is easy to get so caught up in the present demands of life that you lose sight of the future you are actually building. Where will you be in 5 years? 10? What does your life look like — your home, your work, your family, your finances, your health, your community? Today you bring your futures into alignment so you are pulling in the same direction.",
    duration: "35 min",
    prompts: [
      "Each partner: Paint a picture of the life you want 5 years from now — where you are, how you feel, what you are doing.",
      "Where do your 5-year pictures align? Where do they diverge — and is this a tension point you have addressed?",
      "What is one concrete step you could take together in the next 90 days that moves you toward the shared future you both want?",
      "What is something you want to build in this marriage — a legacy, a tradition, a family culture — that you have not discussed in enough depth?"
    ],
    reflection: "The couple with aligned futures is not pulled apart by the tide — they are rowing in the same direction."
  },
  {
    id: 486, day: 30, program: 'marriage-strengthening',
    title: "30 Days of Foundation — A Celebration",
    emoji: "🏆",
    tagline: "Honor 30 days of intentional foundation-building with presence and pride.",
    body: "You have spent 30 days going deeper — into gratitude, curiosity, presence, vision, and honest knowing of each other. That is not nothing. That is the kind of intentional investment that most couples never make. Today is not a practice day. Today is a celebration. You have built something real in the last month. Name it. Honor it. Let it fill you with confidence for everything ahead.",
    duration: "45 min",
    prompts: [
      "Each partner: Name the single most important thing you have discovered about your marriage in the last 30 days.",
      "Each partner: Name one thing you did in the last 30 days for this relationship that you are genuinely proud of.",
      "Together: What is the one practice from this first month that you are committing to keep forever?",
      "Do something tonight that marks the milestone — a meal, a toast, a letter, a ritual. Make it yours. Make it real."
    ],
    reflection: "Thirty days of choosing your marriage is thirty days of building the life most people only hope for. You did the work. Now receive the return."
  },
  {
    id: 487, day: 31, program: 'marriage-strengthening',
    title: "Speaking With Love and Precision",
    emoji: "🎯",
    tagline: "Say what you mean with clarity, and say it in a way your partner can actually receive.",
    body: "Love without clarity is often love that misses. You can feel something deeply and still communicate it in a way that lands wrong — too vague, too sharp, too buried under indirection. Communication mastery is not about being more articulate; it is about being more honest, more specific, and more attuned to how your words land in your partner's body. Today you begin the art of speaking with both love and precision.",
    duration: "25 min",
    prompts: [
      "Think of a recent conversation where you meant to express care or concern but it did not land well. What happened?",
      "What is one thing you have been wanting to say to your partner that you have not said because you were not sure how to say it?",
      "Practice the XYZ formula together: 'When you do X in situation Y, I feel Z.' Use a real, low-stakes example.",
      "How can you make it easier for your partner to come to you with something hard — what tone, what posture, what response would help them feel safe speaking?"
    ],
    reflection: "The most loving thing you can do for your partner is tell them the truth in a way they can hear it."
  },
  {
    id: 488, day: 32, program: 'marriage-strengthening',
    title: "Listening Without Fixing",
    emoji: "👂",
    tagline: "Learn to give your partner the gift of being fully heard before being helped.",
    body: "Most people in conflict or distress do not first want a solution — they want to feel understood. But partners who lead with logic and solutions often leave their loved one feeling dismissed. Listening without fixing is one of the hardest and most powerful communication skills you can develop. Today you practice hearing your partner all the way to the end before you respond with anything other than understanding.",
    duration: "30 min",
    prompts: [
      "Think of a time you went to your partner with something heavy and they immediately went into fix-it mode. How did that feel?",
      "Think of a time your partner came to you and you did the same. What were you feeling that made you want to fix it?",
      "Practice right now: one partner shares something on their mind. The other can only ask questions or reflect back — no solutions, no advice — for 5 full minutes. Then switch.",
      "What did it feel like to be listened to without being fixed? What did it feel like to hold back the fix?"
    ],
    reflection: "When your partner feels heard, they do not just feel better — they feel closer to you. That is the real fix."
  },
  {
    id: 489, day: 33, program: 'marriage-strengthening',
    title: "Expressing Needs Clearly",
    emoji: "📣",
    tagline: "Stop hinting and start asking — your partner deserves the chance to meet you.",
    body: "Unspoken needs become unspoken resentments. Many couples cycle through frustration without ever having the direct conversation — not because they are dishonest, but because they were never taught that asking for what you need is an act of love, not weakness. Today you practice the courage and clarity of naming what you actually need — and making it possible for your partner to actually give it.",
    duration: "30 min",
    prompts: [
      "Name one need you have in this marriage that you have been hinting at, hoping for, or silently waiting on your partner to fulfill.",
      "Why have you not asked for it directly? Fear of rejection, feeling like they should just know, not wanting to seem needy?",
      "Practice asking for it now, directly, using a request rather than a complaint: 'I need X. Would you be willing to Y?'",
      "Ask your partner: 'Is there something you need from me that you have been afraid to ask for directly?'"
    ],
    reflection: "Asking for what you need is not demanding — it is respecting your partner enough to let them choose to give it."
  },
  {
    id: 490, day: 34, program: 'marriage-strengthening',
    title: "The Tone Underneath the Words",
    emoji: "🎶",
    tagline: "Recognize that how you say something shapes what your partner actually hears.",
    body: "Words carry meaning, but tone carries feeling. You can say the same sentence in ten different tones and have ten entirely different conversations. When tone and words are misaligned, the tone always wins. Today you get honest about the tones that sometimes enter your communication — not to shame yourself, but to become so aware of them that you can choose differently.",
    duration: "25 min",
    prompts: [
      "What tone of voice or energy do you sometimes bring to conversations with your partner that you know does not serve the connection you want?",
      "What tends to put you in that tone — stress, tiredness, feeling unheard, something from earlier in the day?",
      "How does your partner typically respond to that tone — and what does it do to the conversation?",
      "What is a cue or practice you can use to check your tone before you enter an important conversation with your partner?"
    ],
    reflection: "Your partner hears the music before they process the lyrics. Choose music worth hearing."
  },
  {
    id: 491, day: 35, program: 'marriage-strengthening',
    title: "Navigating Disagreement Without Destruction",
    emoji: "🧭",
    tagline: "Disagree well — with truth, respect, and the relationship still intact at the end.",
    body: "In every marriage there will be genuine disagreement — about parenting, money, time, priorities, values. The question is never whether you will disagree; it is whether you can disagree in a way that leaves both people feeling respected and the relationship feeling stronger rather than weaker. Today you build the skills to navigate disagreement without letting it become a battle for dominance.",
    duration: "35 min",
    prompts: [
      "Name a recurring disagreement in your marriage that has never fully been resolved. What is it really about — beneath the surface argument?",
      "What does 'winning' look like to each of you in a disagreement — and how does that goal sometimes work against resolution?",
      "Practice the softened startup: instead of 'You always...' or 'You never...', try 'I feel... I need... I would love it if...' Use a real example.",
      "What would it look like to disagree on this issue while still maintaining full respect for your partner's perspective?"
    ],
    reflection: "The goal of a disagreement in marriage is not to be right. It is to be understood — and to understand."
  },
  {
    id: 492, day: 36, program: 'marriage-strengthening',
    title: "The Art of the Apology",
    emoji: "🙇",
    tagline: "Learn to apologize in a way that truly repairs, not just closes the argument.",
    body: "A weak apology — 'I am sorry you feel that way' or 'Sorry, but...' — is worse than no apology at all. It compounds the original wound. A real apology is a specific, accountable, repair-oriented act that names what happened, owns the impact, and offers a genuine commitment to do differently. Today you learn and practice the architecture of an apology that actually heals.",
    duration: "30 min",
    prompts: [
      "Think of something you have done — recently or in the past — that you have not fully apologized for. What has kept you from doing so?",
      "Practice the full apology structure: (1) Name what you did specifically, (2) Acknowledge the impact on your partner, (3) Take full ownership without deflecting, (4) Commit to a specific change.",
      "Ask your partner: 'Is there something I have done that you felt my apology for was incomplete or insufficient?'",
      "What does your partner most need to hear in an apology to feel truly repaired — words, actions, time, or something else?"
    ],
    reflection: "A real apology is not the closing of a chapter. It is the opening of a new one."
  },
  {
    id: 493, day: 37, program: 'marriage-strengthening',
    title: "Asking Better Questions",
    emoji: "❓",
    tagline: "The quality of your questions shapes the quality of your conversations.",
    body: "Most couples have conversations that skim the surface — logistics, schedules, the news of the day. The depth of a relationship is determined in large part by the depth of its questions. Better questions create better conversations. Better conversations create deeper knowing. Deeper knowing creates the kind of intimacy that sustains a marriage through decades. Today you upgrade your questions.",
    duration: "30 min",
    prompts: [
      "What is a question you have never asked your partner but have always wondered about — about their past, their inner life, their desires?",
      "Ask your partner: 'What is the most underrated thing about being with you that most people — including me — do not fully appreciate?'",
      "Ask your partner: 'If you could change one thing about the way we communicate, what would it be?'",
      "Design 5 questions you want to ask each other over the next month — keep them on your phone, return to them in slow moments."
    ],
    reflection: "The partner who keeps asking becomes the partner who keeps knowing. And knowing is the soil in which love deepens."
  },
  {
    id: 494, day: 38, program: 'marriage-strengthening',
    title: "Repair After Tension",
    emoji: "🔧",
    tagline: "Master the move back toward each other after the distance of conflict.",
    body: "All couples experience tension. What separates thriving marriages from struggling ones is not the absence of tension but the speed and quality of the repair. How quickly do you return to warmth after conflict? How do you signal that the fight is over and you are back on the same team? Today you develop your repair vocabulary and your return ritual.",
    duration: "30 min",
    prompts: [
      "After a conflict, what does your current repair process look like — who typically initiates, and how?",
      "What makes it hard to return to warmth after tension — pride, residual hurt, not knowing how to start?",
      "Design a repair signal together: a phrase, a gesture, or a small act that says 'I am coming back — are you ready?'",
      "Practice initiating repair for something small — a brief tightness from earlier in the week. Use your signal. Notice how it feels."
    ],
    reflection: "The speed of repair is a measure of how much the relationship matters to both of you."
  },
  {
    id: 495, day: 39, program: 'marriage-strengthening',
    title: "Speaking Truth With Kindness",
    emoji: "🕊️",
    tagline: "Deliver hard truths with enough love that they can actually be received.",
    body: "There is a myth that honesty and kindness are in tension — that being truly honest requires harshness, and that being kind requires softening the truth to the point of uselessness. The truth is that the highest form of communication does both: it names what is real and it does so wrapped in enough love, care, and respect that the listener can genuinely receive it. Today you practice that art.",
    duration: "30 min",
    prompts: [
      "Is there something honest you have been holding back from your partner because you were afraid of hurting them or being received poorly?",
      "Practice the 'sandwich' frame: open with genuine care or appreciation, deliver the honest truth, close with confidence in the relationship. Try it with something real.",
      "Ask your partner: 'Is there something true you have been wanting to say to me that you have held back? I want to hear it. I will listen without defending.'",
      "What would it change in your communication if you trusted that your partner could handle your full honesty — and you could handle theirs?"
    ],
    reflection: "The marriage where truth flows freely, wrapped in love, is the marriage where nothing festers and nothing is hidden."
  },
  {
    id: 496, day: 40, program: 'marriage-strengthening',
    title: "When You Feel Unheard",
    emoji: "📡",
    tagline: "Learn to name the experience of not feeling heard without escalating into accusation.",
    body: "Feeling unheard is one of the most corrosive experiences in a marriage — and one of the most common. The problem is that most people respond to feeling unheard by getting louder, shutting down, or attacking, none of which actually produces the hearing they need. Today you develop a clean, direct, non-accusatory way to name the experience and create the space to be heard.",
    duration: "30 min",
    prompts: [
      "Describe the internal experience of feeling unheard by your partner — what does it feel like in your body, your chest, your mind?",
      "What do you typically do when you feel unheard — get louder, shut down, deflect, repeat yourself?",
      "Practice this phrase: 'I do not feel heard right now. I am not blaming you — I just need us to slow down so I can say what I mean and you can receive it.' How does that land?",
      "Ask your partner: 'When do you feel most unheard by me — and what do you need in that moment?'"
    ],
    reflection: "Being heard is not about volume. It is about the quality of attention your partner brings to you."
  },
  {
    id: 497, day: 41, program: 'marriage-strengthening',
    title: "The Power of Pausing",
    emoji: "⏸️",
    tagline: "Learn to pause before responding — the space between stimulus and response is sacred.",
    body: "The most damaging words in a marriage are often the ones spoken in the first 10 seconds of an emotionally charged moment. The pause — the deliberate, practiced beat between feeling something and acting on it — is one of the most powerful communication tools available. Today you build the pause muscle: the capacity to choose your response rather than react from your wound.",
    duration: "25 min",
    prompts: [
      "Think of a moment when you said something in a heated instant that you later regretted. What were you feeling in that moment?",
      "What is your body's signal that you are about to react rather than respond — tightness in the chest, heat in the face, a familiar thought pattern?",
      "Design a personal pause practice: when you notice that signal, what will you do? Breathe, physically step back, say 'give me 60 seconds,' put a hand up?",
      "Practice the pause with each other: recreate a low-stakes version of a typical trigger. One partner reacts. Stop. Reset. Try again with the pause. Notice the difference."
    ],
    reflection: "The pause is not avoidance. It is the choice to come back as your best self rather than your most reactive one."
  },
  {
    id: 498, day: 42, program: 'marriage-strengthening',
    title: "Assumptions That Erode",
    emoji: "🔍",
    tagline: "Surface the assumptions you are making about your partner that are silently creating distance.",
    body: "Every relationship accumulates assumptions — stories we tell about why our partner did what they did, meant what they said, chose what they chose. Many of these stories are unverified and unflattering. Over time they harden into the lens through which we see everything our partner does. Today you name the assumptions and replace them with questions.",
    duration: "30 min",
    prompts: [
      "Name one story you tell yourself about your partner's behavior or motivation that you have never actually verified directly.",
      "What would it look like to ask, with genuine curiosity rather than accusation, about the real reason behind that behavior?",
      "Ask your partner now about one thing you have been interpreting negatively — with a genuine question, not a loaded one. Listen fully.",
      "What did you learn? Was the assumption accurate, or was the real story different from the one you had been carrying?"
    ],
    reflection: "The assumption you never checked is the story that quietly shapes every interaction. Ask the question."
  },
  {
    id: 499, day: 43, program: 'marriage-strengthening',
    title: "Accountability Without Shame",
    emoji: "⚖️",
    tagline: "Own your part in relational patterns with honesty but without self-flagellation.",
    body: "Accountability is not self-attack. It is honest ownership — of your role in a pattern, your contribution to a conflict, your impact on your partner — without collapsing into guilt or deflecting into defensiveness. When both partners can own their part cleanly, conversations that used to spiral become conversations that heal. Today you practice clean accountability.",
    duration: "30 min",
    prompts: [
      "Name one pattern in your marriage that has not been serving you both — and your honest contribution to that pattern.",
      "Is there something you have deflected responsibility for that you can now own more fully, without defensiveness?",
      "Practice saying: 'I see how my behavior contributed to X. That is on me. Here is what I am going to do differently.' Say it out loud.",
      "How does it feel to own your part without making yourself wrong or your partner right — just honest, clear, clean?"
    ],
    reflection: "Accountability without shame is freedom. It is the choice to grow rather than defend."
  },
  {
    id: 500, day: 44, program: 'marriage-strengthening',
    title: "The Influence of Influence",
    emoji: "🎭",
    tagline: "Learn to let your partner influence you — and become influenceable yourself.",
    body: "Research shows that one of the most important predictors of a stable, satisfying marriage is the willingness to accept influence from your partner. This does not mean capitulating — it means genuinely considering their perspective, letting it land, and being willing to be moved by it. The partner who cannot be influenced is the partner who eventually finds themselves alone. Today you practice the art of openness.",
    duration: "30 min",
    prompts: [
      "In what areas do you tend to resist your partner's input or perspective most strongly? What drives that resistance?",
      "Think of a time your partner's influence genuinely changed your mind or approach for the better. What did that feel like?",
      "Practice this: your partner shares a perspective you instinctively want to push back on. Your first response can only be a question or reflection — no rebuttal yet. Try it.",
      "What would it change in your marriage if you became more genuinely open to being influenced by the person who knows you best?"
    ],
    reflection: "The willingness to be moved by your partner is not weakness. It is the deepest form of respect."
  },
  {
    id: 501, day: 45, program: 'marriage-strengthening',
    title: "Conflict as Information",
    emoji: "🗺️",
    tagline: "Use your recurring conflicts as a map to what each of you most deeply needs.",
    body: "Recurring conflicts are not problems to be solved — they are signals to be decoded. Most couples fight about the same things repeatedly because those things are proxies for deeper needs, fears, or unresolved longings. When you stop trying to win the argument and start trying to decode the signal, the whole dynamic shifts. Today you decode one of yours.",
    duration: "35 min",
    prompts: [
      "Name the conflict your marriage returns to most often. Describe it as neutrally as you can — not who is wrong, just what happens.",
      "Beneath the surface of this conflict, what is each of you actually needing or fearing? Go deeper than the presenting argument.",
      "Is this conflict a perpetual difference between two valid needs — or is it a solvable problem that neither of you has solved because you keep addressing the symptom?",
      "What would it look like to address the need directly rather than fight the battle again?"
    ],
    reflection: "The conflict that keeps returning is the relationship's way of asking for something deeper than a solution."
  },
  {
    id: 502, day: 46, program: 'marriage-strengthening',
    title: "Expressing Hurt Without Attack",
    emoji: "💔",
    tagline: "Name the wound without weaponizing it — this is one of the highest communication skills.",
    body: "Hurt that is not expressed becomes bitterness. Hurt that is expressed badly becomes a weapon. The narrow path between silence and attack is the skill of saying 'I was hurt by this' in a way that opens connection rather than igniting defensiveness. Today you walk that path with something real.",
    duration: "30 min",
    prompts: [
      "Name something your partner did or said that genuinely hurt you — not a major wound, a smaller one — that you did not fully address at the time.",
      "What did you do with that hurt? Let it pass, stuff it, or bring it up in a way that probably did not help?",
      "Practice expressing the hurt cleanly: 'When you did X, I felt Y. I do not think you intended to hurt me, but I need you to understand how it landed.'",
      "How does your partner receive the hurt when it is expressed cleanly — and what do they need to hear from you to respond well?"
    ],
    reflection: "Hurt expressed with clarity and without blame is one of the most intimate things two people can share."
  },
  {
    id: 503, day: 47, program: 'marriage-strengthening',
    title: "The Language of Softness",
    emoji: "🌸",
    tagline: "Bring softness to hard conversations — it is not weakness, it is wisdom.",
    body: "There is a cultural myth that directness requires hardness. But in marriage, the opposite is often true: the conversation delivered with genuine softness — a relaxed tone, open body language, warmth in the opening — is far more likely to be heard than the one delivered with urgency and edge. Softness is not capitulation. It is strategy. Today you practice the language of softness.",
    duration: "25 min",
    prompts: [
      "Think of a recent conversation that escalated faster than you wanted. What would a softer entry point have sounded like?",
      "What makes it hard for you personally to bring softness to a hard conversation — ego, urgency, the fear of not being taken seriously?",
      "Practice a softened version of something you have been needing to say. Start with warmth. Open with care. Deliver the honesty inside that container.",
      "Ask your partner: 'What tone or posture from me helps you stay open during a hard conversation?'"
    ],
    reflection: "Softness is not the absence of strength. It is strength in its most mature form."
  },
  {
    id: 504, day: 48, program: 'marriage-strengthening',
    title: "Reading Between the Lines",
    emoji: "📚",
    tagline: "Learn to hear what your partner is actually saying beneath what they are literally saying.",
    body: "Communication is only partly verbal. Beneath the words is a world of emotion, need, and longing that often goes unarticulated — not because your partner is hiding it, but because they do not have the language for it, or they do not feel safe enough to say it directly. The partner who learns to hear beneath the surface becomes the partner who truly understands. Today you practice listening at depth.",
    duration: "30 min",
    prompts: [
      "Think of something your partner often says in a particular tone or context. What do you believe they are actually expressing beneath the literal words?",
      "Practice metacommunication: 'I hear you saying X. I also wonder if you are feeling or needing Y. Am I close?' Try this with something real.",
      "Ask your partner: 'Is there something you often try to tell me that you feel I regularly miss or do not fully hear?'",
      "What did you learn about how your partner communicates that you want to start responding to differently?"
    ],
    reflection: "The partner who hears beneath the surface is the partner who never makes their loved one feel alone."
  },
  {
    id: 505, day: 49, program: 'marriage-strengthening',
    title: "Boundaries as Love",
    emoji: "🚧",
    tagline: "Understand that a well-communicated boundary is an act of love, not rejection.",
    body: "In the context of a healthy marriage, a boundary is not a wall — it is a window. It tells your partner where you are, what you need, and how to reach you. Couples who can name and respect each other's limits without it feeling like rejection are able to maintain both closeness and individuality. Today you explore the boundaries that create safety rather than distance.",
    duration: "30 min",
    prompts: [
      "What is one personal boundary — around time, energy, conversation style, or physical space — that is important for your wellbeing that your partner may not fully understand?",
      "How have you communicated that boundary in the past — directly, indirectly, through withdrawal, through conflict?",
      "Practice communicating it directly, with love: 'I need X. It is not about you — it is about what I need to show up fully for you and for us.'",
      "Ask your partner: 'Is there a limit or need of yours that I have not been respecting — not intentionally, but through not knowing?'"
    ],
    reflection: "A relationship where both partners feel safe to name their limits is a relationship where genuine closeness becomes possible."
  },
  {
    id: 506, day: 50, program: 'marriage-strengthening',
    title: "Halfway: The Communication Milestone",
    emoji: "🏁",
    tagline: "Pause at the midpoint to honor the communication growth you have already achieved.",
    body: "You are at the midpoint of this journey — 50 days of intentional investment in the marriage you are building. The last 20 days have been dedicated to the art of communication: speaking, listening, asking, repairing, and returning to each other. Today you take stock. What has changed in how you talk? How you listen? How you repair? This is not a review — it is a recognition.",
    duration: "35 min",
    prompts: [
      "Each partner: Name the single most important shift in how you communicate that has happened in the last 20 days.",
      "What is one conversation you had in the last month that would have gone differently — worse — before this work?",
      "What communication skill are you still working to develop? Where do you still feel clumsy or uncertain?",
      "What is one promise you want to make to your partner about how you will communicate going forward?"
    ],
    reflection: "Fifty days of choosing to communicate better is fifty days of building a language only the two of you fully speak."
  },
  {
    id: 507, day: 51, program: 'marriage-strengthening',
    title: "The Unfinished Conversation",
    emoji: "💬",
    tagline: "Return to a conversation that was never fully resolved and complete it with new skill.",
    body: "Every marriage has them: the conversations that were started but not finished, the topics that get avoided, the feelings that were expressed but never fully heard. These unfinished conversations collect beneath the surface of daily life and create subtle weight. Today you choose one — something still sitting — and you finish it. Properly. With everything you have learned.",
    duration: "40 min",
    prompts: [
      "Name one conversation from the past — weeks, months, or longer — that was never fully resolved or completed.",
      "What made it hard to finish at the time — emotion, avoidance, lack of skill, fear of the outcome?",
      "Agree together to have that conversation today. Use everything you have practiced: soft start, active listening, clean accountability, the pause.",
      "What does resolution look like for this conversation — not agreement necessarily, but mutual understanding and genuine closure?"
    ],
    reflection: "Completed conversations do not just resolve the past. They clear the path for everything that is coming next."
  },
  {
    id: 508, day: 52, program: 'marriage-strengthening',
    title: "Saying the Loving Thing",
    emoji: "💌",
    tagline: "Practice saying the loving thing, out loud, in the moment it is true.",
    body: "There are countless moments in a day when something loving rises in you about your partner — a quiet recognition, a flash of appreciation, a surge of warmth — and you do not say it. You think it and move on. Today you commit to saying it. The loving thought that stays inside is kind. The loving thought that is spoken aloud is connecting. Today you speak the loving things.",
    duration: "20 min",
    prompts: [
      "Think of 3 loving, warm, or admiring thoughts you have had about your partner this week that you kept to yourself. Why did you not say them?",
      "Make a commitment: every time today you have a loving thought about your partner, you will say it out loud within 30 seconds.",
      "Notice throughout the day: how often do these moments arise? What happens to the energy between you when you say them?",
      "Ask your partner at the end of today: 'What was the thing I said today that meant the most to you?'"
    ],
    reflection: "Love expressed is love experienced. Love kept inside is only love in potential."
  },
  {
    id: 509, day: 53, program: 'marriage-strengthening',
    title: "The Complaint Versus the Criticism",
    emoji: "🗣️",
    tagline: "Learn the critical difference between a complaint and a criticism — and choose accordingly.",
    body: "A complaint addresses a specific behavior: 'The dishes were not done and I was frustrated.' A criticism attacks character: 'You are so lazy and you never do anything.' The difference sounds small but the impact is enormous. Complaints can be heard and addressed. Criticisms trigger defensiveness, shame, and counterattack. Today you learn to convert your criticisms into complaints — and start getting real results.",
    duration: "25 min",
    prompts: [
      "Think of a criticism you have leveled at your partner — something about their character or nature rather than a specific behavior.",
      "Convert it to a complaint: what specific behavior, in what specific situation, produced what specific feeling for you?",
      "Practice the conversion out loud. Notice how the energy of the complaint is different from the energy of the criticism.",
      "Ask your partner: 'When I bring up concerns, do I come at them as complaints — specific and actionable — or as criticisms of who you are?'"
    ],
    reflection: "When you attack the behavior, you invite change. When you attack the person, you invite only defense."
  },
  {
    id: 510, day: 54, program: 'marriage-strengthening',
    title: "Curiosity Over Judgment",
    emoji: "🔬",
    tagline: "Replace judgment with curiosity and watch the conversation change completely.",
    body: "Judgment closes. Curiosity opens. When you bring a judging energy into a conversation — even a subtle one — your partner senses it and the walls go up. When you bring genuine curiosity — real wanting to understand, not strategic questioning — something different happens. The conversation goes to places it could not have gone under judgment. Today you practice leading with curiosity.",
    duration: "30 min",
    prompts: [
      "Name something your partner does that you have been judging — internally or openly. What is the judgment?",
      "Convert the judgment to a genuine question: instead of 'Why do you always...' try 'Help me understand what is going on for you when...'",
      "Practice that question with your partner right now. Be curious — genuinely. Listen without an agenda.",
      "What did you learn when you asked from curiosity instead of judgment? How does it change what you want to say next?"
    ],
    reflection: "Curiosity is the antidote to judgment — and the doorway to the kind of knowing that deepens love."
  },
  {
    id: 511, day: 55, program: 'marriage-strengthening',
    title: "Flooding and the Flooded Partner",
    emoji: "🌊",
    tagline: "Learn to recognize when your partner is flooded — and how to help them return.",
    body: "Flooding is the physiological state of emotional overwhelm that makes productive conversation impossible. When either partner is flooded — heart rate elevated, cortisol surging, capacity for nuanced thought compromised — the conversation cannot go anywhere helpful. Learning to recognize flooding in yourself and your partner, and to take productive breaks rather than push through, is one of the most practical communication skills in marriage.",
    duration: "30 min",
    prompts: [
      "What are your personal signs of flooding — what happens in your body and mind when you are in emotional overwhelm during a conversation?",
      "What are your partner's signs? How do they typically look or behave when they are flooded?",
      "Design a flooding protocol together: when either person is flooded, what happens next? A 20-minute break, a specific phrase, a physical exit, a return agreement?",
      "Practice the break: the next time tension starts to rise this week, try the protocol before the flood hits. Notice the difference."
    ],
    reflection: "You cannot build understanding on flooded ground. Give yourself the break that makes understanding possible."
  },
  {
    id: 512, day: 56, program: 'marriage-strengthening',
    title: "What You Have Never Said",
    emoji: "🤫",
    tagline: "Give voice to something true, loving, or vulnerable that has never been spoken between you.",
    body: "Every couple has a reservoir of things never said — not because they are negative, but because they felt too vulnerable, too big, too risky, or simply never found their moment. Today you give one of those unspoken things its moment. This is not about confession or revelation — it is about offering something true that your partner deserves to hear.",
    duration: "35 min",
    prompts: [
      "Each partner: Think of something true about your love for your partner, your experience of this relationship, or your gratitude that you have never fully said out loud.",
      "Write it down first. Take your time. Let it be honest and specific.",
      "Share it. Not rushed, not minimized. Say it fully, look at them while you say it, and let them receive it.",
      "After both have shared: what did it feel like to say it? What did it feel like to hear it?"
    ],
    reflection: "The unspoken truth, once spoken, takes up residence in the relationship forever. It cannot be unsaid. That is the point."
  },
  {
    id: 513, day: 57, program: 'marriage-strengthening',
    title: "The Dreaded Topic",
    emoji: "🐘",
    tagline: "Name the thing neither of you has been willing to talk about — and start the conversation.",
    body: "Every marriage has at least one: the topic that gets avoided because it feels too big, too painful, too unresolvable. But the thing about avoided topics is that their avoidance does not make them smaller — it makes them larger. Today you name your dreaded topic and begin — not necessarily resolve — a conversation about it. Beginning is everything.",
    duration: "40 min",
    prompts: [
      "Each partner, privately: Name the topic you have most been avoiding in this marriage. Write it down.",
      "Share your topic with each other. Do not react to what your partner names — just receive it.",
      "Together: Choose one of these topics to begin — not to resolve, just to begin. Agree that the goal is understanding, not agreement.",
      "Have the opening 10 minutes of that conversation. Pause. Reflect on how it felt to begin. You do not have to finish today — just establish that this is a conversation you can have."
    ],
    reflection: "The conversation you have been afraid to have is usually the one your relationship most needs."
  },
  {
    id: 514, day: 58, program: 'marriage-strengthening',
    title: "Gratitude for the Struggle",
    emoji: "🌧️",
    tagline: "Find and name the growth that came from the hard seasons you have shared.",
    body: "The hard seasons — the losses, the failures, the conflicts, the stretches of distance — are not separate from your marriage. They are part of it. And if you have navigated them together, they have made you something. Today you practice the rare and powerful skill of holding gratitude for the hard parts: not because the hardship was good, but because of who you became while surviving it together.",
    duration: "30 min",
    prompts: [
      "Name the hardest season your marriage has been through — together or individually. What was it?",
      "What did you discover about your partner during that hard season that you could not have known in an easy one?",
      "What did you discover about yourself — about your capacity, your values, your need for your partner?",
      "Express genuine gratitude to your partner for something they gave you during that hard season that you have never fully named."
    ],
    reflection: "The couple who can find gratitude in the struggle has found something that makes them unbreakable."
  },
  {
    id: 515, day: 59, program: 'marriage-strengthening',
    title: "Speaking the Future Into Existence",
    emoji: "🌠",
    tagline: "Use the power of spoken intention to bring your desired marriage closer.",
    body: "Words are not merely descriptive — they are generative. When you speak your intentions for your marriage out loud, with specificity and genuine commitment, you are not just describing what you want — you are beginning to create it. Today you practice speaking your marriage into its next, greater form.",
    duration: "30 min",
    prompts: [
      "Each partner: Speak a 3-sentence vision for who you are committed to being as a partner in the next 30 days. Specific, present tense, as if it is already true.",
      "Each partner: Speak one intention for the quality of communication you are committing to — not vague aspiration, but a real, specific behavioral commitment.",
      "Together: Name the one thing you are both committed to building in the next phase of this work. Say it out loud, to each other, as a declaration.",
      "Write these intentions down. Put them somewhere you will see them. Return to them in 30 days."
    ],
    reflection: "What you declare about your marriage, spoken with intention, begins to become true the moment you say it."
  },
  {
    id: 516, day: 60, program: 'marriage-strengthening',
    title: "Communication Mastery — Closing the Chapter",
    emoji: "📘",
    tagline: "Mark 30 days of communication work with the recognition it deserves.",
    body: "Thirty days of deliberate, courageous, skills-building communication work. You have learned to speak more clearly, listen more deeply, ask better questions, repair more quickly, and hold more truth without damage. Today you close this chapter with the same intentionality you brought to every day of it. Name what you have mastered. Name what is still growing. And honor the courage it took to work this hard on something this important.",
    duration: "40 min",
    prompts: [
      "Each partner: What is the communication skill you are most proud of developing over the last 30 days?",
      "Each partner: What is the area of communication where you still feel the most room for growth?",
      "Together: Name one conversation from this chapter that you will remember — one that shifted something real between you.",
      "Write a letter — short or long — to your marriage. Address it to the relationship itself. Read it to each other."
    ],
    reflection: "Thirty days of better communication is thirty days of choosing each other, again and again, with your words."
  },
  {
    id: 517, day: 61, program: 'marriage-strengthening',
    title: "The Bridge to Intimacy",
    emoji: "🌉",
    tagline: "Recognize that everything you have built so far is the bridge that carries you into deeper intimacy.",
    body: "Foundation, communication, presence, truth — these are not separate from intimacy; they are what intimacy is made of. As you move into the final phase of this first journey, you stand at the threshold of the deepest work: the intimacy that flows not just from physical closeness but from being fully known, fully seen, and fully chosen. Today you acknowledge what you have built and look forward to what it now makes possible.",
    duration: "35 min",
    prompts: [
      "How has your sense of safety with your partner changed over the last 60 days of this work?",
      "What does 'intimacy' mean to you — beyond the physical? What dimensions of closeness do you most long for in this marriage?",
      "Is there a form of intimacy you have been longing for but have not yet allowed yourself to fully want, ask for, or believe is possible?",
      "What does the next phase of this marriage need to be about — for you personally, and for you as a couple?"
    ],
    reflection: "The bridge is complete. What lies on the other side is not unknown — it is the fullness of the marriage you have been building toward."
  },
  {
    id: 518, day: 62, program: 'marriage-strengthening',
    title: "What You Have Built Together",
    emoji: "🏛️",
    tagline: "Take an honest, proud inventory of the marriage you have built through intentional practice.",
    body: "Before you set intentions for the next phase, you must fully receive what this phase has produced. Most people are better at seeing what is still missing than honoring what has already been built. Today you practice the discipline of honest pride — not complacency, but genuine recognition of the real, lived progress you have made as a couple over these 62 days.",
    duration: "35 min",
    prompts: [
      "Each partner: Name 5 concrete changes in your marriage over the last 62 days — things that are genuinely different now.",
      "Each partner: Name one way you are a better partner today than you were on Day 1.",
      "Together: What is the single most valuable thing this season of work has given your marriage?",
      "Together: What do you want to protect — absolutely and forever — from everything you have built in this season?"
    ],
    reflection: "The marriage that can see its own progress is the marriage that knows it is possible to keep growing."
  },
  {
    id: 519, day: 63, program: 'marriage-strengthening',
    title: "Setting Intentions for the Next Phase",
    emoji: "🧭",
    tagline: "Define with clarity and shared ownership what the next season of your marriage will be about.",
    body: "Great marriages do not happen by accident — they are designed. The couples who thrive over decades are the ones who regularly revisit their intentions, their practices, and their commitments. Today you design the next chapter. Not because this one is over, but because you are ready to go deeper. What will the next 30, 60, 90 days of your marriage be about? Name it together.",
    duration: "35 min",
    prompts: [
      "Each partner: What is the one dimension of your marriage you most want to deepen in the next 90 days?",
      "Together: What shared practice, ritual, or commitment do you want to establish going forward that you do not currently have?",
      "Together: Is there a challenge — external or internal — you anticipate in the next season, and how will you meet it together?",
      "Write your shared intention for the next phase in one clear, elevated sentence. This is your compass."
    ],
    reflection: "The couple who designs their next chapter rather than drifts into it is the couple who gets to choose the story."
  },
  {
    id: 520, day: 64, program: 'marriage-strengthening',
    title: "The Intimacy You Have Earned",
    emoji: "💎",
    tagline: "Recognize that the intimacy now available to you has been earned by the work you have done.",
    body: "There is a form of closeness that cannot be shortcut or rushed — it can only be earned through the slow, patient, courageous work of showing up honestly, consistently, and with love. That intimacy — the kind that comes from being fully known and fully chosen — is what 64 days of work have made available to you. Today you step fully into that truth and let it change how you see each other.",
    duration: "30 min",
    prompts: [
      "In what way do you feel more genuinely known by your partner today than you did when this journey began?",
      "In what way do you feel that your partner is more genuinely known to you — that you understand them more fully, more accurately?",
      "What dimension of intimacy — emotional, intellectual, spiritual, physical — feels most alive and available to you right now?",
      "What would it look like to fully inhabit that intimacy — not strive toward it, but receive it as something already present?"
    ],
    reflection: "Intimacy is not a destination. It is the quality of presence you bring to the person you have chosen. You have earned this."
  },
  {
    id: 521, day: 65, program: 'marriage-strengthening',
    title: "The Marriage You Are Becoming",
    emoji: "🦋",
    tagline: "Speak into existence the next evolution of your marriage with faith in what you have built.",
    body: "Every marriage has a version of itself it is growing toward — a more honest, more intimate, more intentional, more alive version. Today you speak to that version. Not what you hope someday to have, but what you are actively, right now, in the process of becoming. The couple who can see and speak their own evolution is the couple who accelerates it.",
    duration: "30 min",
    prompts: [
      "Each partner: Describe the marriage you are becoming — present tense, first person plural: 'We are a couple who...'",
      "Each partner: Describe the partner you are becoming. What qualities are you cultivating? What are you releasing?",
      "Together: Read your statements to each other. Where do they align? Where do they beautifully complement each other?",
      "Write a shared declaration: 'We are becoming...' — one sentence, specific, true, and alive."
    ],
    reflection: "You are not just building a marriage. You are becoming a marriage. There is a difference — and it is everything."
  },
  {
    id: 522, day: 66, program: 'marriage-strengthening',
    title: "A Letter to the Beginning",
    emoji: "✉️",
    tagline: "Write to the couple you were on Day 1 from the couple you are now.",
    body: "One of the most powerful practices in any transformation is the retrospective letter — writing from the vantage point of who you have become back to who you were when you started. Today you each write a letter to the couple you were on Day 1 of this program. Not with condescension, but with love and the hard-won wisdom of 66 days of showing up.",
    duration: "40 min",
    prompts: [
      "Each partner: Write a letter to the version of yourself that started this program. What do you want them to know? What would you tell them to hold onto? What would you tell them to let go?",
      "Each partner: Write a letter to your partner as they were on Day 1. What do you want to say to that version of them?",
      "Read your letters to each other. Take your time. Let there be silence when it comes.",
      "What feels complete now that you have written and heard these letters? What feels ready to begin?"
    ],
    reflection: "The distance between who you were on Day 1 and who you are now is the evidence. You do not have to look anywhere else."
  },
  {
    id: 523, day: 67, program: 'marriage-strengthening',
    title: "Day 67 — The Next Chapter Begins",
    emoji: "📖",
    tagline: "Close this season of work with pride, presence, and your eyes fully open to what comes next.",
    body: "Sixty-seven days. Nearly ten weeks of choosing, showing up, going deeper, and building something real. You have laid the foundation, sharpened the communication, and stood at the bridge of deeper intimacy. This program does not end today — it graduates. Everything you have built continues, compounding quietly in the daily choices you make, the questions you ask, the presence you bring, and the love you speak out loud. This is not the end of the story. This is the end of the introduction. The rest is yours.",
    duration: "60 min",
    prompts: [
      "Each partner: What is the one commitment you are carrying forward from this entire journey — the non-negotiable, the practice you will not abandon?",
      "Each partner: What is the greatest gift this work has given your marriage? Say it out loud, to each other, completely.",
      "Together: Create a ritual for today — something that marks the close of this chapter and the opening of the next. A meal, a ceremony, a walk, a letter sealed for next year. Make it real.",
      "Together: Name, out loud, what you are stepping into. Not what you hope for. What you are building. What you choose. What you are."
    ],
    reflection: "Sixty-seven days of choosing greatness in your marriage is sixty-seven days of becoming the couple most people only dream of being. The work continues. The love deepens. The chapter turns. Go write the rest of it together."
  },
  {
    id: 524, day: 68, program: 'marriage-strengthening',
    title: "The Emotional Interior",
    emoji: "🫀",
    tagline: "Intimacy begins the moment you let someone see what is happening inside you.",
    body: "Emotional intimacy is not built through grand gestures — it is built through consistent access. It is the willingness to say what you actually feel instead of what is convenient, safe, or easy. Most couples live side by side for decades without ever fully entering each other's emotional interior. Today you begin the work of becoming truly known — and truly present to knowing your partner.",
    duration: "30 min",
    prompts: [
      "What emotion do you most frequently hide from your partner, and what story do you tell yourself about why it needs to be hidden?",
      "When do you feel most emotionally seen by your partner? What does that feel like in your body?",
      "What is one feeling you have never quite put into words with your partner that you are willing to name today?",
      "What would shift in your marriage if your partner had full access to your emotional interior — nothing edited, nothing managed?"
    ],
    reflection: "Being emotionally known is one of the deepest human hungers. The couple that chooses to feed that hunger in each other builds a bond that time cannot erode."
  },
  {
    id: 525, day: 69, program: 'marriage-strengthening',
    title: "What You've Never Said",
    emoji: "🤫",
    tagline: "The things we carry in silence are often the things that most need to be spoken.",
    body: "Every person carries words they have never said to their partner — not because the words are dangerous, but because vulnerability is a practice, not a default. The unsaid accumulates quietly, shaping the emotional distance between two people without either person fully recognizing it. Today is an invitation to speak something true that has been living in the silence.",
    duration: "35 min",
    prompts: [
      "What is something you have wanted to tell your partner but have not found the right moment, the right words, or the courage to say?",
      "What do you wish your partner understood about your inner life that you have never fully explained?",
      "Is there a fear, a regret, or a longing you have carried alone that you are willing to share today?",
      "After sharing: What does it feel like to have said it? What does it feel like to have heard it?"
    ],
    reflection: "Every word spoken into the space between two people who love each other makes that space safer, warmer, and more alive."
  },
  {
    id: 526, day: 70, program: 'marriage-strengthening',
    title: "Mind-to-Mind",
    emoji: "🧠",
    tagline: "Intellectual intimacy is falling in love with how your partner thinks.",
    body: "You married a person with a mind — a rich, complex, endlessly interesting mind that holds beliefs, fascinations, arguments, and ideas unlike any other. Intellectual intimacy is not about agreeing. It is about being genuinely curious about the inner world of your partner's thinking. The couple that loves how each other thinks will never run out of conversation, depth, or delight.",
    duration: "30 min",
    prompts: [
      "What subject, topic, or idea is your partner most passionate about that you have never fully asked them to teach you?",
      "What belief or perspective do you hold that your partner does not fully understand — and what would it mean for them to truly grasp it?",
      "When did your partner say something recently that surprised you, shifted you, or made you see something differently?",
      "What would it look like to have a weekly practice of intellectual connection — reading together, debating ideas, exploring one fascinating question?"
    ],
    reflection: "The person who finds their partner's mind endlessly interesting will never stop finding reasons to come closer."
  },
  {
    id: 527, day: 71, program: 'marriage-strengthening',
    title: "The Spiritual Overlap",
    emoji: "✨",
    tagline: "Where your souls meet — faith, meaning, awe, and the sacred you share.",
    body: "Whether you share a formal religion, a philosophy, a spiritual practice, or simply a sense of wonder at being alive, there is a dimension of your inner life that reaches beyond the practical. Spiritual intimacy is the experience of touching that dimension together — of knowing that you are not merely building a life but inhabiting a meaning. Today you explore where your souls already overlap and where they are waiting to meet.",
    duration: "30 min",
    prompts: [
      "What do you believe about the nature of your relationship — is there something sacred, fated, or chosen about it that you have not fully articulated to your partner?",
      "What practices, beliefs, or experiences give your life a sense of meaning or transcendence, and how much does your partner share in those?",
      "Where do your spiritual or philosophical lives diverge, and how have you navigated that divergence — or avoided it?",
      "What would a shared spiritual or meaning-making practice look like for your marriage — even something small and consistent?"
    ],
    reflection: "The couple who touches the sacred together — in whatever form that takes — builds a foundation that outlasts every season."
  },
  {
    id: 528, day: 72, program: 'marriage-strengthening',
    title: "Close Without Reason",
    emoji: "🤝",
    tagline: "Non-sexual physical closeness is one of the most underrated forms of love.",
    body: "The body speaks a language that words cannot always reach. Non-sexual physical touch — holding hands, resting together, a hand on a shoulder, slow intentional contact — communicates safety, belonging, and presence in a way that is irreplaceable. Many couples lose this language over time, reserving physical closeness only for sexual moments. Today you reclaim it.",
    duration: "25 min",
    prompts: [
      "How much non-sexual physical affection do you currently exchange in a typical day? How does that compare to what you want?",
      "What forms of physical touch feel most nourishing and connecting to you — not arousing, simply loving?",
      "When did you last spend extended time in physical proximity with no agenda — just being close?",
      "Tonight: choose one form of non-sexual physical closeness and give it your full, unhurried presence."
    ],
    reflection: "The couple who stays physically close without agenda is telling each other — constantly, without words — 'I want to be near you. That is enough.'"
  },
  {
    id: 529, day: 73, program: 'marriage-strengthening',
    title: "Safe Enough to Be Afraid",
    emoji: "🫶",
    tagline: "True intimacy means your partner knows your fears — and holds them carefully.",
    body: "Fear is one of the most private territories of the human heart. We learn early to hide it, manage it, or convert it into something more socially acceptable. But when two people can share their fears — truly share them, not just mention them — a different kind of safety takes root. Today you offer each other access to the places that still feel uncertain, vulnerable, and real.",
    duration: "30 min",
    prompts: [
      "What are you most afraid of right now — in your life, your work, your future — that your partner may not fully know?",
      "What do you fear inside the marriage itself — not as a warning, but as vulnerability you trust your partner to hold?",
      "How do you typically respond when your partner expresses fear? Is that the response they actually need from you?",
      "What would change between you if fear was something you could always bring to each other first?"
    ],
    reflection: "The relationship where both people can say 'I am afraid' and be met with presence instead of solutions is a relationship built on the rarest kind of love."
  },
  {
    id: 530, day: 74, program: 'marriage-strengthening',
    title: "The Dreams You Keep Private",
    emoji: "🌠",
    tagline: "Sharing a dream with your partner is one of the most intimate acts there is.",
    body: "Some dreams feel too fragile, too large, or too uncertain to say out loud — especially to the person whose response matters most. But a partner who does not know your dreams cannot help you carry them, cannot celebrate them with you, and cannot share in the life that is being quietly imagined. Today you speak the dreams you have been holding privately.",
    duration: "30 min",
    prompts: [
      "What is a dream you have for your own life — career, creative, personal — that you have not fully shared with your partner?",
      "What holds you back from sharing that dream? Is it fear of judgment, fear of disappointment, fear of it becoming real?",
      "What dream do you have for your marriage itself — something you have not said because it felt too big, too vulnerable, or too specific?",
      "Partner: receive the dream that is shared today. What does it feel like to be let into that private place?"
    ],
    reflection: "The partner who knows your dreams becomes your witness, your advocate, and the person who will one day say 'I knew this was coming for you.'"
  },
  {
    id: 531, day: 75, program: 'marriage-strengthening',
    title: "Erotic Knowing",
    emoji: "🔥",
    tagline: "Desire deepens when your partner truly knows what moves you.",
    body: "Erotic intimacy is not just about physical technique — it is about being truly known in your desire. Many couples have never had a full, unhurried, non-pressured conversation about what they genuinely want, what they fantasize about, what makes them feel desired, and what has been missing. That conversation is not awkward when approached from a place of curiosity and safety. It is one of the most connecting exchanges two people can have.",
    duration: "35 min",
    prompts: [
      "What makes you feel most desired by your partner — and how often does that actually happen?",
      "What is something you have wanted to explore or ask for sexually that you have never brought up? What has stopped you?",
      "What does your ideal sexual experience with your partner feel like — emotionally, not just physically?",
      "What would it mean for your erotic life if both of you felt completely safe to ask for exactly what you want?"
    ],
    reflection: "The couple with an honest erotic conversation between them is never bored, never distant, and never left wondering if they are truly wanted."
  },
  {
    id: 532, day: 76, program: 'marriage-strengthening',
    title: "After the Moment",
    emoji: "🌙",
    tagline: "What you say and do after sex reveals as much about your intimacy as the sex itself.",
    body: "The moments after sex are a portal. Neurologically, emotionally, and relationally, there is an openness that exists in the aftermath of physical intimacy that rarely exists at other times. Yet many couples quickly move on — to sleep, to phones, to the next task. What if you chose to stay in that portal? What if after-sex became a ritual of connection, conversation, and closeness you actually looked forward to?",
    duration: "25 min",
    prompts: [
      "What do you typically do in the minutes and hours after sex? Is it what you actually want, or is it habit?",
      "What do you most need from your partner in the time right after physical intimacy?",
      "Have you ever had an after-sex conversation that surprised you in its depth or tenderness? What was it like?",
      "What could after-sex become for your marriage — as a ritual, as a practice, as a consistent act of closeness?"
    ],
    reflection: "Couples who linger after love-making are quietly doing some of the most important relational work of all."
  },
  {
    id: 533, day: 77, program: 'marriage-strengthening',
    title: "Knowing This Body",
    emoji: "💫",
    tagline: "To know your partner's body — truly know it — is an act of ongoing devotion.",
    body: "Your partner's body changes. It holds history, tension, tenderness, and places it loves to be touched in ways that shift over time. The partner who stays curious about the body of their beloved — who asks, explores, and pays attention without assuming — is the partner who never grows predictable or distant. Physical knowing is not a destination. It is an ongoing practice of loving attention.",
    duration: "30 min",
    prompts: [
      "When did you last ask your partner how their body is feeling — not as a health check, but as a form of care and intimacy?",
      "Are there places your partner loves to be touched that you could be more intentional and consistent about?",
      "Has your partner's body changed in ways you have not fully acknowledged or explored with curiosity and tenderness?",
      "Tonight: touch your partner with the energy of someone discovering something precious and new. Go slowly. Pay attention."
    ],
    reflection: "The lover who stays curious about their partner's body is the lover who never stops being present to the person they chose."
  },
  {
    id: 534, day: 78, program: 'marriage-strengthening',
    title: "Presence Over Performance",
    emoji: "🎯",
    tagline: "Intimacy thrives not when you perform love, but when you are simply, fully there.",
    body: "Performance in intimacy is insidious — it shows up as trying to say the right thing, doing what you think is expected, going through the motions in the right order. Presence is different. Presence is actually being here: noticing, responding, meeting your partner where they are rather than delivering a version of intimacy you have scripted. Today you examine the difference and choose presence.",
    duration: "25 min",
    prompts: [
      "In what areas of your intimate life do you feel like you are performing rather than truly present — sexually, emotionally, or conversationally?",
      "What would it look like to bring complete, unscripted presence to your partner today — in a conversation, a meal, a touch?",
      "What gets in the way of your presence most often? Is it anxiety, distraction, habit, or something else?",
      "Partner: when do you most feel your partner is completely present with you? What does that feel like?"
    ],
    reflection: "Your partner does not need your best performance. They need your actual presence — and those are not the same thing."
  },
  {
    id: 535, day: 79, program: 'marriage-strengthening',
    title: "The Intimacy You've Never Had",
    emoji: "🗝️",
    tagline: "There are forms of closeness you have not yet experienced together — and they are waiting.",
    body: "Most couples develop a style of intimacy early in the relationship and never significantly expand it. The result is genuine warmth but also genuine limitation — a sense that something more is available but never quite reached. Today you name the forms of intimacy you have always wanted but never quite had, and you begin to imagine what it would look like to actually claim them.",
    duration: "35 min",
    prompts: [
      "What form of intimacy — emotional, intellectual, spiritual, physical, or creative — do you feel has been mostly absent from your marriage that you genuinely want?",
      "What has prevented that form of intimacy from developing? Has it been circumstance, habit, fear, or something unspoken?",
      "Is there a type of closeness you experienced in another context — a friendship, a previous season of life, a moment of grace — that you want to bring into your marriage?",
      "Together: choose one form of intimacy to deliberately pursue over the next two weeks. Name it. Commit to it. Plan for it."
    ],
    reflection: "The intimacy you have never had is not out of reach. It is simply waiting for the moment you decide it belongs to you."
  },
  {
    id: 536, day: 80, program: 'marriage-strengthening',
    title: "What Blocks the Closeness",
    emoji: "🧱",
    tagline: "Understanding your intimacy blockers is the beginning of dismantling them.",
    body: "Intimacy blockers are the quiet patterns that create distance even when both partners want closeness. They include defensiveness, emotional shutdown, humor used to deflect, busyness as avoidance, and the accumulated weight of small unspoken things. You cannot remove what you have not named. Today you name yours, without judgment, without blame, with only the intention of becoming freer.",
    duration: "30 min",
    prompts: [
      "What is your personal intimacy blocker — the pattern you fall into when closeness starts to feel like too much or you feel vulnerable?",
      "What is the blocker you observe in your partner? How do you typically respond to it?",
      "When does the blocking pattern most often activate — is it triggered by stress, conflict, tiredness, a specific dynamic?",
      "What is one small shift each of you could make to interrupt the blocker pattern the next time it appears?"
    ],
    reflection: "Naming what blocks you is not a criticism of who you are. It is a declaration that you want more than the limitation."
  },
  {
    id: 537, day: 81, program: 'marriage-strengthening',
    title: "Intimacy Rituals",
    emoji: "🕯️",
    tagline: "The couples with the deepest intimacy build consistent rituals that protect and feed it.",
    body: "Rituals are not grand ceremonies — they are small, repeated acts that carry meaning. A morning question. A particular way of greeting each other. A nightly check-in. A weekly practice of intentional closeness. Intimacy rituals are the infrastructure beneath the feeling. The couples who feel consistently connected are almost always the ones who have built consistent practices that make connection inevitable.",
    duration: "30 min",
    prompts: [
      "What intimacy rituals, if any, already exist in your marriage? Which ones have held? Which ones have faded?",
      "What is the intimacy ritual your marriage most needs right now — daily, weekly, or seasonal?",
      "What conditions do your best rituals require — protected time, specific mood, absence of phones, a particular setting?",
      "Together: design one new intimacy ritual you will begin this week. Make it specific, realistic, and genuinely nourishing."
    ],
    reflection: "The marriage sustained by ritual is not sustained by feeling. It is sustained by choice — which is a far more reliable foundation."
  },
  {
    id: 538, day: 82, program: 'marriage-strengthening',
    title: "Your Partner's Inner World",
    emoji: "🌊",
    tagline: "The person you married has an inner world vast enough to spend a lifetime exploring.",
    body: "Familiarity is one of the great hazards of long-term love. We begin to assume we know our partner — their opinions, their preferences, their patterns — and stop asking. But human beings are not static. The inner world of your partner is always shifting, always growing, always holding something new. The marriage that stays curious about that inner world is the marriage that never gets old.",
    duration: "25 min",
    prompts: [
      "What aspect of your partner's inner world do you feel you understand least — and are most curious about?",
      "What has your partner been thinking about, wrestling with, or quietly excited by lately that you have not fully explored?",
      "When did you last ask your partner a question that genuinely surprised them — that showed you were paying close attention?",
      "Ask your partner today: 'What is something about your inner world right now that you want me to know?'"
    ],
    reflection: "The partner who keeps asking is the partner who never stops discovering. Curiosity is love in action."
  },
  {
    id: 539, day: 83, program: 'marriage-strengthening',
    title: "Vulnerable Firsts",
    emoji: "🌱",
    tagline: "There is always a next layer of vulnerability available — if you are willing to go there.",
    body: "Vulnerability is not a one-time act. It is a capacity that expands the more it is exercised. Even in long, loving marriages, there are layers that have never been reached — stories never told, feelings never named, aspects of self never fully shown. Today you identify the next layer and choose to step toward it rather than past it.",
    duration: "30 min",
    prompts: [
      "What is a story from your past — your childhood, your young adulthood, a formative experience — that your partner knows only partially or not at all?",
      "What part of yourself do you still feel slightly guarded about with your partner, even in this relationship?",
      "When was the last time you were vulnerable with your partner in a way that felt genuinely new or stretching?",
      "What would it mean to take one step further into vulnerability today — not performing it, but actually moving toward it?"
    ],
    reflection: "Every layer of vulnerability you offer your partner is an invitation for them to love a version of you they have never yet met."
  },
  {
    id: 540, day: 84, program: 'marriage-strengthening',
    title: "Touch as Language",
    emoji: "🤲",
    tagline: "When you touch your partner with full intention, you are saying something words cannot.",
    body: "Touch is the oldest language. Before words, before gestures, there was contact — the primal communication of presence, safety, and belonging. In a long-term relationship, touch often becomes functional or habitual, losing the intentionality that made it feel like a language. Today you practice returning intention to your touch and receiving your partner's touch with the full awareness it deserves.",
    duration: "25 min",
    prompts: [
      "What does intentional touch communicate to you that nothing else can?",
      "When your partner touches you in a way that lands — really lands — what is happening in that moment that makes it different?",
      "How much of your daily physical contact with your partner is intentional versus automatic or perfunctory?",
      "Choose one touch today that you will bring complete presence and intention to. Describe it afterward: what happened?"
    ],
    reflection: "Touch delivered with full presence is not a small thing. It is one of the most powerful ways two people can remind each other: I am here. I choose you."
  },
  {
    id: 541, day: 85, program: 'marriage-strengthening',
    title: "The Weight You Carry Alone",
    emoji: "🏋️",
    tagline: "Marriage is most powerful when both partners refuse to carry heavy things alone.",
    body: "There are burdens that couples carry silently — shame, grief, professional pressure, health fears, financial anxiety, private failures — that never quite make it into the shared space of the marriage. The instinct to protect your partner, or to avoid burdening them, or simply to not have to explain the whole weight of it, keeps these things hidden. But a partner who cannot share their weight is a partner who is slowly becoming alone inside the relationship.",
    duration: "30 min",
    prompts: [
      "What are you currently carrying alone that you have not fully brought to your partner?",
      "What stops you from sharing that weight — is it protection, pride, fear of worry, or a feeling that it is yours to solve?",
      "What would it feel like to say 'I need you to hold this with me' and actually mean it?",
      "Partner: how do you want to respond when your partner brings you their heaviest things? Is that the response you actually give?"
    ],
    reflection: "The marriage where both people can say 'this is heavy and I need you' is a marriage where neither person is ever truly alone."
  },
  {
    id: 542, day: 86, program: 'marriage-strengthening',
    title: "Desire Beyond the Body",
    emoji: "💥",
    tagline: "To be desired is to feel seen, chosen, and irreplaceable — long after the honeymoon ends.",
    body: "Desire in a long-term relationship is not merely sexual. It is the ongoing experience of being wanted — by your partner, in your full complexity, with your history and your imperfections and your particular way of being in the world. The couples who sustain desire are not the ones who have found the secret to physical chemistry. They are the ones who have kept finding reasons to choose each other.",
    duration: "30 min",
    prompts: [
      "What makes you feel most desired by your partner — not physically, but as a whole person?",
      "When do you most feel like your partner is genuinely choosing you — actively, not passively?",
      "What is one way you could communicate desire to your partner today that goes beyond the physical?",
      "What does it mean to you to be wanted — not needed, not depended on, but genuinely wanted — by the person you love?"
    ],
    reflection: "Desire is not a feeling that happens to you. It is a posture you choose — and the couple who keeps choosing it never stops being each other's most wanted."
  },
  {
    id: 543, day: 87, program: 'marriage-strengthening',
    title: "Emotional Generosity",
    emoji: "💝",
    tagline: "The most intimate couples are generous with their emotional attention in both directions.",
    body: "Emotional generosity is the practice of giving your partner more emotional presence, curiosity, and care than the bare minimum the situation demands. It is asking the follow-up question. It is staying in the conversation a few minutes longer. It is noticing the look on their face and choosing to ask about it. Emotional generosity is not dramatic. It is consistent, and it is one of the most powerful forces in a deeply intimate marriage.",
    duration: "25 min",
    prompts: [
      "What does emotional generosity look like in practice for you — what specific behaviors do you associate with it?",
      "Where in your marriage do you tend to be emotionally generous, and where do you tend to be more conserving?",
      "What would your partner say if asked: 'In what area do you most want more emotional generosity from your partner?'",
      "Choose one act of emotional generosity today — something small, specific, and given freely without expectation of return."
    ],
    reflection: "Emotional generosity is not a resource that depletes. It is a practice that expands the more it is given."
  },
  {
    id: 544, day: 88, program: 'marriage-strengthening',
    title: "When You Feel Far Away",
    emoji: "🌫️",
    tagline: "Every marriage has seasons of distance — the courageous couples learn to close them.",
    body: "Even in the best marriages, there are seasons of feeling far from each other — not in conflict, not in crisis, simply drifted. It can happen after high-stress periods, transitions, or simply the accumulation of parallel lives not quite intersecting. The couples who navigate this with grace are the ones who have learned to name the distance without blame and move toward each other with intention rather than waiting for the feeling to shift on its own.",
    duration: "30 min",
    prompts: [
      "Have you experienced a season recently where you felt slightly far from your partner? What was happening during that time?",
      "What are the early signals for you that distance is beginning to grow — before it becomes noticeable?",
      "What is your current instinct when you feel distance — do you move toward, move away, or wait for the other person to close the gap?",
      "Together: what is one practice you could build that would help you close distance quickly, before it becomes significant?"
    ],
    reflection: "Distance in marriage is not failure. It is weather. The couples who know how to move back toward each other are the ones for whom winter never truly lasts."
  },
  {
    id: 545, day: 89, program: 'marriage-strengthening',
    title: "Tenderness as Practice",
    emoji: "🌸",
    tagline: "Tenderness is not weakness — it is the highest expression of love made visible.",
    body: "Tenderness is the quality of touching someone's reality with care — in your words, in your voice, in your physical presence, in the way you hold space for their vulnerability. In relationships, tenderness is often the first thing to go when life gets hard or busy. Today you bring it back deliberately, not as a feeling you have to wait for, but as a practice you choose.",
    duration: "25 min",
    prompts: [
      "When was the last time you were genuinely tender with your partner? What did that look like?",
      "In what circumstances do you find it hardest to access tenderness — and what typically stands in the way?",
      "What would it feel like to bring tenderness to a moment today that would not typically call for it?",
      "Partner: when your partner is tender with you, what does it unlock in you? What does it communicate?"
    ],
    reflection: "The couple that keeps tenderness alive between them has kept the truest version of love alive — the version that has nothing to prove and everything to give."
  },
  {
    id: 546, day: 90, program: 'marriage-strengthening',
    title: "The Intimacy Audit",
    emoji: "📊",
    tagline: "Pause, take stock, and celebrate what your intimate life has become over these weeks.",
    body: "Ninety days into your marriage-strengthening journey, you have crossed into genuinely new territory. This is a moment to pause — not to evaluate with a grade, but to inventory with gratitude. Where is your intimacy deeper than it was? Where is there still room to grow? What have you discovered about your partner, about yourself, and about what is possible between you?",
    duration: "40 min",
    prompts: [
      "In what specific way is the emotional intimacy between you deeper or more honest than it was before this program?",
      "What is one form of closeness you have accessed in the last few weeks that was previously unavailable or unspoken?",
      "Where do you still want to go deeper — what layer of intimacy feels like the next frontier for your marriage?",
      "Together: acknowledge each other for the courage it has taken to show up for this work. Say it out loud. Mean it."
    ],
    reflection: "Ninety days of intentional intimacy is not a small thing. It is a choice, made repeatedly, to build the kind of love most people only admire from the outside."
  },
  {
    id: 547, day: 91, program: 'marriage-strengthening',
    title: "The Language of Play",
    emoji: "🎭",
    tagline: "Playfulness is intimacy without armor — and it is one of love's most essential languages.",
    body: "Play between partners is not frivolous. It is the experience of being together without agenda, without performance pressure, without the weight of adult responsibility temporarily laid aside. The couples who play together — who tease each other, make each other laugh, invent their own language of jokes and rituals — are the couples who never fully lose the joy of being together. Today you remember how to play.",
    duration: "25 min",
    prompts: [
      "What does play look like between you at your best — what specific activities, exchanges, or rituals make you both feel genuinely light?",
      "When did play most recently show up in your marriage, and what made it possible?",
      "Is there a way you used to play together that you have not done in a while? What would it take to bring it back?",
      "Tonight: do one genuinely playful thing together. Not planned, not performed — just chosen and enjoyed."
    ],
    reflection: "The couple who plays together is the couple who has not let life steal all the lightness. That lightness is not decoration. It is oxygen."
  },
  {
    id: 548, day: 92, program: 'marriage-strengthening',
    title: "Witnessed Becoming",
    emoji: "👁️",
    tagline: "One of the greatest gifts a partner can give is to truly witness who you are becoming.",
    body: "To be witnessed is to be seen — not just in the moment, but over time. Your partner has a vantage point on your growth, your evolution, your becoming that no one else possesses. They have watched you change in ways you cannot fully see from the inside. Today you invite each other into the act of witnessing — naming what you have seen unfold in each other, and receiving it with full presence.",
    duration: "30 min",
    prompts: [
      "What is the most significant way you have seen your partner grow or evolve in the time you have known them?",
      "What is something you see in your partner now — a strength, a quality, an emerging capacity — that they may not fully see in themselves?",
      "What does it feel like to be witnessed by your partner? Is there a way you want to be seen that you have not yet asked for?",
      "Together: speak your witness to each other. 'I have watched you become...' Take turns. Receive it completely."
    ],
    reflection: "To be truly witnessed by another person is one of the most sustaining experiences available to a human being. Your partner is your greatest witness. Let them do the work."
  },
  {
    id: 549, day: 93, program: 'marriage-strengthening',
    title: "The Gift of Attention",
    emoji: "🎁",
    tagline: "Your full, undivided attention is the most intimate gift you can give.",
    body: "In an era of constant distraction, the gift of your complete attention is genuinely rare and genuinely powerful. When you look at your partner with nothing pulling you away, when you listen with no rehearsal of your response, when you are simply and completely present — you are giving them something most people never receive. Today you practice radical attentiveness.",
    duration: "25 min",
    prompts: [
      "What does it feel like when your partner gives you their full, undivided attention? When does it happen most naturally?",
      "What typically competes for your attention during interactions with your partner — phones, mental preoccupation, something else?",
      "What is one conversation or exchange you could approach today with nothing but full presence — no agenda, no device, no divided focus?",
      "After practicing full attention: what did you notice about your partner that you might have missed otherwise?"
    ],
    reflection: "Full attention is not a passive act. It is an act of love — the declaration that the person in front of you is the most important thing happening right now."
  },
  {
    id: 550, day: 94, program: 'marriage-strengthening',
    title: "What Your Body Knows",
    emoji: "⚡",
    tagline: "Your body holds wisdom about your relationship that your mind has not yet caught up to.",
    body: "The body is a register of the relational environment. It knows when you feel safe, when you feel guarded, when you are truly resting or simply pausing. Body awareness in relationship means noticing what your physical experience tells you about the quality of your connection — when you expand and when you contract, when you lean in and when you pull back. Today you bring that wisdom into the conversation.",
    duration: "25 min",
    prompts: [
      "When you are with your partner and the connection feels truly good, what happens in your body? Where do you feel it?",
      "When you are with your partner and something is off — even slightly — what physical signals do you notice first?",
      "Is there a pattern you have observed between your body's state and the quality of intimacy in your marriage?",
      "Tonight: check in with your body after spending time together. What is your body telling you about how this time felt?"
    ],
    reflection: "Your body does not lie. It has been tracking the quality of your connection far longer and more accurately than your thoughts have."
  },
  {
    id: 551, day: 95, program: 'marriage-strengthening',
    title: "Gratitude That Goes Deep",
    emoji: "🙏",
    tagline: "Deep gratitude is not thankfulness for what your partner does — it is awe at who they are.",
    body: "Surface gratitude is transactional: thank you for doing the dishes, for picking up the kids, for handling the billing. Deep gratitude is different. It is the experience of being genuinely moved by the existence of your partner — their specific character, their irreplaceable presence in your life, the fact that of all the possible paths your life could have taken, it took this one and landed here, with them. Today you practice the deeper kind.",
    duration: "30 min",
    prompts: [
      "Name three qualities of your partner's character — not behaviors, but who they are — for which you are genuinely, deeply grateful.",
      "What would your life have been like without this person in it? Sit with that for a moment before answering.",
      "What is something about your partner that you have never quite expressed gratitude for, but should?",
      "Speak your deepest gratitude to your partner today — not a list, but a true expression of what their existence means to you."
    ],
    reflection: "The partner who can look at their beloved and feel genuine awe at their existence has never lost the beginning of love. That awe is worth protecting."
  },
  {
    id: 552, day: 96, program: 'marriage-strengthening',
    title: "What Love Has Made You",
    emoji: "🦋",
    tagline: "Love changes us — and the partner who sees that change is the most intimate witness of all.",
    body: "You are not the same person you were before this relationship. Love shapes us — it draws out capacities we did not know we had, confronts us with patterns we would rather avoid, and offers us a consistent invitation to become more. Today you reflect on what this particular love, with this particular person, has made of you — and what you are still in the process of becoming.",
    duration: "30 min",
    prompts: [
      "In what specific ways has this relationship made you a better or more complete version of yourself?",
      "What capacity — patience, courage, vulnerability, generosity — has this love demanded of you and helped you develop?",
      "Is there something this love has asked of you that you have not yet fully given? What is that, and why?",
      "What do you want this love to continue making of you — who are you still becoming inside this relationship?"
    ],
    reflection: "You are your partner's co-author, and they are yours. The person you are becoming is partly their gift to you. That is one of the most profound things love does."
  },
  {
    id: 553, day: 97, program: 'marriage-strengthening',
    title: "Intimacy Phase Completion",
    emoji: "🌟",
    tagline: "Thirty days of intimacy work has expanded what is possible between you — name it, claim it, carry it forward.",
    body: "You have spent thirty days exploring the depths of intimacy — emotional, intellectual, spiritual, physical, and beyond. This is not a graduation from intimacy but a graduation into it. The capacities you have built, the conversations you have had, the vulnerability you have practiced — these are now part of the infrastructure of your marriage. Before stepping into the next phase, you pause to mark what has been built.",
    duration: "45 min",
    prompts: [
      "What is the single most significant intimacy breakthrough you have experienced in the last thirty days? Be specific.",
      "What form of closeness is now available in your marriage that was not available a month ago?",
      "What intimacy practice from the last thirty days do you most want to carry forward permanently?",
      "Together: name three ways your marriage is genuinely more intimate today than it was on Day 68. Celebrate that. It is real."
    ],
    reflection: "Thirty days of choosing depth over distance is thirty days of building the kind of marriage that sustains — not just through crisis, but through the long, ordinary, extraordinary act of living together."
  },
  {
    id: 554, day: 98, program: 'marriage-strengthening',
    title: "Money and Marriage",
    emoji: "💰",
    tagline: "Your relationship with money is a mirror of your values, your fears, and your future together.",
    body: "Finances are one of the most powerful and most avoided territories in marriage. Not because money itself is dangerous, but because conversations about money are really conversations about security, power, freedom, sacrifice, and what we believe we deserve. Couples who can talk about money openly and well are couples who have found a way into one of the most intimate rooms in their shared life.",
    duration: "35 min",
    prompts: [
      "What is your earliest money memory, and what belief about money did it install in you that still operates today?",
      "Where do you and your partner most significantly differ in your relationship to money — spending, saving, risk, security?",
      "What money conversation have you been avoiding or circling around that most needs to happen?",
      "What does financial partnership look like at its best in your marriage — what are you building toward together?"
    ],
    reflection: "The couple who can talk about money without it becoming a battle has done one of the hardest things in partnership. That skill is worth developing now, before it is urgent."
  },
  {
    id: 555, day: 99, program: 'marriage-strengthening',
    title: "Shared Goals, Shared Stakes",
    emoji: "🎯",
    tagline: "A marriage without shared goals is a parallel life. A marriage with them is a shared expedition.",
    body: "Shared goals are the architecture of a shared future. When both partners are oriented toward something they are building together — financially, personally, relationally, spiritually — the marriage gains momentum, direction, and a common language. Today you examine what you are actually building together and whether the goals are truly shared or simply coexisting.",
    duration: "30 min",
    prompts: [
      "What are the three most important goals you and your partner are currently working toward together?",
      "Are those goals genuinely shared — meaning both of you feel equally invested, equally clear, and equally aligned — or are some primarily one partner's goals that the other has agreed to support?",
      "What is a goal you personally want to achieve that you have not yet made a shared goal with your partner?",
      "Together: choose one shared goal to clarify, align on, and take one concrete next step toward this week."
    ],
    reflection: "Shared goals do not just build the future — they build the partnership. The couple that is aiming at something together is always a couple in motion."
  },
  {
    id: 556, day: 100, program: 'marriage-strengthening',
    title: "100 Days",
    emoji: "🏆",
    tagline: "One hundred days of choosing your marriage on purpose. That is extraordinary.",
    body: "Today marks one hundred days of intentional, consistent, courageous work on your marriage. That is not a small number. It represents one hundred mornings of decision, one hundred days of showing up, one hundred incremental investments in the future you are building together. This is a day for celebration — full, genuine, unhurried celebration of who you are and what you have built.",
    duration: "60 min",
    prompts: [
      "Each partner: what is the most important thing you have learned about yourself over these one hundred days?",
      "Each partner: what is the most important thing you have learned about your partner that you did not know before?",
      "Together: describe in one paragraph the marriage you are building — not what you hope for, but what you are actively creating.",
      "Celebrate. Dinner, a toast, a letter, a day together — something that marks this milestone as real. What will you do?"
    ],
    reflection: "One hundred days of intentional marriage is one hundred days of becoming the couple most people admire but few actually build. You are building it. Keep going."
  },
  {
    id: 557, day: 101, program: 'marriage-strengthening',
    title: "The Big Dreams",
    emoji: "🚀",
    tagline: "What do you want your life together to look like at its fullest, most extraordinary expression?",
    body: "Big dreams in marriage are not irresponsible fantasies. They are navigational instruments. When you can look at each other and say 'this is what we are building toward — this specific, vivid, aligned vision' — every daily choice is oriented by something larger than the present moment. The couple who dreams big together and then works backward from that dream into daily life has found one of the most powerful drivers of shared energy available.",
    duration: "35 min",
    prompts: [
      "If you could describe the life you and your partner are building together at its absolute fullest — in five years, in twenty — what does it look like?",
      "What is the one big dream you have not yet given permission to be a shared dream?",
      "What is standing between where you are now and that larger vision — and which of those obstacles are real versus assumed?",
      "What is one decision you could make this year that would move you meaningfully toward your biggest shared dream?"
    ],
    reflection: "Dreams do not build themselves. But the couple who dreams clearly and works together toward that dream is astonishing in what they can create."
  },
  {
    id: 558, day: 102, program: 'marriage-strengthening',
    title: "Home as Sanctuary",
    emoji: "🏡",
    tagline: "The home you create together is a physical expression of the marriage you are building.",
    body: "Your home is not merely a container for your life. It is a reflection of your values, your aesthetics, your level of care for each other, and the quality of the environment you have decided to inhabit together. The couple who intentionally creates their home as a sanctuary — a place of beauty, rest, safety, and belonging — is the couple that has something to return to no matter what the world brings.",
    duration: "30 min",
    prompts: [
      "What does your home currently feel like to each of you — is it a sanctuary, a stressor, a default, or something else?",
      "What is one aspect of your shared physical environment that you could improve to make it feel more like a true home?",
      "What does your ideal home feel like — not in terms of size or value, but in terms of atmosphere, beauty, and daily experience?",
      "Together: choose one concrete action this week to make your home feel more like the sanctuary you want it to be."
    ],
    reflection: "Home is what you make it. And the couple who makes their home a place they genuinely love being is the couple that never stops wanting to come back."
  },
  {
    id: 559, day: 103, program: 'marriage-strengthening',
    title: "The Labor of Love",
    emoji: "⚖️",
    tagline: "Fairness in domestic life is not about equality — it is about mutual dignity and genuine partnership.",
    body: "Division of labor is one of the most fertile grounds for resentment in marriage — and also one of the most available opportunities for genuine partnership. The question is not who does more, but whether both people feel seen, valued, and fairly treated in how the work of shared life is distributed. Today you have a direct, generous, and honest conversation about this.",
    duration: "35 min",
    prompts: [
      "What areas of the shared domestic and logistical load do you feel are well-distributed in your marriage?",
      "What areas feel unbalanced, and have you communicated that clearly and recently?",
      "What invisible labor do you carry — planning, worrying, tracking, managing — that your partner may not fully see?",
      "Together: redesign one aspect of your division of labor so that both of you feel more genuinely supported. Make it specific."
    ],
    reflection: "The couple that shares the weight of daily life with genuine fairness and mutual gratitude is building a partnership, not just a household."
  },
  {
    id: 560, day: 104, program: 'marriage-strengthening',
    title: "Parenting as Partners",
    emoji: "👨‍👩‍👧",
    tagline: "For couples who parent: your partnership is the foundation your children are standing on.",
    body: "Parenting alignment is one of the most consequential and most overlooked areas of shared life. When partners are genuinely aligned in their values, their approach, and their vision for the children they are raising, the family operates with a coherence and security that children feel profoundly. When there is misalignment — in discipline, in values, in expectations — it creates both marital strain and confusion for children. Today you examine where you are aligned and where you need to get more aligned.",
    duration: "35 min",
    prompts: [
      "What are the parenting values you and your partner most deeply share? Where do you feel genuinely unified?",
      "Where do you differ most significantly in your parenting approach, and how do those differences play out in daily life?",
      "What conversation about parenting — values, strategy, vision for your children — have you been avoiding?",
      "What does it mean to be parenting partners, not just co-parents? How does that distinction change how you operate?"
    ],
    reflection: "The couple who parents from genuine partnership is not just raising children well — they are modeling for their children what love, collaboration, and commitment look like."
  },
  {
    id: 561, day: 105, program: 'marriage-strengthening',
    title: "Ambition and Partnership",
    emoji: "📈",
    tagline: "The greatest partnership lifts both people toward their fullest professional and personal becoming.",
    body: "Career ambition and marriage do not have to be in tension. The most extraordinary couples are each other's greatest professional advocates — championing each other's goals, creating conditions for each other's success, and refusing to allow the success of one to come at the expense of the other. Today you examine how ambition is operating in your marriage and how partnership can amplify it.",
    duration: "30 min",
    prompts: [
      "What are your most significant career or professional ambitions right now, and how much does your partner know about them?",
      "In what ways does your partnership currently support your professional growth, and in what ways does it unintentionally limit it?",
      "What would it mean for your marriage to be a launchpad for both of your ambitions simultaneously?",
      "Together: name one way each of you will actively invest in the other's professional growth in the next month."
    ],
    reflection: "The couple that champions each other's ambitions builds a marriage where both people are growing — and where growth never has to feel like a threat."
  },
  {
    id: 562, day: 106, program: 'marriage-strengthening',
    title: "Generational Legacy",
    emoji: "🌳",
    tagline: "What you are building extends far beyond the two of you — and that is worth naming.",
    body: "Generational legacy is the long view of marriage. It is asking: what are we building that will outlast us? What patterns, values, resources, and stories are we passing forward — to our children, to their children, to the community we inhabit? The couple who holds this perspective is not burdened by it but energized by it. They are building something that matters at a scale that few people allow themselves to imagine.",
    duration: "35 min",
    prompts: [
      "What is the legacy — financial, relational, spiritual, cultural — that you most want your marriage to pass forward?",
      "What patterns from your families of origin do you most want to break, and which do you most want to carry forward?",
      "What would it look like to build generational wealth — not just financial, but emotional, relational, and cultural wealth?",
      "Together: write a one-paragraph statement of the legacy your marriage intends to build. Read it to each other."
    ],
    reflection: "The couple who builds with legacy in mind is building with the most expansive possible love — a love that extends to people they have not yet met."
  },
  {
    id: 563, day: 107, program: 'marriage-strengthening',
    title: "Your Circle of Friends",
    emoji: "👥",
    tagline: "The community you cultivate as a couple is a reflection of the marriage you want to inhabit.",
    body: "The social world a couple builds together matters more than most people acknowledge. The friendships you cultivate, the community you participate in, the couples you choose to be close to — all of these shape the environment of your marriage. Couples whose friendships affirm, challenge, and celebrate their relationship are couples who are invested in by their community. Today you examine the social world of your marriage.",
    duration: "30 min",
    prompts: [
      "What does your social world as a couple currently look like — who are the people who know you as a pair and genuinely invest in your marriage?",
      "Are there friendships or communities that drain your marriage — that introduce energy, values, or dynamics that are not life-giving?",
      "What kind of community do you want around your marriage — what would those people value, offer, and model?",
      "Together: name one relationship or community you want to invest in more intentionally as a couple in the coming months."
    ],
    reflection: "You are the average of the communities you inhabit. Choose the ones that make your marriage better."
  },
  {
    id: 564, day: 108, program: 'marriage-strengthening',
    title: "Family of Origin, Family of Choice",
    emoji: "🏛️",
    tagline: "You came from families that shaped you. The family you are building is your most sovereign creation.",
    body: "Every person carries their family of origin into their marriage — the patterns, the wounds, the gifts, the unconscious scripts about what love looks like and how families operate. The work of marriage includes the ongoing process of choosing which of those inherited patterns to keep, which to heal, and which to transcend. Today you examine where your families of origin are shaping your marriage — for good and otherwise.",
    duration: "35 min",
    prompts: [
      "What is the greatest gift your family of origin gave you that you are actively bringing into your marriage?",
      "What pattern from your family of origin do you still catch operating in your marriage, even when you do not want it to?",
      "Where do your respective families of origin create the most tension or complexity in your marriage?",
      "Together: name the family culture you are building — what makes your family of choice distinctly yours, not simply an inheritance?"
    ],
    reflection: "You are not obligated to repeat what was modeled for you. You are free to build the family you actually want — and that freedom is one of the greatest gifts of intentional marriage."
  },
  {
    id: 565, day: 109, program: 'marriage-strengthening',
    title: "Shared Values, Shared Life",
    emoji: "🧭",
    tagline: "A marriage built on shared values is a marriage with a compass that never loses north.",
    body: "Values are the invisible architecture of a shared life. When two people know what they most deeply believe and find that it aligns — even imperfectly, even partially — they have found the most durable foundation for everything else they build together. When values are misaligned or unexamined, every decision becomes a potential battleground. Today you name and align the values that are building your life.",
    duration: "30 min",
    prompts: [
      "What are the five values you most want to define and guide your shared life — not aspirationally, but as operating principles?",
      "Where do your personal values most naturally align with your partner's? Where do they differ?",
      "Is there a decision or direction in your life right now that feels misaligned with your values? What is needed to bring it into alignment?",
      "Together: write your marriage's value statement — five words or phrases that describe what you stand for as a couple."
    ],
    reflection: "The couple that knows what they value never has to guess which direction to go. Their values are their compass, their filter, and their permission."
  },
  {
    id: 566, day: 110, program: 'marriage-strengthening',
    title: "The Financial Future",
    emoji: "📊",
    tagline: "Wealth is not just accumulated — it is intentionally built by couples who decide to build it.",
    body: "Financial partnership in marriage goes beyond managing current income and expenses. It includes the long view: investment, asset building, estate planning, and the intentional construction of financial security that extends beyond the couple's own lifetime. Many couples never have this conversation because it feels either too large or too far away. But the couples who have it early and consistently are the couples who actually arrive at the future they imagined.",
    duration: "35 min",
    prompts: [
      "What does financial freedom look like to you — specifically, concretely, in terms of what your daily life would feel and look like?",
      "What are the biggest financial decisions facing your marriage in the next three to five years?",
      "What is one area of your finances where you know you need to do something different but have not yet acted?",
      "Together: name your one most important financial goal for the next twelve months and the specific steps you will take to reach it."
    ],
    reflection: "Financial security is not luck. It is the accumulated result of thousands of small decisions made by people who decided to take their future seriously. You are those people."
  },
  {
    id: 567, day: 111, program: 'marriage-strengthening',
    title: "Friendship Inside the Marriage",
    emoji: "🤗",
    tagline: "The best marriages are built on a foundation of genuine friendship — not despite it, but because of it.",
    body: "The most enduring marriages are, at their core, deep friendships. Not the romantic Hollywood version of love that runs on passion alone, but the quieter, more sustainable version where two people genuinely like each other, enjoy each other's company, and choose to spend time together because it is one of the best uses of their time. Today you examine and invest in the friendship inside your marriage.",
    duration: "25 min",
    prompts: [
      "What do you genuinely enjoy doing with your partner — not as a couple's activity, but simply as two people who like each other?",
      "How often do you experience your partner as your friend first, rather than your spouse, co-parent, or financial partner?",
      "What is something you and your partner used to do together as friends early in the relationship that you have stopped doing?",
      "This week: plan one activity that is purely about enjoying each other as friends. Nothing therapeutic. Nothing productive. Just fun."
    ],
    reflection: "The couple who is also genuinely friends is the couple who will still have something to talk about when everything else changes."
  },
  {
    id: 568, day: 112, program: 'marriage-strengthening',
    title: "Rest Together",
    emoji: "🌴",
    tagline: "The couple who rests well together recovers together — and that is a form of shared life mastery.",
    body: "Rest is not merely the absence of activity. For couples, shared rest is a practice — the art of slowing down together, releasing the productivity mandate, and simply inhabiting the life you have built without constantly building more. Many couples have never genuinely rested together. They have vacationed together, scheduled leisure, and managed downtime. But true rest — unscheduled, unhurried, mutually restorative — is rarer and more valuable than either realizes.",
    duration: "25 min",
    prompts: [
      "What does genuine rest feel like to you — not vacation planning, not productive leisure, but true restoration?",
      "Does your partner know what rest looks like for you? Do their needs for rest align with yours or differ significantly?",
      "When was the last time you rested together — actually rested — and what made it possible?",
      "Together: plan one period of genuine, unscheduled rest in the next two weeks. Make it real. Protect it."
    ],
    reflection: "The couple who rests together is building a marriage that can sustain the long haul. Rest is not a reward for hard work. It is part of the work."
  },
  {
    id: 569, day: 113, program: 'marriage-strengthening',
    title: "The Home You Want to Create",
    emoji: "🖼️",
    tagline: "Vision for your domestic life is not trivial — it is one of the most intimate conversations you can have.",
    body: "Beyond the practical aspects of home management lies a deeper conversation: what kind of daily life do you actually want to inhabit together? What does your ideal Tuesday feel like? What rhythms, routines, aesthetics, and atmospheres compose the everyday experience of your shared life at its best? Couples who can articulate and build toward that vision are couples who stop settling for the default and start inhabiting the intentional.",
    duration: "30 min",
    prompts: [
      "Describe your ideal ordinary day together — from morning to evening. What does it feel like, look like, and include?",
      "What aspect of your current daily life most diverges from that ideal? What would it take to close that gap?",
      "What is one domestic rhythm or routine you have always wanted but never quite established?",
      "Together: choose one element of your ideal daily life and begin building it this week — even in a small, initial form."
    ],
    reflection: "You do not have to wait for the perfect circumstances to begin living the life you actually want. You can start building it now, in the life you already have."
  },
  {
    id: 570, day: 114, program: 'marriage-strengthening',
    title: "Long-Term Wealth Mindset",
    emoji: "💎",
    tagline: "Wealthy couples think decades ahead — and build today's choices accordingly.",
    body: "Long-term wealth is not simply about investment accounts. It is a mindset — a way of making decisions today that honors the person you will be in twenty or thirty years. It is the discipline of delayed gratification in service of a richer future. It is the capacity to hold both present enjoyment and future security without defaulting entirely to one. Today you align on what long-term wealth means for your marriage and how your current choices do or do not reflect that.",
    duration: "35 min",
    prompts: [
      "What does long-term wealth mean to you — financially, but also in terms of time freedom, relationships, and legacy?",
      "How do your daily spending and saving habits reflect — or fail to reflect — the long-term future you say you want?",
      "What is one financial pattern in your marriage that you want to change in service of a richer long-term future?",
      "Together: write down three wealth-building actions you will take in the next ninety days. Assign responsibility and timeline."
    ],
    reflection: "The couple who makes today's choices with tomorrow's freedom in mind is the couple who will actually arrive at a future they love."
  },
  {
    id: 571, day: 115, program: 'marriage-strengthening',
    title: "Your Community Legacy",
    emoji: "🌍",
    tagline: "The greatest marriages give something back — to the community, the culture, and the world.",
    body: "Beyond your home, your finances, and your family, there is the broader world you inhabit and influence as a couple. What role does your marriage play in your community? What does your partnership give back — in time, talent, resources, wisdom, example? The couple with a sense of community purpose is the couple who has found meaning that extends beyond themselves, and that meaning becomes one of the most powerful sources of marital energy.",
    duration: "30 min",
    prompts: [
      "What is the community — local, cultural, professional, spiritual — that your marriage most genuinely wants to serve or invest in?",
      "What do you as a couple have to offer — skills, resources, time, wisdom, platform — that you are not yet fully giving?",
      "What would it look like for your marriage to have a clear community mission — something you are building together beyond your household?",
      "Together: name one way your marriage will contribute to something larger than itself in the next six months."
    ],
    reflection: "The couple who gives back is the couple who has understood that love, taken seriously, always overflows beyond the two people practicing it."
  },
  {
    id: 572, day: 116, program: 'marriage-strengthening',
    title: "Navigating Conflict in Shared Life",
    emoji: "🌀",
    tagline: "The conflicts that arise in building a shared life are not obstacles — they are the work.",
    body: "When two people are genuinely building something together — financially, domestically, professionally, parentally — conflict is not a sign that something is wrong. It is a sign that two real people with real stakes are in actual partnership. The question is not whether you will have conflict about the shared life you are building. It is whether you have the skills and the safety to navigate those conflicts in ways that make the marriage stronger rather than eroding it.",
    duration: "30 min",
    prompts: [
      "What is the recurring conflict in your shared life building that never quite gets resolved — and what is it really about?",
      "What is the underlying need or value on each side of that conflict that is not yet being honored?",
      "What would it look like to approach that conflict as partners solving a shared problem rather than opponents defending positions?",
      "Together: choose one recurring conflict and attempt a genuinely new approach to it this week."
    ],
    reflection: "Every conflict you navigate well is a deposit into the account of trust and partnership. The couple who fights well together builds better together."
  },
  {
    id: 573, day: 117, program: 'marriage-strengthening',
    title: "What We Are Building",
    emoji: "🏗️",
    tagline: "The clearest couples can describe in vivid detail exactly what they are building together.",
    body: "Clarity about what you are building is one of the most powerful things a couple can possess. Not vague hope, not general goodwill, but a specific, vivid, aligned vision for the marriage, the family, the financial life, the community impact, and the daily experience you are constructing together. Today you bring all the threads of this shared life building phase into a unified picture.",
    duration: "40 min",
    prompts: [
      "If you described your marriage and shared life in five years at its fullest expression, what does that description include?",
      "What are the three most important things you are building together right now — and are they truly aligned, or are they running on parallel tracks?",
      "What would you need to stop, start, or change to bring your daily actions into greater alignment with the shared life you are building?",
      "Together: write a 'Building Statement' for your marriage — one paragraph describing what you are actively, intentionally constructing together."
    ],
    reflection: "The couple with a clear building statement is the couple who makes decisions faster, fights less about priorities, and arrives at their future with far less regret."
  },
  {
    id: 574, day: 118, program: 'marriage-strengthening',
    title: "Protecting the Partnership",
    emoji: "🛡️",
    tagline: "A great shared life requires active protection — of time, of energy, of the marriage itself.",
    body: "The life you are building will attract demands — from careers, from family, from community, from the ambitions you carry. If you do not actively protect your marriage — its time, its energy, its intimacy, its priority — the demands will fill every available space. Protection is not defensiveness. It is the decision that your marriage is the primary infrastructure on which everything else is built, and it must be treated accordingly.",
    duration: "30 min",
    prompts: [
      "What is currently most threatening to the health and priority of your marriage — not dramatically, but in the quiet accumulation of daily demands?",
      "What boundaries do you need to establish or reinforce to protect the quality of your shared life?",
      "What does each of you need from the other to feel that the marriage is being genuinely prioritized?",
      "Together: name three specific protections you will put in place for your marriage in the next season. Make them actionable."
    ],
    reflection: "A marriage that is prioritized is a marriage that thrives. The couple who protects their partnership from the demands of the world has decided that what they are building is worth defending."
  },
  {
    id: 575, day: 119, program: 'marriage-strengthening',
    title: "The Invisible Architecture",
    emoji: "🏛️",
    tagline: "The systems, rhythms, and agreements beneath your daily life are the invisible architecture of your marriage.",
    body: "Every couple has an invisible architecture — the unspoken agreements, the habitual systems, the recurring rhythms that shape the daily experience of the marriage. Some of this architecture was intentionally designed. Much of it simply accumulated. Today you examine what is actually operating beneath the surface of your shared life and decide what to keep, what to redesign, and what to discard.",
    duration: "35 min",
    prompts: [
      "What unspoken agreements are currently operating in your marriage — about roles, about decisions, about how conflict is handled?",
      "Which of those agreements are working beautifully, and which are creating friction or resentment?",
      "What is one system or rhythm in your shared life that you have never consciously designed but that deeply shapes your daily experience?",
      "Together: redesign one element of your invisible architecture. Make it explicit, agreed-upon, and genuinely life-giving."
    ],
    reflection: "You are always living inside an architecture. The only question is whether you built it on purpose."
  },
  {
    id: 576, day: 120, program: 'marriage-strengthening',
    title: "Shared Life Completion",
    emoji: "🌅",
    tagline: "Twenty-three days of building your shared life — now you name what has been constructed.",
    body: "You have spent nearly a month in the territory of shared life — finances, goals, home, family, ambition, legacy, community, and the invisible systems that make your daily life what it is. Before stepping into the final bridge and next phase, you pause to inventory. What is clearer? What is more aligned? What has been explicitly designed that was previously left to default? This is the moment to name it.",
    duration: "45 min",
    prompts: [
      "What is the most important shared life conversation you have had in the last twenty-three days?",
      "What aspect of your shared life building is now more intentional, more aligned, or more explicit than it was a month ago?",
      "What conversation from this phase do you most want to continue, revisit, or deepen?",
      "Together: name three ways your shared life is more consciously built today than it was on Day 98. Celebrate that. It matters."
    ],
    reflection: "The couple who examines and intentionally builds their shared life is not just building a household. They are building a world — small, specific, and extraordinary in its intention."
  },
  {
    id: 577, day: 121, program: 'marriage-strengthening',
    title: "Intimacy Revisited",
    emoji: "🔄",
    tagline: "What you have built in intimacy over the last months is now yours — carry it forward consciously.",
    body: "The intimacy work you have done in this program did not expire when that phase ended. It lives in the new vocabulary you have found, the conversations you have dared, the closeness you have claimed. But like all living things, intimacy requires ongoing attention. The bridge phase begins with a review of what has been built in intimacy and a recommitment to the practices that are most life-giving for your particular marriage.",
    duration: "35 min",
    prompts: [
      "Looking back at the last sixty-plus days, which intimacy practices have most genuinely changed the quality of closeness in your marriage?",
      "Which forms of intimacy — emotional, intellectual, spiritual, physical — feel most alive right now, and which need more attention?",
      "What is the intimacy conversation or practice you want to make permanent — something you will not allow to fade?",
      "Together: each partner names the one intimacy gift they most want to continue receiving from the other. Listen carefully."
    ],
    reflection: "Intimacy is not a destination you arrive at and then maintain on autopilot. It is a living practice — and the couple who keeps practicing keeps deepening."
  },
  {
    id: 578, day: 122, program: 'marriage-strengthening',
    title: "Shared Life Revisited",
    emoji: "🔁",
    tagline: "The shared life you are building is already more intentional — now choose what comes next.",
    body: "The shared life building phase gave you tools, conversations, and clarity that are now part of your marital operating system. Before stepping into the adventure and fun phase ahead, you revisit the key commitments you made: the financial goals, the legacy conversations, the domestic redesigns, the community investments. Revisiting is not repetition. It is the act of keeping your promises to each other and to the future you are building.",
    duration: "35 min",
    prompts: [
      "What commitments did you make during the shared life building phase that you have followed through on? Acknowledge them.",
      "What commitments have not yet been acted on — and what specifically is needed to move them forward?",
      "What shared life goal feels most energizing and alive right now? What would it look like to invest more fully in it?",
      "Together: identify the one shared life priority for the next ninety days and name the first three concrete steps."
    ],
    reflection: "The couple that revisits their commitments is the couple that actually keeps them. Revisiting is not weakness — it is integrity."
  },
  {
    id: 579, day: 123, program: 'marriage-strengthening',
    title: "Setting Intentions for Adventure",
    emoji: "🗺️",
    tagline: "Adventure in marriage is not accidental — the couples who have it chose it.",
    body: "The next phase of this program turns toward joy, adventure, and the experience of your marriage as a source of delight. This is not a departure from the serious work you have done — it is the fruit of it. The couple who has done the emotional, intellectual, and structural work of marriage is the couple who is most free to play, explore, and adventure together. Today you set your intentions for what that looks like.",
    duration: "30 min",
    prompts: [
      "What does adventure mean to you in the context of your marriage — what forms of exploration, novelty, or risk do you find most energizing?",
      "What is one adventure — travel, creative, physical, social, intellectual — that you have wanted to have with your partner but have not yet prioritized?",
      "What stories of shared adventure do you most treasure from your time together, and what do those stories tell you about what makes your marriage come alive?",
      "Together: name three adventures — large, medium, and small — that you are committing to in the next year."
    ],
    reflection: "Adventure is not a luxury. It is one of the primary ways couples remember that the life they are building together is genuinely worth living."
  },
  {
    id: 580, day: 124, program: 'marriage-strengthening',
    title: "What Makes You Come Alive",
    emoji: "⚡",
    tagline: "The couple who knows what makes each other come alive is the couple that can keep each other lit.",
    body: "There is a version of you that is fully alive — energized, engaged, lit from within, moving with purpose and joy. Your partner has a version of this too. And the marriage that makes space for both people to access that aliveness — regularly, not occasionally — is a marriage that operates at a fundamentally different level than the one that merely sustains. Today you name what makes you come alive and ask your partner to hold that knowledge.",
    duration: "30 min",
    prompts: [
      "When do you feel most fully alive — in your body, your mind, your spirit? What conditions or activities create that state for you?",
      "How often does your current daily life include those conditions? What would it look like to increase that frequency?",
      "What makes your partner come alive that you could be doing more to make space for or actively create?",
      "Together: make a pact to name it when you see the other person come alive — to say 'this is you at your fullest, and I see it.'"
    ],
    reflection: "The partner who helps you come alive is doing one of the highest forms of love. Keep doing it for each other."
  },
  {
    id: 581, day: 125, program: 'marriage-strengthening',
    title: "The Four-Month Mark",
    emoji: "🎉",
    tagline: "Four months of extraordinary marriage work — this is the moment to mark it and mean it.",
    body: "You have arrived at the four-month milestone of this program. Four months of choosing depth, choosing honesty, choosing closeness, choosing to build rather than drift. You have moved through communication, conflict, connection, intimacy, and shared life building. You are not the same couple you were at the beginning — and that is entirely the point. Today you celebrate that transformation with full presence and genuine pride.",
    duration: "60 min",
    prompts: [
      "Each partner: what is the most important thing this program has given your marriage that it did not have before?",
      "Each partner: what is the greatest growth you have witnessed in your partner over these four months?",
      "Together: describe the marriage you have built in this season. Not what you hope it will be — what it already is.",
      "Together: plan a celebration worthy of four months of extraordinary work. Make it special. Make it yours."
    ],
    reflection: "Four months of intentional marriage is four months of refusing to let your relationship be ordinary. You chose extraordinary, consistently, over time. That is not nothing. That is everything."
  },
  {
    id: 582, day: 126, program: 'marriage-strengthening',
    title: "What Remains",
    emoji: "💫",
    tagline: "After all the work, all the conversations, all the growth — what is the essential truth of your marriage?",
    body: "This close to the bridge between phases, it is worth pausing to ask: after all the work, what remains? Not what has been built, not what has been repaired, not what has been clarified — but what is simply, fundamentally, essentially true about your marriage? What is the irreducible core? Today you strip away the strategies and the practices and the goals and ask the simplest possible question: who are we to each other?",
    duration: "35 min",
    prompts: [
      "In the simplest possible terms, what is the essential truth of your marriage — what is it, at its core?",
      "What is irreplaceable about what you have with this person? What could not exist with anyone else?",
      "After everything this program has surfaced and built, what do you know about your marriage that you did not know before?",
      "Partner: say the most true thing you can say about what this person means to you. Not polished. Just true."
    ],
    reflection: "Under all the work, all the growth, all the intentionality — there is simply this: two people who chose each other and keep choosing. That is the whole story."
  },
  {
    id: 583, day: 127, program: 'marriage-strengthening',
    title: "Onward — The Adventure Awaits",
    emoji: "🚀",
    tagline: "The foundation is laid, the intimacy is deep, the shared life is built. Now you go live it.",
    body: "You are standing at the threshold of the next phase — the joy, adventure, and delight chapter of your marriage-strengthening journey. Everything that has come before has not been preparation for the good part. It has been the good part. And the adventure ahead is not a reward for having done the hard work. It is the expression of it — the natural overflow of a marriage that has been tended with genuine love, seriousness, and devotion. Step into it together. You have earned this.",
    duration: "45 min",
    prompts: [
      "What word best describes the state of your marriage as you step into this new phase — and how is that word different from the word you would have used four months ago?",
      "What do you most look forward to in the adventure and joy phase ahead? What specifically are you excited to experience together?",
      "What commitment do you want to make to your partner as you step into this next chapter — about how you will show up, what you will protect, and what you will keep choosing?",
      "Together: mark this moment. Stand together. Look at each other. Say out loud: 'We are not finished. We are just beginning.' Mean it."
    ],
    reflection: "A marriage this intentional, this tended, this alive does not have an ending. It only has the next beginning. Go find it together."
  },
  {
    id: 584, day: 128, program: 'marriage-strengthening',
    title: "The Return of Play",
    emoji: "🎲",
    tagline: "Marriage was never meant to be all seriousness — today you remember how to play.",
    body: "Somewhere between the bills, the routines, and the responsibilities, many couples forget that they once played together. Not performed. Not produced. Played — with no goal other than delight. Today you begin reclaiming that. Play is not a luxury in marriage. It is oxygen. It keeps the relationship light enough to breathe and alive enough to grow.",
    duration: "30 min",
    prompts: [
      "When was the last time you and your partner laughed so hard you could barely breathe? What was happening?",
      "What playful activities did you enjoy together early in your relationship that have faded over time?",
      "What is one form of play you loved as a child that you have never shared with your partner?",
      "Together: choose one playful activity to do this week with zero agenda other than fun. Name it now and put it on the calendar."
    ],
    reflection: "The couple that plays together stays awake to each other. Seriousness builds the house. Play fills it with light."
  },
  {
    id: 585, day: 129, program: 'marriage-strengthening',
    title: "Laughter as Medicine",
    emoji: "😂",
    tagline: "Laughter is not a break from intimacy — it is one of its deepest expressions.",
    body: "Couples who laugh together report higher satisfaction, greater resilience, and deeper connection. Laughter releases oxytocin, reduces cortisol, and creates shared memory faster than almost anything else. Today you explore what makes your marriage funny — the inside jokes, the absurd moments, the things only you two find hilarious. This is sacred ground.",
    duration: "25 min",
    prompts: [
      "What is your favorite inside joke as a couple? How did it start and why does it still land?",
      "When your partner makes you laugh, what does it do for your sense of closeness and safety?",
      "Is there a moment of conflict or difficulty that you can now laugh about together? What shifted to make that possible?",
      "Together: tell each other the funniest memory you share. Let yourselves laugh fully — not politely, but from your belly."
    ],
    reflection: "A marriage with laughter in its bones can survive almost anything. Protect what makes you laugh together."
  },
  {
    id: 586, day: 130, program: 'marriage-strengthening',
    title: "The Intentional Date Night",
    emoji: "🌙",
    tagline: "A great date night is not about where you go — it is about how present you are when you get there.",
    body: "Date nights are not a cliché. They are a discipline. But the best date nights are not expensive dinners eaten while scrolling phones. They are moments of undivided attention — where you look at your partner like you are still choosing them, because you are. Today you design a date night practice that fits your real life and actually nourishes your real marriage.",
    duration: "30 min",
    prompts: [
      "What makes a date night truly connecting for you versus one that feels like going through the motions?",
      "What are the biggest obstacles to regular date nights in your current life, and what creative solutions might work?",
      "Describe your ideal date night — not the most extravagant, but the one that would leave you feeling most connected.",
      "Together: commit to a date night rhythm — weekly, biweekly, or monthly — and schedule your next one right now."
    ],
    reflection: "The date is not the event. The date is the decision to keep courting the person you already have."
  },
  {
    id: 587, day: 131, program: 'marriage-strengthening',
    title: "Spontaneity on Purpose",
    emoji: "⚡",
    tagline: "The most alive marriages leave room for the unplanned.",
    body: "Spontaneity might seem like it cannot be cultivated — but it can. You cultivate it by leaving margin in your life, by saying yes more than no, by resisting the urge to schedule every moment. Today you practice breaking a pattern. Do something your partner does not expect. It does not have to be grand. It just has to be surprising.",
    duration: "25 min",
    prompts: [
      "When was the last time your partner truly surprised you? How did that feel?",
      "What is one small spontaneous thing you could do this week that would delight your partner?",
      "Do you tend to resist spontaneity or embrace it? How does that affect the energy of your marriage?",
      "Together: flip a coin or draw from a hat — choose something unplanned to do together in the next 48 hours."
    ],
    reflection: "Predictability makes marriage safe. Spontaneity makes marriage alive. You need both."
  },
  {
    id: 588, day: 132, program: 'marriage-strengthening',
    title: "The Bucket List You Build Together",
    emoji: "📋",
    tagline: "A shared bucket list is a declaration of shared aliveness.",
    body: "Every couple has dreams that live unspoken — places they want to visit, experiences they want to have, milestones they want to reach together. Today you bring those dreams into the open. Not as fantasies that may never happen, but as intentions that shape how you spend your time, money, and energy. A couple with a shared bucket list is a couple with a shared future.",
    duration: "35 min",
    prompts: [
      "What are three experiences you have always wanted to have with your partner but have never mentioned?",
      "What is one bucket list item you could realistically accomplish in the next twelve months together?",
      "Is there something on your individual bucket list that you would love to turn into a shared experience?",
      "Together: write a shared bucket list of at least ten items. Mix the grand with the simple. Post it somewhere you will both see it."
    ],
    reflection: "The couple with nothing to look forward to together slowly stops looking at each other. Dream out loud."
  },
  {
    id: 589, day: 133, program: 'marriage-strengthening',
    title: "Travel Dreams",
    emoji: "✈️",
    tagline: "Where you dream of going together reveals what you are reaching for in your marriage.",
    body: "Travel strips away routine and puts you back in discovery mode — the same mode you were in when you first fell in love. Even if travel is not currently possible, the act of dreaming about it together opens something in the relationship. Today you explore where you want to go, what you want to see, and what kind of travelers you want to be as a couple.",
    duration: "30 min",
    prompts: [
      "If money and time were no obstacle, where would you take your partner and why?",
      "What is your favorite travel memory together, and what made it so special?",
      "Do you prefer adventure travel or relaxation travel — and how do you navigate that difference as a couple?",
      "Together: pick one realistic trip to plan in the next year. Start a shared note with ideas, dates, and a rough budget."
    ],
    reflection: "You do not have to go far to travel together. You just have to be willing to leave the familiar."
  },
  {
    id: 590, day: 134, program: 'marriage-strengthening',
    title: "Trying Something New Together",
    emoji: "🆕",
    tagline: "Novelty is the antidote to the slow creep of marital autopilot.",
    body: "Research consistently shows that couples who try new things together experience renewed attraction and excitement. The brain processes novelty the same way it processes early-stage romance — with dopamine and heightened attention. Today you commit to doing something neither of you has done before. The activity matters less than the willingness to be beginners together.",
    duration: "25 min",
    prompts: [
      "When was the last time you and your partner were both beginners at something? How did it feel?",
      "What is something you have always wanted to try but felt too self-conscious to do alone?",
      "How does your partner respond when you suggest something new — and how does that response affect your willingness to keep suggesting?",
      "Together: choose one new activity to try together this week. Commit to approaching it with curiosity, not competence."
    ],
    reflection: "The willingness to be awkward together is one of the most underrated forms of intimacy."
  },
  {
    id: 591, day: 135, program: 'marriage-strengthening',
    title: "Game Night Revival",
    emoji: "🃏",
    tagline: "Healthy competition reminds you that you married someone with fire.",
    body: "There is something uniquely bonding about playing games together — card games, board games, video games, outdoor games. The stakes are low but the engagement is high. You see each other strategize, celebrate, lose gracefully or not, and laugh at the absurdity of it all. Today you bring game night back into your marriage, not as filler, but as fuel.",
    duration: "25 min",
    prompts: [
      "What games did you play together early in your relationship, and what happened to that tradition?",
      "Are you and your partner competitive with each other? How does that energy serve or challenge your connection?",
      "What is a game — physical, digital, or tabletop — that you think your partner would love but has never tried?",
      "Together: plan a game night this week. Choose at least two games. No phones. Snacks mandatory."
    ],
    reflection: "Play is not childish. It is the part of you that remembers how to be fully present without trying."
  },
  {
    id: 592, day: 136, program: 'marriage-strengthening',
    title: "The Inside Joke Vault",
    emoji: "🤫",
    tagline: "Inside jokes are proof that you have built a world only the two of you can enter.",
    body: "Every couple has a private language — phrases, references, looks that no one else would understand. These inside jokes are not trivial. They are the architecture of belonging. They say: we have shared enough life together to have our own code. Today you celebrate that code. You add to it. You remind each other that your private world matters.",
    duration: "25 min",
    prompts: [
      "What is an inside joke between you and your partner that always makes you smile, even when things are hard?",
      "How did your most enduring inside joke begin? What does it represent about your shared history?",
      "Are there phrases or looks that serve as shorthand in your marriage — ways of saying 'I love you' or 'I see you' without words?",
      "Together: try to list as many inside jokes as you can in five minutes. See how many you remember. Notice how it feels to recall them."
    ],
    reflection: "The marriage with its own language is the marriage with its own world. Keep building that world."
  },
  {
    id: 593, day: 137, program: 'marriage-strengthening',
    title: "Playful Competition",
    emoji: "🏆",
    tagline: "A little rivalry keeps the spark alive — as long as you are both still rooting for the team.",
    body: "Healthy competition between partners can be energizing and flirtatious. It brings out your fire, your cleverness, and your desire to impress the person you love. The key is that the competition stays playful — never weaponized, never about proving superiority. Today you explore how friendly rivalry can add texture and excitement to your marriage.",
    duration: "25 min",
    prompts: [
      "What are you and your partner naturally competitive about, and does that energy feel playful or tense?",
      "Have you ever turned a mundane task into a competition — who can fold laundry faster, who can find the better restaurant? How did that feel?",
      "Where is the line between playful competition and competition that damages connection in your marriage?",
      "Together: create a fun challenge — a cook-off, a trivia match, a fitness dare — with a silly prize for the winner. Schedule it this week."
    ],
    reflection: "Compete like you want to win. Celebrate like you want your partner to feel adored either way."
  },
  {
    id: 594, day: 138, program: 'marriage-strengthening',
    title: "Nostalgia Night",
    emoji: "📸",
    tagline: "Looking back at where you started reminds you of everything you have built.",
    body: "Nostalgia is not just sentimentality. It is a neurological anchor that reconnects you to the emotional foundation of your relationship. Revisiting old photos, early texts, the restaurant from your first date, or the song that was playing when you fell in love — all of these things reactivate the attachment and joy you felt at the beginning. Today you take a deliberate trip into your shared past.",
    duration: "30 min",
    prompts: [
      "What is the earliest memory you have of knowing this person was special to you?",
      "If you could relive one moment from the first year of your relationship, which would you choose and why?",
      "What has changed the most about your partner since you first met — and what has stayed beautifully the same?",
      "Together: pull out old photos, revisit early messages, or return to a meaningful place from your early days. Let the memories wash over you."
    ],
    reflection: "You are not trying to go back. You are reminding yourselves of the spark that started the fire you tend now."
  },
  {
    id: 595, day: 139, program: 'marriage-strengthening',
    title: "Adventure as a Love Language",
    emoji: "🧗",
    tagline: "For some, the deepest love is spoken through shared adrenaline and discovery.",
    body: "Not every couple connects through quiet conversation or candlelit dinners. Some couples come most alive when they are hiking a mountain, exploring a new city, or trying something that scares them a little. If adventure is one of your love languages, starving it can make your marriage feel flat even when nothing is technically wrong. Today you explore what adventure means in your specific relationship.",
    duration: "25 min",
    prompts: [
      "On a scale of one to ten, how much does shared adventure factor into your sense of connection with your partner?",
      "What is the most adventurous thing you have done together, and how did it affect your bond?",
      "If one of you craves adventure more than the other, how do you navigate that difference with respect?",
      "Together: identify one adventure — big or small — that would stretch you both. Commit to pursuing it in the next month."
    ],
    reflection: "Adventure does not require a passport. It requires a willingness to step into the unknown together."
  },
  {
    id: 596, day: 140, program: 'marriage-strengthening',
    title: "Exploring Nature Together",
    emoji: "🌿",
    tagline: "Something in nature slows couples down enough to actually find each other again.",
    body: "Nature has a way of stripping away distraction and returning you to what is essential. Walking in the woods, sitting by water, watching a sunset — these experiences regulate your nervous system, lower defensiveness, and create space for real connection. Today you explore what nature means for your marriage and how spending time outdoors together can deepen your bond.",
    duration: "25 min",
    prompts: [
      "When was the last time you and your partner spent meaningful time in nature together? What was that experience like?",
      "What kind of natural setting makes you feel most at peace — mountains, water, forest, desert — and does your partner share that preference?",
      "How might regular time in nature together change the pace and quality of your conversations?",
      "Together: plan an outdoor experience this week — a walk, a park visit, a sunrise viewing — and commit to leaving your phones behind."
    ],
    reflection: "Nature does not fix your marriage. It quiets the noise long enough for your marriage to find itself."
  },
  {
    id: 597, day: 141, program: 'marriage-strengthening',
    title: "Cultural Experiences as Connection",
    emoji: "🎭",
    tagline: "Sharing art, music, and culture together expands the emotional vocabulary of your marriage.",
    body: "Attending a concert, visiting a museum, watching a film that moves you, exploring a cuisine from another culture — these are not just entertainment. They are shared emotional experiences that give you new things to talk about, react to, and bond over. Today you explore how cultural experiences can become a regular source of connection and growth in your marriage.",
    duration: "25 min",
    prompts: [
      "What cultural experience have you shared with your partner that deepened your connection in an unexpected way?",
      "Is there a type of art, music, or cultural event your partner loves that you have not yet fully explored with them?",
      "How does experiencing beauty or creativity together affect the emotional tone of your relationship?",
      "Together: choose a cultural experience to share this month — a movie, a gallery, a live performance, a new cuisine. Make it a date."
    ],
    reflection: "Culture gives you mirrors. Sharing those mirrors with your partner gives you new ways to see each other."
  },
  {
    id: 598, day: 142, program: 'marriage-strengthening',
    title: "Cooking Together",
    emoji: "👩‍🍳",
    tagline: "The kitchen is one of the most underrated spaces for marital intimacy.",
    body: "Cooking together requires collaboration, communication, timing, and trust — all the same things a great marriage requires. It is tactile, sensory, creative, and results in something you share. Whether you are seasoned cooks or hopeless in the kitchen, the act of preparing a meal together can become a ritual of connection that nourishes far more than your bodies.",
    duration: "30 min",
    prompts: [
      "Do you currently cook together, or does one person typically handle meals? How does that dynamic feel?",
      "What meal holds special meaning in your relationship — the one you always come back to or the one that reminds you of a shared moment?",
      "What would it look like to make cooking together a regular practice rather than a rare event?",
      "Together: choose a recipe neither of you has made before. Shop for the ingredients together and cook it this week side by side."
    ],
    reflection: "A meal made together tastes different. It carries the flavor of collaboration and shared intention."
  },
  {
    id: 599, day: 143, program: 'marriage-strengthening',
    title: "Music in the Marriage",
    emoji: "🎵",
    tagline: "Every great love story has a soundtrack — today you curate yours.",
    body: "Music accesses emotion faster than language. A single song can transport you to the night you met, the dance at your wedding, or the road trip that changed everything. Music is a living archive of your relationship. Today you explore the role music plays in your marriage and how you can use it more intentionally to connect, celebrate, and remember.",
    duration: "25 min",
    prompts: [
      "What song instantly takes you back to a pivotal moment in your relationship?",
      "Do you and your partner share musical taste, or do your preferences diverge? How do you navigate that?",
      "When was the last time you danced together — even just in the kitchen — and how did it feel?",
      "Together: create a shared playlist of songs that represent your relationship. Add to it whenever a new song becomes meaningful."
    ],
    reflection: "A couple with a soundtrack is a couple that remembers who they are — even in the seasons when they forget."
  },
  {
    id: 600, day: 144, program: 'marriage-strengthening',
    title: "Creative Projects as Partners",
    emoji: "🎨",
    tagline: "Building something together outside the marriage builds something new inside it.",
    body: "Whether it is a garden, a renovation, a piece of art, a business idea, or a family scrapbook — creating something together engages a different part of your partnership. You move from maintaining life to making something new. This creative collaboration can reveal strengths you did not know your partner had and spark conversations that routine never would.",
    duration: "25 min",
    prompts: [
      "Have you and your partner ever built or created something together? What was that experience like?",
      "What creative project have you imagined doing together but never started?",
      "How do you and your partner handle creative differences — different visions, different working styles, different standards?",
      "Together: brainstorm one creative project you could start together in the next month. It does not have to be big. It just has to be yours."
    ],
    reflection: "When you create together, you prove to yourselves that your marriage can make things — not just manage them."
  },
  {
    id: 601, day: 145, program: 'marriage-strengthening',
    title: "The Art of the Surprise",
    emoji: "🎁",
    tagline: "A well-placed surprise tells your partner: I was thinking about you when you were not looking.",
    body: "Surprises do not have to be expensive or elaborate. A handwritten note in a lunchbox, an unexpected coffee delivery, planning an evening your partner did not see coming — these small acts of surprise communicate thoughtfulness, attentiveness, and delight. Today you explore how surprise can become a regular dialect in your marriage.",
    duration: "25 min",
    prompts: [
      "What is the best surprise your partner has ever given you, and what made it land so well?",
      "Do you find it easy or difficult to surprise your partner? What gets in the way?",
      "How does receiving an unexpected gesture of love affect your sense of being valued in the marriage?",
      "Together: each of you secretly plan one small surprise for the other this week. Do not reveal what it is — just deliver it."
    ],
    reflection: "The surprise is never really about the thing. It is about the message: you live in my thoughts even when we are apart."
  },
  {
    id: 602, day: 146, program: 'marriage-strengthening',
    title: "Mini-Adventures in Ordinary Life",
    emoji: "🗺️",
    tagline: "You do not need to fly somewhere to have an adventure — you just need to choose to see your city with new eyes.",
    body: "Adventure does not require a plane ticket. It requires a shift in posture — from consuming your environment to exploring it. Today you discover that your own neighborhood, city, or region is full of experiences you have never had together. A new restaurant, an unexplored trail, a neighborhood you have never walked, a local event you have never attended. Mini-adventures keep the spirit of discovery alive.",
    duration: "25 min",
    prompts: [
      "What is something within thirty minutes of your home that you have never explored together?",
      "How often do you choose the familiar over the new when deciding how to spend time together?",
      "What would it look like to have one mini-adventure per month as a couple — no planning required, just a willingness to wander?",
      "Together: this week, go somewhere within your city that neither of you has been before. Document it with a photo."
    ],
    reflection: "The couple that explores together stays curious about each other. Curiosity is the engine of lasting love."
  },
  {
    id: 603, day: 147, program: 'marriage-strengthening',
    title: "Annual Traditions Worth Keeping",
    emoji: "📅",
    tagline: "Traditions are not just rituals — they are the architecture of a shared life.",
    body: "Every great marriage develops its own traditions — anniversary rituals, holiday practices, seasonal rhythms, yearly trips. These traditions create anticipation, continuity, and a sense of shared identity. They give you something to look forward to and something to look back on. Today you evaluate which traditions are serving your marriage and which new ones you want to create.",
    duration: "30 min",
    prompts: [
      "What annual traditions do you currently share as a couple, and which ones bring you the most joy?",
      "Is there a tradition from your family of origin that you want to carry into your marriage, or one you want to leave behind?",
      "What new tradition could you start this year that reflects who you are as a couple right now?",
      "Together: choose one new annual tradition to begin this year. Write it down, name it, and commit to honoring it together."
    ],
    reflection: "A marriage without traditions drifts. A marriage with them has anchors in time that keep you connected across the years."
  },
  {
    id: 604, day: 148, program: 'marriage-strengthening',
    title: "The Joy of Doing Nothing Together",
    emoji: "☁️",
    tagline: "The truest intimacy is being comfortable doing absolutely nothing side by side.",
    body: "Not every moment of connection needs to be active or eventful. Some of the deepest intimacy in marriage happens in the quiet moments — reading in the same room, sitting on the porch in silence, lying on the couch watching rain. The ability to do nothing together without anxiety or boredom is a sign of profound safety. Today you honor that stillness.",
    duration: "25 min",
    prompts: [
      "Are you and your partner comfortable with shared silence, or does one of you tend to fill it?",
      "What does it feel like when you are doing nothing together and it feels good versus when it feels like disconnection?",
      "How can you create more space for unstructured, unpressured togetherness in your weekly rhythm?",
      "Together: spend twenty minutes doing nothing together — no agenda, no screens, no conversation required. Just be near each other."
    ],
    reflection: "If you can be bored together and still feel loved, you have something most people never find."
  },
  {
    id: 605, day: 149, program: 'marriage-strengthening',
    title: "Flirting with the One You Married",
    emoji: "😏",
    tagline: "Flirting does not stop at the altar — unless you let it.",
    body: "Flirting is not just for new relationships. It is the art of communicating desire, delight, and playful attraction — and it should never leave a marriage. When you flirt with your spouse, you are saying: I still see you. I still want you. I still choose you. Today you rekindle the art of flirting within the safety and commitment of your marriage.",
    duration: "25 min",
    prompts: [
      "When was the last time you flirted with your partner — not out of obligation, but because you genuinely felt drawn to them?",
      "What kind of flirting makes your partner light up — playful teasing, compliments, physical touch, suggestive humor?",
      "Has flirting faded in your marriage, and if so, what caused it to fade? How might you bring it back?",
      "Together: flirt with each other today. Send a text that would have made you blush when you were dating. Mean every word."
    ],
    reflection: "The marriage where partners still flirt is the marriage where desire has a home. Keep the door open."
  },
  {
    id: 606, day: 150, program: 'marriage-strengthening',
    title: "Halfway Home — The Marriage You Are Building",
    emoji: "🏔️",
    tagline: "One hundred and fifty days in. You are not the same couple who started. Celebrate that.",
    body: "This is the halfway point of your 365-day marriage-strengthening journey, and it deserves more than a passing nod. One hundred and fifty days ago you made a decision — not just to stay married, but to build something extraordinary by choice. You have done the deep work of emotional honesty, the vulnerable work of intimacy, the structural work of shared vision, and the joyful work of play and adventure. You are not the couple who began this journey. You are the couple that journey has been shaping. Today you pause, take stock, and honor every single day of showing up — especially the hard ones.",
    duration: "45 min",
    prompts: [
      "Look back at who you were as a couple on Day 1. What has changed most profoundly — in yourself, in your partner, and in the space between you?",
      "What mission or moment from the first 150 days challenged you the most, and what did it teach you about your marriage?",
      "What are you most proud of — not in your partner, but in yourself — for how you have shown up in this process?",
      "Together: sit face to face. Each of you share three things you have seen your partner become during this journey. Let them receive it fully. Then say together: 'We are halfway home, and we are not slowing down.'"
    ],
    reflection: "Halfway is not a stopping point. It is proof that you are the kind of couple who finishes what you start — together."
  },
  {
    id: 607, day: 151, program: 'marriage-strengthening',
    title: "Joy as a Marital Discipline",
    emoji: "✨",
    tagline: "Joy is not something you wait for. It is something you practice.",
    body: "In a world that constantly demands your attention and energy, joy does not just happen. It is chosen. It is cultivated. It is protected. The happiest marriages are not the ones with the fewest problems. They are the ones where both partners have learned to find, create, and share joy even in ordinary moments. Today you examine your marriage through the lens of joy — not as an emotion, but as a practice.",
    duration: "25 min",
    prompts: [
      "What brings you the most joy in your marriage right now — not what should bring joy, but what actually does?",
      "Are there joy-killers in your relationship — habits, patterns, or attitudes that dampen the lightness between you?",
      "How can you become more intentional about creating joyful moments rather than waiting for them to occur?",
      "Together: name three small things that reliably bring you both joy. Commit to doing at least one of them this week."
    ],
    reflection: "Joy is not the absence of difficulty. It is the presence of two people who refuse to let difficulty steal their delight."
  },
  {
    id: 608, day: 152, program: 'marriage-strengthening',
    title: "Learning Your Partner's Play Style",
    emoji: "🎯",
    tagline: "Not everyone plays the same way — and knowing how your partner plays is an act of love.",
    body: "Some people play through physical activity. Others through intellectual puzzles, creative expression, social gatherings, or quiet exploration. If you assume your partner plays the way you do, you may be offering them fun they do not actually enjoy. Today you learn — or relearn — how your partner naturally plays, and you offer them that gift.",
    duration: "25 min",
    prompts: [
      "How do you naturally play and unwind? Is it through action, creativity, socializing, or something else entirely?",
      "How does your partner naturally play, and is it different from your style? How do you honor that difference?",
      "Have you ever planned something fun for your partner that missed the mark? What did you learn from that?",
      "Together: each of you describe your ideal playful afternoon in detail. Notice where they overlap and where they diverge."
    ],
    reflection: "Loving someone well means learning how they experience delight — and sometimes choosing their version of fun over yours."
  },
  {
    id: 609, day: 153, program: 'marriage-strengthening',
    title: "The Road Trip Conversation",
    emoji: "🚗",
    tagline: "Some of the best conversations of your marriage will happen when you are both staring at the road.",
    body: "There is something about the car — the forward motion, the side-by-side seating, the absence of eye contact pressure — that unlocks conversation in ways a dinner table sometimes cannot. Road trips, even short ones, create a unique space for talking, dreaming, laughing, and reconnecting. Today you plan or remember a road trip that mattered.",
    duration: "25 min",
    prompts: [
      "What is your favorite road trip memory with your partner? What made it special?",
      "What do you tend to talk about during long drives together that you rarely discuss at home?",
      "If you could take a road trip anywhere together this year, where would you go and what would you want to experience along the way?",
      "Together: plan a drive — even just a few hours — with no destination pressure. Pack snacks, make a playlist, and let the conversation flow."
    ],
    reflection: "Sometimes the best way to face each other is to face the same direction together and drive."
  },
  {
    id: 610, day: 154, program: 'marriage-strengthening',
    title: "Physical Play and Touch",
    emoji: "🤸",
    tagline: "Bodies that play together remember that they belong together.",
    body: "Not every physical connection needs to be sexual. Wrestling on the floor, dancing in the kitchen, playing catch, giving piggyback rides, tickling, or just holding hands while walking — physical play keeps your bodies in conversation. It keeps affection casual and frequent. Today you explore how physical playfulness can remain a living part of your marriage.",
    duration: "25 min",
    prompts: [
      "How physically playful are you and your partner? Has that changed over time?",
      "What forms of non-sexual physical touch make you feel most connected — holding hands, sitting close, playful roughhousing?",
      "Is there any physical affection you wish happened more often in your marriage? Have you communicated that?",
      "Together: engage in some form of physical play today — dance, wrestle, play a sport, or simply hold each other and sway."
    ],
    reflection: "Your body knows things your mind forgets. Let it remember the joy of being close."
  },
  {
    id: 611, day: 155, program: 'marriage-strengthening',
    title: "Humor as a Healing Force",
    emoji: "💊",
    tagline: "The couple that can laugh during the hard times has a secret weapon most people never discover.",
    body: "Humor in the midst of difficulty is not avoidance. When used well, it is resilience. It is the ability to acknowledge that something is hard while also refusing to be crushed by it. Couples who can find moments of levity during stress — not dismissive humor, but shared, compassionate laughter — recover faster and stay more connected through adversity.",
    duration: "25 min",
    prompts: [
      "Can you think of a difficult time when laughter helped you and your partner cope? What happened?",
      "Is there a type of humor that helps during hard times and a type that hurts? How do you distinguish between them?",
      "How do you feel when your partner uses humor during a tense moment — relieved, dismissed, or something else?",
      "Together: recall a hard season you survived and find one moment of humor in it. Let that memory remind you of your resilience."
    ],
    reflection: "Laughter in the dark is not denial. It is defiance. It says: this will not take everything from us."
  },
  {
    id: 612, day: 156, program: 'marriage-strengthening',
    title: "Celebrating Each Other's Wins",
    emoji: "🥂",
    tagline: "How you celebrate your partner's success reveals how secure your love really is.",
    body: "Research by Shelly Gable shows that how partners respond to good news is even more predictive of relationship health than how they respond to bad news. When your partner shares a win and you respond with genuine enthusiasm — active, constructive support — you strengthen the bond. Today you practice being your partner's loudest, most sincere cheerleader.",
    duration: "25 min",
    prompts: [
      "How do you typically respond when your partner shares good news? Is it with full enthusiasm, polite acknowledgment, or something else?",
      "What recent win has your partner had — big or small — that you may not have celebrated enough?",
      "How does it feel when your good news is met with genuine excitement versus indifference from your partner?",
      "Together: each of you name one recent win. Let the other respond with full, exaggerated celebration. Notice how it feels to be cheered for."
    ],
    reflection: "The partner who celebrates your wins without jealousy or competition is the partner who truly wants you to thrive."
  },
  {
    id: 613, day: 157, program: 'marriage-strengthening',
    title: "The Fun Audit",
    emoji: "📊",
    tagline: "If your marriage were graded on fun, what score would it get — and what would raise it?",
    body: "This is the final mission in the fun and adventure arc, and it is time for an honest assessment. Not a guilt trip — an audit. How much genuine fun are you having together? How often do you laugh, play, explore, and surprise each other? Fun is not a luxury in marriage. It is a vital sign. Today you take stock and set intentions for keeping joy alive in every season ahead.",
    duration: "30 min",
    prompts: [
      "On a scale of one to ten, how much genuine fun are you currently having in your marriage? What would move that number up?",
      "What has been the most fun moment of the last thirty days together?",
      "What one commitment could you make to each other that would permanently raise the level of joy in your marriage?",
      "Together: write a 'Fun Contract' — three to five agreements about how you will prioritize play, adventure, and laughter going forward."
    ],
    reflection: "A marriage without fun is a marriage running on duty alone. Duty is noble — but joy is what makes you want to stay forever."
  },
  {
    id: 614, day: 158, program: 'marriage-strengthening',
    title: "Weathering Hard Seasons",
    emoji: "🌧️",
    tagline: "The measure of a marriage is not whether storms come — it is how you hold each other through them.",
    body: "Every marriage will face hard seasons — financial strain, health crises, loss, career upheaval, family conflict. These seasons do not have to break your bond. In fact, they can forge it into something unbreakable. But only if you choose to face them together rather than retreating into isolation or blame. Today you prepare your marriage for the inevitable storms.",
    duration: "30 min",
    prompts: [
      "What is the hardest season your marriage has weathered so far, and what did it teach you about your partnership?",
      "When difficulty arrives, what is your default response — do you move toward your partner, away from them, or against them?",
      "What agreements could you make now — before the next storm — about how you will treat each other during hard times?",
      "Together: create a 'storm protocol' — two or three commitments about how you will show up for each other when life gets hard."
    ],
    reflection: "The storm does not get to decide what happens to your marriage. You do."
  },
  {
    id: 615, day: 159, program: 'marriage-strengthening',
    title: "Repairing After Conflict with Skill",
    emoji: "🔧",
    tagline: "The repair is not the failure. The failure is refusing to repair.",
    body: "John Gottman's research reveals that the ability to make and receive repair attempts is the single most important factor in whether a marriage thrives or deteriorates. Repair is not about who was right. It is about who is willing to reach across the divide and say: you matter more than this argument. Today you sharpen your repair skills.",
    duration: "30 min",
    prompts: [
      "What does a successful repair attempt look like in your marriage? What signals tell you that things are being mended?",
      "What repair attempts does your partner make that you sometimes miss or reject? How could you receive them more openly?",
      "What makes it hardest for you to initiate repair after a conflict — pride, fear of rejection, or something else?",
      "Together: agree on a repair signal — a phrase, a gesture, or an action — that means 'I want to reconnect even though this is hard.'"
    ],
    reflection: "Every couple fights. The extraordinary couples are the ones who have learned to come back from it with grace."
  },
  {
    id: 616, day: 160, program: 'marriage-strengthening',
    title: "The Full Apology",
    emoji: "🙏",
    tagline: "A real apology does not defend. It does not deflect. It owns — fully and without condition.",
    body: "Most apologies fail because they are partial. 'I am sorry, but...' is not an apology. 'I am sorry you felt that way' is not an apology. A full apology names the specific behavior, acknowledges its impact, takes ownership without excuse, expresses genuine remorse, and commits to change. Today you learn the anatomy of an apology that actually heals.",
    duration: "30 min",
    prompts: [
      "What does a meaningful apology look like to you? What elements must it contain for you to feel it is genuine?",
      "When was the last time you gave a full, unconditional apology — without any 'but' or justification attached?",
      "Is there something you owe your partner an apology for that you have been avoiding? What makes it hard to say?",
      "Together: practice the full apology structure — name it, own it, express remorse, commit to change. Start with something small if needed."
    ],
    reflection: "The full apology costs you your pride. But it purchases something pride never could — your partner's trust."
  },
  {
    id: 617, day: 161, program: 'marriage-strengthening',
    title: "Bouncing Back from Disappointment",
    emoji: "🔄",
    tagline: "Disappointment is inevitable. How you process it together determines whether it divides or deepens you.",
    body: "Your partner will disappoint you. You will disappoint them. Plans will fall through, expectations will go unmet, and moments that should have been beautiful will sometimes land flat. The question is not how to avoid disappointment — it is how to metabolize it together without letting it calcify into resentment. Today you practice the art of bouncing back.",
    duration: "25 min",
    prompts: [
      "What recent disappointment — large or small — have you experienced in your marriage? How did you handle it?",
      "When you are disappointed by your partner, do you tend to express it directly, withdraw, or let it build silently?",
      "What would it look like to be disappointed and still choose connection — to say 'this hurt' without saying 'you are the problem'?",
      "Together: share one recent disappointment without blame. Let your partner acknowledge it without defending. Practice receiving each other's honesty."
    ],
    reflection: "Disappointment processed together becomes data. Disappointment buried alone becomes distance."
  },
  {
    id: 618, day: 162, program: 'marriage-strengthening',
    title: "Handling External Pressure Together",
    emoji: "🛡️",
    tagline: "The world will press on your marriage from every direction. Your job is to not let it press you apart.",
    body: "Work stress, family expectations, financial pressure, social obligations, cultural noise — all of these forces push on your marriage from the outside. When couples are not intentional, they begin turning on each other instead of turning toward each other. They blame the partner for the pressure instead of facing the pressure as a team. Today you build your defenses — together.",
    duration: "25 min",
    prompts: [
      "What external pressure is currently putting the most strain on your marriage?",
      "When you are stressed by outside forces, how does it show up in how you treat your partner?",
      "What would it look like to face external pressure as allies rather than opponents?",
      "Together: identify the top external pressure on your marriage right now and create a plan to face it as a united team."
    ],
    reflection: "The marriage that faces the world together is the marriage the world cannot break."
  },
  {
    id: 619, day: 163, program: 'marriage-strengthening',
    title: "Protecting Marriage During Stress",
    emoji: "🏰",
    tagline: "Stress does not destroy marriages. Unprotected marriages are destroyed by stress.",
    body: "When life gets hard, the marriage is often the first thing to be neglected. Date nights get canceled. Conversations get shorter. Patience runs thin. Intimacy disappears. But this is exactly when the marriage needs the most protection — not less. Today you identify the warning signs that stress is eroding your connection and build safeguards against it.",
    duration: "30 min",
    prompts: [
      "What are the first signs that stress is starting to affect the quality of your marriage?",
      "When life gets overwhelming, which parts of your connection do you tend to sacrifice first?",
      "What non-negotiable practices could protect your marriage during the busiest and most stressful seasons?",
      "Together: create a list of three 'marriage non-negotiables' that you will protect even during the hardest times."
    ],
    reflection: "The couples who protect their marriage during stress are the ones who still have a marriage when the stress passes."
  },
  {
    id: 620, day: 164, program: 'marriage-strengthening',
    title: "Showing Up When Your Partner Struggles",
    emoji: "🤲",
    tagline: "Your partner does not need you to fix their pain. They need you to sit in it with them.",
    body: "When your partner is struggling — with work, health, self-doubt, grief, or fear — the greatest gift you can offer is not a solution. It is your presence. Many well-meaning spouses rush to fix, advise, or minimize. But what the struggling partner often needs most is to feel seen, held, and not alone. Today you practice the art of showing up without an agenda.",
    duration: "25 min",
    prompts: [
      "When you are struggling, what does your partner do that makes you feel most supported?",
      "What do they do with good intentions that actually makes you feel more alone?",
      "When your partner is in pain, what is your instinct — to fix, to distract, to empathize, or to withdraw?",
      "Together: ask each other directly: 'When you are hurting, what do you most need from me?' Listen without correcting."
    ],
    reflection: "Presence without agenda is the purest form of love. Your partner does not need your answers. They need your arms."
  },
  {
    id: 621, day: 165, program: 'marriage-strengthening',
    title: "Grief and Loss as a Couple",
    emoji: "🕊️",
    tagline: "Grief either isolates or bonds. The difference is whether you grieve alone or together.",
    body: "Every marriage will encounter loss — the death of a loved one, a miscarriage, the loss of a dream, a friendship ending, a career falling apart. Grief is one of the most disorienting experiences a human can face, and couples often grieve differently. Today you explore how to honor each other's grief without trying to synchronize it.",
    duration: "30 min",
    prompts: [
      "What loss has your marriage faced, and how did you navigate it together? What went well and what was difficult?",
      "How do you grieve — privately and internally, or openly and expressively? How does your partner grieve?",
      "What do you need from your partner during grief that you may not have articulated before?",
      "Together: if you are carrying any unprocessed grief — individually or as a couple — create space to name it. Let it exist without fixing it."
    ],
    reflection: "Grief shared is not grief halved. But it is grief held — and sometimes that is the difference between breaking and bending."
  },
  {
    id: 622, day: 166, program: 'marriage-strengthening',
    title: "Illness and Vulnerability",
    emoji: "🩺",
    tagline: "Illness strips away every pretense and reveals the truest version of your partnership.",
    body: "When one partner gets sick — whether a week-long flu or a chronic condition — the marriage shifts. Roles change. Capacity changes. Fear enters. The healthy partner becomes a caretaker. The sick partner becomes dependent. Both can feel isolated. Today you explore what illness reveals about your marriage and how to navigate vulnerability with grace on both sides.",
    duration: "25 min",
    prompts: [
      "How does your marriage handle illness? Does the sick partner feel cared for? Does the caretaker feel appreciated?",
      "What does it feel like to be vulnerable and dependent on your partner? Is that easy or excruciating for you?",
      "What would you want your partner to know if you were facing a serious health challenge?",
      "Together: discuss how you would want to support each other through a prolonged illness. Make it practical and specific."
    ],
    reflection: "The vow said 'in sickness and in health.' Today you are not just reciting that — you are rehearsing it."
  },
  {
    id: 623, day: 167, program: 'marriage-strengthening',
    title: "When You Are Both Running on Empty",
    emoji: "🪫",
    tagline: "Two depleted partners cannot pour from empty cups — but they can hold each other's.",
    body: "There will be seasons when you are both exhausted. Neither of you has extra to give. The house is a mess, the patience is gone, and the romance is buried under sheer survival. These are the most dangerous seasons for a marriage — not because of conflict, but because of neglect. Today you learn how to stay connected even when you have nothing left to give.",
    duration: "25 min",
    prompts: [
      "When was the last time you and your partner were both running on empty? How did it affect your connection?",
      "What is the smallest gesture of love that still lands even when you are completely depleted?",
      "How do you communicate 'I love you but I have nothing left' without your partner hearing 'I do not care'?",
      "Together: agree on a low-energy ritual of connection — something that requires almost nothing but still says 'I am here.'"
    ],
    reflection: "You do not have to be at your best to love well. Sometimes love is just two tired people choosing to be tired together."
  },
  {
    id: 624, day: 168, program: 'marriage-strengthening',
    title: "Protecting the Marriage from Bitterness",
    emoji: "⚔️",
    tagline: "Bitterness does not arrive in one moment. It accumulates in every moment you choose not to address.",
    body: "Bitterness is the slow poison of marriage. It grows from unspoken resentments, unacknowledged hurts, and the quiet decision to keep score. It masquerades as patience — 'I will just let it go' — but it lets nothing go. It stores everything. Today you examine whether bitterness has taken root in your marriage and commit to pulling it out before it spreads.",
    duration: "30 min",
    prompts: [
      "Is there any bitterness in your marriage right now — toward your partner, toward circumstances, or toward yourself?",
      "What small resentments have you been 'letting go' that you actually have not released at all?",
      "What would it take to bring those buried grievances into the light — not to relitigate them, but to finally release them?",
      "Together: give each other permission to name one thing that has been silently weighing on you. Receive it without defense."
    ],
    reflection: "The antidote to bitterness is not silence. It is honest conversation held before the wound becomes a wall."
  },
  {
    id: 625, day: 169, program: 'marriage-strengthening',
    title: "Fighting Fair When the Stakes Are High",
    emoji: "⚖️",
    tagline: "The biggest conflicts require the most discipline — not the least.",
    body: "Small disagreements are easy to manage. But when the stakes are high — money, parenting, in-laws, career moves, core values — the temptation to fight dirty skyrockets. Contempt, stonewalling, bringing up the past, and character attacks all become more likely. Today you prepare for high-stakes disagreements by agreeing on rules of engagement before the heat arrives.",
    duration: "30 min",
    prompts: [
      "What topics tend to escalate most quickly in your marriage? What makes them so charged?",
      "When a conflict gets heated, what is the first unfair tactic you tend to reach for — and what does it cost you?",
      "What rules of engagement would help you both fight fair even when the issue is deeply personal?",
      "Together: create three to five 'rules of fair fighting' that you both agree to honor. Write them down and revisit them when you need them."
    ],
    reflection: "Fighting fair when it is easy is practice. Fighting fair when it is hard is character. Your marriage needs both."
  },
  {
    id: 626, day: 170, program: 'marriage-strengthening',
    title: "The Power of Forgiveness",
    emoji: "💛",
    tagline: "Forgiveness is not pretending it did not happen. It is deciding it will not define what happens next.",
    body: "Forgiveness in marriage is not a single event. It is a practice — one you will need again and again. It does not mean condoning what happened, forgetting the pain, or skipping accountability. It means choosing to release the debt so that the future is not held hostage by the past. Today you explore what real forgiveness looks like in your marriage — and whether there is any forgiveness still waiting to be given or received.",
    duration: "30 min",
    prompts: [
      "What does forgiveness mean to you in the context of marriage? How do you know when you have truly forgiven?",
      "Is there anything in your marriage you are still holding onto — not out of malice, but because forgiveness feels incomplete?",
      "What makes it hardest for you to forgive — fear it will happen again, unresolved pain, or a sense that forgiveness lets them off the hook?",
      "Together: if there is something that needs forgiving, create space to name it. If forgiveness has already been given, express gratitude for that grace."
    ],
    reflection: "Forgiveness is the most expensive gift you will ever give your marriage. It is also the one with the highest return."
  },
  {
    id: 627, day: 171, program: 'marriage-strengthening',
    title: "Showing Up After You Have Let Them Down",
    emoji: "🪜",
    tagline: "The most courageous act in marriage is showing up the day after you failed.",
    body: "You will fail your partner. Not might — will. You will forget something important. You will say something careless. You will be absent when they needed you present. The question is not whether you will let them down. It is whether you will show up the next morning with humility, ownership, and renewed intention. Today you learn the art of showing up after falling short.",
    duration: "25 min",
    prompts: [
      "When you have let your partner down, what does your instinct tell you to do — apologize immediately, withdraw, overcompensate, or minimize?",
      "What does your partner most need from you in the aftermath of a letdown? Have you ever asked them directly?",
      "What does it feel like to receive grace from your partner after failing them? How does that grace shape your desire to do better?",
      "Together: name a time one of you showed up beautifully after a failure. Let that be a model for the future."
    ],
    reflection: "Your partner does not need you to be perfect. They need you to be the kind of person who comes back and tries again."
  },
  {
    id: 628, day: 172, program: 'marriage-strengthening',
    title: "When the World Turns Against You",
    emoji: "🌪️",
    tagline: "There will be seasons when it feels like everything is going wrong — and your marriage is the last thing standing.",
    body: "Job loss, betrayal by a friend, legal trouble, public embarrassment, family rejection — some seasons assault you from every side simultaneously. In these moments, the marriage becomes either a bunker or a battleground. Today you commit to being each other's shelter when the world offers none.",
    duration: "25 min",
    prompts: [
      "Have you ever faced a season where it felt like everything outside the marriage was falling apart? How did you hold onto each other?",
      "When external chaos increases, does your marriage tend to draw closer or drift apart?",
      "What does your partner do during crisis that makes you feel safest?",
      "Together: make a pact — when the world turns on us, we do not turn on each other. Say it out loud. Mean it."
    ],
    reflection: "The marriage that can be a refuge during the worst seasons becomes unshakable during every other season."
  },
  {
    id: 629, day: 173, program: 'marriage-strengthening',
    title: "The Long View of Commitment",
    emoji: "🔭",
    tagline: "Commitment is not a feeling you sustain. It is a structure you build that holds you when feelings fluctuate.",
    body: "There will be days when commitment is all you have. Not passion, not excitement, not even warmth — just the decision you made and the integrity to honor it. These days are not signs of failure. They are signs of maturity. Commitment is the bedrock that lets everything else grow. Today you examine your relationship with commitment itself — not as a cage, but as a cathedral.",
    duration: "30 min",
    prompts: [
      "What does commitment mean to you at this stage of your marriage — and how has that meaning evolved since your wedding day?",
      "Have there been moments when commitment alone carried you through a difficult stretch? What did that feel like?",
      "What is the difference between staying out of obligation and staying out of devotion? Where do you live right now?",
      "Together: reaffirm your commitment in your own words. Not the vows someone else wrote for you — the vows that reflect who you are now."
    ],
    reflection: "Commitment is not the absence of choice. It is the deepest choice you make — every single day."
  },
  {
    id: 630, day: 174, program: 'marriage-strengthening',
    title: "The Conversation You Keep Avoiding",
    emoji: "🚪",
    tagline: "Behind every avoided conversation is a marriage waiting to become more honest.",
    body: "Most couples have at least one conversation they keep putting off. It might be about money, intimacy, a relationship with an in-law, a parenting disagreement, or a dream that feels too vulnerable to share. The avoidance feels protective, but it creates distance. Today you move toward the conversation you have been circling — not to resolve it perfectly, but to begin it bravely.",
    duration: "30 min",
    prompts: [
      "What conversation have you been avoiding with your partner, and what are you afraid will happen if you have it?",
      "What is the cost of continuing to avoid this conversation — on your peace, your closeness, and your honesty?",
      "How can you open this conversation in a way that feels safe rather than confrontational?",
      "Together: name the conversation that has been waiting. You do not have to finish it today. But you must start it."
    ],
    reflection: "Avoidance is not peace. It is tension with a longer fuse. Have the conversation before the fuse runs out."
  },
  {
    id: 631, day: 175, program: 'marriage-strengthening',
    title: "Rebuilding Trust After a Breach",
    emoji: "🧱",
    tagline: "Trust is rebuilt not with promises but with consistent, visible action over time.",
    body: "Trust can be damaged by infidelity, but also by financial dishonesty, broken promises, emotional withdrawal, or chronic unreliability. Whatever the breach, rebuilding trust follows the same pattern: acknowledgment, accountability, transparency, patience, and sustained changed behavior. There are no shortcuts. Today you examine the current state of trust in your marriage and address any areas where rebuilding is needed.",
    duration: "30 min",
    prompts: [
      "On a scale of one to ten, how strong is the trust in your marriage right now? What would move it higher?",
      "If trust has been damaged, what specific actions would help rebuild it — not vague promises, but concrete behaviors?",
      "What does it feel like to be the one rebuilding trust? What does it feel like to be the one deciding whether to extend it?",
      "Together: if there is a trust deficit in your marriage, name it honestly. Then agree on three specific, observable actions that will help repair it."
    ],
    reflection: "Trust rebuilt after a breach can become stronger than trust that was never tested. But only if the rebuilding is real."
  },
  {
    id: 632, day: 176, program: 'marriage-strengthening',
    title: "Gratitude as Armor",
    emoji: "🛡️",
    tagline: "Gratitude does not ignore what is hard. It refuses to let what is hard eclipse what is good.",
    body: "During resilience-building, gratitude becomes more than a nice practice. It becomes a survival skill. The couples who name what is working, who acknowledge each other's effort, and who refuse to reduce their marriage to its worst moments are the couples who endure. Today you put on gratitude as armor — not because everything is perfect, but because what you have is worth protecting.",
    duration: "25 min",
    prompts: [
      "What are three things your partner does consistently that you may not acknowledge enough?",
      "How does expressing gratitude during a hard season feel different from expressing it during an easy one?",
      "What would change in your marriage if you both committed to naming one thing you are grateful for every day?",
      "Together: look each other in the eyes and each share three specific things you are grateful for about the other. Do not rush it."
    ],
    reflection: "Gratitude does not fix a struggling marriage. But it reminds you of everything worth fighting for."
  },
  {
    id: 633, day: 177, program: 'marriage-strengthening',
    title: "The Marriage You Will Have in Twenty Years",
    emoji: "🌅",
    tagline: "The marriage you are building today is the marriage you will be living in two decades. Choose wisely.",
    body: "It is easy to get trapped in the present — the current argument, the current stress, the current season. But marriages are long stories, and today is one chapter. When you zoom out and imagine your marriage twenty years from now, what do you see? Who are you? How do you treat each other? What have you built? Today you make decisions not for this week but for the decades ahead.",
    duration: "30 min",
    prompts: [
      "Close your eyes. Picture your marriage twenty years from now at its absolute best. What does it look like?",
      "What habits or patterns in your current marriage would you need to change to build that future?",
      "What do you want your partner to say about you as a spouse when looking back on decades of marriage?",
      "Together: describe your twenty-year marriage vision to each other. Notice where your visions align and where they need conversation."
    ],
    reflection: "Every day you are either building toward or drifting from the marriage you most want. Today you choose to build."
  },
  {
    id: 634, day: 178, program: 'marriage-strengthening',
    title: "Informally Renewing Your Vows",
    emoji: "💍",
    tagline: "You do not need a ceremony to recommit. You just need the courage to say it again and mean it more.",
    body: "Your wedding vows were spoken at the beginning, before you knew what marriage would ask of you. Now you know. You have lived through the hard days, the beautiful days, the mundane days, and the impossible days. The vows mean something different now — something deeper and more costly. Today you renew them informally, in your own words, shaped by everything you have learned.",
    duration: "35 min",
    prompts: [
      "If you were to rewrite your vows today based on everything you now know, what would you say?",
      "What part of your original vows has been the hardest to keep? What part have you exceeded beyond what you imagined?",
      "What new promise do you want to make to your partner that was not in the original vows?",
      "Together: face each other. Speak your renewed vows out loud — not rehearsed, not perfect. Just true."
    ],
    reflection: "A vow renewed after suffering carries more weight than a vow spoken in innocence. Speak it. Mean it. Live it."
  },
  {
    id: 635, day: 179, program: 'marriage-strengthening',
    title: "The Resilience You Have Built",
    emoji: "💪",
    tagline: "You have not just survived hard seasons. You have become the kind of couple that can.",
    body: "Look at what you have weathered. Look at the conflicts you have repaired, the grief you have held, the pressures you have withstood, and the forgiveness you have extended. This is not just endurance. This is resilience — the proven ability to absorb difficulty and emerge stronger. Today you name and honor the resilience you have built together.",
    duration: "25 min",
    prompts: [
      "What challenge has your marriage overcome that once felt like it might break you?",
      "What resilience skill has grown the most in your marriage — repair, forgiveness, communication, patience, or something else?",
      "How does knowing your marriage is resilient change how you face future uncertainty?",
      "Together: name the three hardest moments of your marriage and acknowledge that you survived each one. Let that be evidence of your strength."
    ],
    reflection: "Resilience is not toughness. It is tenderness that refuses to quit. You have proven you have it."
  },
  {
    id: 636, day: 180, program: 'marriage-strengthening',
    title: "Choosing Each Other Again",
    emoji: "🔥",
    tagline: "Every marriage is sustained by one decision made a thousand times: I choose you. Again. Still. Always.",
    body: "You did not just choose each other once. You have chosen each other every day you stayed, every argument you repaired, every difficult conversation you leaned into, every morning you woke up and decided this marriage was worth your best effort. That daily choice is the most romantic thing about your marriage — more than any gesture, any gift, any grand moment. Today you make that choice conscious, deliberate, and spoken.",
    duration: "30 min",
    prompts: [
      "What does it mean to you to choose your partner — not once, but repeatedly?",
      "Has there been a moment when choosing your partner required real courage? What kept you choosing?",
      "What makes you most grateful to have been chosen by your partner?",
      "Together: hold each other's hands. Look at each other. Say it plainly: 'I choose you. Not because I have to. Because I want to. Still.'"
    ],
    reflection: "The love that lasts is not the love that never wavers. It is the love that wavers and then chooses to stay."
  },
  {
    id: 637, day: 181, program: 'marriage-strengthening',
    title: "Six Months In — Taking Stock",
    emoji: "📖",
    tagline: "You have been doing this for half a year. Let that land.",
    body: "Six months. One hundred and eighty days of intentional, disciplined, courageous marriage work. You have explored emotional honesty, physical intimacy, shared vision, fun and adventure, and resilience under pressure. You are not the same people who started this journey, and your marriage is not the same marriage. Today you take an honest, loving inventory of where you stand.",
    duration: "40 min",
    prompts: [
      "What single word would you use to describe your marriage right now compared to six months ago?",
      "What area of your marriage has grown the most during this journey — emotional, physical, spiritual, or practical?",
      "What area still needs the most attention as you move into the final stretch?",
      "Together: each of you share the one thing you are most proud of in your partner's growth. Then name one area you want to keep growing together."
    ],
    reflection: "Half a year of showing up. That is not a statistic. That is a testament to who you are becoming together."
  },
  {
    id: 638, day: 182, program: 'marriage-strengthening',
    title: "What Is Working — Protect It",
    emoji: "🔒",
    tagline: "Do not only fix what is broken. Fiercely protect what is thriving.",
    body: "In the pursuit of growth, couples often focus exclusively on problems and neglect the practices that are already working. This is a mistake. The habits, rhythms, and patterns that are currently strengthening your marriage are just as important as the areas that need attention. Today you identify what is working and commit to protecting it with the same energy you bring to fixing what is not.",
    duration: "25 min",
    prompts: [
      "What three habits or practices have most strengthened your marriage during this journey?",
      "What is your partner doing consistently well that you want to make sure they know you notice and value?",
      "What would you lose if you stopped protecting what is currently working?",
      "Together: list five things that are working in your marriage right now. Agree to protect each one with the same urgency you bring to solving problems."
    ],
    reflection: "A garden that is only weeded but never watered will die just as surely as one overrun with weeds. Water what is growing."
  },
  {
    id: 639, day: 183, program: 'marriage-strengthening',
    title: "What Still Needs Tending",
    emoji: "🌱",
    tagline: "Honesty about what still needs work is not discouragement. It is devotion.",
    body: "Alongside celebrating what is working, today you honestly name what still needs tending. Not with shame, not with blame, but with the clear-eyed devotion of gardeners who know that some plants take longer to bloom. Perhaps intimacy still feels guarded. Perhaps communication still breaks down under stress. Perhaps a specific wound still aches. Whatever it is, naming it is the first step to healing it.",
    duration: "30 min",
    prompts: [
      "What aspect of your marriage still feels underdeveloped or fragile despite the work you have done?",
      "What is keeping that area from growing — fear, avoidance, skill gaps, or unresolved pain?",
      "What specific support — from each other, from a counselor, from a mentor — would help that area flourish?",
      "Together: name one area that still needs tending. Approach it as partners, not critics. Make a plan to address it in the months ahead."
    ],
    reflection: "The courage to name what is still unfinished is the same courage that will finish it."
  },
  {
    id: 640, day: 184, program: 'marriage-strengthening',
    title: "Setting Intentions for the Final Stretch",
    emoji: "🎯",
    tagline: "You have one hundred and eighty-one days remaining. What will you make of them?",
    body: "The final stretch of this journey is not a wind-down. It is an intensification. The foundation is built, the skills are sharpened, the resilience is tested. Now you go deeper. Today you set clear intentions for the remaining months — not vague hopes, but specific commitments about what you want your marriage to become by Day 365.",
    duration: "30 min",
    prompts: [
      "What do you want your marriage to look like on Day 365 that it does not look like today?",
      "What personal growth do you want to bring to the remaining journey — not just for the marriage, but for yourself within it?",
      "What is one bold commitment you are willing to make for the final stretch?",
      "Together: write three shared intentions for the months ahead. Post them somewhere visible. Let them guide you."
    ],
    reflection: "Intention without action is a wish. Intention with commitment is a blueprint. Build accordingly."
  },
  {
    id: 641, day: 185, program: 'marriage-strengthening',
    title: "The Practices You Will Keep Forever",
    emoji: "♾️",
    tagline: "This program ends in six months. The practices you are building should not.",
    body: "Of all the habits, conversations, and disciplines you have encountered in the first one hundred and eighty-four days, some will naturally become permanent fixtures in your marriage. Others will fade. Today you identify the practices that have made the biggest difference and commit to carrying them beyond this program. This is how transformation becomes lifestyle.",
    duration: "25 min",
    prompts: [
      "What practice from this journey has made the single biggest difference in your marriage?",
      "What conversation rhythm — daily check-ins, weekly reviews, monthly deeper dives — do you want to maintain permanently?",
      "What would happen to your marriage if you stopped all intentional practices once this program ends?",
      "Together: choose three practices to make permanent. Schedule them. Treat them as non-negotiable parts of your married life."
    ],
    reflection: "The program is temporary. The marriage is forever. Build practices that last as long as your commitment."
  },
  {
    id: 642, day: 186, program: 'marriage-strengthening',
    title: "A Letter to Your Future Marriage",
    emoji: "✉️",
    tagline: "Write to the marriage you are becoming — so it knows what you expect of it.",
    body: "Today is a creative exercise with profound purpose. You are going to write a letter — not to your partner, but to your marriage itself. Address it to the entity you are building together. Tell it what you expect from it, what you are willing to give to it, and what you refuse to let it become. This letter is a time capsule of your current devotion and a compass for the road ahead.",
    duration: "30 min",
    prompts: [
      "If your marriage were a living entity, what would you thank it for?",
      "What would you ask your future marriage to protect — what qualities, habits, or values must never be lost?",
      "What would you warn your future marriage about — what threats should it never underestimate?",
      "Together: each of you write a short letter to your marriage. Read them to each other. Keep them somewhere you can revisit on Day 365."
    ],
    reflection: "A marriage that knows what it is meant to be has a compass even in the fog. Your letter is that compass."
  },
  {
    id: 643, day: 187, program: 'marriage-strengthening',
    title: "Ready for the Deep — The Final Stretch Begins",
    emoji: "🌊",
    tagline: "The first six months prepared you. The next six months will transform you.",
    body: "You stand at the beginning of the final half of your marriage-strengthening journey. Everything that came before — the emotional foundations, the intimacy work, the vision-building, the play, the resilience — was preparation for what comes next. The final stretch goes deeper into legacy, purpose, spiritual connection, sexuality, leadership, and the kind of marriage that shapes generations. You are ready. Not because it will be easy, but because you have proven you can do hard, beautiful things together.",
    duration: "30 min",
    prompts: [
      "What are you most looking forward to in the final half of this journey?",
      "What are you most nervous about exploring — and what does that nervousness reveal about where you need to grow?",
      "What would it mean for your marriage — and your family, your legacy, your community — if you fully committed to this final stretch?",
      "Together: stand together. Hold hands. Say: 'We are ready for the deep.' Then step in."
    ],
    reflection: "The shallow end is behind you. What lies ahead requires everything you have become. You are ready."
  },
  {
    id: 644, day: 188, program: 'marriage-strengthening',
    title: "The Legacy Question",
    emoji: "🏛️",
    tagline: "What will your marriage leave behind?",
    body: "Every marriage creates a legacy — whether intentionally or by accident. Tonight you begin the work of choosing yours. What do you want people to say about your marriage in fifty years? What values, traditions, and truths do you want to echo through your family line long after you are gone? This is not about perfection. It is about purpose.",
    duration: "30 min",
    prompts: [
      "When people look at our marriage, what do you hope they see?",
      "What is one value you want our family to be known for — generations from now?",
      "What legacy did your parents' marriage leave you, and what do you want to do differently?",
      "If our marriage had a mission statement, what would it say?"
    ],
    reflection: "A marriage without legacy awareness drifts. A marriage with it builds something that outlasts both of you."
  },
  {
    id: 645, day: 189, program: 'marriage-strengthening',
    title: "Building Something Bigger",
    emoji: "🌍",
    tagline: "Your marriage is not just for you.",
    body: "The strongest marriages eventually realize they exist for more than the two people inside them. Your love has the power to heal, inspire, mentor, and serve. Tonight, explore what it would look like to build something together — a project, a cause, a tradition, a movement — that channels your partnership into the world.",
    duration: "25 min",
    prompts: [
      "What cause or mission stirs both of our hearts?",
      "If we could build one thing together that served our community, what would it be?",
      "How does our marriage already impact others — even if we haven't named it?",
      "What would it take for us to move from dreaming about impact to actually creating it?"
    ],
    reflection: "A couple that builds something bigger than themselves never runs out of reasons to stay connected."
  },
  {
    id: 646, day: 190, program: 'marriage-strengthening',
    title: "The Mentoring Marriage",
    emoji: "🤝",
    tagline: "Who is watching your love story?",
    body: "Whether you know it or not, younger couples are watching you. Your children, your nieces and nephews, your friends' relationships — they are all quietly taking notes. Tonight, talk about what it would mean to intentionally mentor another couple. Not from a place of perfection, but from a place of honesty and hard-won wisdom.",
    duration: "25 min",
    prompts: [
      "Is there a younger couple in our lives who could benefit from our experience?",
      "What is the most important lesson our marriage has taught us that we could pass on?",
      "What holds us back from being more open about our journey as a couple?",
      "How would mentoring another couple actually strengthen our own marriage?"
    ],
    reflection: "Teaching what you have learned is one of the deepest ways to honor the work you have done together."
  },
  {
    id: 647, day: 191, program: 'marriage-strengthening',
    title: "Generational Patterns",
    emoji: "🔗",
    tagline: "Break what needs breaking. Keep what deserves keeping.",
    body: "Every family carries patterns across generations — some beautiful, some destructive. Tonight, trace the patterns you each inherited and decide together which ones stay and which ones end with you. This is sacred, generational work. The cycles you break tonight will never reach your children.",
    duration: "30 min",
    prompts: [
      "What is one beautiful pattern from your family of origin that you want to carry forward?",
      "What is one painful pattern you are committed to ending in our family line?",
      "Where have we already broken a generational cycle together — and how does that feel?",
      "What new pattern do we want to be the first generation to establish?"
    ],
    reflection: "You are not just building a marriage. You are editing a generational story — and every edit matters."
  },
  {
    id: 648, day: 192, program: 'marriage-strengthening',
    title: "Family Traditions Worth Creating",
    emoji: "🕯️",
    tagline: "Traditions are love made repeatable.",
    body: "The traditions you create now will become the memories your family treasures forever. Some will be grand. Most will be small — a Sunday morning ritual, a birthday tradition, a way you celebrate each other that belongs only to your family. Tonight, dream together about the traditions you want to anchor your family's identity.",
    duration: "25 min",
    prompts: [
      "What is one tradition from your childhood that you want to bring into our family?",
      "What is a new tradition we could start this month that would bring us closer?",
      "What holiday or seasonal tradition do you wish we had?",
      "How do we make sure our traditions reflect who we actually are — not just what looks good?"
    ],
    reflection: "The families that endure are the ones that ritualize their love. Start building yours tonight."
  },
  {
    id: 649, day: 193, program: 'marriage-strengthening',
    title: "Your Shared Purpose",
    emoji: "🧭",
    tagline: "A marriage without shared purpose eventually becomes a roommate arrangement.",
    body: "Shared purpose is the engine of a lasting marriage. It is what keeps you rowing in the same direction when the current gets rough. Tonight, get honest about whether you are currently aligned — and if not, begin the work of finding your way back to a shared 'why.'",
    duration: "30 min",
    prompts: [
      "Do you feel like we are currently rowing in the same direction? Why or why not?",
      "What shared goal or dream excites both of us right now?",
      "Where have we drifted into separate purposes — and what brought us there?",
      "What would it look like for us to wake up every day with a shared sense of mission?"
    ],
    reflection: "Purpose is not found once. It is renegotiated across seasons. The couples who thrive are the ones who keep renegotiating."
  },
  {
    id: 650, day: 194, program: 'marriage-strengthening',
    title: "Your Marriage and Your Community",
    emoji: "🏘️",
    tagline: "Strong marriages build strong neighborhoods.",
    body: "Your marriage does not exist in a vacuum. It exists inside a neighborhood, a church, a school community, a friend group, a workplace ecosystem. Tonight, talk about how your marriage shows up in your community — and how your community shows up in your marriage. Both directions matter.",
    duration: "25 min",
    prompts: [
      "How does our community support our marriage — and where does it fall short?",
      "How does our marriage contribute to the health of our community?",
      "Are there relationships in our community that drain us as a couple? How do we handle that?",
      "What is one way we could serve our community together this month?"
    ],
    reflection: "A marriage that serves only itself eventually starves. A marriage that serves others finds nourishment everywhere."
  },
  {
    id: 651, day: 195, program: 'marriage-strengthening',
    title: "Values You Want to Pass Down",
    emoji: "📜",
    tagline: "Your children will not remember your lectures. They will remember your living.",
    body: "The values you live — not the ones you talk about — are the ones your children will inherit. Tonight, identify the core values you want to define your family. Then ask the harder question: are you actually living them? The gap between stated values and lived values is where generational confusion begins.",
    duration: "30 min",
    prompts: [
      "What are three values we want our family to be known for?",
      "Which of those values are we already modeling well?",
      "Which value do we talk about but struggle to consistently live?",
      "How can we close the gap between what we say and what we do?"
    ],
    reflection: "Values are not inherited through words. They are inherited through watching two people live them out — especially when it is hard."
  },
  {
    id: 652, day: 196, program: 'marriage-strengthening',
    title: "The Story Your Marriage Tells",
    emoji: "📖",
    tagline: "Every marriage is a story. What genre is yours?",
    body: "If someone wrote a book about your marriage, what kind of story would it be? A redemption arc? A slow-burn romance? A comedy of errors? A hero's journey? Tonight, narrate your own love story back to each other — and notice which chapters you are proud of, which ones you would rewrite, and where the plot is heading next.",
    duration: "25 min",
    prompts: [
      "If our marriage were a book, what would the title be?",
      "What chapter are we in right now — and what is it about?",
      "Which chapter of our story are you most proud of?",
      "What do you want the next chapter to be about?"
    ],
    reflection: "You are both the authors and the characters of your love story. Write the next chapter on purpose."
  },
  {
    id: 653, day: 197, program: 'marriage-strengthening',
    title: "Financial Legacy",
    emoji: "💰",
    tagline: "Money reveals what you truly value.",
    body: "Financial legacy is not just about wealth — it is about wisdom. It is about the relationship with money you model for your children and the financial foundation you build for generations to come. Tonight, talk honestly about your financial values, your fears, and your dreams. This is one of the most important legacy conversations you will ever have.",
    duration: "30 min",
    prompts: [
      "What is the financial legacy you each inherited from your families — and how has it shaped you?",
      "What financial wisdom do we want to pass down to our children?",
      "Where are we aligned financially — and where do we need more honest conversation?",
      "What would 'financial peace' actually look like for our family?"
    ],
    reflection: "The way you handle money together teaches your children more about values than any lecture ever could."
  },
  {
    id: 654, day: 198, program: 'marriage-strengthening',
    title: "Spiritual Legacy",
    emoji: "✨",
    tagline: "What you believe together shapes everything you build.",
    body: "Whether you share a faith tradition, a spiritual practice, or a philosophical framework, the spiritual dimension of your marriage matters deeply. It is the invisible architecture beneath everything visible. Tonight, explore what you believe together — and how those beliefs shape the legacy you are building.",
    duration: "30 min",
    prompts: [
      "What spiritual or philosophical beliefs anchor our marriage?",
      "How do we want to nurture the spiritual life of our family?",
      "Where are we spiritually aligned — and where do we differ? How do we honor both?",
      "What spiritual practice could we begin together that would deepen our connection?"
    ],
    reflection: "A marriage built on shared spiritual ground can weather any storm — because the foundation goes deeper than circumstances."
  },
  {
    id: 655, day: 199, program: 'marriage-strengthening',
    title: "Leading as a Couple",
    emoji: "👑",
    tagline: "Leadership begins at home.",
    body: "The world needs more couples who lead well together — not from ego, but from alignment. Tonight, explore what leadership looks like in your marriage. Who leads where? How do you make decisions? Where does one partner need to step up and the other step back? Great couples are great leadership teams.",
    duration: "25 min",
    prompts: [
      "In what areas do you naturally lead in our marriage — and in what areas do I?",
      "Where do we struggle with shared decision-making?",
      "What does healthy leadership look like in a marriage — and what does unhealthy leadership look like?",
      "How can we lead our family more intentionally as a unified team?"
    ],
    reflection: "A marriage where both partners lead from their strengths is a family where everyone thrives."
  },
  {
    id: 656, day: 200, program: 'marriage-strengthening',
    title: "The Home You Have Created",
    emoji: "🏡",
    tagline: "A home is not a house. It is a feeling.",
    body: "You have created something sacred: a home. Not just a physical space, but an emotional atmosphere — a place where people feel something when they walk in. Tonight, celebrate what your home has become and dream about what you want it to feel like in the years ahead.",
    duration: "25 min",
    prompts: [
      "What do you love most about the home we have created together?",
      "What feeling do you want people to experience when they enter our home?",
      "What is one thing we could change about our home environment that would improve our daily life?",
      "How does our home reflect who we are as a couple — and who we are becoming?"
    ],
    reflection: "The home you create together is the first legacy your children will ever know. Make it feel like love."
  },
  {
    id: 657, day: 201, program: 'marriage-strengthening',
    title: "Your Marriage and the World",
    emoji: "🌐",
    tagline: "A thriving marriage is a revolutionary act.",
    body: "In a world that often cheapens commitment, your marriage is a radical statement. Every day you choose each other, you push back against cynicism and apathy. Tonight, reflect on the broader impact of your commitment — not with arrogance, but with awareness that what you are building matters far beyond your front door.",
    duration: "25 min",
    prompts: [
      "How does the state of our marriage affect the people closest to us?",
      "In what ways is choosing to stay committed a countercultural act?",
      "What message does our marriage send to the next generation?",
      "How can we be more intentional about the ripple effects of our love?"
    ],
    reflection: "You may never know the full impact of your marriage on the world. But the world is watching — and it needs what you are building."
  },
  {
    id: 658, day: 202, program: 'marriage-strengthening',
    title: "Writing Your Family Creed",
    emoji: "🖋️",
    tagline: "Put your values on paper. Make them permanent.",
    body: "Tonight you will do something most families never do: write a family creed. This is a short, powerful statement of who you are, what you stand for, and what you are building together. Frame it. Revisit it. Let it become the document your family returns to when the world gets loud.",
    duration: "30 min",
    prompts: [
      "What are the three to five non-negotiable principles of our family?",
      "How do we want to treat each other — even when it is hard?",
      "What is our family's relationship to the outside world?",
      "Draft your creed together. Start with: 'In this family, we...'"
    ],
    reflection: "A family creed is not a wish list. It is a declaration. Write it like you mean it — because your grandchildren may read it someday."
  },
  {
    id: 659, day: 203, program: 'marriage-strengthening',
    title: "The Elders in Your Story",
    emoji: "🌳",
    tagline: "Honor those who paved the way — even imperfectly.",
    body: "Every couple stands on the shoulders of those who came before — parents, grandparents, mentors, elders who modeled love in whatever way they could. Tonight, honor the elders in your story. Name what they gave you. Name what they could not give. And decide what you will carry forward.",
    duration: "25 min",
    prompts: [
      "Which elder couple most influenced your understanding of marriage?",
      "What is one gift you received from watching an older couple love each other?",
      "What wound or gap from your elders' marriages do you want to heal in your own?",
      "How can we honor the imperfect love that came before us while building something even stronger?"
    ],
    reflection: "Gratitude for those who came before — even when their love was flawed — is one of the most mature things a couple can practice."
  },
  {
    id: 660, day: 204, program: 'marriage-strengthening',
    title: "Teaching Your Children About Love",
    emoji: "🌱",
    tagline: "Your marriage is your children's first textbook on love.",
    body: "Your children are learning about love, conflict, repair, affection, and commitment by watching you every single day. Tonight, talk about what lessons your marriage is currently teaching — and whether those are the lessons you actually want to pass down.",
    duration: "25 min",
    prompts: [
      "What is our marriage currently teaching our children about how partners treat each other?",
      "What lesson about love do you most want our children to carry into their own relationships?",
      "Is there anything we do in front of our children that we should change?",
      "How can we be more intentional about modeling healthy love?"
    ],
    reflection: "Children do not learn love from conversations. They learn it from watching two people choose each other — again and again."
  },
  {
    id: 661, day: 205, program: 'marriage-strengthening',
    title: "The Couple You Admire",
    emoji: "🌟",
    tagline: "Find a marriage worth studying.",
    body: "Every great couple has at least one other couple they look up to — a marriage that inspires them to keep going. Tonight, name the couples you admire and explore what makes their relationship worthy of your respect. Then ask: what can you learn from them?",
    duration: "25 min",
    prompts: [
      "Which couple do you most admire — and what specifically inspires you about their marriage?",
      "What do they do that we could learn from?",
      "Have we ever told them how much their marriage means to us?",
      "What would it look like to have a closer relationship with a couple we admire?"
    ],
    reflection: "Isolation is the enemy of great marriages. Surround yourselves with couples who make you want to be better."
  },
  {
    id: 662, day: 206, program: 'marriage-strengthening',
    title: "Hospitality as Legacy",
    emoji: "🍽️",
    tagline: "An open table is an open heart.",
    body: "Some of the most powerful legacies are built around a table. The families who open their homes, who feed people, who create space for conversation and belonging — they change communities. Tonight, talk about what hospitality means to you as a couple and how your home can become a place of gathering and grace.",
    duration: "25 min",
    prompts: [
      "What role does hospitality play in our marriage and family life?",
      "What is your favorite memory of welcoming someone into our home?",
      "How could we be more intentional about opening our home to others?",
      "What would it look like if hospitality became one of our family's signature values?"
    ],
    reflection: "The table you set today becomes the memory someone carries for a lifetime. Open your doors more often."
  },
  {
    id: 663, day: 207, program: 'marriage-strengthening',
    title: "Creating a Giving Strategy Together",
    emoji: "💝",
    tagline: "Generosity is the overflow of a full marriage.",
    body: "How you give — your time, your money, your energy, your attention — reveals what your marriage is truly about. Tonight, create a giving strategy together. Not a budget line item, but a philosophy of generosity that reflects your deepest values as a couple.",
    duration: "30 min",
    prompts: [
      "What does generosity mean to each of us — and where did we learn that?",
      "Where are we currently generous — and where could we grow?",
      "If we could support one cause or organization together, what would it be?",
      "How do we teach our children about giving without making it performative?"
    ],
    reflection: "A marriage that gives generously never runs dry. Generosity creates its own abundance."
  },
  {
    id: 664, day: 208, program: 'marriage-strengthening',
    title: "Your Marriage Anthem",
    emoji: "🎵",
    tagline: "If your marriage had a soundtrack, what would be playing?",
    body: "Music has a way of capturing what words alone cannot. Tonight, choose a song — or a few songs — that represent your marriage. Not just a wedding song, but a song for this season. A song that captures the fight, the tenderness, the hope, the grit of what you are building together.",
    duration: "25 min",
    prompts: [
      "What song captures the spirit of our marriage right now?",
      "What song reminds you of the best of us?",
      "Is there a song that represents what we are building toward?",
      "Play your chosen song together. Sit close. Let it land."
    ],
    reflection: "Every great story has a soundtrack. Let yours play louder than the noise around you."
  },
  {
    id: 665, day: 209, program: 'marriage-strengthening',
    title: "Letters to Future Generations",
    emoji: "💌",
    tagline: "Write what you cannot say in person — to people who do not yet exist.",
    body: "Tonight, each of you will write a short letter to a future grandchild or great-grandchild you may never meet. Tell them about your marriage. Tell them what you fought for. Tell them what love actually looks like when two imperfect people refuse to quit. These letters are your legacy in ink.",
    duration: "30 min",
    prompts: [
      "What would you want a grandchild to know about our marriage?",
      "What advice would you give them about choosing a partner?",
      "What should they know about the hard seasons — and why you stayed?",
      "Read your letters to each other. Let the weight of them settle."
    ],
    reflection: "The letters you write tonight may be read by someone a hundred years from now. Make every word count."
  },
  {
    id: 666, day: 210, program: 'marriage-strengthening',
    title: "Protecting Your Marriage from Drift",
    emoji: "⚓",
    tagline: "Drift is slow. Drift is silent. Drift is deadly.",
    body: "Most marriages do not end in explosions. They end in drift — slow, imperceptible distance that accumulates until two people wake up as strangers. Tonight, audit your marriage for drift. Where have you stopped paying attention? Where has convenience replaced connection? Name it before it names you.",
    duration: "25 min",
    prompts: [
      "On a scale of one to ten, how connected do you feel to me right now?",
      "Where have we allowed drift to creep into our marriage?",
      "What daily or weekly practice could protect us from drifting apart?",
      "What is one thing we used to do that kept us close — and stopped doing?"
    ],
    reflection: "The couples who last are not the ones who never drift. They are the ones who notice the drift and course-correct."
  },
  {
    id: 667, day: 211, program: 'marriage-strengthening',
    title: "Building a Marriage Library",
    emoji: "📚",
    tagline: "Feed your marriage the way you feed your mind.",
    body: "Great marriages are learning marriages. They read together, listen to podcasts together, attend workshops together. Tonight, build a marriage library — a list of books, podcasts, talks, and resources that you want to explore together in the year ahead. Invest in your marriage the way you invest in your career.",
    duration: "25 min",
    prompts: [
      "What is one book or resource that has shaped your understanding of marriage?",
      "What topic would you like us to learn about together?",
      "Are we currently investing in the growth of our marriage — or coasting?",
      "Choose one book or podcast to start together this month."
    ],
    reflection: "A couple that learns together stays curious about each other. Curiosity is the antidote to complacency."
  },
  {
    id: 668, day: 212, program: 'marriage-strengthening',
    title: "Your Marriage and Your Work",
    emoji: "⚙️",
    tagline: "Work can fuel your marriage or drain it. Choose wisely.",
    body: "The relationship between your marriage and your careers is one of the most consequential dynamics in your life. Tonight, explore how work serves your marriage — and where it competes with it. This is not about quitting anything. It is about aligning your professional life with your relational priorities.",
    duration: "25 min",
    prompts: [
      "How does my work currently support or strain our marriage?",
      "Do you feel like our marriage gets the best of me — or what is left after work?",
      "What boundary around work would most improve our relationship?",
      "How can we better support each other's professional dreams without sacrificing our connection?"
    ],
    reflection: "Your career will applaud you and then replace you. Your marriage will grow old with you. Prioritize accordingly."
  },
  {
    id: 669, day: 213, program: 'marriage-strengthening',
    title: "The Hard Conversation You Have Been Avoiding",
    emoji: "🔓",
    tagline: "The conversation you avoid owns you. Have it tonight.",
    body: "Every couple has at least one conversation they have been putting off — about money, about in-laws, about a dream, about a wound, about a need. Tonight is the night. Not to solve everything, but to open the door. Avoidance does not protect your marriage. Honesty does.",
    duration: "30 min",
    prompts: [
      "What is the conversation we have been avoiding — and why?",
      "What are you afraid will happen if we have it?",
      "What is the cost of continuing to avoid it?",
      "Start with: 'There is something I need us to talk about...' and go."
    ],
    reflection: "Every avoided conversation becomes a wall. Every honest conversation becomes a bridge. Build the bridge."
  },
  {
    id: 670, day: 214, program: 'marriage-strengthening',
    title: "Sabbath for Your Marriage",
    emoji: "🕊️",
    tagline: "Rest is not laziness. It is strategy.",
    body: "Your marriage needs rest — not just from conflict, but from productivity, striving, and the relentless pace of modern life. Tonight, talk about what sabbath looks like for your marriage. How do you rest together? When do you stop doing and simply be? A marriage that never rests eventually breaks.",
    duration: "25 min",
    prompts: [
      "When was the last time we truly rested together — with no agenda?",
      "What does restful time together look like for each of us?",
      "What would a weekly or monthly 'marriage sabbath' look like?",
      "What do we need to stop doing in order to create space for rest?"
    ],
    reflection: "The most productive thing you can do for your marriage is sometimes nothing at all. Rest together. It is holy work."
  },
  {
    id: 671, day: 215, program: 'marriage-strengthening',
    title: "Stewarding Your Influence",
    emoji: "🔥",
    tagline: "Influence is not about fame. It is about faithfulness.",
    body: "As a couple, you carry influence — in your family, your friend group, your workplace, your community. The question is not whether you have influence. The question is whether you are stewarding it well. Tonight, talk about the influence your marriage carries and how to wield it with integrity.",
    duration: "25 min",
    prompts: [
      "Where do we carry influence as a couple — even if we have not named it?",
      "How are we currently using that influence — intentionally or unintentionally?",
      "What responsibility comes with the influence we carry?",
      "How can we use our platform — however small — to serve others well?"
    ],
    reflection: "Faithful stewardship of small influence is what qualifies you for greater influence. Start where you are."
  },
  {
    id: 672, day: 216, program: 'marriage-strengthening',
    title: "Renewing Your Vows in Private",
    emoji: "💍",
    tagline: "Say it again. Mean it more.",
    body: "You do not need a ceremony or an audience to renew your vows. Tonight, face each other and say what you would say now — after everything you have been through, everything you have learned, everything you have survived together. These vows will be rawer, more honest, and more powerful than the ones you said on your wedding day.",
    duration: "30 min",
    prompts: [
      "What would you promise me now that you could not have promised on our wedding day?",
      "What vow have you kept that you are most proud of?",
      "What vow do you need to recommit to?",
      "Face each other. Hold hands. Speak your renewed vows out loud."
    ],
    reflection: "The vows that matter most are not the ones you say once. They are the ones you renew every day in how you live."
  },
  {
    id: 673, day: 217, program: 'marriage-strengthening',
    title: "The Legacy Covenant",
    emoji: "🏰",
    tagline: "Sign your name to what you are building.",
    body: "Tonight is the culmination of thirty days of legacy work. You have explored your values, your purpose, your generational patterns, your influence, and your vision. Now it is time to make it official. Write a one-page legacy covenant — a document that captures what your marriage stands for, what you are building, and what you refuse to let die. Sign it together. Date it. Keep it sacred.",
    duration: "35 min",
    prompts: [
      "What are the three defining commitments of our legacy covenant?",
      "What will we protect at all costs?",
      "What will we build no matter how long it takes?",
      "Write it. Sign it. Date it. This is your covenant."
    ],
    reflection: "A covenant is stronger than a contract. It is a promise between souls. You have just written something that can outlast you both."
  },
  {
    id: 674, day: 218, program: 'marriage-strengthening',
    title: "Desire Begins with Honesty",
    emoji: "🔥",
    tagline: "You cannot fix what you will not name.",
    body: "Tonight you enter the most intimate territory of your journey: the landscape of desire, sexuality, and physical connection. This section requires courage, vulnerability, and grace. Start by simply being honest about where you are. No blame. No shame. Just the truth about your desire — what fuels it, what dampens it, and what you long for.",
    duration: "30 min",
    prompts: [
      "On a scale of one to ten, how satisfied are you with our physical intimacy right now?",
      "What is one thing about our intimate life that you appreciate?",
      "What is one thing you wish were different — but have been afraid to say?",
      "What would it take for you to feel completely safe talking about sex with me?"
    ],
    reflection: "The couples who thrive sexually are not the ones with perfect bodies or flawless technique. They are the ones who tell the truth."
  },
  {
    id: 675, day: 219, program: 'marriage-strengthening',
    title: "Keeping Desire Alive",
    emoji: "🌹",
    tagline: "Desire is not something you have. It is something you build.",
    body: "Desire in a long-term marriage is not automatic. It does not just happen because you love each other. It requires cultivation — intentional space, novelty, mystery, and the willingness to see your partner with fresh eyes. Tonight, talk about what keeps desire alive for each of you and what slowly kills it.",
    duration: "25 min",
    prompts: [
      "What makes you feel most desired by me?",
      "What kills desire for you — even if it seems small or irrational?",
      "When was the last time you felt a genuine spark of desire for me? What sparked it?",
      "What could we do this week to create the conditions for desire to show up?"
    ],
    reflection: "Desire is not a feeling to wait for. It is a fire to tend. And it only stays lit when both partners bring kindling."
  },
  {
    id: 676, day: 220, program: 'marriage-strengthening',
    title: "Sexual Communication",
    emoji: "💬",
    tagline: "Great lovers are great communicators.",
    body: "Most couples talk about everything except what happens in the bedroom. Tonight, break that pattern. Practice talking about sex the way you talk about everything else that matters — with honesty, curiosity, and zero judgment. The quality of your sexual communication determines the quality of your sexual connection.",
    duration: "25 min",
    prompts: [
      "What is the hardest thing for you to communicate about our intimate life?",
      "What do I do that you absolutely love — and have you told me clearly?",
      "What would you like to try or explore that you have not mentioned yet?",
      "How can we create an ongoing, shame-free conversation about our physical connection?"
    ],
    reflection: "Your partner cannot read your mind — especially in the bedroom. Say what you need. Ask what they need. Do it with love."
  },
  {
    id: 677, day: 221, program: 'marriage-strengthening',
    title: "Initiation and Receptivity",
    emoji: "🌊",
    tagline: "Who reaches for whom — and what does it mean?",
    body: "In every marriage, patterns of initiation and receptivity form. One partner tends to initiate. The other tends to respond. Neither role is wrong, but when the pattern becomes rigid, it can breed resentment or disconnection. Tonight, explore your patterns with curiosity rather than criticism.",
    duration: "25 min",
    prompts: [
      "Who typically initiates physical intimacy in our marriage?",
      "How does it feel to be the one who initiates most — or least?",
      "What does rejection feel like when you initiate — and what does it feel like to be the one saying 'not tonight'?",
      "What would a more balanced dynamic look like for us?"
    ],
    reflection: "Initiation is an act of vulnerability. Receptivity is an act of generosity. Both require courage."
  },
  {
    id: 678, day: 222, program: 'marriage-strengthening',
    title: "Body Image in Marriage",
    emoji: "🪞",
    tagline: "How you see your body shapes how you share it.",
    body: "Body image does not disappear after the wedding. It follows you into the bedroom, the bathroom, the moments of undressing and being seen. Tonight, talk honestly about how you feel in your body — and how those feelings affect your willingness to be fully present in physical intimacy.",
    duration: "25 min",
    prompts: [
      "How do you feel about your body right now — honestly?",
      "How does your body image affect your comfort with physical intimacy?",
      "What could I say or do that would help you feel more beautiful and desired?",
      "How can we create a marriage where both of us feel safe being fully seen?"
    ],
    reflection: "Your body is not an obstacle to intimacy. It is the vessel through which intimacy happens. Treat it — and your partner's — with reverence."
  },
  {
    id: 679, day: 223, program: 'marriage-strengthening',
    title: "Aging and Desire",
    emoji: "⏳",
    tagline: "Your bodies will change. Your desire does not have to die.",
    body: "Aging changes everything — energy, hormones, flexibility, recovery, confidence. But aging does not have to end desire. The couples who maintain passionate intimacy across decades are the ones who adapt, communicate, and refuse to let physical changes become excuses for emotional distance.",
    duration: "25 min",
    prompts: [
      "How has aging affected your experience of desire and intimacy?",
      "What fears do you have about physical intimacy as we get older?",
      "What excites you about the possibility of deepening our intimate life over time?",
      "How can we adapt our physical connection as our bodies change — without losing the fire?"
    ],
    reflection: "The most passionate couples at seventy are not the ones who look like they did at thirty. They are the ones who never stopped reaching for each other."
  },
  {
    id: 680, day: 224, program: 'marriage-strengthening',
    title: "Intimacy After Kids",
    emoji: "🌙",
    tagline: "Parenthood is not the death of desire. Neglect is.",
    body: "Children reshape everything about your marriage — including your intimate life. Exhaustion, touched-out bodies, lack of privacy, competing priorities. Tonight, talk honestly about how parenthood has impacted your physical connection — and commit to reclaiming the space your intimacy deserves.",
    duration: "25 min",
    prompts: [
      "How has having children changed our intimate life — for better and for worse?",
      "What do you miss most about our pre-kids physical connection?",
      "What practical barriers to intimacy can we solve together?",
      "What would it look like to make our intimate life a priority again — not someday, but now?"
    ],
    reflection: "Your children need parents who love each other deeply — and that includes physically. Protecting your intimacy protects your family."
  },
  {
    id: 681, day: 225, program: 'marriage-strengthening',
    title: "Scheduling vs. Spontaneity",
    emoji: "📅",
    tagline: "Scheduled intimacy is not unromantic. It is intentional.",
    body: "Many couples resist the idea of scheduling intimacy because it feels forced or clinical. But in the reality of busy, demanding lives, spontaneity alone often leads to drought. Tonight, explore the tension between scheduling and spontaneity — and find a rhythm that actually works for your life.",
    duration: "25 min",
    prompts: [
      "How do you feel about the idea of scheduling intimate time together?",
      "When we rely on spontaneity alone, what usually happens?",
      "What would it look like to create intentional space for physical connection — without making it feel like an appointment?",
      "Can we agree on a rhythm this week and try it with open hearts?"
    ],
    reflection: "You schedule what matters — meetings, workouts, date nights. Your intimate life deserves the same respect."
  },
  {
    id: 682, day: 226, program: 'marriage-strengthening',
    title: "The Erotic Imagination",
    emoji: "🌌",
    tagline: "Desire lives in the mind before it lives in the body.",
    body: "Physical intimacy begins long before physical touch. It begins in the imagination — in the way you think about your partner throughout the day, the anticipation you build, the inner world of desire you cultivate. Tonight, talk about the role of imagination in your intimate life and how to nurture it intentionally.",
    duration: "25 min",
    prompts: [
      "Do you think about me during the day in ways that build anticipation? How so?",
      "What kind of mental or emotional foreplay works for you?",
      "How can we build more anticipation and imagination into our intimate life?",
      "What is one way I could help your desire start earlier in the day — not just in the moment?"
    ],
    reflection: "The mind is the most powerful intimate organ you possess. Feed it well, and the body will follow."
  },
  {
    id: 683, day: 227, program: 'marriage-strengthening',
    title: "Romance as a Practice",
    emoji: "🌷",
    tagline: "Romance is not a personality trait. It is a discipline.",
    body: "Romance is not something you either have or you do not. It is a practice — a set of intentional actions that communicate desire, appreciation, and pursuit. Tonight, reclaim romance as a verb. Not grand gestures, but daily choices that say: I still choose you. I still see you. I still want you.",
    duration: "25 min",
    prompts: [
      "What does romance look like to you at this stage of our life?",
      "When was the last time you felt genuinely romanced by me?",
      "What small romantic gesture would mean the world to you this week?",
      "How can we make romance a daily practice instead of a rare event?"
    ],
    reflection: "The couples who stay in love are not the ones who feel romantic all the time. They are the ones who practice romance even when they do not feel it."
  },
  {
    id: 684, day: 228, program: 'marriage-strengthening',
    title: "Date Nights That Lead Somewhere",
    emoji: "🍷",
    tagline: "A date night without intention is just dinner.",
    body: "Date nights matter — but not all date nights are created equal. The ones that deepen your connection are the ones with presence, flirtation, and the unspoken understanding that the night is not just about food. Tonight, reimagine your date nights as a pathway to deeper connection — emotional and physical.",
    duration: "25 min",
    prompts: [
      "What makes a date night feel truly connected versus just going through the motions?",
      "What kind of date night puts you in the mood for closeness?",
      "How can we create date nights that build both emotional and physical anticipation?",
      "Plan a date night this week that is designed to lead somewhere. Be specific."
    ],
    reflection: "The best date nights do not end at the restaurant. They end with two people who remembered why they chose each other."
  },
  {
    id: 685, day: 229, program: 'marriage-strengthening',
    title: "Physical Affection as Daily Bread",
    emoji: "🤗",
    tagline: "Touch is not a luxury. It is a necessity.",
    body: "Physical affection — the kind that does not lead to the bedroom — is the daily bread of a thriving marriage. A hand on the back. A long hug. A kiss that lasts more than a second. These small acts of touch keep the nervous system regulated, the bond secure, and the desire warm between the bigger moments.",
    duration: "25 min",
    prompts: [
      "How much non-sexual physical affection do we share on a typical day?",
      "What kind of touch makes you feel most loved and connected?",
      "Where have we let daily affection slip — and what replaced it?",
      "Can we commit to one specific daily touch practice this week? Name it."
    ],
    reflection: "Six seconds. That is how long a hug needs to last to release oxytocin. Most couples stop at two. Hold on longer."
  },
  {
    id: 686, day: 230, program: 'marriage-strengthening',
    title: "Sexual Generosity",
    emoji: "🎁",
    tagline: "The best lovers are the most generous ones.",
    body: "Sexual generosity means caring as much about your partner's pleasure, comfort, and experience as your own. It is the opposite of selfishness and performance. Tonight, explore what generosity looks like in your intimate life — and where each of you could grow in giving without keeping score.",
    duration: "25 min",
    prompts: [
      "What does sexual generosity mean to you?",
      "When have you felt most generously loved by me in our intimate life?",
      "Where could I be more generous in how I love you physically?",
      "How do we create a culture of giving in the bedroom — not obligation, but genuine delight in each other's pleasure?"
    ],
    reflection: "Generosity in the bedroom is not about doing things you hate. It is about delighting in your partner's delight. That is the difference."
  },
  {
    id: 687, day: 231, program: 'marriage-strengthening',
    title: "The Conversation You Have Never Had About Sex",
    emoji: "🗝️",
    tagline: "Somewhere inside you is something you have never said. Say it tonight.",
    body: "Every person carries at least one unspoken truth about their intimate life — a desire, a fear, a wound, a fantasy, a frustration that has never been voiced. Tonight is a sacred space to say the unsaid. Not to shock or demand, but to trust your partner with the part of you that has been hiding.",
    duration: "30 min",
    prompts: [
      "What is one thing about your experience of intimacy that I do not know?",
      "What has been your biggest unspoken frustration or desire in our intimate life?",
      "Is there a sexual wound or shame from your past that still affects you?",
      "What do you need from me to feel safe enough to keep having conversations like this?"
    ],
    reflection: "The things you have never said hold the most power — to connect or to divide. Spoken with love, they almost always connect."
  },
  {
    id: 688, day: 232, program: 'marriage-strengthening',
    title: "Exploring Fantasies Together",
    emoji: "✨",
    tagline: "Curiosity is the bridge between routine and adventure.",
    body: "Fantasy in marriage is not about escapism — it is about expansion. It is about being curious enough to explore the full landscape of your desire together, without shame or pressure. Tonight, approach this topic with playfulness and an open mind. Not every fantasy needs to be acted on. But every fantasy deserves to be heard.",
    duration: "25 min",
    prompts: [
      "Is there something you have been curious about exploring together?",
      "How do you feel about sharing fantasies — does it excite you, scare you, or both?",
      "What is the difference between sharing a fantasy and making a demand?",
      "How can we create a space where curiosity is always welcome — even if the answer is 'not for me'?"
    ],
    reflection: "A marriage where both partners can be curious without fear is a marriage that never gets bored. Stay curious together."
  },
  {
    id: 689, day: 233, program: 'marriage-strengthening',
    title: "The Language of Touch",
    emoji: "🖐️",
    tagline: "Your hands can say what your words cannot.",
    body: "Touch is its own language, and like any language, fluency takes practice. Tonight, focus on the way you touch each other — not just where, but how. The pressure, the pace, the tenderness, the intention behind every point of contact. Learn to speak your partner's touch dialect with greater fluency.",
    duration: "25 min",
    prompts: [
      "How would you describe my touch — and what do you love most about it?",
      "Where on your body do you most enjoy being touched in non-sexual moments?",
      "Is there a way I touch you that you would like me to adjust?",
      "Tonight, spend five minutes simply touching each other with presence and intention. No agenda. Just connection."
    ],
    reflection: "The hands that have held your partner through every season deserve to keep learning what brings them comfort and joy."
  },
  {
    id: 690, day: 234, program: 'marriage-strengthening',
    title: "Desire Discrepancy with Grace",
    emoji: "⚖️",
    tagline: "Different levels of desire do not mean different levels of love.",
    body: "Almost every couple experiences desire discrepancy — one partner wants more, the other wants less, and the gap creates tension. Tonight, address this reality with compassion instead of accusation. Desire discrepancy is not a flaw in your marriage. It is a feature of two unique humans learning to love each other well.",
    duration: "30 min",
    prompts: [
      "Do we experience desire discrepancy? How does it show up in our marriage?",
      "How does the higher-desire partner feel about initiating — and sometimes being turned down?",
      "How does the lower-desire partner feel about the pressure — real or perceived?",
      "What would a compassionate compromise look like that honors both of us?"
    ],
    reflection: "The goal is not matching desire levels. The goal is matching care levels. When both partners care deeply about the other's experience, the gap closes naturally."
  },
  {
    id: 691, day: 235, program: 'marriage-strengthening',
    title: "Sensuality Beyond the Bedroom",
    emoji: "🌸",
    tagline: "Engage all five senses. All day. Every day.",
    body: "Sensuality is not just about sex. It is about engaging the senses — taste, touch, sight, smell, sound — in ways that awaken pleasure and presence throughout your daily life together. Tonight, explore how you can infuse your ordinary life with sensory richness that feeds your connection.",
    duration: "25 min",
    prompts: [
      "Which of the five senses is most connected to desire for you?",
      "What sensory experience do we share that makes you feel close to me?",
      "How can we bring more beauty, texture, and sensory pleasure into our daily life?",
      "Plan one sensory experience to share this week — a meal, a bath, music, a walk. Make it intentional."
    ],
    reflection: "A marriage rich in sensory experience is a marriage rich in presence. And presence is the soil where desire grows."
  },
  {
    id: 692, day: 236, program: 'marriage-strengthening',
    title: "The Atmosphere of Your Bedroom",
    emoji: "🛏️",
    tagline: "Your bedroom should feel like a sanctuary, not a storage unit.",
    body: "The physical environment of your bedroom affects your intimate life more than you realize. Clutter, screens, laundry piles, harsh lighting — they all send signals to your nervous system that say 'this is not a place for connection.' Tonight, reimagine your bedroom as a sanctuary designed for rest, romance, and reunion.",
    duration: "25 min",
    prompts: [
      "How does our bedroom currently feel — inviting or neglected?",
      "What changes would make our bedroom feel more like a sanctuary?",
      "What does not belong in our bedroom that we have been tolerating?",
      "Choose one change to make this week that transforms the energy of the space."
    ],
    reflection: "You would not hold a sacred ceremony in a cluttered garage. Treat your bedroom with the reverence your intimacy deserves."
  },
  {
    id: 693, day: 237, program: 'marriage-strengthening',
    title: "Flirting with Your Spouse",
    emoji: "😏",
    tagline: "You courted each other once. Do it again.",
    body: "Somewhere along the way, most couples stop flirting. The playful texts, the lingering looks, the teasing, the pursuit — it all fades into the background of responsibility. Tonight, bring it back. Flirting is not just for new relationships. It is the lifeline of long ones.",
    duration: "25 min",
    prompts: [
      "When was the last time you flirted with me — really flirted?",
      "What kind of flirting makes you feel most alive and desired?",
      "Why did we stop flirting — and what would it take to start again?",
      "Send each other one flirtatious text right now. Make it good."
    ],
    reflection: "Flirting says: I still see you. I still want you. I still choose to pursue you. Never stop saying that."
  },
  {
    id: 694, day: 238, program: 'marriage-strengthening',
    title: "Vulnerability and Arousal",
    emoji: "💫",
    tagline: "The deepest turn-on is being fully known.",
    body: "There is a profound connection between emotional vulnerability and physical arousal. When you feel truly seen, truly known, truly safe — your body opens in ways that performance and technique can never achieve. Tonight, explore how emotional depth fuels physical connection in your marriage.",
    duration: "25 min",
    prompts: [
      "When do you feel most emotionally open with me — and how does that affect your desire?",
      "Is there a connection between our emotional closeness and our physical intimacy?",
      "What makes you feel emotionally safe enough to be physically vulnerable?",
      "How can we build more emotional depth into the hours before physical intimacy?"
    ],
    reflection: "The couples with the richest intimate lives are not the most skilled. They are the most vulnerable. Depth creates desire."
  },
  {
    id: 695, day: 239, program: 'marriage-strengthening',
    title: "Pleasure Without Pressure",
    emoji: "🌿",
    tagline: "Not every intimate moment needs to go all the way.",
    body: "One of the most liberating things a couple can learn is that physical intimacy exists on a spectrum. Not every touch needs to lead to intercourse. Not every kiss needs to escalate. Tonight, explore what it means to share pleasure without the pressure of a specific outcome — and discover how freeing that can be.",
    duration: "25 min",
    prompts: [
      "Do you ever feel pressure for physical affection to lead to a specific outcome?",
      "What would it feel like to touch and be touched with no expectation?",
      "How could removing pressure actually increase desire over time?",
      "Tonight, share ten minutes of physical closeness with zero agenda. Just be present."
    ],
    reflection: "When you remove the pressure to perform, you create the space to connect. And connection is what desire has been looking for all along."
  },
  {
    id: 696, day: 240, program: 'marriage-strengthening',
    title: "Healing Sexual Wounds Together",
    emoji: "🩹",
    tagline: "Some wounds can only heal inside the safety of your marriage.",
    body: "Many people carry sexual wounds — from past relationships, from shame, from trauma, from religious messaging, from cultural conditioning. These wounds do not disappear at the altar. They follow you into your marriage and affect your intimate life in ways both obvious and hidden. Tonight, hold space for each other's wounds with extraordinary tenderness.",
    duration: "30 min",
    prompts: [
      "Is there a wound related to sexuality or intimacy that still affects you?",
      "How has that wound shaped the way you experience our intimate life?",
      "What do you need from me to feel safe in the healing process?",
      "How can our marriage become a place where old wounds finally heal?"
    ],
    reflection: "You are not each other's therapists, but you are each other's safest place. Hold the wounds gently. Healing happens in safety."
  },
  {
    id: 697, day: 241, program: 'marriage-strengthening',
    title: "The Art of Anticipation",
    emoji: "⏰",
    tagline: "The best things in life are worth waiting for — and building toward.",
    body: "Anticipation is one of the most underused tools in a married couple's intimate life. The slow build throughout the day — a look, a message, a whispered promise — creates a kind of desire that instant gratification can never match. Tonight, learn the art of building anticipation together.",
    duration: "25 min",
    prompts: [
      "What builds anticipation for you — and what kills it?",
      "How can we create more build-up throughout the day instead of going from zero to sixty?",
      "What is one way you could signal desire to me hours before we are together?",
      "Plan an evening later this week where anticipation is the entire strategy."
    ],
    reflection: "The meal you wait for all day tastes better than the one you grab on the go. Your intimate life works the same way."
  },
  {
    id: 698, day: 242, program: 'marriage-strengthening',
    title: "Laughter and Intimacy",
    emoji: "😂",
    tagline: "If you cannot laugh in bed, you are taking it too seriously.",
    body: "Some of the most connected intimate moments between couples involve laughter — the awkward fumble, the unexpected sound, the moment something goes hilariously wrong. Laughter in the bedroom is not a failure. It is a sign of safety, playfulness, and deep trust. Tonight, celebrate the lighter side of your intimate life.",
    duration: "25 min",
    prompts: [
      "What is the funniest thing that has ever happened during an intimate moment between us?",
      "How comfortable are you with laughter during physical intimacy?",
      "Does humor help you relax and connect — or does it take you out of the moment?",
      "How can we bring more playfulness and lightness into the bedroom?"
    ],
    reflection: "A couple who can laugh together naked has reached a level of trust that most people never experience. Protect that gift."
  },
  {
    id: 699, day: 243, program: 'marriage-strengthening',
    title: "Reclaiming the Erotic in Your Marriage",
    emoji: "🔮",
    tagline: "The erotic is not separate from the sacred. It is part of it.",
    body: "For too long, the erotic dimension of marriage has been minimized, shamed, or compartmentalized. But desire is not something to manage — it is something to celebrate. Tonight, reclaim the erotic as a legitimate, beautiful, sacred part of your marriage. Not separate from your love, but an expression of it.",
    duration: "25 min",
    prompts: [
      "How has shame or cultural messaging affected the way you experience desire in our marriage?",
      "What would it look like to fully embrace the erotic dimension of our relationship — without guilt?",
      "How can we honor both the sacred and the sensual in our intimate life?",
      "What permission do you need to give yourself to fully enjoy this part of our marriage?"
    ],
    reflection: "Your desire for each other is not something to apologize for. It is one of the most honest things about your marriage. Honor it."
  },
  {
    id: 700, day: 244, program: 'marriage-strengthening',
    title: "What You Never Learned About Sex",
    emoji: "📖",
    tagline: "Most of us were never properly taught. It is time to learn together.",
    body: "Most people's sexual education was incomplete at best and harmful at worst. Tonight, talk about the gaps — what you wish you had been taught, what you had to unlearn, and what you are still figuring out. Then commit to learning together, without judgment, like students in the most important class you will ever take.",
    duration: "25 min",
    prompts: [
      "What did your upbringing teach you about sex — and how much of it was helpful?",
      "What have you had to unlearn in order to have a healthy intimate life?",
      "What do you still feel uncertain or curious about?",
      "What resource — a book, a course, a conversation — could help us learn and grow together?"
    ],
    reflection: "It is never too late to learn. The couples who stay curious about each other's bodies and desires are the ones who never stop growing."
  },
  {
    id: 701, day: 245, program: 'marriage-strengthening',
    title: "The Rhythm of Your Intimate Life",
    emoji: "🥁",
    tagline: "Find your rhythm. Protect your rhythm. Evolve your rhythm.",
    body: "Every couple has a natural rhythm to their intimate life — sometimes it is weekly, sometimes it ebbs and flows with seasons, stress, and health. The key is not conforming to someone else's standard, but finding the rhythm that keeps both of you connected and fulfilled. Tonight, name your rhythm and decide if it is serving you.",
    duration: "25 min",
    prompts: [
      "What is the natural rhythm of our intimate life right now?",
      "Does that rhythm feel right to both of us — or does one of us want more or less?",
      "What external factors most disrupt our rhythm?",
      "What would our ideal rhythm look like — and what would it take to get there?"
    ],
    reflection: "There is no universal standard for how often. There is only what keeps you both feeling loved, desired, and connected. Find that number together."
  },
  {
    id: 702, day: 246, program: 'marriage-strengthening',
    title: "A Night of Presence",
    emoji: "🕯️",
    tagline: "Put everything down. Be here. Be together.",
    body: "Tonight is not about conversation. It is about presence. Turn off the screens. Light a candle. Sit together in silence. Hold each other. Breathe. Let your bodies remember what your minds sometimes forget — that you are two human beings who chose each other, and that choice is still sacred.",
    duration: "30 min",
    prompts: [
      "Can you feel my heartbeat right now?",
      "What does it feel like to simply be held — with no words and no agenda?",
      "When was the last time we were fully present with each other like this?",
      "Stay here for ten more minutes. Let the silence speak."
    ],
    reflection: "In a world drowning in noise, the most intimate thing you can offer your partner is your undivided presence. Give it freely tonight."
  },
  {
    id: 703, day: 247, program: 'marriage-strengthening',
    title: "The Deepest Yes",
    emoji: "💎",
    tagline: "You have explored the depths. Now carry them forward.",
    body: "Thirty days of exploring desire, vulnerability, communication, and physical connection have brought you to this moment. You have had the conversations most couples avoid for a lifetime. You have been honest about your bodies, your wounds, your fantasies, and your needs. Tonight, make one final promise: that the openness you cultivated here will not end with this mission. Say yes — the deepest yes — to a lifetime of intimate honesty, growth, and connection.",
    duration: "30 min",
    prompts: [
      "What has this intimacy section taught you about yourself?",
      "What has it taught you about us?",
      "What is one practice from these thirty days that you want to carry forward permanently?",
      "Hold each other. Say: 'I choose you — all of you — for the rest of my life.' Mean it."
    ],
    reflection: "The deepest yes is not the one you said at the altar. It is the one you say tonight — after seeing everything, knowing everything, and still choosing to stay."
  },
  {
    id: 704, day: 248, program: 'marriage-strengthening',
    title: "The Sacred in the Ordinary",
    emoji: "🕯️",
    tagline: "Holiness hides in the mundane moments you keep overlooking.",
    body: "The most spiritual moments in your marriage are not the grand gestures. They are the mornings you pour coffee without being asked. The nights you roll over and reach for each other in the dark. Today, look at your ordinary routines — the dishes, the commute, the bedtime rituals — and find the sacred hidden inside them. When you treat the ordinary as holy ground, your entire marriage becomes a prayer.",
    duration: "25 min",
    prompts: [
      "What ordinary moment in our daily life feels most sacred to you?",
      "When do you feel closest to something spiritual in our marriage?",
      "How can we bring more reverence to the small, repeated acts of our life together?",
      "What would change if we treated every shared meal as communion?"
    ],
    reflection: "The couples who last are not the ones chasing mountaintop experiences. They are the ones who find God in the kitchen at 6 a.m."
  },
  {
    id: 705, day: 249, program: 'marriage-strengthening',
    title: "Praying Without Words",
    emoji: "🙏",
    tagline: "Sometimes the deepest prayer is simply sitting together in silence.",
    body: "You do not need a script to pray together. You do not need a shared theology or even the same beliefs. What you need is willingness — the willingness to sit in silence, to hold hands, to breathe together, and to acknowledge that something larger than both of you is at work in this marriage. Tonight, pray without words. Let your presence be the offering.",
    duration: "20 min",
    prompts: [
      "What does prayer or meditation mean to you personally?",
      "Have you ever felt awkward about spiritual practices together? Why?",
      "Can we sit in silence for five minutes right now — just breathing and being?",
      "What did that silence feel like? What came up for you?"
    ],
    reflection: "The most powerful prayer two people can offer is their willingness to be still together and trust what they cannot see."
  },
  {
    id: 706, day: 250, program: 'marriage-strengthening',
    title: "Emotional Maturity in Marriage",
    emoji: "🌳",
    tagline: "Maturity is not the absence of emotion — it is the mastery of response.",
    body: "Emotional maturity does not mean you stop feeling. It means you stop letting your feelings drive the car without your permission. In marriage, maturity looks like pausing before reacting, naming your emotions honestly, and refusing to weaponize your partner's vulnerabilities during conflict. Today, examine where you have grown emotionally — and where you still have room to stretch.",
    duration: "25 min",
    prompts: [
      "Where have you seen the most emotional growth in yourself since we married?",
      "What emotional pattern do you still struggle with the most?",
      "When I am emotionally immature, how does it affect you?",
      "What does emotional maturity look like in the version of us we are building toward?"
    ],
    reflection: "A mature marriage is not one without storms. It is one where both people have learned to anchor themselves before reaching for the other."
  },
  {
    id: 707, day: 251, program: 'marriage-strengthening',
    title: "Holding Space for Hard Feelings",
    emoji: "🫂",
    tagline: "Your partner does not need you to fix it. They need you to stay.",
    body: "One of the rarest gifts in marriage is the ability to hold space — to sit with your partner in their pain without rushing to solve, minimize, or redirect. When your spouse is grieving, anxious, angry, or lost, they rarely need solutions. They need your steady, non-anxious presence. Today, practice the discipline of simply being with whatever arises, without flinching or fixing.",
    duration: "25 min",
    prompts: [
      "When I am in pain, what do you instinctively want to do? Fix it, distract from it, or sit with it?",
      "When have you felt most held by me during a difficult season?",
      "What makes it hard for you to just be present with someone else's pain?",
      "Can you hold space for me right now — for sixty seconds — while I share something that weighs on me?"
    ],
    reflection: "The strongest thing you can say to someone you love is not 'I will fix this.' It is 'I am not going anywhere.'"
  },
  {
    id: 708, day: 252, program: 'marriage-strengthening',
    title: "Grace in the Gap",
    emoji: "🌿",
    tagline: "The distance between who your partner is and who they are becoming is where grace lives.",
    body: "Your spouse will never fully arrive. Neither will you. There will always be a gap between the person you married and the person they are trying to become. Grace is what fills that gap. It is the decision to extend kindness where judgment would be easier, to offer patience where frustration feels justified. Today, examine how freely you give grace — and how freely you receive it.",
    duration: "25 min",
    prompts: [
      "Where do you most need grace from me right now?",
      "Where do I most need grace from you?",
      "Is it harder for you to give grace or receive it? Why?",
      "What would our marriage feel like if we doubled the grace we extend to each other?"
    ],
    reflection: "Grace is not pretending your partner is perfect. It is loving them fiercely in the space between who they are and who they are becoming."
  },
  {
    id: 709, day: 253, program: 'marriage-strengthening',
    title: "Surrender vs. Control",
    emoji: "🏳️",
    tagline: "The tighter you grip your marriage, the more it slips through your fingers.",
    body: "Control is fear dressed in productivity. In marriage, it shows up as micromanaging your partner's choices, scripting conversations before they happen, and refusing to let outcomes unfold naturally. Surrender is not passivity — it is the mature recognition that you cannot control another human being, and that trying to do so will destroy the very connection you are protecting. Today, identify where control has crept in and practice releasing your grip.",
    duration: "25 min",
    prompts: [
      "Where in our marriage do you feel the urge to control outcomes?",
      "What are you afraid will happen if you let go?",
      "Have you ever felt controlled by me? What did that feel like?",
      "What is one area where you can practice surrender this week?"
    ],
    reflection: "Surrender in marriage is not losing yourself. It is trusting your partner — and the process — enough to stop white-knuckling every outcome."
  },
  {
    id: 710, day: 254, program: 'marriage-strengthening',
    title: "Forgiveness as Daily Practice",
    emoji: "🔄",
    tagline: "Forgiveness is not a one-time event. It is a discipline you practice every single day.",
    body: "You will hurt each other again. Not because you are bad people, but because you are human people living in relentless proximity. The question is not whether offense will come, but whether you will let it accumulate or release it. Forgiveness in a mature marriage is not dramatic — it is quiet, daily, and unglamorous. It is choosing not to keep score. It is letting yesterday stay in yesterday.",
    duration: "25 min",
    prompts: [
      "Is there anything you are holding onto right now that you have not fully forgiven?",
      "What makes forgiveness difficult for you — pride, pain, or fear of being hurt again?",
      "How do you know when I have truly forgiven you versus when I am just suppressing it?",
      "Can we establish a practice of clearing the air before bed each night?"
    ],
    reflection: "Forgiveness is not a feeling you wait for. It is a door you walk through every morning before your partner even wakes up."
  },
  {
    id: 711, day: 255, program: 'marriage-strengthening',
    title: "Faith and Doubt, Together",
    emoji: "🌗",
    tagline: "A marriage strong enough for faith is strong enough for doubt.",
    body: "Your spiritual life will not move in a straight line. There will be seasons of deep faith and seasons of crushing doubt — and they will not always arrive for both of you at the same time. The test of a spiritually mature marriage is not shared certainty. It is the willingness to hold each other through the questions, the silences, and the dark nights of the soul without demanding that your partner believe exactly what you believe.",
    duration: "25 min",
    prompts: [
      "Have you ever been through a season of spiritual doubt? What was that like?",
      "Did you feel safe sharing that doubt with me, or did you hide it?",
      "How can I support your spiritual journey even when it looks different from mine?",
      "What would it mean to be each other's safe harbor during seasons of uncertainty?"
    ],
    reflection: "The couple that can hold both faith and doubt with open hands has built something no storm can dismantle."
  },
  {
    id: 712, day: 256, program: 'marriage-strengthening',
    title: "The Covenant You Keep Choosing",
    emoji: "📜",
    tagline: "A covenant is not something you made. It is something you make — every single day.",
    body: "Your wedding vows were not a contract with terms and conditions. They were a covenant — a sacred, ongoing commitment that does not expire when circumstances change. But a covenant only lives if you actively choose it. Today, revisit the promises you made — spoken or unspoken — and ask yourself honestly: am I keeping them? Not perfectly, but intentionally. A covenant marriage is not one without cracks. It is one where both people keep showing up to repair them.",
    duration: "30 min",
    prompts: [
      "Do you remember the vows you spoke on our wedding day? Can you recall them now?",
      "Which vow has been the hardest to keep?",
      "If you could add a new vow today — one you did not know you needed back then — what would it be?",
      "Let us speak new vows to each other tonight. No script. Just truth."
    ],
    reflection: "A covenant is not the promise you made once. It is the promise you keep making every morning when you choose to stay."
  },
  {
    id: 713, day: 257, program: 'marriage-strengthening',
    title: "Finding the Divine Through Your Partner",
    emoji: "✨",
    tagline: "Your partner is not your god — but they may be your clearest mirror of the divine.",
    body: "There is an ancient idea that the people closest to us are our greatest spiritual teachers. Your partner reflects back to you the parts of yourself you cannot see — your beauty and your shadows. When you look at your spouse with sacred eyes, you begin to see something more than a person. You see a mirror, a teacher, a co-pilgrim on the path. Today, look at your partner as if they were placed in your life for a purpose far deeper than companionship.",
    duration: "25 min",
    prompts: [
      "What has our marriage taught you about yourself that nothing else could?",
      "Do you see any spiritual purpose in our partnership?",
      "What quality in me reflects something you are still learning about yourself?",
      "If our marriage is a spiritual assignment, what is the lesson you think you are here to learn?"
    ],
    reflection: "The divine does not always speak through thunder and fire. Sometimes it speaks through the person asleep beside you."
  },
  {
    id: 714, day: 258, program: 'marriage-strengthening',
    title: "Emotional Generosity",
    emoji: "💛",
    tagline: "Give more than what is fair. That is how love compounds.",
    body: "Emotional generosity is the practice of giving your partner more grace, more patience, more benefit of the doubt than strict fairness would require. It means interpreting their actions through the most charitable lens. It means offering warmth even when you feel depleted. This is not self-abandonment — it is an overflow that comes from a place of fullness, not emptiness. Today, examine your emotional generosity and look for places to expand it.",
    duration: "25 min",
    prompts: [
      "When am I most emotionally generous with you? When am I most stingy?",
      "Do you feel like our marriage operates on generosity or scorekeeping?",
      "What would it look like to assume the best about each other by default?",
      "Where can you be more emotionally generous with me this week — and where can I do the same for you?"
    ],
    reflection: "Love that keeps score eventually runs out of points. Love that gives freely never runs dry."
  },
  {
    id: 715, day: 259, program: 'marriage-strengthening',
    title: "Wisdom in Marriage",
    emoji: "🦉",
    tagline: "Knowledge is knowing what to say. Wisdom is knowing when not to.",
    body: "Wisdom in marriage is not accumulated through years alone. It is earned through reflection, restraint, and the willingness to learn from every failure. A wise spouse knows when to speak and when to be silent, when to press in and when to pull back, when to lead and when to follow. Today, take stock of the wisdom your marriage has produced — and the lessons still waiting for you.",
    duration: "25 min",
    prompts: [
      "What is the wisest thing our marriage has taught you?",
      "Where do you still act foolishly in our relationship, even though you know better?",
      "Who is a couple you admire for their wisdom, and what can we learn from them?",
      "If you could give advice to us on our wedding day, knowing what you know now, what would you say?"
    ],
    reflection: "A wise marriage is not one that avoids mistakes. It is one that refuses to make the same mistake without learning from it first."
  },
  {
    id: 716, day: 260, program: 'marriage-strengthening',
    title: "Marriage as Spiritual Discipline",
    emoji: "⚖️",
    tagline: "Marriage is not a reward for being whole. It is the fire that forges you.",
    body: "Monks have monasteries. Mystics have caves. You have marriage. And make no mistake — marriage is one of the most rigorous spiritual disciplines on earth. It demands patience you do not naturally have, forgiveness you do not want to give, and selflessness that goes against every survival instinct. But if you stay in the fire long enough, it does not destroy you. It refines you. Today, honor the discipline your marriage demands — and the person it is making you become.",
    duration: "25 min",
    prompts: [
      "In what ways has marriage stretched you beyond what you thought you were capable of?",
      "What spiritual quality has marriage forced you to develop — patience, humility, courage?",
      "Do you view our marriage as a spiritual practice? Why or why not?",
      "How can we approach our difficult seasons as growth rather than punishment?"
    ],
    reflection: "Marriage is not where you go to be comfortable. It is where you go to be transformed."
  },
  {
    id: 717, day: 261, program: 'marriage-strengthening',
    title: "Contemplation and Stillness Together",
    emoji: "🧘",
    tagline: "Be still — not alone, but together.",
    body: "The world is loud. Your schedules are full. Your minds are racing. And in the chaos, the still, small voice of your marriage gets drowned out. Tonight, create space for contemplation — not solo, but shared. Sit together in silence. Light a candle. Close your eyes. Let go of the to-do lists and the unresolved arguments. Just be. Two people, fully present, breathing the same air, in no rush to be anywhere else.",
    duration: "30 min",
    prompts: [
      "When was the last time we sat in complete stillness together?",
      "What usually prevents us from being still — busyness, discomfort, or avoidance?",
      "Let us practice ten minutes of shared silence right now. No phones, no agenda.",
      "What surfaced during that stillness? Was it peace, anxiety, or something else entirely?"
    ],
    reflection: "Stillness is not emptiness. It is the space where everything that matters finally has room to speak."
  },
  {
    id: 718, day: 262, program: 'marriage-strengthening',
    title: "The Soul of Your Marriage",
    emoji: "🔮",
    tagline: "Beneath the logistics and the routines, your marriage has a soul. Have you listened to it lately?",
    body: "Your marriage is more than a partnership of schedules and responsibilities. It has a pulse, a rhythm, a soul that hums beneath the surface of daily life. When that soul is nourished, everything else aligns. When it is neglected, even the good days feel hollow. Today, step back from the mechanics of your marriage and tend to its soul. Ask the deeper questions. Listen for the quieter answers.",
    duration: "25 min",
    prompts: [
      "If our marriage had a soul, how would you describe its current state — thriving, tired, healing?",
      "What nourishes the soul of our marriage the most?",
      "What has been slowly draining it?",
      "What is one thing we can do this week to feed the deepest part of our connection?"
    ],
    reflection: "A marriage can look perfect on the outside and be starving on the inside. Feed the soul first. Everything else follows."
  },
  {
    id: 719, day: 263, program: 'marriage-strengthening',
    title: "The Ministry of Midnight Conversations",
    emoji: "🌙",
    tagline: "The truest things are often whispered in the dark.",
    body: "There is a particular kind of honesty that only emerges late at night — when the defenses are down, the masks are off, and two people lie in the dark sharing things they would never say in daylight. Those midnight conversations are not just pillow talk. They are ministry. They are the moments where real intimacy is forged. Tonight, stay up a little longer. Say the thing you have been holding back. Let the darkness hold it safely.",
    duration: "30 min",
    prompts: [
      "What is something you have been wanting to say but have not found the right moment?",
      "Do you feel safer being vulnerable in the dark? Why do you think that is?",
      "What is one fear about our future that you have not spoken aloud?",
      "What is one hope about our future that you have been carrying quietly?"
    ],
    reflection: "The conversations that save marriages are rarely held at the dinner table. They happen in the dark, in whispers, when both people are finally brave enough to stop performing."
  },
  {
    id: 720, day: 264, program: 'marriage-strengthening',
    title: "Sacred Rituals for Two",
    emoji: "🕊️",
    tagline: "Build rituals that anchor your marriage to something eternal.",
    body: "Every strong marriage has rituals — not just habits, but intentional, repeated practices that carry meaning beyond the act itself. A Sunday morning walk. A prayer before meals. A monthly date where you check in on your souls, not just your schedules. Rituals create rhythm, and rhythm creates stability. Today, identify the rituals you already have and consider adding one that nourishes the spiritual dimension of your marriage.",
    duration: "25 min",
    prompts: [
      "What rituals do we already have that feel sacred to you?",
      "What ritual have we lost over time that you miss?",
      "What new ritual could we create that honors the spiritual depth of our marriage?",
      "How can we protect our rituals from being swallowed by busyness?"
    ],
    reflection: "Rituals are not routines. Routines keep your life running. Rituals keep your marriage breathing."
  },
  {
    id: 721, day: 265, program: 'marriage-strengthening',
    title: "The Weight You Carry for Each Other",
    emoji: "🏋️",
    tagline: "Love is not just feeling. It is bearing weight.",
    body: "In marriage, you carry things for each other that no one else sees. You carry worry about their health, their dreams, their unspoken fears. You carry the emotional labor of anticipating needs before they are spoken. This weight is not a burden to resent — it is a privilege to honor. Today, acknowledge the invisible weight your partner carries for you, and let them know you see it.",
    duration: "25 min",
    prompts: [
      "What invisible weight do you carry for me that I might not fully see?",
      "What weight do you think I carry for you?",
      "When does the weight of our marriage feel heaviest to you?",
      "How can we share the load more evenly without keeping score?"
    ],
    reflection: "The strongest marriages are not the lightest ones. They are the ones where both people carry the weight together — and neither pretends it is not there."
  },
  {
    id: 722, day: 266, program: 'marriage-strengthening',
    title: "When God Feels Distant",
    emoji: "🌫️",
    tagline: "Sometimes the sacred feels far away. Your marriage can be the bridge back.",
    body: "There will be seasons when faith feels thin, when prayers feel like they hit the ceiling, when the meaning you once found in spiritual practice seems to evaporate. In those seasons, your marriage can be the bridge back to the sacred. Your partner's faith can carry you when yours falters. Your shared history of surviving hard things becomes its own kind of scripture. Today, talk about the seasons when meaning felt distant — and how you found your way back.",
    duration: "25 min",
    prompts: [
      "Have you been through a season where God, Spirit, or meaning felt far away?",
      "Did our marriage help you through that season, or did it add to the distance?",
      "How can I be a bridge back to meaning for you when you feel spiritually lost?",
      "What anchors you when everything else feels uncertain?"
    ],
    reflection: "When the sacred feels distant, look at the person beside you. They may be the closest thing to holy ground you will find today."
  },
  {
    id: 723, day: 267, program: 'marriage-strengthening',
    title: "The Art of Blessing Your Partner",
    emoji: "🌟",
    tagline: "Speak life over the person you love. Do it out loud. Do it today.",
    body: "A blessing is not a religious formality. It is a declaration of worth spoken over someone who may have forgotten their own. In marriage, you have the power to bless your partner every single day — not with grand ceremonies, but with words of affirmation, spoken intentionally and without agenda. Today, look your partner in the eyes and bless them. Tell them who they are. Tell them what they mean. Speak life into the places where life has been drained.",
    duration: "25 min",
    prompts: [
      "When was the last time someone spoke a blessing over you?",
      "What words from me carry the most weight in your heart?",
      "Can you speak a blessing over me right now — something you see in me that I might not see in myself?",
      "Let me bless you in return. Listen without deflecting."
    ],
    reflection: "Your words have power. The blessing you speak over your partner today may be the thing they hold onto for years."
  },
  {
    id: 724, day: 268, program: 'marriage-strengthening',
    title: "Grief You Have Shared",
    emoji: "🥀",
    tagline: "The losses you survived together forged something unbreakable.",
    body: "Every marriage carries grief. The loss of parents, friends, pregnancies, dreams, careers, health. Some grief is sudden and shattering. Some is slow and quiet. But the grief you have walked through together — the funerals, the hospital rooms, the silent car rides home — those experiences have woven something into your marriage that nothing else could. Today, honor the grief you have shared and the bond it created.",
    duration: "30 min",
    prompts: [
      "What is the hardest loss we have faced together?",
      "How did that loss change our marriage — for better or worse?",
      "Is there any grief you are still carrying that you have not fully processed with me?",
      "How can we hold space for each other's ongoing grief without trying to rush through it?"
    ],
    reflection: "The marriages that endure are not the ones untouched by grief. They are the ones that let grief deepen them instead of divide them."
  },
  {
    id: 725, day: 269, program: 'marriage-strengthening',
    title: "Meditating on Your Vows",
    emoji: "📿",
    tagline: "Do not just remember your vows. Meditate on them until they reshape you.",
    body: "You spoke words on your wedding day that may have been more prophetic than you realized. Those vows were not just promises — they were blueprints for the life you were building. Today, take your original vows — or write new ones if you cannot remember — and meditate on each line slowly. Let every phrase land. Let it interrogate you. Let it remind you of the life you committed to building.",
    duration: "30 min",
    prompts: [
      "Can you write out your vows from memory? Try it now.",
      "Which line of your vows has been tested the most?",
      "Which line have you kept the best?",
      "If your vows could speak back to you, what would they say about how you have lived them?"
    ],
    reflection: "Vows are not museum pieces to be admired from a distance. They are living documents that should challenge you every single day."
  },
  {
    id: 726, day: 270, program: 'marriage-strengthening',
    title: "The Holiness of Repair",
    emoji: "🪡",
    tagline: "Every rupture repaired makes the bond stronger than it was before.",
    body: "In Japanese pottery, there is a practice called kintsugi — repairing broken pieces with gold, making the mended object more beautiful than the original. Your marriage works the same way. Every argument resolved, every betrayal forgiven, every wound tended with care — these are not scars to hide. They are gold seams that prove your love can survive anything. Today, honor the repairs you have made and the beauty they have created.",
    duration: "25 min",
    prompts: [
      "What is the most significant repair we have made in our marriage?",
      "How did that repair change us?",
      "Is there a rupture that still needs attention — one we patched over but never truly healed?",
      "How can we become better at repairing quickly instead of letting wounds fester?"
    ],
    reflection: "A marriage without rupture is a myth. A marriage with gold-seamed repairs is a masterpiece."
  },
  {
    id: 727, day: 271, program: 'marriage-strengthening',
    title: "Your Partner as Teacher",
    emoji: "📖",
    tagline: "The person you married has been teaching you something all along. Have you been listening?",
    body: "Your partner is your most relentless teacher. They teach you patience by testing it. They teach you humility by seeing through your pretense. They teach you love by being imperfect and still showing up. The lessons are not always comfortable, and the teacher is not always gentle. But if you pay attention, the curriculum your marriage offers is more transformative than any classroom or seminar. Today, identify what your partner has been teaching you.",
    duration: "25 min",
    prompts: [
      "What is the biggest lesson I have taught you — whether I meant to or not?",
      "What lesson are you still resisting from me?",
      "What have you taught me that I might not recognize?",
      "How can we be more intentional about learning from each other instead of resisting each other?"
    ],
    reflection: "The partner who frustrates you the most may be teaching you the lesson you need the most. Pay attention."
  },
  {
    id: 728, day: 272, program: 'marriage-strengthening',
    title: "Spiritual Warfare in Marriage",
    emoji: "🛡️",
    tagline: "Your marriage has enemies. Name them. Fight them together.",
    body: "Whether you frame it as spiritual warfare, psychological sabotage, or cultural pressure — your marriage has enemies. Distraction. Comparison. Resentment. Complacency. Infidelity of attention. These forces do not announce themselves. They creep in slowly and quietly until they have taken root. A wise couple names their enemies out loud and fights them together, side by side, rather than turning on each other.",
    duration: "25 min",
    prompts: [
      "What is the biggest threat to our marriage right now — internal or external?",
      "What subtle enemy have we been ignoring?",
      "When have we accidentally fought each other instead of fighting the real problem?",
      "How can we build a practice of identifying and confronting threats together?"
    ],
    reflection: "Your marriage is not just something to enjoy. It is something to defend. The couples who last are the ones who know what they are fighting for — and what they are fighting against."
  },
  {
    id: 729, day: 273, program: 'marriage-strengthening',
    title: "Awe and Wonder in Long Love",
    emoji: "🌌",
    tagline: "Familiarity does not have to kill wonder. Let yourself be astonished again.",
    body: "In the early days, everything about your partner amazed you. Their laugh. Their mind. The way they moved through the world. Years later, familiarity can dull that wonder into routine. But wonder is not something you lose — it is something you stop practicing. Today, look at your partner with fresh eyes. Let yourself be surprised. Let yourself marvel at the fact that out of eight billion people, this is the one who stayed.",
    duration: "25 min",
    prompts: [
      "What still amazes you about me after all this time?",
      "When was the last time I genuinely surprised you?",
      "What have you stopped noticing about me that you used to love?",
      "How can we cultivate wonder in a marriage that has become familiar?"
    ],
    reflection: "Wonder is not the privilege of new love. It is the discipline of lasting love. Practice it daily."
  },
  {
    id: 730, day: 274, program: 'marriage-strengthening',
    title: "The Sacrament of Listening",
    emoji: "👂",
    tagline: "Listening — truly listening — is the most sacred act in marriage.",
    body: "Most people listen to respond. In marriage, this habit is devastating. When your partner speaks, they are not just conveying information. They are offering you access to their inner world. Every time you half-listen, check your phone, or mentally rehearse your rebuttal, you reject that offering. Today, practice sacramental listening — the kind where you hear not just the words, but the longing beneath them.",
    duration: "25 min",
    prompts: [
      "On a scale of one to ten, how well do you feel I listen to you?",
      "When do you feel most heard by me? When do you feel least heard?",
      "What is something you have been trying to tell me that I keep missing?",
      "For the next five minutes, speak freely. I will only listen — no responses until you are done."
    ],
    reflection: "Listening is not waiting for your turn to talk. It is entering your partner's world and staying there long enough to understand it."
  },
  {
    id: 731, day: 275, program: 'marriage-strengthening',
    title: "The Marriage Altar",
    emoji: "🔥",
    tagline: "What have you placed on the altar of your marriage? What have you withheld?",
    body: "An altar is a place of offering — where you bring the best of what you have and lay it down. Your marriage is an altar. Every day, you choose what to place on it: your time, your attention, your honesty, your vulnerability. But you also choose what to withhold. Today, take an honest inventory. What have you been generously offering your marriage? And what have you been quietly keeping back?",
    duration: "25 min",
    prompts: [
      "What have you generously offered our marriage that you are proud of?",
      "What have you withheld — intentionally or not?",
      "What would it look like to hold nothing back?",
      "What offering does our marriage need from you right now?"
    ],
    reflection: "A marriage that receives only your leftovers will eventually feel like leftovers. Bring your best to the altar. Every day."
  },
  {
    id: 732, day: 276, program: 'marriage-strengthening',
    title: "The Presence of the Eternal",
    emoji: "♾️",
    tagline: "Something eternal lives inside your marriage. Can you feel it?",
    body: "There are moments in marriage that feel like they touch eternity — a look across the room, a hand on the small of the back, a shared silence so full it needs no words. These are not just chemical reactions or sentimental nostalgia. They are glimpses of something bigger. Something that transcends time and circumstance. Today, sit with your partner and try to touch that eternal dimension. Let yourselves feel how vast your love actually is.",
    duration: "30 min",
    prompts: [
      "Have you ever had a moment in our marriage that felt eternal — beyond time?",
      "What do you think exists between us that is bigger than both of us?",
      "Do you believe our love has a spiritual dimension? What does that mean to you?",
      "Sit together in silence for five minutes. Try to feel the presence of something larger than yourselves."
    ],
    reflection: "The eternal is not something you have to go searching for. It is already living in the space between you and the person you love."
  },
  {
    id: 733, day: 277, program: 'marriage-strengthening',
    title: "The Deep Well",
    emoji: "🕳️",
    tagline: "Your marriage is a well. You have spent thirty days digging deeper. Now drink.",
    body: "For thirty days, you have explored the spiritual and emotional depths of your marriage. You have prayed together, sat in silence, confronted grief, practiced forgiveness, and touched something sacred. This well you have been digging is not dry — it is overflowing. Today, pause and drink from it. Celebrate how far you have come. Rest in the depth you have created. And commit to never letting this well go untended again.",
    duration: "30 min",
    prompts: [
      "What has this season of spiritual depth revealed about our marriage?",
      "What surprised you most about these past thirty days?",
      "What practice do you want to carry forward permanently?",
      "How do you feel about us right now — honestly and completely?"
    ],
    reflection: "You did not just complete a set of missions. You dug a well that will sustain your marriage for decades. Guard it. Draw from it. Never let it run dry."
  },
  {
    id: 734, day: 278, program: 'marriage-strengthening',
    title: "Leading Your Household Together",
    emoji: "🏠",
    tagline: "A house divided cannot stand. A house led together cannot fall.",
    body: "Leadership in marriage is not about hierarchy. It is about partnership. The strongest households are led by two people who bring different strengths to the table and refuse to compete for the head of it. Today, examine how leadership functions in your home. Who leads in which areas? Where are there gaps? Where is there friction? The goal is not equal division — it is intentional collaboration.",
    duration: "25 min",
    prompts: [
      "In what areas of our household do you feel like the primary leader?",
      "In what areas do you wish I would step up more?",
      "Where have our leadership styles clashed, and how did we resolve it?",
      "What does healthy co-leadership look like for us specifically?"
    ],
    reflection: "The best-led homes are not the ones with the strongest leader. They are the ones with the strongest partnership."
  },
  {
    id: 735, day: 279, program: 'marriage-strengthening',
    title: "Decision-Making as a Team",
    emoji: "🤝",
    tagline: "Every major decision is a mirror of how you function as a unit.",
    body: "How a couple makes decisions reveals everything about their marriage — who holds power, who defers, who avoids, who dominates. Mature couples have learned to make decisions together without one person steamrolling and the other silently resenting. Today, examine your decision-making process. Is it collaborative? Is it honest? Does every voice get heard — truly heard — before a direction is set?",
    duration: "25 min",
    prompts: [
      "How do we typically make major decisions? Walk me through the process.",
      "Have you ever felt unheard or overruled in a decision that mattered to you?",
      "What was the best decision we ever made together? What made the process work?",
      "How can we improve our decision-making so both of us feel ownership of the outcome?"
    ],
    reflection: "A decision made together — even if it is the wrong one — strengthens a marriage more than a right decision made alone."
  },
  {
    id: 736, day: 280, program: 'marriage-strengthening',
    title: "Serving Your Community as a Couple",
    emoji: "🌍",
    tagline: "Your marriage is not just for you. It is for everyone it touches.",
    body: "A marriage that only serves itself will eventually suffocate. The healthiest couples have a shared mission that extends beyond their front door. They serve their neighborhood, their church, their community. They open their home. They mentor younger couples. They show up when others are in crisis. Today, talk about how your marriage can become a force for good in your community — not out of obligation, but out of overflow.",
    duration: "25 min",
    prompts: [
      "How do we currently serve our community as a couple?",
      "What cause or mission excites both of us?",
      "Is there a couple or family in our circle who could use our support right now?",
      "What would it look like to make service a regular part of our marriage rhythm?"
    ],
    reflection: "A marriage that pours into others never runs dry. The more you give together, the more you have to give."
  },
  {
    id: 737, day: 281, program: 'marriage-strengthening',
    title: "The Gift of Hospitality",
    emoji: "🚪",
    tagline: "Open your door. Open your table. Open your life.",
    body: "Hospitality is not about having a clean house or a perfect meal. It is about creating space where people feel seen, welcomed, and nourished. As a couple, your home can be a sanctuary — not just for yourselves, but for everyone who enters. Today, talk about what hospitality means to you and how you can practice it together. The world is full of lonely people. Your dinner table might be the answer to someone's prayer.",
    duration: "25 min",
    prompts: [
      "When was the last time we hosted someone in our home? How did it feel?",
      "What does hospitality mean to each of us — and how do those definitions differ?",
      "Is there someone in our life right now who needs to be invited to our table?",
      "How can we make hospitality a natural expression of who we are as a couple?"
    ],
    reflection: "The most powerful thing a couple can do is open their door. You never know whose life will be changed by a seat at your table."
  },
  {
    id: 738, day: 282, program: 'marriage-strengthening',
    title: "Raising the Next Generation with Intention",
    emoji: "🌱",
    tagline: "Whether you have children or mentor them, your influence shapes the future.",
    body: "If you have children, you know that parenting without intention produces chaos. If you do not have children, you still have influence — nieces, nephews, students, mentees, the young people who watch how you love. Today, talk about the values, principles, and lessons you want to pass on to the next generation. Your marriage is a classroom. What is it teaching?",
    duration: "25 min",
    prompts: [
      "What values do we most want to pass on to the next generation?",
      "What did we learn from our own parents — good and bad — that shapes how we lead?",
      "Are we aligned on how we guide, discipline, and nurture the young people in our lives?",
      "What is one area of our parenting or mentoring where we need to get on the same page?"
    ],
    reflection: "The next generation does not need perfect parents or mentors. They need honest ones who are willing to grow alongside them."
  },
  {
    id: 739, day: 283, program: 'marriage-strengthening',
    title: "Your Marriage as Mission",
    emoji: "🧭",
    tagline: "Your marriage is not your destination. It is your mission field.",
    body: "What if your marriage is not just about the two of you? What if it has a mission — a purpose that extends into the world and outlasts your lifetime? The strongest couples are not the ones most focused on their own happiness. They are the ones who have discovered a shared mission that gives their marriage meaning beyond itself. Today, define your mission. What are you building together that matters?",
    duration: "30 min",
    prompts: [
      "If our marriage had a mission statement, what would it be?",
      "What impact do we want our marriage to have on the world around us?",
      "Are we currently living in alignment with that mission, or have we drifted?",
      "What is one concrete step we can take this month to live our mission more fully?"
    ],
    reflection: "A marriage with a mission never runs out of purpose. Find yours and pursue it together with everything you have."
  },
  {
    id: 740, day: 284, program: 'marriage-strengthening',
    title: "Financial Stewardship as Partners",
    emoji: "💰",
    tagline: "Money is not the root of your problems. Misalignment about money is.",
    body: "More marriages are wounded by financial conflict than by infidelity. The issue is rarely the amount of money — it is the meaning each partner assigns to it. For one, money means security. For another, it means freedom. For another, it means worth. Today, have the money conversation you have been avoiding. Not about budgets and spreadsheets, but about values, fears, and dreams. Financial stewardship begins with financial honesty.",
    duration: "30 min",
    prompts: [
      "What does money mean to you emotionally — security, freedom, status, or something else?",
      "Where are we most aligned financially? Where are we most misaligned?",
      "Is there a financial truth you have been avoiding or hiding?",
      "What does healthy financial stewardship look like for our specific marriage?"
    ],
    reflection: "Financial intimacy is as vulnerable as physical intimacy. The couples who master it build something that lasts generations."
  },
  {
    id: 741, day: 285, program: 'marriage-strengthening',
    title: "Health and Wellness as a Couple",
    emoji: "💪",
    tagline: "You cannot love your partner well if you are running on empty.",
    body: "Your body is the vehicle that carries you through your marriage. If it breaks down, everything suffers — your energy, your patience, your intimacy, your longevity together. Health is not vanity. It is stewardship of the years you have left together. Today, have an honest conversation about your physical health, your habits, and the ways you can support each other in building a life that lasts.",
    duration: "25 min",
    prompts: [
      "How honest are we with each other about our health — physical and mental?",
      "What health habit do you wish we could build together?",
      "Is there a health concern you have been minimizing or ignoring?",
      "How can we hold each other accountable with love rather than judgment?"
    ],
    reflection: "Taking care of your body is not selfish. It is one of the most loving things you can do for the person who wants to grow old beside you."
  },
  {
    id: 742, day: 286, program: 'marriage-strengthening',
    title: "Protecting Your Marriage from External Threats",
    emoji: "🏰",
    tagline: "Not everyone deserves access to the inner world of your marriage.",
    body: "Your marriage is a fortress, and not everyone who approaches the gate should be let in. External threats come in many forms — toxic friendships, intrusive family members, social media comparison, workplace relationships that cross subtle boundaries. A mature couple learns to identify these threats early and address them together. Today, examine your perimeter. Who and what have you allowed too close to the sacred space of your marriage?",
    duration: "25 min",
    prompts: [
      "Is there anyone in our life right now who has too much access to our marriage?",
      "Have you ever felt that an outside influence was pulling us apart?",
      "Where do we need stronger boundaries — with family, friends, or technology?",
      "How can we address external threats without becoming isolated or paranoid?"
    ],
    reflection: "Protecting your marriage is not paranoia. It is wisdom. Guard the gate without building a prison."
  },
  {
    id: 743, day: 287, program: 'marriage-strengthening',
    title: "Setting Boundaries Together",
    emoji: "🚧",
    tagline: "A boundary is not a wall. It is a declaration of what you will protect.",
    body: "Boundaries are not about keeping people out. They are about defining what is sacred and non-negotiable in your marriage. They protect your time, your energy, your intimacy, and your peace. But boundaries only work when both partners agree on them and enforce them consistently. Today, define the boundaries your marriage needs — and commit to holding them together.",
    duration: "25 min",
    prompts: [
      "What boundaries do we currently have in place that are working well?",
      "What boundary do we need that we have been reluctant to set?",
      "Have I ever crossed a boundary you set? How did that feel?",
      "How do we handle it when someone outside our marriage pushes against our boundaries?"
    ],
    reflection: "Boundaries are not the opposite of love. They are the infrastructure of it. Build them together, and you will build something that lasts."
  },
  {
    id: 744, day: 288, program: 'marriage-strengthening',
    title: "Handling Extended Family with Grace",
    emoji: "👨‍👩‍👧‍👦",
    tagline: "You married a person. You inherited a family. Navigate both with wisdom.",
    body: "Extended family is one of the most common sources of marital tension. In-laws with opinions. Parents who do not respect boundaries. Siblings who create drama. The challenge is honoring your family of origin while protecting your family of creation. Today, talk honestly about the extended family dynamics that affect your marriage — and develop a strategy for handling them as a united front.",
    duration: "25 min",
    prompts: [
      "Which extended family relationships are the most challenging for our marriage?",
      "Have you ever felt that I chose my family of origin over you? What happened?",
      "Where do we need to set clearer boundaries with extended family?",
      "How can we honor our families while still prioritizing each other?"
    ],
    reflection: "Your first loyalty is to the marriage you built — not the family you came from. Love both, but never confuse the order."
  },
  {
    id: 745, day: 289, program: 'marriage-strengthening',
    title: "The United Front",
    emoji: "⚔️",
    tagline: "Disagree in private. Stand together in public. Always.",
    body: "A united front does not mean you always agree. It means you never undermine each other where others can see. You hash out your differences behind closed doors, and when you walk into the world — with your children, your families, your community — you present a partnership that cannot be divided. Today, examine where your front has cracked and how to reinforce it.",
    duration: "25 min",
    prompts: [
      "Have you ever felt undermined by me in front of others? When?",
      "Have I ever felt undermined by you? How did that affect our unity?",
      "What does a united front look like in practice — especially when we disagree?",
      "How can we commit to always resolving conflict privately while standing together publicly?"
    ],
    reflection: "The world will test your marriage. Let it find a wall, not a crack."
  },
  {
    id: 746, day: 290, program: 'marriage-strengthening',
    title: "Your Marriage as a Lighthouse",
    emoji: "🗼",
    tagline: "In a world of broken relationships, your marriage can be the light others follow home.",
    body: "You may not realize it, but people are watching your marriage. Your children. Your friends. Your coworkers. The couple sitting next to you at dinner. In a world full of cynicism about love, a strong marriage is a lighthouse — a visible proof that commitment, depth, and faithfulness are still possible. Today, consider the influence your marriage has on others and the responsibility that comes with it.",
    duration: "25 min",
    prompts: [
      "Who do you think watches our marriage and is influenced by what they see?",
      "What do you hope people see when they look at us?",
      "Is there a younger couple we could intentionally pour into?",
      "How does knowing that others are watching change the way you show up in our marriage?"
    ],
    reflection: "You may never know how many people your marriage has saved from giving up on love. Keep the light on."
  },
  {
    id: 747, day: 291, program: 'marriage-strengthening',
    title: "Building a Legacy of Love",
    emoji: "🏛️",
    tagline: "What you build together will outlive you. Build accordingly.",
    body: "Legacy is not about wealth or fame. It is about the emotional, spiritual, and relational inheritance you leave behind. Your marriage is building a legacy every single day — in how you treat each other, how you resolve conflict, how you love your children, and how you serve your community. Today, think about the legacy your marriage is creating. Is it the one you want to leave?",
    duration: "25 min",
    prompts: [
      "What legacy is our marriage currently building — whether we intended it or not?",
      "What legacy do you want our marriage to be remembered for?",
      "What needs to change for us to build the legacy we actually want?",
      "What is one thing we can start doing today that our great-grandchildren will benefit from?"
    ],
    reflection: "Legacy is not built in a single grand gesture. It is built in ten thousand small choices made with love and intention."
  },
  {
    id: 748, day: 292, program: 'marriage-strengthening',
    title: "The Power of Shared Purpose",
    emoji: "🎯",
    tagline: "Couples who share a purpose do not drift apart. They are pulled forward together.",
    body: "Drift is the silent killer of marriages. Not conflict — drift. Two people slowly moving in different directions, consumed by individual pursuits, until one day they look up and realize they are strangers. The antidote to drift is shared purpose. A project, a cause, a vision that requires both of you. Today, identify or create a shared purpose that will pull you forward together.",
    duration: "25 min",
    prompts: [
      "Do we currently share a purpose beyond maintaining our household?",
      "What excites both of us equally? Where do our passions overlap?",
      "Have we been drifting toward separate lives without realizing it?",
      "What shared project or goal can we commit to that would deepen our partnership?"
    ],
    reflection: "A shared purpose is not optional in marriage. It is the gravitational force that keeps two people orbiting together instead of flying apart."
  },
  {
    id: 749, day: 293, program: 'marriage-strengthening',
    title: "Conflict with Dignity",
    emoji: "🤺",
    tagline: "Fight for your marriage, not against your partner.",
    body: "Conflict is inevitable. Cruelty is not. The way you fight reveals more about your marriage than the way you love. Do you fight to win or to understand? Do you fight with respect or with contempt? Do you fight to resolve or to destroy? Today, establish rules of engagement — principles that govern how you disagree so that every conflict leaves your marriage stronger, not scarred.",
    duration: "25 min",
    prompts: [
      "What is our worst conflict habit — the one that causes the most damage?",
      "What rules of engagement should we establish for future disagreements?",
      "Has there ever been a conflict where we both walked away feeling respected? What made it work?",
      "Can we commit to never using contempt, stonewalling, or name-calling — no matter how heated it gets?"
    ],
    reflection: "The goal of conflict in marriage is not victory. It is understanding. Fight accordingly."
  },
  {
    id: 750, day: 294, program: 'marriage-strengthening',
    title: "Rest as Resistance",
    emoji: "🛌",
    tagline: "In a culture that worships hustle, resting together is a revolutionary act.",
    body: "You were not built to run at full speed forever, and neither was your marriage. Rest is not laziness — it is resistance against a culture that will consume every hour you let it. The couples who last are the ones who protect their rest with the same ferocity they protect their income. Today, evaluate how well you rest together — and whether you have given yourselves permission to slow down.",
    duration: "25 min",
    prompts: [
      "When was the last time we truly rested together — no screens, no agenda?",
      "Do you feel guilty when you rest? Where does that come from?",
      "What does restful time together look like for each of us?",
      "How can we build more intentional rest into our weekly rhythm?"
    ],
    reflection: "Rest is not the reward you earn after everything is done. It is the fuel that makes everything possible. Take it. Together."
  },
  {
    id: 751, day: 295, program: 'marriage-strengthening',
    title: "Protecting Your Inner Circle",
    emoji: "🔐",
    tagline: "Not every friend is a friend of your marriage. Choose wisely.",
    body: "The people closest to you have influence over your marriage — whether you recognize it or not. Friends who mock commitment, coworkers who normalize infidelity, social media accounts that breed comparison — these voices shape your expectations and erode your contentment. Today, audit your inner circle. Who is speaking life into your marriage? Who is quietly undermining it? Protect your marriage by protecting who has access to your mind.",
    duration: "25 min",
    prompts: [
      "Who in our circle actively supports and strengthens our marriage?",
      "Is there anyone whose influence might be subtly harmful to how we see each other?",
      "What media or social content has been shaping our expectations in unhealthy ways?",
      "How can we curate an inner circle that builds us up rather than tears us down?"
    ],
    reflection: "You become the average of the five relationships closest to you. Make sure those relationships honor the marriage you are building."
  },
  {
    id: 752, day: 296, program: 'marriage-strengthening',
    title: "Financial Generosity as a Couple",
    emoji: "🤲",
    tagline: "Generous couples build generous lives. Open your hands together.",
    body: "Financial generosity is not about the amount. It is about the posture. Couples who give together — to causes they believe in, to people in need, to their community — discover that generosity strengthens their bond in ways that accumulation never can. Giving together aligns your values, deepens your trust, and reminds you that your resources are meant to flow, not just accumulate. Today, talk about your giving life as a couple.",
    duration: "25 min",
    prompts: [
      "How generous are we currently as a couple? Be honest.",
      "What cause or organization would we both feel passionate about supporting?",
      "Does the idea of giving more excite you or terrify you? Why?",
      "What would it look like to make generosity a core value of our marriage?"
    ],
    reflection: "The tightest fist holds the most anxiety. The open hand holds the most peace. Give together and watch your marriage expand."
  },
  {
    id: 753, day: 297, program: 'marriage-strengthening',
    title: "Mentoring the Next Generation of Couples",
    emoji: "🔦",
    tagline: "The wisdom you have earned is not just for you. Pass it on.",
    body: "You have walked through fire together. You have learned lessons that younger couples are desperate to hear but cannot access. The mentoring of younger couples is not about having a perfect marriage — it is about having an honest one. Today, consider how your marriage can serve as a resource for those coming behind you. Your scars are credentials. Your survival is a syllabus.",
    duration: "25 min",
    prompts: [
      "Is there a younger couple in our life who could benefit from our experience?",
      "What is the most important lesson we could share with a couple just starting out?",
      "Would you be open to formally mentoring another couple? What would that look like?",
      "What would we have given to have a mentor couple when we were starting out?"
    ],
    reflection: "The strongest generation of marriages is not the one that figured it out alone. It is the one that had someone ahead of them willing to be honest."
  },
  {
    id: 754, day: 298, program: 'marriage-strengthening',
    title: "The Couple That Heals Together",
    emoji: "🩹",
    tagline: "Your marriage is not just surviving. It is healing — you, each other, and the world around you.",
    body: "You came into this marriage carrying wounds from before you ever met. Childhood scars, past relationship trauma, generational patterns of dysfunction. But here is the extraordinary truth: your marriage has the power to heal what came before it. Every act of patience rewrites an old script of abandonment. Every moment of faithfulness heals an old betrayal. Today, honor the healing your marriage has already done — and the healing that is still underway.",
    duration: "25 min",
    prompts: [
      "What wound from your past has our marriage helped heal?",
      "What wound is still in process — not yet fully healed?",
      "How has healing together changed the way you see yourself?",
      "What generational pattern are we breaking simply by staying committed to growth?"
    ],
    reflection: "Your marriage is not just about the two of you. It is healing backward into the generations that came before and forward into the ones that will come after."
  },
  {
    id: 755, day: 299, program: 'marriage-strengthening',
    title: "Preparing for the Milestone",
    emoji: "🪜",
    tagline: "Tomorrow marks three hundred days. Tonight, prepare your heart.",
    body: "Tomorrow you will reach Day 300 — a milestone that most couples will never attempt, let alone achieve. But milestones are not just about the number. They are about the person you have become in the process of reaching them. Tonight, take a quiet inventory of who you were at Day 1 and who you are now. What has changed? What has deepened? What do you carry now that you did not carry before? Prepare your heart for what tomorrow will ask of you.",
    duration: "25 min",
    prompts: [
      "Who were you when we started this journey, and who are you now?",
      "What has this process demanded of you that you did not expect?",
      "What are you most proud of as you approach Day 300?",
      "What do you want to carry into the next chapter of our marriage?"
    ],
    reflection: "The milestone is not the destination. It is proof that you are the kind of couple that does not quit."
  },
  {
    id: 756, day: 300, program: 'marriage-strengthening',
    title: "Three Hundred Days — The Marriage That Chose Itself",
    emoji: "👑",
    tagline: "Three hundred days. You did not just survive your marriage. You chose it — again and again and again.",
    body: "Three hundred days ago, you made a decision that most couples never make: to do the work. Not just the surface-level work of date nights and compliments, but the deep, soul-level work of confronting your shadows, healing your wounds, and building something extraordinary from the ground up. Today is not about celebration — it is about recognition. You are not the same couple who started this journey. You have been tested, stretched, broken open, and rebuilt. And through it all, your marriage kept choosing itself. That is not luck. That is not chemistry. That is the sacred, stubborn, relentless power of two people who refused to give up on each other.",
    duration: "45 min",
    prompts: [
      "In three hundred days, what is the single most transformative thing that has happened in our marriage?",
      "What moment almost broke us — and what kept us going?",
      "If our marriage could speak, what would it say to us right now?",
      "Look into each other's eyes. Say this: 'I chose you three hundred days ago. I choose you tonight. I will choose you tomorrow. This marriage chose itself — and I am honored to be part of it.'"
    ],
    reflection: "Three hundred days is not a number. It is a testament. You are living proof that love is not a feeling you fall into — it is a discipline you rise to meet, every single day."
  },
  {
    id: 757, day: 301, program: 'marriage-strengthening',
    title: "The Morning After the Milestone",
    emoji: "🌅",
    tagline: "The milestone is behind you. The mission continues.",
    body: "Yesterday was extraordinary. Today is ordinary. And that is exactly the point. The true test of a transformed marriage is not how you celebrate the milestones — it is how you show up the morning after. The dishes still need washing. The bills still need paying. The conversations still need having. But you bring something different to the ordinary now. You bring three hundred days of depth, practice, and commitment. Let that change how you move through today.",
    duration: "20 min",
    prompts: [
      "How do you feel today — the day after a major milestone?",
      "What is different about our ordinary now compared to three hundred days ago?",
      "How do we prevent the post-milestone letdown from dulling our momentum?",
      "What is one ordinary thing you will do differently today because of everything we have built?"
    ],
    reflection: "Milestones are markers, not finish lines. The marriage you built yesterday still needs to be lived today."
  },
  {
    id: 758, day: 302, program: 'marriage-strengthening',
    title: "Your Marriage in a Broken World",
    emoji: "🌎",
    tagline: "The world is not kind to marriages. Yours can be the exception that gives others hope.",
    body: "Look around. Divorce rates are climbing. Commitment is mocked. Loyalty is treated as naivety. In a world that has largely given up on the idea that two people can build something lasting, your marriage is a radical act of defiance. You are not naive — you are brave. Today, acknowledge the cultural headwinds your marriage faces and recommit to being the exception. The world needs to see that this is still possible.",
    duration: "25 min",
    prompts: [
      "What cultural messages about marriage have been the hardest to resist?",
      "How has the cynicism of the world affected your expectations of our marriage?",
      "What makes our marriage countercultural — in the best sense of the word?",
      "How can we be visible proof that deep, lasting love still exists?"
    ],
    reflection: "Your marriage is not just personal. It is prophetic. In a broken world, a strong couple is the most radical thing there is."
  },
  {
    id: 759, day: 303, program: 'marriage-strengthening',
    title: "The Power of Agreement",
    emoji: "🔗",
    tagline: "When two people agree — truly agree — mountains move.",
    body: "There is exponential power in agreement. Not forced consensus or reluctant compliance, but genuine, deep alignment between two people who have done the work to understand each other. When you and your partner are truly in agreement — about your values, your direction, your non-negotiables — you become an unstoppable force. Today, identify where you are in agreement and where you still need to align.",
    duration: "25 min",
    prompts: [
      "Where are we most deeply in agreement as a couple?",
      "Where do we still have unresolved misalignment?",
      "What would change if we were fully aligned on our top three priorities?",
      "Can we draft a shared agreement — three to five statements that define who we are and what we stand for?"
    ],
    reflection: "Agreement is not the absence of disagreement. It is the presence of shared conviction that has been tested, debated, and chosen together."
  },
  {
    id: 760, day: 304, program: 'marriage-strengthening',
    title: "Sabbath for Your Marriage",
    emoji: "☀️",
    tagline: "Your marriage needs a day of rest. Give it one.",
    body: "The concept of sabbath — a dedicated day of rest — is one of the oldest pieces of wisdom in human history. But sabbath is not just for individuals. Your marriage needs a sabbath too. A regular, protected time where you step off the treadmill of productivity and simply exist together. No errands. No difficult conversations. No agenda. Just the two of you, resting in what you have built. Today, plan your marriage sabbath.",
    duration: "25 min",
    prompts: [
      "When was the last time our marriage had a true day of rest?",
      "What would a marriage sabbath look like for us practically?",
      "What keeps us from resting together — guilt, busyness, or something else?",
      "Can we commit to one day or half-day each month that is a sabbath for our marriage?"
    ],
    reflection: "A marriage that never rests will eventually break. Sabbath is not a luxury. It is a necessity."
  },
  {
    id: 761, day: 305, program: 'marriage-strengthening',
    title: "Writing Your Marriage Manifesto",
    emoji: "📝",
    tagline: "Put it in writing. Declare who you are and what you stand for.",
    body: "A manifesto is a public declaration of intentions, values, and principles. Your marriage deserves one. Not your wedding vows — those were made before you knew what you were getting into. This is different. This is a declaration made by two people who have done the hard work, faced the truth, and still chosen each other. Today, write your marriage manifesto together. Make it specific. Make it honest. Make it something you can return to when the storms come.",
    duration: "30 min",
    prompts: [
      "What are the three core values that define our marriage?",
      "What will we always fight for? What will we never tolerate?",
      "What promise do we make to each other that goes beyond our wedding vows?",
      "Write it down together. Read it aloud. Sign it if you want. This is your manifesto."
    ],
    reflection: "A manifesto is not just words on paper. It is a stake in the ground. Plant it deep and let it anchor everything you build."
  },
  {
    id: 762, day: 306, program: 'marriage-strengthening',
    title: "The Unfinished Work",
    emoji: "🔨",
    tagline: "You are not done. You will never be done. And that is the beauty of it.",
    body: "Tomorrow is the last day of this section, but it is not the end of your work. Marriage is an unfinished project by design. There will always be more to learn, more to heal, more to build, more to forgive, more to celebrate. The couples who thrive are not the ones who finish the work — they are the ones who fall in love with the process of doing it. Today, honor the unfinished work and commit to continuing it long after this program ends.",
    duration: "25 min",
    prompts: [
      "What work remains unfinished in our marriage?",
      "Are you at peace with the idea that we will never be 'done' growing?",
      "What area of growth do you want to focus on in our next season together?",
      "How do we ensure this program does not become a memory, but a permanent shift?"
    ],
    reflection: "The most beautiful marriages are not the finished ones. They are the ones still under construction — with both builders still showing up every morning."
  },
  {
    id: 763, day: 307, program: 'marriage-strengthening',
    title: "The Couple That Stayed",
    emoji: "🏔️",
    tagline: "Sixty days of leadership, service, and soul. You stayed. You built. You became.",
    body: "You have spent sixty days in the deepest waters of your marriage — exploring spiritual intimacy, emotional maturity, shared leadership, service, boundaries, legacy, and purpose. You have had conversations that most couples never have. You have built frameworks that most marriages never develop. And through it all, you stayed. Not because it was easy, but because you understood that the marriage worth having is the one worth fighting for. This is not the end. This is the launchpad. Everything you have built in these sixty days is a foundation for the decades ahead. Go build something extraordinary.",
    duration: "30 min",
    prompts: [
      "What has this sixty-day journey meant to you?",
      "What is the single most important thing you are taking with you?",
      "How have you changed as a partner during this season?",
      "Hold each other. Say this: 'We stayed. We built. We became. And we are only getting started.'"
    ],
    reflection: "The couples who change the world are not the ones who had it easy. They are the ones who had it hard — and stayed anyway. You stayed. Now go show the world what that looks like."
  },
  {
    id: 764, day: 308, program: 'marriage-strengthening',
    title: "Beyond Good Enough",
    emoji: "🏛️",
    tagline: "Good marriages survive. Extraordinary marriages transform.",
    body: "Most couples settle for a marriage that works. It pays the bills, raises the children, keeps the peace. But you did not commit to a year of daily work to arrive at 'good enough.' Today you cross a threshold — from a marriage that functions to one that astonishes. The extraordinary marriage is not an accident. It is a daily decision to reject mediocrity in the way you love.",
    duration: "25 min",
    prompts: [
      "Where have you been settling for 'good enough' in your marriage?",
      "What would an extraordinary marriage look like in your daily life — not on vacation, but on a Tuesday?",
      "What is one area where you have been coasting instead of investing?",
      "Tell your partner: 'I did not choose you to build something ordinary.'"
    ],
    reflection: "The distance between a good marriage and a great one is not talent. It is intention — applied every single day."
  },
  {
    id: 765, day: 309, program: 'marriage-strengthening',
    title: "The Daily Practice of Excellence",
    emoji: "⚒️",
    tagline: "Excellence is not an event. It is a rhythm.",
    body: "An extraordinary marriage is not built in grand gestures. It is built in the way you say good morning. The way you listen when you are tired. The way you reach for their hand without thinking. Excellence in marriage is a practice — repeated so often it becomes instinct. Today you examine your daily rhythms and ask whether they reflect the marriage you want to be known for.",
    duration: "25 min",
    prompts: [
      "What does your average morning interaction with your partner look like — and what could it look like?",
      "What small daily habit would most elevate your marriage if you committed to it?",
      "Where do your daily rhythms reflect excellence, and where do they reflect autopilot?",
      "Choose one micro-practice to commit to for the rest of this program."
    ],
    reflection: "You do not rise to the level of your wedding vows. You fall to the level of your daily habits."
  },
  {
    id: 766, day: 310, program: 'marriage-strengthening',
    title: "Choosing Your Partner Over Convenience",
    emoji: "⚖️",
    tagline: "Every shortcut you take is a deposit in the wrong account.",
    body: "Convenience is the silent killer of great marriages. It is easier to scroll than to engage. Easier to assume than to ask. Easier to let it go than to have the conversation. But every time you choose the easier path over the deeper one, you choose comfort over your partner. Today you identify the places where convenience has replaced connection — and you make a different choice.",
    duration: "25 min",
    prompts: [
      "Where have you chosen convenience over connection this week?",
      "What conversation have you been avoiding because it feels inconvenient?",
      "How does your partner experience it when you choose the easy path instead of them?",
      "Name one inconvenient act of love you will do today — and do it."
    ],
    reflection: "Love is not efficient. It is not optimized. It is gloriously, beautifully inconvenient — and that is what makes it sacred."
  },
  {
    id: 767, day: 311, program: 'marriage-strengthening',
    title: "The Marriage That Inspires Others",
    emoji: "🔥",
    tagline: "Your marriage is a sermon the world is already watching.",
    body: "Whether you know it or not, people are watching your marriage. Your children. Your friends. Your community. The way you treat each other in public and in private sends a message about what love can be. Today you consider the witness of your marriage — not for performance, but for purpose. What does your love say to the world about what is possible between two people?",
    duration: "25 min",
    prompts: [
      "What message does your marriage currently send to those who observe it?",
      "Who in your life needs to see a marriage that works — and are you showing them one?",
      "What would change if you treated your marriage as a gift to the world, not just to each other?",
      "Tell your partner: 'I want our love to be proof that extraordinary marriages still exist.'"
    ],
    reflection: "The most powerful testimony is not what you preach. It is how you love when you think no one is watching."
  },
  {
    id: 768, day: 312, program: 'marriage-strengthening',
    title: "Depth Over Comfort",
    emoji: "🌊",
    tagline: "Comfort keeps you warm. Depth keeps you alive.",
    body: "Comfortable marriages are pleasant. Deep marriages are transformative. Comfort says, 'Let us not rock the boat.' Depth says, 'Let us explore what is underneath the water.' Today you choose depth — the kind that requires vulnerability, courage, and a willingness to see parts of each other that are not always pretty. This is where the real treasure lives.",
    duration: "25 min",
    prompts: [
      "Where has your marriage become comfortable but shallow?",
      "What question are you afraid to ask your partner — and why?",
      "When was the last time you had a conversation that genuinely surprised you both?",
      "Ask your partner one question you have never asked before. Listen without reacting."
    ],
    reflection: "Shallow water is safe. But no one has ever found a pearl in a puddle."
  },
  {
    id: 769, day: 313, program: 'marriage-strengthening',
    title: "The Hard Conversation That Deepens Love",
    emoji: "🪨",
    tagline: "The conversation you are avoiding is the one your marriage needs most.",
    body: "Every marriage has a conversation that both partners have been circling but never landing. It might be about money. About intimacy. About a wound that never fully healed. Today you stop circling. You do not attack, blame, or defend. You simply sit together and say, 'There is something I have been carrying, and I trust you enough to share it.' Hard conversations do not break strong marriages. Silence does.",
    duration: "30 min",
    prompts: [
      "What is the conversation you have been avoiding in your marriage?",
      "What fear has kept you from having it?",
      "How do you want your partner to receive what you share — and have you told them that?",
      "Begin the conversation today. Even if you only open the door, that is enough."
    ],
    reflection: "The couples who last are not the ones who avoid hard conversations. They are the ones who have learned to hold each other through them."
  },
  {
    id: 770, day: 314, program: 'marriage-strengthening',
    title: "Radical Honesty",
    emoji: "🪞",
    tagline: "The truth does not threaten love. It is the only thing that can sustain it.",
    body: "Radical honesty is not brutality. It is the courage to be fully known — to remove the masks, the performance, the curated version of yourself. It is saying, 'This is who I really am today — afraid, uncertain, hopeful, flawed — and I trust you to hold all of it.' Today you practice the kind of honesty that most people never risk, because you understand that half-truths build half-marriages.",
    duration: "25 min",
    prompts: [
      "Where have you been editing yourself to keep the peace?",
      "What truth about yourself have you been withholding from your partner?",
      "How does it feel to be fully honest versus partially honest in your marriage?",
      "Share one unedited truth with your partner today — with kindness, but without softening the core."
    ],
    reflection: "You cannot build an extraordinary marriage on a foundation of polite half-truths. Honesty is the bedrock. Everything else is sand."
  },
  {
    id: 771, day: 315, program: 'marriage-strengthening',
    title: "Choosing Growth Over Stagnation",
    emoji: "🌱",
    tagline: "A marriage that stops growing has already started dying.",
    body: "Growth is uncomfortable. It demands change, vulnerability, and the willingness to admit that what worked last year may not work this year. Stagnation, on the other hand, is painless — until the day you look across the table and realize you are strangers sharing a mortgage. Today you choose growth. Not because it is easy, but because you refuse to let your marriage become a monument to who you used to be.",
    duration: "25 min",
    prompts: [
      "Where has your marriage been stagnant — and how long have you known?",
      "What would growth look like for you as a couple in the next ninety days?",
      "What are you each willing to change to make that growth possible?",
      "Make a growth commitment together. Write it down. Date it. Sign it."
    ],
    reflection: "The oak tree does not stop growing because it is tall. It grows because stopping is not in its nature. Let your marriage be the same."
  },
  {
    id: 772, day: 316, program: 'marriage-strengthening',
    title: "The Couple as Creative Force",
    emoji: "🎨",
    tagline: "Your marriage is not just a relationship. It is a creation.",
    body: "Two people who love well become a creative force in the world. They build families, businesses, communities, traditions, and legacies that neither could build alone. Today you explore the creative potential of your partnership — not just what you maintain, but what you generate. What are you building together that did not exist before you chose each other?",
    duration: "25 min",
    prompts: [
      "What have you created together that you are most proud of?",
      "What do you dream of building together that you have not yet started?",
      "How does your partnership make you more creative than you would be alone?",
      "Name one project, tradition, or dream you will begin building together this month."
    ],
    reflection: "A marriage is not just a shelter from the storm. At its best, it is a studio — where two artists build something the world has never seen."
  },
  {
    id: 773, day: 317, program: 'marriage-strengthening',
    title: "Building Traditions That Outlast You",
    emoji: "🕯️",
    tagline: "The traditions you build today will warm generations you will never meet.",
    body: "Every family has traditions — but few families build them intentionally. The meals you share, the holidays you honor, the phrases you repeat, the rituals you protect — these become the DNA of your family for generations. Today you do not leave tradition to accident. You choose, with purpose, the practices that will define your family long after you are gone.",
    duration: "25 min",
    prompts: [
      "What traditions from your families of origin do you want to carry forward?",
      "What new tradition have you built together that matters deeply to you?",
      "What tradition do you wish you had — and what is stopping you from starting it today?",
      "Design one new family tradition together. Name it. Schedule it. Protect it."
    ],
    reflection: "Your grandchildren will not remember your salary. They will remember the table you set and the songs you sang around it."
  },
  {
    id: 774, day: 318, program: 'marriage-strengthening',
    title: "The Marriage as a Work of Art",
    emoji: "🖼️",
    tagline: "You are not maintaining a marriage. You are composing one.",
    body: "A great marriage is a work of art — layered, textured, surprising, and deeply intentional. It has light and shadow, tension and resolution, moments of breathtaking beauty and stretches of quiet patience. Like any masterpiece, it requires both skill and soul. Today you step back and look at the full canvas of your marriage. What do you see? And what do you want to paint next?",
    duration: "25 min",
    prompts: [
      "If your marriage were a painting, what would it look like right now?",
      "What colors are dominant — joy, tension, peace, passion, fatigue?",
      "What is missing from the canvas that you want to add?",
      "Tell your partner: 'I want to spend the rest of my life making this beautiful.'"
    ],
    reflection: "The Sistine Chapel was not painted in a day. And the artist did not stop because his neck hurt. He kept going — because the ceiling deserved it."
  },
  {
    id: 775, day: 319, program: 'marriage-strengthening',
    title: "The Standard You Refuse to Lower",
    emoji: "📏",
    tagline: "Your marriage will rise to the standard you set — or fall to the one you accept.",
    body: "Exceptional couples hold a standard — not of perfection, but of effort. They refuse to let weeks pass without meaningful connection. They refuse to let conflict calcify into resentment. They refuse to let love become a noun when it was always meant to be a verb. Today you name your non-negotiable standard — the line below which your marriage will never fall, because you will not let it.",
    duration: "25 min",
    prompts: [
      "What standard have you been quietly lowering in your marriage?",
      "What is the minimum quality of connection you refuse to accept?",
      "How do you lovingly hold each other accountable when the standard slips?",
      "Together, write one sentence: 'In this marriage, we will never stop _________.'"
    ],
    reflection: "The standard you walk past is the standard you accept. Decide what you will never walk past again."
  },
  {
    id: 776, day: 320, program: 'marriage-strengthening',
    title: "The Art of Paying Attention",
    emoji: "👁️",
    tagline: "The greatest gift you can give your partner is your undivided attention.",
    body: "In a world of infinite distractions, attention has become the rarest currency. To truly see your partner — to notice the shift in their tone, the weight behind their smile, the things they are not saying — is an act of profound love. Today you practice the lost art of paying attention. Not glancing. Not multitasking. Seeing. The kind of seeing that makes your partner feel like the most important person in every room.",
    duration: "25 min",
    prompts: [
      "When was the last time you gave your partner your complete, undivided attention?",
      "What do you notice about your partner that you have never told them?",
      "How does your partner signal that they need to be seen — and do you catch it?",
      "Spend ten minutes today doing nothing but looking at your partner and listening. No phones. No agenda."
    ],
    reflection: "Love is not proven by grand declarations. It is proven by the quiet act of noticing — again and again and again."
  },
  {
    id: 777, day: 321, program: 'marriage-strengthening',
    title: "The Extraordinary Ordinary",
    emoji: "☕",
    tagline: "Greatness lives in the ordinary moments you refuse to waste.",
    body: "The extraordinary marriage is not defined by the highlight reel. It is defined by the Tuesday evenings, the Saturday mornings, the car rides and grocery runs and bedtime routines. These ordinary moments are the raw material of your legacy. Today you bring reverence to the mundane. You treat the ordinary day as what it truly is — the only canvas you are guaranteed.",
    duration: "25 min",
    prompts: [
      "What ordinary moment in your marriage holds the most beauty?",
      "How do you typically treat routine moments — as obligations or as opportunities?",
      "What would change if you approached tonight's dinner as if it were your last together?",
      "Choose one ordinary moment today and fill it with extraordinary presence."
    ],
    reflection: "The couples who build extraordinary marriages are not the ones with extraordinary circumstances. They are the ones who bring extraordinary intention to ordinary days."
  },
  {
    id: 778, day: 322, program: 'marriage-strengthening',
    title: "Protecting the Fire",
    emoji: "🔥",
    tagline: "Passion does not die on its own. It is neglected to death.",
    body: "Every couple begins with fire. But fire requires tending — fuel, oxygen, attention. Left alone, even the fiercest flame becomes ash. Today you examine the passion in your marriage — not just physical, but emotional, intellectual, spiritual. Where is the fire burning strong? Where has it dimmed? And what are you willing to do to protect what remains and reignite what has cooled?",
    duration: "25 min",
    prompts: [
      "On a scale of one to ten, how would you rate the passion in your marriage right now?",
      "What used to ignite passion between you that you have stopped doing?",
      "What new form of passion could you explore together at this stage of your lives?",
      "Plan one act this week that is designed to reignite something between you."
    ],
    reflection: "You would not leave a campfire unattended and blame the wind when it goes out. Tend your fire. It is the only warmth you have."
  },
  {
    id: 779, day: 323, program: 'marriage-strengthening',
    title: "The Courage to Be Vulnerable Again",
    emoji: "🛡️",
    tagline: "Armor protects you from pain. It also protects you from love.",
    body: "After years of marriage, many partners learn to protect themselves. Small walls go up. Certain topics become off-limits. Vulnerability feels too risky because it has been punished before. But a marriage without vulnerability is a marriage without intimacy. Today you choose courage over protection. You lower the shield — not because it is safe, but because the marriage you want cannot be built behind a wall.",
    duration: "25 min",
    prompts: [
      "Where have you put up walls in your marriage — and when did it start?",
      "What wound taught you that vulnerability was dangerous?",
      "What would your partner need to do to make vulnerability feel safe again?",
      "Share one thing today that feels risky. Let your partner hold it with care."
    ],
    reflection: "The bravest thing you will ever do in your marriage is not fighting for it. It is letting your guard down inside of it."
  },
  {
    id: 780, day: 324, program: 'marriage-strengthening',
    title: "Forgiveness as a Lifestyle",
    emoji: "🕊️",
    tagline: "Forgiveness is not an event. In a lasting marriage, it is a way of life.",
    body: "You have practiced forgiveness before in this program. But today you go deeper. You explore forgiveness not as a response to a single offense, but as a posture — a daily orientation toward your partner that says, 'I will not hold today hostage to yesterday.' Extraordinary marriages are built by people who have made forgiveness a reflex, not a deliberation.",
    duration: "25 min",
    prompts: [
      "What small resentment are you carrying right now that you could release?",
      "How quickly do you move from offense to forgiveness — and what slows you down?",
      "What would your marriage feel like if forgiveness were your default, not your last resort?",
      "Tell your partner: 'I choose to release anything I have been holding. We start clean today.'"
    ],
    reflection: "Bitterness is a debt you charge your partner but pay yourself. Forgiveness is the only currency that frees you both."
  },
  {
    id: 781, day: 325, program: 'marriage-strengthening',
    title: "The Conversation About Money — Revisited",
    emoji: "💰",
    tagline: "Money is never just about money. It is about safety, power, and trust.",
    body: "You have talked about money before. But at this stage of the journey, you are ready for a deeper conversation — one that goes beyond budgets and into beliefs. What does money represent to each of you? Where do your financial values align, and where do they quietly clash? Today you have the money conversation that most couples avoid — with the maturity and trust you have earned.",
    duration: "30 min",
    prompts: [
      "What did your family of origin teach you about money — spoken and unspoken?",
      "Where do your financial values align, and where do they create tension?",
      "What financial decision would most benefit your marriage in the next year?",
      "Create or revisit a shared financial vision statement together."
    ],
    reflection: "Couples who master money conversations are not the ones who agree on everything. They are the ones who trust each other enough to disagree and still build."
  },
  {
    id: 782, day: 326, program: 'marriage-strengthening',
    title: "The Way You Fight Now",
    emoji: "⚔️",
    tagline: "How you fight reveals how much you have grown.",
    body: "Conflict is inevitable. But the way you handle it has transformed over this year. Early in your journey, you explored fair fighting and repair. Now, three hundred and twenty-six days in, your conflicts should look different — shorter, kinder, more productive. Today you evaluate how far your conflict style has come, and where it still needs refinement.",
    duration: "25 min",
    prompts: [
      "How has the way you handle conflict changed since the beginning of this program?",
      "What old pattern still shows up when you are stressed or tired?",
      "What does your best conflict look like — the kind that actually brings you closer?",
      "Thank your partner for one way they have grown in how they handle disagreements."
    ],
    reflection: "The measure of a marriage is not the absence of conflict. It is the quality of repair that follows."
  },
  {
    id: 783, day: 327, program: 'marriage-strengthening',
    title: "The Dream You Have Not Spoken",
    emoji: "💭",
    tagline: "The dream you keep to yourself is the one your marriage cannot support.",
    body: "Everyone carries a dream they have not fully shared — a longing, a vision, a secret hope for their life. In marriage, unspoken dreams become invisible walls. Your partner cannot support what they do not know. Today you speak the dream. Not the safe one. The real one. The one that makes your voice shake a little when you say it out loud.",
    duration: "25 min",
    prompts: [
      "What dream have you been carrying that you have not fully shared with your partner?",
      "What has stopped you from speaking it until now?",
      "How would it feel to have your partner fully behind this dream?",
      "Share your dream today. Ask your partner to simply listen and say: 'I see that in you.'"
    ],
    reflection: "A dream spoken into a safe marriage does not shrink. It grows legs and starts to walk."
  },
  {
    id: 784, day: 328, program: 'marriage-strengthening',
    title: "The Gift of Being Known",
    emoji: "🔑",
    tagline: "To be fully known and fully loved is the deepest human need.",
    body: "There is no greater gift than being truly known by another human being — your fears, your failures, your finest moments, and your most guarded corners — and being loved not in spite of them, but through them. Today you sit with the extraordinary privilege of being known. After three hundred and twenty-eight days of daily work, you know each other in ways that most couples never achieve. Honor that.",
    duration: "25 min",
    prompts: [
      "What does your partner know about you that no one else in the world knows?",
      "How does it feel to be fully known — and what parts still feel exposed?",
      "What has being truly known by your partner taught you about yourself?",
      "Tell your partner: 'You know me better than anyone alive. And I am grateful you stayed.'"
    ],
    reflection: "The garden of intimacy is not built by showing your best. It is built by showing your all — and finding that love does not flinch."
  },
  {
    id: 785, day: 329, program: 'marriage-strengthening',
    title: "The Partnership Audit",
    emoji: "📋",
    tagline: "A great partnership is not assumed. It is examined, refined, and chosen again.",
    body: "Today you conduct a partnership audit — not with judgment, but with curiosity. You look at how you divide labor, make decisions, support each other's careers, manage the household, parent, plan, and dream. The question is not whether your partnership is perfect. It is whether it is equitable, sustainable, and life-giving for both of you.",
    duration: "30 min",
    prompts: [
      "Where is your partnership most balanced and effective?",
      "Where does one of you carry a disproportionate load — and how long has it been that way?",
      "What adjustment would make your partnership feel more equitable?",
      "Make one concrete change to the division of responsibility this week."
    ],
    reflection: "The best partnerships are not the ones where everything is equal. They are the ones where everything is seen, named, and chosen."
  },
  {
    id: 786, day: 330, program: 'marriage-strengthening',
    title: "Laughter as Medicine",
    emoji: "😂",
    tagline: "The couple that laughs together survives what the serious couples cannot.",
    body: "Laughter is the most underestimated force in marriage. It breaks tension, builds connection, and reminds you that life — for all its weight — is also absurd and beautiful. Today you prioritize laughter. Not forced humor, but the genuine, belly-deep kind that comes from knowing someone so well that a single look can set you both off. Joy is not a luxury in marriage. It is a necessity.",
    duration: "25 min",
    prompts: [
      "When was the last time you laughed so hard together that you could not breathe?",
      "What inside joke captures the spirit of your marriage?",
      "How do you use humor to navigate hard moments — and when does it help versus hurt?",
      "Do something today with the sole purpose of making each other laugh."
    ],
    reflection: "The marriages that last are not always the most serious. They are the ones where two people still find each other delightful after all these years."
  },
  {
    id: 787, day: 331, program: 'marriage-strengthening',
    title: "Spiritual Alignment",
    emoji: "🙏",
    tagline: "A marriage rooted in shared meaning can survive anything.",
    body: "Spiritual alignment does not require identical beliefs. It requires a shared sense that your marriage exists for something larger than comfort or convenience. Whether your foundation is faith, philosophy, nature, or a deep sense of purpose, today you explore the spiritual core of your marriage. What do you both believe about why you are here — together — in this life?",
    duration: "25 min",
    prompts: [
      "What shared belief or value forms the spiritual center of your marriage?",
      "How do you nurture that center — together and individually?",
      "Where do your spiritual lives diverge, and how do you honor that difference?",
      "Pray, meditate, or sit in silence together for five minutes. Let the stillness speak."
    ],
    reflection: "When two people share a sense of sacred purpose, even suffering becomes meaningful. That is the power of spiritual alignment."
  },
  {
    id: 788, day: 332, program: 'marriage-strengthening',
    title: "The Legacy Letter — Part One",
    emoji: "✉️",
    tagline: "What you write today may be read by someone you will never meet.",
    body: "Today you begin writing a legacy letter — not to your partner, but to the future. To your children, grandchildren, or anyone who inherits the marriage you are building. In this letter, you describe what your marriage taught you, what it cost you, and what it gave you. This is Part One: your individual perspective. Tomorrow you will write it together.",
    duration: "30 min",
    prompts: [
      "What has your marriage taught you that you could not have learned any other way?",
      "What sacrifice did your marriage require — and was it worth it?",
      "What do you want your descendants to know about how to love well?",
      "Begin writing your legacy letter. You do not need to finish it today — just begin."
    ],
    reflection: "The letter you write today is a bridge across time. Someone you will never hold may one day hold your words — and find the courage to stay."
  },
  {
    id: 789, day: 333, program: 'marriage-strengthening',
    title: "The Legacy Letter — Part Two",
    emoji: "📜",
    tagline: "Write it together. Let the ink carry both your voices.",
    body: "Yesterday you began your legacy letters individually. Today you come together to write one unified letter — from both of you, to the future. This is not a performance. It is a declaration. A record of what two people built when they chose each other every day for a year. Let it be honest. Let it be beautiful. Let it be something worth inheriting.",
    duration: "30 min",
    prompts: [
      "Share what you wrote yesterday. Listen without editing each other's experience.",
      "What themes appear in both of your letters?",
      "Together, write the opening paragraph of your shared legacy letter.",
      "Decide where this letter will live — and commit to finishing it before Day 365."
    ],
    reflection: "A legacy is not what you leave behind by accident. It is what you build on purpose — and write down so it cannot be forgotten."
  },
  {
    id: 790, day: 334, program: 'marriage-strengthening',
    title: "The Marriage You Almost Lost",
    emoji: "⚓",
    tagline: "Gratitude is sharpest when you remember what you almost threw away.",
    body: "Most marriages that last have had at least one season where the ending felt closer than the beginning. A crisis. A betrayal. An exhaustion so deep that walking away seemed easier than staying. Today — if it is true for you — you honor the moment your marriage almost did not make it. Not to relive the pain, but to stand in awe of the fact that you are still here, still building, still choosing each other.",
    duration: "25 min",
    prompts: [
      "Was there a moment when your marriage felt like it might not survive? What happened?",
      "What kept you from giving up — and do you think your partner knows?",
      "How did surviving that season change the foundation of your marriage?",
      "If your marriage has never faced that kind of crisis, what has been your hardest season — and what did it teach you?"
    ],
    reflection: "The scar is not a sign of weakness. It is proof that something tried to break you — and failed."
  },
  {
    id: 791, day: 335, program: 'marriage-strengthening',
    title: "Generosity Without Scorekeeping",
    emoji: "🤲",
    tagline: "The moment you start counting, you have stopped loving.",
    body: "Scorekeeping is the tax that mediocre marriages pay. 'I did this, so you should do that.' In extraordinary marriages, generosity flows without a ledger. You give because giving is who you are in this marriage — not because you expect a return. Today you examine where scorekeeping has quietly crept in and choose radical, unilateral generosity instead.",
    duration: "25 min",
    prompts: [
      "Where have you been quietly keeping score in your marriage?",
      "What would it feel like to give without any expectation of return — truly?",
      "How does scorekeeping damage the trust between you?",
      "Do one generous act today with zero expectation. Do not mention it. Just give."
    ],
    reflection: "Love that keeps score is a transaction. Love that gives freely is a revolution."
  },
  {
    id: 792, day: 336, program: 'marriage-strengthening',
    title: "The Couple Others Come To",
    emoji: "🏠",
    tagline: "Build a marriage so strong that others seek shelter in its shadow.",
    body: "As your marriage has grown, you may have noticed something: people come to you. Friends ask for advice. Younger couples watch how you navigate difficulty. Your marriage has become a reference point — a quiet lighthouse in a culture of disposable relationships. Today you embrace this role. Not with arrogance, but with stewardship. The marriage you have built is a resource for the world.",
    duration: "25 min",
    prompts: [
      "Has anyone ever come to you for marriage advice? What did you tell them?",
      "What wisdom has your marriage earned that you feel called to share?",
      "How do you balance being a resource for others while protecting your own marriage?",
      "Identify one couple in your life who could benefit from your encouragement — and reach out."
    ],
    reflection: "The strongest marriages are not fortresses. They are lighthouses — built for the storm, shining for others."
  },
  {
    id: 793, day: 337, program: 'marriage-strengthening',
    title: "The Masterpiece in Progress",
    emoji: "🎭",
    tagline: "You are not finished. You are not supposed to be.",
    body: "Today marks the end of the first arc of this final season — the exploration of what makes a marriage extraordinary. You have examined excellence, vulnerability, depth, creativity, legacy, and purpose. And the truth you have discovered is this: the extraordinary marriage is not a destination. It is a posture. A daily decision. A refusal to settle. You are a masterpiece in progress — and the brush is still in your hand.",
    duration: "25 min",
    prompts: [
      "What has this season taught you about what makes a marriage extraordinary?",
      "Which mission in this arc challenged you the most — and why?",
      "How has your definition of a great marriage changed over this year?",
      "Tell your partner: 'We are not finished. And that is the most beautiful part.'"
    ],
    reflection: "The masterpiece is never complete. The artist simply learns to love the process more than the product."
  },
  {
    id: 794, day: 338, program: 'marriage-strengthening',
    title: "Integration Begins",
    emoji: "🧩",
    tagline: "You have gathered the pieces. Now you assemble the whole.",
    body: "For three hundred and thirty-seven days, you have explored every dimension of your marriage — communication, intimacy, conflict, forgiveness, legacy, purpose, and more. Now begins the integration. Not new lessons, but the weaving together of everything you have learned into a unified way of being. Today you take inventory. What has stuck? What has faded? What needs to be reclaimed?",
    duration: "25 min",
    prompts: [
      "What are the three most transformative lessons from this entire year?",
      "Which lesson did you learn but have not yet fully integrated into daily life?",
      "What habit from this program has become second nature?",
      "Make a list of your top five marriage commitments going forward."
    ],
    reflection: "Knowledge is what you learn. Wisdom is what remains after you stop trying to remember it."
  },
  {
    id: 795, day: 339, program: 'marriage-strengthening',
    title: "Revisiting the Beginning",
    emoji: "🔄",
    tagline: "Read your earliest entries with the eyes you have now.",
    body: "Today you go back to the beginning. If you kept notes, journals, or memories from the first week of this program, revisit them. Notice how you spoke about your marriage then. Notice what worried you. Notice what you hoped for. The distance between who you were on Day 1 and who you are on Day 339 is the measure of your growth. Honor it.",
    duration: "25 min",
    prompts: [
      "What was your marriage like on Day 1 of this program?",
      "What were you most afraid of at the beginning?",
      "What has changed the most — in your marriage, and in you as a partner?",
      "Write a message to your Day 1 self. What would you tell them?"
    ],
    reflection: "You cannot see the mountain you have climbed while you are climbing it. Today, you turn around — and take in the view."
  },
  {
    id: 796, day: 340, program: 'marriage-strengthening',
    title: "The Communication Mastery You Have Earned",
    emoji: "🗣️",
    tagline: "You do not just talk now. You communicate.",
    body: "Communication was one of the first skills you developed in this program — and it has deepened every day since. Today you assess your communication mastery. You are no longer two people learning to talk. You are two people who have learned to listen, to repair, to be honest, to be kind, and to say the hard thing without destroying the safe thing. That is mastery.",
    duration: "25 min",
    prompts: [
      "How has your communication with your partner changed over this year?",
      "What communication skill are you most proud of developing?",
      "Where does your communication still break down — and what is the pattern?",
      "Have a conversation today using every skill you have built. Be intentional about it."
    ],
    reflection: "Communication mastery is not the ability to say anything. It is the wisdom to know what to say, how to say it, and when silence says it better."
  },
  {
    id: 797, day: 341, program: 'marriage-strengthening',
    title: "The Intimacy You Have Cultivated",
    emoji: "💞",
    tagline: "This is not the intimacy you started with. It is the one you built.",
    body: "The intimacy you share now is not the effortless chemistry of early love. It is something harder-won and more precious — intimacy that has survived conflict, fatigue, disappointment, and time. It is the kind of closeness that can only exist between two people who have done the work of truly knowing each other. Today you celebrate the intimacy you have cultivated, in all its forms.",
    duration: "25 min",
    prompts: [
      "How has your emotional intimacy deepened over this year?",
      "How has your physical intimacy evolved?",
      "What form of intimacy surprised you most — one you did not expect to develop?",
      "Create a moment of deep intimacy today. It does not have to be physical. It has to be real."
    ],
    reflection: "The deepest intimacy is not the kind that makes your heart race. It is the kind that makes your heart rest."
  },
  {
    id: 798, day: 342, program: 'marriage-strengthening',
    title: "The Resilience You Have Proven",
    emoji: "🔩",
    tagline: "You did not just survive this year. You proved what you are made of.",
    body: "Three hundred and forty-two days of daily work. Through busy seasons and quiet ones. Through arguments and breakthroughs. Through days when you did not feel like showing up — and you showed up anyway. That is resilience. Not the motivational-poster kind. The real kind. The kind that is forged in the furnace of daily commitment when no one is watching and no one is clapping.",
    duration: "25 min",
    prompts: [
      "What was the hardest stretch of this program — and how did you get through it?",
      "What did your resilience as a couple teach you about your resilience as individuals?",
      "When did you most want to quit — and what kept you going?",
      "Tell your partner: 'I am proud of us for not giving up. Not once.'"
    ],
    reflection: "Resilience is not the absence of wanting to quit. It is the presence of something worth staying for."
  },
  {
    id: 799, day: 343, program: 'marriage-strengthening',
    title: "The Joy You Have Protected",
    emoji: "🌈",
    tagline: "Joy in marriage is not given. It is guarded.",
    body: "Joy is fragile. It can be stolen by stress, eroded by routine, or buried under the weight of responsibility. But you have learned something this year: joy must be protected with the same ferocity you bring to protecting your family. Today you celebrate the joy you have kept alive — the laughter, the delight, the moments of pure happiness that exist because you refused to let the world take them.",
    duration: "25 min",
    prompts: [
      "What brings you the most joy in your marriage right now?",
      "How have you protected joy this year — even during hard times?",
      "What threatens your joy most, and how do you guard against it?",
      "Do something joyful together today. Not productive. Not meaningful. Just joyful."
    ],
    reflection: "The happiest marriages are not the ones with the fewest problems. They are the ones where joy is treated as sacred — and defended accordingly."
  },
  {
    id: 800, day: 344, program: 'marriage-strengthening',
    title: "The Legacy You Are Building",
    emoji: "🏗️",
    tagline: "You are not just living a marriage. You are building a legacy.",
    body: "Every day of this program has been a brick in a structure that will outlast you. The way you love, the way you fight, the way you forgive, the way you dream — all of it is being watched, absorbed, and inherited by the people around you. Today you name the legacy. Not what you hope it will be. What it already is — based on the evidence of three hundred and forty-four days of intentional love.",
    duration: "25 min",
    prompts: [
      "What legacy is your marriage already creating — whether you intended it or not?",
      "What do you want your children or community to say about your marriage?",
      "What part of your legacy needs more attention before this program ends?",
      "Write one sentence that captures the legacy of your marriage. Read it to each other."
    ],
    reflection: "A legacy is not a speech given at a funeral. It is a life lived so well that the speech writes itself."
  },
  {
    id: 801, day: 345, program: 'marriage-strengthening',
    title: "Revisiting Forgiveness",
    emoji: "🕊️",
    tagline: "The deepest forgiveness is the one you offer without being asked.",
    body: "You have explored forgiveness many times this year. But today you revisit it with the depth that only three hundred and forty-five days can provide. Is there anything left unforgiven? Any residue of resentment that clings to the edges? Today you do a final sweep — not because forgiveness is easy, but because carrying even a grain of bitterness into the final weeks of this journey would dishonor everything you have built.",
    duration: "25 min",
    prompts: [
      "Is there anything — no matter how small — that you have not fully forgiven?",
      "What would it take to release it completely?",
      "How has your capacity for forgiveness grown over this year?",
      "If there is something to release, release it today. Say it out loud. Let it go."
    ],
    reflection: "Forgiveness is not the end of pain. It is the decision to stop letting pain author your story."
  },
  {
    id: 802, day: 346, program: 'marriage-strengthening',
    title: "The Friendship Beneath the Marriage",
    emoji: "🤝",
    tagline: "Before you were spouses, you were friends. Never forget that.",
    body: "Beneath every great marriage is a great friendship — the easy laughter, the genuine interest, the desire to spend time together not out of obligation but out of delight. Today you tend to the friendship. Not the romance. Not the partnership. The friendship. The part of your relationship that says, 'Even if we were not married, I would choose your company.'",
    duration: "25 min",
    prompts: [
      "How strong is the friendship underneath your marriage?",
      "When was the last time you did something together purely as friends — no agenda, no romance?",
      "What do you enjoy about your partner that has nothing to do with marriage?",
      "Spend time together today as friends. Go for a walk. Share a meal. Talk about anything but responsibilities."
    ],
    reflection: "The marriages that last the longest are not the most passionate. They are the ones built on a friendship that never stopped growing."
  },
  {
    id: 803, day: 347, program: 'marriage-strengthening',
    title: "Gratitude as a Daily Discipline",
    emoji: "🌻",
    tagline: "Gratitude is not a feeling. It is a practice that rewires everything.",
    body: "You have practiced gratitude throughout this program. But today you elevate it from a practice to a discipline — something you do not because you feel grateful, but because you know that gratitude reshapes the way you see your partner, your marriage, and your life. The most extraordinary marriages are saturated with gratitude. Not because they are perfect, but because the partners inside them have trained their eyes to see the gold.",
    duration: "25 min",
    prompts: [
      "Name five things about your partner you are grateful for that you rarely mention.",
      "How has gratitude changed the way you experience your marriage?",
      "What would happen if you expressed gratitude to your partner every single day for the rest of your life?",
      "Tell your partner five specific things you are grateful for — right now, out loud."
    ],
    reflection: "Gratitude does not change what you have. It changes what you see. And when you see differently, everything changes."
  },
  {
    id: 804, day: 348, program: 'marriage-strengthening',
    title: "The Seasons of Marriage",
    emoji: "🍂",
    tagline: "Every season serves a purpose. Even winter.",
    body: "Your marriage has moved through seasons this year — spring growth, summer energy, autumn reflection, and the quiet endurance of winter. Today you honor all the seasons, including the hard ones. The season of exhaustion taught you endurance. The season of conflict taught you repair. The season of distance taught you longing. Every season was a teacher — and you were wise enough to stay enrolled.",
    duration: "25 min",
    prompts: [
      "What season is your marriage in right now?",
      "Which season of this year was the hardest — and what did it teach you?",
      "Which season brought the most growth?",
      "How do you prepare for the next season, whatever it may be?"
    ],
    reflection: "The tree does not panic in autumn. It knows that what falls away makes room for what comes next."
  },
  {
    id: 805, day: 349, program: 'marriage-strengthening',
    title: "Your Shared Language",
    emoji: "📖",
    tagline: "Every great couple develops a language that only they speak.",
    body: "Over the course of this year, you have developed a shared language — phrases that carry weight, inside jokes that hold history, shorthand that says in three words what would take a stranger thirty. This language is the living proof of your intimacy. Today you celebrate it, add to it, and recognize it as the private dialect of a love that no one else will ever fully understand.",
    duration: "25 min",
    prompts: [
      "What phrases or words have become part of your private language?",
      "What does your shared language say about the kind of marriage you have built?",
      "Is there a phrase from this program that has entered your daily vocabulary?",
      "Create a new phrase together — something that captures this season of your marriage."
    ],
    reflection: "The most intimate proof of love is not a ring or a vow. It is a language that only two people in the entire world can speak."
  },
  {
    id: 806, day: 350, program: 'marriage-strengthening',
    title: "Protecting What You Have Built",
    emoji: "🛡️",
    tagline: "Building is hard. Protecting what you built is harder.",
    body: "You have built something extraordinary this year. But building is only half the work. The other half is protection — guarding what you have created against the slow erosion of neglect, distraction, and complacency. Today you identify the threats to your marriage and build a protection plan. Not out of fear, but out of reverence for what you have spent three hundred and fifty days building.",
    duration: "25 min",
    prompts: [
      "What is the greatest threat to your marriage in the next year?",
      "What safeguard can you put in place to protect against it?",
      "How will you ensure that the habits you built this year do not fade?",
      "Together, write a 'protection covenant' — three things you will always do to guard this marriage."
    ],
    reflection: "A castle without a guard is just a ruin in waiting. Protect what you have built. It cost you too much to lose."
  },
  {
    id: 807, day: 351, program: 'marriage-strengthening',
    title: "The Mentors and Models",
    emoji: "🌳",
    tagline: "No great marriage is built in isolation. Honor those who showed you the way.",
    body: "Behind every strong marriage are the mentors, models, and examples who showed you what was possible. A grandparent who stayed. A friend who fought for their marriage. A couple who loved imperfectly but persistently. Today you name the people who shaped your understanding of marriage — and you honor them by continuing what they started.",
    duration: "25 min",
    prompts: [
      "Who modeled healthy marriage for you — and what did they teach you?",
      "Whose marriage warned you about what to avoid?",
      "Have you thanked anyone for the role they played in shaping your marriage?",
      "If there is someone to thank, reach out today. If they are gone, write them a letter anyway."
    ],
    reflection: "You are the sum of every marriage you ever witnessed. Choose carefully which ones you carry forward."
  },
  {
    id: 808, day: 352, program: 'marriage-strengthening',
    title: "The Power of Rituals",
    emoji: "🕯️",
    tagline: "Rituals are the heartbeat of a marriage that refuses to be ordinary.",
    body: "Rituals transform routine into meaning. The morning coffee made a certain way. The Sunday walk. The annual trip. The way you always say goodnight. These are not habits — they are rituals, and they hold your marriage together in ways that words alone cannot. Today you evaluate your rituals and ensure they are alive, intentional, and worthy of the marriage you have built.",
    duration: "25 min",
    prompts: [
      "What rituals define your marriage right now?",
      "Which rituals have faded and need to be revived?",
      "What new ritual could you create to mark this season of growth?",
      "Perform one ritual together tonight — with full presence and intention."
    ],
    reflection: "A marriage without rituals is a house without walls. The love may be real, but it has nothing to hold it in place."
  },
  {
    id: 809, day: 353, program: 'marriage-strengthening',
    title: "The Quiet Strength of Commitment",
    emoji: "💍",
    tagline: "Commitment is not a cage. It is the soil in which freedom grows.",
    body: "In a world that celebrates options, your commitment to one person for one year of daily work is countercultural. It is also the most powerful thing you have done. Commitment is not glamorous. It does not trend. It does not go viral. But it is the quiet force that held your marriage together on the days when love was not a feeling — it was a decision. Today you honor the power of that decision.",
    duration: "25 min",
    prompts: [
      "What does commitment mean to you now, compared to when you started?",
      "When was commitment hardest this year — and what did it teach you?",
      "How has the security of your commitment allowed you to take risks in your marriage?",
      "Reaffirm your commitment today — in your own words, looking into your partner's eyes."
    ],
    reflection: "The oak does not question whether to stay rooted. It simply grows — deeper, wider, stronger. That is commitment."
  },
  {
    id: 810, day: 354, program: 'marriage-strengthening',
    title: "What Your Marriage Has Survived",
    emoji: "⚓",
    tagline: "Look at what tried to break you. Look at you — still standing.",
    body: "Today you take an honest inventory of everything your marriage has survived — not just this year, but across its entire lifetime. The losses. The moves. The financial stress. The parenting challenges. The seasons of disconnection. The moments when the world pressed in and your marriage absorbed the blow. You are still here. That is not luck. That is the result of two people who refused to let go.",
    duration: "25 min",
    prompts: [
      "What is the hardest thing your marriage has ever survived?",
      "How did surviving it change you as a couple?",
      "What strength did you discover in each other through adversity?",
      "Hold each other and say: 'We survived it all. And we are stronger for it.'"
    ],
    reflection: "A ship in harbor is safe. But that is not what ships are for. Your marriage was built for open water — and it has sailed through storms that would have sunk lesser vessels."
  },
  {
    id: 811, day: 355, program: 'marriage-strengthening',
    title: "The Gift You Give Each Other",
    emoji: "🎁",
    tagline: "The greatest gift is not what you give. It is who you become for each other.",
    body: "Today you name the gift you are to each other. Not what you do. Who you are. The calm in the storm. The laughter in the silence. The hand in the dark. The voice that says, 'I believe in you' when no one else does. Your partner is a gift — one you chose, unwrapped, and have been discovering for years. Today you say it out loud.",
    duration: "25 min",
    prompts: [
      "What gift does your partner bring to your life that no one else could?",
      "How have you grown as a person because of who your partner is?",
      "What do you offer your partner that you are most proud of?",
      "Write a short note describing the gift your partner is to you. Read it aloud."
    ],
    reflection: "The greatest marriages are built by two people who see each other clearly — flaws and all — and still whisper, 'What a gift you are.'"
  },
  {
    id: 812, day: 356, program: 'marriage-strengthening',
    title: "The Wisdom You Now Carry",
    emoji: "📿",
    tagline: "You entered this year with hope. You leave it with wisdom.",
    body: "Three hundred and fifty-six days ago, you began with hope and intention. Today you carry something deeper: wisdom. The wisdom of knowing that love is a verb. That conflict is not the enemy. That vulnerability is the price of intimacy. That forgiveness is the oxygen of marriage. That showing up on the hard days is worth more than any grand gesture. This wisdom is now yours — earned, not inherited.",
    duration: "25 min",
    prompts: [
      "What is the single wisest thing you now know about marriage?",
      "How would you advise a newly married couple based on what you have learned?",
      "What wisdom from this year do you most need to remember in the years ahead?",
      "Share your deepest piece of marriage wisdom with your partner."
    ],
    reflection: "Wisdom is not knowing the answers. It is having lived the questions long enough that your life becomes the answer."
  },
  {
    id: 813, day: 357, program: 'marriage-strengthening',
    title: "The Year in Review",
    emoji: "📅",
    tagline: "Three hundred and fifty-seven days. One marriage. Infinite growth.",
    body: "Today you look back across the full arc of this year — from the earliest days of communication basics to the depths of spiritual intimacy, from fair fighting to radical forgiveness, from surviving to thriving. This is your year in review. Not a test. Not a grade. A celebration. You did something that most couples never attempt. You showed up, daily, for an entire year. That deserves to be honored.",
    duration: "30 min",
    prompts: [
      "What phase of this program was most transformative for your marriage?",
      "What was your greatest breakthrough as a couple?",
      "What moment are you most proud of?",
      "Tell your partner: 'Thank you for every single day of this year.'"
    ],
    reflection: "A year is a long time to do anything daily. A year of daily love is a monument. Stand back and look at what you built."
  },
  {
    id: 814, day: 358, program: 'marriage-strengthening',
    title: "The Integration Ceremony",
    emoji: "🏆",
    tagline: "Gather everything you have learned. Carry it forward as one.",
    body: "Today you perform a symbolic integration — a ceremony of your own design. You take everything this year has taught you and you name it, claim it, and commit to carrying it forward. This is not a graduation. It is a coronation. You have earned the right to call your marriage extraordinary — not because it is perfect, but because you refused to stop building it.",
    duration: "30 min",
    prompts: [
      "If you could distill this entire year into three principles, what would they be?",
      "How will you carry these principles into the next year and beyond?",
      "Design a small ceremony or ritual to mark this moment of integration.",
      "Perform the ceremony together. Let it be simple, honest, and sacred to you."
    ],
    reflection: "Integration is not the end of learning. It is the moment when learning becomes identity — when what you practiced becomes who you are."
  },
  {
    id: 815, day: 359, program: 'marriage-strengthening',
    title: "A Letter to Your Marriage",
    emoji: "💌",
    tagline: "Write to the living thing between you. It deserves a letter.",
    body: "Your marriage is not just a legal status. It is a living entity — the third presence in every room you share. It has moods, seasons, needs, and a personality all its own. Today you write a letter to your marriage itself. Thank it. Challenge it. Tell it what it has survived and what you dream for its future. This letter is for the thing you have both been building — the invisible masterpiece between you.",
    duration: "30 min",
    prompts: [
      "If your marriage were a person, what would you say to it right now?",
      "What has your marriage given you that you could never have found alone?",
      "What do you want for your marriage in the year ahead?",
      "Write the letter. Read it to each other. Let the words land."
    ],
    reflection: "Your marriage is alive. It breathes when you breathe into it. It grows when you tend it. Speak to it today — it has been listening all year."
  },
  {
    id: 816, day: 360, program: 'marriage-strengthening',
    title: "What You Know Now",
    emoji: "🌅",
    tagline: "You know things now that you could not have known before this year.",
    body: "There are truths about love, marriage, and yourself that simply could not be understood before you lived them. They had to be earned through three hundred and sixty days of presence, effort, and surrender. Today you sit with what you know now — the hard-won truths that have been forged in the daily fire of showing up. These are not opinions. They are the bedrock of your marriage going forward.",
    duration: "25 min",
    prompts: [
      "What do you know about love now that you did not know a year ago?",
      "What do you know about yourself as a partner that surprised you?",
      "What do you know about your spouse that deepened over this year?",
      "Write down your three most important truths. Keep them somewhere you will see them."
    ],
    reflection: "The deepest truths are not learned in a classroom. They are learned in the daily act of loving someone imperfect — and discovering you are imperfect too."
  },
  {
    id: 817, day: 361, program: 'marriage-strengthening',
    title: "What You Will Carry Forward",
    emoji: "🎒",
    tagline: "You cannot take everything. Choose what matters most.",
    body: "A year of daily missions has given you hundreds of tools, insights, and practices. But you will not carry them all. Today you choose — deliberately and wisely — what you will take with you into the next season of your marriage. The habits that changed you. The conversations that healed you. The practices that connected you. Pack light, but pack well. What you choose to carry forward is what will define the next chapter.",
    duration: "25 min",
    prompts: [
      "What three habits from this program will you commit to continuing?",
      "What conversation practice has been most valuable to your marriage?",
      "What will you intentionally let go of — a pattern that no longer serves you?",
      "Write your 'carry forward' list together. Post it where you will see it daily."
    ],
    reflection: "The traveler who packs everything carries nothing well. Choose wisely. Carry deeply. And trust that what you need will always be enough."
  },
  {
    id: 818, day: 362, program: 'marriage-strengthening',
    title: "Your Commitment for the Next Year",
    emoji: "📝",
    tagline: "This ending is a beginning disguised as a finish line.",
    body: "Tomorrow is not the end. It is a transition. And transitions require intention. Today you write your commitment for the next year — not a resolution, but a covenant between two people who have proven they can show up daily. What will you protect? What will you build? What will you never go back to? This is your north star for the year ahead.",
    duration: "30 min",
    prompts: [
      "What is your number one commitment to your marriage for the next twelve months?",
      "What boundary will you protect to honor that commitment?",
      "What does your partner need from you most in the year ahead?",
      "Write your commitments to each other. Sign them. Date them. Keep them sacred."
    ],
    reflection: "A commitment written is a commitment witnessed — by yourself, by your partner, and by the future you are building together."
  },
  {
    id: 819, day: 363, program: 'marriage-strengthening',
    title: "Gratitude for the Journey",
    emoji: "🙏",
    tagline: "Before the final steps, pause. Look back. And give thanks.",
    body: "You are two days from completing a full year of daily marriage work. That is extraordinary. Today is not for lessons or strategies. It is for gratitude — deep, overwhelming, tearful gratitude. For your partner, who walked every step. For yourself, for not giving up. For the marriage that held you both when the world tried to pull you apart. Today you simply say thank you.",
    duration: "25 min",
    prompts: [
      "What are you most grateful for in this entire journey?",
      "How has gratitude itself changed your marriage?",
      "What moment from this year fills you with the deepest thankfulness?",
      "Hold your partner. Say nothing for a full minute. Then say: 'Thank you for every single day.'"
    ],
    reflection: "Gratitude is the final language of love. When all the words run out, thank you is always enough."
  },
  {
    id: 820, day: 364, program: 'marriage-strengthening',
    title: "The Vow Renewed",
    emoji: "💍",
    tagline: "You said vows once. Now you say them knowing what they cost.",
    body: "On your wedding day, you spoke vows filled with hope and innocence. You did not yet know what those words would cost. Now you do. You know the weight of 'for better or for worse.' You know the price of 'in sickness and in health.' You know what it means to forsake all others — not just people, but comfort, ego, and the temptation to quit. Today you renew your vows. Not with the innocence of the beginning, but with the wisdom of three hundred and sixty-four days of proof.",
    duration: "30 min",
    prompts: [
      "Write new vows — not the ones you said at your wedding, but the ones you would say now.",
      "What promise can you make today that you could not have made a year ago?",
      "Read your renewed vows to each other. Let them be imperfect and honest.",
      "Seal your vows with a gesture that is meaningful to you — a kiss, a ring exchange, a candle lit, a prayer spoken."
    ],
    reflection: "The first vow was a promise made in hope. This vow is a promise made in proof. You know exactly what it costs — and you choose it anyway."
  },
  {
    id: 821, day: 365, program: 'marriage-strengthening',
    title: "Day 365 — The Marriage That Chose Greatness",
    emoji: "👑",
    tagline: "Three hundred and sixty-five days. One marriage. One extraordinary choice — made again and again and again.",
    body: "This is the final day. Not because your marriage is finished, but because you have completed something that will echo through every year that follows. For three hundred and sixty-five days, you chose each other. Not once, in a ceremony surrounded by flowers and applause — but daily, in the quiet crucible of real life, where love is not a feeling but a verb conjugated in the first person, present tense, every single morning. You have wept together, laughed together, fought and forgiven, broken and rebuilt, spoken the unspeakable and held the unholdable. You have done what most couples only dream of — you have taken your marriage apart, examined every beam and foundation stone, and put it back together stronger, deeper, and more beautiful than before. Today you do not simply finish a program. You stand at the summit of a year-long climb and look out at the life you have built — not perfect, but extraordinary. Not because it was easy, but because you refused to settle for anything less than a marriage worthy of the two people inside it.",
    duration: "60 min",
    prompts: [
      "Each of you: write a final letter to your partner. Pour into it everything this year has meant — the gratitude, the growth, the moments that changed you. Hold nothing back.",
      "Read your letters aloud to each other. Take your time. Let the tears come. Let the silence between sentences hold the weight of what words cannot carry.",
      "Choose a symbol or ritual to mark this moment — light a candle, exchange a meaningful gift, plant something together, or return to the place where your journey began. Let it be something you will remember for the rest of your lives.",
      "Look into each other's eyes and make one commitment for the year ahead. Not a list. One sacred promise. Speak it aloud. Let it be the first word of your next chapter."
    ],
    reflection: "You did it. Three hundred and sixty-five days of choosing love when it was hard, choosing growth when it was painful, choosing each other when the world offered a thousand easier paths. This is not the end of your story. It is the moment your marriage stopped being something that happened to you — and became something you built, on purpose, with your own hands and your whole hearts. Go now. Not as the couple you were. As the couple you have become. The world needs marriages like yours. Go show them what it looks like when two people choose greatness — and never, ever stop."
  },
]

export const getProgramMissions = (program: string) =>
  MISSIONS.filter(m => m.program === program)

export const getMissionById = (id: number) =>
  MISSIONS.find(m => m.id === id)
