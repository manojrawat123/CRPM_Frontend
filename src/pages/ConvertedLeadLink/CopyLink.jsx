import React, { useState } from 'react';
import ClipboardJS from 'clipboard';

function CopyButton(props) {
    
    const id = props.id 
  const linkToCopy = `http://localhost:5173/customer_registration_form/${id}`; // Replace with your desired link

  // State to track the copy button's status
  const [copied, setCopied] = useState(false);

  // Function to handle the copy operation
  const handleCopy = () => {
    const clipboard = new ClipboardJS('.copy-button', {
      text: () => linkToCopy,
    });

    clipboard.on('success', () => {
      setCopied(true);
      clipboard.destroy();
    });

    clipboard.on('error', () => {
      console.error('Failed to copy');
      clipboard.destroy();
    });

    clipboard.onClick({ // Simulate a click on the copy button
      currentTarget: document.getElementById('copy-button'),
    });
  };

  return (
    <div>
      <button id="copy-button" className="copy-button" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}

export default CopyButton;
