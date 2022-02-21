import styled from "styled-components";

export const NavStyle = styled.nav`
    width: 100%;
    padding: 1.5rem 0;
    box-shadow:.4rem 0 1rem rgba(1,1,1,.15);
    font-size: 1.2rem;
    z-index: 100;
    position: fixed;
    background-color: white;
   
`

export const ContainerStyle = styled.div`
    max-width: 90rem;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    span{
        font-size: 2rem;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        font-size: 1rem;
        color: black;
        &:not(:last-child){
            margin-right: 1rem;

        }
    }
    @media screen  and (min-width:40rem) {
        display: flex;
        justify-content: space-between;
    }
`
