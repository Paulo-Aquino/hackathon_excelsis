import {MainLayout} from "@/layout/MainLayout.tsx";
import {MainWeatherCard} from "@/components/cards/MainWeatherCard.tsx";
import {ForecastCard} from "@/components/cards/ForecastCard.tsx";
import {CitiesCard} from "@/components/cards/CitiesCard.tsx";

export const Home = () => {
  return (
    <MainLayout>
      <MainWeatherCard/>
      <ForecastCard/>
      <CitiesCard/>
    </MainLayout>
  );
};
