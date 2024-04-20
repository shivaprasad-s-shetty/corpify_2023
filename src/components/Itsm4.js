import React from "react";
import styled from "styled-components";

function Itsm4(props) {
  return (
    <Container>
      <Content>
        <Logo
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4eb1d05e3c5e343b3f2c90af2d8e026fd1abda628e49abb6e7ad01be260bed?apiKey=370ce3c2a20944c1b14e584940571da5&"
        />
        The #1 most affordable IT service management solution
      </Content>
      <Subtitle>
        Over 45,000 companies count on Corpify Service Management
      </Subtitle>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/970f79a54896b2685dbefb881126377fdc1ecba6eab19653c81dfe8ad76ae306?apiKey=370ce3c2a20944c1b14e584940571da5&"
      />
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 49px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  position: relative;
  max-width: 858px;
  align-items: center;
  overflow: hidden;
  min-height: 336px;
  width: 100%;
  padding: 124px 60px 142px;
  font: 400 35px/48px Segoe UI, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 20px;
  }
`;

const Logo = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Subtitle = styled.div`
  position: relative;
`;

const Image = styled.img`
  aspect-ratio: 14.46;
  object-fit: contain;
  object-position: center;
  width: 1200px;
  overflow: hidden;
  align-self: center;
  max-width: 1200px;
  margin: 40px 0 112px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

export default Itsm4;
