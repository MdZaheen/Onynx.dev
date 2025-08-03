import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import styles from "./page.module.css";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Home />
      </div>
      <About />
    </div>
  );
}
