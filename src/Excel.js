import React, { Component } from 'react';
import './Excel.css';

class Excel extends Component {

  constructor(props) {
    super(props)
    this.state = {data: this.props.initialData}
  }

  render() {
    return (
      <div className="Excel">
        {this._renderTable()}
      </div>
    )
  }

  _renderTable() {
    return (
      <table>
        <thead >
          <tr>
            {this.props.headers.map((title, idx) =>
              <th
                key={idx}
                onClick={this._sort.bind(this, idx)}>
                {title}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, row_idx) =>
            <tr key={row_idx}>
              {row.map((cell, idx) => <td key={idx}>{cell}</td>)}
            </tr>
          )}
          <tr>
          </tr>
        </tbody>
      </table>
    )
  }

  _sort(column) {
    console.log(`this = ${this}`)
    //let column = e.target.cellIndex
    let newData = Array.from(this.state.data)
    newData.sort((a, b) => a[column] > b[column] ? 1 : -1)
    this.setState({data: newData})
  }

}

export default Excel;
