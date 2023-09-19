import React from 'react';

const MyFooter = () => {
    return (
        <footer className="bg-blue-600 text-white">
            <div className="grid grid-cols-4 gap-4 p-6">
                <div className="col-span-1">
                    <img src="your-image-url.jpg" alt="Image" className="w-16 h-16" />
                    <p>Some content here...</p>
                </div>
                <div className="col-span-1">
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h4 className="text-lg font-semibold">MBBS Links</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h4 className="text-lg font-semibold">Important Links</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-blue-800 p-3 text-center">
                &copy; 2023 Your Website. All rights reserved.
            </div>
        </footer>
    );
};

export default MyFooter;
