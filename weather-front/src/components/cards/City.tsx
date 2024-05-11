import {Card, CardContent} from "@/components/ui/card.tsx";
import {useTempUnitStore} from "@/store/store.ts";

export const CityCard = () => {
  const {unit} = useTempUnitStore();

  const convertTemp = (temp: number): number => {
    return unit === 'C' ? temp : (temp * 9 / 5) + 32;
  }

  return (
    <Card>
      <CardContent className='flex justify-center items-center'>
        <div className='flex-grow'>
          <h2 className='font-bold'>xxx, xxxxxx</h2>
          <h2 className=''>Estado del tiempo</h2>
        </div>
        <h1 className='text-6xl font-bold'>
          {convertTemp(26)}<span className='text-2xl align-top font-medium'>{unit === 'C' ? '°C' : '°F'}</span>
        </h1>
      </CardContent>
    </Card>
  );
};
