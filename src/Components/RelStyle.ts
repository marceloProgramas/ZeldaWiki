import styled from "styled-components";
import { Link } from "react-router-dom";

export const list = styled.ul`
    display: flex;
    flex-direction: row;

    margin: auto;

    justify-content: space-evenly;

    margin-top: 2rem;

`

export const card = styled.li`
    list-style: none;
    padding-top: 10rem;
    background-color: #ADD8E6;

    
    max-width: 12rem;
`

export const link = styled(Link)`
    color: #101010;
    padding-top: 10rem;
    text-decoration: none;


    text-align: center;

`

export const title = styled.h2`
    margin-left: 1rem;
    margin-top: 2rem;

    font-size: 2.5rem;
`