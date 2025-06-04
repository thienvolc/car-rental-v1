import CarDetails from '@/features/cars/components/car-details';
import CarRecommandList from '@/features/cars/components/car-recommand-list';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CarPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <>
      <CarDetails carId={id} />
      <CarRecommandList />
    </>
  );
}
