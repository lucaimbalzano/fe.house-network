import Header from "@/components/Header";
import LoginUserForm from "./login-user-form";

export default async function LoginPage() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000000);
  // });
  return (
    <>
      <Header />
      <LoginUserForm />
    </>
  );
}
