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

    category: "AI / Climate Tech / Social Impact",

    shortDescription:
      "An AI-powered flood risk and emergency response platform designed to improve flood awareness, preparedness, accessibility, and community safety across Nigeria.",

    description:
      "FloodGuard AI is a Nigeria-focused AI-powered flood awareness and emergency response platform that combines artificial intelligence, flood-risk information, emergency guidance, national risk visualization, and multi-channel accessibility through web, SMS, USSD, and WhatsApp concepts.",

    technologies: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning Concepts",
      "Generative AI",
      "Data Analysis",
      "Risk Analysis",
      "Streamlit",
      "Web Technology",
      "USSD",
      "SMS",
      "WhatsApp",
    ],

    image: "/projects/floodguard-ai.png",

    github: "https://github.com/Inda-Obanyi/floodguard-ninja",

    demo: "https://3e7e648e.mydala.app",

    featured: true,

    problem:
      "Flooding is a recurring environmental and humanitarian challenge in Nigeria, affecting homes, infrastructure, agriculture, businesses, transportation, and livelihoods. A major challenge is the difficulty many communities face in accessing timely, understandable, and actionable flood-risk and emergency information, especially users with limited internet access or without smartphones.",

    approach: [
      "Identified the gap between flood-risk information and actionable community safety guidance.",
      "Designed a Nigeria-focused AI-powered flood awareness and emergency response platform.",
      "Designed a national flood-risk visualization concept covering Nigerian states and the Federal Capital Territory.",
      "Integrated an AI assistant for natural-language flood safety and preparedness support.",
      "Added emergency preparedness and response information for before, during, and after flood events.",
      "Included emergency shelter and resource information to support users during potential emergencies.",
      "Designed multi-channel accessibility through web, SMS, USSD, and WhatsApp.",
      "Considered users with limited internet connectivity and users without smartphones.",
      "Designed the solution as an MVP that can later integrate real-time environmental datasets and machine-learning prediction models.",
      "Structured the platform for potential future expansion into a nationwide AI-powered flood early-warning ecosystem.",
    ],

    pipeline: [
      "Problem Identification",
      "Flood-Risk Research",
      "Data & Information Analysis",
      "Risk Awareness Design",
      "AI Integration",
      "National Risk Visualization",
      "Emergency Information",
      "AI Assistant",
      "SMS Accessibility",
      "USSD Accessibility",
      "WhatsApp Integration Concept",
      "Deployment & Scalability Planning",
    ],

    model: {
      name: "AI-Powered Flood Risk & Emergency Information Platform",
      type: "AI / Data-Driven Risk Awareness System",
      target: "Flood Awareness, Preparedness, and Emergency Support",
    },

    evaluation: {
      metrics: [
        "Risk Awareness",
        "Accessibility",
        "AI Assistance",
        "Emergency Support",
        "Multi-Channel Communication",
        "Scalability",
      ],

      focus:
        "FloodGuard AI was evaluated at the MVP and solution-design level, focusing on risk awareness, accessibility, AI-assisted support, emergency preparedness, multi-channel communication, and scalability. The current version is not presented as a fully deployed predictive flood model, so no fabricated model accuracy or performance metrics are reported.",
    },

    metrics: [],

    highlights: [
      "Nigeria-focused flood-risk awareness",
      "AI-powered flood information assistant",
      "National flood-risk visualization concept",
      "Emergency preparedness and safety guidance",
      "Emergency shelter and resource information",
      "SMS accessibility concept",
      "USSD accessibility concept",
      "WhatsApp communication concept",
      "Designed for future ML-based flood prediction",
      "Scalable social-impact architecture",
    ],

    results:
      "FloodGuard AI demonstrates how artificial intelligence, data-driven risk awareness, emergency information, and multi-channel accessibility can be combined into a practical social-impact solution for flood preparedness and community safety. The MVP establishes a foundation for future integration of real-time environmental data, machine-learning prediction, automated alerts, and advanced GIS capabilities.",

    lessonsLearned: [
      "AI solutions should be designed around real-world problems and measurable human impact.",
      "Accessibility is critical when building emergency and public-safety technology.",
      "Reliable environmental and geographic data are essential for meaningful flood-risk prediction.",
      "AI becomes more useful when it is connected to relevant domain information and actionable guidance.",
      "Prototype development helps validate a solution concept before investing in complex predictive infrastructure.",
    ],
  },
];

export default projects;