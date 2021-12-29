import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/*" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="news" />} />
          <Route path="business/*" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="entertainment/*" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="general/*" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="news" />} />
          {/* <Route path="health/*" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} /> */}
          <Route path="science/*" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="sports/*" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sport" />} />
          <Route path="tech/*" element={<News apiKey={apiKey} key="tech" pageSize={pageSize} country="in" category="tech" />} />
          {/* <Route exact path="/" ><News key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/bussiness"><News key="bussiness" pageSize={pageSize} country="in" category="bussiness" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/tech"><News key="tech" pageSize={pageSize} country="in" category="tech" /></Route> */}
        </Routes >
      </Router>

    </div>
  )

}



export default App