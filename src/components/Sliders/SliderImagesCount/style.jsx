import styled from 'styled-components'


export const ContentSlider = styled.div`
    width: 100%;
    height: 300px;
    z-index: -2;
`
export const ImageSlider = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: grab;
    
    &:active{
        cursor: grabbing;
    }
`