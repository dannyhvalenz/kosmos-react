import classNames from "classnames";
import { useFormik } from "formik";
import React from "react";
function Form({setJsonString, selected}) {
    const [isIE, setIsIE] = useState(false);

    useEffect(() => {
        setIsIE(/MSIE|Trident/.test(window.navigator.userAgent));
        return () => {};
      }, []);

    const gender = [
        { name: "Hombre", value: "hombre" },
        { name: "Mujer", value: "mujer" },
    ];
    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (formData) => {
            setJsonString(formData)
        },
    });
    return (
        <div id="showInputs" className={classNames(isIE ? "ie-div-showInputs" : "h-full bg-blue-600 m-3")}>
            <h2 className={classNames(isIE ? "" : "text-center font-bold text-3xl")}>Formulario</h2>
            {selected.length > 0 ? <form
                id="initialSearch"
                onSubmit={formik.handleSubmit}
                className={classNames(isIE ? "" : "mx-5 gap-4 grid grid-cols-1")}
            >
                <div className={`${selected.includes("nombre") ? "flex flex-col" : "hidden" }`}>
                    <p className="font-bold mb-2">Nombre</p>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                        className="inputSettings"
                    />
                </div>
                <div className={`${selected.includes("edad") ? "flex flex-col" : "hidden" }`}>
                    <p className="font-bold mb-2">Edad</p>
                    <input
                        type="number"
                        name="edad"
                        id="edad"
                        onChange={formik.handleChange}
                        value={formik.values.edad}
                        className="inputSettings"
                    />
                </div>
                <div className={`${selected.includes("genero") ? "flex flex-col" : "hidden" }`}>
                    <p className="font-bold mb-2">Género</p>
                    <select
                        type="text"
                        name="genero"
                        id="genero"
                        onChange={formik.handleChange}
                        value={formik.values.genero}
                        className="inputSettings"
                    >
                        <option value="DEFAULT" disabled>
                            Selecciona una opción
                        </option>
                        {gender.map(({ name, value }) => (
                            <option
                                key={value}
                                value={value}
                                className="uppercase"
                            >
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={`${selected.includes("tipoTrabajo") ? "flex flex-col" : "hidden" }`}>
                    <p className="font-bold mb-2">Tipo de Trabajo</p>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="tipoTrabajo"
                                        value="tiempoCompleto"
                                        checked
                                    />
                                    <span className="ml-2">Tiempo completo</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="tipoTrabajo"
                                        value="contrato"
                                    />
                                    <span className="ml-2">Contrato</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="tipoTrabajo"
                                        value="medioTiempo"
                                    />
                                    <span className="ml-2">Medio Tiempo</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${selected.includes("telefono") ? "flex flex-col" : "hidden" }`}>
                    <p className="font-bold mb-2">Teléfono</p>
                    <input
                        type="number"
                        name="telefono"
                        id="telefono"
                        onChange={formik.handleChange}
                        value={formik.values.telefono}
                        className="inputSettings"
                    />
                </div>
                <div className={`${selected.includes("email") ? "flex flex-col" : "hidden" }`}>
                    <p className="font-bold mb-2">Email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="inputSettings"
                    />
                </div>
                <button type="submit" className="w-full px-5 py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 transform duration-150 ease-in">Enviar</button>
            </form> :
            <p className="text-center text-red-800">Selecciona al menos un input</p>}
            
        </div>
    );
}

export default Form;

function initialValues() {
    return {
        nombre: "",
        edad: "",
        genero: "DEFAULT",
        tipoTrabajo: "",
        telefono: "",
        email: "",
    };
}

// function validationSchema() {
//     return {
//         nombre: yup.string().required(true),
//         edad: yup.number().required(true),
//         telefono: yup.number().required(true),
//     };
// }
