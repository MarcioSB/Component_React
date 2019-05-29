import React from "react";
import './table.css';

function carregaIndexColunas(arrayCabecalho, arrayFilter){
  var arrayIndex=[];
  for(var i=0;i<arrayFilter.length;i++){
    for(var j=0;j<arrayCabecalho.length;j++){
      if(arrayFilter[i] === arrayCabecalho[j]){
        arrayIndex[arrayIndex.length] = j;
      }
    }
  }
  return arrayIndex;
}

function carregaColunasDeAcordoComIndex(arrayDados, headFilter){
  const newarr = arrayDados.filter(function(item, index){
    var insereColuna = false;
    for(var i=0;i<headFilter.length;i++){
      if(index === headFilter[i]){
        insereColuna = true;
      }
    }
    return insereColuna;
  });
  return newarr;
}

export default class App extends React.Component {
  state = {
    headTable: [],
    valuesTable:[],
    headFilter:[]
  }

componentDidMount(){
    this.loadDados();
}

loadDados = () => {
  const headTableOrig = this.props.headTable;
  const valuesTableOrig = this.props.valuesTable;
  const headFilterOrig = this.props.headFilter;

  if(headFilterOrig === undefined || headFilterOrig.length ===0){
    const headTable = headTableOrig;
    const valuesTable = valuesTableOrig;
    const headFilter = headFilterOrig;
    this.setState({headTable, valuesTable, headFilter});
  }else{
    const headFilter = carregaIndexColunas(headTableOrig, headFilterOrig);

    const headTable = carregaColunasDeAcordoComIndex(headTableOrig, headFilter);
    var valuesTable = [];
    for(var i=0;i<valuesTableOrig.length;i++){
      var row = carregaColunasDeAcordoComIndex(valuesTableOrig[i], headFilter);
      valuesTable[valuesTable.length] = row;
    }

    this.setState({headTable, valuesTable, headFilter});
  }
};

render() {
    return (
      <table>
          <thead>
            <tr>
              {
                this.state.headTable.map(function(item, index){
                  return (
                    <th key={index}>{item}</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.state.valuesTable.map(function(item, index){
                return (
                  <tr key={index}>
                    {
                      item.map(function(valor, index){
                        return (<td key={index}>{valor}</td>)
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
      </table>
    );
  }
}