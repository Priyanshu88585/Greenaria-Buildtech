// PropertyFloorPlan placeholder

import Image from "next/image";

export default function PropertyFloorPlan({ floorPlans }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {floorPlans.map((plan: string, i: number) => (
          <Image
            key={i}
            src={plan}
            alt="Floor plan"
            width={500}
            height={400}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
