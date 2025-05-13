# 📎 Documentación de la API de EcoScan
--------------------------------------

Introducción
------------

Esta API permite gestionar la lógica de negocio de la app, facilitando el seguimiento y registro de los productos que cada usuario ha reciclado.

> Todas las rutas están prefijadas con `/api`
--------------------------
## Autenticación

Antes de utilizar los endpoints protegidos, es necesario crear un usuario e iniciar sesión para obtener un token de autenticación.
Los endpoints que indican `Autenticación: Requerida` necesitan el token Bearer:

```
Authorization: Bearer <TU_TOKEN_SANCTUM>
```

---

## Rutas Desprotegidas (No requieren autenticación)

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
    "saldo": 100.50, //opcional
    "id_suscripcion": 1 //opcional
}
```
- **Response tipo** `CODE OK`:
```json
{
"status": true,
"message": "Usuario creado",
"usuario": {
 "id": 1,
 "email": "ejemplo@dominio.com",
 "password" : "12345678"
}
}
```
- **Response tipo** `CODE BAD`:
```json
{
"status": false,
"message": "Error en la validacion",
"errors": {
"email": [
"El campo email es obligatorio.",
"El campo email debe ser una dirección de correo válida.",
"El campo email ya ha sido registrado."
],
"password": [
"El campo password es obligatorio.",
"El campo password debe tener al menos 8 caracteres."
]
}
}
```
- **Response tipo** `CODE 500`:
```json
{
"status": false,
"message": "Error al crear el usuario en la base de datos"
}
```

---

### 📚 Listados Públicos (**Autenticación no requerida**)
  
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

## 🔐 Rutas Protegidas (Requieren autenticación - Bearer Token)

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
    *   **Response tipo** `CODE OK`:
        ```json
          {
            "status": true,
            "message": "Email actualizado",
            "usuario": {
          "id": 1,
          "email": "nuevo_email@dominio.com",
          "password": "12345678"
            }
          }
        ```
    *   **Response tipo** `CODE BAD`:
        ```json
           {
            "status": false,
            "message": "Error en la validacion",
            "errors": {
            "field": [
                "Mensaje de error de validación"
              ]
            }
          }
        ```
2.  🔸 **Actualizar contraseña de usuario**
    *   **Endpoint:** `PUT /api/usuario_password`
    *   **Request Body tipo**
        ```json
        {
            "id": 1,
            "old_password": "contraseña_actual_min8",
            "new_password": "nueva_contraseña_fuerte_min8"
        }
        ```
4.  🔸 **Eliminar usuario**
    *   **Endpoint:** `DELETE /api/usuario`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
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
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Botella de Plástico PET",
            "descripcion": "Botella de agua de 1L.",
            "ingredientes": "Plástico PET",
            "fabricante": "Aguas Frescas S.A.",
            "composicion": "100% PET",
            "puntos": 5,
            "imagen": "https://example.com/images/botella_pet.jpg",
            "enlace_qr": "https://example.com/qr/producto/102",
            "id_categoria": 1,
            "id_empresa": 1
        }
        ```

2.  🔸 **Obtener un producto por ID**
    *   **Endpoint:** `GET /api/productos/{id}`

3.  🔸 **Actualizar un producto existente**
    *   **Endpoint:** `PUT /api/productos/{id}`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Botella de Plástico PET Reciclada",
            "puntos": 7,
            "descripcion": "Botella de agua de 1L, hecha con 30% plástico reciclado."
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
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
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
    *   **Cuerpo de la Solicitud (Request Body) JSON (si tuviera campos actualizables en la tabla pivote):**
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
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "tipo": "Plástico",
            "color": "Amarillo"
        }
        ```

2.  🔸 **Obtener un contenedor por ID**
    *   **Endpoint:** `GET /api/contenedores/{id}`

3.  🔸 **Actualizar un contenedor existente**
    *   **Endpoint:** `PUT /api/contenedores/{id}`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "tipo": "Envases",
            "color": "Amarillo Fuerte"
        }
        ```

4.  🔸 **Eliminar un contenedor por ID**
    *   **Endpoint:** `DELETE /api/contenedores/{id}`

---

### Entidad: Categorías

