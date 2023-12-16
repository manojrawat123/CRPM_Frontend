import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import * as XLSX from 'xlsx';

const ExcelDownloadButton = ({ data, fileName = false }) => {
  const downloadExcel = () => {

    // Convert array of objects to an array of arrays
    const dataArray = data.map(item => Object.values(item));

    // Add header row
    const header = Object.keys(data[0]);
    const dataWithHeader = [header, ...dataArray];

    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet(dataWithHeader);

    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    // Generate a string from the workbook
    const excelString = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Convert the string to a Blob
    const blob = new Blob([s2ab(excelString)], { type: 'application/octet-stream' });

    // Create a download link and trigger the download
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Utility function to convert string to ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };

  return (
      <button
      className={"ml-[4rem] border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-xl transition duration-300 ease-in-out  sm:mr-16"}
      onClick={downloadExcel}
     
      // onClick={handleDownload}
    >
      <Download />
      Download
    </button>
    
  );
};

export default ExcelDownloadButton;
