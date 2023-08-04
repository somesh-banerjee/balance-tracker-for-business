import { AddPlayer } from './AddPlayer';
import { PlayerList } from './PlayerList';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md w-84">
        <h1 className="text-2xl font-bold text-center">Balance Tracker</h1>
        <h5
          className="text-xs text-center hover:underline cursor-pointer"
          onClick={() => {
            window.open('/rules', '_blank');
          }}
        >
          Rules
        </h5>

        <TransactionForm />
        <PlayerList />
        <TransactionList />
        <AddPlayer />
      </div>
    </div>
  );
};
export default Home;
