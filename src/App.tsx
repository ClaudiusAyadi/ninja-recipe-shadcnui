import { Recipe } from './types';
import { useEffect, useState } from 'react';
import { Header, Loader, RecipeList } from './components/';

import data from '../_data/db.json';

// const uri = 'http://localhost:4090/recipes';

// const getRecipes = async (): Promise<Recipe[]> => {
// 	const response = await fetch(uri);

// 	await new Promise(resolve => setTimeout(resolve, 3000));

// 	const data = await response.json();
// 	return data;
// };

export default function App() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				// const data = await getRecipes();
				const { recipes } = data;

				setRecipes(recipes);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchRecipes();
	}, []);

	return (
		<>
			<Header />
			<main>
				<div className='grid md:grid-cols-3 gap-8'>{loading ? <Loader /> : <RecipeList recipes={recipes} />}</div>
			</main>
		</>
	);
}
