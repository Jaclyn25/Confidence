// =========================================================================
// SLIDES DATASET (21 Slides: English Content + English Speaker Notes + Real Photos)
// =========================================================================
const slidesData = [
  {
    id: 1,
    title: "The Psychology of Self-Confidence",
    subtitle: "How Personality, Habits, and Mindset Shape Success",
    type: "cover",
    presenter: "Jacqueline Saad Mikhail",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800", // Sunset peak/freedom
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Welcome everyone. Today we are going to explore a subject that deeply impacts both our personal and professional lives: <strong>"The Psychology of Self-Confidence"</strong>.</p>
      <p>We will examine how our unique personalities, daily habits, and underlying mindsets work together to shape our level of confidence, ultimately determining our success in life. Let's begin.</p>
    `
  },
  {
    id: 2,
    title: "Introduction",
    type: "intro",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", // Mindfulness/serene landscape
    quote: "Self-confidence is one of the most important factors that influence our lives. It affects the way we think, communicate, make decisions, and deal with challenges. Many people believe that confidence is something people are born with, but psychology suggests that confidence can be developed through experiences, habits, and continuous learning.",
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p class="highlight">"People often assume confident individuals were born that way, but the truth is that confidence is a skill built over time."</p>
      <p>Confidence is not hardcoded into our genetics. Much like driving or playing an instrument, it is a skill we learn, refine, and reinforce through persistent practice and hands-on experiences.</p>
    `
  },
  {
    id: 3,
    title: "What is Self-Confidence?",
    subtitle: "Understanding the Core Pillars",
    type: "grid",
    description: "Self-confidence is the belief in one's abilities and judgment. It allows individuals to take action, face challenges, and pursue goals despite uncertainty.",
    items: [
      { title: "Positive Self-Image", desc: "A realistic and constructive view of oneself.", icon: "fa-face-smile" },
      { title: "Decision Making", desc: "Trusting your judgment to make choices.", icon: "fa-gavel" },
      { title: "Emotional Stability", desc: "Remaining calm and composed under pressure.", icon: "fa-heart" },
      { title: "Resilience", desc: "Bouncing back stronger from setbacks.", icon: "fa-shield-halved" }
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Self-confidence is the fundamental trust in your capability to succeed and make decisions, even when faced with doubts. A truly confident person exhibits:</p>
      <ul>
        <li><strong>A Positive Self-Image:</strong> They value and respect themselves as they are.</li>
        <li><strong>Decision-Making Ability:</strong> They avoid chronic second-guessing and take ownership of their choices.</li>
        <li><strong>Emotional Stability:</strong> They stay centered during stressful events.</li>
        <li><strong>Resilience:</strong> When they fall, they pick themselves up stronger than before.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "The Science Behind Confidence",
    subtitle: "Experience & Neurological Rewiring",
    type: "science",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800", // Focused professional
    points: [
      "Confidence is linked to experience and repeated success.",
      "The brain learns from achievements and challenges.",
      "Positive experiences strengthen self-belief.",
      "Confidence grows through action, not waiting."
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>To understand confidence scientifically, we look at the brain's neuroplasticity. When you take <strong>real action</strong> and achieve even a tiny win, your brain releases dopamine, reinforcing the feeling of capability.</p>
      <p>The brain wires itself to expect success based on these small wins. Therefore, confidence isn't built by sitting and waiting; it is forged by <strong>taking action</strong>, which physically rewires neural pathways.</p>
    `
  },
  {
    id: 5,
    title: "Confidence vs Arrogance",
    subtitle: "Drawing the Fine Line",
    type: "comparison",
    col1Title: "Confidence",
    col1Icon: "fa-circle-check",
    col1Class: "positive",
    col1Items: [
      "Believing in yourself while respecting others.",
      "Always continuous learning, open to feedback.",
      "Acknowledges mistakes and adapts.",
      "Wants to lift others up and collaborate."
    ],
    col2Title: "Arrogance",
    col2Icon: "fa-circle-xmark",
    col2Class: "negative",
    col2Items: [
      "Believing you are superior to others.",
      "Believing you already know everything.",
      "Rejects feedback and blames external factors.",
      "Wants to look superior by putting others down."
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Many confuse confidence with arrogance, but the difference is profound:</p>
      <p><strong>A Confident Person:</strong> Appreciates their own worth while fully respecting others. They are secure enough to ask questions and learn because they don't feel threatened by not knowing everything.</p>
      <p><strong>An Arrogant Person:</strong> Feeds on a superiority complex to mask internal insecurities. They reject feedback and put others down to maintain an illusion of perfection.</p>
    `
  },
  {
    id: 6,
    title: "How Personality Is Formed",
    subtitle: "The Five Core Pillars of Identity",
    type: "factors",
    factors: [
      { name: "Family Environment", icon: "fa-house-chimney" },
      { name: "Childhood Experiences", icon: "fa-child" },
      { name: "Education", icon: "fa-graduation-cap" },
      { name: "Social Interactions", icon: "fa-users" },
      { name: "Personal Habits", icon: "fa-dumbbell" }
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Personality acts as the vessel carrying our self-confidence. It is shaped gradually by several overlapping forces:</p>
      <ul>
        <li>Family environments and the primary support we receive as children.</li>
        <li>Childhood milestones, both positive reinforcements and setbacks.</li>
        <li>Schools and educators who mentored us.</li>
        <li>Social peer networks and cultural backgrounds.</li>
        <li>And lastly, our repeated daily habits.</li>
      </ul>
    `
  },
  {
    id: 7,
    title: "Why People Lose Confidence",
    subtitle: "The Barriers to Self-Belief",
    type: "grid",
    description: "Several factors can weaken self-confidence. Over time, these factors create self-doubt and reduce motivation.",
    items: [
      { title: "Fear of Failure", desc: "Avoiding risks to protect oneself from embarrassment.", icon: "fa-triangle-exclamation" },
      { title: "Negative Criticism", desc: "Internalizing harsh words from parents, peers, or bosses.", icon: "fa-comment-slash" },
      { title: "Constant Comparison", desc: "Comparing your weaknesses with others' curated highlights.", icon: "fa-scale-unbalanced" },
      { title: "Past Experiences", desc: "Allowing a past mistake to define your future competence.", icon: "fa-clock-rotate-left" }
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Losing confidence is rarely a single event; it is a slow accumulation of factors:</p>
      <p>Fear of failure keeps us from taking new opportunities. Harsh, constructive-less criticism breaks our momentum.</p>
      <p>Social media feeds lock us in comparison traps, and past negative experiences are allowed to act as predictions of future failures.</p>
    `
  },
  {
    id: 8,
    title: "Social Media and Self-Confidence",
    subtitle: "The Illusion of Perfect Lives",
    type: "social-media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800", // Phone showing media feeds
    points: [
      "Social media feeds display highly curated, unrealistic success.",
      "Constant upward comparison triggers feelings of inadequacy.",
      "Filters and edited content establish unattainable false standards.",
      "Mindful and restricted usage protects mental well-being."
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>A highly relevant modern challenge is social media. These platforms showcase curated 'highlight reels' of perfect lifestyles, successful milestones, and filtered realities.</p>
      <p>Comparing your ordinary daily struggles with another person's polished, edited highlight reel breeds a false sense of inadequacy. Limiting screen time and recognizing that these feeds don't represent the full truth is critical to protecting self-esteem.</p>
    `
  },
  {
    id: 9,
    title: "The Impact of Self-Talk",
    subtitle: "Our Internal Dialogue",
    type: "talk",
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Your inner voice is the most dominant voice you hear all day. The way you talk to yourself directly establishes what you believe you can achieve.</p>
      <p>If your internal dialogue is continuously negative—thinking 'I will fail, I'm not ready'—your brain accepts it as fact and retreats.</p>
      <p>By shifting to constructive self-talk—'I am learning, I will give it a try'—performance, mood, and problem-solving capabilities immediately improve.</p>
    `
  },
  {
    id: 10,
    title: "Body Language and Confidence",
    subtitle: "The Feedback Loop of Presence",
    type: "body-language",
    imgLow: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600", // Stressed/defensive posture
    imgHigh: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600", // Confident smiling posture
    pointsLow: [
      "Slouched shoulders & head down",
      "Avoided eye contact with audience",
      "Soft, quiet or hesitant voice",
      "Closed arms (Defensive posture)"
    ],
    pointsHigh: [
      "Straight spine & relaxed shoulders",
      "Direct & confident eye contact",
      "Clear, audible & calm voice tone",
      "Open body language & gestures"
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Body language doesn't just communicate your state to others; it communicates with your own brain. Research shows that standing in a high-power pose (shoulders back, straight spine, direct eye contact) actively reduces cortisol and boosts confidence hormones.</p>
      <p>By adjusting your posture, you can physically influence your emotional state, triggering real confidence from the outside in.</p>
    `
  },
  {
    id: 11,
    title: "Fixed Mindset vs Growth Mindset",
    subtitle: "Based on the Book 'Mindset' by Carol S. Dweck",
    type: "comparison",
    col1Title: "Fixed Mindset",
    col1Icon: "fa-lock",
    col1Class: "negative",
    col1Items: [
      "Avoids challenges to feel safe.",
      "Fears failure as proof of lack of talent.",
      "Gives up easily at the first obstacle.",
      "Threatened by the success of others."
    ],
    col2Title: "Growth Mindset",
    col2Icon: "fa-unlock-keyhole",
    col2Class: "positive",
    col2Items: [
      "Sees challenges as opportunities to grow.",
      "Learns from mistakes and values feedback.",
      "Persists and puts in effort to improve.",
      "Finds inspiration in others' success."
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>In her book <strong>Mindset</strong>, Carol Dweck explains a powerful difference in outlook:</p>
      <p><strong>Fixed Mindset Individuals:</strong> Believe intelligence and talent are static traits. They avoid challenges because they view failure as proof of a lack of ability.</p>
      <p><strong>Growth Mindset Individuals:</strong> View challenges as paths to learning. They realize effort, strategies, and persistence build talent and lasting confidence over time.</p>
    `
  },
  {
    id: 12,
    title: "Small Habits Build Confidence",
    subtitle: "Inspired by James Clear's 'Atomic Habits'",
    type: "habits",
    items: [
      { title: "Reading Daily", desc: "Expanding knowledge base and building mental agility.", icon: "fa-book-open" },
      { title: "Exercising Regularly", desc: "Releasing endorphins and improving physical self-image.", icon: "fa-person-running" },
      { title: "Learning a New Skill", desc: "Fostering competence, which directly feeds into confidence.", icon: "fa-laptop-code" }
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>In <strong>Atomic Habits</strong>, James Clear explains that self-confidence is the byproduct of repeated daily wins, not a sudden morning decision.</p>
      <p>By reading a few pages, exercising, or practicing a new skill daily, you cast small votes for the identity of a capable, growing person. These micro-wins pile up to build deep confidence.</p>
    `
  },
  {
    id: 13,
    title: "The Comfort Zone",
    subtitle: "Where Magic Happens",
    type: "comfort-zone",
    image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&q=80&w=800", // Exploring path/crossing bridge
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>The Comfort Zone is a state where routine keeps stress low, but development remains static.</p>
      <p>Real personal growth occurs outside this safe zone. To mature, we must pass through the <strong>Fear Zone</strong> of vulnerability, master new challenges in the <strong>Learning Zone</strong>, and ultimately settle into the <strong>Growth Zone</strong> to achieve our highest potential.</p>
      <p>Click on each ring in the interactive chart to see their distinct characteristics!</p>
    `
  },
  {
    id: 14,
    title: "Overthinking and Self-Doubt",
    subtitle: "Breaking the Inaction Loop",
    type: "cycle",
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Overthinking is a silent confidence killer. Spending too much time analyzing negative scenarios leads to 'analysis paralysis'.</p>
      <p>This triggers inaction. A lack of action deprives us of the successes that build confidence, keeping us trapped in a self-sabotaging loop. Taking immediate, imperfect action is the only way out.</p>
    `
  },
  {
    id: 15,
    title: "Failure and Success",
    subtitle: "The Iceberg of Achievement",
    type: "iceberg",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800", // Floating realistic iceberg
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Failure is not the opposite of success; it is a necessary component of it. People see only the visible tip of the iceberg—the success, the rewards, the public acclaim.</p>
      <p>But they overlook the massive foundation hidden beneath the waterline: the repeated rejections, the long hours of work, the failures, and the resilience. True confidence is what keeps you diving deep to build that foundation.</p>
    `
  },
  {
    id: 16,
    title: "Real-Life Examples of Persistence",
    subtitle: "Stories of Unwavering Self-Belief",
    type: "stories",
    examples: [
      { author: "J. K. Rowling", role: "Author of Harry Potter", quote: "Had her manuscript rejected by 12 publishers while living in poverty. Her unwavering belief in her story kept her going until it became a global phenomenon.", initials: "JR", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600" }, // Writer's notebook
      { author: "Thomas Edison", role: "Inventor of the Light Bulb", quote: "Failed thousands of times before creating the light bulb. He famously stated: 'I have not failed. I've just found 10,000 ways that won't work.'", initials: "TE", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600" } // Workspace/bulbs
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>To see how persistence pays off, look at these two historic examples:</p>
      <ul>
        <li><strong>J.K. Rowling:</strong> Her Harry Potter draft was rejected 12 times while she struggled financially. Her trust in her writing kept her pitching until it succeeded.</li>
        <li><strong>Thomas Edison:</strong> He tested thousands of filaments before finding the light bulb solution. He didn't see failures; he saw eliminated errors. This is the epitome of growth mindset confidence.</li>
      </ul>
    `
  },
  {
    id: 17,
    title: "Confidence in Academic Life",
    subtitle: "Real-World Student Scenarios",
    type: "academic-life",
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800", // University lecture hall
    items: [
      { title: "Classroom Engagement", desc: "Asking questions and contributing to class discussions helps desensitize the fear of speaking.", icon: "fa-comments" },
      { title: "Project Presentations", desc: "Presenting in front of peers builds essential communication skills and academic authority.", icon: "fa-display" },
      { title: "Academic Discussions", desc: "Participating in group debates teaches how to express and defend ideas constructively.", icon: "fa-users-rectangle" },
      { title: "Internships & Career", desc: "Taking the leap to apply for jobs and internships tests and refines your competence.", icon: "fa-briefcase" }
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>How do we apply this at university? The academic environment is the perfect laboratory to practice speaking up and making mistakes:</p>
      <p>Engage in lectures, ask questions, present projects in front of classmates, participate in student debates, and apply for internships. These activities test and refine your real-world capabilities.</p>
    `
  },
  {
    id: 18,
    title: "Practical Strategies to Build Confidence",
    subtitle: "Actionable Steps for Personal Growth",
    type: "strategies",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600", // Checklist book
    strategies: [
      { title: "Set Achievable Goals", desc: "Start with micro-goals. Achieving small successes builds positive momentum and rewires your brain to expect wins." },
      { title: "Develop New Skills", desc: "Choose a skill (coding, public speaking, drawing) and practice. Competence directly fosters confidence." },
      { title: "Practice Public Speaking", desc: "Speak up in meetings or classes. The more you put yourself in public settings, the more comfortable you become." },
      { title: "Maintain Healthy Habits", desc: "Exercise, proper sleep, and balanced nutrition influence brain chemistry, improving self-image and energy levels." },
      { title: "Focus on Progress", desc: "Stop comparing yourself with others or demanding perfection. Focus on being better than you were yesterday." }
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>How do we put this into practice starting today? Here are five actionable strategies:</p>
      <p>Set small targets first to build a habit of winning. Learn new skills. Speak in public despite the fear. Maintain your sleep and physical health to optimize brain chemistry. And finally, stop chasing perfection—focus purely on daily incremental progress.</p>
    `
  },
  {
    id: 19,
    title: "Key Lessons",
    subtitle: "Summary of Insights",
    type: "lessons",
    items: [
      "Confidence is developed, not inherited.",
      "Failure is a learning opportunity, not a dead end.",
      "Small habits create lasting identity changes.",
      "Growth begins outside the comfort zone.",
      "Positive self-talk supports psychological strength."
    ],
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Let's summarize the five key insights we covered today:</p>
      <p>1. Confidence is a developed skill, not a genetic trait.</p>
      <p>2. Failure is feedback, and our greatest teacher.</p>
      <p>3. Small, daily habits shape our lasting identity.</p>
      <p>4. Growth only begins when we leave our comfort zone.</p>
      <p>5. The way we speak to ourselves defines our boundaries.</p>
    `
  },
  {
    id: 20,
    title: "Conclusion",
    type: "conclusion",
    text: "Self-confidence is not a gift that only a few people possess. It is a skill that can be developed through effort, learning, and experience. Every person has the ability to build confidence and improve their personality over time.",
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>In conclusion, self-confidence is not a gift reserved for a selected few. It is a journey built step-by-step through learning, effort, and experience.</p>
      <p>Every person in this room possesses the ability to build confidence and develop their character over time. The choice to take that first step starts with you today.</p>
    `
  },
  {
    id: 21,
    title: "Thank You",
    subtitle: "Any Questions?",
    type: "thank-you",
    speakerNotes: `
      <p><strong>What to say:</strong></p>
      <p>Thank you very much for your time and active listening.</p>
      <p>I would now like to open the floor to any questions, thoughts, or personal stories you would like to share about self-confidence.</p>
    `
  }
];

// =========================================================================
// PRESENTATION ENGINE STATE
// =========================================================================
let currentSlideIndex = 0;
let autoplayInterval = null;
let autoplayActive = false;
const autoplayDuration = 8000; // 8 seconds per slide

// Presenter stopwatch timer variables
let timerSeconds = 0;
let timerInterval = null;
let timerPaused = false;

// Active comfort zone state
let activeZoneKey = 'comfort';
const zonesDetailData = {
  comfort: {
    title: "Comfort Zone",
    points: [
      "Here, you feel safe, secure, and fully in control.",
      "Very low stress and anxiety, but absolutely zero progress or learning happens.",
      "People get trapped here due to routine and fear of the unknown."
    ]
  },
  fear: {
    title: "Fear Zone",
    points: [
      "Characterized by high anxiety, self-doubt, and lack of self-confidence.",
      "We find ourselves heavily affected by the opinions and judgments of others.",
      "Many make excuses to retreat back to the comfort zone."
    ]
  },
  learning: {
    title: "Learning Zone",
    points: [
      "You deal with challenges, solve problems, and acquire new skills.",
      "The comfort zone begins to stretch and expand.",
      "Fear transforms into curiosity and competence."
    ]
  },
  growth: {
    title: "Growth Zone",
    points: [
      "You discover your true purpose and set new ambitious goals.",
      "Dreams are translated into action plans.",
      "High level of resilience and solid, stable self-confidence."
    ]
  }
};

// Active Strategy Details state
let activeStrategyIndex = 0;

// =========================================================================
// DOM ELEMENTS
// =========================================================================
const container = document.getElementById("active-slide-container");
const sidebarList = document.getElementById("slide-list-items");
const btnSidebar = document.getElementById("btn-sidebar");
const btnCloseSidebar = document.getElementById("btn-close-sidebar");
const sidebar = document.getElementById("slides-sidebar");
const btnPresenter = document.getElementById("btn-presenter");
const presenterConsole = document.getElementById("presenter-console");
const btnAutoplay = document.getElementById("btn-autoplay");
const btnPptx = document.getElementById("btn-pptx");
const btnFullscreen = document.getElementById("btn-fullscreen");
const currentIndexNum = document.getElementById("current-index-num");
const totalSlidesNum = document.getElementById("total-slides-num");
const progressIndicator = document.getElementById("progress-indicator");
const navPrev = document.getElementById("nav-prev");
const navNext = document.getElementById("nav-next");

// Presenter console elements
const timerDisplay = document.getElementById("timer-display");
const btnTimerReset = document.getElementById("btn-timer-reset");
const btnTimerToggle = document.getElementById("btn-timer-toggle");
const nextSlidePreviewBox = document.getElementById("next-slide-preview-box");
const notesContentBox = document.getElementById("notes-content-box");

// =========================================================================
// CORE RENDER LOGIC WITH SMOOTH TRANSITION TIMING
// =========================================================================
function renderSlide(index) {
  const slide = slidesData[index];
  
  // Find current active slide wrapper if present, to animate exit
  const currentWrapper = container.querySelector(".slide-layout-wrapper");
  
  if (currentWrapper) {
    // Add slide-exit trigger
    currentWrapper.classList.add("slide-exit-active");
    
    // Wait for exit animation to complete, then construct new content
    setTimeout(() => {
      buildAndRender(slide, index);
    }, 280);
  } else {
    // Immediate build on initial load
    buildAndRender(slide, index);
  }
}

function buildAndRender(slide, index) {
  let htmlContent = "";

  switch (slide.type) {
    case "cover":
      htmlContent = `
        <div class="slide-layout-wrapper cover-slide-split">
          <div class="split-image-container" style="background-image: url('${slide.image}')"></div>
          <div class="split-text-container">
            <div class="cover-topic">Interactive Presentation</div>
            <h1 class="slide-title" style="font-size: 2.5rem; line-height: 1.2;">${slide.title}</h1>
            <p class="slide-body" style="font-size: 1rem; margin-bottom: 2rem;">${slide.subtitle}</p>
            <div class="cover-author"><i class="fa-solid fa-user-tie"></i> <span>Presented by: <strong>${slide.presenter}</strong></span></div>
          </div>
        </div>
      `;
      break;

    case "intro":
      htmlContent = `
        <div class="slide-layout-wrapper intro-slide-split">
          <div class="split-text-container">
            <h2 class="slide-subtitle">${slide.title}</h2>
            <div class="quote-container" style="margin-bottom: 1.5rem;">
              <p class="quote-text" style="font-size: 1.1rem; line-height: 1.5;">"${slide.quote}"</p>
            </div>
            <div class="skill-bar-visual">
              <div class="skill-bar-label">
                <span>Born With Confidence (Myth)</span>
                <span>Built Over Time (Reality)</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" id="intro-bar-fill"></div>
              </div>
            </div>
          </div>
          <div class="split-image-container" style="background-image: url('${slide.image}'); border-radius: 12px;"></div>
        </div>
      `;
      break;

    case "grid":
      let cardsHtml = slide.items.map(item => `
        <div class="char-card">
          <div class="card-icon"><i class="fa-solid ${item.icon}"></i></div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc}</p>
        </div>
      `).join('');
      
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
          ${slide.description ? `<p class="slide-body" style="margin-bottom: 1rem;">${slide.description}</p>` : ''}
          <div class="grid-slide-content">
            ${cardsHtml}
          </div>
        </div>
      `;
      break;

    case "science":
      let pointsHtml = slide.points.map(pt => `<li>${pt}</li>`).join('');
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="science-pathway">
            <div class="science-diagram-with-bg" style="background-image: linear-gradient(rgba(11,15,25,0.85), rgba(11,15,25,0.85)), url('${slide.image}')">
              <div class="science-node"><i class="fa-solid fa-bolt"></i> <span>Take Action</span></div>
              <div class="science-node"><i class="fa-solid fa-award"></i> <span>Achieve Small Win</span></div>
              <div class="science-node"><i class="fa-solid fa-brain"></i> <span>Neural Rewire Loop</span></div>
            </div>
            <div>
              <ul class="slide-bullets">
                ${pointsHtml}
              </ul>
            </div>
          </div>
        </div>
      `;
      break;

    case "comparison":
      let col1ListHtml = slide.col1Items.map(item => `<li>${item}</li>`).join('');
      let col2ListHtml = slide.col2Items.map(item => `<li>${item}</li>`).join('');
      
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
          <div class="comparison-layout">
            <div class="comparison-col ${slide.col1Class}">
              <h3><i class="fa-solid ${slide.col1Icon}"></i> ${slide.col1Title}</h3>
              <ul>${col1ListHtml}</ul>
            </div>
            <div class="comparison-col ${slide.col2Class}">
              <h3><i class="fa-solid ${slide.col2Icon}"></i> ${slide.col2Title}</h3>
              <ul>${col2ListHtml}</ul>
            </div>
          </div>
        </div>
      `;
      break;

    case "factors":
      let factorsHtml = slide.factors.map((f, i) => `
        <div class="factor-card">
          <div class="factor-num">0${i+1}</div>
          <div class="factor-icon"><i class="fa-solid ${f.icon}"></i></div>
          <div class="factor-title">${f.name}</div>
        </div>
      `).join('');
      
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="factor-grid">
            ${factorsHtml}
          </div>
        </div>
      `;
      break;

    case "social-media":
      let socialPointsHtml = slide.points.map(pt => `<li>${pt}</li>`).join('');
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="social-media-layout">
            <div class="phone-mockup-real" style="background-image: url('${slide.image}')">
              <div class="phone-real-overlay">
                <i class="fa-brands fa-instagram"></i> Live feed comparison
              </div>
            </div>
            <div class="comparison-fact-card">
              <h3><i class="fa-solid fa-circle-exclamation"></i> Social Comparison Pitfalls</h3>
              <ul class="slide-bullets" style="margin-top:0.8rem">
                ${socialPointsHtml}
              </ul>
            </div>
          </div>
        </div>
      `;
      break;

    case "talk":
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="talk-layout">
            <div class="talk-column negative">
              <h3><i class="fa-solid fa-face-frown-open"></i> Negative Self-Talk</h3>
              <div class="speech-bubble">"I can't do it. I'm not ready."</div>
              <div class="speech-bubble">"I'm not good enough, they are much smarter."</div>
              <div class="speech-bubble">"If I fail, it will be embarrassing."</div>
            </div>
            <div class="talk-column positive">
              <h3><i class="fa-solid fa-smile-wink"></i> Positive Self-Talk</h3>
              <div class="speech-bubble">"I can improve. I will give it my best try."</div>
              <div class="speech-bubble">"I will learn from this experience."</div>
              <div class="speech-bubble">"Progress is better than perfection."</div>
            </div>
          </div>
        </div>
      `;
      break;

    case "body-language":
      let lowPoints = slide.pointsLow.map(pt => `<li>${pt}</li>`).join('');
      let highPoints = slide.pointsHigh.map(pt => `<li>${pt}</li>`).join('');
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="body-language-layout">
            <div class="posture-card-split low-posture">
              <div class="posture-img-header" style="background-image: url('${slide.imgLow}')"></div>
              <div class="posture-content">
                <h3><i class="fa-solid fa-chevron-down"></i> Defensive Posture</h3>
                <ul>${lowPoints}</ul>
              </div>
            </div>
            <div class="posture-card-split confident-posture">
              <div class="posture-img-header" style="background-image: url('${slide.imgHigh}')"></div>
              <div class="posture-content">
                <h3><i class="fa-solid fa-chevron-up"></i> Confident Posture</h3>
                <ul>${highPoints}</ul>
              </div>
            </div>
          </div>
        </div>
      `;
      break;

    case "comfort-zone":
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="comfort-zone-wrapper-split">
            <div class="comfort-zone-visual-panel">
              <!-- Concentric Circles -->
              <div class="concentric-rings">
                <div class="cz-ring cz-growth" data-zone="growth"></div>
                <div class="cz-ring cz-learning" data-zone="learning"></div>
                <div class="cz-ring cz-fear" data-zone="fear"></div>
                <div class="cz-ring cz-comfort" data-zone="comfort">
                  <span>Comfort Zone</span>
                </div>
              </div>
            </div>
            <!-- Info Display Card -->
            <div class="cz-info-card-split" id="cz-info-card-display" style="background-image: linear-gradient(rgba(13,18,30,0.9), rgba(13,18,30,0.9)), url('${slide.image}')">
              <h3 id="cz-display-title">Comfort Zone</h3>
              <ul id="cz-display-points">
                <li>Here, you feel safe, secure, and fully in control.</li>
                <li>Very low stress and anxiety, but absolutely zero progress or learning happens.</li>
                <li>People get trapped here due to routine and fear of the unknown.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
      break;

    case "habits":
      let habitHtml = slide.items.map((h, i) => `
        <div class="habit-step">
          <div class="habit-icon"><i class="fa-solid ${h.icon}"></i></div>
          <div class="habit-title">${h.title}</div>
          <div class="habit-desc">${h.desc}</div>
        </div>
      `).join('');
      
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="habit-steps">
            ${habitHtml}
          </div>
        </div>
      `;
      break;

    case "cycle":
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="cycle-wrapper">
            <div class="cycle-nodes">
              <div class="cycle-node" style="border-color: var(--crimson-accent); color: #fca5a5;">Overthinking</div>
              <div class="cycle-arrow"><i class="fa-solid fa-arrow-right-long"></i></div>
              <div class="cycle-node" style="border-color: var(--amber-accent); color: #fde047;">Fear & Doubt</div>
              <div class="cycle-arrow"><i class="fa-solid fa-arrow-right-long"></i></div>
              <div class="cycle-node" style="border-color: var(--indigo-accent); color: #a5b4fc;">Inaction</div>
            </div>
            <div style="height: 35px; border-left: 2px dashed var(--text-muted); margin: 0.8rem 0;"></div>
            <div class="cycle-nodes" style="flex-direction: row-reverse;">
              <div class="cycle-node" style="border-color: var(--violet-accent); color: #ddd6fe;">Reduced Confidence</div>
              <div class="cycle-arrow"><i class="fa-solid fa-arrow-left-long"></i></div>
              <div class="cycle-node" style="border-color: var(--crimson-accent); color: #fca5a5;">Fewer Experiences</div>
            </div>
            <div style="margin-top: 2rem; text-align: center; color: var(--text-secondary); font-size: 0.95rem;">
              <i class="fa-solid fa-arrows-spin spinning-icon" style="color: var(--amber-accent);"></i> Action is the only way to break this self-reinforcing circle.
            </div>
          </div>
        </div>
      `;
      break;

    case "iceberg":
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="iceberg-wrapper">
            <div class="iceberg-visual" style="background-image: linear-gradient(rgba(11,15,25,0.7), rgba(11,15,25,0.85)), url('${slide.image}')">
              <div class="waterline"></div>
              <div class="iceberg-part iceberg-visible" style="z-index: 5;">
                <h3 style="color: #60a5fa; text-shadow: 0 0 10px rgba(59, 130, 246, 0.5)">SUCCESS</h3>
                <p style="font-size:0.8rem; color:var(--text-secondary)">What people see & admire</p>
              </div>
              <div class="iceberg-part iceberg-hidden" style="z-index: 5;">
                <div class="iceberg-hidden-item"><i class="fa-solid fa-triangle-exclamation"></i> Failures</div>
                <div class="iceberg-hidden-item"><i class="fa-solid fa-business-time"></i> Hours of Practice</div>
                <div class="iceberg-hidden-item"><i class="fa-solid fa-ban"></i> Rejections</div>
                <div class="iceberg-hidden-item"><i class="fa-solid fa-thumbs-up"></i> Persistence</div>
                <div class="iceberg-hidden-item"><i class="fa-solid fa-graduation-cap"></i> Constant Learning</div>
                <div class="iceberg-hidden-item"><i class="fa-solid fa-heart-crack"></i> Sacrifices</div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;

    case "stories":
      let storiesHtml = slide.examples.map(ex => `
        <div class="story-card-with-img">
          <div class="story-card-image" style="background-image: url('${ex.image}')"></div>
          <div class="story-card-content">
            <div class="story-header" style="margin-bottom: 0.8rem;">
              <div class="story-avatar-placeholder">${ex.initials}</div>
              <div class="story-author-details">
                <h4>${ex.author}</h4>
                <span>${ex.role}</span>
              </div>
            </div>
            <p class="story-body" style="font-size: 0.95rem;">"${ex.quote}"</p>
          </div>
        </div>
      `).join('');
      
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="stories-container">
            ${storiesHtml}
          </div>
        </div>
      `;
      break;

    case "academic-life":
      let acadCards = slide.items.map(item => `
        <div class="academic-card">
          <div class="academic-card-icon"><i class="fa-solid ${item.icon}"></i></div>
          <div class="academic-card-details">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        </div>
      `).join('');
      htmlContent = `
        <div class="slide-layout-wrapper academic-slide-split">
          <div class="split-content-panel">
            <h2 class="slide-title">${slide.title}</h2>
            <p class="slide-subtitle">${slide.subtitle}</p>
            <div class="academic-grid-condensed">
              ${acadCards}
            </div>
          </div>
          <div class="split-image-panel" style="min-height: 500px; background-image: url('${slide.image}'); background-size: cover; background-position: center; border-radius: 0 20px 20px 0;"></div>
        </div>
      `;
      break;

    case "strategies":
      let listItems = slide.strategies.map((st, i) => `
        <div class="strategy-item ${i === activeStrategyIndex ? 'active' : ''}" data-idx="${i}">
          <div class="strategy-checkbox"><i class="fa-solid fa-check"></i></div>
          <div class="strategy-text">${st.title}</div>
        </div>
      `).join('');
      
      let activeDetails = slide.strategies[activeStrategyIndex];

      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="strategies-container-split">
            <div class="strategies-list">
              ${listItems}
            </div>
            <div class="strategy-details-panel-img" id="strategy-details-panel" style="background-image: linear-gradient(rgba(13,18,30,0.9), rgba(13,18,30,0.9)), url('${slide.image}')">
              <h3 class="strategy-details-title">${activeDetails.title}</h3>
              <p class="strategy-details-desc">${activeDetails.desc}</p>
            </div>
          </div>
        </div>
      `;
      break;

    case "lessons":
      let lessonsHtml = slide.items.map((lesson, i) => `
        <div class="lesson-card">
          <div class="lesson-num">0${i+1}</div>
          <div class="lesson-desc">${lesson}</div>
        </div>
      `).join('');
      
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <p class="slide-subtitle">${slide.subtitle}</p>
          <div class="lessons-list">
            ${lessonsHtml}
          </div>
        </div>
      `;
      break;

    case "conclusion":
      htmlContent = `
        <div class="slide-layout-wrapper">
          <h2 class="slide-title">${slide.title}</h2>
          <div class="conclusion-box">
            <p class="conclusion-text">"${slide.text}"</p>
          </div>
        </div>
      `;
      break;

    case "thank-you":
      htmlContent = `
        <div class="slide-layout-wrapper thank-you-wrapper">
          <h1 class="thank-you-title">${slide.title}</h1>
          <p class="thank-you-subtitle">${slide.subtitle}</p>
          <div class="thank-you-card">
            <i class="fa-solid fa-circle-question"></i>
            <span>Any Questions?</span>
          </div>
        </div>
      `;
      break;

    default:
      htmlContent = `<div class="slide-layout-wrapper"><h2>No Template Configured</h2></div>`;
  }

  // Update Main Slide Content
  container.innerHTML = htmlContent;

  // Specific slide visual hooks (animation progress fills)
  if (slide.type === "intro") {
    setTimeout(() => {
      const fillBar = document.getElementById("intro-bar-fill");
      if (fillBar) fillBar.style.width = "100%";
    }, 120);
  }

  // Bind custom interactive events
  bindInteractiveEvents(slide.type);

  // Update indices, progress bar, side-directory highlighting
  currentIndexNum.innerText = index + 1;
  progressIndicator.style.width = `${((index + 1) / slidesData.length) * 100}%`;
  
  // Highlight active item in sidebar list
  document.querySelectorAll("#slide-list-items li").forEach((li, idx) => {
    if (idx === index) li.classList.add("active");
    else li.classList.remove("active");
  });

  // Update Presenter Console Details (Speaker Notes & Preview)
  updatePresenterConsole(index);
}

// Bind custom interactions (Comfort zone selection, strategy clicking)
function bindInteractiveEvents(slideType) {
  if (slideType === "comfort-zone") {
    const rings = document.querySelectorAll(".cz-ring");
    rings.forEach(ring => {
      ring.addEventListener("click", (e) => {
        const zoneKey = e.currentTarget.getAttribute("data-zone");
        if (zoneKey && zonesDetailData[zoneKey]) {
          activeZoneKey = zoneKey;
          
          // Clear active styles from rings and highlight the selected one
          rings.forEach(r => r.style.boxShadow = '');
          const colors = {
            comfort: '0 0 25px rgba(59, 130, 246, 0.65)',
            fear: '0 0 25px rgba(239, 68, 68, 0.65)',
            learning: '0 0 25px rgba(245, 158, 11, 0.65)',
            growth: '0 0 25px rgba(16, 185, 129, 0.65)'
          };
          e.currentTarget.style.boxShadow = colors[zoneKey];

          // Update details panel content
          const displayTitle = document.getElementById("cz-display-title");
          const displayPoints = document.getElementById("cz-display-points");
          
          displayTitle.innerText = zonesDetailData[zoneKey].title;
          displayPoints.innerHTML = zonesDetailData[zoneKey].points.map(pt => `<li>${pt}</li>`).join('');
        }
      });
    });
  }

  if (slideType === "strategies") {
    const items = document.querySelectorAll(".strategy-item");
    items.forEach(item => {
      item.addEventListener("click", (e) => {
        const idx = parseInt(e.currentTarget.getAttribute("data-idx"));
        activeStrategyIndex = idx;
        
        // Toggle active list item classes
        items.forEach(it => it.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        // Update details card
        const activeDetails = slidesData[currentSlideIndex].strategies[idx];
        const detailsTitle = document.getElementById("strategy-details-panel").querySelector(".strategy-details-title");
        const detailsDesc = document.getElementById("strategy-details-panel").querySelector(".strategy-details-desc");
        if (detailsTitle && detailsDesc) {
          detailsTitle.innerText = activeDetails.title;
          detailsDesc.innerText = activeDetails.desc;
        }
      });
    });
  }
}

// Update Presenter Console Details (Speaker Notes & Preview)
function updatePresenterConsole(index) {
  const slide = slidesData[index];
  
  // Update speaker notes content
  notesContentBox.innerHTML = slide.speakerNotes || `<p>No speaker notes available for this slide.</p>`;
  
  // Update next slide preview
  const nextIndex = index + 1;
  if (nextIndex < slidesData.length) {
    const nextSlide = slidesData[nextIndex];
    nextSlidePreviewBox.innerHTML = `
      <div class="preview-card">
        <div class="preview-num">Slide ${nextSlide.id} / ${nextSlide.type.toUpperCase()}</div>
        <div class="preview-title">${nextSlide.title}</div>
      </div>
    `;
  } else {
    nextSlidePreviewBox.innerHTML = `<span class="placeholder">End of Presentation</span>`;
  }
}

// Navigation helpers
function navigateNext() {
  if (currentSlideIndex < slidesData.length - 1) {
    currentSlideIndex++;
    activeStrategyIndex = 0; // Reset strategy selection state
    renderSlide(currentSlideIndex);
  } else if (autoplayActive) {
    toggleAutoplay(); // Stop on last slide
  }
}

// Prev navigation helpers
function navigatePrev() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    activeStrategyIndex = 0; // Reset strategy selection state
    renderSlide(currentSlideIndex);
  }
}

// =========================================================================
// PRESENTATION CONTROLS (Sidebar, Presenter Console, Fullscreen, Autoplay)
// =========================================================================

// Initialize Sidebar Drawer Items
function initializeSidebar() {
  sidebarList.innerHTML = slidesData.map((slide, idx) => `
    <li data-index="${idx}">
      <span class="slide-num">${idx + 1}</span>
      <span class="slide-text-title">${slide.title}</span>
    </li>
  `).join('');

  sidebarList.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-index"));
      currentSlideIndex = idx;
      activeStrategyIndex = 0;
      renderSlide(currentSlideIndex);
      sidebar.classList.add("hidden");
      btnSidebar.classList.remove("active");
    });
  });
}

// Toggle Sidebar drawer
btnSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  btnSidebar.classList.toggle("active");
});

btnCloseSidebar.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  btnSidebar.classList.remove("active");
});

// Toggle Presenter Console (Split view layout)
btnPresenter.addEventListener("click", () => {
  const root = document.getElementById("presentation-root");
  presenterConsole.classList.toggle("hidden");
  btnPresenter.classList.toggle("active");
  root.classList.toggle("presenter-split-mode");
});

// Toggle Autoplay
function toggleAutoplay() {
  if (autoplayActive) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    autoplayActive = false;
    btnAutoplay.innerHTML = `<i class="fa-solid fa-play"></i> <span>Play</span>`;
    btnAutoplay.classList.remove("active");
  } else {
    autoplayActive = true;
    btnAutoplay.innerHTML = `<i class="fa-solid fa-pause"></i> <span>Pause</span>`;
    btnAutoplay.classList.add("active");
    autoplayInterval = setInterval(navigateNext, autoplayDuration);
  }
}
btnAutoplay.addEventListener("click", toggleAutoplay);

// Fullscreen Stage Toggle
btnFullscreen.addEventListener("click", () => {
  const elem = document.getElementById("slide-stage");
  if (!document.fullscreenElement) {
    elem.requestFullscreen().then(() => {
      btnFullscreen.innerHTML = `<i class="fa-solid fa-compress"></i>`;
    }).catch(err => {
      alert(`Error enabling fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
    btnFullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;
  }
});

// Listener for escape fullscreen
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    btnFullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;
  }
});

// Presenter console stopwatch timer implementation
function startTimer() {
  timerInterval = setInterval(() => {
    if (!timerPaused) {
      timerSeconds++;
      const hrs = String(Math.floor(timerSeconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, '0');
      const secs = String(timerSeconds % 60).padStart(2, '0');
      timerDisplay.innerText = `${hrs}:${mins}:${secs}`;
    }
  }, 1000);
}

btnTimerReset.addEventListener("click", () => {
  timerSeconds = 0;
  timerDisplay.innerText = "00:00:00";
});

btnTimerToggle.addEventListener("click", () => {
  timerPaused = !timerPaused;
  if (timerPaused) {
    btnTimerToggle.innerHTML = `<i class="fa-solid fa-play"></i>`;
  } else {
    btnTimerToggle.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    navigateNext();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    navigatePrev();
  }
});

// Arrow buttons click listeners
navPrev.addEventListener("click", navigatePrev);
navNext.addEventListener("click", navigateNext);


// =========================================================================
// POWERPOINT GENERATION EXPORTER
// =========================================================================
function exportToPowerpoint() {
  if (typeof PptxGenJS === "undefined") {
    alert("PptxGenJS library failed to load. Please verify your internet connection.");
    return;
  }
  
  const originalHtml = btnPptx.innerHTML;
  btnPptx.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Exporting...</span>`;
  btnPptx.disabled = true;

  try {
    let pptx = new PptxGenJS();
    
    // Presentation configurations
    pptx.title = "The Psychology of Self-Confidence";
    pptx.subject = "Psychology and Success Presentation";
    pptx.author = "Antigravity AI Designer";
    pptx.defineLayout({ name: 'CUSTOM_WIDESCREEN', width: 13.33, height: 7.5 });
    pptx.layout = 'CUSTOM_WIDESCREEN';
    
    // Core color schemes
    const bgDarkHex = "0B0F19";
    const accentGoldHex = "F59E0B";
    const textWhiteHex = "F9FAFB";
    const textSecondaryHex = "94A3B8";
    
    slidesData.forEach((slide) => {
      let pptxSlide = pptx.addSlide();
      
      // Setting slide background
      pptxSlide.background = { fill: bgDarkHex };
      
      if (slide.image) {
        pptxSlide.addImage({ path: slide.image, x: 0, y: 0, w: 13.33, h: 7.5 });
        pptxSlide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 13.33, h: 7.5, fill: { color: bgDarkHex, transparency: 15 } });
      }
      
      // Standard Title Headers for inner pages
      if (slide.type !== "cover" && slide.type !== "thank-you") {
        // Slide title text box
        pptxSlide.addText(slide.title, {
          x: 0.6,
          y: 0.4,
          w: 8.5,
          h: 0.8,
          fontSize: 26,
          bold: true,
          color: textWhiteHex,
          fontFace: "Arial"
        });
        
        // Slide subtitle text box
        if (slide.subtitle) {
          pptxSlide.addText(slide.subtitle.toUpperCase(), {
            x: 0.6,
            y: 1.1,
            w: 8.5,
            h: 0.4,
            fontSize: 10,
            bold: true,
            color: accentGoldHex,
            fontFace: "Arial"
          });
        }
      }
      
      // Slide content population depending on type
      switch(slide.type) {
        case "cover":
          pptxSlide.addText("THE PSYCHOLOGY OF", {
            x: 1.0, y: 1.8, w: 11.3, h: 0.4,
            fontSize: 14, bold: true, color: "8B5CF6", fontFace: "Arial"
          });
          pptxSlide.addText(slide.title, {
            x: 1.0, y: 2.2, w: 11.3, h: 1.5,
            fontSize: 42, bold: true, color: textWhiteHex, fontFace: "Arial"
          });
          pptxSlide.addText(slide.subtitle, {
            x: 1.0, y: 3.8, w: 11.3, h: 0.8,
            fontSize: 18, color: textSecondaryHex, fontFace: "Arial"
          });
          pptxSlide.addText("Presented by: " + slide.presenter, {
            x: 1.0, y: 5.2, w: 6.0, h: 0.5,
            fontSize: 12, color: textSecondaryHex, italic: true, fontFace: "Arial"
          });
          break;
          
        case "intro":
          pptxSlide.addText(slide.quote, {
            x: 0.8, y: 2.0, w: 11.7, h: 3.2,
            fontSize: 18, color: textWhiteHex, italic: true, fontFace: "Arial",
            lineSpacing: 26
          });
          break;
          
        case "grid":
          pptxSlide.addText(slide.description || "", {
            x: 0.6, y: 1.5, w: 12.0, h: 0.6,
            fontSize: 13, color: textSecondaryHex, fontFace: "Arial"
          });
          slide.items.forEach((item, index) => {
            const cardX = 0.6 + (index * 3.0);
            
            // Outer rectangle box
            pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
              x: cardX, y: 2.3, w: 2.8, h: 3.6,
              fill: "111827", line: { color: "1F2937", width: 1 }
            });
            // Card Title text
            pptxSlide.addText(item.title, {
              x: cardX + 0.15, y: 2.5, w: 2.5, h: 0.4,
              fontSize: 14, bold: true, color: "6366F1", fontFace: "Arial", align: "center"
            });
            // Card Desc text
            pptxSlide.addText(item.desc, {
              x: cardX + 0.15, y: 3.0, w: 2.5, h: 2.6,
              fontSize: 11, color: textSecondaryHex, fontFace: "Arial", align: "center"
            });
          });
          break;

        case "science":
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 2.2, w: 4.8, h: 3.5, fill: "111827", line: { color: "1F2937", width: 1 } });
          pptxSlide.addText("Action --> Win --> Neural Reward Loop", { x: 1.0, y: 3.5, w: 4.4, h: 0.8, fontSize: 16, bold: true, color: "8B5CF6", align: "center" });
          
          let scienceBullets = slide.points.map(pt => `• ${pt}`).join("\n\n");
          pptxSlide.addText(scienceBullets, { x: 6.2, y: 2.2, w: 6.3, h: 3.5, fontSize: 13, color: textWhiteHex, fontFace: "Arial" });
          break;
          
        case "comparison":
          // Left Box
          pptxSlide.addShape(pptx.shapes.RECTANGLE, {
            x: 0.8, y: 1.8, w: 5.6, h: 4.4,
            fill: "111827", line: { color: "10B981", width: 2 }
          });
          pptxSlide.addText(slide.col1Title, {
            x: 1.0, y: 2.0, w: 5.2, h: 0.5,
            fontSize: 18, bold: true, color: "10B981", fontFace: "Arial"
          });
          let col1Text = slide.col1Items.map(it => `• ${it}`).join("\n\n");
          pptxSlide.addText(col1Text, {
            x: 1.0, y: 2.6, w: 5.2, h: 3.4,
            fontSize: 12, color: textSecondaryHex, fontFace: "Arial"
          });
          
          // Right Box
          pptxSlide.addShape(pptx.shapes.RECTANGLE, {
            x: 6.9, y: 1.8, w: 5.6, h: 4.4,
            fill: "111827", line: { color: "EF4444", width: 2 }
          });
          pptxSlide.addText(slide.col2Title, {
            x: 7.1, y: 2.0, w: 5.2, h: 0.5,
            fontSize: 18, bold: true, color: "EF4444", fontFace: "Arial"
          });
          let col2Text = slide.col2Items.map(it => `• ${it}`).join("\n\n");
          pptxSlide.addText(col2Text, {
            x: 7.1, y: 2.6, w: 5.2, h: 3.4,
            fontSize: 12, color: textSecondaryHex, fontFace: "Arial"
          });
          break;
          
        case "factors":
          slide.factors.forEach((f, idx) => {
            const fx = 0.6 + (idx * 2.4);
            pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
              x: fx, y: 2.2, w: 2.2, h: 3.5,
              fill: "111827", line: { color: "1F2937", width: 1 }
            });
            pptxSlide.addText(`0${idx+1}`, {
              x: fx + 0.1, y: 2.4, w: 2.0, h: 0.4,
              fontSize: 24, bold: true, color: "6366F1", opacity: 0.2, fontFace: "Arial", align: "center"
            });
            pptxSlide.addText(f.name, {
              x: fx + 0.1, y: 3.2, w: 2.0, h: 1.8,
              fontSize: 13, bold: true, color: textWhiteHex, fontFace: "Arial", align: "center"
            });
          });
          break;

        case "social-media":
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 2.0, w: 4.0, h: 3.8, fill: "090C15", line: { color: "6366F1", width: 2 } });
          pptxSlide.addText("Mock Smartphone\n[ Curated Success Feed ]", { x: 1.0, y: 3.2, w: 3.6, h: 1.0, fontSize: 12, color: textSecondaryHex, align: "center" });
          
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 2.0, w: 7.2, h: 3.8, fill: "1E1214", line: { color: "EF4444", width: 1 } });
          pptxSlide.addText("Social Comparison Pitfalls", { x: 5.8, y: 2.2, w: 6.6, h: 0.4, fontSize: 16, bold: true, color: "EF4444" });
          let socialBulletsStr = slide.points.map(pt => `• ${pt}`).join("\n\n");
          pptxSlide.addText(socialBulletsStr, { x: 5.8, y: 2.8, w: 6.6, h: 2.8, fontSize: 12, color: textWhiteHex, fontFace: "Arial" });
          break;
          
        case "talk":
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 2.0, w: 5.6, h: 4.0, fill: "1E1214", line: { color: "EF4444", width: 1 } });
          pptxSlide.addText("NEGATIVE SELF-TALK", { x: 1.0, y: 2.2, w: 5.2, h: 0.4, fontSize: 14, bold: true, color: "EF4444" });
          pptxSlide.addText(`"I can't do it. I'm not ready."\n\n"I'm not good enough, they are much smarter."\n\n"If I fail, it will be embarrassing."`, {
            x: 1.0, y: 2.8, w: 5.2, h: 3.0, fontSize: 13, color: "FCA5A5", fontFace: "Arial", italic: true
          });
          
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.9, y: 2.0, w: 5.6, h: 4.0, fill: "101E17", line: { color: "10B981", width: 1 } });
          pptxSlide.addText("POSITIVE SELF-TALK", { x: 7.1, y: 2.2, w: 5.2, h: 0.4, fontSize: 14, bold: true, color: "10B981" });
          pptxSlide.addText(`"I can improve. I will give it my best try."\n\n"I will learn from this experience."\n\n"Progress is better than perfection."`, {
            x: 7.1, y: 2.8, w: 5.2, h: 3.0, fontSize: 13, color: "A7F3D0", fontFace: "Arial", italic: true
          });
          break;

        case "body-language":
          pptxSlide.addImage({ path: slide.imgLow, x: 0.8, y: 0.2, w: 5.6, h: 1.6 });
          pptxSlide.addImage({ path: slide.imgHigh, x: 6.9, y: 0.2, w: 5.6, h: 1.6 });
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 2.0, w: 5.6, h: 4.0, fill: "1E1214", line: { color: "EF4444", width: 1 } });
          pptxSlide.addText("Defensive Posture", { x: 1.0, y: 2.2, w: 5.2, h: 0.4, fontSize: 16, bold: true, color: "EF4444" });
          let lowBText = slide.pointsLow.map(pt => `• ${pt}`).join("\n\n");
          pptxSlide.addText(lowBText, { x: 1.0, y: 2.8, w: 5.2, h: 3.0, fontSize: 12, color: textSecondaryHex });
          
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.9, y: 2.0, w: 5.6, h: 4.0, fill: "101E17", line: { color: "10B981", width: 1 } });
          pptxSlide.addText("Confident Posture", { x: 7.1, y: 2.2, w: 5.2, h: 0.4, fontSize: 16, bold: true, color: "10B981" });
          let highBText = slide.pointsHigh.map(pt => `• ${pt}`).join("\n\n");
          pptxSlide.addText(highBText, { x: 7.1, y: 2.8, w: 5.2, h: 3.0, fontSize: 12, color: textSecondaryHex });
          break;
          
        case "comfort-zone":
          pptxSlide.addShape(pptx.shapes.OVAL, { x: 0.8, y: 2.0, w: 4.0, h: 4.0, fill: "0F1E16", line: { color: "10B981", width: 1 } });
          pptxSlide.addShape(pptx.shapes.OVAL, { x: 1.3, y: 2.5, w: 3.0, h: 3.0, fill: "1E180F", line: { color: "F59E0B", width: 1 } });
          pptxSlide.addShape(pptx.shapes.OVAL, { x: 1.8, y: 3.0, w: 2.0, h: 2.0, fill: "1E0F14", line: { color: "EF4444", width: 1 } });
          pptxSlide.addShape(pptx.shapes.OVAL, { x: 2.3, y: 3.5, w: 1.0, h: 1.0, fill: "0F141E", line: { color: "3B82F6", width: 1 } });
          
          pptxSlide.addText("Concentric Layers:\n1. Comfort Zone\n2. Fear Zone\n3. Learning Zone\n4. Growth Zone", {
            x: 1.3, y: 6.0, w: 3.0, h: 0.8, fontSize: 9, color: textSecondaryHex, fontFace: "Arial", align: "center"
          });

          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: 5.5, y: 2.0, w: 7.2, h: 4.0,
            fill: "111827", line: { color: "1F2937", width: 1 }
          });
          pptxSlide.addText("Where Growth Begins", {
            x: 5.8, y: 2.2, w: 6.6, h: 0.4,
            fontSize: 16, bold: true, color: "F59E0B", fontFace: "Arial"
          });
          pptxSlide.addText("• Comfort Zone: safe, low stress, zero progress.\n• Fear Zone: self-doubt, excuses, peer pressure.\n• Learning Zone: problem solving, acquiring new skills.\n• Growth Zone: set goals, conquer dreams, find purpose.", {
            x: 5.8, y: 2.8, w: 6.6, h: 3.0,
            fontSize: 12, color: textSecondaryHex, fontFace: "Arial", lineSpacing: 20
          });
          break;
          
        case "habits":
          slide.items.forEach((item, index) => {
            const hx = 0.8 + (index * 4.0);
            pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
              x: hx, y: 2.0, w: 3.6, h: 4.0,
              fill: "111827", line: { color: "1F2937", width: 1 }
            });
            pptxSlide.addText(item.title, {
              x: hx + 0.2, y: 2.4, w: 3.2, h: 0.5,
              fontSize: 16, bold: true, color: "6366F1", fontFace: "Arial", align: "center"
            });
            pptxSlide.addText(item.desc, {
              x: hx + 0.2, y: 3.2, w: 3.2, h: 2.4,
              fontSize: 12, color: textSecondaryHex, fontFace: "Arial", align: "center"
            });
          });
          break;
          
        case "cycle":
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 1.0, y: 2.2, w: 3.2, h: 1.2, fill: "1E1214", line: { color: "EF4444", width: 1 } });
          pptxSlide.addText("Overthinking &\nAnalysis Paralysis", { x: 1.0, y: 2.3, w: 3.2, h: 1.0, fontSize: 13, bold: true, color: "FCA5A5", align: "center" });
          
          pptxSlide.addText("-->", { x: 4.4, y: 2.6, w: 0.6, h: 0.4, fontSize: 24, color: textSecondaryHex, align: "center" });
          
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: 2.2, w: 3.2, h: 1.2, fill: "111827", line: { color: "1F2937", width: 1 } });
          pptxSlide.addText("Fear, Doubt &\nAvoidance of Action", { x: 5.1, y: 2.3, w: 3.2, h: 1.0, fontSize: 13, bold: true, color: textWhiteHex, align: "center" });
          
          pptxSlide.addText("-->", { x: 8.5, y: 2.6, w: 0.6, h: 0.4, fontSize: 24, color: textSecondaryHex, align: "center" });
          
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 9.2, y: 2.2, w: 3.2, h: 1.2, fill: "111827", line: { color: "1F2937", width: 1 } });
          pptxSlide.addText("Fewer Experiences &\nSkills Gaps", { x: 9.2, y: 2.3, w: 3.2, h: 1.0, fontSize: 13, bold: true, color: textWhiteHex, align: "center" });
          
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: 4.2, w: 3.2, h: 1.2, fill: "1E1711", line: { color: "F59E0B", width: 1 } });
          pptxSlide.addText("REDUCED CONFIDENCE\n(Cycle Repeats)", { x: 5.1, y: 4.3, w: 3.2, h: 1.0, fontSize: 13, bold: true, color: "F59E0B", align: "center" });
          
          pptxSlide.addText("<-- Loop --", { x: 1.5, y: 4.6, w: 3.2, h: 0.4, fontSize: 14, color: textSecondaryHex, align: "center" });
          break;
          
        case "iceberg":
          pptxSlide.addShape(pptx.shapes.ISOSCELES_TRIANGLE, { x: 4.0, y: 2.0, w: 5.3, h: 4.0, fill: "1E293B", line: { color: "3B82F6", width: 1 } });
          pptxSlide.addText("SUCCESS (What is seen)", { x: 4.0, y: 2.5, w: 5.3, h: 0.4, fontSize: 14, bold: true, color: "10B981", align: "center" });
          
          pptxSlide.addText("Water Line ----------------------------------------------------", { x: 1.0, y: 3.2, w: 11.3, h: 0.3, fontSize: 10, color: "3B82F6", align: "center" });
          
          pptxSlide.addText("FAILURES • HARD WORK • LATE NIGHTS • REJECTIONS • SELF-DOUBT", { x: 2.0, y: 4.5, w: 9.3, h: 0.6, fontSize: 11, bold: true, color: textSecondaryHex, align: "center" });
          pptxSlide.addText("The Submerged Foundation", { x: 2.0, y: 5.2, w: 9.3, h: 0.4, fontSize: 12, italic: true, color: "3B82F6", align: "center" });
          break;
          
        case "stories":
          slide.examples.forEach((ex, idx) => {
            const sx = 0.8 + (idx * 6.0);
            pptxSlide.addImage({ path: ex.image, x: sx, y: 0.3, w: 5.5, h: 1.5 });
            pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
              x: sx, y: 2.0, w: 5.5, h: 4.0,
              fill: "111827", line: { color: "1F2937", width: 1 }
            });
            pptxSlide.addText(ex.author, {
              x: sx + 0.3, y: 2.3, w: 4.9, h: 0.4,
              fontSize: 16, bold: true, color: "8B5CF6", fontFace: "Arial"
            });
            pptxSlide.addText(ex.role, {
              x: sx + 0.3, y: 2.7, w: 4.9, h: 0.3,
              fontSize: 11, color: "F59E0B", fontFace: "Arial"
            });
            pptxSlide.addText(`"${ex.quote}"`, {
              x: sx + 0.3, y: 3.2, w: 4.9, h: 2.5,
              fontSize: 12, color: textSecondaryHex, italic: true, fontFace: "Arial", lineSpacing: 18
            });
          });
          break;

        case "academic-life":
          slide.items.forEach((item, index) => {
            const rx = 0.8 + (index % 2) * 6.0;
            const ry = 2.0 + Math.floor(index / 2) * 2.1;
            
            pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: rx, y: ry, w: 5.6, h: 1.8, fill: "111827", line: { color: "1F2937", width: 1 } });
            pptxSlide.addText(item.title, { x: rx + 0.2, y: ry + 0.2, w: 5.2, h: 0.3, fontSize: 13, bold: true, color: "F59E0B" });
            pptxSlide.addText(item.desc, { x: rx + 0.2, y: ry + 0.6, w: 5.2, h: 1.0, fontSize: 11, color: textSecondaryHex });
          });
          break;
          
        case "strategies":
          slide.strategies.forEach((st, idx) => {
            const sy = 1.8 + (idx * 0.9);
            pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
              x: 0.8, y: sy, w: 11.7, h: 0.7,
              fill: "111827", line: { color: "1F2937", width: 1 }
            });
            pptxSlide.addText(`${idx+1}. ${st.title} : ${st.desc}`, {
              x: 1.1, y: sy + 0.1, w: 11.1, h: 0.5,
              fontSize: 11, bold: true, color: textWhiteHex, fontFace: "Arial"
            });
          });
          break;
          
        case "lessons":
          let lessonsList = slide.items.map((les, idx) => `${idx+1}. ${les}`).join("\n\n");
          pptxSlide.addText(lessonsList, {
            x: 0.8, y: 1.8, w: 11.7, h: 4.4,
            fontSize: 15, color: textWhiteHex, fontFace: "Arial", lineSpacing: 22
          });
          break;
          
        case "conclusion":
          pptxSlide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: 1.0, y: 2.0, w: 11.3, h: 3.8,
            fill: "111827", line: { color: "8B5CF6", width: 1 }
          });
          pptxSlide.addText(slide.text, {
            x: 1.5, y: 2.5, w: 10.3, h: 2.8,
            fontSize: 20, color: textWhiteHex, fontFace: "Arial", align: "center", lineSpacing: 30
          });
          break;
          
        case "thank-you":
          pptxSlide.addText(slide.title, {
            x: 1.0, y: 2.2, w: 11.3, h: 1.5,
            fontSize: 54, bold: true, color: "F59E0B", fontFace: "Arial", align: "center"
          });
          pptxSlide.addText(slide.subtitle, {
            x: 1.0, y: 3.8, w: 11.3, h: 0.8,
            fontSize: 24, color: "8B5CF6", fontFace: "Arial", align: "center"
          });
          pptxSlide.addText("Thank You for Your Time!", {
            x: 1.0, y: 4.8, w: 11.3, h: 0.5,
            fontSize: 16, color: textSecondaryHex, fontFace: "Arial", align: "center"
          });
          break;
      }
      
      // Inject English Speaker notes in PPTX notes area
      if (slide.speakerNotes) {
        let cleanNotes = slide.speakerNotes
          .replace(/<p>/gi, '')
          .replace(/<\/p>/gi, '\n')
          .replace(/<ul>/gi, '')
          .replace(/<\/ul>/gi, '')
          .replace(/<li>/gi, '• ')
          .replace(/<\/li>/gi, '\n')
          .replace(/<strong>/gi, '')
          .replace(/<\/strong>/gi, '')
          .replace(/<span.*?>/gi, '')
          .replace(/<\/span>/gi, '')
          .trim();
        pptxSlide.notes = cleanNotes;
      }
    });
    
    pptx.writeFile({ fileName: "The_Psychology_of_Self_Confidence.pptx" })
      .then(() => {
        btnPptx.innerHTML = originalHtml;
        btnPptx.disabled = false;
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during PPTX creation: " + err.message);
        btnPptx.innerHTML = originalHtml;
        btnPptx.disabled = false;
      });
      
  } catch (ex) {
    console.error(ex);
    alert("Export exception: " + ex.message);
    btnPptx.innerHTML = originalHtml;
    btnPptx.disabled = false;
  }
}

btnPptx.addEventListener("click", exportToPowerpoint);

// =========================================================================
// START APP
// =========================================================================
totalSlidesNum.innerText = slidesData.length;
initializeSidebar();
renderSlide(currentSlideIndex);
startTimer();
