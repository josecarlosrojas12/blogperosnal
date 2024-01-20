  // src/App.js
  import React from "react";
  import { Container, CssBaseline, Paper, Typography } from "@mui/material";
  import Header from "./components/Header";
  import PostList from "./components/PostList";
  import Footer from "./components/Footer";
  import "./styles.css";

  const posts = [
    { id: 1, title: 'Mi Primer Post', content: 'Bienvenido a mi blog' },
    { id: 2, title: 'Otros Post', content: 'Hablando sobre algo interesante' },
  ];

  const App = () => {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: 20, borderRadius: 16, marginTop: 20 }}>
          <Header />
          <Typography variant="h4" style={{ margin: '20px 0' }}>
            Últimas Entradas
          </Typography>
          <PostList posts={posts} />
          <Footer />
        </Paper>
      </Container>
    );
  };

  export default App;
