/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInformacion = /* GraphQL */ `
  query GetInformacion($id: ID!) {
    getInformacion(id: $id) {
      id
      titulo
      subtitulo
      descripcion
      Viaje {
        id
        titulo
        descripcion
        fechaIda
        fechaVuelta
        activo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      informacionViajeId
    }
  }
`;
export const listInformacions = /* GraphQL */ `
  query ListInformacions(
    $filter: ModelInformacionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInformacions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        subtitulo
        descripcion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        informacionViajeId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInformacions = /* GraphQL */ `
  query SyncInformacions(
    $filter: ModelInformacionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInformacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        titulo
        subtitulo
        descripcion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        informacionViajeId
      }
      nextToken
      startedAt
    }
  }
`;
export const getParticipante = /* GraphQL */ `
  query GetParticipante($id: ID!) {
    getParticipante(id: $id) {
      id
      nombre
      apellido
      dni
      email
      cargo
      bio
      imagen
      institucionID
      viajeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listParticipantes = /* GraphQL */ `
  query ListParticipantes(
    $filter: ModelParticipanteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipantes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        apellido
        dni
        email
        cargo
        bio
        imagen
        institucionID
        viajeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParticipantes = /* GraphQL */ `
  query SyncParticipantes(
    $filter: ModelParticipanteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParticipantes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        apellido
        dni
        email
        cargo
        bio
        imagen
        institucionID
        viajeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getInstitucion = /* GraphQL */ `
  query GetInstitucion($id: ID!) {
    getInstitucion(id: $id) {
      id
      nombre
      Presentacions {
        nextToken
        startedAt
      }
      viajeID
      tipo
      Participantes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listInstitucions = /* GraphQL */ `
  query ListInstitucions(
    $filter: ModelInstitucionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstitucions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        viajeID
        tipo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInstitucions = /* GraphQL */ `
  query SyncInstitucions(
    $filter: ModelInstitucionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstitucions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        viajeID
        tipo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getActividad = /* GraphQL */ `
  query GetActividad($id: ID!) {
    getActividad(id: $id) {
      id
      viajeID
      titulo
      descripcion
      fecha
      horaInicio
      horaFin
      ubicacion
      URLmapa
      imagen
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listActividads = /* GraphQL */ `
  query ListActividads(
    $filter: ModelActividadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActividads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        viajeID
        titulo
        descripcion
        fecha
        horaInicio
        horaFin
        ubicacion
        URLmapa
        imagen
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncActividads = /* GraphQL */ `
  query SyncActividads(
    $filter: ModelActividadFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActividads(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        viajeID
        titulo
        descripcion
        fecha
        horaInicio
        horaFin
        ubicacion
        URLmapa
        imagen
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPresentacion = /* GraphQL */ `
  query GetPresentacion($id: ID!) {
    getPresentacion(id: $id) {
      id
      viajeID
      institucionID
      titulo
      descripcion
      archivo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPresentacions = /* GraphQL */ `
  query ListPresentacions(
    $filter: ModelPresentacionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentacions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        viajeID
        institucionID
        titulo
        descripcion
        archivo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPresentacions = /* GraphQL */ `
  query SyncPresentacions(
    $filter: ModelPresentacionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresentacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        viajeID
        institucionID
        titulo
        descripcion
        archivo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHotel = /* GraphQL */ `
  query GetHotel($id: ID!) {
    getHotel(id: $id) {
      id
      nombre
      viajeID
      imagen
      ubicacion
      URLmapa
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        viajeID
        imagen
        ubicacion
        URLmapa
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHotels = /* GraphQL */ `
  query SyncHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHotels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        viajeID
        imagen
        ubicacion
        URLmapa
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getViaje = /* GraphQL */ `
  query GetViaje($id: ID!) {
    getViaje(id: $id) {
      id
      titulo
      Presentaciones {
        nextToken
        startedAt
      }
      Hoteles {
        nextToken
        startedAt
      }
      Actividades {
        nextToken
        startedAt
      }
      Institucions {
        nextToken
        startedAt
      }
      descripcion
      fechaIda
      fechaVuelta
      activo
      Participantes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listViajes = /* GraphQL */ `
  query ListViajes(
    $filter: ModelViajeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listViajes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        descripcion
        fechaIda
        fechaVuelta
        activo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncViajes = /* GraphQL */ `
  query SyncViajes(
    $filter: ModelViajeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncViajes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        titulo
        descripcion
        fechaIda
        fechaVuelta
        activo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