1.  🔸 **Crear una nueva categoría**
    *   **Endpoint:** `POST /api/categorias`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Plásticos",
            "descripcion": "Para todo tipo de envases de plástico.",
            "id_contenedor": 1
        }
        ```

2.  🔸 **Obtener una categoría por ID**
    *   **Endpoint:** `GET /api/categorias/{id}`

3.  🔸 **Actualizar una categoría existente**
    *   **Endpoint:** `PUT /api/categorias/{id}`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Plásticos y Envases",
            "descripcion": "Para todo tipo de envases de plástico y bricks.",
            "id_contenedor": 1
        }
        ```

4.  🔸 **Eliminar una categoría por ID**
    *   **Endpoint:** `DELETE /api/categorias/{id}`

---

### Entidad: Suscripciones

1.  🔸 **Crear un nuevo tipo de suscripción**
    *   **Endpoint:** `POST /api/suscripciones`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "tipo": "Básica",
            "descripcion": "Plan de suscripción básico.",
            "precio": 0.00
        }
        ```

2.  🔸 **Obtener una suscripción por ID**
    *   **Endpoint:** `GET /api/suscripciones/{id}`

3.  🔸 **Actualizar un tipo de suscripción**
    *   **Endpoint:** `PUT /api/suscripciones/{id}`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "tipo": "Premium",
            "descripcion": "Plan de suscripción con todas las ventajas.",
            "precio": 9.99
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
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Reciclajes Unidos S.A.",
            "CIF": "A12345678",
            "direccion": "Polígono Industrial Las Fuentes, Nave 5",
            "id_suscripcion": 2
        }
        ```

3.  🔸 **Obtener una empresa por ID**
    *   **Endpoint:** `GET /api/empresas/{id}`

4.  🔸 **Actualizar una empresa existente**
    *   **Endpoint:** `PUT /api/empresas/{id}`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Reciclajes Unidos Global",
            "CIF": "A87654321",
            "direccion": "Parque Empresarial Innova, Edificio Beta",
            "id_suscripcion": 3
        }
        ```

5.  🔸 **Eliminar una empresa por ID**
    *   **Endpoint:** `DELETE /api/empresas/{id}`

---

### Entidad: Recompensas

1.  🔸 **Crear una nueva recompensa**
    *   **Endpoint:** `POST /api/recompensas`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Vale Descuento 5€",
            "descripcion": "Descuento de 5€ en comercios asociados.",
            "foto": "https://example.com/images/vale5eur.png",
            "cantidad": 100,
            "precio_pts": 500
        }
        ```

2.  🔸 **Obtener una recompensa por ID**
    *   **Endpoint:** `GET /api/recompensas/{id}`

3.  🔸 **Actualizar una recompensa existente**
    *   **Endpoint:** `PUT /api/recompensas/{id}`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "nombre": "Vale Descuento 10€",
            "descripcion": "Descuento de 10€ en una amplia red de comercios.",
            "cantidad": 50,
            "precio_pts": 900
        }
        ```

4.  🔸 **Eliminar una recompensa por ID**
    *   **Endpoint:** `DELETE /api/recompensas/{id}`

5.  🔸 **Obtener usuarios por recompensa**
    *   **Endpoint:** `GET /api/recompensas/{id}/usuarios`

---

### Entidad: Usuario-Recompensas (Tabla Pivote)

1.  🔸 **Listar todas las relaciones usuario-recompensa**
    *   **Endpoint:** `GET /api/usuario-recompensas`

2.  🔸**Asignar recompensa a usuario (Canjear recompensa)**
    *   **Endpoint:** `POST /api/usuario-recompensas`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "id_usuario": 1,
            "id_recompensa": 3
        }
        ```

3.  🔸**Mostrar una relación específica usuario-recompensa (por ID de la relación)**
    *   **Endpoint:** `GET /api/usuario-recompensas/{id}`

4.  🔸**Eliminar asignación de recompensa a usuario**
    *   **Endpoint:** `DELETE /api/usuario-recompensas`
    *   **Cuerpo de la Solicitud (Request Body) JSON:**
        ```json
        {
            "id_usuario": 1,
            "id_recompensa": 3
        }
        ```

5.  🔸**Obtener las recompensas de un usuario específico**
    *   **Endpoint:** `GET /api/usuarios/{id_usuario}/recompensas`

6.  🔸 **Obtener los usuarios asignados a una recompensa específica**
    *   **Endpoint:** `GET /api/recompensas/{id_recompensa}/usuarios_asignados`


