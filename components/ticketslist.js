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
            <td>{owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
