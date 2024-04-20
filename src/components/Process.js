import * as React from "react";
import styled from "styled-components";

function Process(props) {
  return (
    <Div>
      <Div2>
        <Column>
          <Div3>
            <Box />
            <Div4>
              Yes, we do
              <br />
              get back to you
            </Div4>
            <Div5>
              Quick note: We don’t follow these steps all
              <br />
              too rigorously, but we use them as a framework.
            </Div5>
          </Div3>
        </Column>
        <Column2>
          <Div6>
            <Div7>
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf71e90f392f0d4d0e41f4cc991eaedf846a9bb1c30920e2733adbf956b364a?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div8>Submit your application</Div8>
            </Div7>
            <Div9>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a3eb0432ec4d798da425d04c5a4cb11ef8b9cbdfe8bc689cb9c98577ab660be?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div10>Application review by HR</Div10>
            </Div9>
            <Div11>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b99fa4820ce99ce3ab3762486724808bbcdaa3228b49dfe756083f4731c750c?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div12>Discussion with HR</Div12>
            </Div11>
            <Div13>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89ed984e7f63c68e988a7279d91c9504ca1b8e8e0c391363e8ce4a00d60b4d43?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div14>Job-related skill test</Div14>
            </Div13>
            <Div15>
              <Img5
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ffaff90642eafaf1d9991a3c1e362638af1e66894b4a8e69b1d5b460230a79?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div16>
                In-person/virtual interview with your potential manager
              </Div16>
            </Div15>
            <Div17>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5289faed659eed7ab8ec58f0a24576d733f69ba8522e87d03bd87d5d98e6745a?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div18>Second in-person interview with HR</Div18>
            </Div17>
            <Div19>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc3e72d6f643206156d2882a8c34e502fcca7a495799b505f1d02b189295612?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
              <Div20>Evaluation</Div20>
            </Div19>
          </Div6>
          <Div21>
            <Img8
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0473c819b6c0f5b5df62ee57582775cb166428bc2707bd728b3e9ee89eeebc5?apiKey=370ce3c2a20944c1b14e584940571da5&"
            />
            <Div22>Welcome aboard!</Div22>
            <Div23>🎉</Div23>
          </Div21>
          <Div24 />
        </Column2>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  border-radius: 16px;
  background-color: #ffdc83;
  padding: 0 45px 45px 0;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div2 = styled.div`
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
  width: 58%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  background-color: #fff3d2;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 42px 80px 153px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 31px;
    padding: 0 20px;
  }
`;

const Box = styled.div`
  display: flex;
  margin-top: 30px;
  width: 142px;
  height: 144px;
  flex-direction: column;
`;

const Div4 = styled.div`
  justify-content: center;
  color: #121127;
  max-width: 313px;
  margin: 49px 0 0 28px;
  font: 700 40px/56px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const Div5 = styled.div`
  justify-content: center;
  color: #4c4b63;
  margin-top: 37px;
  max-width: 412px;
  font: italic 400 16px/30px Poppins, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 42%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div6 = styled.div`
  border-radius: 8px 8px 0px 0px;
  background-color: #fff3d2;
  display: flex;
  flex-direction: column;
  padding: 35px 48px 35px 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div7 = styled.div`
  align-self: start;
  display: flex;
  align-items: start;
  gap: 20px;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 14px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Div8 = styled.div`
  justify-content: center;
  color: #121127;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/187.5% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div9 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 41px;
  align-items: start;
  gap: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div10 = styled.div`
  justify-content: center;
  color: #121127;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/187.5% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 41px;
  gap: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div12 = styled.div`
  justify-content: center;
  color: #121127;
  font: 400 16px/187.5% Poppins, sans-serif;
`;

const Div13 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 44px;
  gap: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div14 = styled.div`
  justify-content: center;
  color: #121127;
  font: 400 16px/187.5% Poppins, sans-serif;
`;

const Div15 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 14px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const Div16 = styled.div`
  justify-content: center;
  color: #121127;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 16px/30px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 41px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Div18 = styled.div`
  justify-content: center;
  color: #121127;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 16px/187.5% Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div19 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 41px;
  gap: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div20 = styled.div`
  justify-content: center;
  color: #121127;
  align-self: start;
  font: 400 16px/187.5% Poppins, sans-serif;
`;

const Div21 = styled.div`
  border-radius: 0px 0px 8px 8px;
  background-color: #fffaed;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 80px 20px 12px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const Img8 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 45px;
  overflow: hidden;
  max-width: 100%;
`;

const Div22 = styled.div`
  justify-content: center;
  color: #121127;
  margin: auto 0;
  font: 400 18px/189% Poppins, sans-serif;
`;

const Div23 = styled.div`
  justify-content: center;
  color: #fff;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 34px/100% Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div24 = styled.div`
  display: flex;
  margin-top: 45px;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Process;
