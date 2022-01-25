import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (!session)
    return (
      <button className={styles.signInButton} onClick={() => signIn("github")}>
        <FaGithub color="#eba417" />
        Sign in with Github
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );

  return (
    <button className={styles.signInButton} onClick={()=> signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
    </button>
  );
};

export default SignInButton;
