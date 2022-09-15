import styles from "./styles.module.scss";
import imageCoin from "../../assets/images/money_coin.png";
import ModalComponent from "../ModalComponent";

export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={imageCoin} alt="image coin" />
        <h1 className={styles.fontMyFinances}>My Finances</h1>
      </div>
      <ModalComponent />
    </div>
  );
}
