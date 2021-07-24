import EventsList from "../components/eventslist";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>GET NFT Tickets Subgraph Explorer</h1>

      <h2>Events list</h2>

      <div>
        <EventsList />
      </div>
    </Layout>
  );
}
