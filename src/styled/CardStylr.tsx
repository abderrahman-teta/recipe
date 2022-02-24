import styled from "styled-components";

export const CardHomeStyle = styled.div`
    width: 80%;
    margin:  0 auto;
    background-color: white;
    box-shadow: 0 .3rem .5rem rgba(1,1,1,0.15);
    margin-bottom: 1rem ;
    animation: showin 1.5s ease-in ;
    min-height:20rem ;
    @media screen  and (min-width:60rem) {
        width: 18%;
        
        
    }
   @keyframes showin {
        0% {
            opacity: 0;
            transform: scale(.8);
        }
        100% {
            opacity: 100%;
            transform: scale(1);
        }
    }
    
`