export interface BirdeyeToken {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    liquidity: number;
    v24hChangePercent: number;
    v24hUSD: number;
    mc: number;
}

interface BirdeyeResponse {
    success: boolean;
    data: {
        updateUnixTime: number;
        updateTime: string;
        tokens: BirdeyeToken[];
        total: number;
    };
}

export const getListTokens = async () =>{ 
    try {
        const headers = {
            'X-API-KEY': '7c34340b51e24528ab2dce5d6b21b827',
            accept: 'application/json'
        }
        const response = await fetch('https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hChangePercent&sort_type=desc&offset=0&limit=50&min_liquidity=100', {
            headers
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json() as BirdeyeResponse;
        if (!data.success) {
            throw new Error('Birdeye API request failed');
        }
        return data.data.tokens;

    } catch (e) { 
        console.log('Error fetching list tokens solana', e);
        throw e;
    }
}