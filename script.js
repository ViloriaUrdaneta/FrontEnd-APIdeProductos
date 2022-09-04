
/*const url = 'https://pokeapi.co/api/v2/pokemon'*/

const url = 'http://localhost:8089/api/productos/1'


const cargarProductos = async() =>{

    try{
        const res = await fetch('http://localhost:8089/api/productos');
        console.log(res)
        if(res.status === 200){
            const datos = await res.json();
            
            let resultados = '';
            datos.productos.forEach(producto => {
                resultados += `
                    
                    <div class="card col-3 py-5 mx-2 shadow" style="width: 18rem;" >
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.name}</h5>
                      <p class="card-text">${producto.price}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                    </div>
                    `;
                console.log(producto.name)
            });
      
            document.getElementById('container').innerHTML = resultados

        } else if(res.status === 401){
            console.log("Llave mal puesta")
        } else if(res.status === 404){
            console.log("No existe el registro")
        } else {
            console.log("Error")
        }

    } catch(error){
        console.log(error)
    }
}

cargarProductos();


/** */

/** 
 * 
 * const app = document.querySelector('.container')
fetch(url
)
.then(res => res.json())
.then(data => {

    let elemen = document.getElementById("element")

    console.log(data)
    elemen.innerHTML = `<p>${data}</p>`
})
.catch(err => console.log(err));*/