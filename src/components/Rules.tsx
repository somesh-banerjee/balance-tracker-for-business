const Rules: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <div className="rounded-md shadow-md mb-4">
        <img src="/rules.jpg" alt="rules" className="rounded-md" />
      </div>
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <p className="text-xl font-bold text-center">
          Net Worth = Cash on hand + Sites at the price printed on the board +
          Erections' cost as per card + Half the price printed on the board for
          mortgaged sites
        </p>
      </div>
      <a
        href="https://monopoly.fandom.com/wiki/Monopoly_Rules#Mortgages"
        className="text-xl font-bold text-center hover:underline cursor-pointer my-12"
      >
        Monopoly Wiki Page
      </a>
    </div>
  );
};

export default Rules;
