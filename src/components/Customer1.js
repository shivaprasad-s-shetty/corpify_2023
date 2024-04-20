import React from "react";
import styled from "styled-components";

function Customer1(props) {
  return (
    <Container>
      <Image
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab485b15cab41bc049940481f6430a8fa5f5b3168555c645beefcc14a5f3536b?apiKey=370ce3c2a20944c1b14e584940571da5&"
      />
      <Content>
        <Title>Customer Service Outsourcing</Title>
        <Wrapper>
          <Column>
            <Description>
              The customer service industry is a continually evolving one. There
              is an increased demand for customer support channels, and it
              becomes crucial for enterprises to handle customer touch points
              across the entire lifecycle. Infosys BPM customer service practice
              understands the client’s specific expectations and addresses them
              in a sustainable and comprehensive manner.
            </Description>
          </Column>
          <Column>
            <Image2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0cd1a596bff7fa7e266e2ea66875fd5aeffb3922e3293c05cc85c96eccf0c98?apiKey=370ce3c2a20944c1b14e584940571da5&"
            />
          </Column>
        </Wrapper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 900px;
  align-items: center;
  padding: 50px 60px 0;
  background-color: #fff; // Add background color

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  margin-top: 52px;
  width: 100%;
  max-width: 1175px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  justify-content: center;
  color: #000;
  text-align: center;
  margin-left: 53px;
  max-width: 502px;
  font: 400 80px/80px Oswald, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 44px;
  }
`;

const Wrapper = styled.div`
  align-self: stretch;
  margin-top: 15px;
  display: flex;
  flex-direction: row; // Set flex direction to row

  @media (max-width: 991px) {
    max-width: 100%;
    flex-direction: column; // Change to column on smaller screens
  }
`;

const Description = styled.div`
  color: #000;
  margin: auto 0;
  font: 300 30px/45px Oswald, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px; // Adjust the margin on smaller screens
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 65%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image2 = styled.img`
  aspect-ratio: 0.6;
  object-fit: contain;
  object-position: center;
  width: 100%;
  align-items: center;
  overflow: hidden;
  flex-grow: 1;
  max-width: 400px; // Set the maximum width of the image

  @media (max-width: 991px) {
    margin-top: 20px; // Adjust the margin on smaller screens
  }
`;

export default Customer1;
