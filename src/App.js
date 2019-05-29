import React from 'react';
import Table from "./components/table";


function App() {
  const cabecalho = ["Nome", "e-mail", "Idade", "Data Cadastro"];
  const valores = [["Daniela", "daniela@teste.com.br", 23, "21/03/2016"], 
                   ["João", "joao@teste.com.br", 30, "21/05/2016"], 
                   ["Laura", "laura@teste.com.br", 28, "21/12/2017"], 
                   ["Juliano", "juliano@teste.com.br", 20, "21/05/2018"]];
  const headFilter = ["Nome", "e-mail", "Idade" ];
  return (
      <Table headTable={cabecalho} valuesTable={valores} headFilter={headFilter} />
  );
}

export default App;