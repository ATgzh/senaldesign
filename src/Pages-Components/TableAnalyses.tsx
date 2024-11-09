import React from 'react';
import '../Styles/Table.css'

interface Person {
    id: number;
    name: string;
    age: number;
}

interface TableProps {
  data: Array<{ file: string; module: string; date: string}>;
}

const TableAnalyses: React.FC<TableProps> = ({ data }) => {
  return (
    <div className='outer-container'>
    <div className='table-container'>
    <table className='custom-table'>
      <thead>
        <tr>
          <th className='rounded-cell-left'>File</th>
          <th>Analysis</th>
          <th>Date/Time Analyzed</th>
          <th className='rounded-cell-right'>Download Result</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hidden'><td colSpan={4}>There are no items in your library. Upload some text and perform an analysis!</td></tr>
        {data.map((analysis) => (
          <tr>
            <td>
              Source File Goes Here
            </td>
            <td>{analysis.module}</td>
            <td>{analysis.date}</td>
            <td>

            <a href="#">
                <button>
                    Download
                </button>
              </a>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default TableAnalyses;