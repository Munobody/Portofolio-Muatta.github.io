import React from "react";
import { FaSuitcase, FaRegCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-8 text-white border border-white/10 max-w-4xl mx-auto mb-12">
      {/* Title */}
      <div className="flex items-center gap-3 mb-6">
        <FaSuitcase className="text-3xl text-blue-500" />
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
      </div>

      {/* Experience 1 */}
      <div className="bg-white/5 rounded-xl p-5 mb-5 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white dark:text-white">
              Information System Intern
            </h3>
            <a
              href="https://dpmptsp.acehprov.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base hover:underline"
            >
              BAPPEDA Provinsi Aceh
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm md:text-base">
            <FaRegCalendarAlt className="text-base" />
            <span>Jul 2024 - Aug 2024</span>
          </div>
        </div>

        <ul className="list-disc pl-6 text-gray-200 text-sm md:text-base mt-4 space-y-2">
          <li>Creating user interfaces according to user requirements</li>
          <li>Integrating system backend into the frontend application</li>
          <li>
            Improved frontend development expertise by working closely with the
            backend team
          </li>
          <li>
            Developed SI-IRA (Meeting Information System) to book meeting rooms
            and provide meeting schedules
          </li>
          <li>
            Built a Data Visualization module to display interactive
            visualizations of agency asset data
          </li>
          <li>
            Enhanced coordination, resource management, and transparency in
            government planning through integrated system features
          </li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="bg-white/5 rounded-xl p-5 mb-5 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white dark:text-white">
              Mobile Development Cohort
            </h3>
            <a
              href="https://grow.google/intl/id_id/bangkit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base hover:underline"
            >
              Bangkit Academy led by Google, Tokopedia, Gojek, &amp; Traveloka
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm md:text-base">
            <FaRegCalendarAlt className="text-base" />
            <span>Feb 2024 - Jul 2024</span>
          </div>
        </div>

        <ul className="list-disc pl-6 text-gray-200 text-sm md:text-base mt-4 space-y-2">
          <li>
            Completed comprehensive curriculum covering mobile development
            fundamentals
          </li>
          <li>
            Strengthened teamwork, communication, and problem-solving skills
          </li>
          <li>Cross-functional collaboration and agile project workflows</li>
        </ul>
      </div>

      {/* Himpunan Mahasiswa Informatika (Wakil II & Wakil I in one card) */}
      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Himpunan Mahasiswa Informatika
            </h3>
            <div className="text-sm text-cyan-300 mt-1">
              Organizational Roles
            </div>
          </div>
          <div className="text-gray-400 text-sm">Student Organization</div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Role: Wakil II */}
            <div className="flex-1 bg-white/0 rounded-lg p-4 border border-white/5">
            <div className="flex items-start justify-between">
              <div>
              <div className="text-sm font-medium text-cyan-200">
                Vice Chair II
              </div>
              <div className="font-semibold mt-1">
                Informatics Student Association
              </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FaRegCalendarAlt />
              <span>Sep 2022 - Aug 2023</span>
              </div>
            </div>
            <ul className="list-disc pl-5 text-gray-200 text-sm mt-3 space-y-1">
              <li>
              Coordinated internal organization and managed student affairs programs.
              </li>
              <li>
              Assisted in preparing agendas, meeting documentation, and monitoring division progress.
              </li>
              <li>
              Improved communication among members and facilitated campus activities.
              </li>
            </ul>
            </div>

          {/* Role: Wakil I */}
          <div className="flex-1 bg-white/0 rounded-lg p-4 border border-white/5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-cyan-200">Wakil I</div>
                <div className="font-semibold mt-1">
                  Himpunan Mahasiswa Informatika
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FaRegCalendarAlt />
                <span>Sep 2023 - Aug 2024</span>
              </div>
            </div>
            <ul className="list-disc pl-5 text-gray-200 text-sm mt-3 space-y-1">
              <li>
              Led operational coordination and execution of organizational work programs.
              </li>
              <li>
              Managed external relations, inter-organizational collaborations, and sponsorships.
              </li>
              <li>
              Mentored members, evaluated programs, and enhanced team capabilities.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Badan Eksekutif Mahasiswa FMIPA */}
      <div className="bg-white/5 rounded-xl p-5 mt-5 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
        <h3 className="text-lg md:text-xl font-semibold">
          Student Executive Board FMIPA
        </h3>
        <div className="text-sm text-cyan-300 mt-1">
          Human Resource Development Staff
        </div>
          </div>
          <div className="text-gray-400 text-sm">Student Organization</div>
        </div>

        <ul className="list-disc pl-6 text-gray-200 text-sm md:text-base mt-2 space-y-2">
          <li>
        Responsible for Basketball at POM FMIPA — organized match schedules, coordinated participants, arranged equipment, appointed referees, and managed event logistics.
          </li>
          <li>
        Responsible for Expo at PIL MIPA XXIV FMIPA — managed booth planning, expo layout, vendor and promotion team coordination, and operational flow on the event day.
          </li>
          <li>
        Designed and implemented HR training programs for BEM members (leadership, communication, teamwork).
          </li>
          <li>
        Conducted post-event evaluations and prepared recommendations to increase participation and event effectiveness.
          </li>
        </ul>
      </div>

      {/* Teaching Assistant - Software Development and Operations */}
      <div className="bg-white/5 rounded-xl p-5 mt-5 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Teaching Assistant
            </h3>
            <div className="text-sm text-cyan-300 mt-1">
              Software Development and Operations — Syiah Kuala University
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaRegCalendarAlt />
            <span>Aug 2024 – Dec 2024</span>
          </div>
        </div>

        <ul className="list-disc pl-6 text-gray-200 text-sm md:text-base mt-2 space-y-2">
          <li>
            Implemented Jira for project management training; taught Scrum and
            Kanban, user story creation, sprint planning, and issue tracking.
          </li>
          <li>
            Conducted hands-on Docker workshops to containerize applications,
            manage dependencies, and deploy scalable solutions.
          </li>
          <li>
            Introduced GitHub Actions for CI/CD pipelines, guiding students to
            automate testing, builds, and deployments.
          </li>
        </ul>
      </div>

      {/* Teaching Assistant - Website-Based Programming Lab */}
      <div className="bg-white/5 rounded-xl p-5 mt-5 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Teaching Assistant
            </h3>
            <a
              href="https://docs-pbw-inf-224.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base hover:underline"
            >
              Website-Based Programming Laboratory — Syiah Kuala University
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaRegCalendarAlt />
            <span>Feb 2024 – May 2024</span>
          </div>
        </div>

        <ul className="list-disc pl-6 text-gray-200 text-sm md:text-base mt-2 space-y-2">
          <li>
            Educated 44 students across 16 sessions on Linux and web programming
            (HTML, CSS, JavaScript, PHP, Laravel, Tailwind, Git).
          </li>
          <li>
            Developed interactive lesson plans using practical exercises,
            collaborative projects, and lectures.
          </li>
          <li>
            Maintained online documentation and learning resources:{" "}
            <a
              href="https://docs-pbw-inf-224.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              docs-pbw-inf-224.vercel.app
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
