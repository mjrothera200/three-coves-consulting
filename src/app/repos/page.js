'use client';

import RepoTable from './RepoTable';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Column,
  Grid,
} from '@carbon/react';

import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';

const { graphql } = require('@octokit/graphql');

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: process.env.REACT_APP_GH,
  },
});

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
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
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
  }));

function RepoPage() {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getCarbonRepos() {
      const res = await graphqlWithAuth(
        `{
          user(login: "mjrothera200") {
            # We'll grab all the repositories in one go. To load more resources
            # continuously, see the advanced topics.
            repositories(
              privacy: PUBLIC
              isFork: false
              first: 75
              orderBy: { field: UPDATED_AT, direction: DESC }
            ) {
              totalCount
              nodes {
                url
                homepageUrl
                issues(filterBy: { states: OPEN }) {
                  totalCount
                }
                stargazers {
                  totalCount
                }
                releases(first: 1) {
                  totalCount
                  nodes {
                    name
                  }
                }
                name
                updatedAt
                createdAt
                description
                id
              }
            }
          }
        }`
      );

      console.log(res.user.repositories.nodes);
      if (res.user.repositories.nodes) {
        setRows(getRowItems(res.user.repositories.nodes));
      } else {
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }

    getCarbonRepos();
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
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable
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

export default RepoPage;
