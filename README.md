# Component_React
Creating components using React

Components:
  Table Dynamic : Creating columns and rows dynamically from arrays:
    * Archive: table.js e table.css;
    
    Utilizacion:
      1) Import table.js:
        - import Table from "./components/table";
      2) Tag: <Table headTable={headTable } valuesTable={valores} />
        - Accepted values:
          * const headTable = ["Nome", "e-mail", "Idade", "Data Cadastro"];
          * const valuesTable = [["Daniela", "daniela@teste.com.br", 23, "21/03/2016"], 
                           ["João", "joao@teste.com.br", 30, "21/05/2016"], 
                           ["Laura", "laura@teste.com.br", 28, "21/12/2017"], 
                           ["Juliano", "juliano@teste.com.br", 20, "21/05/2018"]];
                           
  
