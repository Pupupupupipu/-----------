import { clsx } from "clsx"
import { Profile } from "../profile/profile"
import { CrossIcon } from "./icons/cross-icon"
import { GameSymbol } from "./game-symbol"
import { GAME_SYMBOLS, players } from "./constants"
import { useEffect, useState } from "react"


export function GameInfo({ className, playersCount, currentMove, isWinner, onPlayerTimeOver }) {
    return (
        <div
            className={clsx(className,
                "grid grid-cols-2 gap-3 justify-between bg-white rounded-2xl shadow-md px-8 py-4"
            )}
        >
            {players.slice(0, playersCount).map((player, index) => (
                <PlayerInfo 
                    key={player.id}
                    playerInfo={player}
                    isRight={index % 2 === 1}
                    onTimeOver={() => onPlayerTimeOver(player.symbol)}
                    isTimerRunning={currentMove === player.symbol && !isWinner}
                />
            ))}

        </div>
    )
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }){

    const [seconds, setSeconds] = useState(6);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0")
    const secondsString = String(seconds % 60).padStart(2, "0")

    const isDanger = seconds < 10

    useEffect(() => {
        if (isTimerRunning){
            const interval = setInterval(() => {
                setSeconds((s) => Math.max(s - 1, 0))
            }, 1000)
        

            return () =>{
                clearInterval(interval)
                setSeconds(6)
            }
        }
    }, [isTimerRunning])

    useEffect(() => {
        if (seconds === 0){
            onTimeOver();
        }
    }, [seconds])

    const getTimerColor = () => {
        if (isTimerRunning){
            return isDanger ? "text-orange-600": "text-slate-900"
        }
        return 'text-slate-200'
    }

    return(
        <div className="flex items-center gap-3">
                <div className={clsx("relative", isRight && "order-3")}>
                    <Profile 
                    className="w-[180px]" 
                    name={playerInfo.name}
                    rating={playerInfo.rating}
                    avatar={playerInfo.avatar}
                    />
                    <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                        <GameSymbol symbol={playerInfo.symbol} />
                    </div>
                </div>
                <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
                <div 
                className={clsx(
                    "text-lg font-semibold w-[60px]", 
                    isRight && "order-1",
                    getTimerColor()
                    )}>
                    {minutesString}:{secondsString}
                </div>
            </div>
    )
}