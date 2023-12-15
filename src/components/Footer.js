import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto p-4 pt-20 opacity-40 transition hover:opacity-100">
      Built with Golang, AWS Lambda,{" "}
      <a href="https://www.upstash.com" target="_blank" rel="noreferrer">
        Upstash
      </a>{" "}
      Redis and React by{" "}
      <a
        href="https://github.com/oguzhantasimaz"
        target="_blank"
        rel="noreferrer"
      >
        Oguzhan Tasimaz
      </a>
    </footer>
  );
}
