import { SelectTimeSlot } from "@/components/SelectTimeSlot";

export const KonzultaciaPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex flex-1 flex-col items-center justify-center font-sans h-auto">
          <h1 className="font-bold text-white text-4xl">Konzultácia</h1>
          <SelectTimeSlot value1="17:00" value2="19:00" />
        </main>
      </div>
    </>
  );
};
