import cats from "../App"
import Cat from "../data/cat"

interface CatsList {
  catsList: Array<Cat>
}

const CatCard : React.FC<CatsList> = ({catsList}) =>  
  {
    return (
      <>
      {catsList.map((cat, index)=> (
        <div className="card" key={index}>
          <h3 className="card__text card__header">{cat.name}</h3>
          <p className="card__text">Species: {cat.species}</p>
          <p className="card__text">Favourite Food(s): {cat.favFoods.join(', ')}</p>
          <p className="card__text">Birth Year: {cat.birthYear}</p>
        </div>
        )
       )
      };
      </>
    )
  }


    
export default CatCard;