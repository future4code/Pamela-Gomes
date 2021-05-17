import './App.css';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import React from "react";

export default class App extends React.Component {
  state = {
    pagina: "Etapa1"
  };

  trocasdepagina = () => {
    if (this.state.pagina === "Etap2") {
      this.setState({ pagina: "Etapa1" });
    } else if (this.state.pagina === "Etapa1") {
      this.setState({ pagina: "Etapa2" });
    }
  };

  render() {
    
    const renderizaPagina = () => {
      if (this.state.pagina === "Etapa2") {
        return <Etapa2 bananinha={this.trocaDePagina} />;
      } else if (this.state.pagina === "Etapa1") {
        return <Etapa1 trocaDePagina={this.trocaDePagina} />;
      }
    };

    return <div className="App">{renderizaPagina()}</div>;
  }
}
