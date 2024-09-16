import React, { useState } from "react";
import { Typography, Grid, Button, Box, Paper } from "@mui/material";
import CardItem from './CardItem';
import cardImages from '../data/cardImages'; 
import getCardValue from '../utils/getCardValue'; 
const ThreeCards = () => {
  const [player1Cards, setPlayer1Cards] = useState([null, null, null]); //number 2
  const [player2Cards, setPlayer2Cards] = useState([null, null, null]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState(''); // winner

  const handleDrawCard = () => {
    if (currentCardIndex >= 3) return; 

    const drawCard = () => cardImages[Math.floor(Math.random() * cardImages.length)]; // number 3

    setPlayer1Cards((prevCards) => {
      const newCards = [...prevCards];
      newCards[currentCardIndex] = drawCard();
      if (currentCardIndex === 2) {
        const score1 = newCards.reduce((sum, card) => sum + (card ? getCardValue(card) : 0), 0);
        setPlayer1Score(score1);
      }
      return newCards;
    });

    setPlayer2Cards((prevCards) => {
      const newCards = [...prevCards];
      newCards[currentCardIndex] = drawCard();
      if (currentCardIndex === 2) {
        const score2 = newCards.reduce((sum, card) => sum + (card ? getCardValue(card) : 0), 0);
        setPlayer2Score(score2);
      }
      return newCards;
    });

    
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

                                                // 4 determine the winner
  if (currentCardIndex === 3 && winner === '') {
    if (player1Score > player2Score) {
      setWinner('Player 1 Wins!');
    } else if (player2Score > player1Score) {
      setWinner('Player 2 Wins!');
    } else {
      setWinner("It's a Tie!");
    }
  }

 
  const resetGame = () => {                     // 6 resetting the game 
    setPlayer1Cards([null, null, null]);  
    setPlayer2Cards([null, null, null]);  
    setPlayer1Score(0);  
    setPlayer2Score(0); 
    setCurrentCardIndex(0);  
    setWinner('');  
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" component="div" sx={{ color: 'black', marginBottom: 3 }}>
        Three Cards Game
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Player 1 */}
        <Grid item xs={5}>
          <Paper elevation={3} sx={{ padding: 3, border: '1px solid #ddd' }}>
            <Grid container spacing={2} justifyContent="center">
              {player1Cards.map((card, index) => (          // number 5 explaination 
                <CardItem key={index} card={card} />
              ))}
            </Grid>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Player 1 - Score: {player1Score}
            </Typography>
          </Paper>
        </Grid>

        {/* Player 2 */}
        <Grid item xs={5}>
          <Paper elevation={3} sx={{ padding: 3, border: '1px solid #ddd' }}>
            <Grid container spacing={2} justifyContent="center">
              {player2Cards.map((card, index) => (
                <CardItem key={index} card={card} />
              ))}
            </Grid>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Player 2 - Score: {player2Score}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Display Winner */}
      {currentCardIndex === 3 && (
        <Typography variant="h5" sx={{ marginTop: 3, color: winner === "It's a Tie!" ? 'orange' : 'green' }}>
          {winner}
        </Typography>
      )}

      {/* Draw Card and Reset Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDrawCard}
          disabled={currentCardIndex >= 3}  
          sx={{ marginRight: 2, width: '40%' }}
        >
          DRAW CARD
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={resetGame}
          sx={{ width: '40%' }}
        >
          RESET GAME
        </Button>
      </Box>
    </Box>
  );
};

export default ThreeCards;
