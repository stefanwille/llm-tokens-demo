"use client";

import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Code } from "@/components/Code";

const encoder = new Tiktoken(o200k_base);

export function HomeComponent() {
  const [inputText, setInputText] = useState("Hello World!");

  const tokens = encoder.encode(inputText);
  const decoded = encoder.decode(tokens);
  const matches = decoded === inputText;

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h1>A small demonstration that makes LLM tokenization more tangible.</h1>
      <div>
        Input your text to tokenize and decode:
        <Input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </div>{" "}
      <div>
        Tokens: <Code>{JSON.stringify(tokens)}</Code>
        <div>Tokens decoded back to a string: {decoded}</div>
        <div>
          Are original text and the decoded string identical:{" "}
          <b>{matches ? "true" : "false"}</b>
        </div>
      </div>
    </div>
  );
}
