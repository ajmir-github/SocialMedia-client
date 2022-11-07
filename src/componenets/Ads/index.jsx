import {
  Grid,

} from '@mui/material';
import { useEffect } from 'react';

import AdsCard from './AdsCard';



export default function Ads() {

  return (
    <Grid
      item
      sx={{mb:2, p:{xs:0.2, sm:0.4, md:0.6, lg:0.8}, position: "sticky", top: 0}}
    >
      <Grid container gap={1} justifyContent="center" flexDirection="column">
        
        <AdsCard
          image={{src:"/images/fest.jpg", alt:"festival"}}
          content={{
            title:"Ayia Napa Medieval Festival",
            body:"Ayia Napa Medieval Festival aims to reproduce a time that left its marks in our cultural heritage."
          }}
        />

        <AdsCard
          image={{src:"/images/ai.jpg", alt:"AI"}}
          content={{
            title:"DeepMind AI finds new way to multiply numbers and speed up computers",
            body:"An artificial intelligence created by the firm DeepMind has discovered a new way to multiply numbers, the first such advance in over 50..."
          }}
        />


      </Grid>
    </Grid>
  )
}