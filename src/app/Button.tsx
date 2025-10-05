import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ onClick, children, disabled }: ButtonProps) {
  console.log("Button", disabled);
  return (
    <button
      className="bg-black hover:bg-gray-700 active:bg-gray-400 text-white active:text-gray-800 disabled:bg-black disabled:text-gray-600 font-bold py-2 px-4 rounded"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
