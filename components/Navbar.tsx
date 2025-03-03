import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <h1 className="logo">Jamison Mercurio</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
