import { shortAddress } from "@/utils/address";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const BtnConnectWallet = ({ className }: { className?: string }) => {


    const {publicKey, disconnect} = useWallet()
    const { setVisible } = useWalletModal()
    const handleOnclick = () => {
        if (publicKey) {
            disconnect();
        } else {
            setVisible(true)
        }
    }

    return (
      <>    
            <button
                onClick={handleOnclick}
                className={`${className} `}
            >
                {publicKey? shortAddress(publicKey.toString()): 'Connect Wallet'}
            </button>
      </>
    
  );
};

export default BtnConnectWallet;
