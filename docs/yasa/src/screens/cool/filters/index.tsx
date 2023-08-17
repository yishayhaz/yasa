import { useFilters } from "@yasa/hooks/filters";
import { Input, Select } from "@yasa/field";
import { Button } from "@yasa/button";
import { CodeBlock } from "docs/yasa/src/common/code_block";

const code = `function Filters() {
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
      <div className="d-flex flex-column gap-30 align-items-start">
          <pre>
              <code>{JSON.stringify(filters.searchParams, null, 2)}</code>
          </pre>
          <div className="d-flex justify-content-start gap-6">
              <Select
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    filters.onChange("status", e.target.value)
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
                  value={filters.asValues.name}
                  onChange={(e) => filters.onChange("name", e.target.value)}
                  placeholder="Name"
                  label="Name"
              />
              <Input
                  name="age"
                  value={filters.asValues.age}
                  onChange={(e) => filters.onChange("age", e.target.value)}
                  placeholder="Age"
                  label="Age"
              />
              <Input
                  name="from"
                  value={filters.asValues.from}
                  onChange={(e) => filters.onChange("from", e.target.value)}
                  type="date"
                  max={filters.asValues.to}
                  label="From"
              />
              <Input
                  name="to"
                  value={filters.asValues.to}
                  onChange={(e) => filters.onChange("to", e.target.value)}
                  min={filters.asValues.from}
                  type="date"
                  label="To"
              />
          </div>
          <div>
              <Button variant="danger" autoWidth onClick={filters.clear}>
                  Clear Filters
              </Button>
              <Button autoWidth onClick={filters.onClick}>
                  Search
              </Button>
          </div>
      </div>
  );
}`;

const scope = { useFilters, Select, Input, Button };

export function FiltersScreen() {
  return (
    <>
      <h1>Filters</h1>
      <CodeBlock code={code} scope={scope} />
    </>
  );
}
