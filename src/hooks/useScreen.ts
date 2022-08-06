import useMediaQuery from "@mui/material/useMediaQuery";

export default function useScreen() {
  const isWide = useMediaQuery("(min-width: 1000px)");

  return { isWide };
}
