import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

function Login() {
  return (
    <>
      <h4>Login form</h4>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </>
  );
}

export default Login;
