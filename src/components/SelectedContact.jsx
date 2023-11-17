import { useEffect, useState } from "react";

export default function SelectedContact({
  SelectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSingleContact(userId) {
      try {
        const result = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const json = await result.json();
        setContact(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingleContact(SelectedContactId);
  }, []);
  return (
    <tbody>
      <div className="table-body">
        <td>
          <strong>Selected Contact is {contact?.name}</strong>
        </td>
        <td>
          <strong>Email: {contact?.email}</strong>
        </td>
        <td>
          <strong>Phone: {contact?.phone}</strong>
        </td>
        <td>
          <strong>Website: {contact?.website}</strong>
        </td>
        <div className="data-button">
          <button onClick={() => setSelectedContactId(null)}>Close</button>
        </div>
      </div>
    </tbody>
  );
}
