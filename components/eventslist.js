import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

import Address from "./address";

const GET_EVENTS = gql`
  query GetEvents {
    events(last: 100) {
      id
      name
    }
  }
`;

export default function EventsList() {
  const { error, data } = useQuery(GET_EVENTS);

  if (!data) {
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
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.events.map(({ id, name }) => (
          <tr key={id}>
            <td>
              <Link href={{ pathname: "/[event]", query: { event: id } }}>
                <a>
                  <Address address={id} />
                </a>
              </Link>
            </td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
