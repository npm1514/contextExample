import React, { Component, Fragment } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Paper, Checkbox, IconButton } from '@material-ui/core';
import { Delete, FilterList } from '@material-ui/icons';
import { PromoListTable } from './';


import { PromoBodyWrap } from './styles/PromoList';

const paperStyle = {
  display: "flex",
  overflow: "scroll",
  height: "100%",
  flexDirection: "column"
};

class PromoList extends Component {
    state = {
      selected: [],
      page: 0,
      rowsPerPage: 25,
      established: false,
      rows: []
    }

    handleSelectAllClick = (event) => {
      this.setState({ selected: event.target.checked ? this.state.rows.map((n) => n.id) : [] })
    }

    handleClick = (event, id) => {
      const { selected } = this.state;
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      this.setState({selected: newSelected})
    }

    deletePromos = () => {
      this.state.selected.map(a => {
        fetch(`/api/deletePromo/${a}`, { method: "DELETE" })
        .then(res => res.json())
        .then(rows => {
          this.setState({ rows })
        })
      })
    }

    getPromos = () => {
      fetch('/api/getPromos')
      .then(res => res.json())
      .then(rows => {
        this.setState({ rows })
      })
    }

    componentDidMount(){
      this.getPromos();
      this.setState({
        established: true
      })
    }

    render(){
      const { selected, page, rowsPerPage, established, rows } = this.state;
      return established ? (
        <PromoBodyWrap>
          <Paper style={paperStyle}>
            <Toolbar>
              {
                selected.length > 0 ? (
                  <Fragment>
                    {selected.length} selected
                      <IconButton aria-label="delete" onClick={this.deletePromos}>
                        <Delete />
                      </IconButton>
                  </Fragment>
                ) : null
              }
              <IconButton aria-label="filter list">
                <FilterList />
              </IconButton>
            </Toolbar>
            <PromoListTable
              {...this.state}
              handleSelectAllClick={this.handleSelectAllClick}
              handleClick={this.handleClick}
            />
            <TablePagination
              style={{overflow: 'initial'}}
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, page) => this.setState({page})}
              onRowsPerPageChange={(event) => this.setState({page: 0, rowsPerPage: parseInt(event.target.value, 10) })}
            />
          </Paper>
        </PromoBodyWrap>
      ) : null;
    }
}

export default PromoList;
