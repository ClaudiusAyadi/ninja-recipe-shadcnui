import RecipeCard from './RecipeCard';
import { Recipe } from '../types';

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
	return (
		<>
			{recipes.map(recipe => {
				return <RecipeCard recipe={recipe} key={recipe.id} />;
			})}
		</>
	);
}
