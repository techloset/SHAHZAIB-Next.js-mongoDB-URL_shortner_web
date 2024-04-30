"use client";
import Input from "../../../../../[components]/input/Input";
import Button from "../../../../../[components]/button/Button";
import Loader from "../../../../../[components]/Loader";
import useRegisterForm from "../components/useRegisterForm"

export default function RegisterForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleRegister,
  } = useRegisterForm()
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <Input
            type="email"
            placeholder="   Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="   Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="   Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="   Confirm Passward"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button name="Register" onClick={handleRegister} />
        </div>
      )}
    </>
  );
}
