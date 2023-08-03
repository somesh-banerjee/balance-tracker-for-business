import { useRef } from 'react';
import { useGameContext } from '../utils/Context';
import { toast } from 'react-toastify';

export const AddPlayer: React.FC = () => {
  const newPlayer = useRef<HTMLInputElement>(null);
  const { players, transactions, updateGameState } = useGameContext();

  const handleClick = () => {
    const playerName = newPlayer.current?.value;
    if (!playerName || playerName === '') {
      toast.error('Please enter a player name');
      return;
    }

    updateGameState({
      players: [...players, { name: playerName, balance: 25000 }],
      transactions: transactions,
    });

    newPlayer.current!.value = '';
  };

  return (
    <>
      <div className="flex mt-6">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-l-md"
          placeholder="Enter player name"
          ref={newPlayer}
        />
        <button
          className="px-4 py-1 bg-blue-500 text-white rounded-r-md"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export const ClearStorage: React.FC = () => {
  const { updateGameState } = useGameContext();

  const handleClick = () => {
    updateGameState({
      players: [],
      transactions: [],
    });
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg p-8 shadow-md w-84">
          <button
            className="px-4 py-1 bg-red-500 text-white rounded-r-md"
            onClick={handleClick}
          >
            Clear Storage
          </button>
        </div>
      </div>
    </>
  );
};
