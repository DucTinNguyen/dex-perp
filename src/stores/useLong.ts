import { BirdeyeToken } from "@/utils/birdeyes"
import { nativeToken } from "@/utils/tokens";
import { create } from 'zustand';

interface PayToken {
    icon: string,
    name: string,
    symbol: string,
    address: string
}

interface LongState {
    payToken: PayToken,
    setPayToken: (payToken: PayToken) => void,
    longToken: BirdeyeToken | null,
    setLongToken: (longToken: BirdeyeToken) => void
}

export const useLongStore = create<LongState>(set => ({
    payToken: nativeToken[0],
    setPayToken: value => set({ payToken: value }),
    longToken: null,
    setLongToken: value => set({ longToken: value })
}))