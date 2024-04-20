import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  color: #999;
  text-transform: uppercase;
  border: none;
  outline: none;
`;

const TextArea = styled.textarea`
  color: #999;
  text-transform: uppercase;
  border: none;
  outline: black;
  resize: none;
  width: 1016.99px;
  height: 400.26px;
  margin-top: 10px;
`;

const Button = styled.button`
  justify-content: center;
  color: #fff;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #df9926;
  background-color: #f16c51;
  align-self: center;
  margin-top: 27px;
  padding: 19px 32px;
  font: 900 15px/169% Arial, sans-serif;
  cursor: pointer;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #333;
  font: 400 14px/143% Arial, sans-serif;
  width: 100%;
  padding: 5px 0;
`;

const Div = styled.div`
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

const Div2 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 51px 0 15px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div4 = styled.div`
  justify-content: center;
  color: #000;
  font: 500 34px/204% Oswald, sans-serif;
`;

const Div5 = styled.div`
  justify-content: center;
  color: #7e7e7e;
  margin-top: 31px;
  font: 400 25px/36px Arial, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1.3;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 67%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div7 = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div8 = styled.div`
  border-bottom: 2px solid #7e7e7e;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: start;
  padding: 19px 0;
`;

const Div9 = styled.div`
  justify-content: center;
  color: #f16c51;
  text-transform: uppercase;
  margin-left: 37px;
  white-space: nowrap;
  font: 400 10.5px Arial, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const Label = styled.div`
  justify-content: center;
  color: #999;
  text-transform: uppercase;
  align-self: stretch;
  font: 400 14px/143% Arial, sans-serif;
`;

const Div11 = styled.div`
  border-bottom: 2px solid #7e7e7e;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: start;
  padding: 19px 0;
`;

const Div12 = styled.div`
  justify-content: center;
  color: #f16c51;
  text-transform: uppercase;
  margin-left: 60px;
  white-space: nowrap;
  font: 400 10.5px Arial, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const Div13 = styled.div`
  justify-content: center;
  color: #999;
  text-transform: uppercase;
  align-self: stretch;
  font: 400 14px/143% Arial, sans-serif;
`;

const Div14 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div15 = styled.div`
  border-bottom: 2px solid #7e7e7e;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1px;
  padding: 19px 80px 19px 0;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div16 = styled.div`
  justify-content: center;
  color: #999;
  text-transform: uppercase;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/145% Arial, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div17 = styled.div`
  justify-content: center;
  color: #f16c51;
  text-transform: uppercase;
  white-space: nowrap;
  font: 400 10.5px Arial, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div18 = styled.div`
  justify-content: center;
  color: #999;
  text-transform: uppercase;
  border-bottom: 2px solid #7e7e7e;
  flex-grow: 1;
  padding: 21px 0;
  font: 400 14px/143% Arial, sans-serif;
`;

const Div19 = styled.div`
  justify-content: center;
  color: #f16c51;
  text-transform: uppercase;
  align-self: center;
  margin-top: 12px;
  white-space: nowrap;
  font: 400 10.5px Arial, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div20 = styled.div`
  justify-content: center;
  color: #999;
  text-transform: uppercase;
  align-self: stretch;
  font: 400 14px/143% Arial, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div`
  border-bottom: 2px solid #7e7e7e;
  align-self: stretch;
  display: flex;
  margin-top: 5px;
  height: 79px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div22 = styled.div`
  justify-content: center;
  color: #fff;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid #df9926;
  background-color: #f16c51;
  align-self: center;
  margin-top: 27px;
  padding: 19px 32px;
  font: 900 15px/169% Arial, sans-serif;
  cursor: pointer;
`;

const LargeInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #333;
  font: 400 18px/143% Arial, sans-serif; /* Adjust the font size here */
  width: 100%;
  padding: 15px 10px; /* Adjust the padding to make it larger */
  margin-top: 5px; /* Add margin for spacing */
`;

function Requestquery(props) {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch(
        "http://localhost:5000/api/submit-service-req",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Check if the response status is not okay
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        console.log("Service request submitted successfully");
        setFormData({
          email: "",
          company: "",
          jobTitle: "",
          phone: "",
          description: "",
        });
        // You can add further actions here, such as showing a success message to the user
      } else {
        console.error("Failed to submit service request");
        // You can handle the failure case here
      }
    } catch (error) {
      console.error("Error submitting service request", error);
    }
  };
  return (
    <div>
      <Div>
        <Column>
          <Div2>
            <Div3>
              <Div4>Request for services</Div4>
              <Div5>
                Find out more about how we can
                <br />
                help your organization navigate its
                <br />
                next. Let us know your areas of
                <br />
                interest so that we can serve you
                <br />
                better
              </Div5>
            </Div3>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb2c4c7b2f24d91305da1771e724b4e0d46eda374c269b8572c6aa1bcf2afbe?apiKey=370ce3c2a20944c1b14e584940571da5&"
            />
          </Div2>
        </Column>
        <Column2>
          <Div6>
            <Div7>
              <Div8>
                <Div9>*</Div9>
                <Label>Email</Label>
                <LargeInput
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Div8>
              <Div11>
                <Div12>*</Div12>
                <Label>Company</Label>
                <LargeInput
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Div11>
            </Div7>
            {/* <Div14> */}

            <Div18>
              <Label>Phone</Label>
              <TextInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Div18>
            <Div19>*</Div19>
            <Div20>
              <Label>Description</Label>
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Div20>
            <Div21 />
            <Div22 onClick={(event) => handleSubmit(event)}>Submit</Div22>
          </Div6>
        </Column2>
      </Div>
    </div>
  );
}

export default Requestquery;
