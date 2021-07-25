import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

import TicketsList from "../components/ticketslist";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const GET_EVENTS = gql`
  query GetEvents($eventAddress: String!) {
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
  const { loading, error, data } = useQuery(GET_EVENTS, {
    variables: { eventAddress: query.event },
  });

  const Result = () => {
    if (loading) {
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

      <h2>
        Tickets list
        <br />
        {data.event.name}
        <br />
        {query.event}
      </h2>

      <Result />
    </Layout>
  );
}
