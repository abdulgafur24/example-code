import api, { tokenlessApi } from "./api";

interface loginProps {
  phone: string;
  password: string;
}

export const login = (data: loginProps) => {
  return new Promise((resolve, reject) => {
    tokenlessApi
      .post("/auth/login/", data)
      .then((response) => {
        let token = response.data.data.token;
        api.defaults.headers.Authorization = `token ${token}`;
        localStorage.setItem("token", token);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

interface sendCodeProps {
  phone_number: string;
}

export const sendCode = (data: sendCodeProps) => {
  return tokenlessApi.post("/register/sendsms/", data);
};

interface verifyPhoneProps {
  phone_number: string;
  code: string;
}

export const verifyPhone = (data: verifyPhoneProps) => {
  return tokenlessApi.post("/register/verify/", data);
};

interface checkPasswordProps {
  name: string;
  surname: string;
  password: string;
}

export const checkPassword = (data: checkPasswordProps) => {
  return tokenlessApi.post("/checkPassword/", data);
};

interface checkPhoneProps {
  phone: string;
}

export const checkPhone = (data: checkPhoneProps) => {
  return tokenlessApi.post("/checkPhone/", data);
};

interface registrationProps {
  phone_number: string;
  code: string;

  type: string;

  name: string;
  surname: string;
  name_company?: string;
  bin?: string;
  email?: string;
  password: string;

  phone_company?: string;
}

export const registration = (data: registrationProps) => {
  return new Promise((resolve, reject) => {
    tokenlessApi
      .post("/register/", data)
      .then((response) => {
        let token = response.data.token;
        api.defaults.headers.Authorization = `token ${token}`;
        localStorage.setItem("token", token);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

interface resetPasswordProps {
  phone: string;
  password: string;
  re_password: string;
  code: string;
}

export const resetPassword = (data: resetPasswordProps) => {
  return tokenlessApi.post("/auth/reset/", data);
};

export const logout = () => {
  delete api.defaults.headers.Authorization;
  localStorage.removeItem("token");
};
