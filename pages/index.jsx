import { useState } from "react";
import { GameField, GameInfo, GameTitle, useGameState, GameSymbol } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells, 
    currentMove, 
    nextMove, 
    winnerSequence, 
    handleCellClick, 
    handlePlayerTimeOver,
    winnerSymbol
  } = useGameState(playersCount)
  
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount}/>
        
         {console.log(cells[winnerSymbol])}
         {winnerSymbol && (<div>Победитель: <GameSymbol symbol={cells[winnerSymbol]}/></div>)}
         
        <GameInfo 
          playersCount={playersCount} 
          currentMove={currentMove} 
          className="mt-4" 
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}/>
        <GameField 
          cells={cells} 
          currentMove={currentMove} 
          nextMove={nextMove}
          winnerSequence={winnerSequence} 
          handleCellClick={handleCellClick} 
          className="mt-6 mb-6"
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
