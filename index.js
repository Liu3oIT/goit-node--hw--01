const contacts = require("./db/contacts");
const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
// -- Yargs
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const commandsArray = hideBin(process.argv)
// const { argv } = yargs(commandsArray);


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const all = await contacts.listContacts();
      console.log(all);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);

      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const remove = await contacts.removeContact(id);
      console.log(remove);
      break;
    default:
      console.log("Unknown action");
      break;
  }
};
invokeAction(argv);
// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", contactId: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "removeContact", contactId: "j4PMzBUkh9x2UrJW8PJn5" });
// invokeAction({
//   action: "addContact",
//   name: "Volodymyr",
//   email: "Volodymyr@gmail.com",
//   phone: "(000) 111-2222",
// });

// const actionIndex = process.argv.indexOf('--action')
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1]
//   invokeAction({action})
// }


