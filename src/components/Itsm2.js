import React from "react";
import styled from "styled-components";

function Itsm2(props) {
  return (
    <div>
      <Wrapper>
        <LeftColumn>
          <Title>
            Deliver exceptional <br /> service experiences to <br /> all.
          </Title>
          <ContentWrapper>
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d262390fc9cdcf53a10525dcfed86d4c77d305436ad73ccf72703dcfddbbd2?apiKey=370ce3c2a20944c1b14e584940571da5&"
                alt="Service Image"
              />
              <SubTitle>Supercharge your service:</SubTitle>
              <Description>Deliver valuable</Description>
            </div>
            <div>
              <p>
                service experiences on one platform without the burden of heavy,
                rigid processes that create siloes. Optimize the flow of work so
                you can focus on work that matters.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d262390fc9cdcf53a10525dcfed86d4c77d305436ad73ccf72703dcfddbbd2?apiKey=370ce3c2a20944c1b14e584940571da5&"
                alt="Collaboration Image"
              />
              <SubTitle2>Increase collaboration and visibility:</SubTitle2>
            </div>
            <div>
              <p>
                Improve productivity by tracking work across the enterprise
                through an open, collaborative platform. Link issues across Jira
                and connect data from other software development tools.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ddf155c07cb3bf3be2aeebfb77bd667fee0f78dc614cae4f5caafeba269d043?apiKey=370ce3c2a20944c1b14e584940571da5&"
                alt="Scale Image"
              />
              <SubTitle2>Scale efficiently:</SubTitle2>
              <Description>Create value streams that</Description>
            </div>
            <div>
              <p>
                eliminate repetitive tasks and manual processes with no-code
                forms, workflow and automations.
              </p>
            </div>
          </ContentWrapper>
        </LeftColumn>
        <RightColumn>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70e975a0fc8f575102c81fbada28af01d4e217b782bddde70c9a9bf7c80e6c8b?apiKey=370ce3c2a20944c1b14e584940571da5&"
            alt="Image"
          />
        </RightColumn>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 39%;
  margin-left: 20px; // Add margin-left property here
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Title = styled.div`
  justify-content: center;
  color: #253858;
  align-self: stretch;
  font: 400 35px/48px Segoe UI, sans-serif;
`;

const ContentWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SubTitle = styled.div`
  justify-content: center;
  color: #091e42;
  font: 600 16px/150% Segoe UI, sans-serif;
`;

const Description = styled.div`
  justify-content: center;
  color: #091e42;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/150% Segoe UI, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubTitle2 = styled.div`
  justify-content: center;
  color: #091e42;
  flex-grow: 1;
  flex-basis: auto;
  font: 600 16px/150% Segoe UI, sans-serif;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 61%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.5;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Itsm2;
