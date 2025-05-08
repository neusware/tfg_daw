<?php

namespace App\Http\Controllers\Api;

use App\Models\Usuario;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{

    //! revisar como funcionan los scopes

    public function login(Request $request)
    {

        //?qué recibo
        $validator = Validator::make($request->all(), [

            "email" => "required | exists:usuario,email",
            "password" => "required "

        ]);

        //?que hago y que devuelvo
        if ($validator->fails()) {

            $data = [

                "status" => false,
                "message" => "Error en la validación",
                "errors" => $validator->errors()

            ];

            return response()->json($data, 421);
        } else {

            //recupero el registro, no find
            $usuario = Usuario::where('email', $request->email)->first();


            //compruebo que he recuperado y comparo hash
            if (!$usuario || ! Hash::check($request->password, $usuario->password)) {

                return response()->json([
                    "status" => false,
                    "message" => "Contraseña incorrecta, no coincide con el registro asociado a ese email",
                ], 421);

            } else {

                //!success reponse

                //antes de crearlo, elimino los que hay asociados al usuario
                $usuario->tokens()->delete();

                //creo token y lo guardo, asociado al usuario
                $token = $usuario->createToken("authToken")->plainTextToken;


                // Creo un nuevo token y lo guardo, asociado al usuario
                // $tokenResult = $usuario->createToken("authToken");
                // $token = $tokenResult->plainTextToken;

                // // Establezco manualmente el valor de expires_at
                // $expiration = config('sanctum.expiration');
                // if ($expiration) {
                //     $tokenResult->token->expires_at = now()->addMinutes($expiration);
                //     $tokenResult->token->save();
                // }


                //elaboro el json
                $data = [
                    "status" => true,
                    "message" => "Has iniciado sesión en la API",
                    "token" => $token,
                    "usuario" => $usuario
                ];

                return response()->json($data, 200);
            }
        }
    }

/*Response tipo
{
  "status": true,
  "message": "Has iniciado sesión en la API",
  "token": "2|PCKeAr7o0VqynzWzwtdm4psfgyM1gIaBtFSuwvlf027fa962",
  "usuario": {
    "id": 2,
    "nombre": "Nombre del usuario",
    "apellidos": "Apellidos del usuario",
    "email": "email2@example.com",
    "password": "$2y$12$blQbTrZqiaEe6cTN211RJe9XVO3IRNj9bFnMH.NYD8HQcFGQzCL0O",
    "saldo": "100.50",
    "id_suscripcion": 1,
    "created_at": "2025-05-08T11:20:06.000000Z",
    "updated_at": "2025-05-08T11:20:06.000000Z"
  }
}




    //select all
    /**
     * @api {get} /api/select_usuarios Obtener todos los usuarios
     * @apiName GetUsuarios
     * @apiGroup Usuario
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object[]} usuarios Lista de usuarios en la base de datos.
     *
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Usuarios encontrados",
     *       "usuarios": [
     *         {
     *           "id": 1,
     *           "email": "rmr0026@alu.medac.es",
     *           "password": "$2y$10$3"
     *           ...
     *         },
     *         ...
     *       ]
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje descriptivo de la operación.
     *
     * @apiErrorExample {json} Respuesta de Error:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": false,
     *       "message": "No se recuperaron usuarios de la base de datos"
     *     }
     */
    public function select_usuarios()
    {

        //consulto
        $usuarios = Usuario::all();

        //si la consulta no devuelve nada
        if ($usuarios->isEmpty()) {

            //elaboro json
            $data = [
                'status' => false,
                'message' => 'No se recuperaron usuarios de la base de datos'
            ];

            //respondo
            return response()->json($data, 200);
        } else {

            $data = [
                'status' => true,
                'message' => 'Usuarios encontrados',
                'usuarios' => $usuarios //datos target
            ];

            return response()->json($data, 200);
        }
    }


    /*
        {
            "nombre": "Nombre del usuario",
            "apellidos": "Apellidos del usuario",
            "email": "email@example.com",
            "password": "contraseña123",
            "saldo": 100.50,
            "id_suscripcion": 1
        }
    */
    /**
     * * Sign Up un nuevo usuario en la base de datos.
     *
     * @param \Illuminate\Http\Request $request La solicitud HTTP que contiene los datos del usuario.
     * 
     * @return \Illuminate\Http\JsonResponse Respuesta JSON con el estado de la operación y los datos del usuario creado o los errores de validación.
     *
     * @api {post} /api/insert_usuario Insertar usuario
     * @apiName InsertarUsuario
     * @apiGroup Usuario
     * 
     * @apiParam {String} email Email del usuario, debe ser único y en formato de email.
     * @apiParam {String} password Contraseña del usuario, debe tener al menos 8 caracteres.
     * 
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object} usuario Datos del usuario creado.
     * 
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje descriptivo de la operación.
     * @apiError {Object} errors Errores de validación de parámetros.
     * 
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Usuario creado",
     *       "usuario": {
     *         "id": X,
     *         "email": "ejemplo@dominio.com",
     *         "password" : "12345678"
     *       }
     *     }
     * 
     * @apiErrorExample {json} Respuesta de Error:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "status": false,
     *       "message": "Error en la validacion",
     *       "errors": {
     *         "email": [
     *           "El campo email es obligatorio.",
     *           "El campo email debe ser una dirección de correo válida.",
     *           "El campo email ya ha sido registrado."
     *         ],
     *         "password": [
     *           "El campo password es obligatorio.",
     *           "El campo password debe tener al menos 8 caracteres."
     *         ]
     *       }
     *     }
     * 
     * @apiErrorExample {json} Error del Servidor:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al crear el usuario en la base de datos"
     *     }
     */
    public function insert_usuario(Request $request)
    {

        //validacion de request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:usuario,email', //requerido | formato email | unico en la tabla usuario en el campo email
            'password' => 'required|min:8',
        ]);

        //error de validación
        if ($validator->fails()) {

            //genero json
            $data = [
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors()
            ];

            //respondo
            return response()->json($data, 400); //422?


        } else { //validación correcta

            //HASH 
            /* $usuario = Usuario::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            ]); */

            //creo usuario
            $usuario = new Usuario();
            $usuario->nombre = $request->nombre;
            $usuario->apellidos = $request->apellidos;
            $usuario->email = $request->email;
            // $usuario->password = $request->password;
            $usuario->saldo = $request->saldo;
            $usuario->id_suscripcion = $request->id_suscripcion;

            //hash
            $usuario->password = Hash::make($request->password);
            //NO HASH
            // $usuario->password = $request->password;

            if ($usuario->save()) {
                $data = [
                    'status' => true,
                    'message' => 'Usuario creado',
                    'usuario' => $usuario
                ];
                return response()->json($data, 200);
            } else {
                $data = [
                    'status' => false,
                    'message' => 'Error al crear el usuario'
                ];
                return response()->json($data, 500);
            }
        }
    }


    /*
    Formato JSON tipo a recibir (cambie o no email y/o password)
        {
            "id": 1,
            "email": "new_or_not_email@example.com",
            "password": "new_or_not_password123"
        }
    */


    //update v0
    /* public function update_usuario(Request $request){

        //valido los datos, edito por id y los email y password siempre vienen

        // Validar los campos del request
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:usuario,id',
            //unique sin fallo por existencia de propio registro, por si viene en el body aunque no lo cambie (controlable de otra forma - o no viene el dato)
            'email' => 'email|unique:usuario,email,' . $request->id, //nullable
            'password' => 'min:8', //nullable
        ]);

        // Error de validación
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Error en la validación',
                'errors' => $validator->errors()
            ], 200);
        }else{

            //recupero el registro
            $usuario = Usuario::find($request->id);

            //si existe
            if($usuario){

                //comparo el dato entrante con el registro
                if($usuario->email != $request->email ){
                    $usuario->email = $request->email;

                    //si la que viene en el request no es la misma que la que hay en bd (hashcheck para comparar)
                } else if (!Hash::check($request->password, $usuario->password)) {
                    $usuario->password = bcrypt($request->password);
                }

                //guardo cambios
                $usuario->save();

                //genero json
                $data = [
                    'status' => true,
                    'message' => 'Usuario actualizado',
                    'usuario' => $usuario
                ];

                //respondo
                return response()->json($data, 200);

            }
        }
    } */


    /*
Formato JSON tipo
        {
            "id": 8,
            "old_email": "rmrrrrr@alu.medac.es",
            "new_email": "rraararaa@alu.medac.es"
        }
*/
    /**
     * Actualizar la dirección de correo electrónico de un usuario.
     *
     * @api {put} /api/update_usuario_email Actualizar email de usuario
     * @apiName ActualizarEmailUsuario
     * @apiGroup Usuario
     *
     * @apiParam {Number} id El ID del usuario, existente en la base de datos.
     * @apiParam {String} old_email La dirección de correo electrónico actual del usuario, correspondiente al id de usuario.
     * @apiParam {String} new_email La nueva dirección de correo electrónico.
     *
     * @apiSuccess {Boolean} status El estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object} usuario El usuario con el email actualizado.
     * @apiSuccessExample {json} Respuesta Exitosa:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Email actualizado",
     *       "usuario": {
     *         "id": 1,
     *         "email": "nuevo_email@dominio.com",
     *         "password": "12345678"
     *       }
     *     }
     * @apiError {Boolean} status El estado de la operación.
     * @apiError {String} message Mensaje descriptivo de la operación.
     * @apiError {Object} errors Los errores de validación.
     *
     * @apiErrorExample {json} Error de Validación:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "status": false,
     *       "message": "Error en la validacion",
     *       "errors": {
     *         "field": [
     *           "Mensaje de error de validación"
     *         ]
     *       }
     *     }
     *
     * @apiErrorExample {json} 500 Internal Server Error:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al actualizar el email en la base de datos"
     *     }
     */
    public function update_email(Request $request)
    {

        //valido los datos -> email excluir el registro actual (old) de la verificación de unicidad
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:usuario,id',
            'old_email' => 'required|email|unique:usuario,email,' . $request->id,
            'new_email' => 'required|email|unique:usuario,email,'
        ]);

        //error de validación
        if ($validator->fails()) {

            //genero json
            $data = [
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors()
            ];

            //respondo
            return response()->json($data, 400); //422?

        } else { //actualizo el registro

            //recupero el registro
            $usuario = Usuario::find($request->id);

            //si existe y los datos entrantes matchean con registro
            if ($usuario && $usuario->email == $request->old_email) {
                $usuario->email = $request->new_email;


                if ($usuario->save()) {

                    //genero json
                    $data = [
                        'status' => true,
                        'message' => 'Email actualizado',
                        'usuario' => $usuario
                    ];

                    //respondo
                    return response()->json($data, 200);
                } else {

                    //genero json
                    $data = [
                        'status' => false,
                        'message' => 'Error al actualizar el email en la base de datos'
                    ];

                    //respondo
                    return response()->json($data, 500);
                }
            }
        }
    }

    // d": "$2y$12$AdEIfgfWhhdOjDMztNlmLek7T5XqOSwyI4X2sB0viP6Ro
    //d": "$2y$12$Qi4W9Rgs6o3MSTUd90FHoOIgcqXFNeDBhScx/Ts6oEhAKa0

    /*
    Formato JSON tipo
    {
        "id": 3,
        "old_password": "ramon123",
        "new_password": "ramon456"
    }
*/
    /**
     * Actualiza la contraseña de un usuario.
     *
     * @api {put} /api/update_usuario_password Actualizar contraseña de usuario
     * @apiName ActualizarPasswordUsuario
     * @apiGroup Usuario
     *
     * @apiParam {Number} id El ID del usuario.
     * @apiParam {String} old_password La contraseña actual del usuario. Debe tener al menos 8 caracteres.
     * @apiParam {String} new_password La nueva contraseña del usuario. Debe tener al menos 8 caracteres.
     *
     * @apiSuccess {Boolean} status El estado de la solicitud.
     * @apiSuccess {String} message El mensaje de la solicitud.
     * @apiSuccess {Object} usuario El usuario con la contraseña actualizada.
     *
     * @apiError {Boolean} status El estado de la solicitud.
     * @apiError {String} message El mensaje de error.
     * @apiError {Object} errors Los errores de validación.
     *
     *
     * @apiErrorExample {json} Error al actualizar el registro:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al actualizar la contraseña en la base de datos"
     *       }
     *     }
     *
     * @apiErrorExample {json} Error de validación
     * HTTP/1.1 422 Unprocessable Entity
     * {
     *   "status": false,
     *   "message": "Los datos proporcionados no son válidos.",
     *   "errors": {
     *     "new_password": [
     *       "El campo new_password es obligatorio."
     *     ]
     *   }
     * }
     *
     *
     * @apiSuccessExample {json} Respuesta Exitosa:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Password actualizada",
     *       "usuario": {
     *         "id": 1,
     *         "email": "rmr0026@alu.medac.es",
     *         "password": "ramon456"
     *       }
     *     }
     */
    //! no valido para contraseñas seedeads 
    public function update_password(Request $request)
    {

        //valido los datos
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:usuario,id',
            'old_password' => 'required|min:8',
            'new_password' => 'required|min:8',
        ]);

        //error de validación
        if ($validator->fails()) {

            //genero json
            $data = [
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors()
            ];

            //respondo
            return response()->json($data, 422); //400?

        } else { //actualizo el registro

            //recupero el registro
            $usuario = Usuario::find($request->id);

            //HASHsi existe y la contraseña entrante hasheada matchean con registro
            if($usuario && Hash::check($request->old_password, $usuario->password)){
                $usuario->password = Hash::make($request->new_password); //hash nueva passwd

                if ($usuario->save()) {

                    //genero json
                    $data = [
                        'status' => true,
                        'message' => 'Password actualizada',
                        'usuario' => $usuario
                    ];
                    //respondo
                    return response()->json($data, 200);
            } 
            
            //NO HASH -> si la antigua contraseña coincide con la que hay en bd
            // if ($usuario && $usuario->password == $request->old_password) {
            //     $usuario->password = $request->new_password;


            //     if ($usuario->save()) {

            //         //genero json
            //         $data = [
            //             'status' => true,
            //             'message' => 'Password actualizada',
            //             'usuario' => $usuario
            //         ];
            //         //respondo
            //         return response()->json($data, 200);
            //     } else {

            //         //genero json
            //         $data = [
            //             'status' => false,
            //             'message' => 'Error al actualizar la contraseña'
            //         ];
            //         //respondo
            //         return response()->json($data, 500);
            //     }
            }
        }
    }


    /*
    Formato JSON a recibir
        {
            "id": 3,
            "email": "rmr0026@alu.medac.es",
            "password": "ramon123"
        }
*/
    /*   public function delete_usuario(Request $request){

        //valido los datos
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:usuario,id',
            'email' => 'required|email|',
            'password' => 'required|min:8',
        ]);

        //error de validación
        if($validator->fails()){

            //genero json
            $data = [
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors()
            ];

            //respondo
            return response()->json($data, 400); //422?

        }else{//elimino el registro


            $usuario = Usuario::find($request->id);

            //compruebo si los datos entrates matchean
            if($usuario->email == $request->email && Hash::check($request->password, $usuario->password)){

                //elimino
                $usuario->delete();

            }


            }


            //genero json
            $data = [
                'status' => true,
                'message' => 'Usuario eliminado',
                'usuario' => $usuario
            ];

            //respondo
            return response()->json($data, 200); //201

        } */

    /**
     * Elimina un usuario del sistema.
     *
     * @api {delete} /api/delete_usuario Eliminar usuario
     * @apiName DeleteUsuario
     * @apiGroup Usuario
     * @apiVersion 1.0.0
     *
     * @apiParam {Number} id ID del usuario (existente).
     * @apiParam {String} email Email del usuario (existente).
     * @apiParam {String} password Contraseña del usuario (existente).
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     *
     * @apiSuccessExample {json} Respuesta Exitosa:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Usuario eliminado correctamente"
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje de error.
     * @apiError {Object} errors Detalles de los errores de validación.
     *
     * @apiErrorExample {json} Error en la validación:
     *     HTTP/1.1 422 Unprocessable Entity
     *     {
     *       "status": false,
     *       "message": "Error en la validacion",
     *       "errors": {
     *         "id": ["El campo id es obligatorio."],
     *         "email": ["El campo email es obligatorio."],
     *         "password": ["El campo password es obligatorio."]
     *       }
     *     }
     *
     * @apiErrorExample {json} Contraseña incorrecta:
     *     HTTP/1.1 422 Unprocessable Entity
     *     {
     *       "status": false,
     *       "message": "La contraseña es incorrecta"
     *     }
     *
     * @apiErrorExample {json} Error al eliminar el usuario:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al eliminar el usuario"
     *     }
     */
    public function delete_usuario(Request $request)
    {
        // Valido los datos
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:usuario,id',
            'email' => 'required|email|exists:usuario,email',
            'password' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors()
            ], 422);
        }

        // Verificar que el password coincida
        $usuario = Usuario::find($request->id);

        /*NO tocken admin

       if (!Hash::check($request->password, $usuario->password)) {
            return response()->json([
                'status' => false,
                'message' => 'La contraseña es incorrecta'
            ], 422);
        } */

        if ($usuario->password != $request->password) {
            return response()->json([
                'status' => false,
                'message' => 'La contraseña es incorrecta'
            ], 422);
        }

        // Eliminar el usuario
        if ($usuario->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Usuario eliminado correctamente'
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Error al eliminar el usuario'
            ], 500);
        }
    }
}
