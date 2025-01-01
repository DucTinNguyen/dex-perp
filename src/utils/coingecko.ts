
export interface TrendingToken {
    id: string;
    name: string;
    symbol: string;
    price: number;
    price_change_24h: number;
    image: string;
}

export const getTrendingTokensSolana = async (): Promise<TrendingToken[]> => {
    try {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-meme-coins&order=market_cap_desc&per_page=5&page=1&sparkline=false',
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        if (response.status === 429) {
            throw new Error('RATE_LIMIT');
        }

        if (!response.ok) {
            throw new Error(`HTTP_ERROR_${response.status}`);
        }

        const data = await response.json();

        return data.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            price: coin.current_price || 0,
            price_change_24h: coin.price_change_percentage_24h || 0,
            image: coin.image,
        }));
    } catch (error) {
        console.error('Error fetching trending tokens:', error);
        throw error;
    }
}