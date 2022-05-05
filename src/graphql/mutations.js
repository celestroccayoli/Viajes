/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInformacion = /* GraphQL */ `
  mutation CreateInformacion(
    $input: CreateInformacionInput!
    $condition: ModelInformacionConditionInput
  ) {
    createInformacion(input: $input, condition: $condition) {
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
export const updateInformacion = /* GraphQL */ `
  mutation UpdateInformacion(
    $input: UpdateInformacionInput!
    $condition: ModelInformacionConditionInput
  ) {
    updateInformacion(input: $input, condition: $condition) {
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
export const deleteInformacion = /* GraphQL */ `
  mutation DeleteInformacion(
    $input: DeleteInformacionInput!
    $condition: ModelInformacionConditionInput
  ) {
    deleteInformacion(input: $input, condition: $condition) {
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
export const createParticipante = /* GraphQL */ `
  mutation CreateParticipante(
    $input: CreateParticipanteInput!
    $condition: ModelParticipanteConditionInput
  ) {
    createParticipante(input: $input, condition: $condition) {
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
export const updateParticipante = /* GraphQL */ `
  mutation UpdateParticipante(
    $input: UpdateParticipanteInput!
    $condition: ModelParticipanteConditionInput
  ) {
    updateParticipante(input: $input, condition: $condition) {
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
export const deleteParticipante = /* GraphQL */ `
  mutation DeleteParticipante(
    $input: DeleteParticipanteInput!
    $condition: ModelParticipanteConditionInput
  ) {
    deleteParticipante(input: $input, condition: $condition) {
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
export const createInstitucion = /* GraphQL */ `
  mutation CreateInstitucion(
    $input: CreateInstitucionInput!
    $condition: ModelInstitucionConditionInput
  ) {
    createInstitucion(input: $input, condition: $condition) {
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
export const updateInstitucion = /* GraphQL */ `
  mutation UpdateInstitucion(
    $input: UpdateInstitucionInput!
    $condition: ModelInstitucionConditionInput
  ) {
    updateInstitucion(input: $input, condition: $condition) {
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
export const deleteInstitucion = /* GraphQL */ `
  mutation DeleteInstitucion(
    $input: DeleteInstitucionInput!
    $condition: ModelInstitucionConditionInput
  ) {
    deleteInstitucion(input: $input, condition: $condition) {
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
export const createActividad = /* GraphQL */ `
  mutation CreateActividad(
    $input: CreateActividadInput!
    $condition: ModelActividadConditionInput
  ) {
    createActividad(input: $input, condition: $condition) {
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
export const updateActividad = /* GraphQL */ `
  mutation UpdateActividad(
    $input: UpdateActividadInput!
    $condition: ModelActividadConditionInput
  ) {
    updateActividad(input: $input, condition: $condition) {
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
export const deleteActividad = /* GraphQL */ `
  mutation DeleteActividad(
    $input: DeleteActividadInput!
    $condition: ModelActividadConditionInput
  ) {
    deleteActividad(input: $input, condition: $condition) {
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
export const createPresentacion = /* GraphQL */ `
  mutation CreatePresentacion(
    $input: CreatePresentacionInput!
    $condition: ModelPresentacionConditionInput
  ) {
    createPresentacion(input: $input, condition: $condition) {
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
export const updatePresentacion = /* GraphQL */ `
  mutation UpdatePresentacion(
    $input: UpdatePresentacionInput!
    $condition: ModelPresentacionConditionInput
  ) {
    updatePresentacion(input: $input, condition: $condition) {
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
export const deletePresentacion = /* GraphQL */ `
  mutation DeletePresentacion(
    $input: DeletePresentacionInput!
    $condition: ModelPresentacionConditionInput
  ) {
    deletePresentacion(input: $input, condition: $condition) {
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
export const createHotel = /* GraphQL */ `
  mutation CreateHotel(
    $input: CreateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    createHotel(input: $input, condition: $condition) {
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
export const updateHotel = /* GraphQL */ `
  mutation UpdateHotel(
    $input: UpdateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    updateHotel(input: $input, condition: $condition) {
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
export const deleteHotel = /* GraphQL */ `
  mutation DeleteHotel(
    $input: DeleteHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    deleteHotel(input: $input, condition: $condition) {
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
export const createViaje = /* GraphQL */ `
  mutation CreateViaje(
    $input: CreateViajeInput!
    $condition: ModelViajeConditionInput
  ) {
    createViaje(input: $input, condition: $condition) {
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
export const updateViaje = /* GraphQL */ `
  mutation UpdateViaje(
    $input: UpdateViajeInput!
    $condition: ModelViajeConditionInput
  ) {
    updateViaje(input: $input, condition: $condition) {
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
export const deleteViaje = /* GraphQL */ `
  mutation DeleteViaje(
    $input: DeleteViajeInput!
    $condition: ModelViajeConditionInput
  ) {
    deleteViaje(input: $input, condition: $condition) {
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
