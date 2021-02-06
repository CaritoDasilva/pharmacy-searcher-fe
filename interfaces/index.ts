// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface ICommune {
  communeId: string;
  communeName: string
}

export interface IPharmacy {
  fecha: string;
  local_id: string;
  local_nombre: string;
  comuna_nombre: string,
  localidad_nombre: string,
  local_direccion: string;
  funcionamiento_hora_apertura: string;
  funcionamiento_hora_cierre: string;
  local_telefono: string;
  local_lat: string;
  local_lng: string;
  funcionamiento_dia: string;
  fk_region: string;
  fk_comuna: string;
}

export interface ILocation {
  lat: number | undefined;
  lng: number | undefined;
}

export interface IMapProps {
  location: ILocation;
  markers: IPharmacy[];
}
