import axios from "axios";

type signInType = {
  username: string;
  password: string;
};

type signUpType = {
  name: string;
  email: string;
  password: string;
};

export const signIn = async ({ username, password }: signInType) => {
  try {
    const res = await axios.post(
      "/api/user/signIn",
      { email: username, password },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const signUp = async ({ name, email, password }: signUpType) => {
  try {
    const res = await axios.post(
      "/api/user/signUp",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error: any) {
    return error?.response;
  }
};

export const forgotPassword = async ({ email }: { email: string }) => {
  try {
    const res = await axios.post(
      "/api/user/forgot-password",
      {
        email,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error: any) {
    return error?.response;
  }
};
