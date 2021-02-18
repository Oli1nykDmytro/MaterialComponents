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
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);

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
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          {/* <Field id="firstName" name="firstName" placeholder="First Name" /> */}
          <Box width={75} p={1} display="flex" flexDirection="column">
            <TextField />
            <TextField />
            <TextField />
          </Box>

          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />

          <Button>Sing Up</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
