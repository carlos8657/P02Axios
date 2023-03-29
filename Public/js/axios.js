function agregarAlumno() {
    const Matricula = document.getElementById('matricula').value;
    const Nombre = document.getElementById('nombre').value;
    const Dom = document.getElementById('Domicilio').value;
    const sexo = document.getElementById('sexo').value;
    const esp = document.getElementById('Especialidad').value;
    if(Matricula){
        const alumno = {
            matricula : Matricula,
            nombre : Nombre,
            domicilio : Dom, 
            sexo : sexo,
            especialidad : esp
        }
        axios.post('/insertar', alumno)
        .then((response) => {
            console.log(response.data);
            alert('Alumno agregado correctamente');
            const res = document.getElementById('tabla');
            res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"
            mostrarT();
        })
        .catch((error) => {
            console.log(error);
            alert('Error al agregar el alumno');
        });
    }
  }


 function mostrarT(){
    axios.get('/')
    .then((res)=>{
    mostrar(res.data);
    })
    .catch((error)=>{
        console.log("Surgio un error" + error);
    })
    function mostrar(data){
        const res = document.getElementById('tabla');

            for(item of data){
                    res.innerHTML += '<tr> <td>' + item.id + '</td> <td>' + item.matricula + '</td> <td>' + item.nombre + '</td><td>' + item.domicilio + 
                    '</td> <td>' + item.sexo + '</td> <td>' + item.especialidad + '</td> </tr>';
            }
    }
  }

function buscar(){
const Matricula = document.getElementById('matricula').value;
if(Matricula){
    axios.get('/buscar', {params: {matricula: Matricula}})
    .then((res)=>{
        mostrar(res.data);
    })
    .catch((error)=>{
        console.log(error);
        alert('No se encuentra la matricula');
    })
    function mostrar(data){
        const res = document.getElementById('tabla');
        res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"

            for(item of data){
                    res.innerHTML += '<tr> <td>' + item.id + '</td> <td>' + item.matricula + '</td> <td>' + item.nombre + '</td><td>' + item.domicilio + 
                    '</td> <td>' + item.sexo + '</td> <td>' + item.especialidad + '</td> </tr>';
            }
    }
}
}

function eliminar(){
const Matricula = document.getElementById('matricula').value;
if(Matricula){
    axios.delete('/borrar', {params: {matricula:Matricula}})
    .then((response) => {
        console.log(response.data);
        alert('Alumno eliminado correctamente');
        const res = document.getElementById('tabla');
        res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"
        mostrarT();
    })
    .catch((error) => {
        console.log(error);
        alert('Error al eliminar el alumno');
    });
}

}

function modificar(){
const Matricula = document.getElementById('matricula').value;
const Nombre = document.getElementById('nombre').value;
const Dom = document.getElementById('Domicilio').value;
const sexo = document.getElementById('sexo').value;
const esp = document.getElementById('Especialidad').value;
if(Matricula){
    const alumno = {
        nombre : Nombre,
        domicilio : Dom, 
        sexo : sexo,
        especialidad : esp,
        matricula : Matricula
    }
    axios.put('/actualizar', alumno)
    .then((response) => {
        console.log(response.data);
        alert('Alumno actualizado correctamente');
        const res = document.getElementById('tabla');
        res.innerHTML = "<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Domicilio</th><th>Sexo</th><th>Especialidad</th></tr>"
        mostrarT();
    })
    .catch((error) => {
        console.log(error);
        alert('Error al actualizar el alumno');
    });
}
}

  