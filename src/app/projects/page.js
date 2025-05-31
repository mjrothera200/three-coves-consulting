'use client';

import ProjectsTable from './ProjectsTable';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Column,
  Grid,
  Tag,
} from '@carbon/react';

import React, { useEffect, useState } from 'react';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'role',
    header: 'Role',
  },
  {
    key: 'year',
    header: 'Year',
    isSortable: true,
  },
  {
    key: 'summary',
    header: 'Summary',
  },
  {
    key: 'industries',
    header: 'Industries',
  },
];

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    industries: row.industries.map((industry) => <Tag>{industry}</Tag>),
  }));

function ProjectsPage() {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getProjectRepos() {
      const base = window.location.origin;
      fetch(base + '/technicalprojects.json', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        response.json().then((data) => {
          console.log(data.projects);
          setRows(getRowItems(data.projects));
        });

        setLoading(false);
      });
    }
    getProjectRepos();
  }, []);

  if (loading) {
    return (
      <Grid className="repo-page">
        <Column lg={16} md={8} sm={4} className="repo-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <Grid className="projects-page">
      <Column lg={16} md={8} sm={4} className="projects-page__r1">
        <ProjectsTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
}

export default ProjectsPage;
