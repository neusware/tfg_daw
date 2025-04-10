const fetch1 = document.querySelector('#fetch1');

fetch1.addEventListener('click',()=>{
    fetch('/public/datos')
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos))
    }
)

const fetch2 = document.querySelector('#fetch2');

fetch1.addEventListener('click',()=>{
    fetch('/public/api/datos',{

        headers:{

            Authorization: 'Bearer 2|FRR5kYSoGZPg2jKmFZV1D1bHz3ZMROBRScG81ABKd21d5afa',
            Accept: 'Aplication/json'

        }
    })
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos))
    }
)


