import React from 'react';
import '../Styles/Table.css'
import '../Styles/App.css'

interface Person {
    id: number;
    name: string;
    age: number;
}

interface TableProps {
  data: Array<{
    source_filename: string;
    date: string;
    size: string}>;
}

const TableUploads: React.FC<TableProps> = ({ data }) => {
  return (
    <div className='outer-container'>
    <div className='table-container'>
    <table className='custom-table'>
      <thead>
        <tr>
          <th className='rounded-cell-left'>File</th>
          <th>Upload Date/Time</th>
          <th>Size</th>
          <th className='rounded-cell-right'>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hidden'><td colSpan={4}>There are no files in your library.</td></tr>
        {data.map((file, index) => (
          <tr>
            <td>{file['source_filename']}</td>
            <td>{file['date']}</td>
            <td>0</td>
            <td>

              <button>
                  Download
              </button>
              <button>
                  Delete
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default TableUploads;