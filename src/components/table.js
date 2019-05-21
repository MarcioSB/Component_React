import React from "react";
import './table.css';

export default class App extends React.Component {
  state = {
    headTable: [],
    valuesTable:[],
  }

componentDidMount(){
    this.loadDados();
}

loadDados = () => {
    const headTable = this.props.headTable;
    const valuesTable = this.props.valuesTable;

    this.setState({headTable, valuesTable});
};

render() {
    return (
      <table>
          <thead>
            <tr>
              {
                this.state.headTable.map(function(value, index){
                  return (
                    <th key={index}>{value}</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.state.valuesTable.map(function(valuesTable, index){
                return (
                  <tr key={index}>
                    {
                      valuesTable.map(function(valor, index){
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