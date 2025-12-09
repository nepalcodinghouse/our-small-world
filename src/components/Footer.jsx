import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 text-gray-500 text-sm w-full text-center pb-8">
      <p>© {new Date().getFullYear()} Our Small World. All rights reserved.</p>
      <p className="mt-2 text-gray-600">
        Powered by <span className="text-indigo-600">Abhaya Technologies</span> owned by <span className="text-indigo-600">Pema Gurung</span>
      </p>
    </footer>
  );
}

export default Footer;