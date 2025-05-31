'use client';

import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  Grid,
  Column,
  Tag,
} from '@carbon/react';

const ProjectsTable = ({ rows, headers }) => {
  const getRowDescription = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return (
      <Grid className="landing-page" fullWidth>
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <Grid>
            <Column md={4} lg={6} sm={4}>
              <img
                className="projects-page__thumbnail"
                src={row.image}
                alt={row.name}
                width={415}
                height={275}
              />
            </Column>
            <Column md={4} lg={{ span: 8, offset: 6 }} sm={4}>
              <div className="projects-page__subheading">
                {row ? row.outcome : ''}
              </div>
              <div className="projects-page__description">
                {row ? row.description : ''}
              </div>
              <div className="projects-page__skills">
                Skills
                {row ? row.skills.map((skill) => <Tag>{skill}</Tag>) : ''}
              </div>
              <div className="projects-page__products">
                Products
                {row ? row.products.map((product) => <Tag>{product}</Tag>) : ''}
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    );
  };

  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer
          title="Projects"
          description="A collection of my projects over the years."
        >
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })} key={header.key}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>{getRowDescription(row.id)}</p>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default ProjectsTable;
