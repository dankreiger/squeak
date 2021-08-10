import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary, Spinner } from './../components';

const Home = lazy(() => import('./home/home.frontend.web.app.pages'));
const NotFound = lazy(
  () => import('./not-found/not-found.frontend.web.app.pages')
);
const Restaurant = lazy(
  () => import('./restaurant/restaurant.frontend.web.app.pages')
);

export const Routes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner delay={250} />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id" component={Restaurant} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};
