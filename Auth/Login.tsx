import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Flex, Input, Phone, Typography } from "components/Atoms";
import FormContainer from "components/Molecules/FormContainer";
import FormHeader from "components/Molecules/FormHeader";
import { Formik } from "formik";
import cn from "utils/cn";
import { login } from "services/auth";
import { Link, useHistory } from "react-router-dom";
import { errorMessage } from "components/Atoms/Notify";
import { AuthContext } from "context/AuthContext";
import colors from "theme/colors";
import "./style.scss";

export default function Login() {
  const cl = cn("Login");
  const { setAuthorized } = useContext(AuthContext);
  const history = useHistory();
  return (
    <FormContainer>
      <Formik
        initialValues={{
          phone: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          login(values)
            .then(() => {
              setAuthorized(true);
              history.push("/gsm/large");
            })
            .catch((error) => {
              if (error.response) {
                errorMessage({
                  title: "Ошибка",
                  description: error.response.data.error,
                });
              }
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className={cl(null, ["FormContainer__form"])}
          >
            <FormHeader button="back" title="Вход" />
            <Phone
              label="Номер телефона"
              name="phone"
              type="text"
              error={errors.phone && touched.phone && errors.phone}
              onChange={(phone) =>
                handleChange({ target: { value: "+" + phone, name: "phone" } })
              }
              onBlur={handleBlur}
              value={values.phone}
              placeholder="Введите номер телефона"
            />

            <Input
              label="Пароль"
              type="password"
              name="password"
              error={errors.password && touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Введите пароль от brentmart"
            />
            <Button variant="link" className={cl("forgot-password")}>
              <Link to="/reset-password/1">Забыли пароль?</Link>
            </Button>
            <Button
              onClick={() => {}}
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              className={cl(null, ["FormContainer__button"])}
            >
              Продолжить
            </Button>
            <Flex
              flexDirection="column"
              alignItems="center"
              className="mt-5 mb-2"
            >
              <Typography variant="text3">Нет аккаунта?</Typography>
              <Link to="/registration/1">
                <Typography variant="text2" color={colors.primary}>
                  Зарегистрироваться
                </Typography>
              </Link>
            </Flex>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
}
