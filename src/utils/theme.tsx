import { createTheme as createMuiTheme } from "@mui/material/styles";

export const FONT_FAMILY = '"Montserrat", "Roboto", open-sans';

export const YELLOW_COLOR = "#FFC65C";
export const BRIGHT_ORANGE = "#FF6347";

// https://material-ui-next.com/customization/themes/

export const MAIN_BOX_SHADOW = "0 2px 10px 0 rgba(0, 0, 0, 0.16)";
export const DEFAULT_BORDER = "0.5px solid #e0e0e0";

export function createTheme(config: any) {
  return createMuiTheme({
    spacing: 4,
    typography: {
      fontFamily: FONT_FAMILY,
      allVariants: {
        fontFamily: FONT_FAMILY,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: YELLOW_COLOR,
            borderRadius: "5px",
            fontWeight: 700,
            color: "#363A5B",
            "&:hover": {
              backgroundColor: YELLOW_COLOR,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: "5px",
            background: "rgba(62, 67, 102, 1)",
          },
        },
      },
    },
  });
}
