export const projects = [
  {
    title: "Financial Risk Predictor",
    summary:
      "Java-based Random Forest predicting financial distress with data imputation, bootstrapping, and tailored recommendations.",
    tags: ["Java", "Random Forest", "ML", "CSV"],
    repo: "https://github.com/luckyguam/FinancialStatusPredictionApplication",
  },
  {
    title: "Community Health Data Query System",
    summary:
      "Java app + SQL on AWS that turns natural language into SQL to explore community health datasets with dynamic visualization.",
    tags: ["Java", "SQL", "AWS", "NLP"],
    repo: "https://github.com/luckyguam/Community-Health-Data-Query-System",
  },
  {
    title: "Inspirational Calendar",
    summary:
      "Node.js app integrating Google Calendar (OAuth 2.0) and a quotes API to show daily inspiration alongside events.",
    tags: ["Node.js", "OAuth 2.0", "API"],
  },
] as const;
