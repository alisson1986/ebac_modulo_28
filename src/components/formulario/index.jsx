import { useState, useEffect } from "react";

import styles from "./Formulario.module.css";

const Formulario = () => {
let [peso, setPeso] = useState("");
let [altura, setAltura] = useState("");

  
    const calculaImc = () => {
        const imc = peso / (altura*altura);
            switch (true) {
          case (peso > 0 && altura > 0 && imc < 16):
              return'Sua faixa de peso é: Magreza III';
              break;
              case (peso > 0 && altura > 0 && imc >= 16 && imc<17):
              return 'Sua faixa de peso é: Magreza II';
              break;
            case (peso > 0 && altura > 0 && imc >= 17 && imc<18.5):
              return'Sua faixa de peso é: Magreza I';
              break;
              case (peso > 0 && altura > 0 && imc >= 18.5 && imc<25):
              return 'Sua faixa de peso é: Peso normal';
              break;
            case (peso > 0 && altura > 0 && imc >= 25 && imc<30):
              return'Sua faixa de peso é: Sobrepeso';
                break;
            case (peso > 0 && altura > 0 && imc >= 30 && imc< 35):
              return'Sua faixa de peso é: Obesidade grau I';
              break;
              case (peso > 0 && altura > 0 && imc >= 35 && imc< 40):
                return'Sua faixa de peso é: Obesidade grau II';
              break;
              case (peso > 0 && altura > 0 && imc >= 40):
                return'Sua faixa de peso é: Obesidade grau III';
              break;
            default:
                return'Complete os campos para obter seu IMC';
                break;
        }
    }

    return (
        <form>
          <div>
            <input type="number" placeholder="Insira seu peso:" onChange={(e) => setPeso(e.target.value)}/>
          </div>
          <div>
            <input type="number" placeholder="Insira sua altura:" onChange={(e) => setAltura(e.target.value)}/>
          </div>
          <div>
            {calculaImc()} 
          </div>  
        </form>
    );
};

export default Formulario