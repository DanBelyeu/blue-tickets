import styles from "../page.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import TicketControllerPanel from "./ticket-controller-panel";
import AddItem from "./add-item";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <TicketControllerPanel/>
         <AddItem/>
      </main>
    </div>
  );
}