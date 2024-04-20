import * as React from "react";
import styled from "styled-components";

function Threepiller(props) {
  return (
    <Div>
      <Div2>Top Three Reasons Our Customers Love Corpify</Div2>
      <Div3>
        <Div4>
          <Column>
            <Div5>
              <Div6 />
              <Div7>
                Simplify Team Collaboration
                <br />
                and Eliminate Duplicate Work
              </Div7>
            </Div5>
          </Column>
          <Column2>
            <Div8>
              <Div9 />
              <Div10>
                Unified Inbox Experience to
                <br />
                Deliver Multi-channel Support
              </Div10>
            </Div8>
          </Column2>
          <Column3>
            <Div11>
              <Div12 />
              <Div13>
                24X7 Highly Rated Customer
                <br />
                Support by Corpify Humans
              </Div13>
            </Div11>
          </Column3>
        </Div4>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 1024px; /* Set maximum width */
  margin: 0 auto; /* Center align content */
`;

const Div2 = styled.div`
  justify-content: center;
  color: black;
  text-align: center;
  font: 700 40px/56px Poppins, sans-serif;
  margin-top: 20px; /* Add some top margin */
`;

const Div3 = styled.div`
  align-self: stretch;
  margin-top: 44px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
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
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  align-items: center;
  border-radius: 8px;
  background-color: #fff6f0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 31px 67px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const Div6 = styled.div`
  display: flex;
  width: 105px;
  height: 105px;
  flex-direction: column;
`;

const Div7 = styled.div`
  justify-content: center;
  color: #343c45;
  text-align: center;
  align-self: stretch;
  margin-top: 26px;
  font: 500 20px/33px Poppins, sans-serif;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div8 = styled.div`
  align-items: center;
  border-radius: 8px;
  background-color: #f4f6ff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 35px 66px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const Div9 = styled.div`
  display: flex;
  width: 139px;
  height: 109px;
  flex-direction: column;
`;

const Div10 = styled.div`
  justify-content: center;
  color: #343c45;
  text-align: center;
  align-self: stretch;
  margin-top: 19px;
  font: 500 20px/33px Poppins, sans-serif;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div11 = styled.div`
  align-items: center;
  border-radius: 8px;
  background-color: #f0faff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 40px 73px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const Div12 = styled.div`
  display: flex;
  width: 92px;
  height: 88px;
  flex-direction: column;
`;

const Div13 = styled.div`
  justify-content: center;
  color: #343c45;
  text-align: center;
  align-self: stretch;
  margin-top: 25px;
  font: 500 20px/33px Poppins, sans-serif;
`;

export default Threepiller;
