import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TipoInstitucion {
  PUBLICO = "PUBLICO",
  PRIVADO = "PRIVADO",
  AMCHAM = "AMCHAM"
}



type InformacionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ViajeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParticipanteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InstitucionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActividadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PresentacionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HotelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Informacion {
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly descripcion?: string | null;
  readonly Viaje?: Viaje | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly informacionViajeId?: string | null;
  constructor(init: ModelInit<Informacion, InformacionMetaData>);
  static copyOf(source: Informacion, mutator: (draft: MutableModel<Informacion, InformacionMetaData>) => MutableModel<Informacion, InformacionMetaData> | void): Informacion;
}

export declare class Viaje {
  readonly id: string;
  readonly titulo?: string | null;
  readonly Presentaciones?: (Participante | null)[] | null;
  readonly Hoteles?: (Participante | null)[] | null;
  readonly Actividades?: (Participante | null)[] | null;
  readonly Institucions?: (Participante | null)[] | null;
  readonly descripcion?: string | null;
  readonly fechaIda?: string | null;
  readonly fechaVuelta?: string | null;
  readonly activo?: boolean | null;
  readonly Participantes?: (Participante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Viaje, ViajeMetaData>);
  static copyOf(source: Viaje, mutator: (draft: MutableModel<Viaje, ViajeMetaData>) => MutableModel<Viaje, ViajeMetaData> | void): Viaje;
}

export declare class Participante {
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly dni?: string | null;
  readonly email?: string | null;
  readonly cargo?: string | null;
  readonly bio?: string | null;
  readonly imagen?: string | null;
  readonly imagen64?: string | null;
  readonly viajeID: string;
  readonly institucionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Participante, ParticipanteMetaData>);
  static copyOf(source: Participante, mutator: (draft: MutableModel<Participante, ParticipanteMetaData>) => MutableModel<Participante, ParticipanteMetaData> | void): Participante;
}

export declare class Institucion {
  readonly id: string;
  readonly nombre?: string | null;
  readonly Presentacions?: (Participante | null)[] | null;
  readonly viajeID: string;
  readonly tipo?: TipoInstitucion | keyof typeof TipoInstitucion | null;
  readonly Participantes?: (Participante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Institucion, InstitucionMetaData>);
  static copyOf(source: Institucion, mutator: (draft: MutableModel<Institucion, InstitucionMetaData>) => MutableModel<Institucion, InstitucionMetaData> | void): Institucion;
}

export declare class Actividad {
  readonly id: string;
  readonly viajeID: string;
  readonly titulo?: string | null;
  readonly descripcion?: string | null;
  readonly fecha?: string | null;
  readonly horaInicio?: string | null;
  readonly horaFin?: string | null;
  readonly ubicacion?: string | null;
  readonly URLmapa?: string | null;
  readonly imagen?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Actividad, ActividadMetaData>);
  static copyOf(source: Actividad, mutator: (draft: MutableModel<Actividad, ActividadMetaData>) => MutableModel<Actividad, ActividadMetaData> | void): Actividad;
}

export declare class Presentacion {
  readonly id: string;
  readonly viajeID: string;
  readonly institucionID: string;
  readonly titulo?: string | null;
  readonly descripcion?: string | null;
  readonly archivo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Presentacion, PresentacionMetaData>);
  static copyOf(source: Presentacion, mutator: (draft: MutableModel<Presentacion, PresentacionMetaData>) => MutableModel<Presentacion, PresentacionMetaData> | void): Presentacion;
}

export declare class Hotel {
  readonly id: string;
  readonly nombre?: string | null;
  readonly viajeID: string;
  readonly imagen?: string | null;
  readonly ubicacion?: string | null;
  readonly URLmapa?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Hotel, HotelMetaData>);
  static copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}