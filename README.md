## API Documentation

### Introducción

#### Flujo Inicial

##### Crear un usuario

-   **Method + URL**: `POST /api/insert_usuario`
    -   **Headers**:
        -   `Content-Type: application/json`
    -   **Request tipo**:
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
- **Notas**
    -  El campo **email** debe ser único.
    -  La password debe tener al menos 8 caracteres.
