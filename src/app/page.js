import styles from "./page.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import PrizePanel from "./prize-panel";
import ChildrenPanel from "./children-panel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <ChildrenPanel isParentView={false}/>
      <PrizePanel/>
      </main>
    </div>
  );
}
