import React, {useState} from 'react'
import Video from '../../components/images/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, ArrowForward,ArrowRight,HeroP } from './SectionElement'
import { Button } from '../ButtonElement'
const Section = () => {
    var[hover, setHover] = useState(false);
    var onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>WELCOME!</HeroH1>
        <HeroP>
            
        </HeroP>
        <HeroBtnWrapper>
            <Button to='signup'
             onMouseEnter={onHover} 
             onMouseLeave={onHover}
             primary='true'
             dark='true'
             >
                Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Section

