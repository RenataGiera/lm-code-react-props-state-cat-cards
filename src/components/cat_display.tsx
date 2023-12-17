import Cat from "../data/cat"
interface CatDisplayProps {
  catDisplay: {
    name: string;
    species: string;
    favFoods: Array<string>
    birthYear: number;
  };
}

const CatDisplay : React.FC <CatDisplayProps> = ({catDisplay}) => {
  return (
    <>
    <div className="card">
      <h3 className="card__text card__header">{catDisplay.name}</h3>
      <p className="card__text">Species: {catDisplay.species}</p>
      <p className="card__text">Favourite Food(s): {catDisplay.favFoods.join(', ')}</p>
      <p className="card__text">Birth Year: {catDisplay.birthYear}</p>
    </div>
    </>
  )
}
export default CatDisplay;