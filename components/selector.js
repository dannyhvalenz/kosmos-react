import React from "react";

function Selector({setSelected, selected}) {
    const handleChange = (e) => {
        console.log(e.target.value)
        let newSelected = selected
        if (newSelected.includes(e.target.value)){
            let index = newSelected.indexOf(e.target.value);
            if (index !== -1) {
                newSelected.splice(index, 1);
            }
        } else {
            newSelected.push(e.target.value)
        }
        setSelected(newSelected)
        

    }
    return (
        <div id="selectInputs" className="h-full bg-gray-500 m-3">
            <h2 className="text-center font-bold text-xl mt-3">
                Selecciona los campos que deseas añadir al formulario
            </h2>
            <div className="ml-5 mt-5">
                <div>
                    <input
                        type="checkbox"
                        value="nombre"
                        class="checked:bg-blue-600 checked:border-transparent"
                        onClick={handleChange}
                    />{" "}
                    Nombre Completo
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="edad"
                        class="checked:bg-blue-600 checked:border-transparent"
                        onClick={handleChange}
                    />{" "}
                    Edad
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="genero"
                        class="checked:bg-blue-600 checked:border-transparent"
                        onClick={handleChange}
                    />{" "}
                    Género
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="tipoTrabajo"
                        class="checked:bg-blue-600 checked:border-transparent"
                        onClick={handleChange}
                    />{" "}
                    Tipo de Trabajo
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="telefono"
                        class="checked:bg-blue-600 checked:border-transparent"
                        onClick={handleChange}
                    />{" "}
                    Teléfono
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="email"
                        class="checked:bg-blue-600 checked:border-transparent"
                        onClick={handleChange}
                    />{" "}
                    Email
                </div>
            </div>
        </div>
    );
}

export default Selector;
