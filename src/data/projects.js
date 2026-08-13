const projects = [
  {
  id: "fraudguard-ai",

  title: "FraudGuard AI",

  category: "Machine Learning / FinTech",

  shortDescription:
    "A machine learning-powered mobile money fraud detection system designed to identify suspicious transaction patterns and support safer digital payments.",

  description:
    "FraudGuard AI is a machine learning application that analyzes mobile money transaction patterns to identify potentially fraudulent activities. The project demonstrates how supervised machine learning, feature engineering, class-imbalance handling, model evaluation, and deployment can be applied to a real-world financial security problem.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Machine Learning",
    "Feature Engineering",
    "Streamlit",
  ],

  image: "/projects/fraudguard-ai.png",

  github:
    "https://github.com/Inda-Obanyi/mobile-money-fraud-prediction",

  demo: "",

  featured: true,

  problem:
    "The growth of mobile money and digital financial transactions has increased the need for intelligent systems capable of identifying suspicious transaction patterns. Manual review alone can be slow and difficult to scale.",

  approach: [
    "Defined the mobile money fraud detection problem.",
    "Loaded and explored transaction data.",
    "Performed data cleaning and exploratory data analysis.",
    "Analyzed transaction patterns and relevant fraud indicators.",
    "Engineered features for fraud classification.",
    "Preprocessed the dataset for machine learning.",
    "Addressed class imbalance where necessary.",
    "Split the dataset into training and testing sets.",
    "Trained and compared classification models.",
    "Evaluated models using fraud-detection metrics.",
    "Selected the best-performing model.",
    "Prepared the prediction pipeline for Streamlit deployment.",
  ],

  pipeline: [
    "Problem Definition",
    "Data Loading",
    "Data Understanding",
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Feature Engineering",
    "Data Preprocessing",
    "Class Imbalance Handling",
    "Train-Test Split",
    "Model Training",
    "Model Evaluation",
    "Model Selection",
    "Fraud Prediction",
    "Deployment",
  ],

  model: {
    name: "Best Performing Classification Model",
    type: "Binary Classification",
    target: "Fraud vs Legitimate",
  },

  evaluation: {
    metrics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1-Score",
      "Confusion Matrix",
    ],
    focus:
      "The model was evaluated using classification metrics with particular attention to precision, recall, and F1-score because fraud detection requires careful consideration of both false positives and false negatives.",
  },

  metrics: [],

  highlights: [
    "Mobile money fraud detection",
    "Transaction pattern analysis",
    "Feature engineering",
    "Class imbalance handling",
    "Classification model evaluation",
    "Interactive Streamlit application",
  ],

  results:
    "FraudGuard AI produced an end-to-end machine learning pipeline for identifying potentially fraudulent transactions and demonstrated how AI can be applied to improve digital financial security.",

  lessonsLearned: [
    "How machine learning can be applied to real-world financial fraud detection problems.",
    "The importance of feature engineering when identifying suspicious transaction patterns.",
    "Why class imbalance requires careful consideration in fraud classification problems.",
    "Why precision, recall, and F1-score are particularly important in fraud detection.",
    "How trained machine learning models can be integrated into interactive applications.",
    "The importance of considering practical deployment when developing machine learning systems.",
  ],
},
{
  id: "resume-screening",

  title: "Resume Screening Classifier",

  category: "Machine Learning / Recruitment",

  shortDescription:
    "An intelligent machine learning system that classifies candidates as Fit or Not Fit based on relevant resume and job-related features.",

  description:
    "A machine learning classification system designed to support the initial recruitment screening process by identifying candidates whose qualifications and resume features align with a target role.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "SMOTE",
    "Feature Engineering",
    "Classification",
    "Streamlit",
  ],

  image: "/projects/resume-screening.png",

  github: "",

  demo: "",

  featured: true,

  /* =====================================================
     PROBLEM
  ====================================================== */

  problem:
    "Recruiters often have to review large numbers of resumes manually. This project explores how machine learning can assist the initial screening process by classifying resumes into Fit and Not Fit categories.",

  /* =====================================================
     APPROACH
  ====================================================== */

  approach: [
    "Defined the recruitment screening problem.",
    "Loaded and explored the resume dataset.",
    "Performed data cleaning and data quality checks.",
    "Conducted exploratory data analysis to understand the dataset.",
    "Engineered relevant features for candidate classification.",
    "Preprocessed numerical and categorical features.",
    "Handled class imbalance using SMOTE.",
    "Split the dataset into training and testing sets.",
    "Trained and compared classification models.",
    "Evaluated models using classification performance metrics.",
    "Selected the best-performing model.",
    "Prepared the prediction pipeline for Streamlit deployment.",
  ],

  /* =====================================================
     MACHINE LEARNING PIPELINE
  ====================================================== */

  pipeline: [
    "Business Problem Understanding",
    "Dataset Loading",
    "Data Understanding",
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Feature Engineering",
    "Data Preprocessing",
    "Class Imbalance Handling",
    "SMOTE",
    "Train-Test Split",
    "Model Training",
    "Model Evaluation",
    "Best Model Selection",
    "Prediction System",
    "Deployment Preparation",
  ],

  /* =====================================================
     MODEL
  ====================================================== */

  model: {
    name: "Best Performing Classification Model",
    type: "Binary Classification",
    target: "Fit vs Not Fit",
  },

  /* =====================================================
     EVALUATION
  ====================================================== */

  evaluation: {
    metrics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1-Score",
      "Confusion Matrix",
    ],

    focus:
      "The classification models were evaluated using accuracy, precision, recall, F1-score, and confusion matrix analysis. Particular attention was given to precision and recall because incorrectly classifying qualified or unsuitable candidates can affect the effectiveness of an automated screening system.",
  },
  
  metrics: [],

  /* =====================================================
     RESULTS
  ====================================================== */

  results:
    "The project produced an end-to-end machine learning classification pipeline capable of predicting candidate suitability and provides a foundation for an interactive recruitment screening application.",

  /* =====================================================
     LESSONS LEARNED
  ====================================================== */

  lessonsLearned: [
    "The importance of careful preprocessing before model training.",
    "Why class imbalance can significantly affect classification performance.",
    "How SMOTE can be used to improve representation of minority classes.",
    "The importance of evaluating classification models beyond accuracy.",
    "How machine learning models can be prepared for practical deployment.",
    "The importance of designing machine learning systems around real-world user needs.",
  ],

  /* =====================================================
     PROJECT HIGHLIGHTS
  ====================================================== */

  highlights: [
    "Automated candidate screening",
    "Binary classification",
    "Class imbalance handling with SMOTE",
    "Feature engineering",
    "Classification model comparison",
    "Model evaluation using multiple metrics",
    "Interactive Streamlit application",
    "End-to-end ML pipeline",
  ],
},
  // ============================================================
  // AIRLINE CUSTOMER SATISFACTION
  // ============================================================

  {
    id: "airline-satisfaction",

    title: "Airline Customer Satisfaction Prediction",

    category: "Machine Learning / Customer Analytics",

    shortDescription:
      "A classification model that predicts airline customer satisfaction and identifies important service factors influencing passenger experience.",

    description:
      "A supervised machine learning project that uses passenger and service-related features to predict whether an airline customer is satisfied or dissatisfied and identify factors associated with the customer experience.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Logistic Regression",
      "Feature Engineering",
      "Data Analysis",
    ],

    image: "/projects/airline-satisfaction.png",

    github: "",

    demo: "",

    featured: true,

    problem:
      "Airlines collect large amounts of passenger feedback and service information. Machine learning can help identify patterns associated with customer satisfaction and provide insights that can support service improvement.",

    approach: [
      "Loaded and explored the airline customer satisfaction dataset.",
      "Inspected variables, data types, and data quality.",
      "Cleaned the dataset and prepared the relevant variables.",
      "Performed exploratory data analysis.",
      "Identified relevant customer-experience features.",
      "Encoded categorical variables for machine learning.",
      "Prepared the dataset for classification.",
      "Split the data into training and testing sets.",
      "Trained a Logistic Regression classifier.",
      "Evaluated the classifier using classification metrics.",
      "Analyzed influential features and model coefficients.",
      "Translated model findings into business recommendations.",
    ],

    pipeline: [
      "Data Loading",
      "Data Understanding",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Categorical Encoding",
      "Train-Test Split",
      "Logistic Regression",
      "Model Evaluation",
      "Feature Analysis",
      "Business Recommendations",
    ],

    model: {
      name: "Logistic Regression",
      type: "Binary Classification",
      target: "Customer Satisfaction",
    },

    evaluation: {
      metrics: [
        "Accuracy",
        "Precision",
        "Recall",
        "F1-Score",
        "Confusion Matrix",
      ],

      focus:
        "The model was evaluated using multiple classification metrics to understand its ability to correctly distinguish satisfied and dissatisfied passengers. Feature analysis was also used to identify service factors associated with customer satisfaction.",
    },

    metrics: [],

    highlights: [
      "Logistic Regression",
      "Customer satisfaction prediction",
      "Feature engineering",
      "Categorical encoding",
      "Feature analysis",
      "Business recommendations",
    ],

    results:
      "The analysis identified service-related variables such as inflight entertainment, onboard service, check-in service, seat comfort, and ease of online booking as important factors associated with customer satisfaction.",

    lessonsLearned: [
      "How logistic regression can be applied to real-world classification problems.",
      "The importance of preprocessing categorical variables.",
      "How model coefficients can provide useful business insights.",
      "Why model evaluation should use multiple classification metrics.",
      "How machine learning results can be translated into practical recommendations.",
    ],
  },

  // ============================================================
  // FLOODGUARD AI
  // ============================================================

  {
    id: "floodguard-ai",

    title: "FloodGuard AI",

    category: "AI for Social Impact",

    shortDescription:
      "An AI-powered flood risk and emergency response solution designed to improve flood awareness, preparedness, and community safety.",

    description:
      "FloodGuard AI is a technology solution focused on combining artificial intelligence, data, emergency communication, and digital platforms to help communities prepare for and respond to flood risks.",

    technologies: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
      "Risk Analysis",
      "Streamlit",
      "Web Technology",
      "USSD",
      "SMS",
      "WhatsApp",
    ],

    image: "/projects/floodguard-ai.png",

    github: "",

    demo: "",

    featured: true,

    problem:
      "Flooding can cause significant damage to communities, infrastructure, homes, and livelihoods. Access to timely and understandable risk information can help people make better safety decisions before and during flood emergencies.",

    approach: [
      "Identified key flood-risk and emergency-response requirements.",
      "Explored the use of environmental and historical data for flood-risk analysis.",
      "Designed an AI-assisted flood awareness and risk information system.",
      "Designed a national flood-risk visualization concept.",
      "Included emergency shelter and resource information.",
      "Designed an AI chatbot for user assistance.",
      "Explored communication channels including web, SMS, USSD, and WhatsApp.",
      "Designed the solution with accessibility for users without smartphones in mind.",
      "Planned the system for broader deployment across Nigeria.",
    ],

    pipeline: [
      "Problem Identification",
      "Data Collection",
      "Data Analysis",
      "Risk Assessment",
      "AI Integration",
      "Risk Visualization",
      "Emergency Information",
      "AI Chatbot",
      "SMS Integration",
      "USSD Integration",
      "WhatsApp Integration",
      "Deployment Planning",
    ],

    model: {
      name: "AI-Assisted Risk Analysis System",
      type: "AI / Data-Driven Risk Assessment",
      target: "Flood Risk Awareness and Emergency Support",
    },

    evaluation: {
      metrics: [
        "Risk Assessment Framework",
        "Data-Driven Analysis",
        "Accessibility",
        "Emergency Response Support",
        "Multi-Channel Communication",
      ],

      focus:
        "FloodGuard AI was evaluated at the solution-design level, focusing on how effectively the proposed system could combine risk analysis, accessibility, emergency communication, and AI-assisted support. Since the current version is a concept and prototype rather than a fully deployed predictive flood model, no fabricated model accuracy metrics are presented.",
    },

    metrics: [],

    highlights: [
      "Flood-risk awareness",
      "AI-assisted emergency support",
      "National risk visualization concept",
      "AI chatbot",
      "SMS and USSD accessibility",
      "WhatsApp integration concept",
      "Emergency shelter information",
    ],

    results:
      "FloodGuard AI demonstrates how AI, data, and multiple communication channels can be combined to create a practical social-impact solution for flood awareness, preparedness, and emergency response.",

    lessonsLearned: [
      "How technology solutions should consider users with different levels of digital access.",
      "The importance of combining AI with reliable data and communication systems.",
      "How emergency systems need to prioritize accessibility and timely information.",
      "How AI can be applied to real-world social-impact problems.",
      "The importance of clearly distinguishing between a prototype concept and a validated predictive model.",
    ],
  },
];

export default projects;