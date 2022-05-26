import NewDeck from "../NewDeck";

const EditDeck = ({ deckInfo }, loadDeck) => {
  const { name, description, id } = deckInfo;
  return (
    //console.log("edir :", loadDeck(1)),
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
