import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "../components/loader/loader";

function ProtectedRoute({ component: Component, user, ...rest }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <Route
          {...rest}
          render={(props) => {
            if (user?.role == 'Admin') {
              return <Component {...rest} {...props} />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }
          }}
        />
      ) : (
        Loader()
      )}
    </>
  );
}

export default ProtectedRoute;
