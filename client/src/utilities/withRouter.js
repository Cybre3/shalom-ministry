import React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = (WrappedCompnent) => (props) => {
  const params = useParams();

  return <WrappedCompnent {...props} params={params} />;
};

export default withRouter;
