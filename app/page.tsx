'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A creative developer and designer showcasing my work
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
