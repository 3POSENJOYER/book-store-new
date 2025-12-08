/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

const LoginSignUp: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tabButton1");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleTab = (tab: string): void => {
    setActiveTab(tab);
  };

  const HandleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const body =
      activeTab === "tabButton1"
        ? JSON.stringify({
            email,
            password,
          })
        : JSON.stringify({
            name,
            email,
            password,
          });

    const url =
      activeTab === "tabButton1"
        ? "http://localhost:3000/api/login"
        : "http://localhost:3000/api/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body,
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/shop");
      } else {
        alert(data.message || "Сталася помилка");
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Не вдалося з'єднатися з сервером");
    }
  };

  return (
    <>
      <div className="loginSignUpSection">
        <div className="loginSignUpContainer">
          <div className="loginSignUpTabs">
            <p
              onClick={(): void => {
                handleTab("tabButton1");
              }}
              className={activeTab === "tabButton1" ? "active" : ""}
            >
              Login
            </p>
            <p
              onClick={(): void => {
                handleTab("tabButton2");
              }}
              className={activeTab === "tabButton2" ? "active" : ""}
            >
              Register
            </p>
          </div>

          <div className="loginSignUpTabsContent">
            {activeTab === "tabButton1" && (
              <div className="loginSignUpTabsContentLogin">
                <form onSubmit={HandleSubmit}>
                  <input
                    value={email}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ): void => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email address *"
                    required
                  />

                  <input
                    value={password}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ): void => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Password *"
                    required
                  />

                  <div className="loginSignUpForgetPass">
                    <label>
                      <input type="checkbox" className="brandRadio" />
                      <p>Remember me</p>
                    </label>
                    <p>
                      <Link to="/resetPassword">Lost password?</Link>
                    </p>
                  </div>

                  <button type="submit">Log In</button>
                </form>

                <div className="loginSignUpTabsContentLoginText">
                  <p>
                    No account yet?{" "}
                    <span
                      onClick={(): void => {
                        handleTab("tabButton2");
                      }}
                    >
                      Create Account
                    </span>
                  </p>
                </div>
              </div>
            )}

            {activeTab === "tabButton2" && (
              <div className="loginSignUpTabsContentRegister">
                <form onSubmit={HandleSubmit}>
                  <input
                    value={name}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ): void => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="User name"
                    required
                  />

                  <input
                    value={email}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ): void => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email address *"
                    required
                  />

                  <input
                    value={password}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ): void => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Password *"
                    required
                  />

                  <p>
                    Your personal data will be used for managing your account as
                    described in{" "}
                    <Link
                      to="/terms"
                      style={{
                        textDecoration: "none",
                        color: "#c32929",
                      }}
                    >
                      privacy policy
                    </Link>
                    .
                  </p>

                  <button type="submit">Register</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
