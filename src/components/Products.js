import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <Div>
      <Div2>
        <Column>
          <Link to="/customer-service">
            <Div3>
              <Div4 />
              <Div5>Customer Service</Div5>
              <Div6>
                Manage email support, live chat,
                <br />
                knowledge base, phone, and
                <br />
                WhatsApp support - right from
                <br />
                Gmail.
              </Div6>
              <Div7>
                <Div8>Read more </Div8>
                <Img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4959b9f72325308316345cb388f80411741023f5b0d46334d8b44a944d3c792b?apiKey=370ce3c2a20944c1b14e584940571da5&"
                />
              </Div7>
            </Div3>
          </Link>
        </Column>
        <Column2>
          <Link to="/finance">
            <Div9>
              <Div10 />
              <Div11>Finance Operations</Div11>
              <Div12>
                Collaborate on invoices, cash
                <br />
                collection requests, bookkeeping
                <br />
                queries, and more, to ensure
                <br />
                company operations run
                <br />
                smoothly.
              </Div12>
              <Div13>
                <Div14>Read more </Div14>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b31884ce10dc28c2d84b917e1e931bf8b2f8fe793da1ef4acbf42bcf4ca34ee1?apiKey=370ce3c2a20944c1b14e584940571da5&"
                />
              </Div13>
            </Div9>
          </Link>
        </Column2>
        <Column3>
          {/* Wrap the content with the <a> tag */}
          <a href="/itsm">
            <Div15>
              <Div16 />
              <Div17>ITSM</Div17>
              <Div18>
                Stay on top of technical issues
                <br />
                your employees face. Assign
                <br />
                tickets based on expertise and
                <br />
                deliver faster resolutions.
              </Div18>
              <Div19>
                <Div20>Read more </Div20>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4959b9f72325308316345cb388f80411741023f5b0d46334d8b44a944d3c792b?apiKey=370ce3c2a20944c1b14e584940571da5&"
                />
              </Div19>
            </Div15>
          </a>
        </Column3>
        <Column4>
          <Div21 to="/peopleop">
            <Div22 />
            <Div23>People Operations</Div23>
            <Div24>
              Be there for your employees at
              <br />
              all times. Provide accurate
              <br />
              responses to queries related to
              <br />
              payroll, company policies,
              <br />
              benefits, and more.
            </Div24>
            <Div25>
              <Div26>Read more </Div26>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df8e14598c538b3ac8eba4c517550baa78c063940b755472b0c70a68922ace2b?apiKey=370ce3c2a20944c1b14e584940571da5&"
              />
            </Div25>
          </Div21>
        </Column4>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  padding: 0 20px;
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
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  border-radius: 8px;
  background-color: #fff6f0;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 44px 35px 44px 20px;
  @media (max-width: 991px) {
    margin-top: 30px;
    padding-right: 20px;
  }
`;

const Div4 = styled.div`
  align-self: start;
  display: flex;
  width: 59px;
  height: 63px;
  flex-direction: column;
`;

const Div5 = styled.div`
  justify-content: center;
  color: #121127;
  align-self: stretch;
  margin-top: 32px;
  font: 500 24px/34px Poppins, sans-serif;
`;

const Div6 = styled.div`
  justify-content: center;
  color: #4c4b63;
  align-self: stretch;
  margin-top: 24px;
  font: 400 16px/30px Poppins, sans-serif;
`;

const Div7 = styled.div`
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #121127;
  align-self: stretch;
  display: flex;
  margin-top: 60px;
  gap: 20px;
  padding: 11px 48px 11px 33px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div8 = styled.div`
  justify-content: center;
  color: #121127;
  text-transform: uppercase;
  margin: auto 0;
  font: 500 14px/21px Poppins, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div9 = styled.div`
  border-radius: 8px;
  background-color: #f1fff1;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 45px 35px 45px 20px;
  @media (max-width: 991px) {
    margin-top: 30px;
    padding-right: 20px;
  }
`;

const Div10 = styled.div`
  align-self: start;
  display: flex;
  width: 58px;
  height: 59px;
  flex-direction: column;
`;

const Div11 = styled.div`
  justify-content: center;
  color: #121127;
  align-self: stretch;
  margin-top: 34px;
  white-space: nowrap;
  font: 500 24px/34px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  justify-content: center;
  color: #4c4b63;
  align-self: stretch;
  margin-top: 18px;
  font: 400 16px/30px Poppins, sans-serif;
`;

const Div13 = styled.div`
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #121127;
  align-self: stretch;
  display: flex;
  margin-top: 26px;
  gap: 20px;
  padding: 11px 48px 11px 33px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div14 = styled.div`
  justify-content: center;
  color: #121127;
  text-transform: uppercase;
  margin: auto 0;
  font: 500 14px/21px Poppins, sans-serif;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div15 = styled.div`
  border-radius: 8px;
  background-color: #f0faff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 45px 52px 45px 20px;
  @media (max-width: 991px) {
    margin-top: 30px;
    padding-right: 20px;
  }
`;

const Div16 = styled.div`
  display: flex;
  margin-top: 4px;
  height: 50px;
  flex-direction: column;
`;

const Div17 = styled.div`
  justify-content: center;
  color: #121127;
  margin-top: 41px;
  font: 500 24px/34px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div18 = styled.div`
  justify-content: center;
  color: #4c4b63;
  margin-top: 24px;
  font: 400 16px/30px Poppins, sans-serif;
`;

const Div19 = styled.div`
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #121127;
  display: flex;
  margin-top: 60px;
  gap: 20px;
  padding: 11px 44px 11px 31px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div20 = styled.div`
  justify-content: center;
  color: #121127;
  text-transform: uppercase;
  margin: auto 0;
  font: 500 14px/21px Poppins, sans-serif;
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div21 = styled(Link)`
  text-decoration: none;
  border-radius: 8px;
  background-color: #f4f6ff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 45px 49px 45px 20px;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 30px;
    padding-right: 20px;
  }
`;

const Div22 = styled.div`
  display: flex;
  height: 61px;
  flex-direction: column;
`;

const Div23 = styled.div`
  justify-content: center;
  color: #121127;
  margin-top: 33px;
  white-space: nowrap;
  font: 500 24px/34px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div24 = styled.div`
  justify-content: center;
  color: #4c4b63;
  margin-top: 18px;
  font: 400 16px/30px Poppins, sans-serif;
`;

const Div25 = styled.div`
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #121127;
  display: flex;
  margin-top: 28px;
  gap: 20px;
  padding: 11px 44px 11px 31px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div26 = styled.div`
  justify-content: center;
  color: #121127;
  text-transform: uppercase;
  margin: auto 0;
  font: 500 14px/21px Poppins, sans-serif;
`;

export default Products;
