import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: 800px) {
        padding: 2em 1em;
        flex-wrap: wrap;
    }
`;

export default Container;
