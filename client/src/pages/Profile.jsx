import React, { useEffect } from 'react'
import Title from '../components/Title'
import { useNavigate } from 'react-router';
import Container from "../components/Container"
import Logout from '../components/Logout';

const Profile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
    useEffect (() => {
      if(!token) {
        navigate("/");
      }
    }, [token]);
  return (
    <Container>
      <Title>Profile page</Title>
      <Logout/>
    </Container>
  )
}

export default Profile