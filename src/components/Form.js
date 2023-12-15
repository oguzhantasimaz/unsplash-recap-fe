import React from "react";
import store from "../store";
import { IconLoader2 } from "@tabler/icons-react";

export default function Form() {
  const { loading, username, setUsername, fetchData } = store();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <form
        className="mx-auto mt-20 grid max-w-md gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          return fetchData();
        }}
      >
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <button disabled={loading || !username}>Get my recap</button>

        {loading && (
          <div className="grid place-items-center">
            <IconLoader2
              stroke={1.5}
              className="animate-spin text-emerald-500"
            />
          </div>
        )}
      </form>
    </div>
  );
}
