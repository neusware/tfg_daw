# Documentación de la API de *EcoScan* ♻️ 
--------------------------------------

### [Index for API Documentation](https://github.com/neusware/tfg_daw/edit/main/README.md)

1. [Introduction](#introducción)
   - Overview of the API

2. [Authentication](#autenticación)
   - Token-based Authentication Details

3. [Unprotected Routes (No Authentication Required)](#rutas-desprotegidas-no-requieren-autenticación)
   - [User Authentication](#autenticación-de-usuarios)
     - [Login](#login-de-usuario)
     - [Register](#registro-de-nuevo-usuario)
   - [Public Listings](#listados-públicos-autenticación-no-requerida)
     - [Get Categories](#obtener-todas-las-categorías)
     - [Get Containers](#obtener-todos-los-contenedores)
     - [Get Products](#obtener-todos-los-productos)
     - [Get Rewards](#obtener-todas-las-recompensas)
     - [Get Subscriptions](#obtener-todas-las-suscripciones)

4. [Protected Routes (Authentication Required)](#rutas-protegidas-requieren-autenticación---bearer-token)
   - [Users](#entidad-usuarios)
     - [Update Email](#actualizar-email-de-usuario)
     - [Update Password](#actualizar-contraseña-de-usuario)
     - [Delete User](#eliminar-usuario)
   - [Products](#entidad-productos)
     - [Create Product](#crear-un-nuevo-producto)
     - [Get Product by ID](#obtener-un-producto-por-id)
     - [Update Product](#actualizar-un-producto-existente)
     - [Delete Product](#eliminar-un-producto-por-id)
   - [Product-User Relationships](#entidad-productos-usuario-relación)
     - [List Relationships](#listar-todas-las-relaciones-productos-usuario)
     - [Register Product to User](#registrar-un-nuevo-producto-para-un-usuario-asociar-producto-a-usuario)
     - [Get Relationship by ID](#obtener-una-relación-producto-usuario-por-su-id)
     - [Update Relationship](#actualizar-una-relación-producto-usuario)
     - [Delete Relationship](#eliminar-una-relación-producto-usuario-por-su-id)
   - [Containers](#entidad-contenedores)
     - [Create Container](#crear-un-nuevo-contenedor)
     - [Get Container by ID](#obtener-un-contenedor-por-id)
     - [Update Container](#actualizar-un-contenedor-existente)
     - [Delete Container](#eliminar-un-contenedor-por-id)
   - [Categories](#entidad-categorías)
     - [Create Category](#crear-una-nueva-categoría)
     - [Get Category by ID](#obtener-una-categoría-por-id)
     - [Update Category](#actualizar-una-categoría-existente)
     - [Delete Category](#eliminar-una-categoría-por-id)
   - [Subscriptions](#entidad-suscripciones)
     - [Create Subscription](#crear-un-nuevo-tipo-de-suscripción)
     - [Get Subscription by ID](#obtener-una-suscripción-por-id)
     - [Update Subscription](#actualizar-un-tipo-de-suscripción)
     - [Delete Subscription](#eliminar-una-suscripción-por-id)
   - [Companies](#entidad-empresas)
     - [List All Companies](#obtener-todas-las-empresas)
     - [Create Company](#crear-una-nueva-empresa)
     - [Get Company by ID](#obtener-una-empresa-por-id)
     - [Update Company](#actualizar-una-empresa-existente)
     - [Delete Company](#eliminar-una-empresa-por-id)
   - [Rewards](#entidad-recompensas)
     - [Create Reward](#crear-una-nueva-recompensa)
     - [Get Reward by ID](#obtener-una-recompensa-por-id)
     - [Update Reward](#actualizar-una-recompensa-existente)
     - [Delete Reward](#eliminar-una-recompensa-por-id)
     - [Get Users for Reward](#obtener-usuarios-por-recompensa)
   - [User-Reward Relationships](#entidad-usuario-recompensas-tabla-pivote)
     - [List Relationships](#listar-todas-las-relaciones-usuario-recompensa)
     - [Assign Reward to User](#asignar-recompensa-a-usuario-canjear-recompensa)
     - [Get Relationship by ID](#mostrar-una-relación-específica-usuario-recompensa-por-id-de-la-relación)
     - [Delete Relationship](#eliminar-asignación-de-recompensa-a-usuario)
     - [Get Rewards of a User](#obtener-las-recompensas-de-un-usuario-específico)
     - [Get Users Assigned to a Reward](#obtener-los-usuarios-asignados-a-una-recompensa-específica)

Introducción
------------

Esta API permite gestionar la lógica de negocio de la app, facilitando el seguimiento y registro de los productos que cada usuario ha reciclado.

> Todas las rutas están prefijadas con `/api`
--------------------------
## Autenticación

Antes de utilizar los *endpoints* protegidos, es necesario crear un usuario e iniciar sesión para obtener un token de autenticación.

```
Authorization: Bearer <TU_TOKEN_SANCTUM>
```

---

## 🔺*Endpoints* desprotegidos (no requieren autenticación)

### Autenticación de Usuarios 

#### 🔸 Login de Usuario

- **Endpoint:** `POST /api/usuario-login`   
- **Request Body tipo:**
```json
{
    "email": "usuario@example.com",
    "password": "tu_contraseña"
}
```
- **Response tipo** `CODE OK`:
```json
{
"status": true,
"message": "Has iniciado sesión en la API",
"token": "5|MBQob35B80GYedLCoZAWFVBzi22dVmID4b4RBIks47f88e6e",  *******************
"usuario": {
    "id": 1,
    "nombre": "Nombre del usuario",
    "apellidos": "Apellidos del usuario",
    "email": "email@example.com",
    "password": "$2y$12$eb5/4odtlQDdVfYEw7gD3uA./O1GlEUYap6UwP.6LWoWP5kCVFa4K",
    "saldo": "100.50",
    "id_suscripcion": 1,
    "created_at": "2025-05-08T10:37:53.000000Z",
    "updated_at": "2025-05-08T10:37:53.000000Z"
}
}
```

#### 🔸 Registro de Nuevo Usuario

- **Endpoint:** `POST /api/usuario`    
- **Request Body tipo:** 
```json
{
    "nombre": "Nombre del usuario",
    "apellidos": "Apellidos del usuario",
    "email": "email@example.com",
    "password": "contraseña123",
    "saldo": 100.50, 
    "id_suscripcion": 1
}
```

---

### Listados Públicos
  
#### 🔸 Obtener todas las Categorías

- **Endpoint:** `GET /api/categorias`  
 
#### 🔸 Obtener todos los Contenedores

- **Endpoint:** `GET /api/contenedores`   

#### 🔸 Obtener todos los Productos

- **Endpoint:** `GET /api/productos`   

#### 🔸 Obtener todas las Recompensas

- **Endpoint:** `GET /api/recompensas`   

#### 🔸 Obtener todas las Suscripciones

- **Endpoint:** `GET /api/suscripciones`  

---

## 🔺*Endpoints* protegidos (requieren autenticación - *Bearer Token*)

### Entidad: Usuarios


1.  🔸 **Actualizar email de usuario**
    *   **Endpoint:** `PUT /api/usuario_email`
    *   **Request Body tipo**
        ```json
        {
            "id": 1,
            "old_email": "actual_email@example.com",
            "new_email": "nuevo_email_unico@example.com"
        }
        ```
2.  🔸 **Actualizar contraseña de usuario**
    *   **Endpoint:** `PUT /api/usuario_password`
    *   **Request Body tipo**
        ```json
        {
            "id": 1,
            "old_password": "password_actual",
            "new_password": "nueva_password"
        }
        ```
3.  🔸 **Eliminar usuario**
    *   **Endpoint:** `DELETE /api/usuario`
    *   **Request Body JSON:**
        ```json
        {
            "id": 1,
            "email": "email_del_usuario_a_eliminar@example.com",
            "password": "password_del_usuario_a_eliminar"
        }
        ```

---

### Entidad: Productos

1.  🔸 **Crear un nuevo producto**
    *   **Endpoint:** `POST /api/productos`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "required",
            "descripcion": "nullable",
            "ingredientes": "nullable",
            "fabricante": "nullable",
            "composicion": "nullable",
            "puntos": 1,
            "imagen": "nullable",
            "enlace_qr": "nullable",
            "id_categoria": 1,
            "id_empresa": 1
        }
        ```

2.  🔸 **Obtener un producto por ID**
    *   **Endpoint:** `GET /api/productos/{id}`

3.  🔸 **Actualizar un producto existente**
    *   **Endpoint:** `PUT /api/productos/{id}`
    *   **Request Body JSON:**`Prod`
        ```json
        {
            "nombre": "nullable",
            "puntos": 1,
            "descripcion": "nullable",
            "ingredientes": "nullable",
            "fabricante": "nullable",
            "composicion": "nullable",
            "imagen": "nullable",
            "enlace_qr": "nullable",
            "id_categoria": "nullable",
            "id_empresa": "nullable",
        }
        ```

4.  🔸 **Eliminar un producto por ID**
    *   **Endpoint:** `DELETE /api/productos/{id}`

---

### Entidad: Productos-Usuario (Relación)

1.  🔸 **Listar todas las relaciones productos-usuario**
    *   **Endpoint:** `GET /api/productos-usuario`

2.  🔸 **Registrar un nuevo producto para un usuario (Asociar producto a usuario)**
    *   **Endpoint:** `POST /api/productos-usuario`
    *   **Request Body JSON:**
        ```json
        {
            "id_usuario": 1,
            "id_producto": 5
        }
        ```

3.  🔸 **Obtener una relación producto-usuario por su ID**
    *   **Endpoint:** `GET /api/productos-usuario/{id}`

4.  🔸 **Actualizar una relación producto-usuario**
    *   **Endpoint:** `PUT /api/productos-usuario/{id}`
    *   **Request Body JSON:**
        ```json
        {
            "id_usuario": 1,
            "id_producto": 5
        }
        ```

5.  🔸 **Eliminar una relación producto-usuario por su ID**
    *   **Endpoint:** `DELETE /api/productos-usuario/{id}`

---

### Entidad: Contenedores

1.  🔸 **Crear un nuevo contenedor**
    *   **Endpoint:** `POST /api/contenedores`
    *   **Request Body JSON:**
        ```json
        {
            "tipo": "required",
            "color": "required"
        }
        ```

2.  🔸 **Obtener un contenedor por ID**
    *   **Endpoint:** `GET /api/contenedores/{id}`

3.  🔸 **Actualizar un contenedor existente**
    *   **Endpoint:** `PUT /api/contenedores/{id}`
    *   **Request Body JSON:**
        ```json
        {
            "tipo": "sometimes",
            "color": "sometimes"
        }
        ```

4.  🔸 **Eliminar un contenedor por ID**
    *   **Endpoint:** `DELETE /api/contenedores/{id}`

---

### Entidad: Categorías

1.  🔸 **Crear una nueva categoría**
    *   **Endpoint:** `POST /api/categorias`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "required",
            "descripcion": "nullable",
            "id_contenedor": 1
        }
        ```

2.  🔸 **Obtener una categoría por ID**
    *   **Endpoint:** `GET /api/categorias/{id}`

3.  🔸 **Actualizar una categoría existente**
    *   **Endpoint:** `PUT /api/categorias/{id}`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "sometimes",
            "descripcion": "nullable",
            "id_contenedor": 1
        }
        ```

4.  🔸 **Eliminar una categoría por ID**
    *   **Endpoint:** `DELETE /api/categorias/{id}`

---

### Entidad: Suscripciones

1.  🔸 **Crear un nuevo tipo de suscripción**``
    *   **Endpoint:** `POST /api/suscripciones`
    *   **Request Body JSON:**
        ```json
        {
            "tipo": "required",
            "descripcion": "nullable",
            "precio": 0.00
        }
        ```

2.  🔸 **Obtener una suscripción por ID**
    *   **Endpoint:** `GET /api/suscripciones/{id}`

3.  🔸 **Actualizar un tipo de suscripción**
    *   **Endpoint:** `PUT /api/suscripciones/{id}`
    *   **Request Body JSON:**
        ```json
        {
            "tipo": "sometimes",
            "descripcion": "nullable",
            "precio": 1
        }
        ```

4.  🔸 **Eliminar una suscripción por ID**
    *   **Endpoint:** `DELETE /api/suscripciones/{id}`

---

### Entidad: Empresas

1.  🔸 **Obtener todas las empresas**
    *   **Endpoint:** `GET /api/empresas`

2.  🔸 **Crear una nueva empresa**
    *   **Endpoint:** `POST /api/empresas`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "required",
            "CIF": "required",
            "direccion": "nullable",
            "id_suscripcion": 1
        }
        ```

3.  🔸 **Obtener una empresa por ID**
    *   **Endpoint:** `GET /api/empresas/{id}`

4.  🔸 **Actualizar una empresa existente**
    *   **Endpoint:** `PUT /api/empresas/{id}`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "sometimes",
            "CIF": "sometimes",
            "direccion": "nullable",
            "id_suscripcion": 1
        }
        ```

5.  🔸 **Eliminar una empresa por ID**
    *   **Endpoint:** `DELETE /api/empresas/{id}`

---

### Entidad: Recompensas

1.  🔸 **Crear una nueva recompensa**
    *   **Endpoint:** `POST /api/recompensas`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "required",
            "descripcion": "nullable",
            "foto": "nullable",
            "cantidad": 1,
            "precio_pts": 1
        }
        ```

2.  🔸 **Obtener una recompensa por ID**
    *   **Endpoint:** `GET /api/recompensas/{id}`

3.  🔸 **Actualizar una recompensa existente**
    *   **Endpoint:** `PUT /api/recompensas/{id}`
    *   **Request Body JSON:**
        ```json
        {
            "nombre": "sometimes",
            "descripcion": "nullable",
            "foto" : "nullable",
            "cantidad": 1,
            "precio_pts": 1
        }
        ```

4.  🔸 **Eliminar una recompensa por ID**
    *   **Endpoint:** `DELETE /api/recompensas/{id}`

5.  🔸 **Obtener usuarios por recompensa**
    *   **Endpoint:** `GET /api/recompensas/{id}/usuarios`

---

### Entidad: Usuario-Recompensas (Relación)

1.  🔸 **Listar todas las relaciones usuario-recompensa**
    *   **Endpoint:** `GET /api/usuario-recompensas`

2.  🔸**Asignar recompensa a usuario**
    *   **Endpoint:** `POST /api/usuario-recompensas`
    *   **Request Body JSON:**
        ```json
        {
            "id_usuario": 1,
            "id_recompensa": 3
        }
        ```

3.  🔸**Mostrar una relación específica usuario-recompensa (por ID)**
    *   **Endpoint:** `GET /api/usuario-recompensas/{id}`

4.  🔸**Eliminar asignación de recompensa a usuario**
    *   **Endpoint:** `DELETE /api/usuario-recompensas`
    *   **Request Body JSON:**
        ```json
        {
            "id_usuario": 1,
            "id_recompensa": 3
        }
        ```

5.  🔸**Obtener las recompensas de un usuario específico**
    *   **Endpoint:** `GET /api/usuarios/{id_usuario}/recompensas`

6.  🔸 **Obtener los usuarios con a una recompensa específica**
    *   **Endpoint:** `GET /api/recompensas/{id_recompensa}/usuarios_asignados`


