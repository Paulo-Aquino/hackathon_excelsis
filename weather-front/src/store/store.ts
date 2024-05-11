import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

interface Department {
  id: number;
  nombre: string;
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
