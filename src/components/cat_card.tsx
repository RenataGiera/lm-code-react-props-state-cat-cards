import Cat from "../data/cat"
import CatDisplay from "./cat_display"

interface CatsList {
  catsList: Array<Cat>;
}

const CatCard : React.FC<CatsList> = ({catsList}) =>  
  {
    return (
      <>
      {catsList.map((cat, index)=> 
        <CatDisplay catDisplay={cat} key={index}/>
       )
      };
      </>
    )
  }


    
export default CatCard;