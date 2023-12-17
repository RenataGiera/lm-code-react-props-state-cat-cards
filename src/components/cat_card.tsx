import cats from "../App"
import Cat from "../data/cat"
import CatDisplay from "./cat_display"
import { useState } from "react"

interface CatsList {
  catsList: Array<Cat>;
}

const CatCard : React.FC<CatsList> = ({catsList}) => {
    
    return (
      <>
      {catsList.map((cat, index)=> (
        <CatDisplay key={index} index={index} catDisplay={cat}/>
       ))
      }
      </>
      
    )
  }


    
export default CatCard;