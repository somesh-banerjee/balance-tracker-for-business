import { useGameContext } from '../utils/Context';
import { AddPlayer } from './AddPlayer';
import { PlayerList } from './PlayerList';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { updateGameState } = useGameContext();

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md w-84">
        <h1 className="text-2xl font-bold text-center">Balance Tracker</h1>
        <div className="flex justify-center">
          <h5
            className="text-xs text-center hover:underline cursor-pointer"
            onClick={() => {
              navigate('/rules');
            }}
          >
            Rules
          </h5>
          <h5
            className="text-xs text-center hover:underline cursor-pointer mx-4"
            onClick={() => {
              confirm('Are you sure you want to clear the game state?') &&
                updateGameState({
                  players: [],
                  transactions: [],
                });
            }}
          >
            Clear
          </h5>
        </div>

        <TransactionForm />
        <PlayerList />
        <TransactionList />
        <AddPlayer />
      </div>
    </div>
  );
};
export default Home;
