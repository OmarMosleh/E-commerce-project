import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "react-bootstrap";
const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  // if the error is related to routing in react router dom
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "page not found";
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        Back Home !
      </Link>
    </Container>
  );
};

export default Error;
