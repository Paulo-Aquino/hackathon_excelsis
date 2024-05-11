import {Card, CardContent} from "@/components/ui/card.tsx";
import {PronosticoExtendidoList} from "@/interface/IWeather.tsx";
import {
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Sun,
  ThermometerSnowflake,
  ThermometerSun
} from "lucide-react";
import {useEffect, useState} from "react";
import {useTempUnitStore} from "@/store/store.ts";


interface Props {
  forecast: PronosticoExtendidoList;
}

export const DayWeatherCard = ({forecast}: Props) => {
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const {unit} = useTempUnitStore();

  const convertTemp = (temp: number): number => {
    return unit === 'C' ? temp : (temp * 9 / 5) + 32;
  }

  const weatherIcons = [
    {
      id: 1,
      component: <CloudRain className='my-4 w-14 h-14'/>
    },
    {
      id: 2,
      component: <Cloudy className='my-4 w-14 h-14'/>
    },
    {
      id: 3,
      component: <CloudSun className='my-4 w-14 h-14'/>
    },
    {
      id: 4,
      component: <Sun className='my-4 w-14 h-14'/>
    },
    {
      id: 5,
      component: <CloudLightning className='my-4 w-14 h-14'/>
    },
    {
      id: 6,
      component: <CloudSnow className='my-4 w-14 h-14'/>
    },
  ]

  const weatherIconComponent = weatherIcons.find(icon => icon.id === forecast.clima[0].id)?.component;


  useEffect(() => {
    const date = new Date(forecast.fecha_hora_txt);
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const day = days[date.getDay()];
    setDayOfWeek(day);

    // Formateo date en "dd/mm/yyyy"
    const dayOfMonth = date.getDate();
    const monthName = date.getMonth();
    const year = date.getFullYear();
    const dateWithFormat = `${dayOfMonth}/${monthName}/${year}`;
    setFormattedDate(dateWithFormat);
  }, [forecast]);

  return (
    <Card className='bg-green-50 text-[#5B5F97]'>
      <CardContent className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          {weatherIconComponent}
        </div>
        <div className='flex justify-center items-center text-center gap-4'>
          <div>
            <p>
              {convertTemp(forecast.main.temp_max)}
              <span className='text-xs font-medium'>
                {unit === 'C' ? '°C' : '°F'}
              </span>
            </p>
            <span className='flex gap-2'> <ThermometerSun className='text-[#FF6B6C]'/>  Max.</span>
          </div>
          <div>
            <p>
              {convertTemp(forecast.main.temp_min)}
              <span className='text-xs font-medium'>
                {unit === 'C' ? '°C' : '°F'}
              </span>
            </p>
            <span className='flex gap-2'> <ThermometerSnowflake className='text-[#898fe3]'/>  Min.</span>
          </div>
        </div>
        <div className='text-center mt-4'>
          <h2 className='font-bold'>{dayOfWeek}</h2>
          <h5 className='font-bold'>{formattedDate}</h5>
        </div>
        <h4 className='text-center mt-4'>ÓPTIMO</h4>
      </CardContent>
    </Card>
  );
};
