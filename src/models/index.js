// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TipoInstitucion = {
  "PUBLICO": "PUBLICO",
  "PRIVADO": "PRIVADO",
  "AMCHAM": "AMCHAM"
};

const { Informacion, Viaje, Participante, Institucion, Actividad, Presentacion, Hotel } = initSchema(schema);

export {
  Informacion,
  Viaje,
  Participante,
  Institucion,
  Actividad,
  Presentacion,
  Hotel,
  TipoInstitucion
};