"use client";

import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Code } from "@/app/Code";
import { Label } from "@/components/ui/label";
import { TokensTable } from "./TokensTable";

const encoder = new Tiktoken(o200k_base);

export function HomeComponent() {
  const [inputText, setInputText] = useState("How are you today?");

  const tokenIDs = encoder.encode(inputText);
  const tokenStrings = tokenIDs.flatMap((token) => encoder.decode([token]));

  return (
    <div className="">
      <header>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          LLM Tokens Demo
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          A demonstration that makes LLM tokens more tangible
        </p>
        <div className="mb-12"></div>
      </header>

      <div>
        <div>
          When you send a message to an LLM, it doesn't work with your text
          directly as text. It breaks it up into smaller pieces, called{" "}
          <b>tokens</b>.
          <br />
          <br />
          <Label className="mb-4" htmlFor="inputText">
            Enter some text to see how it's tokenized:
          </Label>
          <Input
            className="w-[400px]"
            type="text"
            name="inputText"
            value={inputText}
            placeholder="Text to tokenize"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <div className="mb-4"></div>
        </div>
        <div>
          The LLM encodes your text as a sequence of tokens, of small text
          fragments.
          <br />
          <Code>{JSON.stringify(tokenStrings)}</Code>
          <br />
          <br />
          The LLM's tokenizer has a fixed set of tokens - a token vocabulary, if
          you will.
          <br />
          It represents these tokens as integers, and the integers are called{" "}
          <b>token ids</b>.
          <br />
          <br />
          This is your text represented as a sequence of token ids:
          <br />
          <Code>{JSON.stringify(tokenIDs)}</Code>
          <br />
          Each token id represents a fragment in your text - a word, a fraction
          of a word, a syllable, or a character.
          <br />
          <br />
          The table below shows how each token id maps to its text:
        </div>
        <TokensTable tokenIDs={tokenIDs} tokenStrings={tokenStrings} />
        <br />
        Joining the token strings together reconstructs the original text:{" "}
        <br />
        <Code>{tokenStrings.join("")}</Code>
        <br />
        The LLM does not use your message text. It works with token ids
        internally. And when it generates a reply, it uses token ids too.
        <br />
        <br />
        The token vocabulary of each LLM may be different - each vendor chooses
        their own tokenizer, on a per model basis.
      </div>
    </div>
  );
}
