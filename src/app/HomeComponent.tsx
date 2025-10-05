"use client";

import { cn } from "@/lib/utils";
import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Code } from "@/components/Code";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const encoder = new Tiktoken(o200k_base);

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function HomeComponent() {
  const [inputText, setInputText] = useState("Hello World!");

  const tokens = encoder.encode(inputText);
  const decodedTokens = tokens.flatMap((token) => encoder.decode([token]));
  const decoded = encoder.decode(tokens);
  const matches = decoded === inputText;

  return (
    <div className="">
      <h1>A demonstration that makes LLM tokens more tangible.</h1>
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
        Decoded tokens: <Code>{JSON.stringify(decodedTokens)}</Code>
        <div>Tokens decoded back to a string: {decoded}</div>
        <div>
          Are original text and the decoded string identical:{" "}
          <b>{matches ? "true" : "false"}</b>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Index</TableHead>
            <TableHead>Token</TableHead>
            <TableHead>Token decoded back to text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((token, index) => (
            <TableRow key={`${index - token}`}>
              <TableCell>{index}</TableCell>
              <TableCell>{tokens[index]}</TableCell>
              <TableCell>{decodedTokens[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total token: {tokens.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
