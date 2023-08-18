import { BaseField, Input, Select, Textarea } from "@yasa/form/fields";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@yasa/badge";

// @end imports@ //

export function FieldsScreen() {
  return (
    <article>
      <h1>Fields</h1>
      <p>
        All fields rely on the <code>BaseField</code> component, which is a{" "}
        <code>div</code> that wraps the field.
      </p>

      <h2>Base Field</h2>
      <p>
        You can use the <code>BaseField</code> component to wrap any field or
        element, for example if you want to create a custom tag input:
      </p>
      <BaseField
        icon={<BiSearch />}
        label="I'm custom"
        title="and I've decided to be a tag input"
      >
        <div className="rounded-lg d-flex gap-10 flex-start">
          <Badge title="badge" />
          <Badge title="badge" variant="success" />
        </div>
      </BaseField>
      <h3>isValid</h3>
      <p>
        isValid is a prop that can be <code>true, false, null</code>.
        <br />
        And it's used to show the validation state of the field.
      </p>
      <Input label="isValid=true" isValid disabled></Input>
      <Input label="isValid=false" isValid={false} disabled></Input>
      <Input label="isValid=null" disabled></Input>
      <h2>Input</h2>
      <p>
        You can pass all the native props for the input, on top of that Yasa
        also supports <code>btnIcon</code> and <code>icon</code>
      </p>
      <Input
        icon={<BiSearch />}
        label="I'm a label"
        placeholder="placeholder"
        title="and a title"
      />
      <h3>With Icon Button</h3>
      <Input
        btnIcon={<BiSearch />}
        label="I'm a label"
        placeholder="placeholder"
        title="and a title"
        onClick={() => alert("clicked")}
      />
      <h2>Textarea</h2>
      <Textarea />
      <h2>Select</h2>
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>
      <h2>API</h2>
    </article>
  );
}
