import * as React from 'react';
import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';
import TextField from '../common/material-ui/TextField';
import Button from '../common/material-ui/Button';
import Box from '../common/material-ui/Box';
import Checkbox from '../common/material-ui/Checkbox';

interface ValuesInput {
  fullName: string;
  email: string;
  password: string;
}

const FormComponent: React.FC<{}> = () => {
  const initialValues: ValuesInput = { fullName: '', email: '', password: '' };
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
        validationSchema={yup.object({
          fullName: yup.string().required(),
          email: yup.string().email('Not Correct').required(),
          password: yup.string().min(8).required(),
        })}
      >
        <Form>
          <Box width={75} p={1} display="flex" flexDirection="column">
            <label htmlFor="firstName">First Name</label>
            <TextField />
            <label htmlFor="firstName">Email</label>
            <TextField type="email" />
            <label htmlFor="firstName">Password</label>
            <TextField type="password" />
          </Box>

          <Box display="flex">
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p>
              Creating an account means you’re okay with our{' '}
              <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>,
              and our default <a href="#">Notification Settings</a>.
            </p>
          </Box>

          <Button type="submit" color="secondary">
            Sing Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
