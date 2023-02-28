import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { Box, Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <header className="text-gray-600">
        <div className="w-[100%] mx-auto flex flex-wrap p-[0.75rem] flex-col md:flex-row items-center bg-white absolute z-50">
          <div className="flex title-font font-medium items-center text-gray-900 md:mb-0 cursor-pointer">
            <CodeIcon />
            <span className="ml-3 text-lg">CodeIDE</span>
          </div>
          <nav className="md:ml-[60px] md:mr-auto flex flex-wrap items-center text-base justify-center space-x-10">
            <Tooltip title="This will be available soon...">
              <Link className="mr-5 hover:text-gray-900 cursor-pointer underline-offset-2 hover:underline">
                DashBoard
              </Link>
            </Tooltip>
            <Tooltip title="This will be available soon...">
              <Link className="mr-5 hover:text-gray-900 cursor-pointer underline-offset-2 hover:underline">
                Team
              </Link>
            </Tooltip>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer underline-offset-2 hover:underline"
              to="/"
            >
              Run Your Code
            </Link>
            {/* <Tooltip title="This will be available soon...">
              <Link className="mr-5 hover:text-gray-900 cursor-pointer underline-offset-2 hover:underline">
                
              </Link>
            </Tooltip> */}
          </nav>
          <Button
            disabled={true}
            className="inline-flex items-center bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer"
          >
            Donate
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </header>
    </>
  );
}
