import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

interface Department {
  id: number;
  nombre: string;
}

interface TempUnitState {
  unit: 'C' | 'F';
  toggleUnit: () => void;
}

interface DepartmentState {
  departments: Department[];
  setDepartments: (departments: Department[]) => void;
}

export const useDepartmentStore = create<DepartmentState>()(
  devtools((set) => ({
    departments: [
      {id: 11, nombre: 'Central'},
      {id: 12, nombre: 'Boqueron'},
      {id: 13, nombre: 'Caaguazú'}
    ],
    setDepartments: (departments: Department[]) => set({departments})
  }), {name: 'departmentStore'})
);

export const useTempUnitStore = create<TempUnitState>()(
  devtools(set => ({
    unit: 'C',
    toggleUnit: () => set(state => ({unit: state.unit === 'C' ? 'F' : 'C'})),
  }), {name: 'tempUnitStore'})
);