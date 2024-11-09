import React, { useState, useEffect } from 'react';
import '../Styles/Home.css';
import Footer from './Footer';
import '../Styles/Plans.css';
import '../Styles/Library.css';
import TableAnalyses from './TableAnalyses';
import TableUploads from './TableUploads';
//import axios from 'axios';
import * as globals from './Globals';

function Library() {
  const aData = [
    { files: 'Submission_2023-06-01_15-00-00.txt', modules: 'LEX', date: 'Wed, 07 Jun 2023 23:49:17 GMT', results: 'results'},
  ]; //What is this? Example results?

  const [uploads, setUploads] = useState([]);
  const [analyses, setAnalyses] = useState([]);

  

  return (
    <div className="main-container-loggedin-library">
      <div className='all-tables'>
      <h1 className='header-text'>
        Library
      </h1>

      <h2 className='header-text-h2'>
        Analysis Results
      </h2>

      <div className='each-table'>
        <div>
          <TableAnalyses data={analyses} />
        </div>
      </div>

      <h2 className='header-text-h2'>
        Uploaded Files
      </h2>

      <div className='each-table'>
        <div>
          <TableUploads data={uploads} />
        </div>
      </div>

      </div>

      <div className="footer-text">
        You have used <strong>10%</strong> (5.0 MB) of your 50.0 MB of storage.
      </div>
    </div>
  );
} //TODO: Make this display the library storage properly

export default Library;