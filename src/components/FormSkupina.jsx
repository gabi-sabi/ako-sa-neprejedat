import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import { Select } from "../components/ui/select";
import { Label } from "./ui/label";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

MyTextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

const StyledSelect = styled.select`
  color: var(--blue);
  display: block;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 100%;
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Select>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </Select>
  );
};

MySelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export const FormSkupina = () => {
  const notify = () =>
    toast.success(
      <p className="text-center text-2xl">
        <span>
          Rezervácia prebehla{" "}
          <span className="font-bold text-light-green">úspešne!</span>
        </span>
        <br />
        <span>Teším sa na vás online.</span>
      </p>,
      {
        duration: 8000,
        position: "top-center",
      },
    );

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          termin: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Meno musí obsahovať maximálne 15 písmen.")
            .required("Povinné pole"),
          lastName: Yup.string()
            .max(20, "Priezvisko musí obsahovať maximálne 20 písmen.")
            .required("Povinné pole"),
          email: Yup.string()
            .email("Neplatná e-mailová adresa.`")
            .required("Povinné pole"),
          termin: Yup.string()
            .oneOf(["value1", "value2", "value3", "value4"], "Nesprávny výber")
            .required("Povinné pole"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="Meno"
            name="firstName"
            type="text"
            placeholder="Jana"
          />
          <MyTextInput
            label="Priezvisko"
            name="lastName"
            type="text"
            placeholder="Nováková"
          />
          <MyTextInput
            label="E-mail"
            name="email"
            type="email"
            placeholder="novakovaj@domena.com"
          />
          <MySelect label="Termín" name="termin">
            <option value="value1">pondelok 16. 9. 2024 19:00-20:00</option>
            <option value="value2">štvrtok 19. 9. 2024 19:00-20:00</option>
            <option value="value3">pondelok 23. 9. 2024 19:00-20:00</option>
            <option value="value4">štvrtok 26. 9. 2024 19:00-20:00</option>
          </MySelect>
          <Button className="w-full" type="submit" onClick={notify}>
            Prídem
          </Button>
        </Form>
      </Formik>
    </>
  );
};
