import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Student from './pages/student'
import Teacher from './pages/teacher'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <div >
      <BrowserRouter>
      <div className="container mt-2" >
        <Switch>
          <Route path="/student" component={() => <Student />}>
            {/* <Student /> */}
          </Route>
          <Route path="/teacher" component={() => <Teacher />}>
            {/* <Teacher /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
