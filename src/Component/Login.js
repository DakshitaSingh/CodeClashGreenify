import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔐 Sign In Handler
  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.emailVerified) {
          navigate("/dashboard"); // ✅ Redirect if verified
        } else {
          alert("Please verify your email before signing in.");
        }
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  };

  // 🆕 Register Handler
  const handleRegister = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // ✅ Send email verification
        sendEmailVerification(user)
          .then(() => {
            alert("Verification email sent. Please check your inbox before signing in.");
          })
          .catch((error) => {
            alert("Failed to send verification email: " + error.message);
          });
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
      });
  };

  // 🔁 Forgot Password Handler
  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email address to reset your password.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Please check your inbox.");
      })
      .catch((error) => {
        alert("Error sending password reset email: " + error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <h2 className="login__logoText">Greenify</h2>
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <h5>Email</h5>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 🔁 Forgot Password */}
          <p className="login__forgotPassword">
            <span
              onClick={handleForgotPassword}
              style={{ cursor: "pointer", color: "green" }}
            >
              Forgot Password?
            </span>
          </p>

          <button className="login__signInButton" type="submit">
            Sign In
          </button>

          <p>
            By signing in, you agree to Greenify’s{" "}
            <span className="green-link">Terms of Use</span> and{" "}
            <span className="green-link">Privacy Policy</span>.
          </p>

          <button
            className="login__registerButton"
            type="button"
            onClick={handleRegister}
          >
            Create your Greenify account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
