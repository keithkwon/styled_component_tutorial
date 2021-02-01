import React, { useState, useEffect } from "react";
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solie #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  ${Button} {
    margin-top: 40px;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        corporis consequatur illo illum esse rem, doloribus quidem perspiciatis
        maxime iure voluptatibus fuga nam voluptatum dolor quas, sed, ab cum
        inventore?
      </p>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formFields.username}
              name="username"
              placeholder="Username"
              type="text"
              onChange={handleInputChange}
            />
            <PasswordInput
              value={formFields.password}
              name="password"
              onChange={handleInputChange}
            />
          </>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading.." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
