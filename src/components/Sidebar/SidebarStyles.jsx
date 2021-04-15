import styled from '@emotion/styled'


export const SidebarContainer = styled.div`
width: 20%;
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
`

export const SidebarHeader = styled.h3`
padding: 20px 10px;
text-align: center;
margin-botton: 10px;
letter-spacing: 4px;
color: white;
`




