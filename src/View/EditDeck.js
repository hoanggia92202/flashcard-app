import DeckTemplate from "../DeckTemplate";

const EditDeck = ({ deckInfo }) => {
  const { name, description, id } = deckInfo;
  return (
    <DeckTemplate
      title={"Edit Deck"}
      name={name}
      description={description}
      id={id}
    />
  );
};

export default EditDeck;
