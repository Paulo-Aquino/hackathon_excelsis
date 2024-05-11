import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {SearchIcon} from "lucide-react";
import {CityCard} from "@/components/cards/City.tsx";

export const CitiesCard = () => {
  return (
    <Card className='mx-4 sm:mx-20 mt-4 text-cyan-600 w-fit'>
      <CardHeader>
        {/* Ciudad Base */}
        <CardTitle className='flex gap-2 items-center'>
          <h1 className='flex gap-2 text-4xl font-bold m-0 p-0'>
            Ciudades
          </h1>
          <SearchIcon className='pt-2'/>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-wrap gap-4'>
        <CityCard/>
        <CityCard/>
        <CityCard/>
        <CityCard/>
      </CardContent>
    </Card>
  );
};
