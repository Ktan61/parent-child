import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne"; // rename it anything you want as long as the direct pathway is there
import ChildToParent from "./ParentTwo";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <ParentToChild/>
        <ChildToParent/>
      </main>
    </>
  );
}
