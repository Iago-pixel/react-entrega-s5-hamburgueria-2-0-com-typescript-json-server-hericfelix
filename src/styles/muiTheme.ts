import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Primary {
    main: string;
    contrastText: string;
  }

  interface Theme {
    primary: Primary;
  }
  interface MuiTheme {
    palette: Theme;
    success: Primary;
    secondary: Primary;
  }
  // allow configuration using `createTheme`
  interface PrimaryOptions {
    main?: string;
    contrastText?: string;
    secondary?: string;
  }

  interface ThemeOptions {
    primary?: Primary;
  }
  interface MuiThemeOptions {
    palette?: Theme;
  }
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#333333",
      contrastText: "#FCFCFC",
    },
    success: {
      main: "#27AE60",
      contrastText: "#FCFCFC",
    },
    secondary: {
      main: "#BDBDBD",
      contrastText: "#FCFCFC",
    },
  },
});
