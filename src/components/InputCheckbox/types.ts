import { FunctionComponent } from "react";
import { Transaction } from "../../utils/types";

type InputCheckboxProps = {
  id: string | number;
  checked?: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
};

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>;
