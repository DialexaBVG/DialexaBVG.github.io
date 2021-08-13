
import styled from 'styled-components';
import { lighten } from 'polished';

export const GoogleButton = styled.button`
    display: block;
    font-family: 'Mulish', sans-serif;
    font-color: #D6B064;
    font-weight: bold;
    width: 15%;

    margin-left: auto;
    margin-right: auto;
    height: 60px;
    border-radius: 6px;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    color: #D6B064;
    background-color: transparent;
    border: 1px solid #D6B064;
    cursor: pointer;
    transition: 0.15s ease all;
    &:hover {
        box-shadow: 0 5px 10px rgba(166, 139, 85, 0.1);
        background-color: rgba(166, 139, 85, 0.1);
    }
    &:active {
        border-color: ${lighten(0.1, '#D6B064')};
        color: ${lighten(0.1, '#D6B064')};
    }
    &:active,
    &:focus {
        outline: 0;
    }
`;

export default GoogleButton;
