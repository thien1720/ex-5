import React from 'react';

import './App.css';
import {BsChevronDown} from "react-icons/bs"
import ListFilter from './component/Filter';
import ListItem from './component/List';

function App() {
  return (
    <div className="App">
        <div className="header">
            <div className="title">
              <h5>Payroll Transaction List</h5>
            </div>
            <div className="content">
              <button className="btn btn-primary">Export CSV <BsChevronDown/></button>
            </div>
        </div>

        <ListFilter />

        <ListItem />
    </div>
  );
}

export default App;
