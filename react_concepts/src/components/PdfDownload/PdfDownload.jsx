import React from 'react';
import axios from 'axios';


const PdfDownload = () => {
    const downloadPdf = async () => {
        try {
            // Replace with the actual PDF URL
            // const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
            const pdfUrl = 'https://www.africau.edu/images/default/sample.pdf'

            // Fetch the PDF file
            const response = await axios.get(pdfUrl, {
                responseType: 'blob', // Important for binary data like PDFs
            });

            // Create a blob object and initiate the download
            const blob = new Blob([response.data], { type: 'application/pdf' });
            console.log(blob)
            const url = window.URL.createObjectURL(blob);

            // Create a temporary link element and trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'your-pdf-filename.pdf'; // Change the filename as needed
            document.body.appendChild(link);
            link.click();

            // Clean up
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };
    return (
        <>
            <div>
                <button onClick={downloadPdf}>Download PDF</button>
            </div>
        </>
    )
}

export default PdfDownload