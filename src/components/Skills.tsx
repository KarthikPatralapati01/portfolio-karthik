"use client";

import { motion } from "framer-motion";
import HomeButton from "./HomeButton";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-3xl font-bold uppercase tracking-[8px] text-gray-400 mb-12">
        Skills
      </h2>

      <div className="max-w-5xl w-full flex flex-col gap-12">

        {/* 📊 Data Analytics Skills */}
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: "0px 0px 25px 6px rgba(16, 185, 129, 0.6)",
            borderColor: "#34d399",
          }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="bg-gray-900 rounded-xl p-6 border border-gray-700 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">📊 Data Analytics</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>ETL/ELT Development</li>
            <li>CDC Pipelines</li>
            <li>Real-Time Ingestion, Kafka Streaming</li>
            <li>Airflow DAGs, dbt Modelling</li>
            <li>Data Compliance (GDPR, HIPAA)</li>
          </ul>
        </motion.div>

        {/* 🤖 Machine Learning Skills */}
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: "0px 0px 25px 6px rgba(16, 185, 129, 0.6)",
            borderColor: "#34d399",
          }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="bg-gray-900 rounded-xl p-6 border border-gray-700 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">🤖 Machine Learning</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>EDA & Feature Engineering</li>
            <li>ML Model Training, Tuning</li>
            <li>Anomaly Detection & Recommenders</li>
            <li>Model Monitoring (MLflow, W&B)</li>
            <li>Statistical Testing (A/B, Hypothesis)</li>
          </ul>
        </motion.div>

        {/* 🧠 Generative AI Skills */}
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: "0px 0px 25px 6px rgba(16, 185, 129, 0.6)",
            borderColor: "#34d399",
          }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="bg-gray-900 rounded-xl p-6 border border-gray-700 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-emerald-400 mb-4">🧠 Generative AI</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Prompt Engineering</li>
            <li>LLM Fine-Tuning (QLoRA, PEFT)</li>
            <li>RAG Pipeline Development</li>
            <li>Vector DBs (Pinecone, FAISS, ChromaDB)</li>
            <li>Agentic Multimodal AI</li>
          </ul>
        </motion.div>

      </div>

      <div className="w-full flex justify-center mt-16">
        <HomeButton />
      </div>
    </motion.section>
  );
}
