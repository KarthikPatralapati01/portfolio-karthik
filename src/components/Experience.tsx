"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HomeButton from "./HomeButton";

const experiences = [
  {
    title: "Inventory Data Analyst",
    company: "Chartwells Higher Education Dining Services",
    period: "Aug 2023 – Dec 2024",
    points: [
      "Reduced perishable goods waste by 90% with improved inventory analytics",
      "Automated reporting using Excel & MS Office tools",
      "Tracked weekly cost trends for San Jose State University dining ops",
    ],
  },
  {
    title: "Data Engineer",
    company: "Sirveen Control Systems Pvt Ltd",
    period: "Jan 2021 – Dec 2022",
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
      "Expected 50% reduction in infrastructure cost via scalability improvements",
    ],
  },
  {
    title: "Software Test Engineer Intern",
    company: "Sirveen Control Systems Pvt Ltd",
    period: "Jul 2020 – Nov 2020",
    points: [
      "Built scalable ETL pipeline with Oracle DB and SQL for 1TB daily data",
      "Used Informatica to streamline data mappings",
      "Created a lakehouse architecture integrated with Tableau for EV Trains",
    ],
  },
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
  const [showDuties, setShowDuties] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-emerald-400 hover:shadow-emerald-500 transition duration-300 text-left"
    >
      <h3 className="text-lg font-bold text-emerald-400 mb-1">{title}</h3>
      <p className="text-sm font-semibold text-green-500 mb-1">{company}</p>
      <p className="text-sm text-gray-400 mb-3">{period}</p>

      <button
        onClick={() => setShowDuties(!showDuties)}
        className="text-sm text-emerald-300 hover:underline mb-2"
      >
        {showDuties ? "Hide Duties" : "Duties:"}
      </button>

      <AnimatePresence>
        {showDuties && (
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
