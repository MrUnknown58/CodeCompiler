import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";

export default function LandingPage() {
  return (
    <>
      <Box className="bg-white h-[100vh]">
        <Grid container className="items-center h-[100vh]">
          <Grid item md={5} className="flex justify-center">
            <CodeIcon sx={{ color: "black" }} fontSize="large" />
            <Typography  className="ml-3 text-xl text-black">CodeIDE</Typography>
          </Grid>
          <Grid item md={7}>
            <Typography className="text-black px-8 py-20">
              An online code compiler is a web-based tool that allows
              programmers to write, compile, and execute code in various
              programming languages without the need to install any software on
              their local machines. With an online code compiler, users can
              access a wide range of programming languages, including C, C++,
              Java, Python, JavaScript, and many more. The tool offers an
              integrated development environment (IDE) with features such as
              syntax highlighting, code completion, and error highlighting to
              help users write code more efficiently. Additionally, online code
              compilers often come with a built-in debugger that enables users
              to debug their code in real-time. Overall, online code compilers
              provide a convenient way for programmers to test their code and
              experiment with new programming languages without the need for
              local installations.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
