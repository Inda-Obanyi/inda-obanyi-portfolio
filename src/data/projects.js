const projects = [
// ============================================================
// 1. FRAUDGUARD AI
// ============================================================
{
  id: "fraudguard-ai",

  title: "FraudGuard AI",

  category: "Machine Learning / FinTech / AI Engineering",

  shortDescription:
    "An end-to-end AI-powered mobile money fraud detection and monitoring platform that combines machine learning, FastAPI inference, Streamlit analytics, secure authentication, transaction persistence, and audit logging.",

  description:
    "FraudGuard AI is an end-to-end machine learning and AI engineering platform designed to identify potentially fraudulent mobile money transactions and provide an operational interface for analyzing, monitoring, and reviewing transaction risk. The system combines a supervised machine learning workflow with XGBoost, a FastAPI inference backend, a Streamlit enterprise dashboard, SQLite persistence, role-based access control, bcrypt password hashing, transaction monitoring, analytics, and audit logging. The project demonstrates how a machine learning model can be transformed from an experimental workflow into a functional financial security application.",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "XGBoost",
    "Machine Learning",
    "Feature Engineering",
    "SMOTE",
    "FastAPI",
    "Streamlit",
    "SQLite",
    "Bcrypt",
    "Role-Based Access Control",
    "Audit Logging",
  ],

  image: "/projects/fraudguard-ai.png",

  github:
    "https://github.com/Inda-Obanyi/mobile-money-fraud-prediction",

  demo:
    "https://fraudguard-streamlit.onrender.com/",

  featured: true,

  problem:
    "The growth of mobile money and digital financial transactions creates a need for systems that can detect suspicious activity quickly and consistently. Manual transaction review becomes difficult to scale as transaction volume increases. Fraud detection models can help identify suspicious patterns, estimate fraud probability, classify transaction risk, and prioritize transactions for further review.",

  approach: [
    "Defined the mobile money fraud detection problem and target variable.",
    "Loaded, inspected, and explored transaction data.",
    "Performed data cleaning and exploratory data analysis.",
    "Analyzed transaction behavior and fraud-related patterns.",
    "Engineered transaction and balance-related features.",
    "Prepared categorical and numerical variables for machine learning.",
    "Addressed class imbalance using appropriate resampling techniques including SMOTE.",
    "Trained and compared multiple supervised classification algorithms.",
    "Evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC.",
    "Performed hyperparameter tuning during model development.",
    "Selected XGBoost as the application model.",
    "Persisted the trained model and supporting preprocessing artifacts.",
    "Integrated the trained model into a FastAPI inference service.",
    "Built a Streamlit enterprise dashboard for transaction analysis and monitoring.",
    "Implemented transaction persistence using SQLite.",
    "Added authentication, role-based access control, monitoring, filtering, analytics, and audit logging.",
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
    "Model Training",
    "Model Comparison",
    "Hyperparameter Tuning",
    "Model Evaluation",
    "Model Selection",
    "Model Persistence",
    "FastAPI Inference",
    "Fraud Prediction",
    "Risk Classification",
    "Transaction Persistence",
    "Monitoring & Analytics",
    "Authentication & RBAC",
    "Audit Logging",
    "Deployment",
  ],

  model: {
    name: "XGBoost",
    type: "Binary Classification",
    target: "Fraud vs Legitimate Transaction",
  },

  evaluation: {
    modelsCompared: [
      {
        name: "Gradient Boosting",
        accuracy: "1.00",
        precision: "0.86",
        recall: "1.00",
        f1Score: "0.92",
        rocAuc: "1.00",
      },
      {
        name: "XGBoost",
        accuracy: "1.00",
        precision: "0.90",
        recall: "1.00",
        f1Score: "0.95",
        rocAuc: "1.00",
      },
      {
        name: "Random Forest",
        accuracy: "1.00",
        precision: "0.98",
        recall: "1.00",
        f1Score: "0.99",
        rocAuc: "1.00",
      },
      {
        name: "Extra Trees",
        accuracy: "1.00",
        precision: "0.92",
        recall: "0.98",
        f1Score: "0.95",
        rocAuc: "1.00",
      },
      {
        name: "LightGBM",
        accuracy: "1.00",
        precision: "0.86",
        recall: "1.00",
        f1Score: "0.92",
        rocAuc: "1.00",
      },
      {
        name: "Decision Tree",
        accuracy: "1.00",
        precision: "0.93",
        recall: "1.00",
        f1Score: "0.96",
        rocAuc: "1.00",
      },
      {
        name: "Logistic Regression",
        accuracy: "0.97",
        precision: "0.04",
        recall: "0.91",
        f1Score: "0.07",
        rocAuc: "0.99",
      },
      {
        name: "Tuned Random Forest",
        accuracy: "0.35",
        precision: "0.00",
        recall: "0.98",
        f1Score: "0.00",
        rocAuc: "0.63",
      },
    ],

    metrics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1-Score",
      "ROC-AUC",
    ],

    focus:
      "XGBoost was selected as the application model following the model-development and evaluation workflow. The reported XGBoost evaluation results were 100% accuracy, 90% precision, 100% recall, 95% F1-score, and 100% ROC-AUC. Fraud detection evaluation emphasizes precision, recall, and F1-score because both missed fraud and unnecessary fraud alerts can have significant operational consequences. The model comparison is included to demonstrate the experimentation process and the trade-offs between different classification algorithms.",
  },

  metrics: [
    {
      label: "Accuracy",
      value: "100%",
    },
    {
      label: "Precision",
      value: "90%",
    },
    {
      label: "Recall",
      value: "100%",
    },
    {
      label: "F1 Score",
      value: "95%",
    },
    {
      label: "ROC AUC",
      value: "100%",
    },
  ],

  results:
    "FraudGuard AI evolved from a machine learning experiment into a functional fraud-monitoring application. The platform provides transaction-level fraud predictions, fraud probability scoring, risk classification, persistent transaction records, monitoring dashboards, filtering and analytics, authenticated user access, role-based permissions, and enterprise audit logging. The application is currently positioned as a functional MVP and portfolio project.",

  lessonsLearned: [
    "How to translate a real-world financial security problem into a supervised machine learning workflow.",
    "How feature engineering and preprocessing influence fraud classification performance.",
    "Why class imbalance must be handled carefully when building fraud detection systems.",
    "How to compare multiple classification algorithms using fraud-specific evaluation metrics.",
    "How hyperparameter tuning can change model behavior and why tuned models must be evaluated critically rather than assumed to be better.",
    "How to expose a trained machine learning model through a FastAPI inference API.",
    "How to integrate machine learning inference into an interactive Streamlit application.",
    "How authentication, role-based access control, persistence, monitoring, and audit logging turn an ML model into a practical application.",
    "How to design machine learning systems with deployment, usability, security, and operational requirements in mind.",
  ],

  highlights: [
    "End-to-end ML application",
    "Mobile money fraud detection",
    "XGBoost classification",
    "Model comparison",
    "Hyperparameter tuning",
    "SMOTE / class imbalance handling",
    "FastAPI inference backend",
    "Streamlit enterprise dashboard",
    "Fraud probability scoring",
    "Risk classification",
    "Transaction monitoring & analytics",
    "SQLite transaction persistence",
    "Secure authentication",
    "Role-based access control",
    "Bcrypt password hashing",
    "Audit & security logging",
    "CSV export",
  ],
},


  // ============================================================
  // 2. RESUME SCREENING CLASSIFIER
  // ============================================================
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

    problem:
      "Recruiters often have to review large numbers of resumes manually. This project explores how machine learning can assist the initial screening process by classifying resumes into Fit and Not Fit categories.",

    approach: [
      "Defined the recruitment screening problem.",
      "Loaded and explored the resume dataset.",
      "Performed data cleaning and data quality checks.",
      "Conducted exploratory data analysis.",
      "Engineered relevant features for candidate classification.",
      "Preprocessed numerical and categorical features.",
      "Handled class imbalance using SMOTE.",
      "Split the dataset into training and testing sets.",
      "Trained and compared classification models.",
      "Evaluated models using classification performance metrics.",
      "Selected the best-performing model.",
      "Prepared the prediction pipeline for Streamlit deployment.",
    ],

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

    model: {
      name: "Best Performing Classification Model",
      type: "Binary Classification",
      target: "Fit vs Not Fit",
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
        "The classification models were evaluated using accuracy, precision, recall, F1-score, and confusion matrix analysis. Particular attention was given to precision and recall because incorrectly classifying qualified or unsuitable candidates can affect the effectiveness of an automated screening system.",
    },

    metrics: [],

    highlights: [
      "Automated candidate screening",
      "Class imbalance handling with SMOTE",
      "Feature engineering",
      "Classification model comparison",
      "Interactive Streamlit application",
    ],

    results:
      "The project produced an end-to-end machine learning classification pipeline capable of predicting candidate suitability and provides a foundation for an interactive recruitment screening application.",

    lessonsLearned: [
      "The importance of careful preprocessing before model training.",
      "Why class imbalance can significantly affect classification performance.",
      "How SMOTE can be used to improve representation of minority classes.",
      "The importance of evaluating classification models beyond accuracy.",
      "How machine learning models can be prepared for practical deployment.",
    ],
  },


  // ============================================================
  // 3. AIRLINE CUSTOMER SATISFACTION
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
      "Cleaned the dataset and prepared relevant variables.",
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
        "The model was evaluated using standard classification metrics while feature coefficients were analyzed to understand which service-related variables were associated with customer satisfaction.",
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
  // 4. FLOODGUARD AI
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
      "Explored environmental and historical data for flood-risk analysis.",
      "Designed an AI-assisted flood awareness and risk information system.",
      "Designed a national flood-risk visualization concept.",
      "Included emergency shelter and resource information.",
      "Designed an AI chatbot for user assistance.",
      "Explored web, SMS, USSD, and WhatsApp communication channels.",
      "Designed the solution with accessibility for users without smartphones in mind.",
      "Planned the solution for broader deployment across Nigeria.",
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
    ],
  },
];

export default projects;