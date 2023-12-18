import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat'
import CatCard from './components/cat_card';
import catData from './data/cats-data'


function App(): JSX.Element {

	const [cats, setCats] = useState<Array<Cat>>(catData)
	const catCount = cats.length;
	
	return (
		<>
			<Navbar />
			<Header catCount = {catCount} />

			<main>
				<div className='cards__wrapper'>
					<CatCard catsList={cats}/>
		
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
