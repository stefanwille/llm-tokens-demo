"use server";

import { exec } from "node:child_process";

let counter = 0;

export async function sayHello() {
  console.log("sayHello");
  exec(`say hello ${counter}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

export async function sayCiao() {
  console.log("sayNice");
  exec(`say ciao ${counter}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

export async function getCounter() {
  console.log("getCounter", counter);
  return counter;
}

export async function incrementCounter() {
  console.log("incrementCounter", counter);
  counter++;
}

export async function incrementCounterAndSomethingElse(
  somethingElse: () => Promise<void>,
) {
  console.log("incrementCounterAndSomethingElse", counter);
  await incrementCounter();
  await somethingElse();
}
