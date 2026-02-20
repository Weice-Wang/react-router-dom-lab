// DEPENDENCY IMPORTS
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

// COMPONENT IMPORTS
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const initialState = [
  {
    _id: 1,
    boxSize: "Small",
    boxOwner: "Alex",
  },
  {
    _id: 2,
    boxSize: "Big",
    boxOwner: "Weice",
  },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        ></Route>
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        ></Route>
        <Route path="/new-mailbox" element={<MailboxForm />}></Route>
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        ></Route>
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;
