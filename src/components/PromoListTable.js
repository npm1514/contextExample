import React, { Component, Fragment } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Paper, Checkbox, IconButton } from '@material-ui/core';
import { Delete, FilterList } from '@material-ui/icons';

import headCells from '../data/promoListHeaders';

class PromoListTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'name',
  }

  descendingComparator = (a, b, orderBy) => b[orderBy] < a[orderBy] ? -1 : (b[orderBy] > a[orderBy] ? 1 : 0)

  stableSort = (array, order, orderBy) => {
    const comparator = order === 'desc'
      ? (a, b) => this.descendingComparator(a, b, orderBy)
      : (a, b) => -this.descendingComparator(a, b, orderBy);
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  createSortHandler = (property) => (event) => {
    this.setState({order: this.state.orderBy === property && this.state.order === 'asc' ? 'desc' : 'asc', orderBy: property})
  }

  render(){
    const { selected, page, rowsPerPage, established, rows, handleSelectAllClick, handleClick } = this.props;
    const { order, orderBy } = this.state;
    return (
      <TableContainer style={{flexGrow: 2}}>
        <Table
          aria-labelledby="tableTitle"
          size='medium'
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all' }}
                />
              </TableCell>
              {
                headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >

                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={this.createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {
              this.stableSort(rows, order, orderBy)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    onDoubleClick={() => {window.location.href = "/editPromo/" + row.id}}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={(event) => handleClick(event, row.id)}
                      />
                    </TableCell>
                    {
                      headCells.map((hc, ind) => {
                        return (
                          <TableCell key={ind}>{row[hc.id]}</TableCell>
                        )
                      })
                    }
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default PromoListTable;
