"use client";

import { motion } from "framer-motion";
import HomeButton from "./HomeButton";

const toolsList = [
  "Python",
  "SQL",
  "PostgreSQL",
  "TypeScript",
  "AWS",
  "GCP (Google Cloud Platform)",
  "Microsoft Azure",
  "Snowflake",
  "BigQuery",
  "Redshift",
  "Apache Airflow",
  "Apache Spark",
  "Apache Kafka",
  "dbt (Data Build Tool)",
  "Docker",
  "Kubernetes",
  "TensorFlow",
  "PyTorch",
  "LangChain",
  "MLflow",
  "FastAPI",
  "Flask",
  "Tableau",
  "Power BI",
  "Next.js",
  "Tailwind CSS",
];

export default function Tools() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold uppercase tracking-[10px] text-gray-400 mb-8">
        Tools & Technologies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl">
        {toolsList.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="bg-gray-900 rounded-xl p-4 border border-gray-700 text-white hover:border-emerald-400 hover:shadow-[0px_0px_25px_5px_rgba(34,197,94,0.5)] transition-all duration-300 flex flex-col items-center justify-center"
          >
            <span className="text-white font-medium text-sm">{tool}</span>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <HomeButton />
      </div>
    </motion.section>
  );
}
