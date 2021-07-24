import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GET NFT Tickets Subgraph Explorer</title>
        <meta
          name="description"
          content="Next.js frontend to query a subgraph of NFT Tickets using GET Protocol."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GET NFT Tickets Subgraph Explorer</h1>

        <h2>Events list</h2>

        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event Name</td>
              <td>Event ID</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        Made by Arthur Puyou for the ETH CC Hackathon 2021.
        <br />
        Next.js frontend hosted on Vercel, querying the GET NFT Ticket subgraph
        on The Graph.
      </footer>
    </div>
  );
}
