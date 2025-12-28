import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <h3 className="mb-3 font-bold text-2xl text-center">Register</h3>

      <div className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm">
            Name
          </label>
          <input
            id="name"
            autoFocus
            type="text"
            placeholder="Name"
            className="block px-3 py-2 w-full border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <input
            id="email"
            autoFocus
            type="text"
            placeholder="Email"
            className="block px-3 py-2 w-full border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm">
            Password
          </label>
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="block px-3 py-2 w-full border rounded-md"
          />
        </div>
      </div>

      <button className="my-6 w-full h-10 rounded-lg bg-primary font-semibold">
        Register
      </button>

      <p className="text-sm text-neutral-500 text-center">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary">
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
