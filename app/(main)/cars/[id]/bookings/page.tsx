import CarBooking from '@/features/bookings/components/car-booking';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BookingPage({ params }: PageProps) {
  const { id: carId } = await params;

  return <CarBooking carId={carId} />;
}
