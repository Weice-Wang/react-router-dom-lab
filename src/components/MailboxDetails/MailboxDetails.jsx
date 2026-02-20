import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  console.log(mailboxId);
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );
  console.log(selectedBox);

  return (
    <>
      <h2>Mailbox Details</h2>
      <p>Boxholder:{selectedBox.boxOwner}</p>
      <p>Box Size:{selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
