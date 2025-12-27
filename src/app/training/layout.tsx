import Navbar from '@/components/navbar';

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 