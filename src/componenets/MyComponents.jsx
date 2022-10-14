import {
  styled,
  Paper,
} from "@mui/material";

export const GlassProperties = theme => ({
  backgroundColor:(theme.palette.mode==="dark")?"rgba(0, 0, 0, 0.5)":"rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(3px)",
})


export const GlassPaperRaw = styled(Paper)(({theme}) => ({
  ...GlassProperties(theme),
  // borderRadius:"1rem",
  overflow:"hidden",
  width:"100%"
}));


export function GlassPaper({children, sx}) {
  return (
    <GlassPaperRaw
      variant="outlined"
      sx={sx}
    >{children}</GlassPaperRaw>
  )
}