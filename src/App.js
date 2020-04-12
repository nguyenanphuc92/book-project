import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Containers
const DefaultLayout = React.lazy(() => import('./components/Layout/DefaultLayout/DefaultLayout'));
const ReadingLayout = React.lazy(() => import('./components/Layout/ReadingLayout/ReadingLayout'));

// Pages
// const Page404 = React.lazy(() => import('./containers/Page404'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {

  render() {
    return (
      // https://web.dev/code-splitting-suspense/
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/reading" name="Reading Page" render={props => <ReadingLayout {...props}/>} />
              {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} /> */}              
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
