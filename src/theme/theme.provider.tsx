"use client";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "./theme.config";
import React from "react";

export type ColorMode = "dark" | "light";

export interface ThemeRegistryProps {
    children: React.ReactNode;
    mode?: ColorMode;
}

const theme = (mode: ColorMode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));

const ThemeRegistry: React.FC<ThemeRegistryProps> = ({
    children,
    mode = "light",
}) => {
    return (
        <ThemeProvider theme={theme(mode)}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    );
};

export default ThemeRegistry;
