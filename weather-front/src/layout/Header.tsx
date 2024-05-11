import {Switch} from "@/components/ui/switch.tsx";
import logo from '../assets/weather_logo.svg'
import {Link} from "react-router-dom";
import {useDepartmentStore} from "@/store/store.ts";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

export const Header = () => {
  const {departments} = useDepartmentStore();

  return (
    <header className='flex justify-around h-14 pt-4'>
      <div className='flex flex-1 justify-center items-center'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-20 hover:scale-105 inline-block cursor-pointer'/>
        </Link>
      </div>
      <div className='flex flex-grow justify-center items-center'>
        <Select>
          <SelectTrigger className="fixed-width-select" aria-label="Select department">
            <SelectValue placeholder="Seleccionar departamento"/>
          </SelectTrigger>
          <SelectContent className="fixed-width-select">
            <SelectGroup>
              {departments.map(department => (
                <SelectItem key={department.id} value={department.nombre}>
                  {department.nombre}
                </SelectItem>
              ))}
            </SelectGroup>
            https://chatgpt.com/?oai-dm=1   </SelectContent>
        </Select>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <Switch/>
      </div>
    </header>
  );
};
