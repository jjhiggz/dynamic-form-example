import { useEffect, useState } from "react";
import { fieldMappings } from "./dynamic-form-data";
import { FieldMapping, SelectOption } from "./types";

export type ChangeTextFieldWithSelectHandler = (
  textState: string,
  selectState: SelectOption
) => void;

const TextFieldWithSelect = ({
  fieldMapping,
  onChangeTextFieldWithSelect,
}: {
  fieldMapping: FieldMapping;
  onChangeTextFieldWithSelect: ChangeTextFieldWithSelectHandler;
}) => {
  const textData = fieldMapping.textField;
  const selectData = fieldMapping.selectOptions;
  const [textState, setTextState] = useState<string>(
    fieldMapping.defaultTextValue || ""
  );
  const [selectState, setSelectState] = useState<SelectOption>(
    fieldMapping.defaultSelectValue || selectData[0]
  );

  useEffect(() => {
    onChangeTextFieldWithSelect(textState, selectState);
  }, [textState, selectState]);

  return (
    <div>
      <label>{textData.label}: </label>
      <input
        type="text"
        placeholder={textData.placeHolder || "no placeholder"}
        onChange={(e) => {
          setTextState(e.currentTarget.value);
        }}
        value={textState}
      />
      <select
        onChange={(e) => {
          setSelectState({ name: e.target.innerText, value: e.target.value });
        }}
        value={selectState.value}
      >
        {selectData.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};


interface FormValue extends FieldMapping {
  textValue: string;
  selectValue: string;
}

const DynamicForm = () => {
  const initialFormValues: FormValue[] = fieldMappings.map((fieldMapping) => ({
    ...fieldMapping,
    selectValue: "",
    textValue: "",
  }));

  const [formData, setFormData] = useState<FormValue[]>(initialFormValues);

  const updateFormValueAt = (
    index: number,
    textState: string,
    selectState: SelectOption
  ) => {
    if (index >= fieldMappings.length) {
      throw new Error("index too large");
    }
    const newMapping: FormValue = {
      ...formData[index],
      textValue: textState,
      selectValue: selectState.value,
    };
    const existingData = formData.slice();

    existingData[index] = newMapping;

    setFormData(existingData);
  };

  return (
    <>
      <h1>My Cool Dynamic Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //  The following is just for viewing purposes
          const cleanedFormData = formData.map(field => ({
            label: field.textField.label,
            textValue: field.textValue,
            selectedValue: field.selectValue,
          }))
          alert(JSON.stringify(cleanedFormData))

        }}
      >
        {fieldMappings.map((fieldMapping, index) => (
          <TextFieldWithSelect
            key={index}
            fieldMapping={fieldMapping}
            onChangeTextFieldWithSelect={(textState, selectState) => {
              updateFormValueAt(index, textState, selectState)
            }}
          />
        ))}
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
};

export default DynamicForm;
