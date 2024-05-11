import {Card, CardContent} from "@/components/ui/card.tsx";
import {DayWeatherCard} from "@/components/cards/DayWeatherCard.tsx";
import {DepartamentoList} from "@/interface/IWeather.tsx";

interface Props {
  data: DepartamentoList;
}

export const ForecastCard = ({data}: Props) => {
  return (
    <Card className='mx-4 sm:mx-20 mt-4 text-[#5B5F97]'>
      <CardContent className='flex flex-col sm:flex-row'>
        <div className='flex justify-center items-center p-2 md:pt-14 w-fit h-fit sm:w-32 sm:h-32'>
          <h2 className='m-0 p-0 text-2xl font-bold rotate-0 sm:-rotate-90'>
            Previsión Prox. 3 días
          </h2>
        </div>

        <div className='flex flex-wrap justify-center items-center flex-col md:flex-row gap-4 ml-8 pt-6'>

          {data.pronostico_extendido_list.slice(1).map((forecast, index) =>
            <DayWeatherCard key={index} forecast={forecast}/>
          )}

        </div>
      </CardContent>
    </Card>
  );
};
