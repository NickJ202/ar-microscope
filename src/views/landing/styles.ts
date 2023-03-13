import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

export const Content = styled.div`
    height: 400px;
    width: 50vw;
    max-width: 765px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 600px;
    object-fit: contain;
    object-position: center bottom;
`;

export const SearchWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 30px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ActionsWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ActionWrapper = styled.div`
    margin: 0 10px;
`;