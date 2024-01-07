"use client";
import NotReady from "@/components/notReady";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignupPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <NotReady />
    // <section className="flex flex-col gap-4 w-96 m-auto">
    //   <h2 className="text-3xl font-semibold my-4">Sign Up</h2>
    //   <form
    //     onSubmit={handleSubmit}
    //     id="signupForm"
    //     className="flex flex-col gap-4 w-96 m-auto"
    //   >
    //     <div>
    //       <label htmlFor="name">Name</label>
    //       <Input type="text" id="name" />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <Input type="email" id="email" />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <Input type="password" id="password" />
    //     </div>
    //     <div>
    //       <label htmlFor="c_password">Confirm Password</label>
    //       <Input type="password" id="c_password" />
    //     </div>
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </section>
  );
};
export default SignupPage;
