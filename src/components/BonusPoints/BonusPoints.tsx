import calcBonusScaleWidth from 'utils/functions/calcBonusScaleWidth';
import { AppContext } from 'store/store';
import { content } from 'utils/content';
import { FC, useContext } from 'react';

interface BonusPointsProps {
    bonusPoints: number;
}

const BonusPoints: FC<BonusPointsProps> = ({ bonusPoints }) => {
    const { state } = useContext(AppContext);

    const bonusScaleWidth = calcBonusScaleWidth(bonusPoints);

    let medal = 'bg-medalBronze';
    let level: string = content.userPage.newbie[state.language];
    if (bonusPoints > 10 && bonusPoints < 71) {
        level = `${content.userPage.heavyEater[state.language]}`;
        medal = 'bg-medalSilver';
    } else if (bonusPoints > 70) {
        level = `${content.userPage.gourmet[state.language]}`;
        medal = 'bg-medalGold';
    }

    return (
        <div className='w-9/12 sm:w-5/12 flex flex-col items-center'>
            <div className={`w-10 h-10 ${medal} bg-cover drop-shadow-md shadow-gray-900`}></div>
            <h3 className='p-1'>{`${bonusPoints} ${content.userPage.bonusPoints[state.language]}`}</h3>
            <h2 className='text-lg 2xl:text-xl text-center font-semibold dark:text-smoke-gray items-center drop-shadow-md'>
                {`${content.userPage.yourLevel[state.language]}`}: <b>{level}</b>
            </h2>
            <div className='w-full mt-0 -mb-5'>
                <div className='flex items-center gap-1 w-full h-2 my-3 bg-gradient-to-r from-zinc-300 via-corall to-black rounded drop-shadow-md'>
                    <div className={`${bonusScaleWidth} h-3.5 border-r-4 border-black`}></div>
                </div>
                <p className={`${bonusScaleWidth} flex justify-end text-sm font-bold text-black`}>
                    <span className='w-full text-end -mr-2'>{bonusPoints}</span>
                </p>
            </div>
        </div>
    );
};

export default BonusPoints;
