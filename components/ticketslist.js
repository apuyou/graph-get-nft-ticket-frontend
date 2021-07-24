import { useQuery, gql } from "@apollo/client";

const GET_TICKETS = gql`
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

export default function TicketsList({ eventAddress }) {
  const { loading, error, data } = useQuery(GET_TICKETS, {
    variables: {
      eventAddress,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {data.event.tickets.map(({ id, owner }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
