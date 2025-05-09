"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HomeButton from "./HomeButton";

const groupedTools = [
  {
    title: "AI / Machine Learning",
    tools: [
      { name: "Python", icon: "python.jpeg" },
      { name: "PyTorch", icon: "pytorch.png" },
      { name: "Keras", icon: "keras.png" },
      { name: "NLP", icon: "NLP.png" },
      { name: "MLflow", icon: "mlflow.png" },
      { name: "LangChain", icon: "langchain.png" },
      { name: "OpenCV", icon: "opencv.svg" },
      { name: "NumPy", icon: "numpy.png" },
      { name: "Pandas", icon: "pandas.png" },
    ],
  },
  {
    title: "Data Engineering",
    tools: [
      { name: "Apache Airflow", icon: "airflow.png" },
      { name: "Kafka", icon: "kafka.jpeg" },
      { name: "Spark", icon: "spark.png" },
      { name: "Hadoop", icon: "hadoop.png" },
      { name: "dbt", icon: "dbt.png" },
      { name: "Databricks", icon: "databricks.jpg" },
      { name: "Redshift", icon: "Redshift.png" },
      { name: "BigQuery", icon: "bigquery.png" },
      { name: "Snowflake", icon: "snowflake.png" },
      { name: "GCP", icon: "GCP.png" },
      { name: "AWS", icon: "AWS.png" },
      { name: "Azure", icon: "Azure.png" },
      { name: "SQL", icon: "sql.png" },
      { name: "PostgreSQL", icon: "postgresql.png" },
    ],
  },
  {
    title: "CI/CD & DevOps",
    tools: [
      { name: "Docker", icon: "docker.jpg" },
      { name: "Kubernetes", icon: "kubernetes.png" },
      { name: "Git", icon: "Git.png" },
      { name: "Cassandra", icon: "cassandra.png" },
      { name: "MongoDB", icon: "mongodb.png" },
    ],
  },
  {
    title: "Web / Backend Frameworks",
    tools: [
      { name: "Django", icon: "django.png" },
      { name: "FastAPI", icon: "fastapi.png" },
      { name: "Flask", icon: "flask.jpg" },
      { name: "React & Next.js", icon: "reactnextjs.png" },
      { name: "HTML/CSS", icon: "htmlcss.jpg" },
      { name: "Tailwind CSS", icon: "tailwindcss.png" },
    ],
  },
  {
    title: "Visualization & BI",
    tools: [
      { name: "Tableau", icon: "tableau.png" },
      { name: "Power BI", icon: "powerbi.png" },
      { name: "Excel", icon: "excel.jpeg" },
    ],
  },
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
      <h2 className="text-3xl font-bold uppercase tracking-[10px] text-gray-400 mb-12">
        Tools & Technologies
      </h2>

      <div className="space-y-16 w-full max-w-7xl">
        {groupedTools.map((group, i) => (
          <div key={i}>
            <h3 className="text-xl text-emerald-400 font-semibold mb-6 text-left">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                  className="bg-gray-900 rounded-xl p-4 border border-gray-700 text-white hover:border-emerald-400 hover:shadow-[0px_0px_25px_5px_rgba(34,197,94,0.5)] transition-all duration-300 flex flex-col items-center justify-center space-y-2"
                >
                  <Image
                    src={`/skill_icons/${tool.icon}`}
                    alt={`${tool.name} icon`}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <span className="text-white font-medium text-xs text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-20">
        <HomeButton />
      </div>
    </motion.section>
  );
}
