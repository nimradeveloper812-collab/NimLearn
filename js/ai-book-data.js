/**
 * NimLearn - Artificial Intelligence Complete Book Syllabus & Table of Contents
 * Structure: 7 Parts, 27 Chapters, 180+ Sub-topics
 * Chapter 1 topics updated with exact user-provided content.
 */

const AIBookData = {
  title: "Artificial Intelligence — Handbook & Course Syllabus",
  tagline: "A comprehensive educational roadmap structured as a complete book across 7 Parts & 27 Chapters.",
  parts: [
    {
      partNumber: "Part I",
      title: "Foundations of Artificial Intelligence",
      chapters: [
        {
          chapterNumber: 1,
          title: "What Is Artificial Intelligence?",
          topics: [
            {
              id: "ch1-t1",
              title: "Definition of AI",
              content: `
                <p class="article-lead">Artificial Intelligence is one of the most important technological developments of the modern era. It appears in search engines, smartphones, recommendation systems, medical tools, financial systems, cars, educational platforms, robots, and creative applications.</p>
                <p>But AI is not simply "a computer that is smart." To understand it properly, we need to understand <strong>what intelligence means, how machines can reproduce parts of it, why AI was developed, and how AI differs from ordinary computer programs.</strong></p>
                
                <h2>What is Artificial Intelligence?</h2>
                <p><strong>Artificial Intelligence (AI)</strong> is a field of computer science concerned with creating computer systems that can perform tasks that normally require some form of human intelligence.</p>
                <p>These tasks may include:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.7;">
                  <li>Learning from information</li>
                  <li>Understanding language</li>
                  <li>Recognizing images and objects</li>
                  <li>Solving problems</li>
                  <li>Making predictions</li>
                  <li>Making decisions</li>
                  <li>Planning actions</li>
                  <li>Recognizing patterns</li>
                  <li>Generating content</li>
                  <li>Interacting with humans</li>
                  <li>Adapting to changing situations</li>
                </ul>

                <div class="callout-box">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <h4>Core Definition</h4>
                    <p><strong>Artificial Intelligence is the science and engineering of creating machines and software capable of performing tasks that involve abilities associated with human intelligence.</strong></p>
                  </div>
                </div>

                <p>However, this definition needs an important clarification. AI does <strong>not necessarily mean that a machine thinks exactly like a human</strong>. A machine can demonstrate intelligent behavior without possessing human consciousness, emotions, experiences, or understanding.</p>

                <h2>Intelligence is More Than Calculation</h2>
                <p>A calculator can multiply <strong>839 × 472</strong> extremely quickly. But we normally wouldn't call a calculator intelligent. Why? Because intelligence involves much more than producing an answer.</p>
                <p>Intelligent behavior involves a multi-stage cognitive cycle: <strong>Perception → Understanding → Learning → Reasoning → Decision → Action</strong>.</p>

                <h2>AI Has Different Levels</h2>
                <h3>1. Narrow AI</h3>
                <p><strong>Narrow AI</strong> (or weak AI) is designed to perform specific tasks such as spam detection, face recognition, and recommendation systems. Most AI systems used today fall into this category.</p>

                <h3>2. Artificial General Intelligence (AGI)</h3>
                <p><strong>Artificial General Intelligence (AGI)</strong> is a hypothetical form of AI that would possess broad, flexible intellectual abilities comparable to humans across many different kinds of tasks.</p>

                <h3>3. Artificial Superintelligence (ASI)</h3>
                <p>A hypothetical <strong>Artificial Superintelligence (ASI)</strong> would surpass humans across essentially all important intellectual capabilities.</p>

                <h2>AI is an Umbrella Term</h2>
                <p>A simplified hierarchy is: <strong>Artificial Intelligence → Machine Learning → Deep Learning → Modern neural-network systems</strong>.</p>
              `
            },
            {
              id: "ch1-t2",
              title: "Intelligence in humans vs machines",
              content: `
                <p class="article-lead">One of the deepest questions in AI is: <em>What does it mean for a machine to be intelligent?</em> Human intelligence and machine intelligence can produce similar results while operating in very different ways.</p>

                <h2>Human Intelligence</h2>
                <p>Human intelligence developed through biological evolution and individual experience. Humans can learn from relatively few examples, use common sense, understand social situations, generalize knowledge, use emotions, and learn from mistakes.</p>

                <h2>Machine Intelligence</h2>
                <p>Machines process information using computational systems. An AI system learns patterns from data, algorithms, computational optimization, and training objectives.</p>

                <div class="callout-box">
                  <div class="callout-icon">⚖️</div>
                  <div class="callout-content">
                    <h4>The Major Difference: How Intelligence is Acquired</h4>
                    <p>Humans: <strong>Experience + Observation + Language + Physical Interaction + Social Learning</strong><br>
                    AI: <strong>Data + Algorithms + Computational Optimization + Training Objectives</strong></p>
                  </div>
                </div>

                <h2>Key Differences</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.7;">
                  <li><strong>Common Sense:</strong> Humans naturally understand physical realities and context.</li>
                  <li><strong>Emotions:</strong> Humans experience emotions that influence choices; machines only simulate or recognize emotional patterns.</li>
                  <li><strong>Consciousness:</strong> Humans possess subjective experience. Current AI systems process numerical signals without human-like subjective consciousness.</li>
                </ul>

                <h2>Machine Advantages</h2>
                <p>Machines can process enormous datasets, perform calculations at extreme speeds, operate continuously, and detect subtle statistical patterns that humans might miss.</p>

                <div class="article-quote">
                  "Human and machine intelligence have different strengths, weaknesses, and mechanisms. The most powerful practical model is Human + AI."
                </div>
              `
            },
            {
              id: "ch1-t3",
              title: "Why AI was created",
              content: `
                <p class="article-lead">AI was not created for one single reason. It emerged from several scientific ambitions and practical human needs.</p>

                <h2>1. To Understand Intelligence</h2>
                <p>A fundamental philosophical and scientific goal: Can the processes associated with human intelligence be represented computationally?</p>

                <h2>2. To Automate Difficult Tasks</h2>
                <p>Moving beyond basic physical automation toward information processing and complex decision-making under uncertainty.</p>

                <h2>3. To Solve Problems Humans Cannot Easily Scale</h2>
                <p>Humans have limited attention, memory, and processing speed. AI helps analyze millions of medical scans, financial transactions, or climate data points rapidly.</p>

                <h2>4. To Make Computers Easier to Interact With</h2>
                <p>Enabling natural human communication via natural language, voice commands, images, and gestures rather than complex command-line syntax.</p>

                <h2>5. To Make Predictions Under Uncertainty</h2>
                <p>Estimating outcomes for fraud detection, weather forecasting, market demand, and customer preferences.</p>

                <h2>6. To Assist Humans</h2>
                <p>Acting as educational tutors, coding assistants, medical support tools, and accessibility aids to extend human potential.</p>
              `
            },
            {
              id: "ch1-t4",
              title: "Everyday examples of AI",
              content: `
                <p class="article-lead">AI is already deeply integrated into ordinary daily activities across digital devices and services.</p>

                <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.35rem; color: var(--accent-primary);">1. Search Engines</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Interpreting query meaning and intent rather than simple exact keyword matching.</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.35rem; color: var(--accent-primary);">2. Recommendation Systems</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Analyzing viewing, listening, and purchasing patterns to suggest tailored content on platforms like YouTube, Netflix, and Amazon.</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.35rem; color: var(--accent-primary);">3. Smartphones & Vision</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Facial recognition, voice recognition, camera enhancement, predictive typing, and photo tagging.</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.35rem; color: var(--accent-primary);">4. Navigation & Maps</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Estimating live traffic conditions, travel times, and dynamic alternative routes.</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.35rem; color: var(--accent-primary);">5. Banking & Fraud Detection</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Identifying anomalous transaction patterns based on location, time, device, and behavior.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch1-t5",
              title: "AI around us",
              content: `
                <p class="article-lead">The most important realization is that <strong>AI is often invisible</strong>. People interact with AI dozens of times every day without consciously noticing it.</p>

                <h2>A Typical Day with AI</h2>
                <ol style="margin-left: 1.5rem; line-height: 1.8;">
                  <li><strong>Morning Unlock:</strong> Smartphone opens via facial recognition.</li>
                  <li><strong>Typing Messages:</strong> Keyboard suggests predictive text.</li>
                  <li><strong>Commute:</strong> Maps optimize route based on live traffic congestion.</li>
                  <li><strong>Study & Search:</strong> Search engines rank relevant educational research.</li>
                  <li><strong>Writing Support:</strong> AI tools assist in structuring and refining prose.</li>
                  <li><strong>Evening Relaxing:</strong> Streaming apps recommend personalized movies and music.</li>
                </ol>

                <p>None of these everyday experiences require futuristic humanoid robots—yet AI operates quietly in the background of almost every digital service.</p>
              `
            },
            {
              id: "ch1-t6",
              title: "AI vs traditional software",
              content: `
                <p class="article-lead">Traditional software and AI software are both computer programs, but they differ fundamentally in how they produce behavior.</p>

                <h2>Traditional Software</h2>
                <p>Follows explicit, hardcoded instructions written by programmers (e.g., <code>IF temperature > 30 THEN turn fan ON</code>).</p>

                <h2>AI / Machine Learning Software</h2>
                <p>Provided with data, learning algorithms, and objectives. The model learns statistical patterns directly from examples rather than static rules.</p>

                <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color); text-align: left;">
                      <th style="padding: 0.75rem;">Traditional Software</th>
                      <th style="padding: 0.75rem;">AI / Machine Learning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;">Rules are explicitly programmed</td>
                      <td style="padding: 0.75rem;">Patterns learned from data</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;">Programmer specifies exact logic</td>
                      <td style="padding: 0.75rem;">Model learns parameters from examples</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;">Works best when rules are simple & clear</td>
                      <td style="padding: 0.75rem;">Useful when rules are too complex to hardcode</td>
                    </tr>
                  </tbody>
                </table>

                <div class="callout-box">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <h4>The Fundamental Paradigm Shift</h4>
                    <p><strong>Traditional Programming:</strong> Rules + Data → Output<br>
                    <strong>Machine Learning:</strong> Data + Desired Outputs → Learned Model</p>
                  </div>
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 2,
          title: "A Brief History of AI",
          topics: [
            {
              id: "ch2-t1",
              title: "The birth of the idea",
              content: `
                <p class="article-lead">Artificial Intelligence did not appear suddenly with ChatGPT, robots, or modern computers. The idea has a much longer history. For centuries, humans imagined creating artificial beings capable of thinking or acting intelligently.</p>

                <h2>The Dream Existed Before Computers</h2>
                <p>Human beings have long imagined artificial entities that could imitate human abilities. Ancient mythology contains examples of artificial beings, mechanical servants, intelligent objects, and autonomous machines. While these were not AI systems in the modern scientific sense, they reveal an old human question: <em>Can intelligence be created artificially?</em></p>

                <h2>The Mathematical Foundation</h2>
                <p>During the 19th and early 20th centuries, researchers increasingly investigated whether human reasoning could be expressed through formal mathematical logic and symbols. If logical reasoning could be represented mathematically, perhaps machines could eventually perform some forms of reasoning.</p>

                <div class="callout-box">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <h4>The Crucial Insight</h4>
                    <p><strong>If intelligent behavior can be represented as information processing, perhaps a computer can reproduce some aspects of that behavior.</strong></p>
                  </div>
                </div>

                <h2>The Rise of Electronic Computing</h2>
                <p>The development of electronic computers in the mid-20th century changed everything. Computers could store information, perform calculations, follow instructions, manipulate symbols, and execute logical operations. Suddenly, mechanizing reasoning moved from philosophy to practical science.</p>
              `
            },
            {
              id: "ch2-t2",
              title: "Alan Turing and machine intelligence",
              content: `
                <p class="article-lead">One of the most important figures in the history of AI is British mathematician and computer scientist <strong>Alan Turing</strong>.</p>

                <h2>Turing's Fundamental Question</h2>
                <p>In 1950, Turing published an influential paper titled <em>"Computing Machinery and Intelligence."</em> He began with a provocative question: <strong>"Can machines think?"</strong></p>

                <h2>The Imitation Game (Turing Test)</h2>
                <p>Instead of defining "thinking", Turing proposed a practical evaluation. A human judge communicates via text with a machine and another human. If the judge cannot reliably distinguish the machine from the human based on conversation, the machine demonstrates significant intelligent behavior.</p>

                <div class="article-quote">
                  "Instead of asking 'Does the machine have a human mind?', Turing encouraged researchers to ask: 'Can the machine produce behavior indistinguishable from intelligent human behavior in a particular setting?'"
                </div>

                <h2>Turing and Learning Machines</h2>
                <p>Turing recognized that building an intelligent machine might be easier through <strong>learning</strong> rather than attempting to directly program adult-level intelligence manually. He envisioned a "child machine" that could learn from experience—a concept central to modern machine learning.</p>
              `
            },
            {
              id: "ch2-t3",
              title: "The Dartmouth Conference",
              content: `
                <p class="article-lead">The year <strong>1956</strong> is universally recognized as the formal birth of Artificial Intelligence as an academic research field.</p>

                <h2>The Landmark Dartmouth Workshop</h2>
                <p>Organized by John McCarthy, Marvin Minsky, Claude Shannon, and Nathaniel Rochester at Dartmouth College, this summer project brought together pioneers from mathematics, logic, psychology, computer science, and neuroscience.</p>

                <div class="callout-box">
                  <div class="callout-icon">🏛️</div>
                  <div class="callout-content">
                    <h4>Coining the Term "Artificial Intelligence"</h4>
                    <p>John McCarthy proposed the term <strong>"Artificial Intelligence"</strong> to describe the discipline aimed at creating machines that simulate aspects of human learning and intelligence.</p>
                  </div>
                </div>

                <h2>Early Optimism</h2>
                <p>The Dartmouth researchers were immensely optimistic, believing that major progress toward human-level intelligence could be achieved in a relatively short period. However, real-world intelligence turned out to be far more complex than anticipated.</p>
              `
            },
            {
              id: "ch2-t4",
              title: "Early AI systems",
              content: `
                <p class="article-lead">Following Dartmouth, researchers built early systems based on <strong>Symbolic AI</strong>—representing knowledge using symbols, explicit rules, and logical deductions.</p>

                <h2>Key Early Symbolic AI Systems</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Logic Theorist (1956):</strong> Developed by Newell, Simon, and Shaw to prove mathematical theorems using symbolic reasoning.</li>
                  <li><strong>General Problem Solver (GPS):</strong> Aimed at solving diverse problems using unified general strategies.</li>
                  <li><strong>ELIZA (1966):</strong> Created by Joseph Weizenbaum, simulating a psychotherapist via linguistic pattern-matching scripts.</li>
                  <li><strong>Early Game AI:</strong> Chess and checkers programs provided controlled environments with clear rules to test machine strategy.</li>
                </ul>

                <div class="article-quote">
                  "Early systems performed impressively in controlled puzzle environments, but stumbled when faced with the messy, unconstrained real world."
                </div>
              `
            },
            {
              id: "ch2-t5",
              title: "Expert systems",
              content: `
                <p class="article-lead">By the 1970s and 1980s, <strong>Expert Systems</strong> became the dominant commercial and academic AI approach, attempting to encode the knowledge of human domain experts into computer rules.</p>

                <h2>Architecture of an Expert System</h2>
                <p>An expert system consists of two main components:</p>

                <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">1. Knowledge Base</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Contains domain-specific facts, rules, and relationships (e.g., medical symptoms and diagnostic rules).</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">2. Inference Engine</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Applies logical rules to user input to deduce conclusions (e.g., <code>Facts + Rules → Inference → Conclusion</code>).</p>
                  </div>
                </div>

                <h2>MYCIN & The Knowledge Bottleneck</h2>
                <p>Systems like <strong>MYCIN</strong> (medical diagnosis) showed great success in narrow fields. However, expert systems suffered from the <strong>Knowledge Acquisition Bottleneck</strong>—extracting intuitive human expertise into hardcoded rules was laborious, rigid, and hard to maintain.</p>
              `
            },
            {
              id: "ch2-t6",
              title: "AI winters",
              content: `
                <p class="article-lead">The history of AI is marked by periods of immense hype followed by funding cuts and skepticism—known as <strong>AI Winters</strong>.</p>

                <h2>Causes of AI Winters</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Unrealistic Expectations:</strong> Overpromising fast human-level AI led to disappointment when systems struggled with common sense.</li>
                  <li><strong>Hardware Limitations:</strong> 1970s and 1980s computers lacked the memory and processing speed required for large datasets.</li>
                  <li><strong>Maintenance Costs:</strong> Expert systems with thousands of rigid rules proved too expensive and brittle for real-world enterprise updates.</li>
                </ul>

                <div class="callout-box">
                  <div class="callout-icon">❄️</div>
                  <div class="callout-content">
                    <h4>The Crucial Lesson</h4>
                    <p><strong>Intelligence is much harder to reproduce than it initially appears. A system can perform impressively in a controlled lab setting while still failing in the complex real world.</strong></p>
                  </div>
                </div>
              `
            },
            {
              id: "ch2-t7",
              title: "The rise of machine learning",
              content: `
                <p class="article-lead">In the 1990s, AI underwent a major paradigm shift: moving from <em>explicitly programming rules</em> to <em>learning patterns from data</em>.</p>

                <h2>The Paradigm Shift</h2>
                <p>Instead of humans writing every rule manually, machine learning algorithms analyze examples to discover statistical relationships automatically.</p>

                <h2>Core Machine Learning Paradigms</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Supervised Learning</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Learns mapping from labeled input-output pairs (e.g., <code>Image → Cat</code>).</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Unsupervised Learning</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Discovers hidden patterns and clusters in unlabeled data (e.g., customer segmentation).</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Reinforcement Learning</h4>
                    <p style="margin: 0; font-size: 0.95rem;">An agent learns optimal actions in an environment through reward and penalty feedback.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch2-t8",
              title: "Deep learning revolution",
              content: `
                <p class="article-lead">Beginning around 2012, <strong>Deep Learning</strong> revolutionized AI through the convergence of massive digital data, GPU parallel processing, and deep neural network architectures.</p>

                <h2>The 4 Pillars of the Deep Learning Breakthrough</h2>
                <p><strong>Big Data + Massive Computing Power + GPU Acceleration + Deep Neural Networks = Revolution</strong></p>

                <h2>AlexNet (2012)</h2>
                <p>In 2012, AlexNet (by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton) crushed the competition in the ImageNet image-recognition contest using GPUs and deep convolutional neural networks (CNNs), proving deep learning's superiority for vision, speech, and natural language.</p>

                <div class="callout-box">
                  <div class="callout-icon">🚀</div>
                  <div class="callout-content">
                    <h4>Automatic Feature Representation</h4>
                    <p>Instead of humans manually crafting image feature detectors, deep neural networks learn hierarchical representations directly from raw data (e.g., <strong>Pixels → Edges → Shapes → Parts → Objects</strong>).</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch2-t9",
              title: "Generative AI era",
              content: `
                <p class="article-lead">The modern era of AI is defined by <strong>Generative AI</strong> and <strong>Large Language Models (LLMs)</strong>—systems capable of creating new text, code, images, audio, and video.</p>

                <h2>The Transformer Architecture (2017)</h2>
                <p>Introduced in the landmark paper <em>"Attention Is All You Need"</em>, the <strong>Attention Mechanism</strong> allowed models to weigh relationships between all words in a sequence dynamically, enabling massive scalability.</p>

                <h2>Large Language Models (LLMs) & AI Agents</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Predictive Pre-training:</strong> Models learn language representations by predicting next tokens across massive datasets.</li>
                  <li><strong>Multimodal Generation:</strong> Systems generate high-quality prose, computer code, photorealistic images, and audio from natural language prompts.</li>
                  <li><strong>AI Agents:</strong> Beyond Q&A chatbots, modern AI agents autonomously plan multi-step workflows, use external tools, execute code, and solve complex goals.</li>
                </ul>

                <div class="article-quote">
                  "The history of AI is the history of asking whether intelligence can be mechanized. Today, AI has transitioned from hardcoded rules to global generative assistants and autonomous agents."
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 3,
          title: "How AI Actually Works",
          topics: [
            {
              id: "ch3-t1",
              title: "Data",
              content: `
                <p class="article-lead">When people use an AI system, the experience looks simple: <em>You give AI an input → AI gives you an answer.</em> Behind that simple interaction is a large technical process powered by <strong>Data</strong>.</p>

                <h2>What is Data?</h2>
                <p><strong>Data is the information from which an AI system learns, analyzes, or makes decisions.</strong> Data is the raw material of modern AI systems. Just as humans learn from experience and observation, AI learns patterns from digital data.</p>

                <h2>Types of Data</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Structured Data</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Organized into predefined rows and columns in spreadsheets and databases (e.g., age, income, purchase counts).</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Unstructured Data</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Does not fit into simple tables (e.g., photos, videos, audio recordings, books, social media posts).</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Labeled vs Unlabeled Data</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Labeled data includes desired target answers (e.g., <code>Photo → Cat</code>). Unlabeled data contains raw inputs without explicit targets.</p>
                  </div>
                </div>

                <div class="callout-box">
                  <div class="callout-icon">⚠️</div>
                  <div class="callout-content">
                    <h4>Data Quality: Garbage In, Garbage Out</h4>
                    <p>Bad or mislabeled data produces bad AI predictions. Data must go through: <strong>Collection → Cleaning → Transformation → Labeling → Preparation</strong> before training.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch3-t2",
              title: "Algorithms",
              content: `
                <p class="article-lead">An <strong>algorithm</strong> is a step-by-step procedure or set of rules for solving a problem. In AI, algorithms determine <em>how a system learns patterns from data</em>.</p>

                <h2>Algorithm vs Model</h2>
                <p>These two terms are frequently confused. Here is the key distinction:</p>

                <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color); text-align: left;">
                      <th style="padding: 0.75rem;">Component</th>
                      <th style="padding: 0.75rem;">Analogy</th>
                      <th style="padding: 0.75rem;">Role in AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Algorithm</strong></td>
                      <td style="padding: 0.75rem;">The Cooking Recipe</td>
                      <td style="padding: 0.75rem;">The mathematical procedure that learns patterns</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Data</strong></td>
                      <td style="padding: 0.75rem;">The Raw Ingredients</td>
                      <td style="padding: 0.75rem;">The training examples provided</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Model</strong></td>
                      <td style="padding: 0.75rem;">The Finished Dish</td>
                      <td style="padding: 0.75rem;">The final trained computational system</td>
                    </tr>
                  </tbody>
                </table>

                <p>Common AI algorithms include linear regression, decision trees, random forests, support vector machines, k-means clustering, and deep neural networks.</p>
              `
            },
            {
              id: "ch3-t3",
              title: "Models",
              content: `
                <p class="article-lead">An <strong>AI model</strong> is a trained computational system that has learned mathematical parameters and relationships from data, allowing it to process new unseen inputs.</p>

                <h2>Key Model Categories</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Classification Model:</strong> Answers categorical questions (e.g., <code>Spam</code> or <code>Not Spam</code>).</li>
                  <li><strong>Regression Model:</strong> Predicts continuous numerical values (e.g., estimated house price).</li>
                  <li><strong>Recommendation Model:</strong> Ranks items a user is most likely to prefer.</li>
                  <li><strong>Language Model:</strong> Generates next tokens or responses given textual prompts.</li>
                </ul>

                <div class="callout-box">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <h4>Model ≠ Database</h4>
                    <p>A database simply stores raw records. An AI model contains learned parameters (weights and biases) that represent patterns, allowing it to generalize to new data.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch3-t4",
              title: "Training",
              content: `
                <p class="article-lead"><strong>Training</strong> is the iterative process through which a machine learning model learns patterns by processing training examples, making predictions, measuring errors, and adjusting parameters.</p>

                <h2>The Training Loop</h2>
                <p>The model improves through a continuous optimization cycle:</p>

                <ol style="margin-left: 1.5rem; line-height: 1.8; margin-bottom: 1.5rem;">
                  <li><strong>Forward Pass:</strong> The model generates a prediction for a training input.</li>
                  <li><strong>Loss Calculation:</strong> A <strong>loss function</strong> measures the mathematical error between the prediction and the target answer.</li>
                  <li><strong>Gradient Descent:</strong> An optimization algorithm calculates error directions and updates model parameters to minimize loss.</li>
                  <li><strong>Epochs:</strong> One <strong>epoch</strong> is a full pass through the entire training dataset.</li>
                </ol>

                <div class="article-quote">
                  "A good AI model should generalize—learning useful underlying patterns that work on unseen data, rather than over-memorizing training examples (Overfitting)."
                </div>
              `
            },
            {
              id: "ch3-t5",
              title: "Testing",
              content: `
                <p class="article-lead">After training, we must evaluate whether the model actually generalizes to new, unseen data using <strong>Validation</strong> and <strong>Test datasets</strong>.</p>

                <h2>Data Splitting</h2>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Training Set</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Used by the algorithm to adjust weights and learn parameters.</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Validation Set</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Used during development to tune hyperparameters and compare model versions.</p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Test Set</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Held out strictly for final evaluation on unseen real-world inputs.</p>
                  </div>
                </div>

                <h2>Evaluation Metrics</h2>
                <p>Models are assessed using metrics like Accuracy, Precision, Recall, F1 Score, and Mean Squared Error (MSE).</p>
              `
            },
            {
              id: "ch3-t6",
              title: "Inference",
              content: `
                <p class="article-lead">Once a model is trained and deployed, running it on new user inputs to produce outputs is called <strong>Inference</strong>.</p>

                <h2>Training vs Inference</h2>
                <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color); text-align: left;">
                      <th style="padding: 0.75rem;">Stage</th>
                      <th style="padding: 0.75rem;">Action</th>
                      <th style="padding: 0.75rem;">Flow</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Training</strong></td>
                      <td style="padding: 0.75rem;">Model is learning & adjusting weights</td>
                      <td style="padding: 0.75rem;"><code>Data → Model adjusts parameters</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Inference</strong></td>
                      <td style="padding: 0.75rem;">Model is using learned parameters</td>
                      <td style="padding: 0.75rem;"><code>New Input → Trained Model → Output</code></td>
                    </tr>
                  </tbody>
                </table>

                <p>When you ask ChatGPT a question, upload an image for face unlock, or get a map route, you are executing <strong>Inference</strong>.</p>
              `
            },
            {
              id: "ch3-t7",
              title: "Predictions",
              content: `
                <p class="article-lead">A <strong>prediction</strong> is the output generated by a model for a given input. In AI, "prediction" means determining the most likely output based on learned statistical patterns.</p>

                <h2>Probabilistic Outputs</h2>
                <p>AI predictions are typically probabilistic confidence scores rather than absolute guaranteed truths.</p>

                <div class="callout-box">
                  <div class="callout-icon">⚠️</div>
                  <div class="callout-content">
                    <h4>Prediction is Not Truth</h4>
                    <p>An AI model can be highly confident and completely wrong. It produces outputs based on learned training patterns and lacks access to absolute ground truth. Critical domains (healthcare, law, safety) require human oversight.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch3-t8",
              title: "Feedback and improvement",
              content: `
                <p class="article-lead">AI systems are not static after launch. Real-world performance requires continuous <strong>Feedback and Improvement</strong>.</p>

                <h2>The Continuous AI Lifecycle Loop</h2>
                <p>Modern machine learning systems follow an iterative improvement cycle:</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin: 1.5rem 0; font-family: monospace; font-size: 0.95rem; line-height: 1.7;">
                  Collect Data → Train Model → Test Model → Deploy → Inference → Collect User Feedback → Identify Errors → Retrain & Update
                </div>

                <h2>Feedback Mechanisms</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>User Interactions:</strong> Clicks, skips, purchases, or explicit ratings (👍 / 👎).</li>
                  <li><strong>Reinforcement Learning from Human Feedback (RLHF):</strong> Aligning model outputs with human preferences.</li>
                  <li><strong>System Monitoring:</strong> Tracking model drift, new edge cases, and unexpected failures over time.</li>
                </ul>

                <div class="article-quote">
                  "The core cycle of modern AI is: Learn → Evaluate → Use → Observe → Improve → Learn again."
                </div>
              `
            }
          ]
        }
      ]
    },
    {
      partNumber: "Part II",
      title: "Core Technologies",
      chapters: [
        {
          chapterNumber: 4,
          title: "Machine Learning",
          topics: [
            {
              id: "ch4-t1",
              title: "What is machine learning?",
              content: `
                <p class="article-lead">Machine Learning (ML) is a branch of Artificial Intelligence in which computer systems learn patterns from data and use those learned patterns to make predictions, decisions, or generate outputs on new data.</p>
                
                <h2>Traditional Programming vs Machine Learning</h2>
                <p><strong>Traditional Programming:</strong> Rules + Data → Program → Output<br><strong>Machine Learning:</strong> Data + Examples → Learning Algorithm → Model → New Data → Prediction</p>

                <div class="callout-box">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <h4>Why Machine Learning is Powerful</h4>
                    <p>Machine learning excels when rules are difficult to write manually, data is abundant, patterns are complex, environments change, or human-designed rules would be too numerous.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch4-t2",
              title: "Supervised learning",
              content: `
                <p class="article-lead"><strong>Supervised learning</strong> is a machine-learning approach in which the model learns from labeled examples consisting of input-output pairs (<code>Input → Correct Output</code>).</p>
                
                <h2>Two Major Supervised Learning Tasks</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Classification:</strong> Predicting a discrete category (e.g., Spam / Not Spam, Fraud / Not Fraud).</li>
                  <li><strong>Regression:</strong> Predicting a continuous numerical value (e.g., house price, temperature, sales demand).</li>
                </ul>
              `
            },
            {
              id: "ch4-t3",
              title: "Unsupervised learning",
              content: `
                <p class="article-lead"><strong>Unsupervised learning</strong> uses data without predefined target labels and attempts to discover useful structure, clusters, or patterns within that data.</p>

                <h2>Applications</h2>
                <p>Common applications include customer segmentation, anomaly detection, document organization, pattern discovery, and data exploration.</p>
              `
            },
            {
              id: "ch4-t4",
              title: "Semi-supervised learning",
              content: `
                <p class="article-lead"><strong>Semi-supervised learning</strong> combines a small amount of labeled data with a large amount of unlabeled data.</p>

                <div class="callout-box">
                  <div class="callout-icon">⚖️</div>
                  <div class="callout-content">
                    <h4>Why Semi-Supervised Learning Matters</h4>
                    <p>In many real-world domains, collecting raw data is cheap, but obtaining high-quality expert labels is expensive. Semi-supervised learning leverages both effectively.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch4-t5",
              title: "Reinforcement learning",
              content: `
                <p class="article-lead"><strong>Reinforcement Learning (RL)</strong> is a learning paradigm where an agent learns optimal decision-making by interacting with an environment and receiving rewards or penalties.</p>

                <h2>The Feedback Cycle</h2>
                <p><code>State → Action → Environment → Reward → New State</code></p>
                <p>Unlike supervised learning (which provides exact correct answers), reinforcement learning provides reward feedback evaluating the consequences of actions.</p>
              `
            },
            {
              id: "ch4-t6",
              title: "Classification",
              content: `
                <p class="article-lead"><strong>Classification</strong> is a machine-learning task in which an input is assigned to one or more predefined categories.</p>

                <h2>Types of Classification</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Binary Classification:</strong> Two categories (e.g., Spam vs Inbox).</li>
                  <li><strong>Multi-Class Classification:</strong> More than two mutually exclusive categories (e.g., Cat, Dog, Horse, Bird).</li>
                  <li><strong>Multi-Label Classification:</strong> Inputs assigned multiple categories simultaneously (e.g., Dog + Car + Tree).</li>
                </ul>
              `
            },
            {
              id: "ch4-t7",
              title: "Regression",
              content: `
                <p class="article-lead"><strong>Regression</strong> is a machine-learning task used to predict a continuous numerical quantity (e.g., house price, salary, temperature, sales demand).</p>

                <h2>Simple Linear Regression</h2>
                <p>Modeled mathematically as: <code>ŷ = b₀ + b₁x</code> where <code>ŷ</code> is predicted output, <code>b₀</code> is intercept, and <code>b₁</code> is slope.</p>
              `
            },
            {
              id: "ch4-t8",
              title: "Clustering",
              content: `
                <p class="article-lead"><strong>Clustering</strong> is an unsupervised-learning technique that automatically groups similar data points together without predefined category labels.</p>

                <h2>K-Means Clustering</h2>
                <p>K-Means divides data into <em>K</em> clusters by iteratively assigning points to the nearest cluster center and updating centers until convergence.</p>
              `
            },
            {
              id: "ch4-t9",
              title: "Real-world applications",
              content: `
                <p class="article-lead">Machine learning is applied across healthcare, banking & finance, e-commerce, education, transportation, social media, cybersecurity, agriculture, manufacturing, and entertainment.</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin-top: 1rem;">
                  <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Key Takeaway</h4>
                  <p style="margin: 0; font-size: 0.95rem;">Machine Learning teaches computers to learn from examples and experience represented by data, rather than requiring humans to explicitly program every rule.</p>
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 5,
          title: "Neural Networks",
          topics: [
            {
              id: "ch5-t1",
              title: "The artificial neuron",
              content: `
                <p class="article-lead">An <strong>artificial neuron</strong> is a mathematical unit that receives inputs, multiplies them by learned weights, adds a bias, and passes the sum through an activation function.</p>

                <h2>Neuron Formula</h2>
                <p><code>z = (w₁x₁ + w₂x₂ + ... + wₙxₙ) + b</code><br><code>a = f(z)</code></p>
                <p>Where <strong>x</strong> is input, <strong>w</strong> is weight, <strong>b</strong> is bias, <strong>f</strong> is activation function, and <strong>a</strong> is output activation.</p>
              `
            },
            {
              id: "ch5-t2",
              title: "Layers",
              content: `
                <p class="article-lead">A neural network connects neurons into layers: <strong>Input Layer → Hidden Layers → Output Layer</strong>.</p>

                <h2>Hierarchical Representation</h2>
                <p>Hidden layers extract increasingly complex features from data (e.g., <strong>Pixels → Edges → Shapes → Objects</strong>). Networks with many hidden layers are called <strong>Deep Neural Networks</strong>.</p>
              `
            },
            {
              id: "ch5-t3",
              title: "Weights and biases",
              content: `
                <p class="article-lead"><strong>Weights</strong> determine how strongly an input influences a neuron. <strong>Biases</strong> shift the activation baseline to provide mathematical flexibility.</p>
                <p>During training, weights and biases are iteratively updated to minimize prediction error.</p>
              `
            },
            {
              id: "ch5-t4",
              title: "Activation functions",
              content: `
                <p class="article-lead">Activation functions introduce <strong>nonlinearity</strong> into neural networks, allowing them to model complex real-world relationships.</p>

                <h2>Common Activation Functions</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>ReLU:</strong> <code>max(0, x)</code> — Most popular in deep hidden layers.</li>
                  <li><strong>Sigmoid:</strong> Maps outputs into <code>0 to 1</code> — Common for binary classification outputs.</li>
                  <li><strong>Softmax:</strong> Converts output vectors into normalized probability distributions summing to 1.</li>
                </ul>
              `
            },
            {
              id: "ch5-t5",
              title: "Forward propagation",
              content: `
                <p class="article-lead"><strong>Forward propagation</strong> is the process of passing input data forward through the network layers to calculate an output prediction.</p>
                <p>Flow: <code>Input → Layer 1 → Layer 2 → ... → Output Prediction</code></p>
              `
            },
            {
              id: "ch5-t6",
              title: "Loss functions",
              content: `
                <p class="article-lead">A <strong>loss function</strong> measures the mathematical difference between the model's prediction and the true target answer.</p>

                <h2>Common Loss Functions</h2>
                <p><strong>Cross-Entropy Loss</strong> (for classification) and <strong>Mean Squared Error (MSE)</strong> (for regression).</p>
              `
            },
            {
              id: "ch5-t7",
              title: "Backpropagation",
              content: `
                <p class="article-lead"><strong>Backpropagation</strong> is the algorithm for efficiently computing loss gradients with respect to every weight and bias using the chain rule of calculus.</p>

                <h2>Backpropagation vs Gradient Descent</h2>
                <p><strong>Backpropagation:</strong> Computes the gradient error directions.<br><strong>Gradient Descent / Optimizer (e.g. Adam):</strong> Uses gradients to update weights and biases.</p>
              `
            },
            {
              id: "ch5-t8",
              title: "Training a neural network",
              content: `
                <p class="article-lead">Training is the complete repeated cycle of optimization across epochs and mini-batches.</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin: 1.5rem 0; font-family: monospace; font-size: 0.95rem; line-height: 1.7;">
                  Input Data → Forward Pass → Loss Calculation → Backpropagation → Gradient Computation → Weight Updates
                </div>

                <div class="article-quote">
                  "A neural network learns not because someone manually writes every rule into it, but because its parameters are repeatedly adjusted so that its outputs become better according to a chosen objective."
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 6,
          title: "Deep Learning",
          topics: [
            {
              id: "ch6-t1",
              title: "What makes deep learning different?",
              content: `
                <p class="article-lead"><strong>Deep Learning</strong> is a subfield of machine learning that uses multi-layered neural networks to learn hierarchical representations directly from raw data.</p>
                
                <h2>Representation Learning vs Feature Engineering</h2>
                <p><strong>Traditional ML:</strong> Requires humans to manually craft features.<br><strong>Deep Learning:</strong> Automatically discovers representations (e.g., <code>Pixels → Edges → Shapes → Objects</code>).</p>

                <div class="callout-box">
                  <div class="callout-icon">🚀</div>
                  <div class="callout-content">
                    <h4>Pillars of Deep Learning Power</h4>
                    <p>Driven by massive datasets, GPU hardware acceleration, advanced optimization algorithms, modern software frameworks, and model scale.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch6-t2",
              title: "Deep neural networks",
              content: `
                <p class="article-lead">A <strong>Deep Neural Network (DNN)</strong> contains multiple hidden layers between input and output, enabling hierarchical representation learning across millions or billions of parameters.</p>

                <h2>Hierarchical Representation Flow</h2>
                <p><code>Raw Input → Early Layers (Simple Edges) → Middle Layers (Textures/Shapes) → Deep Layers (Objects/Concepts) → Prediction</code></p>
              `
            },
            {
              id: "ch6-t3",
              title: "CNNs",
              content: `
                <p class="article-lead"><strong>Convolutional Neural Networks (CNNs)</strong> process grid-like spatial data (images/video) using localized convolution filters, shared parameters, and feature maps.</p>

                <h2>Convolution & Pooling</h2>
                <p>Kernels slide across pixel matrices to extract localized visual patterns (edges, corners, features), while pooling layers downsample representation size.</p>
              `
            },
            {
              id: "ch6-t4",
              title: "RNNs",
              content: `
                <p class="article-lead"><strong>Recurrent Neural Networks (RNNs)</strong> process sequential data (text, time-series, audio) by maintaining an internal hidden state across time steps (<code>h_t = f(x_t, h_{t-1})</code>).</p>

                <div class="callout-box">
                  <div class="callout-icon">⚠️</div>
                  <div class="callout-content">
                    <h4>Vanishing & Exploding Gradients</h4>
                    <p>Standard RNNs struggle with long sequences because backpropagating gradients over many steps can exponentially decay to zero or explode to infinity.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch6-t5",
              title: "LSTMs",
              content: `
                <p class="article-lead"><strong>Long Short-Term Memory (LSTM)</strong> networks solve the vanishing gradient problem using gated cell states (Forget Gate, Input Gate, Output Gate) to regulate long-range memory.</p>

                <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color); text-align: left;">
                      <th style="padding: 0.75rem;">Gate</th>
                      <th style="padding: 0.75rem;">Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Forget Gate</strong></td>
                      <td style="padding: 0.75rem;">Discards irrelevant past memory</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Input Gate</strong></td>
                      <td style="padding: 0.75rem;">Stores new incoming information into cell state</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;"><strong>Output Gate</strong></td>
                      <td style="padding: 0.75rem;">Exposes cell state memory to current hidden output</td>
                    </tr>
                  </tbody>
                </table>
              `
            },
            {
              id: "ch6-t6",
              title: "Transformers",
              content: `
                <p class="article-lead">Introduced in 2017 (<em>"Attention Is All You Need"</em>), <strong>Transformers</strong> use parallel self-attention mechanisms (Query, Key, Value) to model token relationships regardless of distance.</p>

                <h2>Self-Attention Formula</h2>
                <p><code>Attention(Q,K,V) = softmax((QKᵀ) / √dₖ) V</code></p>
                <p>Transformers enable massive parallel GPU training and form the core foundation of modern Large Language Models (LLMs) and Multimodal AI.</p>
              `
            },
            {
              id: "ch6-t7",
              title: "Applications of deep learning",
              content: `
                <p class="article-lead">Deep learning powers Computer Vision, Speech Recognition, NLP, Generative AI, Healthcare, Autonomous Vehicles, Recommendation Systems, Cybersecurity, Robotics, and Scientific Research.</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin-top: 1rem;">
                  <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Architecture Comparison Summary</h4>
                  <p style="margin: 0; font-size: 0.95rem;"><strong>CNN:</strong> Spatial Image Patterns | <strong>RNN/LSTM:</strong> Sequential Steps | <strong>Transformer:</strong> Parallel Self-Attention Relationships</p>
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 7,
          title: "Natural Language Processing",
          topics: [
            {
              id: "ch7-t1",
              title: "How computers understand language",
              content: `
                <p class="article-lead">Natural Language Processing (NLP) enables computers to process, analyze, understand, and generate human language by converting raw text into numerical representations.</p>

                <h2>Challenges in Language</h2>
                <p>Language involves contextual ambiguity (e.g., <em>river bank</em> vs <em>financial bank</em>), word order sensitivity, and implicit cultural context.</p>
              `
            },
            {
              id: "ch7-t2",
              title: "Text processing",
              content: `
                <p class="article-lead">Text processing prepares raw text for machine learning models through normalization, tokenization, language detection, and formatting.</p>
              `
            },
            {
              id: "ch7-t3",
              title: "Tokens",
              content: `
                <p class="article-lead">A <strong>token</strong> is a fundamental unit of text (word, subword, or character) processed by a language model.</p>

                <h2>Subword Tokenization</h2>
                <p>Subword tokenization (e.g., BPE, WordPiece) splits rare or unknown words into smaller sub-units (e.g., <code>intelligence → intelli + gence</code>), allowing models to handle infinite vocabularies efficiently.</p>
              `
            },
            {
              id: "ch7-t4",
              title: "Embeddings",
              content: `
                <p class="article-lead">An <strong>embedding</strong> is a high-dimensional continuous vector representation that maps tokens into geometric space based on semantic meaning and context.</p>

                <h2>Semantic Search</h2>
                <p>Embeddings power semantic search by matching query meaning vectors rather than exact keyword text strings.</p>
              `
            },
            {
              id: "ch7-t5",
              title: "Sentiment analysis",
              content: `
                <p class="article-lead"><strong>Sentiment analysis</strong> classifies text by emotional tone or attitude (Positive, Negative, Neutral).</p>
                <p>Used extensively in product reviews, brand monitoring, social media analytics, and customer feedback.</p>
              `
            },
            {
              id: "ch7-t6",
              title: "Translation",
              content: `
                <p class="article-lead"><strong>Neural Machine Translation (NMT)</strong> translates text across languages by learning deep sequence-to-sequence mappings with attention mechanisms.</p>
              `
            },
            {
              id: "ch7-t7",
              title: "Text generation",
              content: `
                <p class="article-lead"><strong>Autoregressive text generation</strong> predicts likely next tokens iteratively given prior context.</p>

                <div class="callout-box">
                  <div class="callout-icon">⚠️</div>
                  <div class="callout-content">
                    <h4>Hallucination</h4>
                    <p>Language models generate fluent continuations based on statistical probabilities; fluency does not guarantee factual truth. Unverified confident outputs are termed <strong>hallucinations</strong>.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch7-t8",
              title: "Chatbots",
              content: `
                <p class="article-lead">Modern AI Chatbots combine Large Language Models with conversation context, <strong>Retrieval-Augmented Generation (RAG)</strong>, and external API tool integration.</p>

                <p>Flow: <code>User Query → RAG Document Search → LLM Context Reasoning → Tool Execution → Output Response</code></p>
              `
            },
            {
              id: "ch7-t9",
              title: "Large Language Models",
              content: `
                <p class="article-lead">A <strong>Large Language Model (LLM)</strong> is a massive Transformer neural network trained on vast text datasets across billions of parameters.</p>

                <h2>The LLM Pipeline</h2>
                <p><code>Pretraining (Predict Next Token) → Instruction Tuning → RLHF Alignment → Fine-tuned Foundation Assistant</code></p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin-top: 1rem;">
                  <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Key Takeaway</h4>
                  <p style="margin: 0; font-size: 0.95rem;">Language AI transforms raw text into token embeddings, processes contextual relationships via Transformers, and generates output continuations based on learned semantic patterns.</p>
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 8,
          title: "Computer Vision",
          topics: [
            {
              id: "ch8-t1",
              title: "How machines see",
              content: `
                <p class="article-lead"><strong>Computer Vision</strong> enables machines to process, analyze, and interpret visual data (images, video, camera streams) by converting sensory inputs into numerical matrices.</p>

                <h2>Human vs Machine Vision</h2>
                <p>Humans perceive visual scenes through eyes and neurological processing. Machines process pixel matrices, extracting edges, textures, shapes, and object structures hierarchically.</p>
              `
            },
            {
              id: "ch8-t2",
              title: "Images as data",
              content: `
                <p class="article-lead">An image is a multi-dimensional array or tensor of numerical pixel values.</p>

                <h2>Pixel Representations</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Grayscale:</strong> Single channel matrix with intensity values from <code>0 (Black)</code> to <code>255 (White)</code>.</li>
                  <li><strong>RGB Color:</strong> 3-channel tensor (Red, Green, Blue) of size <code>Height × Width × 3</code>.</li>
                  <li><strong>Data Augmentation:</strong> Transformations (cropping, flipping, rotation) expand training data diversity.</li>
                </ul>
              `
            },
            {
              id: "ch8-t3",
              title: "Image classification",
              content: `
                <p class="article-lead"><strong>Image Classification</strong> assigns one or more category labels to an entire input image.</p>
                <p>Task types: Binary classification, Multi-class classification, Multi-label classification.</p>
              `
            },
            {
              id: "ch8-t4",
              title: "Object detection",
              content: `
                <p class="article-lead"><strong>Object Detection</strong> identifies what objects are present in an image AND locates their spatial boundaries using bounding boxes.</p>

                <h2>Classification vs Detection</h2>
                <p><strong>Classification:</strong> <em>What is in the image?</em> (e.g. <code>Dog</code>)<br><strong>Detection:</strong> <em>What is in the image and where is it located?</em> (e.g. <code>Dog → Bounding Box Coordinates</code>)</p>
              `
            },
            {
              id: "ch8-t5",
              title: "Facial recognition",
              content: `
                <p class="article-lead"><strong>Facial Recognition</strong> analyzes facial features to verify or identify individuals by mapping face images into numerical vector embeddings.</p>
                <p>Distinction: <strong>Face Detection</strong> finds <em>where</em> faces are; <strong>Face Recognition</strong> verifies <em>who</em> the person is.</p>
              `
            },
            {
              id: "ch8-t6",
              title: "Image segmentation",
              content: `
                <p class="article-lead"><strong>Image Segmentation</strong> classifies individual pixels or regions in an image according to their object category or instance.</p>

                <h2>Segmentation Types</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Semantic Segmentation:</strong> Assigns every pixel a category label (e.g., Road, Sky, Car).</li>
                  <li><strong>Instance Segmentation:</strong> Distinguishes separate individual object instances (e.g., Car 1 vs Car 2).</li>
                  <li><strong>Panoptic Segmentation:</strong> Combines semantic and instance segmentation.</li>
                </ul>
              `
            },
            {
              id: "ch8-t7",
              title: "Medical imaging",
              content: `
                <p class="article-lead">Computer vision assists clinicians by analyzing medical scans (X-rays, CT, MRI, Ultrasound, Pathology) for diagnostic pattern recognition, tumor segmentation, and measurement analysis.</p>
              `
            },
            {
              id: "ch8-t8",
              title: "Autonomous vehicles",
              content: `
                <p class="article-lead">Autonomous driving relies on multi-sensor perception pipelines (Cameras, LiDAR, Radar, Ultrasonic) combined via <strong>Sensor Fusion</strong> to detect lanes, vehicles, traffic signs, and pedestrians in real time.</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin-top: 1rem;">
                  <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Vision Hierarchy Summary</h4>
                  <p style="margin: 0; font-size: 0.95rem;"><strong>Classification:</strong> What is this? | <strong>Detection:</strong> What & Where? | <strong>Segmentation:</strong> Which exact pixels?</p>
                </div>
              `
            }
          ]
        }
      ]
    },
    {
      partNumber: "Part III",
      title: "Modern AI",
      chapters: [
        {
          chapterNumber: 9,
          title: "Generative AI",
          topics: [
            {
              id: "ch9-t1",
              title: "What is Generative AI?",
              content: `
                <p class="article-lead">Generative Artificial Intelligence (<strong>Generative AI</strong>) is a major branch of modern AI focused on <strong>creating new content</strong>. Unlike systems that only classify or predict outcomes, generative models can produce text, images, audio, video, code, 3D objects, and synthetic data.</p>

                <h2>What is Generative AI?</h2>
                <p>Generative AI learns patterns from existing data and uses those learned patterns to generate new content. The basic pipeline is:</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin: 1.5rem 0; font-family: monospace; font-size: 0.95rem; line-height: 1.7;">
                  Training Data → Learning Patterns → Generative Model → Prompt/Input → Generated Content
                </div>

                <h2>Traditional AI vs Generative AI</h2>
                <p>Imagine an image containing a cat:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Traditional AI (Analyzes / Predicts):</strong> Outputs label <code>"Cat"</code>.</li>
                  <li><strong>Generative AI (Creates):</strong> Generates descriptive prose: <em>"This is a small orange cat sitting beside a window"</em>, or synthesizes an entirely new photorealistic image of a cat.</li>
                </ul>
              `
            },
            {
              id: "ch9-t2",
              title: "Generative vs predictive AI",
              content: `
                <p class="article-lead">Understanding the distinction between <strong>Predictive AI</strong> (estimating outcomes) and <strong>Generative AI</strong> (creating new content) is fundamental to modern AI architecture.</p>

                <h2>Detailed Comparison</h2>
                <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color); text-align: left;">
                      <th style="padding: 0.75rem;">Predictive AI</th>
                      <th style="padding: 0.75rem;">Generative AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;">Predicts an outcome or numerical value</td>
                      <td style="padding: 0.75rem;">Generates original content or media</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;">Estimates what may happen (Classification/Regression)</td>
                      <td style="padding: 0.75rem;">Produces new synthetic outputs</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem;">Fraud detection, churn prediction, demand forecasting</td>
                      <td style="padding: 0.75rem;">Writing emails, generating images/code/videos</td>
                    </tr>
                  </tbody>
                </table>

                <div class="callout-box">
                  <div class="callout-icon">🤝</div>
                  <div class="callout-content">
                    <h4>Combining Predictive & Generative AI</h4>
                    <p>Modern enterprise platforms combine both: <code>Customer Data → Predictive AI (Identify Likely Product) → Generative AI (Write Personalized Advertisement)</code>.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch9-t3",
              title: "Text generation",
              content: `
                <p class="article-lead">Text generation involves producing natural-language prose from instructions, prompts, documents, or conversation history using probabilistic autoregressive models.</p>

                <h2>Autoregressive Next-Token Prediction</h2>
                <p>Language models process text as <strong>tokens</strong> and predict what token should come next by calculating probability distributions:</p>

                <p style="font-family: monospace; text-align: center; background: var(--bg-surface); padding: 0.75rem; border-radius: var(--radius-sm);">P(next token | previous context)</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md); font-family: monospace; font-size: 0.95rem; margin: 1.5rem 0;">
                  "Artificial intelligence is" → "changing" → "the" → "world"
                </div>

                <div class="callout-box">
                  <div class="callout-icon">⚠️</div>
                  <div class="callout-content">
                    <h4>Hallucinations & Factuality</h4>
                    <p>Fluent language does not guarantee factual accuracy. A model can produce highly convincing, grammatical, yet completely false outputs called <strong>hallucinations</strong>.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch9-t4",
              title: "Image generation",
              content: `
                <p class="article-lead">Image generation creates high-resolution visual artwork or photorealistic images from textual descriptions or reference images.</p>

                <h2>Diffusion Models</h2>
                <p>Modern text-to-image systems rely primarily on <strong>Diffusion Models</strong>. During training, the model learns to reverse a process where noise is added to images:</p>

                <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Forward Process (Adding Noise)</h4>
                    <p style="margin: 0; font-size: 0.95rem;"><code>Clean Image → Add Gaussian Noise → More Noise → Pure Random Noise</code></p>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.35rem;">Reverse Process (Denoising Generation)</h4>
                    <p style="margin: 0; font-size: 0.95rem;"><code>Pure Noise → Denoising Steps (Text Guidance) → Structural Emergence → Photorealistic Image</code></p>
                  </div>
                </div>

                <h2>Image-to-Image Generation</h2>
                <p>Generative AI can also modify existing images for style transfer, background replacement, restoration, and concept editing.</p>
              `
            },
            {
              id: "ch9-t5",
              title: "Audio generation",
              content: `
                <p class="article-lead">Audio generative AI synthesizes human speech, music compositions, and sound effects from text prompts or symbolic representations.</p>

                <h2>Core Audio Modalities</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Text-to-Speech (TTS):</strong> Converts written text into natural human voice performances with realistic pitch, cadence, and intonation.</li>
                  <li><strong>Music Generation:</strong> Generates instrumental or vocal tracks with structured melody, rhythm, harmony, and timbre.</li>
                  <li><strong>Sound Effects Generation:</strong> Produces synthetic acoustic waveforms (e.g. rain on metal roofs, sci-fi engine hums).</li>
                </ul>
              `
            },
            {
              id: "ch9-t6",
              title: "Video generation",
              content: `
                <p class="article-lead">Video generation extends image synthesis across time, modeling both <strong>Spatial Information</strong> (what each frame looks like) and <strong>Temporal Information</strong> (how objects move frame-to-frame).</p>

                <h2>Temporal Consistency Challenge</h2>
                <p>At 30 frames per second, a 10-second clip requires 300 frames. A robust video model must preserve <strong>Temporal Consistency</strong> so characters, clothing, lighting, and physics remain coherent across all frames.</p>

                <div class="article-quote">
                  "Maintaining character identity and physical motion without visual glitches across 300 consecutive frames makes video generation significantly more computationally demanding than single-image generation."
                </div>
              `
            },
            {
              id: "ch9-t7",
              title: "Code generation",
              content: `
                <p class="article-lead">AI code generation converts natural-language requirements into working software programs across languages like Python, JavaScript, HTML, C#, Java, and SQL.</p>

                <h2>Capabilities in Software Development</h2>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
                  <li><strong>Code Completion:</strong> Autocompleting functions in real-time inside IDEs.</li>
                  <li><strong>Code Explanation & Debugging:</strong> Explaining complex algorithms and identifying logic errors.</li>
                  <li><strong>Refactoring & Test Generation:</strong> Writing clean unit tests and optimizing performance.</li>
                </ul>

                <div class="callout-box">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <h4>Assistance, Not Automatic Correctness</h4>
                    <p>AI-generated code must always be reviewed, tested, and validated by developers to ensure security, efficiency, and functional correctness.</p>
                  </div>
                </div>
              `
            },
            {
              id: "ch9-t8",
              title: "How generative models learn",
              content: `
                <p class="article-lead">A generative model learns patterns by adjusting billions of parameters across training iterations to minimize loss and optimize generation quality.</p>

                <h2>The 7-Step Generative Learning Cycle</h2>
                <ol style="margin-left: 1.5rem; line-height: 1.8; margin-bottom: 1.5rem;">
                  <li><strong>Data Collection:</strong> Gathering massive multimodal text, image, audio, or video datasets.</li>
                  <li><strong>Numerical Representation:</strong> Converting data into tokens, pixel tensors, or latent vectors.</li>
                  <li><strong>Training Objective:</strong> Defining next-token prediction, noise reduction, or latent reconstruction.</li>
                  <li><strong>Loss Calculation:</strong> Measuring mathematical error between model outputs and training targets.</li>
                  <li><strong>Backpropagation:</strong> Computing error gradients across network layers.</li>
                  <li><strong>Parameter Updates:</strong> Optimization algorithms adjust weights and biases.</li>
                  <li><strong>Iterative Scaling:</strong> Repeating the training loop across billions of parameters.</li>
                </ol>

                <h2>Model Architecture Families</h2>
                <p>Generative AI leverages <strong>Autoregressive Models</strong> (Sequential text), <strong>Diffusion Models</strong> (Denoising images), <strong>GANs</strong> (Generator vs Discriminator competition), and <strong>Variational Autoencoders (VAEs)</strong> (Latent space mappings).</p>

                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin-top: 1rem;">
                  <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">The Ultimate Takeaway</h4>
                  <p style="margin: 0; font-size: 0.95rem;"><strong>Training Data → Learned Latent Patterns → Generative Model → Prompt Input → New Content Synthesis</strong></p>
                </div>
              `
            }
          ]
        },
        {
          chapterNumber: 10,
          title: "Large Language Models",
          topics: [
            { id: "ch10-t1", title: "What is an LLM?", content: null },
            { id: "ch10-t2", title: "Training massive models", content: null },
            { id: "ch10-t3", title: "Tokens and embeddings", content: null },
            { id: "ch10-t4", title: "Transformers", content: null },
            { id: "ch10-t5", title: "Attention mechanism", content: null },
            { id: "ch10-t6", title: "Context windows", content: null },
            { id: "ch10-t7", title: "Prompting", content: null },
            { id: "ch10-t8", title: "Fine-tuning", content: null },
            { id: "ch10-t9", title: "Hallucinations", content: null }
          ]
        },
        {
          chapterNumber: 11,
          title: "AI Assistants and Agents",
          topics: [
            { id: "ch11-t1", title: "AI assistants", content: null },
            { id: "ch11-t2", title: "AI agents", content: null },
            { id: "ch11-t3", title: "Tools and APIs", content: null },
            { id: "ch11-t4", title: "Planning", content: null },
            { id: "ch11-t5", title: "Memory", content: null },
            { id: "ch11-t6", title: "Reasoning", content: null },
            { id: "ch11-t7", title: "Autonomous workflows", content: null },
            { id: "ch11-t8", title: "Agentic AI", content: null }
          ]
        },
        {
          chapterNumber: 12,
          title: "Robotics and Autonomous Systems",
          topics: [
            { id: "ch12-t1", title: "AI in robots", content: null },
            { id: "ch12-t2", title: "Sensors", content: null },
            { id: "ch12-t3", title: "Perception", content: null },
            { id: "ch12-t4", title: "Decision-making", content: null },
            { id: "ch12-t5", title: "Motion planning", content: null },
            { id: "ch12-t6", title: "Self-driving vehicles", content: null },
            { id: "ch12-t7", title: "Industrial robots", content: null },
            { id: "ch12-t8", title: "Humanoid robots", content: null }
          ]
        }
      ]
    },
    {
      partNumber: "Part IV",
      title: "Building AI Systems",
      chapters: [
        {
          chapterNumber: 13,
          title: "Data: The Fuel of AI",
          topics: [
            { id: "ch13-t1", title: "What is data?", content: null },
            { id: "ch13-t2", title: "Structured and unstructured data", content: null },
            { id: "ch13-t3", title: "Data collection", content: null },
            { id: "ch13-t4", title: "Data cleaning", content: null },
            { id: "ch13-t5", title: "Feature engineering", content: null },
            { id: "ch13-t6", title: "Data labeling", content: null },
            { id: "ch13-t7", title: "Training datasets", content: null },
            { id: "ch13-t8", title: "Data quality", content: null }
          ]
        },
        {
          chapterNumber: 14,
          title: "Training an AI Model",
          topics: [
            { id: "ch14-t1", title: "Defining the problem", content: null },
            { id: "ch14-t2", title: "Collecting data", content: null },
            { id: "ch14-t3", title: "Preparing data", content: null },
            { id: "ch14-t4", title: "Selecting an algorithm", content: null },
            { id: "ch14-t5", title: "Training", content: null },
            { id: "ch14-t6", title: "Validation", content: null },
            { id: "ch14-t7", title: "Testing", content: null },
            { id: "ch14-t8", title: "Deployment", content: null },
            { id: "ch14-t9", title: "Monitoring", content: null }
          ]
        },
        {
          chapterNumber: 15,
          title: "Evaluating AI",
          topics: [
            { id: "ch15-t1", title: "Accuracy", content: null },
            { id: "ch15-t2", title: "Precision", content: null },
            { id: "ch15-t3", title: "Recall", content: null },
            { id: "ch15-t4", title: "F1 score", content: null },
            { id: "ch15-t5", title: "Confusion matrix", content: null },
            { id: "ch15-t6", title: "Mean squared error", content: null },
            { id: "ch15-t7", title: "Model evaluation", content: null },
            { id: "ch15-t8", title: "Overfitting", content: null },
            { id: "ch15-t9", title: "Underfitting", content: null }
          ]
        },
        {
          chapterNumber: 16,
          title: "AI Programming",
          topics: [
            { id: "ch16-t1", title: "Python for AI", content: null },
            { id: "ch16-t2", title: "NumPy", content: null },
            { id: "ch16-t3", title: "Pandas", content: null },
            { id: "ch16-t4", title: "Matplotlib", content: null },
            { id: "ch16-t5", title: "Scikit-learn", content: null },
            { id: "ch16-t6", title: "TensorFlow", content: null },
            { id: "ch16-t7", title: "PyTorch", content: null },
            { id: "ch16-t8", title: "APIs and AI services", content: null }
          ]
        }
      ]
    },
    {
      partNumber: "Part V",
      title: "AI in the Real World",
      chapters: [
        {
          chapterNumber: 17,
          title: "AI in Education",
          topics: [
            { id: "ch17-t1", title: "Personalized learning", content: null },
            { id: "ch17-t2", title: "AI tutors", content: null },
            { id: "ch17-t3", title: "Automated assessment", content: null },
            { id: "ch17-t4", title: "Content generation", content: null },
            { id: "ch17-t5", title: "Student analytics", content: null },
            { id: "ch17-t6", title: "Future classrooms", content: null }
          ]
        },
        {
          chapterNumber: 18,
          title: "AI in Healthcare",
          topics: [
            { id: "ch18-t1", title: "Disease detection", content: null },
            { id: "ch18-t2", title: "Medical imaging", content: null },
            { id: "ch18-t3", title: "Drug discovery", content: null },
            { id: "ch18-t4", title: "Personalized medicine", content: null },
            { id: "ch18-t5", title: "Surgical robotics", content: null },
            { id: "ch18-t6", title: "Challenges and risks", content: null }
          ]
        },
        {
          chapterNumber: 19,
          title: "AI in Business",
          topics: [
            { id: "ch19-t1", title: "Automation", content: null },
            { id: "ch19-t2", title: "Customer service", content: null },
            { id: "ch19-t3", title: "Recommendation systems", content: null },
            { id: "ch19-t4", title: "Fraud detection", content: null },
            { id: "ch19-t5", title: "Marketing", content: null },
            { id: "ch19-t6", title: "Business intelligence", content: null }
          ]
        },
        {
          chapterNumber: 20,
          title: "AI in Science and Research",
          topics: [
            { id: "ch20-t1", title: "Scientific discovery", content: null },
            { id: "ch20-t2", title: "Climate modeling", content: null },
            { id: "ch20-t3", title: "Astronomy", content: null },
            { id: "ch20-t4", title: "Protein prediction", content: null },
            { id: "ch20-t5", title: "Simulations", content: null },
            { id: "ch20-t6", title: "AI-assisted research", content: null }
          ]
        }
      ]
    },
    {
      partNumber: "Part VI",
      title: "The Problems and Risks of AI",
      chapters: [
        {
          chapterNumber: 21,
          title: "AI Bias",
          topics: [
            { id: "ch21-t1", title: "What is algorithmic bias?", content: null },
            { id: "ch21-t2", title: "Sources of bias", content: null },
            { id: "ch21-t3", title: "Biased datasets", content: null },
            { id: "ch21-t4", title: "Examples", content: null },
            { id: "ch21-t5", title: "Fairness", content: null },
            { id: "ch21-t6", title: "Reducing bias", content: null }
          ]
        },
        {
          chapterNumber: 22,
          title: "Privacy and Security",
          topics: [
            { id: "ch22-t1", title: "Data privacy", content: null },
            { id: "ch22-t2", title: "Facial recognition", content: null },
            { id: "ch22-t3", title: "Personal information", content: null },
            { id: "ch22-t4", title: "AI surveillance", content: null },
            { id: "ch22-t5", title: "Adversarial attacks", content: null },
            { id: "ch22-t6", title: "AI security", content: null }
          ]
        },
        {
          chapterNumber: 23,
          title: "AI and Employment",
          topics: [
            { id: "ch23-t1", title: "Automation", content: null },
            { id: "ch23-t2", title: "Jobs likely to change", content: null },
            { id: "ch23-t3", title: "New careers", content: null },
            { id: "ch23-t4", title: "Human-AI collaboration", content: null },
            { id: "ch23-t5", title: "The future of work", content: null }
          ]
        },
        {
          chapterNumber: 24,
          title: "AI Ethics",
          topics: [
            { id: "ch24-t1", title: "Who is responsible for AI?", content: null },
            { id: "ch24-t2", title: "Transparency", content: null },
            { id: "ch24-t3", title: "Explainability", content: null },
            { id: "ch24-t4", title: "Fairness", content: null },
            { id: "ch24-t5", title: "Accountability", content: null },
            { id: "ch24-t6", title: "Human control", content: null }
          ]
        }
      ]
    },
    {
      partNumber: "Part VII",
      title: "The Future",
      chapters: [
        {
          chapterNumber: 25,
          title: "Artificial General Intelligence",
          topics: [
            { id: "ch25-t1", title: "Narrow AI", content: null },
            { id: "ch25-t2", title: "General AI", content: null },
            { id: "ch25-t3", title: "Superintelligence", content: null },
            { id: "ch25-t4", title: "What would AGI mean?", content: null },
            { id: "ch25-t5", title: "Scientific and philosophical questions", content: null }
          ]
        },
        {
          chapterNumber: 26,
          title: "AI and Humanity",
          topics: [
            { id: "ch26-t1", title: "Can machines truly think?", content: null },
            { id: "ch26-t2", title: "Can machines understand?", content: null },
            { id: "ch26-t3", title: "Consciousness and AI", content: null },
            { id: "ch26-t4", title: "Human intelligence vs artificial intelligence", content: null },
            { id: "ch26-t5", title: "The meaning of intelligence", content: null }
          ]
        },
        {
          chapterNumber: 27,
          title: "The Future of Artificial Intelligence",
          topics: [
            { id: "ch27-t1", title: "Multimodal AI", content: null },
            { id: "ch27-t2", title: "AI agents", content: null },
            { id: "ch27-t3", title: "Robotics", content: null },
            { id: "ch27-t4", title: "Personalized AI", content: null },
            { id: "ch27-t5", title: "Scientific AI", content: null },
            { id: "ch27-t6", title: "Human-AI collaboration", content: null },
            { id: "ch27-t7", title: "Possible futures", content: null }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.AIBookData = AIBookData;
}
