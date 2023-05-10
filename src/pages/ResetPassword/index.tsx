import React from "react";
import { useParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const { id: resetToken } = useParams();
  return <div>{resetToken}</div>;
};

export default ResetPasswordPage;
