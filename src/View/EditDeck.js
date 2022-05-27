import DeckTemplate from "../DeckTemplate";

const EditDeck = ({ deckInfo, loadDeck }) => {
  const { name, description, id } = deckInfo;
  return (
    <DeckTemplate
      title={"Edit Deck"}
      name={name}
      description={description}
      id={id}
      loadDeck={loadDeck}
    />
  );
};

export default EditDeck;
