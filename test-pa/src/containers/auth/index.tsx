import React from 'react';
import styled from 'styled-components';
import Title from 'antd/es/typography/Title';
import useLogin from './hooks/useLogin';

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit
  } = useLogin();

  return (
    <Container>
      <CustomCol1 >
        <CustomBord>
          <CustomLogo src="https://colorlib.com/polygon/adminator/assets/static/images/logo.png" />
        </CustomBord>
      </CustomCol1>
      <CustomCol2 >
        <CustomTitle level={3} style={{ color: '#db7f50' }}>Login</CustomTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput placeholder="Username: admin123" {...register("identity", { required: true })} aria-invalid={errors?.identity ? "true" : "false"} />
          {errors?.identity?.type === "required" && (
            <CustomP role="alert">identity is required</CustomP>
          )}
          <CustomInput placeholder="Password: 123456" {...register("password", { required: true })} aria-invalid={errors?.password ? "true" : "false"} />
          {errors?.password?.type === "required" && (
            <CustomP role="alert">password is required</CustomP>
          )}
          <ButtonCustom type="submit" >
            Submit
          </ButtonCustom>
        </form>
      </CustomCol2>
    </Container>

  );
}

const CustomP = styled('p')((props) => {
  return {
    fontFamily: 'serif',
    color: 'red',
    fontSize: 13,
    paddingLeft: 10
  }
});
const ButtonCustom = styled('button')((props) => {
  return {
    backgroundColor: '#db7f50',
    padding: 10,
    borderRadius: 5,
    border: 'none',
    color: 'white',
    width: 400,
    marginTop: 30,
    cursor: 'pointer',
    ":hover": {
      backgroundColor: '#686262'
    }
  }
});
const CustomInput = styled('input')((props) => {
  return {
    fontFamily: 'serif',
    marginTop: 20,
    width: 375,
    padding: 10,
    borderRadius: 5,
    border: 'none',
    borderBottom: '1.5px solid #db7f50',
    // position: 'absolute',
  }
});
const CustomTitle = styled(Title)((props) => {
  return {
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 25,
    color: '#db7f50',
    // position: 'absolute',
  }
});
const Container = styled('div')((props) => {
  return {
    display: 'flex',
    background: "green",
    height: '100vh'
  }
});
const CustomLogo = styled('img')((props) => {
  return {
    width: 120,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 13
  }
})
const CustomCol1 = styled('div')((props) => {
  return {
    backgroundImage: "url(https://colorlib.com/polygon/adminator/assets/static/images/bg.jpg)",
    width: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  }
});
const CustomBord = styled('div')((props) => {
  return {
    background: "#ffffff",
    // backgroundImage: "url(https://colorlib.com/polygon/adminator/assets/static/images/bg.jpg)",
    width: 150,
    height: 150,
    borderRadius: 300,

  }
});
const CustomCol2 = styled('div')((props) => {
  return {
    paddingLeft: 30,
    paddingRight: 30,
    background: "#ffffff",
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
export default Login;