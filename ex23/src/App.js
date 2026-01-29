import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Box
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./App.css";

const pokemon = [
  {
    id: 1,
    name: "Venusaur",
    type: "Grass / Poison",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    id: 2,
    name: "Charizard",
    type: "Fire / Flying",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    id: 3,
    name: "Blastoise",
    type: "Water",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  }
];

function App() {
  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Kanto starters
          </Typography>
          <IconButton color="inherit">
            <CatchingPokemonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container className="container">
        <Typography variant="h4" align="center" gutterBottom>
          Final stage evolutions of all starters available in Gen 1.
        </Typography>

        <Grid container spacing={4}>
          {pokemon.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Card className="pokemon-card">
                <CardMedia
                  component="img"
                  height="250"
                  image={p.image}
                  alt={p.name}
                />
                <CardContent>
                  <Typography variant="h6">
                    {p.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Type: {p.type}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small">
                    View Stats
                  </Button>
                  <Button variant="outlined" size="small">
                    Pokédex
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
