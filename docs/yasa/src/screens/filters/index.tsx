import { useFilters } from "@yasa/hooks/filters";
import { Input, Select } from "@yasa/field";
import { Button } from "@yasa/button";

export function FiltersScreen() {
  const filters = useFilters(
    {
      name: "string",
      age: "number",
      from: "date",
      to: "date",
      include: "boolean",
      status: "string",
    },
    console.log
  );

  return (
    <>
      <h1>Filters</h1>
      <pre>
        <code>{JSON.stringify(filters.searchParams, null, 2)}</code>
      </pre>
      <div className="d-flex justify-content-start gap-6">
        <Select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            filters.onChange("status", e.target.value).fire()
          }
          value={filters.asValues.status}
          label="Status"
        >
          <option value="">Status</option>
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
        </Select>
        <Input
          name="name"
          value={filters.asValues.name ?? ""}
          onChange={(e) => filters.onChange("name", e.target.value).debounce()}
          placeholder="Name"
          label="Name"
        />
        <Input
          name="age"
          value={filters.asValues.age ?? ""}
          onChange={(e) => filters.onChange("age", e.target.value).debounce()}
          placeholder="Age"
          label="Age"
        />
        <Input
          name="from"
          value={filters.asValues.from ?? ""}
          onChange={(e) => filters.onChange("from", e.target.value).debounce()}
          type="date"
          max={filters.asValues.to ?? ""}
          label="From"
        />
        <Input
          name="to"
          value={filters.asValues.to ?? ""}
          onChange={(e) => filters.onChange("to", e.target.value).debounce()}
          min={filters.asValues.from ?? ""}
          type="date"
          label="To"
        />
      </div>
      {/* <br />
      <hr />
      <br />
      <div>
        <Radio
          label="yes"
          value="true"
          name="include"
          onChange={(e) => filters.onChange("include", e.target.value)}
        />
        <Radio
          label="no"
          value="false"
          name="include"
          onChange={(e) => filters.onChange("include", e.target.value)}
        />
        <Radio
          label="ignore"
          value=""
          name="include"
          onChange={(e) => filters.onChange("include", e.target.value)}
        />
      </div> */}
      <div>
        <Button variant="danger" autoWidth onClick={filters.clear}>
          Clear Filters
        </Button>
      </div>
    </>
  );
}
