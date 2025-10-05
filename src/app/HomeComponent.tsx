"use client";

import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { useState } from "react";

export function HomeComponent() {
  const [inputText, setInputText] = useState("Hello World!");

  const enc = new Tiktoken(o200k_base);
  const tokens = enc.encode(inputText);
  const decoded = enc.decode(tokens);
  const matches = decoded === inputText;

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div>
        Input your text to encode and decode:
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </div>{" "}
      <div>
        encoded:{" "}
        <pre className="overflow-auto whitespace-pre">
          <code className="font-mono">{JSON.stringify(tokens, null, 2)}</code>
        </pre>
        <div>decoded: {decoded}</div>
        matches: {matches ? "true" : "false"}
      </div>
    </div>
  );
}
