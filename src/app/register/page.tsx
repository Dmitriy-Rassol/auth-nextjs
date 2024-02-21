"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SimpleReactValidator from "simple-react-validator";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "../components/Alert";
export default function Register() {
  const router = useRouter();

  const [login, setLogin] = useState<string>("Login");
  const [email, setEmail] = useState<string>("Email");
  const [password, setPassword] = useState<string>("Password");
  const [validator] = useState(new SimpleReactValidator());
  const [showAlert, setShowAlert] = useState<
    "info" | "error" | "success" | null
  >(null);
  
  const onSubmit = async (
    ev: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();

      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify({
            login,
            email,
            password,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Success: ", result);
        setShowAlert("success");
        //router.push("/");
      } catch (error) {
        console.log("Error: ", error);
        setShowAlert("error");
      } // Действия при успешной валидации
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
        defaultValue=""
        handleChange={(str) => setLogin(str)}
        name={"login"}
        validator={validator}
      />
      <Input
        type="email"
        label="Your email"
        placeholder="Your email"
        defaultValue=""
        handleChange={(str) => setEmail(str)}
        name={"email"}
        validator={validator}
      />
      <Input
        type="password"
        label="Your password"
        placeholder="Your password"
        defaultValue=""
        handleChange={(str) => setPassword(str)}
        name={"password"}
        validator={validator}
      />
      <Button disabled={!validator.allValid()} text="Sign up" />
    </form>
  );
}
