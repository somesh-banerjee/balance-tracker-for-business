import { useGameContext } from '../utils/Context';

export const PlayerList: React.FC = () => {
  const { players } = useGameContext();

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-1">Players</h2>
      <ul className="space-y-1">
        {players.map((player) => (
          <li key={player.name} className="flex items-center">
            <span className="flex-1">{player.name}</span>
            <span className="flex-1 text-right">
              {player.balance.toLocaleString('en-US', {
                style: 'currency',
                currency: 'INR',
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
