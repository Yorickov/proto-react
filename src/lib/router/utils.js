import { createContext, useContext } from 'react';

export const RouterContext = createContext();

export const matchPath = (location, params) => {
  const pattern = params.path.replace(/:[^/]+/i, (m) => `(?<${m.slice(1)}>[\\w-]+)`);
  const regexp = params.exact ? `^${pattern}$` : `^${pattern}(/.*)?$`;
  return location.match(new RegExp(regexp));
};

export const useParams = () => {
  const router = useContext(RouterContext);
  return router.match.groups;
};
