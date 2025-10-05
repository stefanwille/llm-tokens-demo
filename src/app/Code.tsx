import { ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
}

export function Code({ children }: CodeProps) {
  return (
    <div className="inline-block">
      <pre className="overflow-auto whitespace-pre flex items-center align-middle bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded border border-gray-300 dark:border-gray-700">
        <code className="font-mono text-sm">{children}</code>
      </pre>
    </div>
  );
}
