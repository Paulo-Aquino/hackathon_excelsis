import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {HomeIcon} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

export const MainWeatherCard = () => {
  return (
    <Card className='mx-4 sm:mx-20 mt-4 text-cyan-600 w-fit'>
      <CardHeader className='flex flex-col sm:flex-row justify-between items-center'>
        <CardTitle>
          <h1 className='flex gap-2 items-center text-bold text-lg sm:text-xl'>
            <HomeIcon size={24}/>
            Asuncion, Central
          </h1>
          <div className='flex flex-col justify-center items-center md:items-start text-cyan-600 mt-2 sm:mt-0'>
            <h3 className='text-base sm:text-lg'>
              HOY, Sábado
            </h3>
            <h4 className='text-sm sm:text-md'>
              11 de mayo, 2024
            </h4>
          </div>
        </CardTitle>

      </CardHeader>
      <CardContent className='text-center sm:text-left'>
        <h1 className='text-4xl sm:text-6xl font-bold'>
          26<span className='text-xl sm:text-2xl align-top font-medium'>°C</span>
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold'>Estado del tiempo</h2>
        <Badge variant="outline" className='bg-green-300'>ÓPTIMO</Badge>
      </CardContent>
      <CardFooter className='flex flex-wrap gap-2 justify-center sm:justify-start'>
        <p>Card Footer</p> |
        <p>Card Footer</p> |
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
