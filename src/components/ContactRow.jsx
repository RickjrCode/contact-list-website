export default function ContactRow({ contact, setSelectedContactId }) {
  const { name, email, phone } = contact;
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td className="name">
        <strong>{name}</strong>
      </td>
      <td className="email">{email}</td>
      <td className="phone">{phone}</td>
    </tr>
  );
}
