import React from 'react'

const DexChart = () => {
  // Styles for the container
  const containerStyles = `
    relative w-full 
    before:content-[''] 
    before:block 
    before:pb-[125%] 
    lg:before:pb-[65%]
  `;

  // Styles for the iframe
  const iframeStyles = `
    absolute top-0 left-0 
    w-full h-full 
    border-0
  `;

  return (
    <main className={containerStyles}>
      <iframe
        src="https://dexscreener.com/solana/3sjNoCnkkhWPVXYGDtem8rCciHSGc9jSFZuUAzKbvRVp?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
        className={iframeStyles}
        title="DexScreener Chart"
      />
    </main>
  )
}

export default DexChart