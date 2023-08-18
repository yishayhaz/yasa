import { Checkbox, Radio } from "@yasa/form";

// @end imports@ //

export function RadioAndCheckboxScreen() {
  return (
    <article>
      <h1>Radio and Checkbox</h1>
      <Radio name="radio" label="Radio" />
      <Radio name="radio" label="Radio" />

      <Checkbox name="checkbox" label="Checkbox" />
    </article>
  );
}
