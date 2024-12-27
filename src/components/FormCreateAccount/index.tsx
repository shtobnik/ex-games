import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Styles
import styles from './FormCreateAccount.module.scss';

// Components
import LanguageSwitcher from '../LanguageSwitcher';
import Title from '../Title';
import Input from '../Input';

const FormCreateAccount: FC = () => {
  const initialValues = {
    userId: '',
    password: '',
    accountName: '',
    email: '',
    verificationCode: '',
  };

  const validationSchema = Yup.object({
    userId: Yup.string()
      .required('userId is required')
      .min(2, 'userId must be at least 2 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    accountName: Yup.string()
      .required('accountName is required')
      .min(2, 'accountName must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    verificationCode: Yup.string()
      .required('verificationCode is required')
      .min(2, 'verificationCode must be at least 2 characters'),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log('Form data', values);
  };

  return (
    <section className={styles.formWrapper}>
      <LanguageSwitcher />
      <Title />
      <div className={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form noValidate>
              <Input
                name="userId"
                type="text"
                label="User ID"
                icon="userID"
                iconWidth="14px"
                iconHeight="14px"
              />
              <Input
                name="password"
                type="password"
                label="Password"
                icon="password"
                iconWidth="12px"
                iconHeight="15px"
                hint="8 characters minimun"
              />
              <Input
                name="accountName"
                type="text"
                label="Account Name"
                icon="accountName"
                iconWidth="13px"
                iconHeight="14px"
                hint="Visible nickname for your profile"
              />
              <Input
                name="email"
                type="email"
                label="Email"
                icon="email"
                iconWidth="14px"
                iconHeight="12px"
              />
              <Input
                name="verificationCode"
                type="text"
                label="Verification Code"
                icon="email"
                iconWidth="14px"
                iconHeight="12px"
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormCreateAccount;
