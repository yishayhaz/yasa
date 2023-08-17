import styles from "./style.module.scss";

type Color = { name: string; label?: string };

const ACCENT: Color[] = [
  {
    name: "primary",
  },
  {
    name: "success",
  },
  {
    name: "danger",
  },
  {
    name: "warning",
  },
];

const NEAUTRALS: Color[] = Array.from({ length: 9 }, (_, idx) => ({
  name: `neutral-${(idx + 1) * 100}`,
}));

const LIGHT_THEME: Color[] = Array.from({ length: 9 }, (_, idx) => ({
  name: `neutral-${(idx + 1) * 100}`,
  label: `s-neutral-${(idx + 1) * 100}`,
}));

const DARK_THEME: Color[] = Array.from({ length: 9 }, (_, idx) => ({
  name: `neutral-${1000 - (idx + 1) * 100}`,
  label: `s-neutral-${(idx + 1) * 100}`,
}));

export const ColorsContainer = ({
  colors,
  title,
}: {
  colors: Color[];
  title: string;
}) => (
  <>
    <h3>{title}</h3>
    <div className="d-flex justify-content-start flex-wrap gap-10">
      {colors.map((color, idx) => (
        <div className={styles.color_card} key={idx}>
          <div className={`bg-${color.name}`}></div>
          <span className="fs-s">{color.label ?? color.name}</span>
        </div>
      ))}
    </div>
  </>
);

export function ColorsScreen() {
  return (
    <>
      <h1>Colors</h1>
      <div>
        <h2>All Colors</h2>
        <p className="mt-10">
          All colors are accesiable via <code>bg-*</code> and{" "}
          <code>color-*</code> .
          <br />
          Also, through their css variable, and sass variable (for example:{" "}
          <code>$primary</code>).
        </p>
      </div>
      <ColorsContainer title="Accent" colors={ACCENT} />
      <ColorsContainer title="Neutrals" colors={NEAUTRALS} />
      <div>
        <h2>Modes</h2>
        <p className="mt-10">
          Modes just reverse the order of `neutral` colors.
        </p>
      </div>
      <div className={styles.mode} data-theme="light">
        <ColorsContainer title="Light Mode" colors={LIGHT_THEME} />
      </div>
      <div className={styles.mode} data-theme="dark">
        <ColorsContainer title="Dark Mode" colors={DARK_THEME} />
      </div>
    </>
  );
}
