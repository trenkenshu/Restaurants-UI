const calcBonusScaleWidth = (bonusPoints: number): string => {
    const bonus = bonusPoints >= 100 ? 100 : bonusPoints;
    if (bonus === 0) return 'w-0';
    if (bonus > 0 && bonus < 4) return 'w-[1%]';
    if (bonus > 3 && bonus < 6) return 'w-[5%]';
    if (bonus > 5 && bonus < 8) return 'w-1/12';
    if (bonus > 7 && bonus < 14) return 'w-[10%]';
    if (bonus > 13 && bonus < 17) return 'w-1/6';
    if (bonus > 16 && bonus < 23) return 'w-1/5';
    if (bonus > 22 && bonus < 26) return 'w-1/4';
    if (bonus > 25 && bonus < 34) return 'w-4/12';
    if (bonus > 33 && bonus < 41) return 'w-2/5';
    if (bonus > 40 && bonus < 43) return 'w-5/12';
    if (bonus > 42 && bonus < 51) return 'w-1/2';
    if (bonus > 50 && bonus < 61) return 'w-3/5';
    if (bonus > 60 && bonus < 68) return 'w-2/3';
    if (bonus > 67 && bonus < 77) return 'w-3/4';
    if (bonus > 76 && bonus < 81) return 'w-4/5';
    if (bonus > 80 && bonus < 84) return 'w-5/6';
    if (bonus > 83 && bonus < 95) return 'w-11/12';
    return 'w-full';
};

export default calcBonusScaleWidth;
