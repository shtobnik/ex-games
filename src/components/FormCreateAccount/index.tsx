import { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Styles
import styles from './FormCreateAccount.module.scss';

// Components
import LanguageSwitcher from '../languageSwitcher';
import Title from '../title';
import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';
import Link from '../link';
import Icon from '../icon';

const FormCreateAccount: FC = () => {
  const initialValues = {
    userId: '',
    password: '',
    accountName: '',
    email: '',
    verificationCode: '',
    termsOfService: false,
    privacyPolicy: false,
    promotionalEmails: false,
  };

  const validationSchema = Yup.object({
    userId: Yup.string()
      .required('User ID is required')
      .min(2, 'User ID must be at least 2 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    accountName: Yup.string()
      .required('Account Name is required')
      .min(2, 'Account Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    verificationCode: Yup.string()
      .required('Verification Code is required')
      .min(2, 'Verification Code must be at least 2 characters'),
    termsOfService: Yup.boolean()
      .required('You must accept the Terms of Service')
      .oneOf([true], 'You must accept the Terms of Service'),
    privacyPolicy: Yup.boolean()
      .required('You must accept the Privacy Policy')
      .oneOf([true], 'You must accept the Privacy Policy'),
    promotionalEmails: Yup.boolean(), // Цей чекбокс необов'язковий
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
            <Form noValidate className={styles.formContent}>
              <div className={styles.inputsWrapper}>
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
                  hint="8 characters minimum"
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
              </div>
              <div className={styles.checkboxes}>
                <Checkbox
                  name="termsOfService"
                  label={
                    <>
                      [Required] I read the{' '}
                      <a className={styles.checkboxLink} href="#">
                        Terms of Service
                      </a>{' '}
                      and I agree to the terms.
                    </>
                  }
                />
                <Checkbox
                  name="privacyPolicy"
                  label={
                    <>
                      [Required] I read the{' '}
                      <a className={styles.checkboxLink} href="#">
                        Privacy Policy
                      </a>{' '}
                      and I agree to the terms.
                    </>
                  }
                />
                <Checkbox
                  name="promotionalEmails"
                  label="[Optional] I would like to receive promotional emails."
                />
              </div>
              <Button />
            </Form>
          )}
        </Formik>
        <div className={styles.footer}>
          <Link color="grey">
            <Icon
              image={'support'}
              width={'14px'}
              height={'16px'}
              color={'#7e6969'}
              fillRule="evenodd"
              clipRule="evenodd"
            />
            Have Promo Code?
          </Link>
          <Link color="grey">Contact Support</Link>
        </div>
      </div>
    </section>
  );
};

export default FormCreateAccount;
