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
    <div>
      <p>Selected Contact is {contact?.name}</p>
      <p>Email: {contact?.email}</p>
      <p>Phone: {contact?.phone}</p>
      <p>Website: {contact?.website}</p>
      <button onClick={() => setSelectedContactId(null)}>Close</button>
    </div>
  );
}
