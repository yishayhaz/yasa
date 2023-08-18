import { Link } from "@yasa/link";
import { Link as RouterLink } from "react-router-dom";

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
        <h2>Are you looking for the cool stuff? 🔥</h2>
        <p>
          Yasa has some really dope features, jump to the{" "}
          <Link
            Component={RouterLink}
            extraProps={{ to: "/docs/cool" }}
            className="color-primary"
          >
            cool section
          </Link>
          .
        </p>
      </article>
    </>
  );
}
