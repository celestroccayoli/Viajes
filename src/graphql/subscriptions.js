/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInformacion = /* GraphQL */ `
  subscription OnCreateInformacion {
    onCreateInformacion {
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
export const onUpdateInformacion = /* GraphQL */ `
  subscription OnUpdateInformacion {
    onUpdateInformacion {
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
export const onDeleteInformacion = /* GraphQL */ `
  subscription OnDeleteInformacion {
    onDeleteInformacion {
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
export const onCreateParticipante = /* GraphQL */ `
  subscription OnCreateParticipante {
    onCreateParticipante {
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
export const onUpdateParticipante = /* GraphQL */ `
  subscription OnUpdateParticipante {
    onUpdateParticipante {
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
export const onDeleteParticipante = /* GraphQL */ `
  subscription OnDeleteParticipante {
    onDeleteParticipante {
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
export const onCreateInstitucion = /* GraphQL */ `
  subscription OnCreateInstitucion {
    onCreateInstitucion {
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
export const onUpdateInstitucion = /* GraphQL */ `
  subscription OnUpdateInstitucion {
    onUpdateInstitucion {
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
export const onDeleteInstitucion = /* GraphQL */ `
  subscription OnDeleteInstitucion {
    onDeleteInstitucion {
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
export const onCreateActividad = /* GraphQL */ `
  subscription OnCreateActividad {
    onCreateActividad {
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
export const onUpdateActividad = /* GraphQL */ `
  subscription OnUpdateActividad {
    onUpdateActividad {
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
export const onDeleteActividad = /* GraphQL */ `
  subscription OnDeleteActividad {
    onDeleteActividad {
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
export const onCreatePresentacion = /* GraphQL */ `
  subscription OnCreatePresentacion {
    onCreatePresentacion {
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
export const onUpdatePresentacion = /* GraphQL */ `
  subscription OnUpdatePresentacion {
    onUpdatePresentacion {
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
export const onDeletePresentacion = /* GraphQL */ `
  subscription OnDeletePresentacion {
    onDeletePresentacion {
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
export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel {
    onCreateHotel {
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
export const onUpdateHotel = /* GraphQL */ `
  subscription OnUpdateHotel {
    onUpdateHotel {
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
export const onDeleteHotel = /* GraphQL */ `
  subscription OnDeleteHotel {
    onDeleteHotel {
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
export const onCreateViaje = /* GraphQL */ `
  subscription OnCreateViaje {
    onCreateViaje {
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
export const onUpdateViaje = /* GraphQL */ `
  subscription OnUpdateViaje {
    onUpdateViaje {
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
export const onDeleteViaje = /* GraphQL */ `
  subscription OnDeleteViaje {
    onDeleteViaje {
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
