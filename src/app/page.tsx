"use client";

import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-2 items-center justify-center min-h-screen">
        <div className="">
          <h1 className="text-4xl font-bold">
            Welcome to Next.js!
          </h1>
          <p className="mt-4 text-lg">
            This is a simple Next.js application.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://nextjs.org/docs"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Learn Next.js
          </a>
        </div>
      </div>
    </>
  );
}
