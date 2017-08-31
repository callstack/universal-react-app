import React from 'react';

export default ({ navigateTo, routes }) =>
  (<div>
      {routes.map(route =>
        <button
          onClick={() => { navigateTo(route);} }
          key={route}
        >
          {route}
        </button>
      )}
  </div>)
