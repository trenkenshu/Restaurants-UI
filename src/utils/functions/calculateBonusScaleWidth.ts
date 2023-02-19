const calculateBonusScaleWidth = (bonus: number): string => {
    if (bonus === 1) return 'w-1/12';
    if (bonus > 1 && bonus < 4) return 'w-1/6';
    if (bonus > 3 && bonus < 6) return 'w-1/5';
    if (bonus > 5 && bonus < 11) return 'w-1/4';
    if (bonus > 10 && bonus < 19) return 'w-4/12';
    if (bonus > 20 && bonus < 36) return 'w-2/5';
    if (bonus > 35 && bonus < 46) return 'w-5/12';
    if (bonus > 45 && bonus < 56) return 'w-1/2';
    if (bonus > 55 && bonus < 66) return 'w-7/12';
    if (bonus > 65 && bonus < 76) return 'w-3/5';
    if (bonus > 75 && bonus < 86) return 'w-2/3';
    if (bonus > 85 && bonus < 96) return 'w-3/4';
    if (bonus > 75 && bonus < 86) return 'w-4/5';
    if (bonus > 85 && bonus < 96) return 'w-5/6';
    if (bonus > 95) return 'w-11/12';
    return 'w-0';
};

export default calculateBonusScaleWidth;
