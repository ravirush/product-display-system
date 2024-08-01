import styles from './home.module.css';

export const metadata = {
  title: "Home Page - ProductBiz",
  description: "Home Page Description",
};

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Discover amazing products at ProductBiz!</h1>
        <p className={styles.desc}>This is a simple example of a product display page. Find detailed information and pricing for each product.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/hero.gif" alt="" className={styles.heroImage} />
      </div>
    </div>
  );
}

export default HomePage;