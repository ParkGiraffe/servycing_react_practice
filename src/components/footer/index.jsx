import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';

import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterContainer = styled.div`
    width: 100%;
    min-height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 2em 3em;
    padding-top:1;
    border-top: 0.6px solid rgba(0, 0, 0, 0.3);
    background-color:yellow;
`;

const TopContainer = styled.div`
    width:100%; 
    display:flex;
    margin-bottom:1em;
    background-color:pink;
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    background-color:lightblue;

    &:not(:last-of-type) {
        margin-right: 3%;
    }
`;


const BottomContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:70px;
    border-top: 0.6px solid rgba(0, 0, 0, 0.3);
    padding:0 10px;
    background-color:blue;
`;

const RightBottomContainer = styled.div`
    display:flex;
    background-color:red;
`;

const LeftBottomContainer = styled.div`
    display:flex;
    background-color:white;
`;

const Title = styled.h2`
    margin:0;
    margin-bottom:13px;
    color:#000;
    font-weight:600;
    font-size: 20px;
    background-color:white;
`;

const FLink = styled.a`
    text-decoration:none;
    color:#6f6f6f;
    font-weight:500;
    font-size:15px;
    cursor:pointer;

    &:not(:last-of-type) {
        margin-bottom:8px;
    }
`;


const PricvacyText = styled.h6`
    color:#a3a3a3;
    font-size:11px;
    margin-left:10px;
    margin:0;
    display:flex;
    margin-top:5px;
    align-items:center;
`;

const SocialIcon = styled.div`
    color : #8a8a8a;
    font-size:20px;
    cursor: pointer;
    transition:background-color, 200ms ease-in-out;

    &:not(:last-of-type) {
        margin-right:10px;
    }

    &:hover {
        color:#777777;
    }
`;

export function Footer(props) {
    return(
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Car Repair</FLink>
                    <FLink>Carpentry</FLink>
                    <FLink>Landscape</FLink>
                    <FLink>Cleaning</FLink>
                    <FLink>Home Improvement</FLink>
                    <FLink>Demolition</FLink>
                    <FLink>Management</FLink>
                    <FLink>Others</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join Us</FLink>
                    <FLink>Login as Specialist</FLink>
                    <FLink>Become a Specialist</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo textSize={25} color='#bababa' hideLogo />
                    <PricvacyText> &#169; &copy; All Rights Reserved. 2021</PricvacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    )
}
