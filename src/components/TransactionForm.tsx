import { useRef } from 'react';
import { useGameContext } from '../utils/Context';
import { toast } from 'react-toastify';

export const TransactionForm: React.FC = () => {
  const { players, transactions, updateGameState } = useGameContext();
  const fromRef = useRef<HTMLSelectElement>(null);
  const toRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const from = fromRef.current?.value;
    const to = toRef.current?.value;
    const amount = amountRef.current?.value;

    if (!from || !to || !amount) {
      toast.error('Please enter all values');
      return;
    }

    if (from === to) {
      toast.error('Cannot transfer to same player');
      return;
    }

    if (from !== 'bank') {
      const fromPlayer = players.find((player) => player.name === from);

      if (fromPlayer!.balance < Number(amount)) {
        toast.error('Not enough balance');
        return;
      }
    }

    const newTransaction = {
      id: (transactions.length + 1).toString(),
      from: from,
      to: to,
      amount: Number(amount),
    };

    const newPlayers = players.map((player) => {
      if (player.name === from) {
        return {
          ...player,
          balance: player.balance - Number(amount),
        };
      }
      if (player.name === to) {
        return {
          ...player,
          balance: player.balance + Number(amount),
        };
      }
      return player;
    });

    updateGameState({
      players: newPlayers,
      transactions: [...transactions, newTransaction],
    });

    toast.success('Transaction successful');

    fromRef.current!.value = 'bank';
    toRef.current!.value = 'bank';
    amountRef.current!.value = '';
  };

  return (
    <div className="container mt-4">
      <div className="my-2 flex">
        <div className="w-[45%] mx-1">
          <label
            htmlFor="fromSelect"
            className="block text-gray-700 font-medium"
          >
            From:
          </label>
          <select
            id="fromSelect"
            className="border border-gray-400 p-1 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
            ref={fromRef}
          >
            <option value="bank">Bank</option>
            {players.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[45%] mx-1">
          <label htmlFor="toSelect" className="block text-gray-700 font-medium">
            To:
          </label>
          <select
            id="toSelect"
            className="border border-gray-400 p-1 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500"
            ref={toRef}
            defaultValue={'Bank'}
          >
            <option value="bank">Bank</option>
            {players.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <input
          type="number"
          className="px-4 py-2 border border-gray-300 rounded-l-md"
          placeholder="Enter amount"
          ref={amountRef}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
          onClick={handleSubmit}
        >
          Transact
        </button>
      </div>
    </div>
  );
};
