import React from "react";
import { FaSuitcase } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-8 text-white border border-white/10 max-w-4xl mx-auto mb-12">
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <FaSuitcase className="text-3xl text-blue-500" />
        <h2 className="text-3xl font-bold">Experience</h2>
      </div>

      {/* Experience 1 */}
      <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Information System Intern
            </h3>
            <a
              href="https://dpmptsp.acehprov.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium text-base hover:underline"
            >
              BAPPEDA Provinsi Aceh
            </a>
          </div>
          <div className="flex items-center gap-2 mt-3 sm:mt-0 text-gray-500 dark:text-gray-300 text-base">
            <FaRegCalendarAlt className="text-lg" />
            <span>Jul 2024 - Aug 2024</span>
          </div>
        </div>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 text-base space-y-2">
          <li>Creating user interfaces according to user requirements</li>
          <li>Integrating system backend into the frontend application</li>
          <li>Improved frontend development expertise by working closely with the backend team</li>
          <li>Developed SI-IRA (Meeting Information System) to book meeting rooms and provide meeting schedules</li>
          <li>Built a Data Visualization module to display interactive visualizations of agency asset data</li>
          <li>Enhanced coordination, resource management, and transparency in government planning through integrated system features</li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Mobile Development Cohort
            </h3>
            <a
              href="https://grow.google/intl/id_id/bangkit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium text-base hover:underline"
            >
              Bangkit Academy led by Google, Tokopedia, Gojek, &amp; Traveloka
            </a>
          </div>
          <div className="flex items-center gap-2 mt-3 sm:mt-0 text-gray-500 dark:text-gray-300 text-base">
            <FaRegCalendarAlt className="text-lg" />
            <span>Feb 2024 - Jul 2024</span>
          </div>
        </div>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 text-base space-y-2">
          <li>Completed comprehensive curriculum covering mobile development fundamentals</li>
          <li>Strengthened teamwork, communication, and problem-solving skills</li>
          <li>Cross-functional collaboration and agile project workflows</li>
        </ul>
      </div>
    </div>
  );
}
