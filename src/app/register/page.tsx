import Header from "@/components/Header";
import RegisterUserForm from "./register-user-form";

export default async function RegisterPage() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  // });
  return (
    <>
      <Header />
      <section className="min-h-screen grid place-items-center">
        <div className="w-full">
          <RegisterUserForm />
        </div>
      </section>
    </>
  );
}
