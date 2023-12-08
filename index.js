import * as contactsServise from "./contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsServise.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contactsServise.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactsServise.addContact(data);
      return console.log(newContact);
    case "deleteById":
      const deleteContact = await contactsServise.removeContact(id);
      return console.log(deleteContact);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({action: "add", name: "Andrii Zirchenko", email: "test@gmail.com", phone: "0964490291",});
// invokeAction({ action: "deleteById", id: "e6ywwRe4jcqxXfCZOj_1e" });
