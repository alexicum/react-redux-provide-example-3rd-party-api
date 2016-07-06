import React, { PropTypes } from 'react';

const UserPosts = ({ userId, result }) => {
  const marginTop = 20;

  if (!userId) {
    return null;
  }

  if (result === null) {
    return (
      <div style={{ marginTop, color: 'darkblue' }}>
        <b>Searching...</b>
      </div>
    );
  }

  if (result instanceof Error) {
    return (
      <div style={{ marginTop, color: 'darkred' }}>
        <b>Error:</b>
        <pre>{result.toString()}</pre>
      </div>
    );
  }

  return (
    <div style={{ marginTop, color: 'darkgreen' }}>
      <b>Found:</b>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

UserPosts.propTypes = {
  userId: PropTypes.string.isRequired,
  query: PropTypes.any,
  result: PropTypes.any
};

UserPosts.defaultProps = {
  query: ({ props: { userId } }) => ({ userId })
};

export default UserPosts;
