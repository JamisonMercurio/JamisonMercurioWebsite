import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="flexboxAllComponents">
        <div
          className="flexboxHeadshotLevel"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        >
          <img
            src="/headshot.jpeg"
            alt="Jamison Mercurio Headshot"
            className="headshot"
          />
        </div>

        <div className="flexboxHeadshotLevel">
          <div>
            <p style={{ textAlign: "center" }}>
              I'm a former Facebook software engineer and Princeton graduate
              with proven leadership experience, <br />
              community involvement, and a product management skillset, seeking
              to apply my abilities <br />
              as a healthtech entrepreneur.
            </p>
          </div>

          <div className="flexboxGithubAndLinkedIn">
            <a href="https://www.linkedin.com/in/jamison-mercurio?trk=profile-badge">
              <img
                src="/LinkedIn.png"
                alt="LinkedIn"
                style={{ width: "60px", height: "60px", paddingRight: "10px" }}
              />
            </a>
            <a href="https://github.com/JamisonMercurio">
              <img
                src="/Github1.png"
                alt="Github"
                style={{ width: "42px", height: "42px", paddingLeft: "10px" }}
              />
            </a>
          </div>

          <div>
            <p style={{ textAlign: "center" }}>
              <Link
                href="/Jamie%20Mercurio%20Resume.pdf"
                className="resume-button"
              >
                <b>My Resume</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
