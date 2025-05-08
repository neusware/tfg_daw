Documentación de la API de Reciclaje
====================================

Índice
------

1.  Introducción
2.  Autenticación
3.  Productos y Usuarios
4.  Ejemplos de Uso

Introducción
------------

Esta API permite gestionar la relación entre productos reciclados y usuarios, facilitando el seguimiento y registro de los productos que cada usuario ha reciclado.

Autenticación
-------------

Antes de utilizar los endpoints protegidos, es necesario crear un usuario e iniciar sesión para obtener un token de autenticación.

### 1\. Crear un usuario

POST /api/usuario

**JSON de solicitud:**

```json
{

"nombre": "Nombre del usuario",

"apellidos": "Apellidos del usuario",

"email": "email@example.com",

"password": "contraseña123",

"saldo": 100.50,

"id_suscripcion": 1

}
```

**Respuesta exitosa:**

```json
{
  "status": true,

  "message": "Usuario creado",

  "usuario": {

    "id": 1,

    "nombre": "Nombre del usuario",

    "apellidos": "Apellidos del usuario",

    "email": "email@example.com",

    "saldo": 100.50,

    "id_suscripcion": 1,

    "created_at": "2025-05-08T11:20:06.000000Z",

    "updated_at": "2025-05-08T11:20:06.000000Z"

  }

}
```

### 2\. Iniciar sesión

POST /api/usuario-login

**JSON de solicitud:**

```json
    
    {
    
      "email": "email@example.com",
    
      "password": "contraseña123"
    
    }
```

**Respuesta exitosa:**

```json

    {
    
      "status": true,
    
      "message": "Has iniciado sesión en la API",
    
      "token": "2|PCKeAr7o0VqynzWzwtdm4psfgyM1gIaBtFSuwvlf027fa962",
    
      "usuario": {
    
        "id": 1,
    
        "nombre": "Nombre del usuario",
    
        "apellidos": "Apellidos del usuario",
    
        "email": "email@example.com",
    
        "saldo": 100.50,
    
        "id_suscripcion": 1
    
      }
    
    }
````

### 3\. Uso del token en solicitudes posteriores

Para todas las solicitudes protegidas, debes incluir el token en el encabezado:

Authorization: Bearer 2|PCKeAr7o0VqynzWzwtdm4psfgyM1gIaBtFSuwvlf027fa962

Productos y Usuarios
--------------------

### Endpoints de Productos-Usuario

Estos endpoints gestionan la relación entre productos y usuarios.

#### Listar todos los productos de usuarios

GET /api/productos-usuario

**Encabezados requeridos:**

Authorization: Bearer {tu_token}

**Respuesta:**

```json
    
    {
    
      "productos_usuarios": [
    
        {
    
          "id": 1,
    
          "id_usuario": 1,
    
          "id_producto": 2,
    
          "created_at": "2025-05-08T11:20:06.000000Z",
    
          "updated_at": "2025-05-08T11:20:06.000000Z",
    
          "usuario": {
    
            "id": 1,
    
            "nombre": "Nombre del usuario",
    
            "email": "email@example.com"
    
          },
    
          "producto": {
    
            "id": 2,
    
            "nombre": "Botella de plástico",
    
            "puntos": 10
    
          }
    
        }
    
      ]
    
    }
```
#### Registrar un nuevo producto para un usuario

POST /api/productos-usuario

**Encabezados requeridos:**

Authorization: Bearer {tu_token}

Content-Type: application/json

**JSON de solicitud:**

```json

    {
    
      "id_usuario": 1,
    
      "id_producto": 2
    
    }
    
    **Respuesta exitosa:**
    
    {
    
      "id_usuario": 1,
    
      "id_producto": 2,
    
      "created_at": "2025-05-08T11:30:06.000000Z",
    
      "updated_at": "2025-05-08T11:30:06.000000Z",
    
      "id": 3
    
    }
```
    
#### Obtener un producto de usuario específico

GET /api/productos-usuario/{id}

**Encabezados requeridos:**

Authorization: Bearer {tu_token}

**Respuesta:**

```json
    
    {
    
      "id": 1,
    
      "id_usuario": 1,
    
      "id_producto": 2,
    
      "created_at": "2025-05-08T11:20:06.000000Z",
    
      "updated_at": "2025-05-08T11:20:06.000000Z",
    
      "usuario": {
    
        "id": 1,
    
        "nombre": "Nombre del usuario",
    
        "email": "email@example.com"
    
      },
    
      "producto": {
    
        "id": 2,
    
        "nombre": "Botella de plástico",
    
        "puntos": 10
    
      }
    
    }
````

#### Actualizar un producto de usuario

PUT /api/productos-usuario/{id}

**Encabezados requeridos:**

Authorization: Bearer {tu_token}

Content-Type: application/json

**JSON de solicitud:**

````json
    
    {
    
      "id_usuario": 1,
    
      "id_producto": 3
    
    }
````
    
**Respuesta exitosa:**
```json
    
    {
    
      "id": 1,
    
      "id_usuario": 1,
    
      "id_producto": 3,
    
      "created_at": "2025-05-08T11:20:06.000000Z",
    
      "updated_at": "2025-05-08T11:35:06.000000Z"
    
    }
````

#### Eliminar un producto de usuario

DELETE /api/productos-usuario/{id}

**Encabezados requeridos:**

Authorization: Bearer {tu_token}

**Respuesta:**

204 No Content
