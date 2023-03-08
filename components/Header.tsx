import { ConnectButton } from "@rainbow-me/rainbowkit";

interface HeaderProps {
  setWalletConnect: (walletConnect: boolean) => void;
  setAddress: (address: string) => void;
  hamburgerOpen: boolean;
  setHamburgerOpen: (hamburgerOpen: boolean) => void;
}

export default function Header({
  setWalletConnect,
  setAddress,
  hamburgerOpen,
  setHamburgerOpen,
}: HeaderProps) {
  return (
    <header className="p-6 bg-dark2-500 overflow-hidden h-20">
      <div className="mx-auto ">
        <div className="text-left flex">
          <button
            className="mr-4 md:mr-0 rounded-full bg-button justify-left h-10 w-10 focus:outline-none focus:ring-0 focus:ring-inset"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            {!hamburgerOpen ? (
              <svg
                baseProfile="tiny"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1280 1024"
                className="h-10 w-10"
              >
                <path
                  fill="#D4D4D4"
                  d="M430.14,371.47c10.46,15.56,20.14,29.86,29.72,44.22c13.61,20.42,8.75,45.07-11.25,57.44 c-16.93,10.47-40.36,6.41-53.5-9.83c-22.4-27.67-44.49-55.59-66.71-83.4c-8.62-10.79-17.35-21.5-25.84-32.38 c-8.4-10.76-8.35-19.63,0.09-30.24c20.01-25.12,40.1-50.18,60.16-75.26c9.97-12.47,20-24.9,29.91-37.43 c13.72-17.36,34.57-23.12,52.67-14.43c20.81,9.99,28.71,36.2,16.33,56.07c-9.23,14.81-19.29,29.1-28.97,43.63 c-0.62,0.94-1.14,1.94-2.17,3.71c2.68,0.14,4.73,0.34,6.78,0.34c172.59,0.01,345.17,0.05,517.76-0.07 c12.3-0.01,22.82,3.4,31.24,12.49c10.02,10.82,12.83,23.67,8.64,37.5c-4.33,14.3-14.22,23.4-29.12,26.29 c-4.37,0.85-8.89,1.28-13.34,1.28c-42.27,0.02-84.54-0.15-126.81-0.16c-36.11,0-72.22,0.18-108.33,0.21 c-49.09,0.04-98.18,0.01-147.26,0.01c-43.6,0-87.19,0-130.79,0C436.72,371.47,434.1,371.47,430.14,371.47z"
                ></path>
                <path
                  fill="#D4D4D4"
                  d="M646.51,780.06c103.01,0,206.01,0.1,309.02-0.08c20.44-0.04,35.88,13.1,39.52,30.57 c4.58,22.04-9.75,41.86-29.28,45.58c-5.67,1.08-11.54,1.49-17.32,1.51c-40.43,0.12-80.86,0.07-121.3,0.07c-61.07,0-122.13,0-183.2,0 c-48.59,0-97.17,0-145.76,0c-49.09,0-98.17,0.15-147.25-0.13c-9.54-0.05-19.36-0.65-28.53-3.02c-13.31-3.45-26.63-18.69-25.04-39.9 c1.13-14.98,12.86-29.01,28.86-33.1c3.95-1.01,8.16-1.43,12.25-1.43C441.17,780.04,543.84,780.06,646.51,780.06z"
                ></path>
                <path
                  fill="#D4D4D4"
                  d="M646.49,627.02c-103.34,0-206.68-0.18-310.02,0.16c-19.92,0.07-33.49-12.6-38.32-25.58 c-8.23-22.1,7.02-48.04,30.38-50.98c3.78-0.48,7.63-0.52,11.45-0.52c182.55,0,365.1,0.03,547.65,0.05c23.13,0,46.26,0.04,69.39-0.01 c17.14-0.04,29.75,7.42,36.88,23.06c11.96,26.22-9.21,54.28-35.41,53.96c-41.93-0.52-83.87-0.1-125.8-0.09 c-62.07,0.01-124.14,0-186.21,0C646.49,627.05,646.49,627.03,646.49,627.02z"
                ></path>
              </svg>
            ) : (
              <svg
                baseProfile="tiny"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1280 1024"
                className="h-10 w-10"
              >
                <g id="Zw0Mgr.tif">
                  <g>
                    <path
                      fill="#D4D4D4"
                      d="M863,293.6c-10.46-15.56-20.14-29.86-29.72-44.22c-13.61-20.42-8.75-45.07,11.25-57.44 c16.93-10.47,40.36-6.41,53.5,9.83c22.4,27.67,44.49,55.59,66.71,83.4c8.62,10.79,17.35,21.5,25.84,32.38 c8.4,10.76,8.35,19.63-0.09,30.24c-20.01,25.12-40.1,50.18-60.16,75.26c-9.97,12.47-20,24.9-29.91,37.43 c-13.72,17.36-34.57,23.12-52.67,14.43c-20.81-9.99-28.71-36.2-16.33-56.07c9.23-14.81,19.29-29.1,28.97-43.63 c0.62-0.94,1.14-1.94,2.17-3.71c-2.68-0.14-4.73-0.34-6.78-0.34c-172.59-0.01-345.17-0.05-517.76,0.07 c-12.3,0.01-22.82-3.4-31.24-12.49c-10.02-10.82-12.83-23.67-8.64-37.5c4.33-14.3,14.22-23.4,29.12-26.29 c4.37-0.85,8.89-1.28,13.34-1.28c42.27-0.02,84.54,0.15,126.81,0.16c36.11,0,72.22-0.18,108.33-0.21 c49.09-0.04,98.18-0.01,147.26-0.01c43.6,0,87.19,0,130.79,0C856.42,293.6,859.04,293.6,863,293.6z"
                    ></path>
                    <path
                      fill="#D4D4D4"
                      d="M646.51,780.06c103.01,0,206.01,0.1,309.02-0.08c20.44-0.04,35.88,13.1,39.52,30.57 c4.58,22.04-9.75,41.86-29.28,45.58c-5.67,1.08-11.54,1.49-17.32,1.51c-40.43,0.12-80.86,0.07-121.3,0.07 c-61.07,0-122.13,0-183.2,0c-48.59,0-97.17,0-145.76,0c-49.09,0-98.17,0.15-147.25-0.13c-9.54-0.05-19.36-0.65-28.53-3.02 c-13.31-3.45-26.63-18.69-25.04-39.9c1.13-14.98,12.86-29.01,28.86-33.1c3.95-1.01,8.16-1.43,12.25-1.43 C441.17,780.04,543.84,780.06,646.51,780.06z"
                    ></path>
                    <path
                      fill="#D4D4D4"
                      d="M646.49,627.02c-103.34,0-206.68-0.18-310.02,0.16c-19.92,0.07-33.49-12.6-38.32-25.58 c-8.23-22.1,7.02-48.04,30.38-50.98c3.78-0.48,7.63-0.52,11.45-0.52c182.55,0,365.1,0.03,547.65,0.05 c23.13,0,46.26,0.04,69.39-0.01c17.14-0.04,29.75,7.42,36.88,23.06c11.96,26.22-9.21,54.28-35.41,53.96 c-41.93-0.52-83.87-0.1-125.8-0.09c-62.07,0.01-124.14,0-186.21,0C646.49,627.05,646.49,627.03,646.49,627.02z"
                    ></path>
                  </g>
                </g>
              </svg>
            )}
          </button>
          <div className="flex-grow flex"></div>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      setWalletConnect(false);
                      return (
                        <button
                          className="inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-dark2-500 hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] flex-none h-11 -mt-2"
                          onClick={openConnectModal}
                          type="button"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }
                    setAddress(account.address);
                    setWalletConnect(true);

                    return (
                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          onClick={openChainModal}
                          style={{ display: "flex", alignItems: "center" }}
                          type="button"
                          className="inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-dark2-500 hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] flex-none h-11 -mt-2"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button
                          className="inline-block bg-[#F4CA64] py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-dark2-500 hover:text-[#F4CA64] hover:border hover:border-[#F4CA64] flex-none h-11 -mt-2"
                          onClick={openAccountModal}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div className="hidden sm:text-md md:text-md lg:text-lg text-white flex">
          <span className="font-semibold">GTR/BUSD:</span>&nbsp;
          <span>$0.00000000</span>
        </div>
      </div>
    </header>
  );
}
