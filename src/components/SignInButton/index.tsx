import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const SignInButton = () => {
  const isUserLoggedIn = true;

  if (!isUserLoggedIn)
    return (
      <button className={styles.signInButton}>
        <FaGithub color="#eba417" />
        Sign in with Github
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );

  return (
    <button className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Jhessiny Mattos
    </button>
  );
};

export default SignInButton;
