import { useForm } from "../hooks/useForm";

export const FormComponent = () => {
   const {values, handleChange, resetForm} = useForm({
      email: '',
      nombre: '',
      edad: 0,
   })
   const {email, nombre, edad} = values;
   const handleSubmitForm = () =>{
      console.log({email, nombre, edad})
   }

   const handleResetForm = () =>{
      resetForm();
   }


   return (
      <div>
         <div>
            <h2>Formulario</h2>
         </div>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
            }}
         >
            <input
               type="email"
               name="email"
               value={email}
               placeholder="example@example.com"
               onChange={handleChange}
            />
            <input
               type="text"
               name="nombre"
               value={nombre}
               placeholder="Nombre"
               onChange={handleChange}
            />
            <input
               type="number"
               name="edad"
               value={edad||""}
               placeholder="Edad"
               onChange={handleChange}
            />
         </div>
         <div>
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}>Resetear</button>

         </div>
      </div>
   );
};
