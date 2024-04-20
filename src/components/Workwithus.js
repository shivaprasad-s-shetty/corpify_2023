import * as React from "react";
import styled from "styled-components";

function Workingwithus(props) {
  return (
    <Div>
      <Div2>
        <Div3>
          <Column>
            <Div4>
              <h1>
                <strong>What makes us different</strong>
              </h1>
            </Div4>
          </Column>
          <Column2>
            <Div5>
              <Div6>
                <Column3>
                  <Img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e768a5d362061df7274c5919c56d9c7818b1556afd1657030a7029786ffd12?apiKey=370ce3c2a20944c1b14e584940571da5&"
                  />
                </Column3>
                <Column4>
                  <Div7>
                    <Div8>We’re team players</Div8>
                    <Div9>We’re all chasing the same goal.</Div9>
                  </Div7>
                </Column4>
              </Div6>
            </Div5>
          </Column2>
        </Div3>
      </Div2>
      <Div10>
        <Div11>
          <Column5>
            <Div12>
              <Div13>
                <Column6>
                  <Img2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb56cf58c7d0847542855363b74fd02c0c1d20515ffbbc94630364787098c11?apiKey=370ce3c2a20944c1b14e584940571da5&"
                  />
                </Column6>
                <Column7>
                  <Div14>
                    <Div15>We own outcomes</Div15>
                    <Div16>
                      It’s not just about ticking things off a list.
                    </Div16>
                  </Div14>
                </Column7>
              </Div13>
            </Div12>
          </Column5>
          <Column8>
            <Div17>
              <Div18>
                <Column9>
                  <Img3
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c0548b4cd3c057817fe412b1b8bd0e24acd0c7fccc8b6c6d1bc5fc631f87ee?apiKey=370ce3c2a20944c1b14e584940571da5&"
                  />
                </Column9>
                <Column10>
                  <Div19>
                    <Div20>We’re craftspeople</Div20>
                    <Div21>Quality is a choice we make every day.</Div21>
                  </Div19>
                </Column10>
              </Div18>
            </Div17>
          </Column8>
        </Div11>
      </Div10>
      <Div22>
        <Div23>
          <Column11>
            <Div24>
              <Div25>
                <Column12>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d594f51e99cb78f09912a4e85c6f4f28e00f6336013fd3def2143019c68e215e?apiKey=370ce3c2a20944c1b14e584940571da5&"
                  />
                </Column12>
                <Column13>
                  <Div26>
                    <Div27>We celebrate action</Div27>
                    <Div28>Improve, adapt, and overcome – act to win!</Div28>
                  </Div26>
                </Column13>
              </Div25>
            </Div24>
          </Column11>
          <Column14>
            <Div29>
              <Div30>
                <Column15>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dd849e3a5c67dfc254ba011e33af8f5886d05d89c29f0a77f40dc99569a17ed?apiKey=370ce3c2a20944c1b14e584940571da5&"
                  />
                </Column15>
                <Column16>
                  <Div31>
                    <Div32>We’re direct but respectful</Div32>
                    <Div33>Our honesty comes with empathy.</Div33>
                  </Div31>
                </Column16>
              </Div30>
            </Div29>
          </Column14>
        </Div23>
      </Div22>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
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
  width: 47%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 53%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  border-radius: 10px;
  background-color: #f4f6ff;
  flex-grow: 1;
  width: 100%;
  padding: 5px 80px 34px 23px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div6 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.88;
  object-fit: contain;
  object-position: center;
  width: 96px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 25px;
  }
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 76%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div7 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div8 = styled.div`
  justify-content: center;
  color: #201f37;
  font: 500 24px/192% Poppins, sans-serif;
`;

const Div9 = styled.div`
  justify-content: center;
  color: #383751;
  margin-top: 19px;
  white-space: nowrap;
  font: 400 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  margin-top: 34px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 52%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div12 = styled.div`
  border-radius: 10px;
  background-color: #f0faff;
  flex-grow: 1;
  width: 100%;
  padding: 34px 80px 34px 23px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 24px;
    padding: 0 20px;
  }
`;

const Div13 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 0.87;
  object-fit: contain;
  object-position: center;
  width: 96px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 79%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div14 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div15 = styled.div`
  justify-content: center;
  color: #201f37;
  font: 500 24px/192% Poppins, sans-serif;
`;

const Div16 = styled.div`
  justify-content: center;
  color: #383751;
  margin-top: 25px;
  white-space: nowrap;
  font: 400 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 48%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div17 = styled.div`
  border-radius: 10px;
  background-color: #fcf4ff;
  flex-grow: 1;
  width: 100%;
  padding: 34px 80px 34px 23px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 24px;
    padding: 0 20px;
  }
`;

const Div18 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column9 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 22%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 0.87;
  object-fit: contain;
  object-position: center;
  width: 96px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column10 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 78%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div19 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div20 = styled.div`
  justify-content: center;
  color: #201f37;
  font: 500 24px/192% Poppins, sans-serif;
`;

const Div21 = styled.div`
  justify-content: center;
  color: #383751;
  margin-top: 19px;
  white-space: nowrap;
  font: 400 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div22 = styled.div`
  margin-top: 34px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div23 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column11 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 52%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div24 = styled.div`
  border-radius: 10px;
  background-color: #fff4f6;
  flex-grow: 1;
  width: 100%;
  padding: 34px 78px 34px 23px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 24px;
    padding: 0 20px;
  }
`;

const Div25 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column12 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 20%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Column13 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 80%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div26 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div27 = styled.div`
  justify-content: center;
  color: #201f37;
  font: 500 24px/192% Poppins, sans-serif;
`;

const Div28 = styled.div`
  justify-content: center;
  color: #383751;
  margin-top: 25px;
  white-space: nowrap;
  font: 400 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column14 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 48%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div29 = styled.div`
  border-radius: 10px;
  background-color: #fff6f0;
  flex-grow: 1;
  width: 100%;
  padding: 34px 80px 34px 23px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 24px;
    padding: 0 20px;
  }
`;

const Div30 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column15 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Column16 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 77%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div31 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div32 = styled.div`
  justify-content: center;
  color: #201f37;
  white-space: nowrap;
  font: 500 24px/192% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div33 = styled.div`
  justify-content: center;
  color: #383751;
  margin-top: 19px;
  white-space: nowrap;
  font: 400 18px/200% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
export default Workingwithus;
