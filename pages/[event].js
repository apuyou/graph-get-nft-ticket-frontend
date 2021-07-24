import { useRouter } from "next/dist/client/router";

import TicketsList from "../components/ticketslist";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Event() {
  const { query } = useRouter();

  return (
    <Layout>
      <h1 className={styles.title}>GET NFT Tickets Subgraph Explorer</h1>

      <h2>Tickets list for {query.event}</h2>

      <div>
        <TicketsList eventAddress={query.event} />
      </div>
    </Layout>
  );
}
