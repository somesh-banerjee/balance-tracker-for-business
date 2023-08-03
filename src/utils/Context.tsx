import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, storeData } from './storage';

interface Player {
  name: string;
  balance: number;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
}

export interface GameState {
  players: Player[];
  transactions: Transaction[];
}

export const initialState: GameState = (await getData()) || {
  players: [],
  transactions: [],
};

const GameContext = createContext<
  GameState & { updateGameState: (newState: GameState) => void }
>({
  ...initialState,
  updateGameState: () => {},
});

export const useGameContext = () => useContext(GameContext);

export const GameProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const updateGameState = (newState: GameState) => {
    setGameState(newState);
  };

  useEffect(() => {
    storeData(gameState);
  }, [gameState]);

  const value: GameState & {
    updateGameState: (newState: GameState) => void;
  } = {
    ...gameState,
    updateGameState,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
