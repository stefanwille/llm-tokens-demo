import { ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
}

export function Code({ children }: CodeProps) {
  return (
    <div className="inline-block">
      <pre className="overflow-auto whitespace-pre flex items-center align-middle">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}
