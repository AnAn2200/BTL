import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, Share } from './ServiceElement'
import Icon1 from '../images/phone1.png'
import Icon2 from '../images/phone2.png'
import Icon3 from '../images/phone3.png'
import Icon4 from '../images/phone4.png'
import Icon5 from '../images/phone5.png'
import Icon6 from '../images/phone6.png'
import Icon7 from '../images/phone7.png'
import Icon8 from '../images/phone8.png'





const Services = () => {
  return (
    <>
        <ServicesContainer id='services'>
            <ServicesH1>SẢN PHẨM</ServicesH1>
                <ServicesWrapper>
                <ServicesCard>
                        <ServicesIcon src={Icon7} />
                        <ServicesH2><Share to="Pr2">Xiaomi Redmi Note 11(SP1)</Share></ServicesH2>
                        <ServicesP>4.500.000đ</ServicesP>
                    </ServicesCard>   
                    <ServicesCard>
                        <ServicesIcon src={Icon8} />
                        <ServicesH2><Share to = "Pr1">Xiaomi Redmi Note 11 PRO 5G(SP2)</Share></ServicesH2>
                        <ServicesP>9.900.000đ</ServicesP>
                    </ServicesCard>     
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Iphone 14 256GB(SP3)</ServicesH2>
                        <ServicesP>27.990.000đ</ServicesP>
                    </ServicesCard>  
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Iphone 14 Pro Max(SP4)</ServicesH2>
                        <ServicesP>30.000.000đ</ServicesP>
                    </ServicesCard>        
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Iphone 13 256GB(SP5)</ServicesH2>
                        <ServicesP>22.990.000đ</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon5} />
                        <ServicesH2>Vivo Y21s(SP6)</ServicesH2>
                        <ServicesP>49.900.000đ</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4} />
                        <ServicesH2>SamSung Galaxy A23(SP7)</ServicesH2>
                        <ServicesP>55.690.000đ</ServicesP>
                    </ServicesCard>       
                    <ServicesCard>
                        <ServicesIcon src={Icon6} />
                        <ServicesH2>OPPO A96(SP8)</ServicesH2>
                        <ServicesP>69.900.000đ</ServicesP>
                    </ServicesCard>   
                    
                </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services