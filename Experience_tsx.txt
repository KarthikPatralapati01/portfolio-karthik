"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HomeButton from "./HomeButton";

const experiences = [
  {
    title: "Software Engineer - Web & Data Systems",
    company: "DVR Softek",
    period: "Feb 2025 – Present",
    points: [
      "Built and deployed AI-driven churn prediction systems on SageMaker using hybrid LSTM + XGBoost models with SHAP explainability, reducing SaaS attrition by 22% and enabling automated retraining via Airflow.",
      "Enhanced large language model efficiency by applying mixed precision training, roofline performance modeling, and grouped query attention, improving inference throughput and scalability.",
      "Developed continuous batching pipelines with PagedAttention, boosting multi-user inference throughput for LLM applications.",
      "Streamlined RAG pipelines by implementing KV cache preloading, increasing accuracy and responsiveness in AI-driven CRM queries.",
      "Designed and integrated multilingual GenAI chatbots with zero-shot classification and GPT APIs, cutting response times by 60% and expanding accessibility across domains.",
      "Processed 50M+ healthcare EHR and claims records using PySpark on Databricks, powering high-value clinical insights.",
      "Built medallion architecture pipelines with Azure Data Factory and Airflow, enabling 1 TB/day throughput and reducing ETL job failures by 40%.",
      "Applied HIPAA-compliant masking for sensitive data and optimized Snowflake queries, boosting warehouse performance by 35%.",
      "Implemented CI/CD pipelines with GitHub Actions and Databricks CLI, reducing deployment errors by 80%.",
      "Delivered vector-ready multimodal datasets for GenAI models, enabling predictive analytics that improved HEDIS scores and reduced readmissions."
      ]


  },
  {
    title: "Inventory Data Analyst",
    company: "Chartwells Higher Education Dining Services",
    period: "Aug 2023 – Dec 2024",
    points: [
      "Reduced perishable goods waste by 90% with improved inventory analytics",
      "Automated reporting using Excel & MS Office tools",
      "Tracked weekly cost trends for San Jose State University dining ops"
    ]
  },
  {
    title: "Data Engineer",
    company: "Sirveen Control Systems Pvt Ltd",
    period: "Feb 2022 – Dec 2022",
    points: [
      "Designed workflows to migrate Oracle DB to AWS S3 using Lambda & DMS",
      "Reduced CDC execution time from 15 hours to 1 hour using optimized Glue ETL",
      "Orchestrated Step Functions with Glue & Spark SQL for automation",
      "Populated fact/dimension tables via parameterized ETL pipelines",
      "Ingested data into DynamoDB & Elasticsearch for real-time Power BI insights",
      "Used Athena for sanity checks, cutting manual validation by 40%",
      "Debugged with CloudWatch logs + SNS alerts to reduce manual effort",
      "Implemented Data Vault for historical data traceability",
      "Used GitHub Actions and Docker for CI/CD deployments",
      "Expected 50% reduction in infrastructure cost via scalability improvements"
    ]
  },
  {
    title: "Software Test Engineer Intern",
    company: "Sirveen Control Systems Pvt Ltd",
    period: "Aug 2021 – Dec 2021",
    points: [
      "Internship: Designed a scalable ETL pipeline to process 950GB of daily data into GCP, enabling real-time issue detection and optimizing transformation efficiency with Spark (Dataflow). Integrated with Tableau dashboards, enhancing analytics and decision-making for EV Trains Data logger."
    ]
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-extrabold uppercase tracking-[10px] text-gray-300 mb-12">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}

function ExperienceCard({ title, company, period, points }: any) {
  const [showResponsibilities, setShowResponsibilities] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-emerald-400 hover:shadow-emerald-500 transition duration-300 text-left"
    >
      <h3 className="text-lg font-bold text-emerald-400 mb-1">{title}</h3>
      <p className="text-sm font-semibold text-green-500 mb-1">{company}</p>
      <p className="text-sm text-gray-400 mb-3">{period}</p>

      <div className="flex items-center cursor-pointer text-sm text-emerald-300 hover:underline mb-2" onClick={() => setShowResponsibilities(!showResponsibilities)}>
        <span className="mr-2">Responsibilities</span>
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>

      <AnimatePresence>
        {showResponsibilities && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden list-disc list-inside text-sm text-gray-300 space-y-1"
          >
            {points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
