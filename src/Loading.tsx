import SkeletonCard from './components/SkeletonCard';

export default function Loading() {
	return (
		<>
			{Array.from({ length: 9 }).map((_, index) => (
				<SkeletonCard key={index}></SkeletonCard>
			))}
		</>
	);
}
