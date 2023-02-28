// import { Navbar } from "@material-tailwind/react";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextareaAutosize,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import DownloadIcon from "@mui/icons-material/Download";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function IDE(props) {
  const [result, setresult] = useState("");
  const [disableClick, setdisableCLick] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const languages = [
    {
      name: "java",
      type: 0,
      // code: "// Online C compiler to run C program online\n#include <stdio.h>\n\nint main() {\n// Write C code here\nprintf('Hello world');\n\nreturn 0;\n}",
      code: "",
    },
    {
      name: "c",
      type: 1,
      code: "// Online C compiler to run C program online\n#include <stdio.h>\n\nint main() {\n// Write C code here\nprintf('Hello world');\n\nreturn 0;\n}",
    },
    {
      name: "cpp",
      type: 2,
      code: "",
    },
    {
      name: "cs",
      type: 3,
      code: "",
    },
    {
      name: "js",
      type: 4,
      code: "",
    },
    {
      name: "py",
      type: 5,
      code: "",
    },
  ];

  return (
    <>
      <Box className="bg-[#201e34] pt-16 pl-20 pb-4 ">
        <Box className="bg-[#2f3129]">
          <Grid container>
            <Grid item md={6} className="">
              <Box className="h-10 flex items-center space-x-6">
                <Typography className="pl-10">CodeIDE</Typography>
                <Typography className="bg-[#16282d] h-[100%] flex items-center px-3">
                  Main.
                  {languages.filter((m) => m.type === props.isSelected)[0].name}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} className="flex justify-end pr-4 space-x-5">
              <Box className="flex items-center"></Box>
              <Tooltip title="Download File" placement="bottom">
                <Box
                  className="flex items-center"
                  onClick={() => {
                    const element = document.createElement("a");
                    const file = new Blob([props.code], { type: "text/plain" });
                    element.href = URL.createObjectURL(file);
                    element.download = "myFile.txt";
                    document.body.appendChild(element); // Required for this to work in FireFox
                    element.click();
                  }}
                >
                  {/* <a href={props.code} download> */}
                  <Button
                    className="bg-white text-black p-0 normal-case w-10"
                    style={{
                      maxWidth: "30px",
                      maxHeight: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                    }}
                    variant="contained"
                    onClick={() => {
                      props.changeCode("");
                      setinputValue("");
                      setresult("");
                    }}
                  >
                    <DownloadIcon fontSize="small" />
                  </Button>
                  {/* </a> */}
                </Box>
              </Tooltip>
              <Box className="flex items-center">
                <Button
                  className="bg-white text-black p-0 normal-case"
                  onClick={() => {
                    props.changeCode("");
                    setinputValue("");
                    setresult("");
                  }}
                >
                  Clear
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container className="flex pr-0">
          <Grid item md={6}>
            <Box className="">
              <AceEditor
                width="100%"
                height="610.3px"
                style={{ background: "#16282d" }}
                theme="monokai"
                mode="java"
                name="blah2"
                onChange={(e) => {
                  props.changeCode(e);
                }}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={props.code}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </Box>
            <Divider orientation="vertical" sx={{ color: "blue" }} flexItem />
          </Grid>
          <Grid item md={6}>
            <Box className="flex flex-col pl-2 h-[617.48px] bg-[#16282d]">
              <Box className="border-l-[1px] pl-5 h-[100%]">
                <Box className="pr-10">
                  <Typography className="">Inputs</Typography>
                  <TextField
                    value={inputValue}
                    placeholder="Enter you inputs here..."
                    onChange={(e) => {
                      setinputValue(e.target.value);
                    }}
                    fullWidth={true}
                    multiline={true}
                    minRows={5}
                    className="text-white border border-white rounded-md pl-4"
                  ></TextField>
                </Box>
                <Box className="pr-10 pt-[40px] h-[300px]">
                  <Typography className=" text-white">Output</Typography>
                  <TextField
                    value={result}
                    disabled={disableClick}
                    placeholder="Your output will be shown here"
                    fullWidth={true}
                    multiline={true}
                    minRows={8}
                    maxRows={8}
                    className=" text-white border border-white rounded-md pl-4 h-[200px]"
                  ></TextField>
                </Box>
                <Box className="pt-[10px] flex justify-center">
                  {disableClick ? (
                    <>
                      <LoadingButton
                        loading
                        variant="contained"
                        className="pb-[10px] bg-blue-600"
                      >
                        Submit
                      </LoadingButton>
                    </>
                  ) : (
                    <>
                      <Button
                        className="pb-[10px] bg-blue-600 text-white"
                        variant="contained"
                        onClick={() => {
                          // let s=code.split("\n").join("");
                          // console.log("Code is: " + code);
                          // let s=code.replace(/\n/g, " ");
                          // console.log("S is: " + s);
                          // s = s.replace(/\s\s+/g, " ");
                          // s=s.split(" ").join("");
                          // console.log(s);
                          // console.log(inputValue);
                          // console.log(codelanguage);
                          // console.log(languages.filter(m=>m.type===props.isSelected)[0].name);
                          setdisableCLick(true);
                          setresult("CodeIDE is in Action...");
                          axios({
                            method: "post",
                            url: "https://api.codex.jaagrav.in",
                            data: {
                              code: props.code,
                              language: languages.filter(
                                (m) => m.type === props.isSelected
                              )[0].name,
                              input: inputValue,
                            },
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                          })
                            .then(function (response) {
                              //handle success
                              setdisableCLick(false);
                              // console.log(response);
                              // setstatus(response.status);
                              if (response.data.error === "")
                                setresult(response.data.output);
                              else setresult(response.data.error);
                            })
                            .catch(function (response) {});
                        }}
                      >
                        Run
                      </Button>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
