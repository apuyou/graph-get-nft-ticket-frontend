import Address from "./address";

export default function TicketsList({ event }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {event.tickets.map(({ id, owner }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>
              <Address address={owner} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
