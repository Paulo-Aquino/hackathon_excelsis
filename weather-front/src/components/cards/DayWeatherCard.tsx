import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";

export const DayWeatherCard = () => {
  return (
    <Card>
      <CardContent className='flex flex-col justify-center items-center'>
        <div className='flex gap-4'>
          <span>Max.</span>
          <span>Min.</span>
        </div>
        <div>
          <h2>Día</h2>
        </div>
      </CardContent>
      <CardFooter className='bg-green-300 flex flex-col justify-center items-center'>
        <h4 className='m-0 p-0 text-center'>ÓPTIMO</h4>
        <h5>15/05/2024</h5>
      </CardFooter>
    </Card>
  );
};
