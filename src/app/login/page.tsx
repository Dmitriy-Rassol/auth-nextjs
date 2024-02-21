"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "../components/Alert";

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = useState<string>("Login");
  const [password, setPassword] = useState<string>("Password");

  const [showAlert, setShowAlert] = useState<
    "info" | "error" | "success" | null
  >(null);

  const onSubmit = async (
    ev: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          login,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Success: ", result);
      setShowAlert("success");
      router.push("/");
    } catch (error) {
      console.log("Error: ", error);
      setShowAlert("error");
    }
  };

  return (
    <form method="POST" autoComplete="off" onSubmit={onSubmit}>
      {showAlert && (
        <Alert type={showAlert}>{`Auth status is: ${showAlert}`}</Alert>
      )}
      <Input
        type="text"
        label="Your login"
        placeholder="Your login"
        defaultValue="Login"
        handleChange={(str) => setLogin(str)}
        name={"login"}
        
      />
      <Input
        type="password"
        label="Your password"
        placeholder="Your password"
        defaultValue="Password"
        handleChange={(str) => setPassword(str)}
        name={"password"}
      /> 
      <Button text="Sign in" disabled={false} />
    </form>
  );
}
