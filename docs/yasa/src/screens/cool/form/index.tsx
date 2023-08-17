import { useState } from "react";
import { Form } from "@yasa/form";
import { CodeBlock } from "docs/yasa/src/common/code_block";

const scope = {
  useState,
  Form,
};

const code = `function FormScreen() {
  const [fields, setFields] = useState<FormFields>({
    status: {
      as: "select",
      field: {
        label: "Status",
        required: true,
        options: [
          {
            label: "Product Status",
            value: "",
            isDefault: true,
          },
          {
            label: "Active",
            value: "active",
          },
          {
            label: "Deleted",
            value: "deleted",
          },
          {
            label: "Inactive",
            value: "inactive",
          },
        ],
      },
    },
    name: {
      as: "input",
      nullWhenEmpty: true,
      field: {
        placeholder: "Name",
        label: "Name",
      },
    },
    description: {
      nullWhenEmpty: true,
      as: "textarea",
      field: {
        placeholder: "Description",
        label: "Description",
      },
    },
    price: {
      as: "input",
      field: {
        required: true,
        placeholder: "Price",
        label: "Price",
        type: "number",
        icon: "$",
      },
    },
    in_storage: {
      as: "input",
      validation: [
        {
          validate: (value) => Number(value) >= 0,
          message: "Quantity must be greater than 0",
        },
      ],
      field: {
        type: "number",
        required: true,
        placeholder: "Quantity",
        label: "Quantity",
      },
    },
    sku: {
      nullWhenEmpty: true,
      as: "input",
      field: {
        placeholder: "SKU",
        label: "SKU",
      },
    },
    brand: {
      as: "input",
      nullWhenEmpty: true,
      field: {
        placeholder: "Brand",
        label: "Brand",
      },
    },
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleSubmit: FormOnSubmit = (doc) => {
    if (Math.random() > 0.5) {
      setFormErrors({
        name: "Name is already taken",
      });
    } else {
      alert(JSON.stringify(doc, null, 2));
    }

    console.log(doc);
  };

  return (
    <>
      <Form
        className="d-flex gap-12 flex-column align-items-stretch"
        fields={fields}
        setFields={setFields}
        onSubmit={handleSubmit}
        errors={formErrors}
        setErrors={setFormErrors}
      />
    </>
  );
}`;

export function FormScreen() {
  return (
    <>
      <div>
        <h1>Form</h1>
        <p>
          Form is a component that helps you to create a form with validation,
          error handling, and editing state.
        </p>
      </div>
      <h2>Example</h2>
      <CodeBlock code={code} scope={scope} />
      <h2>API</h2>
    </>
  );
}
