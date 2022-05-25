import NewDeck from "../NewDeck";

const EditDeck = ({ deckInfo, loadDeck }) => {
  const { name, description, id } = deckInfo;
  return (
    <NewDeck
      title={"Edit Deck"}
      name={name}
      description={description}
      id={id}
      loadDeck={loadDeck}
    />
  );
};

export default EditDeck;
