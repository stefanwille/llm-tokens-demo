"use client";

import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { useState, useTransition } from "react";
import Button from "@/app/Button";
import {
  getCounter,
  incrementCounter,
  incrementCounterAndSomethingElse,
  sayCiao,
  sayHello,
} from "@/app/HomeServerFunctions";

export function HomeComponent() {
  const [counter, setCounter] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [inputText, setInputText] = useState("Hello World!");

  const enc = new Tiktoken(o200k_base);
  const tokens = enc.encode(inputText);
  const decoded = enc.decode(tokens);
  const matches = decoded === inputText;

  async function updateCounter() {
    console.log("updateCounter");
    const counter = await getCounter();
    setCounter(counter);
    console.log(counter);
  }

  async function onIncrement() {
    startTransition(async () => {
      await incrementCounter();
      await updateCounter();
    });
  }

  async function onIncrementCounterAndDoSomethingElse() {
    startTransition(async () => {
      await incrementCounterAndSomethingElse(
        counter % 2 === 0 ? sayHello : sayCiao,
      );
      await updateCounter();
    });
  }

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <Button disabled>disabled</Button>
      <Button
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await sayHello();
          });
        }}
      >
        Say Hello
      </Button>
      <p>COUNTER: {counter}</p>
      <Button disabled={isPending} onClick={onIncrement}>
        Increment Counter
      </Button>
      <Button
        disabled={isPending}
        onClick={onIncrementCounterAndDoSomethingElse}
      >
        Increment Counter and do something else
      </Button>
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
