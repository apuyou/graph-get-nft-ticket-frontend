import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

const GET_EVENTS = gql`
  query GetEvents {
    events(last: 100) {
      id
      name
    }
  }
`;

export default function EventsList() {
  const { loading, error, data } = useQuery(GET_EVENTS);

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
          <th>Event Name</th>
          <th>Event ID</th>
        </tr>
      </thead>
      <tbody>
        {data.events.map(({ id, name }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <Link href={{ pathname: "/[event]", query: { event: id } }}>
                <a>{id}</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
