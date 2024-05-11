import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {CloudRain, Droplet, HomeIcon, Wind} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {DepartamentoList} from "@/interface/IWeather.tsx";
import {useEffect, useState} from "react";
import {useTempUnitStore} from "@/store/store.ts";

interface Props {
  data: DepartamentoList;
}

export const MainWeatherCard = ({data}: Props) => {

  const [dayOfWeek, setDayOfWeek] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const {unit} = useTempUnitStore();

  useEffect(() => {
    if (data.pronostico_extendido_list && data.pronostico_extendido_list.length > 0) {
      const dateTime = data.pronostico_extendido_list[0].fecha_hora_txt;
      const date = new Date(dateTime);

      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

      const day = days[date.getDay()];
      setDayOfWeek(day);

      // Formateo date en "dd de mm, yyyy"
      const dayOfMonth = date.getDate();
      const monthName = months[date.getMonth()];
      const year = date.getFullYear();
      const dateWithFormat = `${dayOfMonth} de ${monthName}, ${year}`;
      setFormattedDate(dateWithFormat);
    }
  }, [data]);

  const convertTemp = (temp: number): number => {
    return unit === 'C' ? temp : (temp * 9 / 5) + 32;
  };

  return (
    <Card className='mx-4 sm:mx-20 mt-4 text-[#5B5F97] w-fit bg-[#FFFFFB]'>
      <CardHeader className='flex flex-col sm:flex-row justify-between items-center'>
        <CardTitle>
          <h1 className='flex gap-2 items-center text-bold text-lg sm:text-xl'>
            <HomeIcon size={24}/>
            {data.nombre}
          </h1>
          <div className='flex flex-col justify-center items-center md:items-start text-[#5B5F97] mt-2 sm:mt-0'>
            <h3 className='text-base sm:text-lg'>
              {data.pronostico_extendido_list[0].dia_text.toUpperCase()}, {dayOfWeek}
            </h3>
            <h4 className='text-sm sm:text-md'>
              {formattedDate}
            </h4>
          </div>
        </CardTitle>

      </CardHeader>
      <CardContent className='text-center sm:text-left'>
        <h1 className='text-4xl sm:text-6xl font-bold'>
          {convertTemp(data.pronostico_extendido_list[0].main.temp)}<span
          className='text-xl sm:text-2xl align-top font-medium'>{unit === 'C' ? '°C' : '°F'}</span>
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold'>Estado del tiempo</h2>
        <Badge variant="outline" className='bg-green-300'>ÓPTIMO</Badge>
      </CardContent>
      <CardFooter className='flex flex-wrap gap-2 justify-center sm:justify-start'>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='flex gap-2'>
            <Wind/><p>Viento</p> {data.pronostico_extendido_list[0].viento.velocidad} km/h
          </div>
          <p className='hidden md:flex'>|</p>
          <div className='flex gap-2'>
            <Droplet/> <p>Humedad</p> {data.pronostico_extendido_list[0].main.humedad}%
          </div>
          <p className='hidden md:flex'>|</p>
          <div className='flex gap-2'>
            <CloudRain/> <p>Precipitaciones</p> {data.pronostico_extendido_list[0].probabilidad_precipitacion}%
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
