import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from './BelissaResume2024.pdf';

function PdfComp() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="pdf-style">
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>

                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default PdfComp;