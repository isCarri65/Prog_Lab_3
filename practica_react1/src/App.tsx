import "./App.tsx";
import { AppProduct } from "./components/AppProduct/AppProduct.tsx";
/* import { ComponentCounter } from "./components/ComponentCounter.tsx";
import { MIPrimerComponent } from "./components/MiPrimerComponents.tsx";
import { ComponentUseEffect } from "./components/ComponentUseEffect.tsx";
import { FormComponent } from "./components/formComponent/FormComponent.tsx";
import { AppProduct } from "./components/AppProduct/AppProduct.tsx";
*/
export const App = () => {
   return (
      <div style={{display: "flex", flexDirection:"column", gap:"0.5rem"}}>
      {/*
         <MIPrimerComponent text={"Texto desde propiedades"} color="red" />
         <MIPrimerComponent
            text={"Segundo Componente"}
            color="#0bd"
            fontSize={3}
         />
         <ComponentCounter/>
         <ComponentUseEffect/>
         <FormComponent /> */}
         <AppProduct />
      </div>
   );
};
