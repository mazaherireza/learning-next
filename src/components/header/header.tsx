import Link from "next/link";

export default function Header() {
  return (
    <ul className="absolute z-1 flex flex-row flex-wrap items-center gap-2 md:gap-8 p-4 sm:p-8 text-sm sm:text-2xl text-white">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/performance">Performance</Link>
      </li>
      <li>
        <Link href="/reliability">Reliability</Link>
      </li>
      <li>
        <Link href="/scale">Scale</Link>
      </li>
    </ul>
  );
}
