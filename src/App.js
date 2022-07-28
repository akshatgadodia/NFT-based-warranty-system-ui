import React,{Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './NavigationBar.js';
import Footer from './Footer.js';
import {Provider} from 'react-redux';
import store from './Redux/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingPage from './LoadingPage.js';

const Home = React.lazy(() => import('./Home'));
const Create = React.lazy(() => import('./Create'));
const Transfer = React.lazy(() => import('./Transfer'));
const PageNotFound = React.lazy(() => import('./Home'));

function App() {
  
  return (
    <Provider store={store}>
      <NavigationBar/>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer/>
    </Provider>
  );
}

export default App;
