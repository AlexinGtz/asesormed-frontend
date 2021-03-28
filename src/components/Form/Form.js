import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Input from "../Input/Input";

import "./Form.css";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  const formClassName = props.formClassName
    ? ["form", ...props.formClassName.split(" ")].join(" ")
    : "form";

  const formContentClassName = props.formContentClassName
    ? ["formContent", ...props.formContentClassName.split(" ")].join(" ")
    : "formContent";

  const formDivClassName = props.formDivClassName
    ? ["formDiv", ...props.formDivClassName.split(" ")].join(" ")
    : "formDiv";

  const onSubmit = () => {
    if (!validateInputs()) return;
    else {
      props.onButtonClick(formData);
    }
  };

  const validateInputs = () => {
    return true;
  };

  return (
    <div className={formDivClassName}>
      <h1 className="formTitle">{props.config.title1}</h1>
      <div>
        <div className={formContentClassName}>
          <h2 className="formTitle">{props.config.title2}</h2>

          <form
            className={formClassName}
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
            onKeyPress={(event) => {
              if (props.enableKeypress) {
                if (event.key === "Enter") {
                  onSubmit();
                }
              }
            }}
          >
            {props.config.inputs.map((item) => {
              return (
                <Input
                  key={item.placeholder}
                  type={item.type}
                  placeholder={item.placeholder}
                  className="formInput"
                  onChange={(event) => {
                    setFormData((prevState) => {
                      return {
                        ...prevState,
                        [event.target.placeholder]: event.target.value,
                      };
                    });
                  }}
                  value={formData[item.placeholder] || ""}
                />
              );
            })}
            <Button type="submit">{props.config.button}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
