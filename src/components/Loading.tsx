import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className="loadingScreen">
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
