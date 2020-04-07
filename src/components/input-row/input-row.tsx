import React from "react";
import { Field } from "react-final-form";

import { InputRowProps } from "./types";
import { ErrorLabel, InputWrapper, LabelWrapper, Row } from "./ui";

export const InputRow: React.FC<InputRowProps> = ({
  label,
  name,
  inputProps,
}) => {
  return (
    <Row>
      <LabelWrapper>
        <label>{label}</label>
      </LabelWrapper>

      <InputWrapper>
        <Field
          name={name}
          render={({ input, meta }) => {
            return (
              <>
                <input type="text" {...input} {...inputProps} />
                {meta.error && meta.touched && (
                  <ErrorLabel>*{meta.error}</ErrorLabel>
                )}
              </>
            );
          }}
        />
      </InputWrapper>
    </Row>
  );
};
