import {Input} from "@/components/ui/input.tsx";
import {Search} from "lucide-react";
import {Switch} from "@/components/ui/switch.tsx";
import logo from '../assets/weather_logo.svg'
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className='flex justify-around h-14 pt-4'>
      {/* Logo */}
      <div className='flex flex-1 justify-center items-center'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-20 hover:scale-105 inline-block cursor-pointer'/>
        </Link>
      </div>
      {/* Buscador */}
      <div className='flex flex-grow justify-center items-center'>
        <Input className='mx-4' placeholder='Buscar ubicación' suffix={<Search className='text-neutral-700'/>}/>
      </div>
      {/* Cambio de Unidad */}
      <div className='flex flex-1 justify-center items-center'>
        <div className='flex justify-center'>
          <Switch/>
        </div>
      </div>
    </header>
  );
};
