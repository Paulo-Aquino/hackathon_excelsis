import {MainLayout} from "@/layout/MainLayout.tsx";
import {MainWeatherCard} from "@/components/cards/MainWeatherCard.tsx";
import {ForecastCard} from "@/components/cards/ForecastCard.tsx";
import {CitiesCard} from "@/components/cards/CitiesCard.tsx";
import {useEffect, useState} from "react";
import {DepartamentoList, WeatherResponse} from "@/interface/IWeather.tsx";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState<DepartamentoList>();

  useEffect(() => {
    axios.get<WeatherResponse>('src/ztest/data.json').then((response) => {
      setData(response.data.departamento_list[0]);
    });
  }, []);

  return (
    <MainLayout>
      {data &&
          <>
              <MainWeatherCard data={data!}/>
              <ForecastCard data={data!}/>
              <CitiesCard/>
          </>
      }
    </MainLayout>
  );
};
