window.onload = () => {
    let buyerPublicKey;
    let connection;

    // Ensure Solana Web3 library is loaded
    if (typeof solanaWeb3 === 'undefined') {
        console.error('❌ Solana Web3 library not loaded! Make sure to include @solana/web3.js in your HTML.');
        return;
    }

    // Define the connect button
    const connectButton = document.getElementById('connect-button');
    if (!connectButton) {
        console.error('❌ Connect button for Phantom wallet not found!');
        return;
    }


    // Connect to Phantom wallet
    const connectToWallet = async () => {
        if (!window.solana || !window.solana.isPhantom) {
            alert('❌ Phantom wallet not installed!');
            return;
        }

        try {
            const provider = window.solana;
            await provider.connect();
            console.log('✅ Connected');
            buyerPublicKey = provider.publicKey;

            const walletStatus = document.getElementById('wallet-status');
            if (walletStatus) {
                walletStatus.textContent = `Connected to: ${buyerPublicKey.toString()}`;
                walletStatus.style.display = 'block';
                walletStatus.style.backgroundColor = 'green';
                walletStatus.style.color = 'white';
                walletStatus.style.padding = '10px 20px';
                walletStatus.style.borderRadius = '5px';
                walletStatus.style.position = 'fixed';
                walletStatus.style.top = '50%';
                walletStatus.style.left = '50%';
                walletStatus.style.transform = 'translate(-50%, -50%)';
                walletStatus.style.zIndex = '9999';

                // Hide the status after 2 seconds
                setTimeout(() => {
                    walletStatus.style.display = 'none';
                }, 2000);
            } else {
                console.error('❌ Wallet status element not found!');
            }

            connectButton.textContent = 'Connected';
            connectButton.classList.add('connected');
            connectButton.classList.remove('btn-secondary');

            // Create connection to network using an alternative endpoint
            connection = new solanaWeb3.Connection("https://indulgent-stylish-spring.solana-mainnet.quiknode.pro/5914beaf73f1d5827a99c4787a245abf7e2d2050", 'confirmed');
        } catch (error) {
            console.error('❌ Error connecting to Phantom wallet:', error);
        }
    };
let previousHeight = window.innerHeight;

function updateVh() {
    let currentHeight = window.innerHeight;

    // إذا كان الفرق كبيرًا، فالمشكلة بسبب لوحة المفاتيح
    let isKeyboardOpen = previousHeight - currentHeight > 150; // 150px هو متوسط ارتفاع شريط الأدوات

    if (!isKeyboardOpen) {
        let vh = currentHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}rem`);
    }

    previousHeight = currentHeight;
}

// تحديث `vh` عند تغيير حجم الشاشة
window.addEventListener('resize', updateVh);
updateVh();



    // Attach function to connect button
    connectButton.onclick = connectToWallet;
};
