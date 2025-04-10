## API Documentation

### Endpoints

#### Insert User

-   **URL**: `/api/insert_usuario`
    -   **Method**: `POST`
    -   **Headers**:
        -   `Content-Type: application/json`
    -   **Body**:
        ```json
        {
            "email": "example@example.com",
            "password": "password123"
        }
        ```
-   **Response**:
    -   **Status Code**: `200`
    -   **Body**:
        ```json
        {
          "status" : "success",
            "message" : "Usuario creado",
            "usuario" : {
              "id" : "",
              "email" : "",
              "password" : ""
        }
        ```
    ```
- **Error Response**:
    - **Status Code**: `400`
    - **Body**:
        ```json
        {
            "status": false,
            "message": "Error en la validación",
            "errors":{

            }
        }
        ```
