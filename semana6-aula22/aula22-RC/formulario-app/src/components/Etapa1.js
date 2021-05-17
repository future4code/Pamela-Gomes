import React from "react";

export default class Etapa1 extends React.Component{
    render(){

    return(

        <form>
        <div>

           <h3>EPATA 1 - DADOS GERIAS</h3>

        <div>

           <p> 1 Qual e o seu nome?</p>
           <input value=""></input>

        </div>  

        <div>

           <p>2. Qual sua idade? </p> 
           <input value=""></input>
        </div>


        <div>

          <p>3. QUal e seu email? </p> 
          <input value=""></input>

        </div>

        <div>

           <p>4. Qual e o seu nivel de escolaridade? </p> 
         
        <select>

             <option value="Ensino medio Imcompleto">Ensino medio Imcompleto</option>
             <option value="Ensino medio Completo">Ensino medio Completo</option>
             <option value="Ensino superior Incompleto">Ensino superior Incompleto</option>
             <option value="Ensino superior Completo">Ensino superios Completo</option>

        </select>
        </div>  
        </div>
        <br>
        </br>

        <div>
        <button>Proxima Etapa</button>
        </div>
        
       
        </form>
  
    )

  }

}

