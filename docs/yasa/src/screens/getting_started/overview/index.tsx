import { Link } from "@yasa/link";

export function GettingStartedOverviewScreen() {
  return (
    <>
      <h1>Yasa</h1>
      <article>
        <h2>Why</h2>
        <p>
          I like re-inventing the wheel.
          <br />
          And, I think Yasa introduces some unique features and concepts that
          are very useful and time saving (<Link>Neutral colors</Link>,{" "}
          <Link>Form</Link>, <Link>Filters</Link>).
        </p>
        <h2>Inspiration</h2>
        <p>
          Yasa is heavily inspired by bootstrap, colors are inspired by the
          design system "pink".
        </p>
        <h2>Limitations</h2>
        <p>
          I think it will be kinda hard to customize - I haven't really checked,
          because I created this library to suite my needs.
        </p>
      </article>
    </>
  );
}
