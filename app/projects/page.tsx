import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
    <main>
      <Navbar />

      <h3 style={{ textAlign: "center" }}>Highlighted Projects</h3>

      <div className="flex-table">
        <div className="flex-row">
          <div className="flexItem">
            <img
              src="/project_chiclets/see_less_negative_news.jpeg"
              alt="See_Less_Negative_News_Image"
              className="flexboxPhoto"
            />
          </div>
          <div className="flexItem">
            The 'See Less Negative News' Filter on Facebook - I wore just about
            every hat for this project at Meta, whether it was playing the
            product manager who pitched and obtained approval for the project
            from my team + many cross-functional partners, building design
            mockups in Figma, executing in my software engineering capacity to
            build and test the feature, and analyzing the experiment data to
            justify a launch. The feature empowers users, via a unit in their
            feed, to actively remove negative, polarizing feed content. Newly
            introduced topic-based filters are used, suggesting selection of
            formerly off-limits categories such as Politics, and Crime &
            Tragedy. As of late 2022, three million people in the United States
            have activated this feature for their Facebook News Tab experience.
          </div>
        </div>

        <div className="flex-row">
          <div className="flexItem">
            <img
              src="/project_chiclets/capital_one.png"
              alt="Capital_One_Image"
              className="flexboxPhoto"
            />
          </div>
          <div className="flexItem">
            PAC File Automation - I designed and built a full-stack network
            automation application from scratch for Capital One's proxy servers
            that saves approximately 200 hours of work per year, utilizing
            Angular, NodeJS, Python, PostgreSQL, and Docker.
          </div>
        </div>

        <div className="flex-row">
          <div className="flexItem">
            <a href="https://www.facebook.com/XCCrusade/">
              <img
                src="/project_chiclets/xc_crusade.jpeg"
                alt="xc_crusade_image"
                className="flexboxPhoto"
              />
            </a>
          </div>
          <div className="flexItem">
            The Cross Country Crusade 5K: I founded a nonprofit organization
            where I regularly communicated with government officials, local and
            national sponsors, ran ad campaigns, and led a team of volunteers on
            race day. 100% of proceeds are donated to Camp Good Days, a Western
            New York-based charity that helps children with cancer and their
            families - and we have raised over $18,000 so far! I now hold an
            advisor role in the organization, which has organized 7 races (and
            counting). Info on each annual race is routinely posted{" "}
            <a href="https://www.facebook.com/XCCrusade/">here</a>.
          </div>
        </div>
      </div>

      <h3 style={{ textAlign: "center" }}>Publications</h3>

      <div className="flex-table">
        <div className="flex-row">
          <div className="flexItem">
            <a href="https://www.regulations.gov/document/FDA-2017-D-6569-0112">
              <img
                src="/project_chiclets/fda_logo.png"
                alt="FDA_Logo_Image"
                className="flexboxPhoto"
              />
            </a>
          </div>
          <div className="flexItem">
            <i>Artificial Intelligence In Healthcare</i> - A 2020 whitepaper for
            the FDA detailing benefit + drawbacks of Machine Learning in
            decision-support software. A link to the uploaded document can be
            found{" "}
            <a href="https://www.regulations.gov/document/FDA-2017-D-6569-0112">
              here
            </a>
            .
          </div>
        </div>
        <div className="flex-row">
          <div className="flexItem">
            <a href="/Mercurio_FacialRecognitionInPublicSafety.pdf">
              <img
                src="/project_chiclets/fr_in_public_safety.png"
                alt="Facial Recognition Cover Image"
                className="flexboxPhoto"
              />
            </a>
          </div>
          <div className="flexItem">
            <i>Facial Recognition in Public Safety</i> - A 2019 set of
            recommendations to legislators and police chiefs in New York and New
            Jersey regarding Facial Recognition technology. A link to the
            document can be found{" "}
            <a href="/Mercurio_FacialRecognitionInPublicSafety.pdf">here</a>.
          </div>
        </div>
      </div>
    </main>
  );
}
