import { useRef } from 'react';
import { useGameContext } from '../utils/Context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
