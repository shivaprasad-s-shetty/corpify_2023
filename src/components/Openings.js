import * as React from "react";
import styled from "styled-components";

function Openings(props) {
  return (
    <Div>
      <Div2>Find your fit</Div2>
      <Div3>
        <Div4>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4024817d3786054ed293639c86727f5b3b1c8dc06d2828d9064be7ebffaebcbc?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
          <Div5>
            <strong style={{ color: "rgb(30, 30, 30)" }}>Engineering</strong>
          </Div5>
        </Div4>
        <Div6>
          <Div7>See all open positions </Div7>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf4163de264a57a9aa55fb2a389a4a9f749466191391baba7abb92f0c18a8b7f?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
        </Div6>
      </Div3>
      <Div8>
        <Div9>
          <Img3
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/972b71d52168e1e2d0af2c8ddf3750c37f7525e9df304828cfde993be47ca9d9?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
          <Div10>
            <span style={{ color: "rgb(0, 0, 0)" }}>Product</span>
          </Div10>
        </Div9>
        <Div11>
          <Div12>See all open positions </Div12>
          <Img4
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92739407930d064b01722aedf2569fb86555df314a84b5066fca86ddd66c5286?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
        </Div11>
      </Div8>
      <Div13>
        <Div14>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ecc5e5e37862a32f35f96816c887a2df2d5c40758372d8e360371d6993e553a?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
          <Div15>
            <span style={{ color: "rgb(0, 0, 0)" }}>Marketing</span>
          </Div15>
        </Div14>
        <Div16>
          <Div17>See all open positions </Div17>
          <Img6
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e7bdfd585755afa3820c385f2481f0ba634b86861fe5dc0d459b51eb3a8f037?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
        </Div16>
      </Div13>
      <Div18>
        <Img7
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6abcff6da396dd321db7bd409e7b348e5562aeec0f6a8416d3a69d290dcd0f20?apiKey=370ce3c2a20944c1b14e584940571da5&"
        />
        <Div19>
          <span style={{ color: "rgb(0, 0, 0)" }}>Sales</span>
        </Div19>
        <Div7>See all open positions </Div7>
        <Img8
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9c8697a17c3e6c55fa1c3005ce97c476f652020bf9857570f8c8276d48f836b?apiKey=370ce3c2a20944c1b14e584940571da5&"
        />
      </Div18>
      <Div21>
        <Div22>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18109fdf5da34412157e29d4bbdb3b4a0c9c2cdd86dda7b9f7e41a96984560bc?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
          <Div23>
            <span style={{ color: "rgb(0, 0, 0)" }}>Customer Support</span>
          </Div23>
        </Div22>
        <Div24>
          <Div25>See all open positions </Div25>
          <Img10
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/410ec3830afe3eed0ab8f522cb5fe85c630d05ef9f574bf23807b590bd39d95d?apiKey=370ce3c2a20944c1b14e584940571da5&"
          />
        </Div24>
      </Div21>
      {/* <Div26>View all openings</Div26> */}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div2 = styled.div`
  justify-content: center;
  color: #fff;
  text-align: center;
  align-self: center;
  white-space: nowrap;
  font: 700 40px/140% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div3 = styled.div`
  justify-content: space-between;
  border-top: 1px solid #e5e5eb;
  align-self: stretch;
  display: flex;
  margin-top: 23px;
  width: 100%;
  gap: 20px;
  padding: 27px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
`;

const Img = styled.img`
  aspect-ratio: 1.4;
  object-fit: contain;
  object-position: center;
  width: 105px;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Div5 = styled.div`
  justify-content: center;
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 43px auto 0;
  font: 500 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div6 = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: auto 0;
`;

const Div7 = styled.div`
  justify-content: center;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/115% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div8 = styled.div`
  justify-content: space-between;
  border-top: 1px solid #e5e5eb;
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 27px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div9 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
`;

const Img3 = styled.img`
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 105px;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Div10 = styled.div`
  justify-content: center;
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: auto 0;
`;

const Div12 = styled.div`
  justify-content: center;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/115% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div13 = styled.div`
  justify-content: space-between;
  border-top: 1px solid #e5e5eb;
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 27px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div14 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
`;

const Div15 = styled.div`
  justify-content: center;
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div16 = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: auto 0;
`;

const Div17 = styled.div`
  justify-content: center;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/115% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div18 = styled.div`
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #e5e5eb;
  align-self: stretch;
  display: flex;
  gap: 0px;
  padding: 27px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Img7 = styled.img`
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 105px;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div19 = styled.div`
  justify-content: center;
  color: #fff;
  align-self: center;
  flex-grow: 1;
  margin: auto 0;
  padding: 12px 0;
  font: 500 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

// Updated styling for the Sales section
const Div20 = styled.div`
  justify-content: center;
  color: #333; /* Change this color to match the other sections, e.g., #fff (white) */
  text-align: right;
  text-transform: uppercase;
  margin: auto 0;
  font: 500 14px/115% Poppins, sans-serif;
`;

const Img8 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const Div21 = styled.div`
  justify-content: space-between;
  border-top: 1px solid #e5e5eb;
  border-bottom: 1px solid #e5e5eb;
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 27px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div22 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
`;

const Div23 = styled.div`
  justify-content: center;
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div24 = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: auto 0;
`;

const Div25 = styled.div`
  justify-content: center;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/115% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img10 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div26 = styled.div`
  justify-content: center;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  border-radius: 10px;
  background-color: #121127;
  align-self: center;
  margin-top: 66px;
  padding: 24px 60px;
  font: 700 15px/207% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 23px 0 20px;
  }
`;
export default Openings;
