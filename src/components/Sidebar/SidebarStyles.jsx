import styled from '@emotion/styled'


export const SidebarContainer = styled.div`
width: ${props => props.isSidebarOpen ? '20%' : '5%'};
max-width: 280px;
min-width: 80px;
background-image: linear-gradient(
    315deg,
    rgba(252,82,150,0.8) 0%,
    rgba(246,112,98,0.8) 74%),
    url(${props => props.backgroundImage});
)
backgorund-size: cover;
background-repeat: no-repeat;
background-position: center center;
position: relative;
transition: .2s ease-in all
`

export const SidebarHeader = styled.h4`
padding: 20px 10px;
text-align: center;
margin-botton: 10px;
letter-spacing: 4px;
color: white;
font-family: ${props => props.font};
`
export const MenuItemContainer = styled.div`

`
export const MenuItem = styled.div`
${props => !props.isSidebarOpen && `
text-align: center;
` }
text-align: left;
padding: 10px 30px;
font-weight: 500;
color: ${props => props.selected ? 'rgba(255,255,255)' : 'rgba(19, 15, 64)'};
font-family: ${props => props.font};
&: hover{
    color: rgba(255,255,255);
    transition: .1s erase-in all; 
}
&: after{
    content: '';
    border: thin solid ${props => props.selected ? 'rgba(255,255,255)' : 'rgba(225, 104, 85)'};
    display: block;
    margin: 8px 0 4px
}

${props => !props.selected && `
&:hover{
    &:after{
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: .1s erase-in all; 
    }
}
`}

`;

export const Text = styled.p`
display: ${props => props.isSidebarOpen ? 'inline' : 'none'}
`
export const Icon = styled.span`
${props => props.isSidebarOpen ? 'margin-right: 15px' : ''}
color: white;
`
////toggler:

export const TogglerContainer = styled.div`
position: absolute;
width: 30%;
botton: 10%;
left: 0;
right: 0;
margin: 0 auto;
`
export const Toggler = styled.div`
margin-top: 40px;
height: 40px;
cursor: pointer;
position: relative;  

&:after {
    content: '';
    position: absolute;
    left: 0;
    top: .25em;
    width: 100%;
    height: .1em;
    background: #fff;
    box-shadow: 0 .75em 0 0 #fff, 0 1.5em 0 0 #fff;
    }
`
