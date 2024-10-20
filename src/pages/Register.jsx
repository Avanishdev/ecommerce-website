import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false); // For showing errors

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(true); // Handle password mismatch
      return;
    }
    setError(false); // Clear any previous errors
    register(dispatch, { name, lastName, username, email, password }); // Assuming register is a redux action
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <Error>Passwords do not match</Error>}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
