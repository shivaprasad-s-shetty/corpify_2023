import * as React from "react";
import styled from "styled-components";

function Itsm1(props) {
  return (
    <Background>
      <Container>
        <FlexContainer>
          <Column>
            <TextContainer>
              <Heading>
                The ITSM solution that <br /> unites IT, development, and <br />{" "}
                business teams
              </Heading>
              <SubHeading>
                Deliver exceptional service experiences with Jira <br /> Service
                Management
              </SubHeading>
              <InfoText>
                INCLUDED IN YOUR FREE PLAN: Forever free, no credit card <br />{" "}
                needed
              </InfoText>
            </TextContainer>
          </Column>
          <Column>
            <Image
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81533c23df6be3b93f398d5710a596911205aeb9ff1e04d82c99b0d6637de6ef?apiKey=370ce3c2a20944c1b14e584940571da5&"
            />
          </Column>
        </FlexContainer>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background: linear-gradient(
    241deg,
    #ff9073 0%,
    #6d5db5 23.96%,
    #0049b0 77.08%,
    #064464 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1188px;
  margin: 143px 0 176px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 0;
  }
`;

const FlexContainer = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Heading = styled.div`
  justify-content: center;
  color: #fff;
  font: 400 46px/56px Segoe UI, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 55px;
  }
`;

const SubHeading = styled.div`
  justify-content: center;
  color: #fff;
  letter-spacing: 0.3px;
  margin-top: 62px;
  font: 400 24px/32px Segoe UI, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const InfoText = styled.div`
  justify-content: center;
  color: #fff;
  letter-spacing: 0.3px;
  margin-top: 49px;
  font: 400 20px/24px Segoe UI, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.53;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  margin-top: 13px;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Itsm1;
