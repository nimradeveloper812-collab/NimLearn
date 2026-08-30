/**
 * NimLearn - Artificial Intelligence Complete Book Syllabus & Table of Contents
 * Structure: 7 Parts, 27 Chapters, 180+ Sub-topics
 * Content is set to null until provided by the user.
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
            { id: "ch1-t1", title: "Definition of AI", content: null },
            { id: "ch1-t2", title: "Intelligence in humans vs machines", content: null },
            { id: "ch1-t3", title: "Why AI was created", content: null },
            { id: "ch1-t4", title: "Everyday examples of AI", content: null },
            { id: "ch1-t5", title: "AI around us", content: null },
            { id: "ch1-t6", title: "AI vs traditional software", content: null }
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
