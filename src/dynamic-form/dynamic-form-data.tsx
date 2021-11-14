import { FieldMapping } from "./types";

export const fieldMappings: FieldMapping[] = [
  {
    selectOptions: [
      { name: "option 1", value: "option1" },
      { name: "option 2", value: "option2" },
    ],
    textField: {
      label: "greeting",
      variableName: "greeting",
      placeHolder: "this field has a default value",
    },
    defaultSelectValue: {
      name: "option 2",
      value: "option2",
    },
    defaultTextValue: "some defaulted text",
  },
  {
    selectOptions: [
      { name: "option 3", value: "option3" },
      { name: "option 4", value: "option4" },
    ],
    textField: {
      label: "salutations",
      variableName: "salutations",
    },
  },
  {
    selectOptions: [
      { name: "option 2", value: "option2" },
      { name: "default", value: "default" },
    ],
    textField: {
      label: "A new Thingy",
      variableName: "a_new_thingy",
      placeHolder: "text field has placeholder"
    },
    defaultSelectValue: {
      name: "default",
      value: "default",
    },
  },
];