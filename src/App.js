import './App.scss'
import { Content, Header, ScrollToTop } from './components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { publicRoute } from './routes'
import { DefaultLayout } from './layouts';
import { Fragment, useEffect } from 'react';
import { PageTodos } from './apis';
import { useAppDispatch } from './redux/store';
import { setSystem } from './redux/slices/systemSlice';
import { AnimatePresence } from 'framer-motion';

function App() {


  const dispatch = useAppDispatch()


  const fetchDataSystem = async () => {
    const res = await PageTodos.getPage('home');
    dispatch(setSystem(res.data))
  }

  useEffect(() => {
    fetchDataSystem()
  }, [])
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <AnimatePresence  mode='wait'>
            <Content />
          </AnimatePresence>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
