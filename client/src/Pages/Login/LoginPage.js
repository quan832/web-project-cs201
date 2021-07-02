import React from "react";
import Login from "../../module/user/Components/Login/Login";

export default function LoginPage() {
  return (
    <section
      className="account-section bg_img mt-5"
      data-background="./assets/images/account/account-bg.jpg"
    >
      <Login />
    </section>
  );
}
