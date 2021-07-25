export default function Address({ address }) {
  return address.slice(0, 6) + "…" + address.slice(-8);
}
