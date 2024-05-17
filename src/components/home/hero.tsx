import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { useTheme } from 'next-themes'

interface Exp {
  label: LocalPhone
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme === 'dark' ? 'bg-[#ffffff]' : 'bg-[#031b4c]'}
      `} >

      <Box id="hero" className = "pt-24 pb-44" sx={{ position: 'relative'}}
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
            <Grid item xs={12} md={7}>

              <Box
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    component="h2"
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 40, md: 72 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >

                    <Typography
                      component="span"
                      className="font-bold text-4xl"
                    >
                      Fluent in Development
                    </Typography>{' '}
                  </Typography>
                </Box>
                <Box className="w-full" sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                  <Typography
                    className="text-xl w-full tracking-wide"
                  >
                    {
                      "We provide flexible and intuitive web3, software, and blockchain solutions"
                    }
                  </Typography>
                </Box>
                <Box sx={{ '& button': { mr: 2 } }}>
                  <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                    <StyledButton size="large" variant="contained" startIcon={<TelegramIcon />}>
                      Get in touch
                    </StyledButton>
                  </ScrollLink>
                  <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                    <StyledButton className="bg-white" variant="outlined" size="large" startIcon={<LocalPhoneIcon />}>
                      Schedule a call
                    </StyledButton>
                  </ScrollLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
              {/* Sertificate badge */}

              <Box sx={{ lineHeight: 0 }}>
                <Image src="/images/home/home-intro.png" width={775} height={787} alt="Hero img" />
                {/* <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" /> */}
              </Box>
            </Grid>
          </Grid>

          {/* Experience */}
          {/* <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
            <Grid container spacing={2}>
              {exps.map((item) => (
                <Grid key={item.value} item xs={12} md={4}>
                  <ExpItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box> */}
        </Container>
      </Box>
    </div>
  )
}

export default HomeHero
