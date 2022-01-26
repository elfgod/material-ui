import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material'
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2'
          },
          style: {
            fontSize: 11,            
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 11,
          },
        },
      ]

    }
  }
})

const TourCard = () => {
  return(
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img 
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          alt="Apartment"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1">
            Immerse 
          </Typography>
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
        >
            <AccessTime sx= {{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
        </Box>
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
        >
          <Rating
            name="real-only"
            value={4.5}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          <Typography variant="body2" component="p" marginLeft={0.5}>
            (655 reviews)
          </Typography>
        </Box>
        <Box variant="h6" component="h3" marginTop={0}>
            From C $147
        </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>    
  )
}

export default TourCard;