import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Form from "./components/Form";
import Result from "./components/Result";
import store from "./store";
import Footer from "./components/Footer";

function App() {
  const { recap, username } = store();

  return (
    <main className="mx-auto flex h-screen max-w-6xl flex-col px-10 py-20 text-center">
      <h1 className="text-4xl">
        {username ? (
          <span className="font-semibold">{username}'s</span>
        ) : (
          "Your"
        )}{" "}
        2023 Recap
      </h1>
      {recap ? <Result /> : <Form />}
      <Footer />
      <Analytics />
    </main>
  );
}

export default App;
