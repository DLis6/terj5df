import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vName: "",
      vLast: "",
      names: []
    };
    this.retornoNombre = this.retornoNombre.bind(this);
    this.retornoApellido = this.retornoApellido.bind(this);
    this.action = this.action.bind(this);
  }

  retornoNombre(name) {
    this.setState({
      vName: name
    });
  }
  retornoApellido(lastName) {
    this.setState({
      vLast: lastName
    });
  }
  action(e) {
    e.preventDefault();
    if (this.state.vName && this.state.vLast) {
    
      this.setState({
        names: this.state.names.concat([
          {
            vName: this.state.vName,
            vLast: this.state.vLast
          }
        ]),
        vLast: "",
        vName: ""
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.action}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  onChange={e => {
                    this.retornoNombre(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  name="first-name"
                  value={this.state.vName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  onChange={e => {
                    this.retornoApellido(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  name="last-name"
                  value={this.state.vLast}
                />
              </div>

              <div className="action">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Agregar Invitado
                </button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.names.map((element,index) => {
                  return (
                    <tr key={`element_${element.vName}_${index}`}>
                      <td>{element.vName}</td>
                      <td>{element.vLast}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
