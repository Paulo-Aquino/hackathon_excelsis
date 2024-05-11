import {Card, CardContent} from "@/components/ui/card.tsx";

export const CityCard = () => {
  return (
    <Card>
      <CardContent className='flex justify-center items-center'>
        <div className='flex-grow'>
          <h2 className='font-bold'>xxx, xxxxxx</h2>
          <h2 className=''>Estado del tiempo</h2>
        </div>
        <h1 className='text-6xl font-bold'>
          26<span className='text-2xl align-top font-medium'>°C</span>
        </h1>
      </CardContent>
    </Card>
  );
};
