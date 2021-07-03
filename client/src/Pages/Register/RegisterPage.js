import React from "react";
import Register from "../../module/user/Components/Register/Register";

export default function RegisterPage() {
  return (
    <section
      className="account-section bg_img mt-2"
      data-background="./assets/images/account/account-bg.jpg"
      style={{
        backgroundImage: 'url("./assets/images/account/account-bg.jpg")',
      }}
    >
      <Register />
    </section>
  );
}
