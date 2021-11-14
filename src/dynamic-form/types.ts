export interface SelectOption {
  value: any;
  name: string;
}

export interface TextField {
  variableName: string;
  label: string;
  placeHolder?: string;
}

export interface FieldMapping {
  selectOptions: SelectOption[];
  textField: TextField;
  defaultTextValue?: string;
  defaultSelectValue?: SelectOption;
  isValid?: boolean;
}