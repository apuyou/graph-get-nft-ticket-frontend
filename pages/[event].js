import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

import TicketsList from "../components/ticketslist";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const GET_EVENT = gql`
  query GetEvent($eventAddress: String!) {
    event(id: $eventAddress) {
      id
      name
      tickets(first: 100) {
        id
        owner
      }
    }
  }
`;

export default function Event() {
  const { query } = useRouter();
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { eventAddress: query.event },
    skip: !query?.event,
  });

  const Result = () => {
    if (loading || !data) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error :(</p>;
    }

    return (
      <div>
        <TicketsList event={data.event} />
      </div>
    );
  };

  return (
    <Layout>
      <h1 className={styles.title}>GET NFT Tickets Subgraph Explorer</h1>

      <h2 className={styles.eventdetails}>
        Tickets list
        <br />
        {data?.event?.name}
        <br />
        {query.event}
      </h2>

      <div className={styles.back}>
        <Link href="/">
          <a>&laquo; Back</a>
        </Link>
      </div>

      <Result />
    </Layout>
  );
}
