import { signIn } from "next-auth/react";
const AuthPage = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Authentication Page</h1>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-md mx-2"
        >
          Sign in with Google
        </button>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="bg-gray-800 text-white px-4 py-2 rounded-md mx-2"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
