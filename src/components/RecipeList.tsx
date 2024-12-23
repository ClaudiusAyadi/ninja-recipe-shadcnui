import { RecipeCard } from './RecipeCard';
import { Recipe } from '../types';

export const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
	return (
		<>
			{recipes.map(recipe => {
				return <RecipeCard recipe={recipe} key={recipe.id} />;
			})}
		</>
	);
};
