/**
 * NimLearn - Centralized Article Database
 * 
 * STRICT CATEGORIES (ONLY 4):
 * 1. Artificial Intelligence (artificial-intelligence)
 * 2. Computer Science (computer-science)
 * 3. Psychology (psychology)
 * 4. History of World (history-of-world)
 */

const NimLearnArticles = [
  // ==================== 1. ARTIFICIAL INTELLIGENCE ====================
  {
    id: 1,
    slug: "how-artificial-neural-networks-actually-learn",
    title: "How Artificial Neural Networks Actually Learn",
    subtitle: "Demystifying backpropagation, loss functions, and how mathematical weights simulate intuition.",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    categoryIcon: "🤖",
    author: {
      name: "Dr. Elena Vance",
      role: "AI Research Fellow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "October 12, 2025",
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "A conceptual visualization of interconnected neural pathways and deep learning layers.",
    featured: true,
    popular: true,
    tags: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Deep Learning"],
    excerpt: "At its core, machine learning isn't magic or conscious thought. It is the mathematical art of iteratively reducing errors until patterns emerge from chaos.",
    content: `
      <p class="article-lead">When we watch an AI compose poetry, detect anomalies in medical scans, or navigate autonomous vehicles, it is tempting to believe the machine possesses human-like comprehension. Yet behind every groundbreaking AI model lies an elegant mathematical principle: optimization through continuous error correction.</p>

      <h2>The Biological Metaphor: Artificial Neurons</h2>
      <p>In biological brains, billions of interconnected neurons fire electrical signals across synapses. When you learn to play an instrument, the synaptic connections between certain neurons strengthen through repeated practice—a phenomenon known as neuroplasticity.</p>
      
      <p>Artificial Neural Networks (ANNs) borrow this fundamental concept. An artificial neuron is a mathematical function that takes numerical inputs, multiplies each by an assigned "weight" (representing importance), adds a "bias", and passes the sum through an activation function.</p>

      <div class="callout-box">
        <div class="callout-icon">💡</div>
        <div class="callout-content">
          <h4>Key Insight: The Role of Weights</h4>
          <p>Weights determine how much importance a neuron places on a specific clue. For example, if an AI is learning to identify a cat, a high weight might be given to pointed ears, while a low weight is given to background color.</p>
        </div>
      </div>

      <h2>How Learning Happens: The 3-Step Loop</h2>
      <p>An AI does not start smart. On day zero, its trillions of weights are initialized to random numbers. Its initial guesses are completely incorrect. It learns through a relentless three-phase cycle:</p>

      <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li><strong>Forward Propagation (The Guess):</strong> The model feeds training data through its layers, generating a mathematical prediction.</li>
        <li><strong>Loss Calculation (Measuring Error):</strong> A loss function measures how far off the guess was from the true answer.</li>
        <li><strong>Backpropagation & Gradient Descent (The Correction):</strong> Calculus is used to calculate how much each weight contributed to the error, and nudges each weight to improve next time.</li>
      </ol>

      <div class="article-quote">
        "Learning in AI is not the accumulation of facts; it is the iterative sculpting of a multi-dimensional mathematical landscape."
      </div>

      <h2>From Pattern Recognition to Emergence</h2>
      <p>When millions of layers and billions of parameters are combined with massive compute power, an extraordinary phenomenon occurs: <em>emergence</em>. Early layers detect primitive features like edges; middle layers combine edges into shapes; deeper layers grasp abstract concepts like sentiment and logical relationships.</p>
    `
  },
  {
    id: 2,
    slug: "understanding-large-language-models-and-transformers",
    title: "Understanding Transformers: The Core of Modern Large Language Models",
    subtitle: "How self-attention mechanisms revolutionized how machines process and generate natural language.",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    categoryIcon: "🤖",
    author: {
      name: "Marcus Sterling",
      role: "AI Systems Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "November 08, 2025",
    readingTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Vector embeddings representing word relationships in high-dimensional space.",
    featured: false,
    popular: true,
    tags: ["LLM", "Transformers", "Natural Language", "NLP"],
    excerpt: "Before 2017, machines translated text word-by-word. The Transformer architecture introduced 'self-attention', allowing models to look at an entire sentence at once.",
    content: `
      <p class="article-lead">In 2017, researchers at Google published a paper titled <em>"Attention Is All You Need"</em>. It introduced the Transformer architecture—the single breakthrough that powers ChatGPT, Claude, Gemini, and modern generative AI.</p>

      <h2>The Problem with Recurrent Neural Networks</h2>
      <p>Earlier language models processed text sequentially, word by word from left to right. By the time the model reached the end of a long paragraph, it had forgotten key details from the beginning.</p>

      <h2>The Magic of Self-Attention</h2>
      <p>Self-attention allows the model to compute mathematical relationships between <em>every word and every other word</em> in a sequence simultaneously. In the sentence <em>"The animal didn't cross the street because it was too tired"</em>, self-attention allows the model to connect "it" directly to "animal" rather than "street".</p>
    `
  },

  // ==================== 2. COMPUTER SCIENCE ====================
  {
    id: 3,
    slug: "time-complexity-and-big-o-notation-explained",
    title: "Time Complexity & Big O Notation Explained Simply",
    subtitle: "A practical guide to measuring algorithm efficiency, scaling software, and writing high-performance code.",
    category: "Computer Science",
    categorySlug: "computer-science",
    categoryIcon: "💻",
    author: {
      name: "David Chen",
      role: "Software Architect",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "September 24, 2025",
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Source code analyzing algorithmic efficiency and execution times.",
    featured: true,
    popular: true,
    tags: ["Computer Science", "Algorithms", "Big O", "Data Structures"],
    excerpt: "Why does an algorithm that runs in 1 second for 10 items take 3 hours for 10,000 items? Understanding Big O notation reveals how software scales.",
    content: `
      <p class="article-lead">Computer science is not merely about writing code that works; it is about writing code that scales efficiently when handling millions of data points. Big O notation is the universal language developers use to measure this efficiency.</p>

      <h2>What Is Big O Notation?</h2>
      <p>Big O describes the upper limit of how execution time or memory usage grows as the input size ($N$) increases. It ignores hardware speeds and focuses purely on mathematical growth rates.</p>

      <h2>Common Complexity Classes</h2>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li><strong>O(1) Constant Time:</strong> Instant lookup, regardless of dataset size (e.g., accessing an array index).</li>
        <li><strong>O(log N) Logarithmic Time:</strong> Halving the problem size at each step (e.g., Binary Search).</li>
        <li><strong>O(N) Linear Time:</strong> Processing every element once (e.g., simple loop search).</li>
        <li><strong>O(N²) Quadratic Time:</strong> Nested loops over the dataset (e.g., Bubble Sort).</li>
      </ul>
    `
  },
  {
    id: 4,
    slug: "how-operating-systems-manage-memory-and-processes",
    title: "How Operating Systems Manage Memory & CPU Scheduling",
    subtitle: "Inside the kernel: virtual memory, paging, context switching, and multi-threading.",
    category: "Computer Science",
    categorySlug: "computer-science",
    categoryIcon: "💻",
    author: {
      name: "David Chen",
      role: "Software Architect",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "November 14, 2025",
    readingTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Integrated circuit microchip managing bus communications and memory registers.",
    featured: false,
    popular: false,
    tags: ["Operating Systems", "Kernel", "CPU", "Memory"],
    excerpt: "Every time you open a browser tab, your OS performs thousands of low-level abstractions, allocating virtual RAM and switching CPU threads in microseconds.",
    content: `
      <p class="article-lead">An operating system is the ultimate conductor. It sits between user software applications and physical hardware chips, ensuring no single application monopolizes hardware resources or crashes the machine.</p>

      <h2>Virtual Memory and Page Tables</h2>
      <p>Modern applications do not interact directly with physical RAM addresses. Instead, the kernel provides each process with its own contiguous <strong>virtual address space</strong>. The Memory Management Unit (MMU) dynamically maps these virtual pages to physical hardware RAM frames.</p>
    `
  },

  // ==================== 3. PSYCHOLOGY ====================
  {
    id: 5,
    slug: "why-do-we-dream-the-neurobiology-of-rem-sleep",
    title: "Why Do We Dream? Inside the Neurobiology of REM Sleep",
    subtitle: "Exploring emotional calibration, memory consolidation, and mental threat simulation during sleep.",
    category: "Psychology",
    categorySlug: "psychology",
    categoryIcon: "🧠",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Cognitive Neuroscientist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "October 05, 2025",
    readingTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Brain activity patterns and imaginative neural states during deep sleep.",
    featured: true,
    popular: true,
    tags: ["Psychology", "Neuroscience", "Sleep", "Dreams"],
    excerpt: "Every night, your brain cuts off sensory input, paralyzes your voluntary muscles, and generates vivid virtual realities. Why did evolution preserve dreaming?",
    content: `
      <p class="article-lead">We spend approximately one-third of our lives asleep. During Rapid Eye Movement (REM) sleep, our brains generate bizarre, emotionally charged narratives. Modern neuroscience now recognizes dreaming as vital cognitive maintenance.</p>

      <h2>Overnight Emotional Therapy</h2>
      <p>Neuroscientists propose that REM sleep acts as an emotional soothing balm. The brain replays intense memories in a neurochemical environment completely devoid of stress hormones like noradrenaline, decoupling painful emotions from factual memory.</p>

      <h2>Creative Problem Solving</h2>
      <p>By relaxing rigid logical filters during sleep, the hippocampus and neocortex connect disparate memories and concepts, giving rise to unexpected creative breakthroughs upon waking.</p>
    `
  },
  {
    id: 6,
    slug: "the-architecture-of-cognitive-biases-system-1-and-system-2",
    title: "The Architecture of Bias: Why Smart People Make Irrational Decisions",
    subtitle: "Exploring System 1 vs System 2 thinking, confirmation bias, and evolutionary mental shortcuts.",
    category: "Psychology",
    categorySlug: "psychology",
    categoryIcon: "🧠",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Cognitive Neuroscientist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "December 02, 2025",
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Abstract geometric representation of perspective and cognitive distortion.",
    featured: false,
    popular: true,
    tags: ["Cognitive Bias", "Behavioral Psychology", "Decision Making"],
    excerpt: "Our brains evolved to make split-second life-or-death survival decisions. In the modern world of information overload, those exact evolutionary shortcuts deceive us.",
    content: `
      <p class="article-lead">Psychologist Daniel Kahneman divided human thought into two systems: <strong>System 1</strong> (fast, intuitive, emotional) and <strong>System 2</strong> (slow, deliberate, analytical). Cognitive biases arise when lazy System 2 delegates complex decisions to shortcut-loving System 1.</p>

      <h2>The Big Three Cognitive Biases</h2>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li><strong>Confirmation Bias:</strong> Seeking out information that validates existing beliefs while ignoring disconfirming evidence.</li>
        <li><strong>Availability Heuristic:</strong> Estimating the likelihood of an event based on how easily examples come to mind.</li>
        <li><strong>Sunk Cost Fallacy:</strong> Continuing an unproductive effort simply because of past non-refundable investments.</li>
      </ul>
    `
  },

  // ==================== 4. HISTORY OF WORLD ====================
  {
    id: 7,
    slug: "why-do-civilizations-rise-and-fall-lessons-from-history",
    title: "Why Do Civilizations Rise and Fall? Structural Patterns of History",
    subtitle: "From ancient Rome and the Bronze Age collapse to the Maya: civilizational vulnerability cycles.",
    category: "History of World",
    categorySlug: "history-of-world",
    categoryIcon: "🌍",
    author: {
      name: "Prof. Arthur Pendelton",
      role: "Chair of World History",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "October 20, 2025",
    readingTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Ancient Roman ruins standing as enduring monuments to civilizational cycles.",
    featured: true,
    popular: true,
    tags: ["History of World", "Ancient Rome", "Civilizations", "Archaeology"],
    excerpt: "No empire in history was too wealthy or militarily powerful to avoid decay. What shared structural vulnerabilities brought them down?",
    content: `
      <p class="article-lead">Stand among the marble columns of the Roman Forum or the overgrown pyramids of Tikal, and one question echoes through history: How could societies of such immense engineering genius simply unravel?</p>

      <h2>Diminishing Returns on Complexity</h2>
      <p>Anthropologist Joseph Tainter noted that civilizations build bureaucracy, trade routes, and military outposts to solve problems. Over time, maintaining this complex infrastructure requires more energy and resources than it generates, leaving society fragile to external shocks.</p>

      <h2>Four Drivers of Historical Collapse</h2>
      <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li><strong>Environmental Depletion:</strong> Severe multi-decade droughts ruined agricultural irrigation networks.</li>
        <li><strong>Economic Overextension:</strong> Debasing currency and unsustainable military budgets inflation.</li>
        <li><strong>Social Inequality:</strong> Institutional decay disconnecting ruling classes from population needs.</li>
        <li><strong>Supply Chain Fragility:</strong> Breakdown of vital international trade arteries.</li>
      </ol>
    `
  },
  {
    id: 8,
    slug: "the-silk-road-how-ancient-trade-built-the-modern-world",
    title: "The Silk Road: The Neural Network of the Ancient World",
    subtitle: "More than luxury fabric: how 4,000 miles of trade routes exchanged ideas, science, and innovations.",
    category: "History of World",
    categorySlug: "history-of-world",
    categoryIcon: "🌍",
    author: {
      name: "Prof. Arthur Pendelton",
      role: "Chair of World History",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "December 15, 2025",
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Desert trade dunes along historic Eurasian trade corridors.",
    featured: false,
    popular: false,
    tags: ["Silk Road", "World History", "Trade Routes", "Ancient Asia"],
    excerpt: "The Silk Road was never a single paved highway; it was a living network of oasis cities, mountain passes, and desert caravans connecting Asia to Europe.",
    content: `
      <p class="article-lead">From 130 BCE to the mid-15th century, the Silk Road served as Eurasia's primary commercial artery. While merchants traded silk, spices, and porcelain, its most lasting legacy was the exchange of paper-making, mathematics, and philosophy.</p>
    `
  }
];

// Helper database functions for NimLearn
const NimLearnDB = {
  getAllArticles: () => NimLearnArticles,

  getFeaturedArticles: () => NimLearnArticles.filter(a => a.featured),

  getPopularArticles: () => NimLearnArticles.filter(a => a.popular),

  getLatestArticles: (limit = 6) => [...NimLearnArticles].slice(0, limit),

  getArticleById: (id) => NimLearnArticles.find(a => a.id === parseInt(id)),

  getArticleBySlug: (slug) => NimLearnArticles.find(a => a.slug === slug),

  getArticlesByCategory: (categorySlugOrName) => {
    if (!categorySlugOrName || categorySlugOrName.toLowerCase() === "all") {
      return NimLearnArticles;
    }
    const target = categorySlugOrName.toLowerCase();
    return NimLearnArticles.filter(
      a => a.categorySlug.toLowerCase() === target || a.category.toLowerCase() === target
    );
  },

  getRelatedArticles: (currentArticleId, categorySlug, limit = 3) => {
    return NimLearnArticles
      .filter(a => a.id !== currentArticleId && (a.categorySlug === categorySlug || a.category === categorySlug))
      .slice(0, limit);
  },

  searchArticles: (query) => {
    if (!query || query.trim() === "") return [];
    const q = query.toLowerCase().trim();
    return NimLearnArticles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some(tag => tag.toLowerCase().includes(q))
    );
  },

  // EXACT 4 CATEGORIES INFO
  getCategoriesInfo: () => [
    {
      name: "Artificial Intelligence",
      slug: "artificial-intelligence",
      file: "artificial-intelligence.html",
      icon: "🤖",
      description: "Explore neural networks, machine learning models, transformers, and the evolution of artificial intelligence.",
      count: NimLearnArticles.filter(a => a.categorySlug === "artificial-intelligence").length,
      color: "#2563eb"
    },
    {
      name: "Computer Science",
      slug: "computer-science",
      file: "computer-science.html",
      icon: "💻",
      description: "Understand algorithmic complexity, Big O notation, data structures, and operating system internals.",
      count: NimLearnArticles.filter(a => a.categorySlug === "computer-science").length,
      color: "#0284c7"
    },
    {
      name: "Psychology",
      slug: "psychology",
      file: "psychology.html",
      icon: "🧠",
      description: "Delve into the neurobiology of dreams, cognitive biases, memory systems, and human behavioral science.",
      count: NimLearnArticles.filter(a => a.categorySlug === "psychology").length,
      color: "#7c3aed"
    },
    {
      name: "History of World",
      slug: "history-of-world",
      file: "history-of-world.html",
      icon: "🌍",
      description: "Trace ancient civilizational cycles, historical trade routes, empires, and global cultural developments.",
      count: NimLearnArticles.filter(a => a.categorySlug === "history-of-world").length,
      color: "#d97706"
    }
  ]
};

if (typeof window !== "undefined") {
  window.NimLearnArticles = NimLearnArticles;
  window.NimLearnDB = NimLearnDB;
}
