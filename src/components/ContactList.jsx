import { useEffect, useState } from "react";
import React from "react";
import ContactRow from "./contactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const json = await response.json();
        setContacts(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <div className="table-header">
    //         <th colSpan="3">Contact List</th>
    //       </div>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>Name</td>
    //       <td>Email</td>
    //       <td>Phone</td>
    //     </tr>
    //     {contacts.map((contact) => (
    //       <ContactRow
    //         contact={contact}
    //         setSelectedContactId={setSelectedContactId}
    //         key={contact.id}
    //       />
    //     ))}
    //   </tbody>
    // </table>
    <div className="table">
      <div className="table-header">
        <th colSpan="3">Contact List</th>
      </div>
      <table>
        <thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {contacts.map((contact) => (
              <ContactRow
                contact={contact}
                setSelectedContactId={setSelectedContactId}
                key={contact.id}
              />
            ))}
          </tbody>
        </thead>
      </table>
    </div>
  );
}
