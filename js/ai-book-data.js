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
            { id: "ch2-t1", title: "The birth of the idea", content: null },
            { id: "ch2-t2", title: "Alan Turing and machine intelligence", content: null },
            { id: "ch2-t3", title: "The Dartmouth Conference", content: null },
            { id: "ch2-t4", title: "Early AI systems", content: null },
            { id: "ch2-t5", title: "Expert systems", content: null },
            { id: "ch2-t6", title: "AI winters", content: null },
            { id: "ch2-t7", title: "The rise of machine learning", content: null },
            { id: "ch2-t8", title: "Deep learning revolution", content: null },
            { id: "ch2-t9", title: "Generative AI era", content: null }
          ]
        },
        {
          chapterNumber: 3,
          title: "How AI Actually Works",
          topics: [
            { id: "ch3-t1", title: "Data", content: null },
            { id: "ch3-t2", title: "Algorithms", content: null },
            { id: "ch3-t3", title: "Models", content: null },
            { id: "ch3-t4", title: "Training", content: null },
            { id: "ch3-t5", title: "Testing", content: null },
            { id: "ch3-t6", title: "Inference", content: null },
            { id: "ch3-t7", title: "Predictions", content: null },
            { id: "ch3-t8", title: "Feedback and improvement", content: null }
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
            { id: "ch4-t1", title: "What is machine learning?", content: null },
            { id: "ch4-t2", title: "Supervised learning", content: null },
            { id: "ch4-t3", title: "Unsupervised learning", content: null },
            { id: "ch4-t4", title: "Semi-supervised learning", content: null },
            { id: "ch4-t5", title: "Reinforcement learning", content: null },
            { id: "ch4-t6", title: "Classification", content: null },
            { id: "ch4-t7", title: "Regression", content: null },
            { id: "ch4-t8", title: "Clustering", content: null },
            { id: "ch4-t9", title: "Real-world applications", content: null }
          ]
        },
        {
          chapterNumber: 5,
          title: "Neural Networks",
          topics: [
            { id: "ch5-t1", title: "The artificial neuron", content: null },
            { id: "ch5-t2", title: "Layers", content: null },
            { id: "ch5-t3", title: "Weights and biases", content: null },
            { id: "ch5-t4", title: "Activation functions", content: null },
            { id: "ch5-t5", title: "Forward propagation", content: null },
            { id: "ch5-t6", title: "Loss functions", content: null },
            { id: "ch5-t7", title: "Backpropagation", content: null },
            { id: "ch5-t8", title: "Training a neural network", content: null }
          ]
        },
        {
          chapterNumber: 6,
          title: "Deep Learning",
          topics: [
            { id: "ch6-t1", title: "What makes deep learning different?", content: null },
            { id: "ch6-t2", title: "Deep neural networks", content: null },
            { id: "ch6-t3", title: "CNNs", content: null },
            { id: "ch6-t4", title: "RNNs", content: null },
            { id: "ch6-t5", title: "LSTMs", content: null },
            { id: "ch6-t6", title: "Transformers", content: null },
            { id: "ch6-t7", title: "Applications of deep learning", content: null }
          ]
        },
        {
          chapterNumber: 7,
          title: "Natural Language Processing",
          topics: [
            { id: "ch7-t1", title: "How computers understand language", content: null },
            { id: "ch7-t2", title: "Text processing", content: null },
            { id: "ch7-t3", title: "Tokens", content: null },
            { id: "ch7-t4", title: "Embeddings", content: null },
            { id: "ch7-t5", title: "Sentiment analysis", content: null },
            { id: "ch7-t6", title: "Translation", content: null },
            { id: "ch7-t7", title: "Text generation", content: null },
            { id: "ch7-t8", title: "Chatbots", content: null },
            { id: "ch7-t9", title: "Large Language Models", content: null }
          ]
        },
        {
          chapterNumber: 8,
          title: "Computer Vision",
          topics: [
            { id: "ch8-t1", title: "How machines see", content: null },
            { id: "ch8-t2", title: "Images as data", content: null },
            { id: "ch8-t3", title: "Image classification", content: null },
            { id: "ch8-t4", title: "Object detection", content: null },
            { id: "ch8-t5", title: "Facial recognition", content: null },
            { id: "ch8-t6", title: "Image segmentation", content: null },
            { id: "ch8-t7", title: "Medical imaging", content: null },
            { id: "ch8-t8", title: "Autonomous vehicles", content: null }
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
            { id: "ch9-t1", title: "What is Generative AI?", content: null },
            { id: "ch9-t2", title: "Generative vs predictive AI", content: null },
            { id: "ch9-t3", title: "Text generation", content: null },
            { id: "ch9-t4", title: "Image generation", content: null },
            { id: "ch9-t5", title: "Audio generation", content: null },
            { id: "ch9-t6", title: "Video generation", content: null },
            { id: "ch9-t7", title: "Code generation", content: null },
            { id: "ch9-t8", title: "How generative models learn", content: null }
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
