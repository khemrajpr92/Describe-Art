import emailjs from "@emailjs/browser";

type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const sendMail = async (variables: EmailData) => {
  const data = {
    user_name: variables.name,
    email: variables.email,
    subject: variables.subject,
    message: variables.message,
  };
  try {
    const response = await emailjs.send(
      "service_z905fmr",
      "template_1p76z8k",
      data,
      "jcoqlfowIkys2Yh1s"
    );
    return response;
  } catch (err: any) {
    throw new Error("Mail not send", err);
  }
};

export default sendMail;
