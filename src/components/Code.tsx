import { ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
}

export function Code({ children }: CodeProps) {
  return (
    <pre className="overflow-auto whitespace-pre">
      <code className="font-mono">{children}</code>
    </pre>
  );
}
