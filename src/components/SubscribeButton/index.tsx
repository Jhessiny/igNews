import styles from "./styles.module.scss";

interface SubscribeButton {
  priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeButton) => {
  return <button className={styles.subscribeButton}>Subscribe Now</button>;
};

export default SubscribeButton;
