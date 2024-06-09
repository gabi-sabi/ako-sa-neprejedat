import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { Select } from '../components/ui/select';
import { Label } from './ui/label';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/input';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { callBackend, getNextFourTimeslots } from '../lib/utils';
import { useEffect, useState } from 'react';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
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
  border-radius: 0.5rem;
  width: 100%;
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  &:before {
    content: '❌ ';
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
          Rezervácia prebehla{' '}
          <span className="font-bold text-light-green">úspešne!</span>
        </span>
        <br />
        <span>Teším sa na vás online.</span>
      </p>,
      {
        duration: 8000,
        position: 'top-center',
      },
    );

  const handleSubmit = async (values, { resetForm }) => {
    const emailClientBody = `
      <html>
        <div>
          <p>Čauko, <b> ${values.firstName},</b></p>
          <p>
            potvrdzujem tvoju rezerváciu na skupinovú lekciu ${values.termin}, <br> Teším sa na teba
          </p>
          <p>
            Gabriela Sabolova, dietologicka
          </p>
        </div>
      </html>`;
    const emailAdminBody = `
      <html>
        <div>
          <p>Čauko, <b> Gabriela,</b></p>
          <p>
            rezerváciu na skupinovú lekciu ${values.termin} si udelal/a ${values.firstName} ${values.lastName}
          </p>
        </div>
      </html>`;
    try {
      await callBackend({
          method: 'POST',
          url: 'api/send',
          payload: {
            to: values.email,
            subject: 'potvrzeni',
            message: emailClientBody,
          },
      })
      await callBackend({
        method: 'POST',
        url: 'api/send',
        payload: {
          to: 'katacek@gmail.com', 
          subject: 'vytvoreni rezervace',
          message: emailAdminBody,
        },
    })
    } catch (err) {
      alert(err);
    }
    notify();
    resetForm();
  };

  const [timeSlots, setTimeSlots] = useState([]);
  useEffect(() => {
    const newTimeslots = getNextFourTimeslots();
    setTimeSlots(newTimeslots);
  }, []);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    termin: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Meno musí obsahovať maximálne 15 písmen.')
            .required('Povinné pole'),
          lastName: Yup.string()
            .max(20, 'Priezvisko musí obsahovať maximálne 20 písmen.')
            .required('Povinné pole'),
          email: Yup.string()
            .email('Neplatná e-mailová adresa.')
            .required('Povinné pole'),
          termin: Yup.string().required('Povinné pole'),
        })}
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
            <option value="" disabled hidden>
              Vyberte si termín...
            </option>
            {timeSlots.map((timeslot) => {
              return (
                <option value={timeslot} key={timeslot}>
                  {timeslot}
                </option>
              );
            })}
          </MySelect>
          <Button className="w-full mt-4" type="submit">
            Prídem
          </Button>
        </Form>
      </Formik>
    </>
  );
};
