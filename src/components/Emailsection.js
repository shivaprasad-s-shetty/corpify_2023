import React, { useState } from "react";
import styled from "styled-components";

function Emailsection(props) {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/submit-email", // Updated URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log("Email submitted successfully");
        // Reset the email state after successful submission
        setEmail("");
        // You can add further actions here, such as showing a success message to the user
      } else {
        console.error("Failed to submit email");
        // You can handle the failure case here
      }
    } catch (error) {
      console.error("Error submitting email", error);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <ColumnWrapper>
          <TextWrapper>
            <Title>Use Gmail to contact our</Title>
            <Subtitle>Multi-Channel Help Desk</Subtitle>
          </TextWrapper>
          <InputWrapper>
            <InputLabel>Email</InputLabel>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleEmailSubmit}>Send</Button>
          </InputWrapper>
        </ColumnWrapper>
        <ImageWrapper>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/050715c4ecdb7e5e3912c82890a91749ba294623a9c0b81488843bf7ba268463?apiKey=370ce3c2a20944c1b14e584940571da5&width=800"
            alt="Your alt text here"
          />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(
    233deg,
    rgba(255, 111, 80, 0.3) 0%,
    rgba(255, 190, 92, 0.3) 36.25%,
    rgba(255, 238, 176, 0.3) 62.8%,
    rgba(255, 255, 255, 0.3) 87.69%
  );
  padding: 50px 0 50px 80px;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 44%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.span`
  color: rgba(18, 17, 39, 1);
  font-size: 30px;
`;

const Subtitle = styled.span`
  color: rgba(79, 53, 246, 1);
  font-size: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 56px;
  justify-content: space-between;
  gap: 0px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const InputLabel = styled.label`
  justify-content: center;
  color: #757575;
  align-items: start;
  border-radius: 8px 0px 0px 8px;
  background-color: #fff;
  padding: 22px 60px 22px 14px;
  font: 400 16px Poppins, sans-serif;

  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Button = styled.button`
  justify-content: center;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  background-color: #121127;
  flex-grow: 1;
  padding: 24px 60px;
  font: 700 15px/31px Poppins, sans-serif;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 56%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.86;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  margin-top: 52px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Emailsection;
