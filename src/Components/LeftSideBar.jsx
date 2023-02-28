import { Box, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { DiJava } from "react-icons/di";
export default function LeftSideBar(props) {
  return (
    <>
      <Box className="pt-16 w-[73px] absolute z-50">
        <Box className="flex flex-col bg-white space-y-4 pb-10 rounded-lg">
          {/* <DiJava className="text-6xl"/> */}
          <Tooltip title="Java" placement="right" className="cursor-pointer">
            <Box
              component="img"
              src="https://img.icons8.com/color/256/java-coffee-cup-logo.png"
              className={`h-16 w-16 ${
                props.isSelected === 0
                  ? "border shadow-[5px_10px_8px_#888888] p-2.5 border-solid"
                  : ""
              }`}
              onClick={() => {
                props.changeSelected(0);
                props.changeCode(
                  '// Online Java Compiler\n// Use this editor to write, compile and run your Java code online\n\nclass HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
                );
              }}
            />
          </Tooltip>
          <Tooltip title="C" placement="right" className="cursor-pointer">
            <Box
              component="img"
              src="https://img.icons8.com/fluency/256/c-programming.png"
              className={`h-16 w-16 ${
                props.isSelected === 1
                  ? "border shadow-[5px_10px_8px_#888888] p-2.5 border-solid"
                  : ""
              }`}
              onClick={() => {
                props.changeSelected(1);
                props.changeCode(
                  '// Online C compiler to run C program online\n#include <stdio.h>\n\nint main() {\n    // Write C code here\n    printf("Hello world");\n\n    return 0;\n}'
                );
              }}
            />
          </Tooltip>
          <Tooltip title="C++" placement="right" className="cursor-pointer">
            <Box
              component="img"
              src="https://img.icons8.com/color/256/c-plus-plus-logo.png"
              className={`h-16 w-16 ${
                props.isSelected === 2
                  ? "border shadow-[5px_10px_8px_#888888] p-2.5 border-solid"
                  : ""
              }`}
              onClick={() => {
                props.changeSelected(2);
                props.changeCode(
                  '// Online C++ compiler to run C++ program online\n#include <iostream>\n\nint main() {\n    // Write C++ code here\n    std::cout << "Hello world!";\n\n    return 0;\n}'
                );
              }}
            />
          </Tooltip>
          <Tooltip title="C#" placement="right" className="cursor-pointer">
            <Box
              component="img"
              src="https://img.icons8.com/ios-filled/256/c-sharp-logo.png"
              className={`h-16 w-16 ${
                props.isSelected === 3
                  ? "border shadow-[5px_10px_8px_#888888] p-2.5 border-solid"
                  : ""
              }`}
              onClick={() => {
                props.changeSelected(3);
                props.changeCode(
                  '// Online C# Editor for free\n// Write, Edit and Run your C# code using C# Online Compiler\n\nusing System;\n\npublic class HelloWorld\n{\n    public static void Main(string[] args)\n    {\n        Console.WriteLine ("Hello Mono World");\n    }\n}'
                );
              }}
            />
          </Tooltip>
          <Tooltip
            title="Javascript"
            placement="right"
            className="cursor-pointer"
          >
            <Box
              component="img"
              src="https://img.icons8.com/color/256/javascript.png"
              className={`h-16 w-16 ${
                props.isSelected === 4
                  ? "border shadow-[5px_10px_8px_#888888] p-2.5 border-solid"
                  : ""
              }`}
              onClick={() => {
                props.changeSelected(4);
                props.changeCode(
                  '// Online Javascript Editor for free\n// Write, Edit and Run your Javascript code using JS Online Compiler\n\nconsole.log("Welcome to CodeIDE!")'
                );
              }}
            />
          </Tooltip>
          <Tooltip title="Python" placement="right" className="cursor-pointer">
            <Box
              component="img"
              src="https://img.icons8.com/color/256/python.png"
              className={`h-16 w-16 ${
                props.isSelected === 5
                  ? "border shadow-[5px_10px_8px_#888888] p-2.5 border-solid"
                  : ""
              }`}
              onClick={() => {
                props.changeSelected(5);
                props.changeCode(
                  '# Online Python compiler (interpreter) to run Python online.\n# Write Python 3 code in this online editor and run it.\nprint("Hello world")'
                );
              }}
            />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
