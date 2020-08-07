import { useAuth } from "reactfire";
import firebase from "firebase/app";
import { useRouter } from "next/router";

const SignInForm = () => {
  const router = useRouter();
  const auth = useAuth();

  const onClick = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    router.push("/");
  };

  return (
    <>
      <h1>Sign In</h1>
      <button
        onClick={onClick}
        className="bg-black text-white py-3 px-6 rounded-md hover:shadow-lg hover:bg-gray-800 transition-all duration-200"
      >
        Sign In with Google
      </button>
    </>
  );
};

export default SignInForm;
