import clsx from "clsx"
import { UIButton } from "../uikit/ui-button"
import { GameSymbol } from "./game-symbol";

export function GameField({ 
    className, 
    cells, 
    currentMove, 
    nextMove, 
    handleCellClick,
    winnerSequence,
    winnerSymbol
}) {

    const actions = <>
        <UIButton size="md" variant="primary">
            Ничья
        </UIButton>
        <UIButton size="md" variant="outline">
            Сдаться
        </UIButton>
    </>

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo
                actions={actions}
                currentMove={currentMove}
                nextMove={nextMove}
            />
            <GameGrid>
                {cells.map((symbol, index) => (
                    <GameCell 
                        key={index}
                        disabled={!!winnerSymbol}
                        isWinner={winnerSequence?.includes(index)} 
                        onClick={() => {
                        handleCellClick(index)
                    }}>
                        {symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
                    </GameCell>
                ))}
            </GameGrid>
        </GameFieldLayout>

    )
}

function GameFieldLayout({ children, className }) {
    return (
        <div className={
            clsx(className,
                "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
            )}
        >{children}</div>
    )
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="mr-auto">
                <div className="flex items-center gap-1 font-semibold text-xl leading-tight ">
                    Ход: <GameSymbol symbol={currentMove} className='w-4 h-4' />
                </div>
                <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
                    Следующий: <GameSymbol symbol={nextMove} className='w-3 h-3' />
                </div>
            </div>

            {actions}
        </div>
    )
}

function GameGrid({ children }) {
    return (
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
            {children}
        </div>
    )
}

function GameCell({ children, onClick, isWinner, disabled }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                "border border-slate-200 -ml-px -mt-px flex items-center justify-center", 
                isWinner && 'bg-orange-100'
                )}
        >{children}</button>
    )
}

