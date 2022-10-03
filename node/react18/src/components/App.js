import React, {Fragment} from "react";
import TopTracks from "components/TopTracks";
import TopArtists from "components/TopArtists";
import {Link, TextField, Typography} from "@mui/joy";
import Button from "@mui/joy/Button";

const App = props => {
  return (
    <Fragment>
      <div>
        <Typography level={"h4"} component="h1">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body2">Sign in to continue</Typography>
        <TextField
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Email"
        />
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
        <Button
          sx={{
            mt: 1, // margin top
          }}
        >
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don't have an account?
        </Typography>
      </div>
      <TopArtists />
      <TopTracks />
    </Fragment>
  );
};

export default App;
