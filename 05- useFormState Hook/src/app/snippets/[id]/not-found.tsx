import type { ReactNode } from "react";

export default function NotFound(): ReactNode {
  return (
    <div className="grid place-content-center">
      <h1 className="text-xl bold">
        Sorry, but we couldn't find that paricular snippet
      </h1>
    </div>
  );
}
