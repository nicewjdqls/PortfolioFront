import React from 'react';

function PdfViewer() {
    return (
        <iframe 
            src="https://d1w6wmahs5nhmy.cloudfront.net/AWS.pdf"  // CloudFront URL로 변경
            width="100%" 
            height="1000px" 
            title="PDF Viewer">
        </iframe>
    );
}

export default PdfViewer;
