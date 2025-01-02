import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface LeverageSelectorProps {
    minLeverage?: number;
    maxLeverage?: number;
    defaultLeverage?: number;
    onChange?: (value: number) => void;
}

const LeverageSelector = ({
    minLeverage = 1.1,
    maxLeverage = 3.5,
    defaultLeverage = 1.1,
    onChange
}: LeverageSelectorProps) => {
    const [leverage, setLeverage] = useState(defaultLeverage);

    const adjustLeverage = (increment: boolean) => {
        const step = 0.1;
        const newValue = increment
            ? Math.min(leverage + step, maxLeverage)
            : Math.max(leverage - step, minLeverage);

        setLeverage(Number(newValue.toFixed(1)));
        onChange?.(Number(newValue.toFixed(1)));
    };

    return (
        <div className="flex items-center justify-between w-full max-w-md mt-1">
            {/* Min Leverage Display */}
            <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] rounded-xl p-3">
                <span className="text-white font-medium">{minLeverage}x</span>
            </div>

            {/* Central Control */}
            <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-xl p-3 mx-4 flex-1">
                <button
                    onClick={() => adjustLeverage(false)}
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Decrease leverage"
                >
                    <Minus size={20} />
                </button>

                <span className="text-white font-medium mx-4">
                    Leverage {leverage}x
                </span>

                <button
                    onClick={() => adjustLeverage(true)}
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Increase leverage"
                >
                    <Plus size={20} />
                </button>
            </div>

            {/* Max Leverage Display */}
            <div className="flex items-center justify-center bg-[rgba(255,255,255,0.05)] rounded-xl p-3">
                <span className="text-white font-medium">{maxLeverage}x</span>
            </div>
        </div>
    );
};

export default LeverageSelector;