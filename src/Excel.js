import React, { Component, PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Excel.css';


class Excel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData,
      sortBy: null, // rowIdx
      descending: false,
      edit: null, // {row: rowIdx, col: colIdx}
    }
  }

  render() {
    return (
      <div className="Excel">
        <Jumbotron className="intro">
            <h2>React Demo: Spreadsheet</h2>
            <h3>Click a heading to sort or reverse sort direction</h3>
            <h3>Double-click a cell to edit; press Enter to commit</h3>
        </Jumbotron>
        {this._renderTable()}
      </div>
    )
  }

  _renderTable() {
    return (
      <table>
        <thead>
          <tr>{
            this.props.headers.map((title, idx) => {
              let header = title;
              if (this.state.sortBy === idx) {
                header += this.state.descending ? ' \u2191' : ' \u2193';
              }
              return (
                <th
                  key={idx}
                  onClick={this._sortToggle.bind(this, idx)}
                >
                  {header}
                </th>
              )
            })
          }

          </tr>
        </thead>
        <tbody>{
          this.state.data.map((row, rowIdx) =>
            <tr key={rowIdx}>{
              row.map((cell, idx) => {
                let contents = cell;
                if (this._isEditing(rowIdx, idx)) {
                  contents = (
                    <form onSubmit={this._save.bind(this, rowIdx, idx)}>
                      <ExcelInput ref="input" initialData={cell}/>
                    </form>
                  )
                }
                return (
                  <td
                    key={idx}
                    data-row={rowIdx}
                    onDoubleClick={this._edit.bind(this, rowIdx, idx)}
                  >
                    {contents}
                  </td>
                )
              })
            }</tr>
          )
        }</tbody>
      </table>
    )
  }

  _isEditing(row, col) {
    return (this.state.edit !== null
      && this.state.edit.row === row
      && this.state.edit.col === col)
  }

  _sortToggle(column) {
    let newState = null;
    if (this.state.sortBy === column) {
      newState = {descending: !this.state.descending}
    } else {
      newState = {sortBy: column, descending: false}
    }
    let order = newState.descending ? -1 : 1;
    let newData = Array.from(this.state.data)
    newData.sort((a, b) => a[column] > b[column] ? order : -order)
    newState.data = newData
    this.setState(newState)
  }

  _edit(row, col) {
    let newState = {edit: {row: row, col: col}}
    this.setState(newState)
  }

  _save(row, col, e) {
    e.preventDefault()
    //console.log(`${this}._save(${row}, ${col}, ${e})`)
    let newData = Array.from(this.state.data)
    let newRow = Array.from(newData[row])
    newRow[col] = this.refs.input.getValue()
    newData[row] = newRow
    this.setState({data: newData, edit: null})
  }
}

Excel.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.array)
};

Excel.defaultProps = {
  headers: [
    "Book", "Author", "Language", "Published", "Sales"
  ],
  initialData: [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
  ]
};


class ExcelInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.initialData,
    }
  }

  render() {
    return (
      <input
        type="text"
        ref="input"
        defaultValue={this.state.data}
        autoFocus="true"
      />
    )
  }

  getValue() {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue()
  }

  componentDidMount() {
    this.refs.input.select();
  }
}

export default Excel;
