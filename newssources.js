const newssources = {
  // general
  general: [
    {
      name: "CoinDesk",
      feed: "https://www.coindesk.com/arc/outboundfeeds/rss/?outputType=xml",
      site: "https://coindesk.com",
      about: "CoinDesk is the leading digital media, events and information services company for the crypto asset and blockchain technology community. Its mandate is to inform, educate and connect the global community as the authoritative daily news provider dedicated to chronicling the space.",
      pic: "@/assets/news/coindesk.svg",
    },
    {
      name: "Cointelegraph",
      feed: "https://cointelegraph.com/rss",
      site: "https://cointelegraph.com",
      about: "Cointelegraph is the leading independent digital media resource covering a wide range of news on blockchain technology, crypto assets, and emerging fintech trends. Each day our team delivers the most accurate and up-to-date news from both the decentralized and centralized worlds.",
      pic: "@/assets/news/cointelegraph.svg",
    },
    {
      name: "Blockonomi",
      feed: "https://blockonomi.com/feed",
      site: "https://blockonomi.com",
      about: "Blockonomi is a fast-growing publication launched in 2017 which aims to cover all aspects of Cryptocurrencies, fintech and the blockchain economy. We focus on bringing you the latest unbiased news, information articles, reviews and tutorials to help you gain an understanding.",
      pic: "@/assets/news/blockonomi.svg",
    },
    {
      name: "CryptoSlate",
      feed: "https://cryptoslate.com/feed",
      site: "https://cryptoslate.com",
      about: "CryptoSlate was founded in mid-2017 by Seattle-based technology entrepreneurs, Nate Whitehill and Matthew Blancarte. CryptoSlate's mission is to foster an informed crypto-community through accurate, objective, and timely blockchain and cryptocurrency news coverage.",
      pic: "@/assets/news/cryptoslate.svg",
    },
    {
      name: "NewsBTC",
      feed: "https://www.newsbtc.com/feed",
      site: "https://www.newsbtc.com",
      about: "NewsBTC is a premier news and resource platform, working since October 2013 to bring quality news content, reviews, technical analysis and other unique insights to the ever-growing cryptocurrency community.",
      pic: "@/assets/news/newsbtc.svg",
    },
    {
      name: "Bitcoin Magazine",
      feed: "https://bitcoinmagazine.com/feed",
      site: "https://bitcoinmagazine.com",
      about: "Bitcoin Magazine is the oldest and most established source of news, information and expert commentary on Bitcoin, its underlying blockchain technology and the industry that has grown up around it. Founded by Mihai Alisie and Vitalik Buterin, the creator of Ethereum, in May 2012",
      pic: "@/assets/news/bitcoinmagazine.svg",
    },
    // {
    //   name: "/r/CryptoCurrency",
    //   feed: "https://www.reddit.com/r/CryptoCurrency/.rss",
    //   site: "https://www.reddit.com/r/CryptoCurrency",
    //   about: "Subreddit for the discussion of CryptoCurrency 'The official source for CryptoCurrency News, Discussion & Analysis.'",
    //   pic: "@/assets/news/reddit.svg",
    // },
    // {
    //   name: "/r/gpumining",
    //   feed: "https://www.reddit.com/r/gpumining/.rss",
    //   site: "https://www.reddit.com/r/gpumining",
    //   about: "Subreddit for the discussion of GPU mining 'The community of GPU mining enthusiasts, both professionals and hobbyists.'",
    //   pic: "@/assets/news/reddit.svg",
    // },
    // {
    //   name: "/r/bitcoin",
    //   feed: "https://www.reddit.com/r/bitcoin/.rss",
    //   site: "https://www.reddit.com/r/bitcoin",
    //   about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
    //   pic: "@/assets/news/reddit.svg",
    // },
    // {
    //   name: "/r/btc",
    //   feed: "https://www.reddit.com/r/btc/.rss",
    //   site: "https://www.reddit.com/r/btc",
    //   about: "Subreddit for the discussion of Bitcoin '/r/btc was created to foster and support free and open Bitcoin discussion, Bitcoin news, and exclusive AMA (Ask Me Anything) interviews from top Bitcoin industry leaders!'",
    //   pic: "@/assets/news/reddit.svg",
    // },
    // {
    //   name: "/r/BitCoinMining",
    //   feed: "https://www.reddit.com/r/BitCoinMining/.rss",
    //   site: "https://www.reddit.com/r/BitCoinMining",
    //   about: "Subreddit for the discussion of BitCoinMining 'The official bitcoin mining forum / subreddit / chat room / place to be!'",
    //   pic: "@/assets/news/reddit.svg",
    // },
    // {
    //   name: "Medium Topic Cryptocurrency",
    //   feed: "https://medium.com/feed/topic/cryptocurrency",
    //   site: "https://medium.com/topic/cryptocurrency",
    //   about: "Cryptocurrency on Medium: An ode to the anti-banks.",
    //   pic: "@/assets/news/medium.svg",
    // },
  ],
  // asset specific
  assets: {
    zelcash: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    testnet: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    bitcoin: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "@/assets/logos/BTC.svg",
      },
    ],
    ethereum: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/ETH.svg",
      },
    ],
    litecoin: [
      {
        name: "Litecoin Foundation Blog",
        feed: "https://blog.litecoin.org/rss",
        site: "https://blog.litecoin.org",
        about: "Blog related to Litecoin cryptocurrency",
        pic: "@/assets/logos/LTC.svg",
      },
    ],
    zcash: [
    ],
    bitcoinz: [
    ],
    ravencoin: [
    ],
    bitcore: [
    ],
    binance: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BNB.svg",
      },
    ],
    bnbbinance: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BNB.svg",
      },
    ],
    sonm: [
      {
        name: "Sonm Blog",
        feed: "https://medium.com/feed/@sonm",
        site: "https://medium.com/@sonm",
        about: "Sonm, Global Fog Computing Platform",
        pic: "@/assets/logos/SONM.svg",
      },
    ],
    omisego: [
      {
        name: "OmiseGO Blog",
        feed: "https://medium.com/feed/@omise_go",
        site: "https://medium.com/@omise_go",
        about: "OmiseGO is an impact driven and technology first company that builds on blockchain to enable access to financial services that are fast, fair and secure.      ",
        pic: "@/assets/logos/OMG.svg",
      },
    ],
    zilliqa: [
      {
        name: "Zilliqa Blog",
        feed: "https://blog.zilliqa.com/feed",
        site: "https://blog.zilliqa.com",
        about: "Next generation, high-throughput blockchain platform",
        pic: "@/assets/logos/ZIL.svg",
      },
    ],
    zrx: [
      {
        name: "0x Blog",
        feed: "https://blog.0xproject.com/feed",
        site: "https://blog.0xproject.com",
        about: "0x is an open protocol that allows token to token trading on decentralized exchanges and relayers. Initially it has been built for the trading of ERC20 tokens, but has been built in such a way that it could easily be integrated into other chains in the future.",
        pic: "@/assets/logos/ZRX.svg",
      },
    ],
    golem: [
      {
        name: "Golem Blog",
        feed: "https://blog.golemproject.net/rss",
        site: "https://blog.golemproject.net",
        about: "Golem (GNT) is a peer-to-peer decentralized marketplace for computing power.",
        pic: "@/assets/logos/GNT.svg",
      },
    ],
    kucoin: [
    ],
    bat: [
      {
        name: "Basic Attention token Blog",
        feed: "https://medium.com/feed/@AttentionToken",
        site: "https://medium.com/@AttentionToken",
        about: "The token aims to correctly price user attention within the platform. Advertisers pay BAT to website publishers for the attention of users. ",
        pic: "@/assets/logos/BAT.svg",
      },
    ],
    maker: [
      {
        name: "MakerDAO Blog",
        feed: "https://blog.makerdao.com/feed",
        site: "https://blog.makerdao.com",
        about: "Maker is comprised of a stablecoin, collateral loans, and decentralized governance.",
        pic: "@/assets/logos/MKR.svg",
      },
    ],
    kyber: [
      {
        name: "Kyber Blog",
        feed: "https://blog.kyber.network/feed",
        site: "https://blog.kyber.network",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "@/assets/logos/KNCL.svg",
      },
    ],
    enigma: [
      {
        name: "Enigma Blog",
        feed: "need feed",
        site: "https://blog.enigma.co/@EnigmaMPC",
        about: "Enigma is building a privacy layer for the decentralized web. Our protocol enables scalable, end-to-end decentralized applications",
        pic: "@/assets/logos/ENG.svg",
      },
    ],
    tenx: [
      {
        name: "TenX Blog",
        feed: "https://blog.tenx.tech/feed",
        site: "https://blog.tenx.tech",
        about: "Be in full control. Hold, send and receive popular cryptocurrencies such as Bitcoin, Ethereum, and Litecoin— right at your fingertips.",
        pic: "@/assets/logos/PAY.svg",
      },
    ],
    substratum: [
      {
        name: "Substratum Blog",
        feed: "https://medium.com/feed/@SubstratumNet",
        site: "https://medium.com/@SubstratumNet",
        about: "Substratum is an open-source network that allows anyone to allocate spare computing resources to make the internet a free and fair place for the entire world.",
        pic: "@/assets/logos/SUB.svg",
      },
    ],
    civic: [
      {
        name: "Civic Blog",
        feed: "https://www.civic.com/blog/feed",
        site: "https://www.civic.com/blog",
        about: "Civic is giving businesses & individuals the tools to control and protect identities.",
        pic: "@/assets/logos/CVC.svg",
      },
    ],
    stox: [
      {
        name: "Stox Blog",
        feed: "https://blog.stox.com/feed",
        site: "https://blog.stox.com",
        about: "Predict on the hottest markets, create your own predictions, and make profit on one platform",
        pic: "@/assets/logos/STOX.svg",
      },
    ],
    bitcoingold: [
      {
        name: "Bitcoingold Blog",
        feed: "https://medium.com/feed/@btcgpu",
        site: "https://medium.com/@btcgpu",
        about: "BTG is a cryptocurrency with Bitcoin fundamentals, mined on common GPUs instead of specialty ASICs.",
        pic: "@/assets/logos/BTG.svg",
      },
    ],
    snowgem: [
      {
        name: "Snowgem Blog",
        feed: "https://snowgem.org/blog?format=feed&type=rss",
        site: "https://snowgem.org/blog",
        about: "SnowGem is a cryptocurrency that is forked from Zcash with the addition of masternodes.",
        pic: "@/assets/logos/XSG.svg",
      },
    ],
    gemlink: [
    ],
    btcp: [
      {
        name: "BTCP Blog",
        feed: "https://medium.com/feed/@bitcoinprivate",
        site: "https://medium.com/@bitcoinprivate",
        about: "Fork of Zclassic and Bitcoin",
        pic: "@/assets/logos/BTCP.svg",
      },
    ],
    anon: [
      {
        name: "Anon Blog",
        feed: "https://medium.com/feed/anonymous-bitcoin",
        site: "https://medium.com/anonymous-bitcoin",
        about: "ANON is an advancement of the technology of both the Bitcoin and ZClassic blockchain through a co-fork of both cryptocurrencies.",
        pic: "@/assets/logos/ANON.svg",
      },
    ],
    zen: [
      {
        name: "Horizen Blog",
        feed: "https://blog.zenprotocol.com/feed",
        site: "https://blog.zenprotocol.com",
        about: "Create financial instruments, applications, and contractual obligations - secured by a trustless and decentralized network.",
        pic: "@/assets/logos/ZEN.svg",
      },
    ],
    safecoin: [
    ],
    komodo: [
      {
        name: "Komodo Blog",
        feed: "https://medium.com/feed/@komodoplatform",
        site: "https://medium.com/@komodoplatform",
        about: "Komodo is an end-to-end blockchain infrastructure solutions provider. Recognized as one of the world's most innovative projects",
        pic: "@/assets/logos/KMD.svg",
      },
    ],
    zcoin: [
      {
        name: "Zcoin Medium",
        feed: "https://medium.com/feed/@zcoin",
        site: "https://medium.com/@zcoin",
        about: "Firo (FIRO) formerly Zcoin (XZC) is a cryptocurrency focused on privacy and decentralization. Firo recent accomplishment is a privacy protocol Lelantus. It is also the first coin to implement the Zerocoin protocol that enables financial privacy through the power of zero knowledge proofs with a focus on making privacy easy to use. It is also set to be the first to release MTP an ASIC resistant, anti-botnet proof of work algorithm that remains lightweight to verify to ensure fair distribution of coins and decentralized security.\r\n\r\nZcoin is an open source decentralized cryptocurrency that focuses on achieving privacy and anonymity for its users while transacting. To achieve this privacy and anonymity, Zcoin uses zero-knowledge proofs via Zerocoin protocol which is one of the most cited cryptography papers at this point in time. In other words, when you transact using  <a href=\"https://www.coingecko.com/en/coins/bitcoin\">Bitcoin</a> or <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> or something similar, your transaction history is always linked to your coins by default which makes you vulnerable. That, because all it takes is one link to your personal information or IP to find out the origin of the coins.However, if you transact using Zcoin’s Zerocoin feature, none of your transaction histories is linked to the actual coins and only the receiver and sender know that you have actually exchanged funds.\r\n\r\nZerocoin is a cryptocurrency proposed by Johns Hopkins University professor Matthew D. Green and graduate students Ian Miers and Christina Garman as an extension to the Bitcoin protocol that would add true cryptographic anonymity to Bitcoin transactions. Zerocoin was first implemented into a fully functional cryptocurrency released to the public by Poramin Insom, as Zcoin who is also the lead developer, in September 2016. At the initial stage, Zcoin uses the Lyra2z algorithm for proof of work, then they will transition to a Merkle Tree proof of work algorithm, known as MTP. MTP is a unique memory hard algorithm that aims to solve several problems. Memory hard algorithms help prevent the development of ASICs which lead to centralized mining farms. \r\n\r\nMemory hard algorithms also prevent the use of botnets infecting computers for mining purposes. If a botnet was using up multiple gigs of memory, you’d be likely to notice something is wrong. “The basic concept is that it should establish the same price/cost for a single computation unit on all platforms meaning that there is no single device that should gain a significant advantage over another for the same price hence promoting egalitarian computing.",
        pic: "@/assets/logos/FIRO.svg",
      },
      {
        name: "Zcoin Medium 2",
        feed: "https://medium.com/feed/@firo-financial-privacy",
        site: "https://medium.com/@firo-financial-privacy",
        about: "Firo (FIRO) formerly Zcoin (XZC) is a cryptocurrency focused on privacy and decentralization. Firo recent accomplishment is a privacy protocol Lelantus. It is also the first coin to implement the Zerocoin protocol that enables financial privacy through the power of zero knowledge proofs with a focus on making privacy easy to use. It is also set to be the first to release MTP an ASIC resistant, anti-botnet proof of work algorithm that remains lightweight to verify to ensure fair distribution of coins and decentralized security.\r\n\r\nZcoin is an open source decentralized cryptocurrency that focuses on achieving privacy and anonymity for its users while transacting. To achieve this privacy and anonymity, Zcoin uses zero-knowledge proofs via Zerocoin protocol which is one of the most cited cryptography papers at this point in time. In other words, when you transact using  <a href=\"https://www.coingecko.com/en/coins/bitcoin\">Bitcoin</a> or <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> or something similar, your transaction history is always linked to your coins by default which makes you vulnerable. That, because all it takes is one link to your personal information or IP to find out the origin of the coins.However, if you transact using Zcoin’s Zerocoin feature, none of your transaction histories is linked to the actual coins and only the receiver and sender know that you have actually exchanged funds.\r\n\r\nZerocoin is a cryptocurrency proposed by Johns Hopkins University professor Matthew D. Green and graduate students Ian Miers and Christina Garman as an extension to the Bitcoin protocol that would add true cryptographic anonymity to Bitcoin transactions. Zerocoin was first implemented into a fully functional cryptocurrency released to the public by Poramin Insom, as Zcoin who is also the lead developer, in September 2016. At the initial stage, Zcoin uses the Lyra2z algorithm for proof of work, then they will transition to a Merkle Tree proof of work algorithm, known as MTP. MTP is a unique memory hard algorithm that aims to solve several problems. Memory hard algorithms help prevent the development of ASICs which lead to centralized mining farms. \r\n\r\nMemory hard algorithms also prevent the use of botnets infecting computers for mining purposes. If a botnet was using up multiple gigs of memory, you’d be likely to notice something is wrong. “The basic concept is that it should establish the same price/cost for a single computation unit on all platforms meaning that there is no single device that should gain a significant advantage over another for the same price hence promoting egalitarian computing.",
        pic: "@/assets/logos/FIRO.svg",
      },
    ],
    usdt: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    usdterc: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    zero: [
      {
        name: "Zero Blog",
        feed: "https://medium.com/feed/@zerocurrency",
        site: "https://medium.com/@zerocurrency",
        about: "Zerocoin is a project to fix a major weakness in Bitcoin: the lack of privacy guarantees we take for granted in using credit cards and cash. Our goal is to build a cryptocurrency where your neighbors, friends and enemies can’t see what you bought or for how much.",
        pic: "@/assets/logos/ZER.svg",
      },
    ],
    bitcoincash: [
      {
        name: "BitcoinCash Blog",
        feed: "https://news.bitcoin.com/feed",
        site: "https://news.bitcoin.com",
        about: "Bitcoin Cash is a fork of Bitcoin. It has bigger blocks.",
        pic: "@/assets/logos/BCH.svg",
      },
    ],
    arcblock: [
      {
        name: "ArcBlock Blog",
        feed: "https://medium.com/feed/arcblock",
        site: "https://medium.com/arcblock",
        about: "The World’s First Blockchain Ecosystem for Building and Deploying Decentralized Applications",
        pic: "@/assets/logos/ARC.svg",
      },
    ],
    adex: [
      {
        name: "Adex Blog",
        feed: "https://medium.com/feed/the-adex-blog",
        site: "https://medium.com/the-adex-blog",
        about: "AdEx is an open-source, blockchain based, decentralised digital ad exchange platform which uses Ethereum smart contracts",
        pic: "@/assets/logos/ADX.svg",
      },
    ],
    aeternity: [
      {
        name: "Aeternity Blog",
        feed: "https://blog.aeternity.com/feed",
        site: "https://blog.aeternity.com",
        about: "æternity is a scalable blockchain platform that enables high-speed transacting, purely-functional smart contracts, and decentralized oracles.",
        pic: "@/assets/logos/AE.svg",
      },
    ],
    airswap: [
      {
        name: "Airswap Blog",
        feed: "https://medium.com/feed/@airswap",
        site: "https://medium.com/@airswap",
        about: "AirSwap is a peer-to-peer trading network built on Ethereum. Our mission is to empower people through global, frictionless trade.",
        pic: "@/assets/logos/AST.svg",
      },
    ],
    bigbom: [
      {
        name: "Bigbomb Blog",
        feed: "https://medium.com/feed/bigbomeco",
        site: "https://medium.com/bigbomeco",
        about: "Bigbom's application ecosystem provides wide sets of features like optimization, contract sign, ads tracking, ads payment among other features.",
        pic: "@/assets/logos/BBO.svg",
      },
    ],
    appcoins: [
      {
        name: "AppCoins Blog",
        feed: "https://medium.com/feed/@appcoins",
        site: "https://medium.com/@appcoins",
        about: "The first ICO serving 200 million users to create a trusted economy without intermediaries. Supported by Aptoide App Store.",
        pic: "@/assets/logos/APPC.svg",
      },
    ],
    bluzelle: [
      {
        name: "Bluzelle Blog",
        feed: "https://medium.com/feed/@Bluzelle",
        site: "https://medium.com/@Bluzelle",
        about: "Bluzelle is a smart, in-memory data store technology, used as a cache or database. Highly available, durable and globally distributed.",
        pic: "@/assets/logos/BLZ.svg",
      },
    ],
    bancor: [
      {
        name: "Bancor Blog",
        feed: "https://medium.com/feed/@bancor",
        site: "https://medium.com/@bancor",
        about: "Bancor Protocol is a standard for the creation of Smart Tokens™, cryptocurrencies with built-in convertibility directly through their smart contracts.",
        pic: "@/assets/logos/BNT.svg",
      },
    ],
    coinfi: [
      {
        name: "Coinfi Blog",
        feed: "https://blog.coinfi.com/feed",
        site: "https://blog.coinfi.com",
        about: "Crypto market intelligence platform",
        pic: "@/assets/logos/COFI.svg",
      },
    ],
    dai: [
      {
        name: "Sai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "Sai is an asset-backed, hard currency for the 21st century. The first decentralized stablecoin on the Ethereum blockchain.",
        pic: "@/assets/logos/SAI.svg",
      },
    ],
    digixgoldtoken: [
      {
        name: "Digix Gold Token Blog",
        feed: "https://medium.com/feed/digix",
        site: "https://medium.com/digix",
        about: "Using blockchain technology, DigixDAO represent physical gold with DGX tokens, where 1 DGX represents 1 gram of gold on Ethereum.",
        pic: "@/assets/logos/DGX.svg",
      },
    ],
    electrify: [
      {
        name: "Electrify Blog",
        feed: "https://medium.com/feed/electrifyasia",
        site: "https://medium.com/electrifyasia",
        about: "ELECTRIFY is the first retail electricity marketplace in Southeast-Asia addressing the need for transparency and security in the consumption of energy.",
        pic: "@/assets/logos/ELEC.svg",
      },
    ],
    aelf: [
      {
        name: "Aelf Blog",
        feed: "https://medium.com/feed/@aelfblockchain",
        site: "https://medium.com/@aelfblockchain",
        about: "Building a Decentralized Cloud Computing Blockchain Network",
        pic: "@/assets/logos/ELF.svg",
      },
    ],
    enjincoin: [
      {
        name: "Enjincoin Blog",
        feed: "https://blog.enjincoin.io/feed",
        site: "https://blog.enjincoin.io",
        about: "Enjin Coin is a smart cryptocurrency fueling a modular blockchain development platform for creating, integrating and scaling tokenized gaming assets",
        pic: "@/assets/logos/EJN.svg",
      },
    ],
    storj: [
      {
        name: "Storj Blog",
        feed: "https://medium.com/feed/@storjproject",
        site: "https://medium.com/@storjproject",
        about: "Storj is an open source decentralized cloud storage platform.",
        pic: "@/assets/logos/STORJ.svg",
      },
    ],
    iost: [
      {
        name: "IOST Blog",
        feed: "https://medium.com/feed/iost",
        site: "https://medium.com/iost",
        about: "IOST is an ultra-fast, decentralized blockchain network based on the next-generation consensus algorithm “Proof of Believability” (PoB).",
        pic: "@/assets/logos/IOST.svg",
      },
    ],
    dent: [
      {
        name: "Dent Blog",
        feed: "https://medium.com/feed/dent-coin",
        site: "https://medium.com/dent-coin",
        about: "Dent plans to disrupt the mobile operator industry by creating an open marketplace for buying and selling of mobile data.",
        pic: "@/assets/logos/DENT.svg",
      },
    ],
    ethlend: [
      {
        name: "EthLend Blog",
        feed: "https://medium.com/feed/aave",
        site: "https://medium.com/aave",
        about: "The World's First Crypto Lending Marketplace",
        pic: "@/assets/LEND.svg",
      },
    ],
    chainlink: [
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/rss",
        site: "https://blog.chain.link",
        about: "The Chainlink network provides reliable tamper-proof inputs and outputs for complex smart contracts on any blockchain.",
        pic: "@/assets/logos/LINK.svg",
      },
    ],
    decentraland: [
      {
        name: "Decentraland Blog",
        feed: "https://medium.com/feed/@decentraland",
        site: "https://medium.com/@decentraland",
        about: "Decentraland is a virtual reality platform powered by the Ethereum blockchain.",
        pic: "@/assets/logos/MANA.svg",
      },
    ],
    loopring: [
      {
        name: "Loopring blog",
        feed: "https://medium.com/feed/loopring-protocol",
        site: "https://medium.com/loopring-protocol",
        about: "Powering secure, transparent, and high-liqudity decentralized trading experiences.",
        pic: "@/assets/logos/LRC.svg",
      },
    ],
    qash: [
      {
        name: "Qash Blog",
        feed: "https://medium.com/feed/quoineglobal",
        site: "https://medium.com/quoineglobal",
        about: "Liquid, formerly Quoine, is building a universal liquidity solution for cryptoasset trading and a suite of services, Worldbook and Prime Brokerage, using the Qash (QASH) token.",
        pic: "@/assets/logos/QASH.svg",
      },
    ],
    iconomi: [
      {
        name: "Iconomi Blog",
        feed: "https://medium.com/feed/iconominet",
        site: "https://medium.com/iconominet",
        about: "The ICONOMI platform is designed for beginners and experienced investors alike.",
        pic: "@/assets/logos/ICN.svg",
      },
    ],
    mco: [
      {
        name: "Crypto.com Blog",
        feed: "https://medium.com/feed/@Crypto.com",
        site: "https://medium.com/@Crypto.com",
        about: "At Crypto.com, we are on a mission to accelerate the world's transition to cryptocurrency.",
        pic: "@/assets/logos/MCO.svg",
      },
    ],
    poet: [
      {
        name: "po.et Blog",
        feed: "https://blog.po.et/feed",
        site: "https://blog.po.et",
        about: "Po.et is the decentralized protocol for content ownership, discovery and monetization in media",
        pic: "@/assets/logos/POE.svg",
      },
    ],
    polymath: [
      {
        name: "Polymath Blog",
        feed: "https://medium.com/feed/@polymathnetwork",
        site: "https://medium.com/@polymathnetwork",
        about: "Interfacing securities and the Blockchain",
        pic: "@/assets/logos/POLY.svg",
      },
    ],
    powerledger: [
      {
        name: "Power Ledger Blog",
        feed: "https://medium.com/feed/@PowerLedger_io",
        site: "https://medium.com/@PowerLedger_io",
        about: "Power Ledger is a world leading P2P blockchain full stack technology energy company.",
        pic: "@/assets/logos/POWR.svg",
      },
    ],
    ripiocredit: [
      {
        name: "RCN Blog",
        feed: "https://medium.com/feed/rcn-news",
        site: "https://medium.com/rcn-news",
        about: "RCN is an open global credit network that connects creditors, financial institutions, fintech companies and decentralized finance service providers on the blockchain, to create frictionless, transparent and borderless debt markets.",
        pic: "@/assets/logos/RCN.svg",
      },
    ],
    raidentoken: [
      {
        name: "Raiden Network Blog",
        feed: "https://medium.com/feed/raiden-network",
        site: "https://medium.com/raiden-network",
        about: "Fast, cheap, scalable token transfers for Ethereum.",
        pic: "@/assets/logos/RDN.svg",
      },
    ],
    requestnetwork: [
      {
        name: "Request Network blog",
        feed: "https://blog.request.network/feed",
        site: "https://blog.request.network",
        about: "The open network for transaction requests",
        pic: "@/assets/logos/REQ.svg",
      },
    ],
    status: [
      {
        name: "Status blog",
        feed: "https://blog.status.im/feed",
        site: "https://blog.status.im",
        about: "A Mobile OS, built for Ethereum",
        pic: "@/assets/logos/SNT.svg",
      },
    ],
    salt: [
      {
        name: "Salt Lending Blog",
        feed: "https://blog.saltlending.com/feed",
        site: "https://blog.saltlending.com",
        about: "FinTech Solutions for Blockchain Assets",
        pic: "@/assets/logos/SALT.svg",
      },
    ],
    storm: [
      {
        name: "Storm Blog",
        feed: "https://blog.stormtoken.com/feed",
        site: "https://blog.stormtoken.com",
        about: "Built on the back of blockchain technology, Storm’s gamified microtask platform creates opportunities for people around the world to earn cryptocurrency rewards.",
        pic: "@/assets/logos/STORM.svg",
      },
    ],
    eidoo: [
      {
        name: "Eido Blog",
        feed: "https://cryptonomist.ch/blog/eidoo/feed",
        site: "https://cryptonomist.ch/blog/eidoo",
        about: "Eidoo is a Swiss company formed by a group of professionals with a shared goal: to improve how people manage their assets, invest, and make a profit in the blockchain economy.",
        pic: "@/assets/logos/EDO.svg",
      },
    ],
    trueusd: [
      {
        name: "True USD Blog",
        feed: "https://blog.trusttoken.com/feed",
        site: "https://blog.trusttoken.com",
        about: "TrueUSD (TUSD) is a stablecoin that you can redeem 1-for-1 for US dollars. TUSD is the first asset token created on the TrustToken Platform.",
        pic: "@/assets/logos/TUSD.svg",
      },
    ],
    dentacoin: [
      {
        name: "Dentacoin Blog",
        feed: "https://blog.dentacoin.com/feed",
        site: "https://blog.dentacoin.com",
        about: "Dentacoin is a blockchain solution for the global dental industry.",
        pic: "@/assets/logos/DCN.svg",
      },
    ],
    wax: [
      {
        name: "Wax Blog",
        feed: "https://medium.com/feed/wax-io",
        site: "https://medium.com/wax-io",
        about: "WAX allows you to operate own virtual item marketplace",
        pic: "@/assets/logos/WAX.svg",
      },
    ],
    wings: [
      {
        name: "Wings Blog",
        feed: "https://blog.wings.ai/feed",
        site: "https://blog.wings.ai",
        about: "Financial forecasting, valuations and funding for projects on Ethereum",
        pic: "@/assets/logos/WINGS.svg",
      },
    ],
    dta: [
      {
        name: "DATA Blog",
        feed: "https://medium.com/feed/@Blockchain_Data",
        site: "https://medium.com/@Blockchain_Data",
        about: "Decentralized AI-Powered Trust Alliance",
        pic: "@/assets/logos/DTA.svg",
      },
    ],
    funfair: [
      {
        name: "FunFair Blog",
        feed: "https://funfair.io/latest/latest-news/feed",
        site: "https://funfair.io/latest/latest-news",
        about: "Market leading enterprise and white label casinos powered by high-performance blockchain technology.",
        pic: "@/assets/logos/FUN.svg",
      },
    ],
    kin: [
      {
        name: "Kin Blog",
        feed: "https://medium.com/feed/kinblog",
        site: "https://medium.com/kinblog",
        about: "Get ready for digital experiences that are more connected, more fair, and more fun.",
        pic: "@/assets/logos/KIN.svg",
      },
    ],
    zclassic: [
      {
        name: "Zclassic Reddit",
        feed: "https://www.reddit.com/r/ZClassic/.rss",
        site: "https://www.reddit.com/r/ZClassic",
        about: "Zclassic is a cryptocurrency that is forked from Zcash.",
        pic: "@/assets/logos/ZCL.svg",
      },
    ],
    sirin: [
      {
        name: "Sirin Blog",
        feed: "https://medium.com/feed/@sirinlabs",
        site: "https://medium.com/@sirinlabs",
        about: "Secure open source consumer electronics for the blockchain era.",
        pic: "@/assets/logos/SRN.svg",
      },
    ],
    aurora: [
      {
        name: "Aurora Blog",
        feed: "https://medium.com/feed/@AuroraOfficial",
        site: "https://medium.com/@AuroraOfficial",
        about: "Decentralized cryptobanking and financial platform",
        pic: "@/assets/logos/AOA.svg",
      },
    ],
    theta: [
      {
        name: "Theta Blog",
        feed: "https://medium.com/feed/theta-network",
        site: "https://medium.com/theta-network",
        about: "Next generation video delivery powered by you",
        pic: "@/assets/logos/THETA.svg",
      },
    ],
    dash: [
      {
        name: "Dash blog",
        feed: "https://blog.dash.org/feed",
        site: "https://blog.dash.org",
        about: "Digital Cash",
        pic: "@/assets/logos/DASH.svg",
      },
    ],
    monero: [
      {
        name: "Monero Blog",
        feed: "https://ww.getmonero.org/feed.xml",
        site: "https://www.getmonero.org/blog",
        about: "Monero is cash for a connected world. It’s fast, private, and secure.",
        pic: "@/assets/logos/XMR.svg",
      },
    ],
    usdc: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    gusd: [
      {
        name: "Gemini Blog",
        feed: "https://medium.com/feed/gemini",
        site: "https://medium.com/gemini",
        about: "Gemini dollar is the first regulated stablecoin issued by Gemini Trust Company, LLC.",
        pic: "@/assets/logos/GUSD.svg",
      },
    ],
    pax: [
      {
        name: "Paxos Blog",
        feed: "https://www.paxos.com/feed",
        site: "https://www.paxos.com",
        about: "Paxos Standard (PAX) combines US Dollar stability with the efficiency of blockchain technology.",
        pic: "@/assets/logos/PAX.svg",
      },
    ],
    etc: [
      {
        name: "Ethereum Classic Blog",
        feed: "https://medium.com/feed/ethereum-classic",
        site: "https://medium.com/ethereum-classic",
        about: "The original, decentralized, immutable, unstoppable smnart contract blockchain.",
        pic: "@/assets/logos/ETC.svg",
      },
    ],
    coni: [
      {
        name: "Coinbene Blog",
        feed: "https://medium.com/feed/@coinbeneglobal",
        site: "https://medium.com/@coinbeneglobal",
        about: "Coinbene is an exchange, Coni is their token.",
        pic: "@/assets/logos/CONI.svg",
      },
    ],
    tok: [
      {
        name: "Tokok Blog",
        feed: "https://medium.com/feed/@tokok",
        site: "https://medium.com/@tokok",
        about: "Tokok is an exchange, TOK is their token.",
        pic: "@/assets/logos/TOK.svg",
      },
    ],
    genesis: [
    ],
    por: [
      {
        name: "Proof of Review Blog",
        feed: "https://medium.com/feed/@proofofreview",
        site: "https://medium.com/@proofofreview",
        about: "Proof of Review's team review and vet projects.",
        pic: "@/assets/logos/POR.svg",
      },
    ],
    bzedge: [
      {
        name: "BZEdge Blog",
        feed: "https://medium.com/feed/@bzedge",
        site: "https://medium.com/@bzedge",
        about: "Cutting Edge Cryptocurrency. Ultra fast secure and low cost blockchain.",
        pic: "@/assets/logos/BZE.svg",
      },
    ],
    bithereum: [
      {
        name: "Bithereum Network Blog",
        feed: "https://medium.com/feed/bithereum-network",
        site: "https://medium.com/bithereum-network",
        about: "Bithereum is a fork of Bitcoin and Ethereum aiming to fuse the visions of both.",
        pic: "@/assets/logos/BTH.svg",
      },
    ],
    adt: [
      {
        name: "AdToken Blog",
        feed: "https://medium.com/feed/metax-publication",
        site: "https://medium.com/metax-publication",
        about: "AdToken is intended for use in the adChain Registry dapp.",
        pic: "@/assets/logos/ADT.svg",
      },
    ],
    mft: [
      {
        name: "Mainframe Blog",
        feed: "https://blog.mainframe.com/feed",
        site: "https://blog.mainframe.com",
        about: "Mainframe OS makes it easy to use and build decentralized applications.",
        pic: "@/assets/logos/MFT.svg",
      },
    ],
    atl: [
      {
        name: "Atlant Blog",
        feed: "https://blog.atlant.io/feed",
        site: "https://blog.atlant.io",
        about: "A project with a focus on the real estate investment world",
        pic: "@/assets/logos/ATL.svg",
      },
    ],
    ant: [
      {
        name: "Aragon Blog",
        feed: "https://blog.aragon.org/feed",
        site: "https://blog.aragon.org",
        about: "Build unstoppable organizations on Ethereum.",
        pic: "@/assets/logos/ANT.svg",
      },
    ],
    arn: [
      {
        name: "Aeron Blog",
        feed: "https://medium.com/feed/@aeronaero",
        site: "https://medium.com/@aeronaero",
        about: "Blockchain solutions for Aviation safety ",
        pic: "@/assets/logos/ARN.svg",
      },
    ],
    brd: [
    ],
    rep: [
      {
        name: "Augur Blog",
        feed: "https://medium.com/feed/@AugurProject",
        site: "https://medium.com/@AugurProject",
        about: "An open-source, decentralized, peer-to-peer prediction market platform built on Ethereum.",
        pic: "@/assets/logos/REP.svg",
      },
    ],
    qkc: [
      {
        name: "QuarkChain Blog",
        feed: "https://medium.com/feed/quarkchain-official",
        site: "https://medium.com/quarkchain-official",
        about: "Enable everyone to use blockchain technology anywhere and anytime.",
        pic: "@/assets/logos/QKC.svg",
      },
    ],
    loom: [
      {
        name: "Loom Blog",
        feed: "https://medium.com/feed/loom-network",
        site: "https://medium.com/loom-network",
        about: "Loom Network's DPoS sidechains allow for truly scalable blockchain games and Dapps with the security of Ethereum mainnet.",
        pic: "@/assets/logos/LOOM.svg",
      },
    ],
    eurs: [
      {
        name: "Stasis Blog",
        feed: "https://medium.com/feed/stasis-blog",
        site: "https://medium.com/stasis-blog",
        about: "Bridging the gap between decentralized finance and the off-chain market",
        pic: "@/assets/logos/EURS.svg",
      },
    ],
    commercium: [
      {
        name: "Commercium Blog",
        feed: "https://medium.com/feed/commercium-cmm",
        site: "https://medium.com/commercium-cmm",
        about: "CMM is a proof-of-work (mineable) cryptocurrency. CMM includes 60 second block times for fast confirmation of transfers.",
        pic: "@/assets/logos/CMM.svg",
      },
    ],
    groestlcoin: [
      {
        name: "Groestlcoin Blog",
        feed: "https://medium.com/feed/@groestlcoin",
        site: "https://medium.com/@groestlcoin",
        about: "Instant & Private transactions with subAtomic fees",
        pic: "@/assets/logos/GRS.svg",
      },
    ],
    gunthy: [
    ],
    metal: [
      {
        name: "Metal Blog",
        feed: "https://blog.metalpay.com/rss",
        site: "https://blog.metalpay.com",
        about: "Send. Receive. Earn",
        pic: "@/assets/logos/MTL.svg",
      },
    ],
    ethos: [
      {
        name: "EthOS Blog",
        feed: "https://medium.com/feed/@ethos.io",
        site: "https://medium.com/@ethos.io",
        about: "The people-powered blockchain platform.",
        pic: "@/assets/logos/ETHOS.svg",
      },
    ],
    singularitynet: [
      {
        name: "SingularityNET Blog",
        feed: "https://blog.singularitynet.io/feed",
        site: "https://blog.singularitynet.io",
        about: "SingularityNET lets anyone create, share and monetize AI services as scale.",
        pic: "@/assets/logos/AGI.svg",
      },
    ],
    ambrosus: [
      {
        name: "Ambrosus Blog",
        feed: "https://blog.ambrosus.com/feed",
        site: "https://blog.ambrosus.com",
        about: "Decentralized IoT Ecosystems.",
        pic: "@/assets/logos/AMB.svg",
      },
    ],
    blockmasoncreditprotocol: [
      {
        name: "BlockMason Blog",
        feed: "https://blockmason.io/blog/feed",
        site: "https://blockmason.io/blog",
        about: "Building the Foundation for the Blockchain Revolution",
        pic: "@/assets/logos/BCPT.svg",
      },
    ],
    blox: [
    ],
    celertoken: [
      {
        name: "Celer Network Blog",
        feed: "https://medium.com/feed/celer-network",
        site: "https://medium.com/celer-network",
        about: "Celer Network brings interactive, secure and low-cost applications to every blockchain.",
        pic: "@/assets/logos/CELR.svg",
      },
    ],
    cindicator: [
      {
        name: "Cindicator Blog",
        feed: "https://blog.cindicator.com/rss",
        site: "https://blog.cindicator.com",
        about: "Hybrid intelligence for effective asset management",
        pic: "@/assets/logos/CND.svg",
      },
    ],
    streamrdatacoin: [
      {
        name: "Streamr Blog",
        feed: "https://medium.com/feed/streamrblog",
        site: "https://medium.com/streamrblog",
        about: "Streamr is creating an open source platform for the free and fair exchange of the world’s real-time data.",
        pic: "@/assets/logos/DATA.svg",
      },
    ],
    agrello: [
      {
        name: "Agrello Blog",
        feed: "https://blog.agrello.org/feed",
        site: "https://blog.agrello.org",
        about: "Legally binding smart contracts, powered by AI",
        pic: "@/assets/logos/DLT.svg",
      },
    ],
    dock: [
      {
        name: "Dock Blog",
        feed: "https://medium.com/feed/dock",
        site: "https://medium.com/dock",
        about: "Verifiable digital records on blockchain",
        pic: "@/assets/logos/DOCK.svg",
      },
    ],
    everex: [
      {
        name: "Everex Blog",
        feed: "https://blog.everex.io/feed",
        site: "https://blog.everex.io",
        about: "Everex offers DLT based financial services to individuals and business in Asia and globally",
        pic: "@/assets/logos/EVX.svg",
      },
    ],
    gifto: [
      {
        name: "Gifto Blog",
        feed: "https://medium.com/feed/@gifto",
        site: "https://medium.com/@gifto",
        about: "Gifto.io is an Ethereum-based Dapp for digital content creators, gamers, art collectors, and charities to send and receive customized virtual gifts #GTO",
        pic: "@/assets/logos/GTO.svg",
      },
    ],
    genesisvision: [
      {
        name: "GenesisVision Blog",
        feed: "https://medium.com/feed/@GenesisVision",
        site: "https://medium.com/@GenesisVision",
        about: "The first platform for the private trust management market, built on Blockchain technology and Smart Contracts.",
        pic: "@/assets/logos/GVT.svg",
      },
    ],
    holotoken: [
      {
        name: "HoloChain Blog",
        feed: "https://medium.com/feed/holochain",
        site: "https://medium.com/holochain",
        about: "HOT is a utility token built for the participants of its ecosystem to contribute to and utilize the platform.",
        pic: "@/assets/logos/HOT.svg",
      },
    ],
    insolar: [
      {
        name: "Insolar Blog",
        feed: "https://medium.com/feed/insolar",
        site: "https://medium.com/insolar",
        about: "Insolar (INS) is a project that is trying to develop distributed business networks which will use new innovations in blockchain technology to make them secure and interoperable.",
        pic: "@/assets/logos/INS.svg",
      },
    ],
    iotex: [
      {
        name: "Iotex Blog",
        feed: "https://medium.com/feed/iotex",
        site: "https://medium.com/iotex",
        about: "A Decentralized Network for Internet of Things (IoT), Powered by a Auto-Scalable, Extensible, Private-Centric Blockchain.",
        pic: "@/assets/logos/iotex.svg",
      },
    ],
    selfkey: [
      {
        name: "selfkey Blog",
        feed: "https://blog.selfkey.org/feed",
        site: "https://blog.selfkey.org",
        about: "A Self-Sovereign Identity system that empowers individuals to find more Freedom and Privacy through the full ownership of their digital identity.",
        pic: "@/assets/logos/KEY.svg",
      },
    ],
    lunyr: [
      {
        name: "Lunyr Blog",
        feed: "https://medium.com/feed/lunyr",
        site: "https://medium.com/lunyr",
        about: "With Lunyr you'll be able to contribute and peer review information for rewards in a completely decentralized way.",
        pic: "@/assets/logos/LUN.svg",
      },
    ],
    monetha: [
      {
        name: "Monetha Blog",
        feed: "https://medium.com/feed/@monetha",
        site: "https://medium.com/@monetha",
        about: "Monetha's Reputation Platform is a solution to build a censorship resistant and transferable reputation that is reliable and based on your behavior",
        pic: "@/assets/logos/MTH.svg",
      },
    ],
    oax: [
      {
        name: "Oax Blog",
        feed: "https://medium.com/feed/@OAX_Foundation",
        site: "https://medium.com/@OAX_Foundation",
        about: "OAX is a new, decentralized, digital asset ecosystem initiative run by the “The OAX Foundation Limited”",
        pic: "@/assets/logos/OAX.svg",
      },
    ],
    ost: [
      {
        name: "OST Reddit",
        feed: "https://reddit.com/r/OSTdotcom/.rss",
        site: "https://reddit.com/r/OSTdotcom",
        about: "OST KIT gives you all the tools you need to run your blockchain-powered economy on open scalable sidechains.",
        pic: "@/assets/logos/OST.svg",
      },
      {
        name: "OST Medium",
        feed: "https://medium.com/feed/OSTdotcom",
        site: "https://medium.com/OSTdotcom",
        about: "OST KIT gives you all the tools you need to run your blockchain-powered economy on open scalable sidechains.",
        pic: "@/assets/logos/OST.svg",
      },
    ],
    populous: [
      {
        name: "Populous Blog",
        feed: "https://medium.com/feed/@BitPopulous",
        site: "https://medium.com/@BitPopulous",
        about: "Populous is a peer-to-peer (P2P) platform that uses blockchain to provide small and medium-sized enterprises (SMEs) a more efficient way to participate in invoice financing.",
        pic: "@/assets/logos/PPT.svg",
      },
    ],
    quantstamp: [
      {
        name: "QuantStamp Blog",
        feed: "https://medium.com/feed/quantstamp",
        site: "https://medium.com/quantstamp",
        about: "Quantstamp is a Y Combinator-backed blockchain security company. Scan a smart contract using QSP, get a full-service smart contract audit",
        pic: "@/assets/logos/QSP.svg",
      },
    ],
    ren: [
      {
        name: "Ren Blog",
        feed: "https://medium.com/feed/renproject",
        site: "https://medium.com/renproject",
        about: "Transfer tokens in zero-knowledge, trustlessly swap between blockchains, trade on a dark pool, build any privacy preserving application. Never reveal anything.",
        pic: "@/assets/logos/REN.svg",
      },
    ],
    iexecrlc: [
      {
        name: "Iexercrlc Blog",
        feed: "https://medium.com/feed/iex-ec",
        site: "https://medium.com/iex-ec",
        about: "iExec provides distributed applications running on the blockchain (DApps) scalable, secure and easy.  RLC is the native token of the iExec cloud platform.",
        pic: "@/assets/logos/RLC.svg",
      },
    ],
    singulardtv: [
      {
        name: "BreakerWorldWide Blog",
        feed: "https://medium.com/feed/@BreakerWorldwide",
        site: "https://medium.com/@BreakerWorldwide",
        about: "Breaker.io is the first to launch a blockchain-powered entertainment platform. Built with the creator in mind. Formerly singulardtv",
        pic: "@/assets/logos/SNGLS.svg",
      },
    ],
    tierion: [
      {
        name: "Tierion Blog",
        feed: "https://medium.com/feed/tierion",
        site: "https://medium.com/tierion",
        about: "Tierion turns the blockchain into a global platform for verifying any data, file, or business process",
        pic: "@/assets/logos/TNT.svg",
      },
    ],
    viberate: [
      {
        name: "Viberate Blog",
        feed: "https://medium.com/feed/viberate-blog",
        site: "https://medium.com/viberate-blog",
        about: "Viberate is a live music ecosystem and a blockchain-based marketplace that connects artists and music-industry professionals.",
        pic: "@/assets/logos/VIB.svg",
      },
    ],
    vibe: [
      {
        name: "Vibe Blog",
        feed: "https://medium.com/feed/@VIBEHUBNEWS",
        site: "https://medium.com/@VIBEHUBNEWS",
        about: "Capturing and creating the virtual life. Bridging the gap between communities for gaming on blockchain",
        pic: "@/assets/logos/VIBE.svg",
      },
    ],
    tael: [
      {
        name: "Taelpay Blog",
        feed: "https://medium.com/feed/@Taelpay",
        site: "https://medium.com/@Taelpay",
        about: "The digital token used in the Techrock ecosystem for verifiably authentic products. Formerly WaBi",
        pic: "@/assets/logos/WABI.svg",
      },
    ],
    wepower: [
      {
        name: "WePower Blog",
        feed: "https://medium.com/feed/@wepower",
        site: "https://medium.com/wepower",
        about: "Blockchain-based green energy procurement and trading platform",
        pic: "@/assets/logos/WPR.svg",
      },
    ],
    dibicoin: [
    ],
    bitcoinzero: [
      {
        name: "Bitcoinzero Blog",
        feed: "https://medium.com/feed/@BitcoinZero",
        site: "https://medium.com/@BitcoinZero",
        about: "Bitcoin Zero is a fork between BTC, LTC and HXX.",
        pic: "@/assets/logos/BZX.svg",
      },
    ],
    etherparty: [
      {
        name: "Etherparty Blog",
        feed: "https://blog.etherparty.com/feed",
        site: "https://blog.etherparty.com",
        about: "Etherparty is about simple tools for the next generation of Blockchain-connected economies powered by Smart Contract automation",
        pic: "@/assets/logos/FUEL.svg",
      },
    ],
    ripple: [
      {
        name: "Ripple Reddit",
        feed: "https://reddit.com/r/ripple/.rss",
        site: "https://reddit.com/r/ripple",
        about: "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        pic: "@/assets/logos/XRP.svg",
      },
    ],
    eos: [
      {
        name: "EOS news",
        feed: "https://cointelegraph.com/rss/tag/eos",
        site: "https://eos.io",
        about: "EOS.IO is a blockchain protocol powered by the native cryptocurrency EOS",
        pic: "@/assets/logos/EOS.svg",
      },
    ],
    axe: [
      {
        name: "Axe Reddit",
        feed: "https://www.reddit.com/r/AXErunners/.rss",
        site: "https://axerunners.com",
        about: "AXE is a decentralized X11-based cryptocurrency. The foundation of AXE network is hybrid PoW/PoSe system. First-tier nodes provide hash power to move data and secure the blockchain, while the second tier of full nodes adds extra privacy and increases network performance.",
        pic: "@/assets/logos/AXE.svg",
      },
    ],
    unussedleo: [
      {
        name: "Bitfinex",
        feed: "https://medium.com/feed/@bitfinex",
        site: "https://medium.com/@Bitfinex",
        about: "Bitfinex is a cryptocurrency exchange owned and operated by iFinex Inc., which is headquartered in Hong Kong and registered in the British Virgin Islands. Their LEO Token is mostly used for reduced exchange fees.",
        pic: "@/assets/logos/LEO.svg",
      },
    ],
    beaxy: [
      {
        name: "Beaxy Exchange Medium",
        feed: "https://medium.com/feed/beaxy-exchange",
        site: "https://medium.com/beaxy-exchange",
        about: "Blog related to Beaxy Exchange",
        pic: "@/assets/logos/BXY.svg",
      },
    ],
    stableusd: [
      {
        name: "Stably Medium",
        feed: "https://medium.com/feed/stably-blog",
        site: "https://medium.com/stably-blog",
        about: "StableUSD (USDS) is a fiat-collateralized stablecoin created by Stably. Each StableUSD token is legally backed and redeemable for a US Dollar held in escrow accounts managed by Stably's regulated trustees, such as Prime Trust.",
        pic: "@/assets/logos/USDS.svg",
      },
    ],
    nuke: [
    ],
    dogecoin: [
    ],
    tron: [
      {
        name: "TRON",
        feed: "https://medium.com/feed/@Tronfoundation",
        site: "https://tron.network",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "@/assets/logos/TRX.svg",
      },
    ],
    bittorrent: [
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "@/assets/logos/BTT.svg",
      },
    ],
    digibyte: [
    ],
    sinovate: [
    ],
    neo: [
      {
        name: "NEO news",
        feed: "https://neonewstoday.com/feed",
        site: "https://neo.org",
        about: "NEO (NEO), formerly Antshares, aims to build a 'smart economy' by incorporating digital assets, digital identities, and smart contracts.",
        pic: "@/assets/logos/NEO.svg",
      },
    ],
    gas: [
      {
        name: "NEO news",
        feed: "https://neonewstoday.com/feed",
        site: "https://neo.org",
        about: "NEO (NEO), formerly Antshares, aims to build a 'smart economy' by incorporating digital assets, digital identities, and smart contracts.",
        pic: "@/assets/logos/NEO.svg",
      },
    ],
    neofish: [
      {
        name: "NEO news",
        feed: "https://neonewstoday.com/feed",
        site: "https://neo.org",
        about: "FishChain, an Ethereum-based blockchain game, has announced its intention to launch a NEO-based counterpart called NeoFish, alongside an airdrop of the NEP-5 version of its FISH token.\n"
          + "FishChain combines a mining mechanism and fishing gameplay with a token model, with the goal of creating an interactive, player-driven marketplace and ecosystem.",
        pic: "@/assets/logos/NEO.svg",
      },
    ],
    stellar: [
      {
        name: "Stellar Medium",
        feed: "https://medium.com/feed/@StellarOrg",
        site: "https://medium.com/@StellarOrg",
        about: "The Stellar network is an open source, distributed, and community owned network used to facilitate cross-asset transfers of value.",
        pic: "@/assets/logos/XLM.svg",
      },
    ],
    gcstar: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "@/assets/logos/GCSTAR.svg",
      },
    ],
    gctgt: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "@/assets/logos/GCTGT.svg",
      },
    ],
    gcwal: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "@/assets/logos/GCWAL.svg",
      },
    ],
    gcbest: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "@/assets/logos/GCBEST.svg",
      },
    ],
    gchd: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "@/assets/logos/GCHD.svg",
      },
    ],
    gclowe: [
      {
        name: "Fabrix Medium",
        feed: "https://medium.com/feed/fabrx-blockchain",
        site: "https://medium.com/fabrx-blockchain",
        about: "Merchcoins are wrapped gift cards in the form of ERC-20 stablecoins. Buy, exchange, send and receive Merchcoins today.",
        pic: "@/assets/logos/GCLOWE.svg",
      },
    ],
    ontology: [
      {
        name: "Ontology Medium",
        feed: "https://medium.com/feed/ontologynetwork",
        site: "https://medium.com/ontologynetwork",
        about: "Ontology describes itself as a provider of high-performance public blockchains, which includes distributed ledger and smart contract systems.\n"
          + "The Ontology blockchain framework reportedly supports public blockchain systems that can be customized for different applications. Ontology supports collaboration among chain networks with its various protocol groups.\n"
          + "Ontology aims to constantly provide common modules on the underlying infrastructure for different kinds of distributed scenarios, such as those for the distributed digital identity framework and distributed data exchange protocol.\n",
        pic: "@/assets/logos/ONT.svg",
      },
    ],
    ontologygas: [
      {
        name: "Ontology Medium",
        feed: "https://medium.com/feed/ontologynetwork",
        site: "https://medium.com/ontologynetwork",
        about: "Ontology gas is token used for paying transactions on ontology network. Ontology describes itself as a provider of high-performance public blockchains, which includes distributed ledger and smart contract systems.\n"
          + "The Ontology blockchain framework reportedly supports public blockchain systems that can be customized for different applications. Ontology supports collaboration among chain networks with its various protocol groups.\n"
          + "Ontology aims to constantly provide common modules on the underlying infrastructure for different kinds of distributed scenarios, such as those for the distributed digital identity framework and distributed data exchange protocol.\n",
        pic: "@/assets/logos/ONG.svg",
      },
    ],
    dmme: [
      {
        name: "DMme Blog",
        feed: "https://medium.com/feed/@.Bio_Logik.",
        site: "https://medium.com/@.Bio_Logik.",
        about: "The Next Generation Of Messaging Mobile Application",
        pic: "@/assets/logos/DMME.svg",
      },
    ],
    veriblock: [
    ],
    huobitoken: [
    ],
    busd: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BUSD.svg",
      },
    ],
    okb: [
    ],
    bitforextoken: [
    ],
    mxtoken: [
      {
        name: "MXC Blog",
        feed: "https://medium.com/feed/@mxc.com",
        site: "https://medium.com/@mxc.com",
        about: "More than just an exchange.",
        pic: "@/assets/logos/MX.svg",
      },
    ],
    zbtoken: [
      {
        name: "ZB Blog",
        feed: "https://medium.com/feed/@zbhk",
        site: "https://medium.com/@zbhk",
        about: "ZB Global is a world's leading blockchain assets financial service provider.",
        pic: "@/assets/logos/ZB.svg",
      },
    ],
    hotbittoken: [
      {
        name: "Hotbit Blog",
        feed: "https://medium.com/feed/@hotbit",
        site: "https://medium.com/@hotbit",
        about: "Hotbit is one of the professional digital asset exchange platforms that provide trading services among major digital currencies like Bitcoin and Ethereum.",
        pic: "@/assets/logos/HTB.svg",
      },
    ],
    huobipooltoken: [
    ],
    golfcoin: [
    ],
    enecuum: [
      {
        name: "Enecuum Medium",
        feed: "https://medium.com/feed/@EnqBlockchain",
        site: "https://medium.com/@EnqBlockchain",
        about: "Blockchain mobile network for decentralized application.",
        pic: "@/assets/logos/ENQ.svg",
      },
    ],
    fantom: [
      {
        name: "Fantom Medium",
        feed: "https://medium.com/feed/fantomfoundation",
        site: "https://medium.com/fantomfoundation",
        about: "The core of the new internet. The most advanced, fast and secure consensus for distributed networks.",
        pic: "@/assets/logos/FTM.svg",
      },
    ],
    zeroxbitcoin: [
    ],
    vayla: [
    ],
    aergo: [
    ],
    lunchmoney: [
    ],
    kadena: [
      {
        name: "Kadena Medium",
        feed: "https://medium.com/feed/kadena-io",
        site: "https://medium.com/kadena-io",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/KDA.svg",
      },
      {
        name: "Kadena Reddit",
        feed: "https://www.reddit.com/r/kadena/.rss",
        site: "https://www.reddit.com/r/kadena",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/KDA.svg",
      },
    ],
    netkoin: [
    ],
    gammacoin: [
    ],
    bazookatoken: [
    ],
    coinsto: [
    ],
    unibright: [
    ],
    ilcoin: [
    ],
    hex: [
      {
        name: "Hex Reddit",
        feed: "https://www.reddit.com/r/HEXcrypto/.rss",
        site: "https://www.reddit.com/r/HEXcrypto",
        about: "Hex reddit",
        pic: "@/assets/logos/HEX.svg",
      },
    ],
    comp: [
      {
        name: "Compound Medium",
        feed: "https://medium.com/feed/compound-finance",
        site: "https://medium.com/compound-finance",
        about: "Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.",
        pic: "@/assets/logos/COMP.svg",
      },
    ],
    vidt: [
      {
        name: "V-ID Medium",
        feed: "https://medium.com/feed/@pim_vee",
        site: "https://medium.com/@pim_vee",
        about: "V-ID is a service that detects any unlawful manipulation of any digital file.",
        pic: "@/assets/logos/VIDT.svg",
      },
    ],
    drgn: [
    ],
    whale: [
    ],
    wbtc: [
    ],
    genesistron: [
    ],
    om: [
    ],
    testnetbitcoin: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "@/assets/logos/TESTBTC.svg",
      },
    ],
    coinartisttoken: [
    ],
    uni: [
    ],
    testnetropstenethereum: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/TESTETH.svg",
      },
    ],
    testnetsepoliaethereum: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/TESTETH.svg",
      },
    ],
    jst: [
    ],
    beldex: [
    ],
    toshi: [
    ],
    maid: [
    ],
    btcb: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "@/assets/logos/BTCB.svg",
      },
    ],
    rune: [
      {
        name: "THORChain Reddit",
        feed: "https://www.reddit.com/r/thorchain/.rss",
        site: "https://www.reddit.com/r/thorchain",
        about: "THORChain is a decentralised cross-chain liquidity network with no pegged or wrapped tokens.",
        pic: "@/assets/logos/RUNE.svg",
      },
      {
        name: "THORChain Medium",
        feed: "https://medium.com/feed/topic/thorchain",
        site: "https://medium.com/topic/thorchain",
        about: "THORChain is a decentralised cross-chain liquidity network with no pegged or wrapped tokens.",
        pic: "@/assets/logos/RUNE.svg",
      },
    ],
    usdttrc: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    trueusdbnb: [
      {
        name: "True USD Blog",
        feed: "https://blog.trusttoken.com/feed",
        site: "https://blog.trusttoken.com",
        about: "TrueUSD (TUSD) is a stablecoin that you can redeem 1-for-1 for US dollars. TUSD is the first asset token created on the TrustToken Platform.",
        pic: "@/assets/logos/TUSD.svg",
      },
    ],
    busdbnb: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BUSD.svg",
      },
    ],
    nexo: [
      {
        name: "Nexo Blog",
        feed: "https://medium.com/feed/@community_83533",
        site: "https://medium.com/@community_83533",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "@/assets/logos/NEXO.svg",
      },
      {
        name: "Nexo Reddit",
        feed: "https://www.reddit.com/r/nexo/.rss",
        site: "https://www.reddit.com/r/nexo",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "@/assets/logos/NEXO.svg",
      },
    ],
    nexobnb: [
      {
        name: "Nexo Blog",
        feed: "https://medium.com/feed/@community_83533",
        site: "https://medium.com/@community_83533",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "@/assets/logos/NEXO.svg",
      },
      {
        name: "Nexo Reddit",
        feed: "https://www.reddit.com/r/nexo/.rss",
        site: "https://www.reddit.com/r/nexo",
        about: "Nexo is a blockchain-based lending platform that offers users instant cryptocurrency-backed loans. Users deposit an accepted token — such as Bitcoin (BTC), Ether (ETH), Litecoin (LTC) or XRP (XRP) — as collateral to receive a loan in the form of a fiat currency or stablecoin.",
        pic: "@/assets/logos/NEXO.svg",
      },
    ],
    mcdai: [
      {
        name: "Dai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization.",
        pic: "@/assets/logos/DAI.svg",
      },
      {
        name: "Dai Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization.",
        pic: "@/assets/logos/DAI.svg",
      },
    ],
    xdai: [
    ],
    rev: [
      {
        name: "Revain Reddit",
        feed: "https://www.reddit.com/r/revain_org/.rss",
        site: "https://www.reddit.com/r/revain_org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "@/assets/logos/REV.svg",
      },
      {
        name: "Revain Blog",
        feed: "https://medium.com/feed/@revain.org",
        site: "https://medium.com/@revain.org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "@/assets/logos/REV.svg",
      },
    ],
    revtrc: [
      {
        name: "Revain Reddit",
        feed: "https://www.reddit.com/r/revain_org/.rss",
        site: "https://www.reddit.com/r/revain_org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "@/assets/logos/REV.svg",
      },
      {
        name: "Revain Blog",
        feed: "https://medium.com/feed/@revain.org",
        site: "https://medium.com/@revain.org",
        about: "Revain describes itself as the first trustworthy review platform built with blockchain technology. All user reviews are written in the blockchain, providing transparency. "
          + "No one can change or delete them, including the Revain itself. This makes review manipulation by any party nearly impossible.",
        pic: "@/assets/logos/REV.svg",
      },
    ],
    aave: [
      {
        name: "Aave Reddit",
        feed: "https://www.reddit.com/r/Aave_Official/.rss",
        site: "https://www.reddit.com/r/Aave_Official",
        about: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto.",
        pic: "@/assets/logos/AAVE.svg",
      },
      {
        name: "Aave Blog",
        feed: "https://medium.com/feed/aave",
        site: "https://medium.com/aave",
        about: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto.",
        pic: "@/assets/logos/AAVE.svg",
      },
    ],
    snx: [
      {
        name: "Synthetix Reddit",
        feed: "https://www.reddit.com/r/synthetix_io/.rss",
        site: "https://www.reddit.com/r/synthetix_io",
        about: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets. Each synthetic asset (or Synth) is an ERC20 token which tracks the price of an external asset.",
        pic: "@/assets/logos/SNX.svg",
      },
    ],
    yfi: [
      {
        name: "yearn.finance Medium",
        feed: "https://medium.com/feed/iearn",
        site: "https://medium.com/iearn",
        about: "Yearn.finance is an aggregator service for decentralized finance (DeFi) investors, using automation to allow them to maximize profits from yield farming.",
        pic: "@/assets/logos/YFI.svg",
      },
    ],
    ftt: [
      {
        name: "FTX Token Medium",
        feed: "https://medium.com/feed/@ftx",
        site: "https://medium.com/@ftx",
        about: "FTX is owned by FTX Trading LTD, a company incorporated in Antigua and Barbuda. FTX was incubated by Alameda Research, a cryptocurrency liquidity provider. ",
        pic: "@/assets/logos/FTT.svg",
      },
    ],
    grt: [
      {
        name: "The Graph Reddit",
        feed: "https://www.reddit.com/r/thegraph/.rss",
        site: "https://www.reddit.com/r/thegraph",
        about: "The Graph is an indexing protocol for querying data for networks like Ethereum and IPFS, powering many applications in both DeFi and the broader Web3 ecosystem.",
        pic: "@/assets/logos/GRT.svg",
      },
    ],
    sushi: [
      {
        name: "Sushi Medium",
        feed: "https://medium.com/feed/sushiswap-org",
        site: "https://medium.com/sushiswap-org",
        about: "SushiSwap (SUSHI) is an example of an automated market maker (AMM). An increasingly popular tool among cryptocurrency users, AMMs are decentralized exchanges which use smart contracts to create markets for any given pair of tokens.",
        pic: "@/assets/logos/SUSHI.svg",
      },
    ],
    cel: [
      {
        name: "Celsius Reddit",
        feed: "https://www.reddit.com/r/thegraph/.rss",
        site: "https://www.reddit.com/r/thegraph",
        about: "Celsius (CEL) is an all-in-one banking and financial services platform for cryptocurrency users.",
        pic: "@/assets/logos/CEL.svg",
      },
    ],
    cro: [
      {
        name: "Crypto.com Coin Reddit",
        feed: "https://www.reddit.com/r/Crypto_com/.rss",
        site: "https://www.reddit.com/r/Crypto_com",
        about: "Crypto.com Coin (CRO) is the native cryptocurrency token of Crypto.com Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.",
        pic: "@/assets/logos/CRO.svg",
      },
      {
        name: "Crypto.com Coin Medium",
        feed: "https://medium.com/feed/@crypto.com",
        site: "https://medium.com/@crypto.com",
        about: "Crypto.com Coin (CRO) is the native cryptocurrency token of Crypto.com Chain — a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.",
        pic: "@/assets/logos/CRO.svg",
      },
    ],
    uma: [
      {
        name: "UMA Medium",
        feed: "https://medium.com/feed/uma-project",
        site: "https://medium.com/uma-project",
        about: "UMA, or Universal Market Access, is a protocol for the creation of synthetic assets based on the Ethereum (ETH) blockchain. UMA was launched in December 2018.",
        pic: "@/assets/logos/UMA.svg",
      },
    ],
    renbtc: [
      {
        name: "renBTC Reddit",
        feed: "https://www.reddit.com/r/renproject/.rss",
        site: "https://www.reddit.com/r/renproject",
        about: "RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RENBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.",
        pic: "@/assets/logos/RENBTC.svg",
      },
      {
        name: "renBTC Medium",
        feed: "https://medium.com/feed/renproject",
        site: "https://medium.com/renproject",
        about: "RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RENBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.",
        pic: "@/assets/logos/RENBTC.svg",
      },
    ],
    chsb: [
      {
        name: "SwissBorg Reddit",
        feed: "https://www.reddit.com/r/swissborg/.rss",
        site: "https://www.reddit.com/r/swissborg",
        about: "SwissBorg aims to decentralize wealth management by making it fun, fair, and community-centric.",
        pic: "@/assets/logos/CHSB.svg",
      },
    ],
    ampl: [
      {
        name: "Ampleforth Reddit",
        feed: "https://www.reddit.com/r/ampleforthcrypto/.rss",
        site: "https://www.reddit.com/r/ampleforthcrypto",
        about: "Ampleforth is an Ethereum-based cryptocurrency with an algorithmically adjusted circulating supply.",
        pic: "@/assets/logos/AMPL.svg",
      },
    ],
    rsr: [
      {
        name: "Reserve Rights Medium",
        feed: "https://medium.com/feed/reserve-currency",
        site: "https://medium.com/reserve-currency",
        about: "Reserve Rights is a dual-token stablecoin platform that was launched in May 2019 following a successful initial exchange offering (IEO) on the Huobi Prime platform.",
        pic: "@/assets/logos/RSR.svg",
      },
    ],
    ust: [
      {
        name: "TerraUSD Medium",
        feed: "https://medium.com/feed/terra-money",
        site: "https://medium.com/terra-money",
        about: "A native Terra stablecoin pegged to the US Dollar.",
        pic: "@/assets/logos/UST.svg",
      },
    ],
    hedg: [
    ],
    qnt: [
      {
        name: "Quant Reddit",
        feed: "https://www.reddit.com/r/QuantNetwork/.rss",
        site: "https://www.reddit.com/r/QuantNetwork",
        about: "Quant Network is a United Kingdom-based technology company that is focused on providing interoperable solutions that bridge multiple protocols, blockchains or other distributed networks.",
        pic: "@/assets/logos/QNT.svg",
      },
      {
        name: "Quant Medium",
        feed: "https://medium.com/feed/@quant_network",
        site: "https://medium.com/@quant_network",
        about: "Quant Network is a United Kingdom-based technology company that is focused on providing interoperable solutions that bridge multiple protocols, blockchains or other distributed networks.",
        pic: "@/assets/logos/QNT.svg",
      },
    ],
    ocean: [
      {
        name: "Ocean Protocol Reddit",
        feed: "https://www.reddit.com/r/oceanprotocol/.rss",
        site: "https://www.reddit.com/r/oceanprotocol",
        about: "Ocean Protocol is a blockchain-based ecosystem that allows individuals and businesses to easily unlock the value of their data and monetize it through the use of ERC-20 based datatokens.",
        pic: "@/assets/logos/OCEAN.svg",
      },
    ],
    husd: [
      {
        name: "HUSD Medium",
        feed: "https://medium.com/feed/@Stablecoin_HUSD",
        site: "https://medium.com/@Stablecoin_HUSD",
        about: "HUSD is an ERC-20 token that is 1:1 ratio pegged with USD. It was issued by Stable Universal, an entity that claims to follow US regulations.",
        pic: "@/assets/logos/HUSD.svg",
      },
    ],
    cvt: [
    ],
    nxm: [
      {
        name: "NXM Medium",
        feed: "https://medium.com/feed/nexus-mutual",
        site: "https://medium.com/nexus-mutual",
        about: "Nexus Mutual uses Ethereum so that people can pool risk together without the need for an insurance company.",
        pic: "@/assets/logos/NXM.svg",
      },
    ],
    gno: [
      {
        name: "Gnosis Reddit",
        feed: "https://www.reddit.com/r/gnosisPM/.rss",
        site: "https://www.reddit.com/r/gnosisPM",
        about: "Started in 2015, Gnosis is a decentralized prediction market built on the Ethereum protocol. Third-party developers will also be able to introduce their own services.",
        pic: "@/assets/logos/GNO.svg",
      },
    ],
    chzbnb: [
      {
        name: "Chiliz Medium",
        feed: "https://medium.com/feed/chiliz",
        site: "https://medium.com/chiliz",
        about: "Chiliz, powering Socios.com, aims to give sports and esports fans the ability to crowd-manage their favorite teams, games, leagues, and events.",
        pic: "@/assets/logos/CHZ.svg",
      },
    ],
    chz: [
      {
        name: "Chiliz Medium",
        feed: "https://medium.com/feed/chiliz",
        site: "https://medium.com/chiliz",
        about: "Chiliz, powering Socios.com, aims to give sports and esports fans the ability to crowd-manage their favorite teams, games, leagues, and events.",
        pic: "@/assets/logos/CHZ.svg",
      },
    ],
    suntrc: [
    ],
    usdjtrc: [
    ],
    dot: [
      {
        name: "Polkadot Reddit",
        feed: "https://www.reddit.com/r/dot/.rss",
        site: "https://www.reddit.com/r/dot",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "@/assets/logos/DOT.svg",
      },
      {
        name: "Polkadot Medium",
        feed: "https://medium.com/feed/polkadot-network",
        site: "https://medium.com/polkadot-network",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "@/assets/logos/DOT.svg",
      },
    ],
    testnetwnd: [
      {
        name: "Polkadot Reddit",
        feed: "https://www.reddit.com/r/dot/.rss",
        site: "https://www.reddit.com/r/dot",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "@/assets/logos/TESTWND.svg",
      },
      {
        name: "Polkadot Medium",
        feed: "https://medium.com/feed/polkadot-network",
        site: "https://medium.com/polkadot-network",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "@/assets/logos/TESTWND.svg",
      },
    ],
    testnetkadena: [
      {
        name: "Kadena Medium",
        feed: "https://medium.com/feed/kadena-io",
        site: "https://medium.com/kadena-io",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/KDA.svg",
      },
      {
        name: "Kadena Reddit",
        feed: "https://www.reddit.com/r/kadena/.rss",
        site: "https://www.reddit.com/r/kadena",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/KDA.svg",
      },
    ],
    ksm: [
      {
        name: "Kusama Reddit",
        feed: "https://www.reddit.com/r/Kusama/.rss",
        site: "https://www.reddit.com/r/Kusama",
        about: "Self-described as Polkadot's wild cousin, Kusama is an experimental blockchain platform that is designed to provide a massively interoperable and scalable framework for developers.",
        pic: "@/assets/logos/KSM.svg",
      },
    ],
    inch: [
      {
        name: "1inch Reddit",
        feed: "https://www.reddit.com/r/1inch_exchange/.rss",
        site: "https://www.reddit.com/r/1inch_exchange",
        about: "1inch is a decentralized exchange (DEX) aggregator, connecting several DEXes into one platform to allow its users to find the most efficient swapping routes across all platforms.",
        pic: "@/assets/logos/1INCH.svg",
      },
      {
        name: "1inch Medium",
        feed: "https://1inch-exchange.medium.com/feed",
        site: "https://1inch-exchange.medium.com",
        about: "1inch is a decentralized exchange (DEX) aggregator, connecting several DEXes into one platform to allow its users to find the most efficient swapping routes across all platforms.",
        pic: "@/assets/logos/1INCH.svg",
      },
    ],
    cardano: [
      {
        name: "Cardano Twitter",
        feed: "https://nitter.net/cardano/rss",
        site: "https://twitter.com/cardano",
        about: "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. Cardano is developing a <a href=\"https://coingecko.com/en?category_id=29\">smart contract platform</a> which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.\r\n\r\nThe Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial software standards in the industry. \r\n\r\nCardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a visionary treasury system.\r\n\r\n<b>Technological Innovation</b>\r\nCardano is the first protocol to incorporate Ouroboros, the ground breaking <a href=\"https://coingecko.com/en?hashing_algorithm=Proof+of+Stake&view=market\">proof of stake algorithm</a>. The IOHK team employed a “first-principles” approach, driven by peer-reviewed academic research to build Cardano from the ground up.\r\n\r\nThe result of this collaborative effort is the first cryptocurrency to be based in Haskell code, which focuses on industrial strength product that delivers the resilience necessary for mission-critical systems, in this case, securing investment.\r\n\r\nCardano’s multi-layer protocol performs advanced functions, and has a settlement layer that is elegantly linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart contracts and will be programmed to recognize identity, assisting compliance (and allowing blacklisting, for instance).\r\n\r\nThe protocol is geared towards protecting privacy rights of users, while also taking into account the needs of regulators. In doing so, Cardano is the first protocol to balance these requirements in a nuanced and effective way, pioneering a new approach for cryptocurrencies.\r\n\r\nThe system is also designed to allow upgrade through soft forks, enabling it to adapt to changing needs and evolve quickly, when required. A treasury system is also being installed that will ensure the sustainability of the protocol.\r\n\r\nCardano is built in the spirit of collaboration by being completely open source and patent-free. Engineered for efficiency and scalability, the Cardano ecosystem will develop into the most complete cryptocurrency ever constructed.\r\n\r\n<b>Conceptual Innovation</b>\r\n\r\ni. Privacy and regulation\r\nThe original <a href=\"https://coingecko.com/en/coins/bitcoin\">Bitcoin</a> blockchain was meant to be a way for individuals to transact directly and anonymously with each other outside the control of banks and governments. This guarantees privacy in financial dealings, a fundamental individual right, but full anonymity can be counterproductive. Today most blockchain projects look to further either the aims of privacy or of regulation. To be effective globally, we think our blockchain must ‘square the circle’ by finding the right mix of individual privacy protection and provision for regulatory control.\r\n\r\nii. Governance\r\nPublic, decentralized blockchain projects rely on crowd-based governance models. This allows for democratic control of the network by its participants, which is essential to building truly decentralised economies. However, if they are not carefully designed, such governance can go awry. Both the Bitcoin and <a href=\"https://coingecko.com/en/coins/ethereum\">Ethereum</a> communities have experienced devastating schisms on the question of how to upgrade their networks – in Ethereum's case already causing a split. The Cardano blockchain has an airtight governance model that allow the community to democratically take clear and binding decisions.\r\n\r\niii. Funding\r\nThe Cardano blockchain has sophisticated maintenance and development needs and is able to adequately fund itself, both in terms of running costs and new investment.\r\n\r\nThe Token: ADA Voucher\r\nEvery blockchain project has a token of value commonly referred to as a cryptocurrency. Ada is the cryptocurrency on the Cardano blockchain. With Ada, holders can send value between friends, pay for a good or service, deposit funds on an exchange, or enter an application. To perform a transfer on the settlement layer requires you own Ada, or acquire Ada through an exchange. It will also be the native token to be used in applications built on the computation layer.\r\n\r\nThe Wallet: <a href=\"https://daedaluswallet.io/\">Daedalus</a>\r\nEach cryptocurrency requires a “wallet” to store Ada. Typically this wallet is a software application that can be installed on any computer or smartphone. Daedalus is a highly-engineered wallet with advanced security features that was developed by <a href=\"https://iohk.io/\">IOHK</a> specifically for the Cardano blockchain and protects your assets with the most advanced cryptography. In the future, Daedalus will not only support Ada, but other cryptocurrencies such as Bitcoin, <a href=\"https://coingecko.com/en/coins/ethereum-classic\">Ethereum Classic</a> and many more.\r\n\r\nThe <a href=\"https://cardanofoundation.org/en/\">Cardano Foundation</a>\r\nThe Cardano Foundation’s core mission is to standardise, protect and promote the Cardano Protocol technology. The Cardano Foundation acts as a supervisory and educational body for Cardano. Our mission is to:\r\n\r\n1. Standardise, protect and promote the Cardano Protocol and its applications\r\n2. Be a community hub offering authoritative, timely information about the technology and Cardano’s wide-ranging potential\r\n3. Liaise and influence government and regulatory bodies, form strategic partnerships with businesses, enterprises and other open source projects and aid the creation of formal software standards for Cardano, a crucial feature for its long term success and critical in adoption and government engagement\r\n\r\nAreas of Focus:\r\n1. Cardano Protocol - We function as an objective standards body for the Cardano protocol as it evolves over time.\r\n2. Cardano community - We support, grow and help educate the Cardano blockchain community.\r\n3. Cardano ecosystem - We work to expand and protect the Cardano ecosystem. This includes promoting Cardano as a platform for commercial entities and serving as an objective organization for enterprises interested in joining Cardano.\r\n4. Serving the wider blockchain community - We aim to influence and progress the emerging commercial and legislative landscape for blockchain technology and cryptocurrencies in general. We proactively approach government and regulatory bodies and form strategic partnerships with businesses, enterprises and other open-source projects.\r\n\r\nIOHK\r\nFounded in 2015 by <a href=\"https://iohk.io/team/charles-hoskinson/\">Charles Hoskinson</a> and <a href=\"https://iohk.io/team/jeremy-wood/\">Jeremy Wood</a>, IOHK is a world-class engineering and technology company committed to using peer-to-peer innovations to provide financial services to three billion people that don’t have them. The group is contracted to design, build, and maintain Cardano through to 2020.\r\n\r\nEmurgo\r\n<a href=\"https://emurgo.io/\">Emurgo</a> is the venture building entity in the Cardano ecosystem, its goal is to aid, integrate, and foster Cardano blockchain applications.\r\n\r\nEmurgo captures the transformative power that blockchain technology brings to the developing world. Decentralized applications built on Cardano technology, funded and supported by Emurgo, will have the potential to build groundbreaking applications.\r\n\r\nProject Road Map\r\nIOHK has now released the settlement layer. This means you can transact, trade, and purchase Ada tokens fully independently of the computation layer. The goal for the computation layer is to have a beta released by the first quarter of 2018. Once both settlement and computation layers are live, users will be able to setup a custom environment to build decentralised applications on the Cardano stack.\r\nIn 2019, IOHK intends to work on Cardano’s long-term scalability and augment its capabilities. As developers, IOHK has been contracted through 2020 to make sure Cardano is being adequately maintained. The goal is to create a sustainable ecosystem that is capable of funding and supporting itself.",
        pic: "@/assets/logos/ADA.svg",
      },
      {
        name: "Cardano Reddit",
        feed: "https://www.reddit.com/r/cardano/.rss",
        site: "https://www.reddit.com/r/cardano",
        about: "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. Cardano is developing a <a href=\"https://coingecko.com/en?category_id=29\">smart contract platform</a> which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.\r\n\r\nThe Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial software standards in the industry. \r\n\r\nCardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a visionary treasury system.\r\n\r\n<b>Technological Innovation</b>\r\nCardano is the first protocol to incorporate Ouroboros, the ground breaking <a href=\"https://coingecko.com/en?hashing_algorithm=Proof+of+Stake&view=market\">proof of stake algorithm</a>. The IOHK team employed a “first-principles” approach, driven by peer-reviewed academic research to build Cardano from the ground up.\r\n\r\nThe result of this collaborative effort is the first cryptocurrency to be based in Haskell code, which focuses on industrial strength product that delivers the resilience necessary for mission-critical systems, in this case, securing investment.\r\n\r\nCardano’s multi-layer protocol performs advanced functions, and has a settlement layer that is elegantly linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart contracts and will be programmed to recognize identity, assisting compliance (and allowing blacklisting, for instance).\r\n\r\nThe protocol is geared towards protecting privacy rights of users, while also taking into account the needs of regulators. In doing so, Cardano is the first protocol to balance these requirements in a nuanced and effective way, pioneering a new approach for cryptocurrencies.\r\n\r\nThe system is also designed to allow upgrade through soft forks, enabling it to adapt to changing needs and evolve quickly, when required. A treasury system is also being installed that will ensure the sustainability of the protocol.\r\n\r\nCardano is built in the spirit of collaboration by being completely open source and patent-free. Engineered for efficiency and scalability, the Cardano ecosystem will develop into the most complete cryptocurrency ever constructed.\r\n\r\n<b>Conceptual Innovation</b>\r\n\r\ni. Privacy and regulation\r\nThe original <a href=\"https://coingecko.com/en/coins/bitcoin\">Bitcoin</a> blockchain was meant to be a way for individuals to transact directly and anonymously with each other outside the control of banks and governments. This guarantees privacy in financial dealings, a fundamental individual right, but full anonymity can be counterproductive. Today most blockchain projects look to further either the aims of privacy or of regulation. To be effective globally, we think our blockchain must ‘square the circle’ by finding the right mix of individual privacy protection and provision for regulatory control.\r\n\r\nii. Governance\r\nPublic, decentralized blockchain projects rely on crowd-based governance models. This allows for democratic control of the network by its participants, which is essential to building truly decentralised economies. However, if they are not carefully designed, such governance can go awry. Both the Bitcoin and <a href=\"https://coingecko.com/en/coins/ethereum\">Ethereum</a> communities have experienced devastating schisms on the question of how to upgrade their networks – in Ethereum's case already causing a split. The Cardano blockchain has an airtight governance model that allow the community to democratically take clear and binding decisions.\r\n\r\niii. Funding\r\nThe Cardano blockchain has sophisticated maintenance and development needs and is able to adequately fund itself, both in terms of running costs and new investment.\r\n\r\nThe Token: ADA Voucher\r\nEvery blockchain project has a token of value commonly referred to as a cryptocurrency. Ada is the cryptocurrency on the Cardano blockchain. With Ada, holders can send value between friends, pay for a good or service, deposit funds on an exchange, or enter an application. To perform a transfer on the settlement layer requires you own Ada, or acquire Ada through an exchange. It will also be the native token to be used in applications built on the computation layer.\r\n\r\nThe Wallet: <a href=\"https://daedaluswallet.io/\">Daedalus</a>\r\nEach cryptocurrency requires a “wallet” to store Ada. Typically this wallet is a software application that can be installed on any computer or smartphone. Daedalus is a highly-engineered wallet with advanced security features that was developed by <a href=\"https://iohk.io/\">IOHK</a> specifically for the Cardano blockchain and protects your assets with the most advanced cryptography. In the future, Daedalus will not only support Ada, but other cryptocurrencies such as Bitcoin, <a href=\"https://coingecko.com/en/coins/ethereum-classic\">Ethereum Classic</a> and many more.\r\n\r\nThe <a href=\"https://cardanofoundation.org/en/\">Cardano Foundation</a>\r\nThe Cardano Foundation’s core mission is to standardise, protect and promote the Cardano Protocol technology. The Cardano Foundation acts as a supervisory and educational body for Cardano. Our mission is to:\r\n\r\n1. Standardise, protect and promote the Cardano Protocol and its applications\r\n2. Be a community hub offering authoritative, timely information about the technology and Cardano’s wide-ranging potential\r\n3. Liaise and influence government and regulatory bodies, form strategic partnerships with businesses, enterprises and other open source projects and aid the creation of formal software standards for Cardano, a crucial feature for its long term success and critical in adoption and government engagement\r\n\r\nAreas of Focus:\r\n1. Cardano Protocol - We function as an objective standards body for the Cardano protocol as it evolves over time.\r\n2. Cardano community - We support, grow and help educate the Cardano blockchain community.\r\n3. Cardano ecosystem - We work to expand and protect the Cardano ecosystem. This includes promoting Cardano as a platform for commercial entities and serving as an objective organization for enterprises interested in joining Cardano.\r\n4. Serving the wider blockchain community - We aim to influence and progress the emerging commercial and legislative landscape for blockchain technology and cryptocurrencies in general. We proactively approach government and regulatory bodies and form strategic partnerships with businesses, enterprises and other open-source projects.\r\n\r\nIOHK\r\nFounded in 2015 by <a href=\"https://iohk.io/team/charles-hoskinson/\">Charles Hoskinson</a> and <a href=\"https://iohk.io/team/jeremy-wood/\">Jeremy Wood</a>, IOHK is a world-class engineering and technology company committed to using peer-to-peer innovations to provide financial services to three billion people that don’t have them. The group is contracted to design, build, and maintain Cardano through to 2020.\r\n\r\nEmurgo\r\n<a href=\"https://emurgo.io/\">Emurgo</a> is the venture building entity in the Cardano ecosystem, its goal is to aid, integrate, and foster Cardano blockchain applications.\r\n\r\nEmurgo captures the transformative power that blockchain technology brings to the developing world. Decentralized applications built on Cardano technology, funded and supported by Emurgo, will have the potential to build groundbreaking applications.\r\n\r\nProject Road Map\r\nIOHK has now released the settlement layer. This means you can transact, trade, and purchase Ada tokens fully independently of the computation layer. The goal for the computation layer is to have a beta released by the first quarter of 2018. Once both settlement and computation layers are live, users will be able to setup a custom environment to build decentralised applications on the Cardano stack.\r\nIn 2019, IOHK intends to work on Cardano’s long-term scalability and augment its capabilities. As developers, IOHK has been contracted through 2020 to make sure Cardano is being adequately maintained. The goal is to create a sustainable ecosystem that is capable of funding and supporting itself.",
        pic: "@/assets/logos/ADA.svg",
      },
      {
        name: "Cardano Medium",
        feed: "https://medium.com/feed/cardanorss",
        site: "https://medium.com/cardanorss",
        about: "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. Cardano is developing a <a href=\"https://coingecko.com/en?category_id=29\">smart contract platform</a> which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.\r\n\r\nThe Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial software standards in the industry. \r\n\r\nCardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a visionary treasury system.\r\n\r\n<b>Technological Innovation</b>\r\nCardano is the first protocol to incorporate Ouroboros, the ground breaking <a href=\"https://coingecko.com/en?hashing_algorithm=Proof+of+Stake&view=market\">proof of stake algorithm</a>. The IOHK team employed a “first-principles” approach, driven by peer-reviewed academic research to build Cardano from the ground up.\r\n\r\nThe result of this collaborative effort is the first cryptocurrency to be based in Haskell code, which focuses on industrial strength product that delivers the resilience necessary for mission-critical systems, in this case, securing investment.\r\n\r\nCardano’s multi-layer protocol performs advanced functions, and has a settlement layer that is elegantly linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart contracts and will be programmed to recognize identity, assisting compliance (and allowing blacklisting, for instance).\r\n\r\nThe protocol is geared towards protecting privacy rights of users, while also taking into account the needs of regulators. In doing so, Cardano is the first protocol to balance these requirements in a nuanced and effective way, pioneering a new approach for cryptocurrencies.\r\n\r\nThe system is also designed to allow upgrade through soft forks, enabling it to adapt to changing needs and evolve quickly, when required. A treasury system is also being installed that will ensure the sustainability of the protocol.\r\n\r\nCardano is built in the spirit of collaboration by being completely open source and patent-free. Engineered for efficiency and scalability, the Cardano ecosystem will develop into the most complete cryptocurrency ever constructed.\r\n\r\n<b>Conceptual Innovation</b>\r\n\r\ni. Privacy and regulation\r\nThe original <a href=\"https://coingecko.com/en/coins/bitcoin\">Bitcoin</a> blockchain was meant to be a way for individuals to transact directly and anonymously with each other outside the control of banks and governments. This guarantees privacy in financial dealings, a fundamental individual right, but full anonymity can be counterproductive. Today most blockchain projects look to further either the aims of privacy or of regulation. To be effective globally, we think our blockchain must ‘square the circle’ by finding the right mix of individual privacy protection and provision for regulatory control.\r\n\r\nii. Governance\r\nPublic, decentralized blockchain projects rely on crowd-based governance models. This allows for democratic control of the network by its participants, which is essential to building truly decentralised economies. However, if they are not carefully designed, such governance can go awry. Both the Bitcoin and <a href=\"https://coingecko.com/en/coins/ethereum\">Ethereum</a> communities have experienced devastating schisms on the question of how to upgrade their networks – in Ethereum's case already causing a split. The Cardano blockchain has an airtight governance model that allow the community to democratically take clear and binding decisions.\r\n\r\niii. Funding\r\nThe Cardano blockchain has sophisticated maintenance and development needs and is able to adequately fund itself, both in terms of running costs and new investment.\r\n\r\nThe Token: ADA Voucher\r\nEvery blockchain project has a token of value commonly referred to as a cryptocurrency. Ada is the cryptocurrency on the Cardano blockchain. With Ada, holders can send value between friends, pay for a good or service, deposit funds on an exchange, or enter an application. To perform a transfer on the settlement layer requires you own Ada, or acquire Ada through an exchange. It will also be the native token to be used in applications built on the computation layer.\r\n\r\nThe Wallet: <a href=\"https://daedaluswallet.io/\">Daedalus</a>\r\nEach cryptocurrency requires a “wallet” to store Ada. Typically this wallet is a software application that can be installed on any computer or smartphone. Daedalus is a highly-engineered wallet with advanced security features that was developed by <a href=\"https://iohk.io/\">IOHK</a> specifically for the Cardano blockchain and protects your assets with the most advanced cryptography. In the future, Daedalus will not only support Ada, but other cryptocurrencies such as Bitcoin, <a href=\"https://coingecko.com/en/coins/ethereum-classic\">Ethereum Classic</a> and many more.\r\n\r\nThe <a href=\"https://cardanofoundation.org/en/\">Cardano Foundation</a>\r\nThe Cardano Foundation’s core mission is to standardise, protect and promote the Cardano Protocol technology. The Cardano Foundation acts as a supervisory and educational body for Cardano. Our mission is to:\r\n\r\n1. Standardise, protect and promote the Cardano Protocol and its applications\r\n2. Be a community hub offering authoritative, timely information about the technology and Cardano’s wide-ranging potential\r\n3. Liaise and influence government and regulatory bodies, form strategic partnerships with businesses, enterprises and other open source projects and aid the creation of formal software standards for Cardano, a crucial feature for its long term success and critical in adoption and government engagement\r\n\r\nAreas of Focus:\r\n1. Cardano Protocol - We function as an objective standards body for the Cardano protocol as it evolves over time.\r\n2. Cardano community - We support, grow and help educate the Cardano blockchain community.\r\n3. Cardano ecosystem - We work to expand and protect the Cardano ecosystem. This includes promoting Cardano as a platform for commercial entities and serving as an objective organization for enterprises interested in joining Cardano.\r\n4. Serving the wider blockchain community - We aim to influence and progress the emerging commercial and legislative landscape for blockchain technology and cryptocurrencies in general. We proactively approach government and regulatory bodies and form strategic partnerships with businesses, enterprises and other open-source projects.\r\n\r\nIOHK\r\nFounded in 2015 by <a href=\"https://iohk.io/team/charles-hoskinson/\">Charles Hoskinson</a> and <a href=\"https://iohk.io/team/jeremy-wood/\">Jeremy Wood</a>, IOHK is a world-class engineering and technology company committed to using peer-to-peer innovations to provide financial services to three billion people that don’t have them. The group is contracted to design, build, and maintain Cardano through to 2020.\r\n\r\nEmurgo\r\n<a href=\"https://emurgo.io/\">Emurgo</a> is the venture building entity in the Cardano ecosystem, its goal is to aid, integrate, and foster Cardano blockchain applications.\r\n\r\nEmurgo captures the transformative power that blockchain technology brings to the developing world. Decentralized applications built on Cardano technology, funded and supported by Emurgo, will have the potential to build groundbreaking applications.\r\n\r\nProject Road Map\r\nIOHK has now released the settlement layer. This means you can transact, trade, and purchase Ada tokens fully independently of the computation layer. The goal for the computation layer is to have a beta released by the first quarter of 2018. Once both settlement and computation layers are live, users will be able to setup a custom environment to build decentralised applications on the Cardano stack.\r\nIn 2019, IOHK intends to work on Cardano’s long-term scalability and augment its capabilities. As developers, IOHK has been contracted through 2020 to make sure Cardano is being adequately maintained. The goal is to create a sustainable ecosystem that is capable of funding and supporting itself.",
        pic: "@/assets/logos/ADA.svg",
      },
    ],
    pancakeswap: [
      {
        name: "PancakeSwap Reddit",
        feed: "https://www.reddit.com/r/pancakeswap/.rss",
        site: "https://www.reddit.com/r/pancakeswap",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "@/assets/logos/CAKE.svg",
      },
      {
        name: "PancakeSwap Medium",
        feed: "https://medium.com/feed/@pancakeswap",
        site: "https://pancakeswap.medium.com",
        about: "PancakeSwap is a Binance Smart Chain-based DEX launched by anonymous devs with a penchant for breakfast foods and rabbits.",
        pic: "@/assets/logos/CAKE.svg",
      },
    ],
    matic: [
      {
        name: "Polygon Reddit",
        feed: "https://www.reddit.com/r/maticnetwork/.rss",
        site: "https://www.reddit.com/r/maticnetwork",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "@/assets/logos/MATIC.svg",
      },
      {
        name: "Polygon Medium",
        feed: "https://medium.com/feed/matic-network",
        site: "https://medium.com/matic-network",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "@/assets/logos/MATIC.svg",
      },
    ],
    bscbinance: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BNB.svg",
      },
    ],
    arnx: [
      {
        name: "Aeron Blog",
        feed: "https://medium.com/feed/@aeronaero",
        site: "https://medium.com/@aeronaero",
        about: "Blockchain solutions for Aviation safety ",
        pic: "@/assets/logos/ARN.svg",
      },
    ],
    bsceth: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/ETH.svg",
      },
    ],
    bscusdt: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    bscwbnb: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BNB.svg",
      },
    ],
    xcm: [
      {
        name: "CoinMetro Reddit",
        feed: "https://www.reddit.com/r/coinmetro/.rss",
        site: "https://www.reddit.com/r/coinmetro",
        about: "CoinMetro describes itself as a fully-rounded FinTech ecosystem that was designed to simplify access to the digital asset economy. XCM is the native asset of the platform.",
        pic: "@/assets/logos/XCM.svg",
      },
    ],
    fluxkda: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    gatetoken: [
      {
        name: "GateToken Blog",
        feed: "https://medium.com/feed/@gatechain",
        site: "https://medium.com/@gatechain",
        about: "GateChain is a next-generation public blockchain, focused on onchain asset safety and decentralized trading.",
        pic: "@/assets/logos/GT.svg",
      },
    ],
    knc: [
      {
        name: "Kyber Blog",
        feed: "https://blog.kyber.network/feed",
        site: "https://blog.kyber.network",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "@/assets/logos/KNC.svg",
      },
      {
        name: "Kyber Reddit",
        feed: "https://www.reddit.com/r/kybernetwork/.rss",
        site: "https://www.reddit.com/r/kybernetwork",
        about: "Kyber’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.",
        pic: "@/assets/logos/KNC.svg",
      },
    ],
    pre: [
      {
        name: "Presearch Blog",
        feed: "https://medium.com/feed/presearch",
        site: "https://presearch.medium.com/feed",
        about: "Presearch aims to build a next-generation search engine that is powered by its community.",
        pic: "@/assets/logos/PRE.svg",
      },
      {
        name: "Presearch Reddit",
        feed: "https://www.reddit.com/r/PresearchCommunity/.rss",
        site: "https://www.reddit.com/r/PresearchCommunity",
        about: "Presearch aims to build a next-generation search engine that is powered by its community.",
        pic: "@/assets/logos/PRE.svg",
      },
    ],
    solana: [
      {
        name: "Solana Blog",
        feed: "https://medium.com/feed/solana-labs",
        site: "https://medium.com/solana-labs",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "@/assets/logos/SOL.svg",
      },
      {
        name: "Solana Reddit",
        feed: "https://www.reddit.com/r/solana/.rss",
        site: "https://www.reddit.com/r/solana",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "@/assets/logos/SOL.svg",
      },
    ],
    wrappedsolana: [
      {
        name: "Solana Blog",
        feed: "https://medium.com/feed/solana-labs",
        site: "https://medium.com/solana-labs",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "@/assets/logos/WSOL.svg",
      },
      {
        name: "Solana Reddit",
        feed: "https://www.reddit.com/r/solana/.rss",
        site: "https://www.reddit.com/r/solana",
        about: "Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.",
        pic: "@/assets/logos/WSOL.svg",
      },
    ],
    serum: [
      {
        name: "Serum Blog",
        feed: "https://projectserum.medium.com/feed",
        site: "https://projectserum.medium.com",
        about: "Serum is a decentralized exchange (DEX) and an ecosystem that brings high speed and low transaction costs to decentralized finance (DeFi).",
        pic: "@/assets/logos/SRM.svg",
      },
    ],
    megaserum: [
      {
        name: "Serum Blog",
        feed: "https://projectserum.medium.com/feed",
        site: "https://projectserum.medium.com",
        about: "Serum is a decentralized exchange (DEX) and an ecosystem that brings high speed and low transaction costs to decentralized finance (DeFi).",
        pic: "@/assets/logos/MSRM.svg",
      },
    ],
    cope: [
    ],
    bonfida: [
      {
        name: "Bonfida Blog",
        feed: "https://bonfida.medium.com/feed",
        site: "https://bonfida.medium.com",
        about: "Bonfida bridges the gap between Serum, Solana, and the user.",
        pic: "@/assets/logos/FIDA.svg",
      },
    ],
    fttsol: [
      {
        name: "FTX Token Medium",
        feed: "https://medium.com/feed/@ftx",
        site: "https://medium.com/@ftx",
        about: "FTX is owned by FTX Trading LTD, a company incorporated in Antigua and Barbuda. FTX was incubated by Alameda Research, a cryptocurrency liquidity provider. ",
        pic: "@/assets/logos/FTT.svg",
      },
    ],
    kinsol: [
      {
        name: "Kin Blog",
        feed: "https://medium.com/feed/kinfoundation",
        site: "https://medium.com/kinfoundation",
        about: "The Kin cryptocurrency is used as money within a digital ecosystem of consumer applications and services.",
        pic: "@/assets/logos/KIN.svg",
      },
      {
        name: "Kin Reddit",
        feed: "https://www.reddit.com/r/KinFoundation/.rss",
        site: "https://www.reddit.com/r/KinFoundation",
        about: "The Kin cryptocurrency is used as money within a digital ecosystem of consumer applications and services.",
        pic: "@/assets/logos/KIN.svg",
      },
    ],
    maps: [
    ],
    media: [
      {
        name: "Media Network Blog",
        feed: "https://mediafoundation.medium.com/feed",
        site: "https://mediafoundation.medium.com",
        about: "Media Network is a new protocol that bypasses traditional CDN providers’ centralized approach for a self-governed and open source solution where everyone can participate.",
        pic: "@/assets/logos/MEDIA.svg",
      },
    ],
    oxy: [
    ],
    ray: [
      {
        name: "Raydium Blog",
        feed: "https://raydium.medium.com/feed",
        site: "https://raydium.medium.com",
        about: "Raydium is an automated market maker (AMM) and liquidity provider built on the Solana blockchain for the Serum decentralized exchange (DEX).",
        pic: "@/assets/logos/RAY.svg",
      },
    ],
    step: [
      {
        name: "Step Finance Blog",
        feed: "https://stepfinance.medium.com/feed",
        site: "https://stepfinance.medium.com",
        about: "Step Finance is the front page of Solana. Visualise, Analyse, Execute and Aggregate transactions across all Solana contracts in one place.",
        pic: "@/assets/logos/STEP.svg",
      },
    ],
    usdcsol: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    usdtsol: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    ropesol: [
      {
        name: "Rope Reddit",
        feed: "https://www.reddit.com/r/RopeSolana/.rss",
        site: "https://www.reddit.com/r/RopeSolana",
        about: "ROPE, a full-scale decentralized ecosystem that brings the well known 'market volatility index' to the crypto market.",
        pic: "@/assets/logos/ROPE.svg",
      },
    ],
    fluxeth: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    fluxbsc: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    mersol: [
      {
        name: "Mercurial Blog",
        feed: "https://mercurialfi.medium.com/feed",
        site: "https://mercurialfi.medium.com",
        about: "Mercurial is stableswaps on steroids.",
        pic: "@/assets/logos/MER.svg",
      },
    ],
    tulipsol: [
      {
        name: "SolFarm Blog",
        feed: "https://solfarm.medium.com/feed",
        site: "https://solfarm.medium.com",
        about: "SolFarm (TULIP) is the first yield aggregation platform built on Solana with auto-compounding vault strategies.",
        pic: "@/assets/logos/TULIP.svg",
      },
    ],
    alephsol: [
      {
        name: "aleph.im Blog",
        feed: "https://medium.com/feed/aleph-im",
        site: "https://medium.com/aleph-im",
        about: "aleph.im is a decentralized cloud storage, database and computing platform, that is compatible with blockchains and speaks their languages.",
        pic: "@/assets/logos/ALEPH.svg",
      },
      {
        name: "aleph.im Reddit",
        feed: "https://www.reddit.com/r/Aleph_im/.rss",
        site: "https://www.reddit.com/r/Aleph_im",
        about: "aleph.im is a decentralized cloud storage, database and computing platform, that is compatible with blockchains and speaks their languages.",
        pic: "@/assets/logos/ALEPH.svg",
      },
    ],
    busdbsc: [
      {
        name: "Binance Blog",
        feed: "https://medium.com/feed/@binance",
        site: "https://medium.com/@binance",
        about: "Binance Exchange provides cryptocurrency trading for fintech and blockchain enthusiasts globally, with multilingual support over a variety of services.",
        pic: "@/assets/logos/BUSD.svg",
      },
    ],
    suntrcb: [
    ],
    safemoonerc: [
      {
        name: "SafeMoon Reddit",
        feed: "https://www.reddit.com/r/SafeMoon/.rss",
        site: "https://www.reddit.com/r/SafeMoon",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "@/assets/logos/SAFEMOON.svg",
      },
    ],
    safemoonbep: [
      {
        name: "SafeMoon Reddit",
        feed: "https://www.reddit.com/r/SafeMoon/.rss",
        site: "https://www.reddit.com/r/SafeMoon",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "@/assets/logos/SAFEMOON.svg",
      },
    ],
    huplife: [
      {
        name: "HUP.LIFE Reddit",
        feed: "https://www.reddit.com/r/huplife/.rss",
        site: "https://www.reddit.com/r/huplife",
        about: "HUP solves the NFT Permanence Problem and hosts metadata and multimedia files through a Decentralized, Resilient File Hosting Protocol - through our partnerships with ETHO Protocol and Flux.",
        pic: "@/assets/logos/HUP.svg",
      },
      {
        name: "HUP.LIFE Blog",
        feed: "https://huplife.medium.com/feed",
        site: "https://huplife.medium.com",
        about: "HUP solves the NFT Permanence Problem and hosts metadata and multimedia files through a Decentralized, Resilient File Hosting Protocol - through our partnerships with ETHO Protocol and Flux.",
        pic: "@/assets/logos/HUP.svg",
      },
    ],
    raptoreum: [
      {
        name: "Raptoreum Reddit",
        feed: "https://www.reddit.com/r/raptoreum/.rss",
        site: "https://www.reddit.com/r/raptoreum",
        about: "A secure and ASIC/FPGA resistant Proof or Work cryptocurrency that allows for asset creation, futures, and smart contracts, while remaining immune to 51% double spend attacks.",
        pic: "@/assets/logos/RTM.svg",
      },
    ],
    vertcoin: [
      {
        name: "Vertcoin Reddit",
        feed: "https://www.reddit.com/r/vertcoin/.rss",
        site: "https://www.reddit.com/r/vertcoin",
        about: "Vertcoin (VTC) is an ASIC-resistant P2P Litecoin fork that uses PoW to reach consensus.",
        pic: "@/assets/logos/VTC.svg",
      },
      {
        name: "Vertcoin Blog",
        feed: "https://medium.com/feed/vertcoin-blog",
        site: "https://medium.com/vertcoin-blog",
        about: "Vertcoin (VTC) is an ASIC-resistant P2P Litecoin fork that uses PoW to reach consensus.",
        pic: "@/assets/logos/VTC.svg",
      },
    ],
    btcbbsc: [
      {
        name: "Bitcoin News",
        feed: "https://www.reddit.com/r/bitcoin/.rss",
        site: "https://www.reddit.com/r/bitcoin",
        about: "Subreddit for the discussion of Bitcoin 'The official source for CryptoCurrency News, Discussion & Analysis.'",
        pic: "@/assets/logos/BTCB.svg",
      },
    ],
    axserc: [
      {
        name: "Axie Infinity Reddit",
        feed: "https://www.reddit.com/r/AxieInfinity/.rss",
        site: "https://www.reddit.com/r/AxieInfinity",
        about: "Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated by its players.",
        pic: "@/assets/logos/AXS.svg",
      },
      {
        name: "Axie Infinity Blog",
        feed: "https://axieinfinity.medium.com/feed",
        site: "https://axieinfinity.medium.com",
        about: "Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated by its players.",
        pic: "@/assets/logos/AXS.svg",
      },
    ],
    bttbsc: [
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "@/assets/logos/BTT.svg",
      },
    ],
    steth: [
      {
        name: "stETH Reddit",
        feed: "https://www.reddit.com/r/lidofinance/.rss",
        site: "https://www.reddit.com/r/lidofinance",
        about: "stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. "
          + "stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.",
        pic: "@/assets/logos/STETH.svg",
      },
    ],
    amp: [
      {
        name: "Amp Medium",
        feed: "https://medium.com/feed/amptoken",
        site: "https://medium.com/amptoken",
        about: "Amp is a digital collateral token designed to facilitate fast and efficient value transfer, especially for use cases that prioritize security and irreversibility. "
          + "Using Amp as collateral, individuals and entities benefit from instant, verifiable assurances for any kind of asset exchange.",
        pic: "@/assets/logos/AMP.svg",
      },
    ],
    telcoin: [
      {
        name: "Telcoin Medium",
        feed: "https://medium.com/feed/@telcoin",
        site: "https://medium.com/@telcoin",
        about: "A cryptocurrency distributed by your mobile operator and accepted everywhere.",
        pic: "@/assets/logos/TELCOIN.svg",
      },
    ],
    harmonyone: [
      {
        name: "HarmonyOne Reddit",
        feed: "https://www.reddit.com/r/harmony_one/.rss",
        site: "https://www.reddit.com/r/harmony_one",
        about: "A project to scale trust for billions of people and create a radically fair economy.",
        pic: "@/assets/logos/HARMONYONE.svg",
      },
      {
        name: "HarmonyOne Medium",
        feed: "https://medium.com/feed/harmony-one",
        site: "https://medium.com/harmony-one",
        about: "A project to scale trust for billions of people and create a radically fair economy.",
        pic: "@/assets/logos/HARMONYONE.svg",
      },
    ],
    bscada: [
      {
        name: "Cardano Reddit",
        feed: "https://reddit.com/r/cardano/.rss",
        site: "https://reddit.com/r/cardano",
        about: "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.",
        pic: "@/assets/logos/ADA.svg",
      },
      {
        name: "Cardano Medium",
        feed: "https://medium.com/feed/cardanorss",
        site: "https://medium.com/feed/cardanorss",
        about: "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.",
        pic: "@/assets/logos/ADA.svg",
      },
    ],
    bscxrp: [
      {
        name: "Ripple Reddit",
        feed: "https://reddit.com/r/ripple/.rss",
        site: "https://reddit.com/r/ripple",
        about: "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        pic: "@/assets/logos/XRP.svg",
      },
      {
        name: "XRP Reddit",
        feed: "https://www.reddit.com/r/Ripple/.rss",
        site: "https://www.reddit.com/r/Ripple",
        about: "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        pic: "@/assets/logos/XRP.svg",
      },
    ],
    bscdoge: [
      {
        name: "Dogecoin Reddit",
        feed: "https://www.reddit.com/r/dogecoin/.rss",
        site: "https://www.reddit.com/r/dogecoin",
        about: "Dogecoin (DOGE) is based on the popular \"doge\" Internet meme and features a Shiba Inu on its logo. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency. that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme.",
        pic: "@/assets/logos/DOGE.svg",
      },
    ],
    bscusdc: [
      {
        name: "USD Coin Blog",
        feed: "https://www.circle.com/blog/rss.xml",
        site: "https://www.circle.com/blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
      {
        name: "USD Coin Medium",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    bscdot: [
      {
        name: "Polkadot Reddit",
        feed: "https://reddit.com/r/dot/.rss",
        site: "https://reddit.com/r/dot",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "@/assets/logos/DOT.svg",
      },
      {
        name: "Polkadot Medium",
        feed: "https://medium.com/feed/polkadot-network",
        site: "https://medium.com/polkadot-network",
        about: "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby making a wide range of blockchains interoperable with each other.",
        pic: "@/assets/logos/DOT.svg",
      },
    ],
    bscuni: [
      {
        name: "Uniswap Reddit",
        feed: "https://reddit.com/r/UniSwap/.rss",
        site: "https://reddit.com/r/UniSwap",
        about: "Uniswap is an automated liquidity protocol powered by a constant product formula and implemented in a system of non-upgradeable smart contracts on the Ethereum blockchain.",
        pic: "@/assets/logos/UNI.svg",
      },
    ],
    bscbch: [
      {
        name: "Bitcoin Cash Reddit",
        feed: "https://reddit.com/r/Bitcoincash/.rss",
        site: "https://reddit.com/r/Bitcoincash",
        about: "Bitcoin Cash is a fork of Bitcoin. It has bigger blocks.",
        pic: "@/assets/logos/BCH.svg",
      },
      {
        name: "Bitcoin Cash Blog",
        feed: "https://news.bitcoin.com/feed",
        site: "https://news.bitcoin.com",
        about: "Bitcoin Cash is a fork of Bitcoin. It has bigger blocks.",
        pic: "@/assets/logos/BCH.svg",
      },
    ],
    bscltc: [
      {
        name: "Litecoin Foundation Blog",
        feed: "https://blog.litecoin.org/rss",
        site: "https://blog.litecoin.org",
        about: "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities.",
        pic: "@/assets/logos/LTC.svg",
      },
      {
        name: "Litecoin Reddit",
        feed: "https://www.reddit.com/r/litecoin/.rss",
        site: "https://www.reddit.com/r/litecoin",
        about: "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized without any central authorities.",
        pic: "@/assets/logos/LTC.svg",
      },
    ],
    bsclink: [
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/rss",
        site: "https://blog.chain.link",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "ChainLink Reddit",
        feed: "https://reddit.com/r/chainlink/.rss",
        site: "https://reddit.com/r/chainlink",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
    ],
    bscetc: [
      {
        name: "Ethereum Classic Reddit",
        feed: "https://www.reddit.com/r/EthereumClassic/.rss",
        site: "https://www.reddit.com/r/EthereumClassic",
        about: "Ethereum Classic (ETC) is a hard fork of Ethereum (ETH) that launched in July 2016. Its main function is as a smart contract network, with the ability to host and support decentralized applications (DApps). Its native is ETC.",
        pic: "@/assets/logos/ETC.svg",
      },
    ],
    bscavax: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
    ],
    bscdai: [
      {
        name: "Dai Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "Dai is a stable cryptocurrency supported by Maker (MKR). To ensure price stability, Dai minimizes the price volatility against the US dollar, through an incentive structure for its participants.",
        pic: "@/assets/logos/DAI.svg",
      },
      {
        name: "Dai Blog",
        feed: "https://blog.makerdao.com/feed",
        site: "https://blog.makerdao.com",
        about: "Dai is a stable cryptocurrency supported by Maker (MKR). To ensure price stability, Dai minimizes the price volatility against the US dollar, through an incentive structure for its participants.",
        pic: "@/assets/logos/DAI.svg",
      },
    ],
    bsctrx: [
      {
        name: "TRON Reddit",
        feed: "https://reddit.com/r/Tronix/.rss",
        site: "https://reddit.com/r/Tronix",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "@/assets/logos/TRX.svg",
      },
      {
        name: "TRON Medium",
        feed: "https://medium.com/feed/tron-foundation",
        site: "https://medium.com/tron-foundation",
        about: "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.",
        pic: "@/assets/logos/TRX.svg",
      },
    ],
    bsceos: [
      {
        name: "EOS Reddit",
        feed: "https://reddit.com/r/EOS/.rss",
        site: "https://reddit.com/r/EOS",
        about: "EOS is a cryptocurrency and blockchain that operates as a smart contract platform for the deployment of decentralized applications and decentralized autonomous corporations.",
        pic: "@/assets/logos/EOS.svg",
      },
    ],
    bscatom: [
      {
        name: "Cosmos Reddit",
        feed: "https://reddit.com/r/tezos/.rss",
        site: "https://reddit.com/r/tezos",
        about: "Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus.",
        pic: "@/assets/logos/ATOM.svg",
      },
    ],
    bscaxs: [
      {
        name: "Axie Infinity Shard Reddit",
        feed: "https://www.reddit.com/r/AxieInfinity/.rss",
        site: "https://www.reddit.com/r/AxieInfinity",
        about: "Axie Infinity is a Pokemon-inspired digital pet universe where anyone can earns through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).",
        pic: "@/assets/logos/AXS.svg",
      },
      {
        name: "Axie Infinity Shard Medium",
        feed: "https://axieinfinity.medium.com/feed",
        site: "https://axieinfinity.medium.com",
        about: "Axie Infinity is a Pokemon-inspired digital pet universe where anyone can earns through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).",
        pic: "@/assets/logos/AXS.svg",
      },
    ],
    bscxtz: [
      {
        name: "Tezos Reddit",
        feed: "https://reddit.com/r/tezos/.rss",
        site: "https://reddit.com/r/tezos",
        about: "Tezos is a smart contract platform that uses blockchain voting to be self-governing by its holders. Also, the platform aims to boost the security of smart contracts.",
        pic: "@/assets/logos/XTZ.svg",
      },
    ],
    bscmkr: [
      {
        name: "Maker Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain",
        pic: "@/assets/logos/MKR.svg",
      },
      {
        name: "Maker Blog",
        feed: "https://blog.makerdao.com/feed",
        site: "https://blog.makerdao.com",
        about: "Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain",
        pic: "@/assets/logos/MKR.svg",
      },
    ],
    bscshib: [
      {
        name: "SHIBA INU Medium",
        feed: "https://allhailtheshiba.medium.com/feed",
        site: "https://allhailtheshiba.medium.com",
        about: "SHIBA INU is an experiment in decentralized spontaneous community building.",
        pic: "@/assets/logos/SHIB.svg",
      },
      {
        name: "SHIBA INU Reddit",
        feed: "https://www.reddit.com/r/SHIBArmy/.rss",
        site: "https://www.reddit.com/r/SHIBArmy",
        about: "SHIBA INU is an experiment in decentralized spontaneous community building.",
        pic: "@/assets/logos/SHIB.svg",
      },
    ],
    bsciota: [
      {
        name: "IOTA Reddit",
        feed: "https://reddit.com/r/Iota/.rss",
        site: "https://reddit.com/r/Iota",
        about: "IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It aims to offer greater speeds than conventional blockchains and an ideal footprint for the ever-expanding Internet of Things ecosystem.",
        pic: "@/assets/logos/IOTA.svg",
      },
      {
        name: "IOTA Blog",
        feed: "https://blog.iota.org/rss",
        site: "https://blog.iota.org",
        about: "IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It aims to offer greater speeds than conventional blockchains and an ideal footprint for the ever-expanding Internet of Things ecosystem.",
        pic: "@/assets/logos/IOTA.svg",
      },
    ],
    bsccomp: [
      {
        name: "Compound Coin Medium",
        feed: "https://medium.com/feed/compound-finance",
        site: "https://medium.com/compound-finance",
        about: "Compound (COMP) is an ERC-20 asset that powers the community governance of the Compound protocol; COMP-holders and their delegates debate, propose, and vote on changes to the protocol.",
        pic: "@/assets/logos/COMP.svg",
      },
    ],
    bsczec: [
      {
        name: "Zcash Reddit",
        feed: "https://www.reddit.com/r/zec/.rss",
        site: "https://www.reddit.com/r/zec",
        about: "Zcash (ZEC) is a decentralized and open-source privacy-focused cryptocurrency that enables selective transparency of transactions. Zcash transactions can either be transparent or shielded through a zero-knowledge proof called zk-SNARKs.",
        pic: "@/assets/logos/ZEC.svg",
      },
    ],
    bsctusd: [
      {
        name: "TrueUSD Medium",
        feed: "https://trueusd.medium.com/feed",
        site: "https://trueusd.medium.com",
        about: "TUSD is a regulated, exchange-independent stablecoin backed 1-for-1 with US Dollars.",
        pic: "@/assets/logos/TUSD.svg",
      },
    ],
    bsczil: [
      {
        name: "Zilliqa Reddit",
        feed: "https://reddit.com/r/zilliqa/.rss",
        site: "https://reddit.com/r/zilliqa",
        about: "Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing sharding.",
        pic: "@/assets/logos/ZIL.svg",
      },
      {
        name: "Zilliqa Blog",
        feed: "https://blog.zilliqa.com/feed",
        site: "https://blog.zilliqa.com",
        about: "Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing sharding.",
        pic: "@/assets/logos/ZIL.svg",
      },
    ],
    bscsnx: [
      {
        name: "Synthetix Network Reddit",
        feed: "https://www.reddit.com/r/synthetix_io/.rss",
        site: "https://www.reddit.com/r/synthetix_io",
        about: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets.",
        pic: "@/assets/logos/SNX.svg",
      },
    ],
    bscyfi: [
      {
        name: "yearn.finance Medium",
        feed: "https://medium.com/feed/iearn",
        site: "https://medium.com/iearn",
        about: "Yearn.finance is an aggregator service for decentralized finance (DeFi) investors, using automation to allow them to maximize profits from yield farming.",
        pic: "@/assets/logos/YFI.svg",
      },
    ],
    bscnear: [
      {
        name: "NEAR Protocol Reddit",
        feed: "https://www.reddit.com/r/nearprotocol/.rss",
        site: "https://www.reddit.com/r/nearprotocol",
        about: "NEAR Protocol is a decentralized application platform designed to make apps usable on the web. The network runs on a Proof-of-Stake (PoS) consensus mechanism called Nightshade, which aims to offer scalability and stable fees.",
        pic: "@/assets/logos/NEAR.svg",
      },
    ],
    bscbat: [
      {
        name: "Basic Attention Reddit",
        feed: "https://www.reddit.com/r/BATProject/.rss",
        site: "https://www.reddit.com/r/BATProject",
        about: "The Basic Attention is the new for the digital advertising industry.",
        pic: "@/assets/logos/BAT.svg",
      },
      {
        name: "Basic Attention Medium",
        feed: "https://medium.com/feed/@attentiontoken",
        site: "https://medium.com/@attentiontoken",
        about: "The Basic Attention is the new for the digital advertising industry.",
        pic: "@/assets/logos/BAT.svg",
      },
    ],
    bscftm: [
      {
        name: "Fantom Reddit",
        feed: "https://reddit.com/r/FantomFoundation/.rss",
        site: "https://reddit.com/r/FantomFoundation",
        about: "Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm.",
        pic: "@/assets/logos/FTM.svg",
      },
      {
        name: "Fantom Medium",
        feed: "https://medium.com/feed/fantomfoundation",
        site: "https://medium.com/fantomfoundation",
        about: "Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm.",
        pic: "@/assets/logos/FTM.svg",
      },
    ],
    bscbnt: [
      {
        name: "Bancor Network Reddit",
        feed: "https://www.reddit.com/r/Bancor/.rss",
        site: "https://www.reddit.com/r/Bancor",
        about: "Bancor is an on-chain liquidity protocol that enables constant convertibility betweens. Conversions using Bancor are executed against on-chain liquidity pools using automated market makers to price and process transactions without order books or counterparties.",
        pic: "@/assets/logos/BNT.svg",
      },
      {
        name: "Bancor Network Medium",
        feed: "https://medium.com/feed/@bancor",
        site: "https://medium.com/@bancor",
        about: "Bancor is an on-chain liquidity protocol that enables constant convertibility betweens. Conversions using Bancor are executed against on-chain liquidity pools using automated market makers to price and process transactions without order books or counterparties.",
        pic: "@/assets/logos/BNT.svg",
      },
    ],
    bscpax: [
      {
        name: "Paxos Standard Blog",
        feed: "https://www.paxos.com/feed",
        site: "https://www.paxos.com",
        about: "Paxos Standard (PAX) is a stablecoin that allows users to exchange US dollars for Paxos Standards to 'transact at the speed of the internet'.",
        pic: "@/assets/logos/PAX.svg",
      },
      {
        name: "Paxos Standard Medium",
        feed: "https://medium.com/feed/@PaxosStandard",
        site: "https://medium.com/@PaxosStandard",
        about: "Paxos Standard (PAX) is a stablecoin that allows users to exchange US dollars for Paxos Standards to 'transact at the speed of the internet'.",
        pic: "@/assets/logos/PAX.svg",
      },
    ],
    bscont: [
      {
        name: "Ontology Medium",
        feed: "https://medium.com/feed/ontologynetwork",
        site: "https://medium.com/ontologynetwork",
        about: "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform that include a series of complete distributed ledgers and smart contract systems.",
        pic: "@/assets/logos/ONT.svg",
      },
      {
        name: "Ontology Reddit",
        feed: "https://reddit.com/r/OntologyNetwork/.rss",
        site: "https://reddit.com/r/OntologyNetwork",
        about: "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform that include a series of complete distributed ledgers and smart contract systems.",
        pic: "@/assets/logos/ONT.svg",
      },
    ],
    bsccnineeight: [
      {
        name: "Coin98 Medium",
        feed: "https://blog.coin98.com/rss",
        site: "https://blog.coin98.com",
        about: "Coin98 enables value transfer as easily as using the Internet by the innovation of Multi-chain Engine, Fully Automatic Liquidity and Space Gate, all in one Super Liquidity Aggregator.",
        pic: "@/assets/logos/C98.svg",
      },
    ],
    bscankr: [
      {
        name: "Ankr Medium",
        feed: "https://medium.com/feed/ankr-network",
        site: "https://medium.com/ankr-network",
        about: "Web3 Infrastructure for All",
        pic: "@/assets/logos/ANKR.svg",
      },
    ],
    bscsxp: [
      {
        name: "Swipe Medium",
        feed: "https://medium.com/feed/swipe",
        site: "https://medium.com/swipe",
        about: "Swipe is a cryptocurrency wallet and debit card that enables users to spend their cryptocurrencies over the world.",
        pic: "@/assets/logos/SXP.svg",
      },
    ],
    bsciotx: [
      {
        name: "IoTeX Network Reddit",
        feed: "https://www.reddit.com/r/IoTeX/.rss",
        site: "https://www.reddit.com/r/IoTeX",
        about: "Building the Internet of Trusted Things -- Blockchain, IoT, & Privacy.",
        pic: "@/assets/logos/IOTX.svg",
      },
      {
        name: "IoTeX Network Medium",
        feed: "https://medium.com/feed/iotex",
        site: "https://medium.com/iotex",
        about: "Building the Internet of Trusted Things -- Blockchain, IoT, & Privacy.",
        pic: "@/assets/logos/IOTX.svg",
      },
    ],
    bscwrx: [
      {
        name: "wazirx Blog",
        feed: "https://wazirx.com/blog/rss",
        site: "https://wazirx.com/blog",
        about: "WazirX is a India's cryptocurrency exchange with trading interface and features to buy, sell and trade cryptocurrencies.",
        pic: "@/assets/logos/WRX.svg",
      },
      {
        name: "wazirx Medium",
        feed: "https://medium.com/feed/@wazirx",
        site: "https://medium.com/@wazirx",
        about: "WazirX is a India's cryptocurrency exchange with trading interface and features to buy, sell and trade cryptocurrencies.",
        pic: "@/assets/logos/WRX.svg",
      },
    ],
    bscinch: [
      {
        name: "1INCH Reddit",
        feed: "https://reddit.com/r/1inch_exchange/.rss",
        site: "https://reddit.com/r/1inch_exchange",
        about: "1inch is a decentralized exchange aggregator that sources liquidity from various exchanges and is capable of splitting a single trade transaction across multiple DEXs. Smart contract technology empowers this aggregator enabling users to optimize and customize their trades.",
        pic: "@/assets/logos/1INCH.svg",
      },
      {
        name: "1INCH Medium",
        feed: "https://medium.com/feed/1inch-exchange.medium.com",
        site: "https://1inch-exchange.medium.com",
        about: "1inch is a decentralized exchange aggregator that sources liquidity from various exchanges and is capable of splitting a single trade transaction across multiple DEXs. Smart contract technology empowers this aggregator enabling users to optimize and customize their trades.",
        pic: "@/assets/logos/1INCH.svg",
      },
    ],
    bscbake: [
      {
        name: "BakeryToken Medium",
        feed: "https://medium.com/feed/@BakerySwap",
        site: "https://medium.com/@BakerySwap",
        about: "An AMM Dex on Binance Smart Chain.",
        pic: "@/assets/logos/BAKE.svg",
      },
    ],
    bscalpha: [
      {
        name: "AlphaToken Blog",
        feed: "https://blog.alphafinance.io/rss",
        site: "https://blog.alphafinance.io",
        about: "Alpha Finance Lab is an ecosystem of DeFi products and focused on building an ecosystem of automated yield-maximizing Alpha products that interoperate to bring optimal alpha to users on a cross-chain level.",
        pic: "@/assets/logos/ALPHA.svg",
      },
    ],
    waveseth: [
      {
        name: "Waves Reddit",
        feed: "https://reddit.com/r/Wavesplatform/.rss",
        site: "https://reddit.com/r/Wavesplatform",
        about: "WAVES is the core token of the Waves blockchain, an open protocol, and development toolset for Web 3.0 applications and decentralized solutions, aiming to raise security, reliability and speed of IT systems. "
          + "It enables anyone to build their apps, fostering mass adoption of blockchain.",
        pic: "@/assets/logos/WAVES.svg",
      },
      {
        name: "Waves Medium",
        feed: "https://medium.com/feed/wavesprotocol",
        site: "https://medium.com/wavesprotocol",
        about: "WAVES is the core token of the Waves blockchain, an open protocol, and development toolset for Web 3.0 applications and decentralized solutions, aiming to raise security, reliability and speed of IT systems. "
          + "It enables anyone to build their apps, fostering mass adoption of blockchain.",
        pic: "@/assets/logos/WAVES.svg",
      },
    ],
    shibeth: [
      {
        name: "SHIBA INU Reddit",
        feed: "https://reddit.com/r/SHIBArmy/.rss",
        site: "https://reddit.com/r/SHIBArmy",
        about: "SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.",
        pic: "@/assets/logos/SHIB.svg",
      },
    ],
    perpeth: [
      {
        name: "Perpetual Protocol Medium",
        feed: "https://medium.com/feed/@perpetualprotocol",
        site: "https://medium.com/@perpetualprotocol",
        about: "Perpetual Protocol is composed of two parts: Uniswap-inspired virtual AMMs backed by fully collateralized vaults and a built-in staking pool that provide a backstop for each virtual market.",
        pic: "@/assets/logos/PERP.svg",
      },
    ],
    audioeth: [
      {
        name: "Audius Medium",
        feed: "https://audiusproject.medium.com/feed",
        site: "https://audiusproject.medium.com",
        about: "Audius protocol offers $AUDIO which enables network security, exclusive feature access, and community-owned governance.",
        pic: "@/assets/logos/AUDIO.svg",
      },
    ],
    crveth: [
      {
        name: "Curve DAO Token Reddit",
        feed: "https://reddit.com/r/CurveDAO/.rss",
        site: "https://reddit.com/r/CurveDAO",
        about: "",
        pic: "@/assets/logos/CRV.svg",
      },
    ],
    sandeth: [
      {
        name: "The Sandbox Medium",
        feed: "https://medium.com/feed/sandbox-game",
        site: "https://medium.com/sandbox-game",
        about: "The Sandbox is a virtual world where players can build, own, and monetize their gaming experiences in the Ethereum blockchain using SAND, the platform\u2019s utility token.",
        pic: "@/assets/logos/SAND.svg",
      },
    ],
    vgxeth: [
      {
        name: "Voyager Token Reddit",
        feed: "https://reddit.com/r/investvoyager/.rss",
        site: "https://reddit.com/r/investvoyager",
        about: "The Voyager Token (VGX) is the native utility token designed to reward Voyager customers for their loyalty, for holding VGX in their Voyager accounts and to motivate community members for their participation in the multifaceted rewards functions of VGX.",
        pic: "@/assets/logos/VGX.svg",
      },
    ],
    ankreth: [
      {
        name: "Ankr Reddit",
        feed: "https://www.reddit.com/r/Ankrofficial/.rss",
        site: "https://www.reddit.com/r/Ankrofficial",
        about: "Distributed computing platform that aims to leverage idle computing resources in data centers and edge devices.",
        pic: "@/assets/logos/ANKR.svg",
      },
      {
        name: "Ankr Medium",
        feed: "https://medium.com/feed/ankr-network",
        site: "https://medium.com/ankr-network",
        about: "Distributed computing platform that aims to leverage idle computing resources in data centers and edge devices.",
        pic: "@/assets/logos/ANKR.svg",
      },
    ],
    sxpeth: [
      {
        name: "Swipe Medium",
        feed: "https://medium.com/feed/SwipeWallet",
        site: "https://medium.com/SwipeWallet",
        about: "Swipe is a cryptocurrency wallet and debit card that enables users to spend their cryptocurrencies over the world.",
        pic: "@/assets/logos/SXP.svg",
      },
    ],
    alphaeth: [
      {
        name: "Alpha Finance Lab Blog",
        feed: "https://blog.alphafinance.io/rss",
        site: "https://blog.alphafinance.io",
        about: "Alpha Finance Lab is an ecosystem of DeFi products and focused on building an ecosystem of automated yield-maximizing Alpha products that interoperate to bring optimal alpha to users on a cross-chain level.",
        pic: "@/assets/logos/ALPHA.svg",
      },
      {
        name: "Alpha Finance Lab Blog",
        feed: "https://blog.alphafinance.io/feed",
        site: "https://blog.alphafinance.io",
        about: "Alpha Finance Lab is an ecosystem of DeFi products and focused on building an ecosystem of automated yield-maximizing Alpha products that interoperate to bring optimal alpha to users on a cross-chain level.",
        pic: "@/assets/logos/ALPHA.svg",
      },
    ],
    feteth: [
      {
        name: "Fetch.ai Reddit",
        feed: "https://reddit.com/r/FetchAI_Community/.rss",
        site: "https://reddit.com/r/FetchAI_Community",
        about: "Fetch.ai is building tools and infrastructure to enable a decentralized digital economy by combining AI, multi-agent systems and advanced cryptography.",
        pic: "@/assets/logos/FET.svg",
      },
      {
        name: "Fetch.ai Medium",
        feed: "https://medium.com/feed/fetch-ai",
        site: "https://medium.com/fetch-ai",
        about: "Fetch.ai is building tools and infrastructure to enable a decentralized digital economy by combining AI, multi-agent systems and advanced cryptography.",
        pic: "@/assets/logos/FET.svg",
      },
      {
        name: "Fetch.ai Blog",
        feed: "https://fetch.ai/blog/rss",
        site: "https://fetch.ai/blog",
        about: "Fetch.ai is building tools and infrastructure to enable a decentralized digital economy by combining AI, multi-agent systems and advanced cryptography.",
        pic: "@/assets/logos/FET.svg",
      },
    ],
    glmeth: [
      {
        name: "Golem Reddit",
        feed: "https://reddit.com/r/GolemProject/.rss",
        site: "https://reddit.com/r/GolemProject",
        about: "Golem is going to create the first decentralized global market for computing power",
        pic: "@/assets/logos/GLM.svg",
      },
      {
        name: "Golem Blog",
        feed: "https://blog.golemproject.net/rss",
        site: "https://blog.golemproject.net",
        about: "Golem is going to create the first decentralized global market for computing power",
        pic: "@/assets/logos/GLM.svg",
      },
      {
        name: "Golem Blog",
        feed: "https://blog.golemproject.net/feed",
        site: "https://blog.golemproject.net",
        about: "Golem is going to create the first decentralized global market for computing power",
        pic: "@/assets/logos/GLM.svg",
      },
    ],
    usdneth: [
      {
        name: "Neutrino USD Medium",
        feed: "https://medium.com/feed/neutrinoteam",
        site: "https://medium.com/neutrinoteam",
        about: "Neutrino USD (USDN) is an algorithmic crypto-collateralized stablecoin pegged to the US dollar. All operations involving USDN, such as issuance, collateralization, staking and reward payouts, are fully transparent and governed by a smart contract.",
        pic: "@/assets/logos/USDN.svg",
      },
    ],
    skleth: [
      {
        name: "SKALE Network Medium",
        feed: "https://medium.com/feed/skale",
        site: "https://medium.com/skale",
        about: "SKALE Network is an open source Web3 platform intended to bring speed and configurability to blockchain. SKALE Network token (SKL) is a hybrid use token which represents the right to work in the network as a validator, stake as a delegator, or access a share of its resources.",
        pic: "@/assets/logos/SKL.svg",
      },
      {
        name: "SKALE Network Blog",
        feed: "https://skale.network/blog/rss",
        site: "https://skale.network/blog",
        about: "SKALE Network is an open source Web3 platform intended to bring speed and configurability to blockchain. SKALE Network token (SKL) is a hybrid use token which represents the right to work in the network as a validator, stake as a delegator, or access a share of its resources.",
        pic: "@/assets/logos/SKL.svg",
      },
    ],
    nmreth: [
      {
        name: "Numeraire Reddit",
        feed: "https://reddit.com/r/numerai/.rss",
        site: "https://reddit.com/r/numerai",
        about: "NMR is the scarcity token at the core of the Erasure Protocol. NMR cannot be minted and its core use is for staking and burning. "
          + "The Erasure Protocol brings negative incentives to any website on the internet by providing users with economic skin in the game and punishing bad actors.",
        pic: "@/assets/logos/NMR.svg",
      },
      {
        name: "Numeraire Medium",
        feed: "https://medium.com/feed/numerai",
        site: "https://medium.com/numerai",
        about: "NMR is the scarcity token at the core of the Erasure Protocol. NMR cannot be minted and its core use is for staking and burning. "
          + "The Erasure Protocol brings negative incentives to any website on the internet by providing users with economic skin in the game and punishing bad actors.",
        pic: "@/assets/logos/NMR.svg",
      },
    ],
    srmeth: [
      {
        name: "Serum Medium",
        feed: "https://projectserum.medium.com/feed",
        site: "https://projectserum.medium.com",
        about: "Serum is a decentralized derivatives exchange with trustless cross-chain trading by Project Serum, in collaboration with a consortium of crypto trading and DeFi experts.",
        pic: "@/assets/logos/SRM.svg",
      },
    ],
    lpteth: [
      {
        name: "Livepeer Reddit",
        feed: "https://reddit.com/r/livepeer/.rss",
        site: "https://reddit.com/r/livepeer",
        about: "A decentralized video streaming protocol that empowers developers to build video enabled applications backed by a competitive market of economically incentivized service providers.",
        pic: "@/assets/logos/LPT.svg",
      },
      {
        name: "Livepeer Medium",
        feed: "https://medium.com/feed/livepeer-blog",
        site: "https://medium.com/livepeer-blog",
        about: "A decentralized video streaming protocol that empowers developers to build video enabled applications backed by a competitive market of economically incentivized service providers.",
        pic: "@/assets/logos/LPT.svg",
      },
    ],
    aliceeth: [
      {
        name: "MyNeighborAlice Reddit",
        feed: "https://reddit.com/r/MyNeighborAlice/.rss",
        site: "https://reddit.com/r/MyNeighborAlice",
        about: "My Neighbor Alice is a multiplayer builder game, where anyone can buy and own virtual islands, collect and build items and meet new friends.",
        pic: "@/assets/logos/ALICE.svg",
      },
      {
        name: "MyNeighborAlice Medium",
        feed: "https://myneighboralice.medium.com/feed",
        site: "https://myneighboralice.medium.com",
        about: "My Neighbor Alice is a multiplayer builder game, where anyone can buy and own virtual islands, collect and build items and meet new friends.",
        pic: "@/assets/logos/ALICE.svg",
      },
    ],
    feieth: [
      {
        name: "Fei Protocol Medium",
        feed: "https://medium.com/feed/fei-protocol",
        site: "https://medium.com/fei-protocol",
        about: "Fei Protocol ($FEI) represents a direct incentive stablecoin which is undercollateralized and fully decentralized.FEI employs a stability mechanism known as direct incentives - dynamic mint rewards and burn penalties on DEX trade volume to maintain the peg.",
        pic: "@/assets/logos/FEI.svg",
      },
    ],
    ogneth: [
      {
        name: "Origin Protocol Reddit",
        feed: "https://reddit.com/r/originprotocol/.rss",
        site: "https://reddit.com/r/originprotocol",
        about: "Origin Protocol is a platform for creating decentralized marketplaces on the blockchain.",
        pic: "@/assets/logos/OGN.svg",
      },
      {
        name: "Origin Protocol Medium",
        feed: "https://medium.com/feed/originprotocol",
        site: "https://medium.com/originprotocol",
        about: "Origin Protocol is a platform for creating decentralized marketplaces on the blockchain.",
        pic: "@/assets/logos/OGN.svg",
      },
    ],
    injeth: [
      {
        name: "Injective Protocol Reddit",
        feed: "https://reddit.com/r/injective/.rss",
        site: "https://reddit.com/r/injective",
        about: "Access, create and trade unlimited decentralized finance markets on an Ethereum-compatible exchange protocol for cross-chain DeFi.",
        pic: "@/assets/logos/INJ.svg",
      },
      {
        name: "Injective Protocol Medium",
        feed: "https://medium.com/feed/injective-labs",
        site: "https://medium.com/injective-labs",
        about: "Access, create and trade unlimited decentralized finance markets on an Ethereum-compatible exchange protocol for cross-chain DeFi.",
        pic: "@/assets/logos/INJ.svg",
      },
    ],
    agixeth: [
      {
        name: "SingularityNET Reddit",
        feed: "https://reddit.com/r/SingularityNet/.rss",
        site: "https://reddit.com/r/SingularityNet",
        about: "Decentralized marketplace for artificial intelligence.",
        pic: "@/assets/logos/AGIX.svg",
      },
      {
        name: "SingularityNET Blog",
        feed: "https://blog.singularitynet.io/rss",
        site: "https://blog.singularitynet.io",
        about: "Decentralized marketplace for artificial intelligence.",
        pic: "@/assets/logos/AGIX.svg",
      },
    ],
    paxgeth: [
      {
        name: "PAX Gold Medium",
        feed: "https://medium.com/feed/paxos",
        site: "https://medium.com/paxos",
        about: "PAX Gold (PAXG) tokens each represent one fine troy ounce of an LBMA-certified, London Good Delivery physical gold bar, secured in Brink\u2019s vaults.",
        pic: "@/assets/logos/PAXG.svg",
      },
    ],
    bandeth: [
      {
        name: "Band Protocol Reddit",
        feed: "https://reddit.com/r/bandprotocol/.rss",
        site: "https://reddit.com/r/bandprotocol",
        about: "A data governance framework for Web3.0 applications operating as an open-source standard for the decentralized management of data. Band Protocol connects smart contracts with trusted off-chain information, provided through community-curated oracle data providers.",
        pic: "@/assets/logos/BAND.svg",
      },
      {
        name: "Band Protocol Medium",
        feed: "https://medium.com/feed/bandprotocol",
        site: "https://medium.com/bandprotocol",
        about: "A data governance framework for Web3.0 applications operating as an open-source standard for the decentralized management of data. Band Protocol connects smart contracts with trusted off-chain information, provided through community-curated oracle data providers.",
        pic: "@/assets/logos/BAND.svg",
      },
    ],
    stmxeth: [
      {
        name: "StormX Reddit",
        feed: "https://reddit.com/r/stormxio/.rss",
        site: "https://reddit.com/r/stormxio",
        about: "StormX is a gamified marketplace that enables users to earn STMX ERC-20 tokens by completing micro-tasks or shopping at global partner stores online. Users can earn staking rewards, shopping, and micro-task benefits for holding STMX in their own wallet.",
        pic: "@/assets/logos/STMX.svg",
      },
    ],
    strxeth: [
      {
        name: "StormX Reddit",
        feed: "https://reddit.com/r/stormxio/.rss",
        site: "https://reddit.com/r/stormxio",
        about: "StormX is a gamified marketplace that enables users to earn STMX ERC-20 tokens by completing micro-tasks or shopping at global partner stores online. Users can earn staking rewards, shopping, and micro-task benefits for holding STMX in their own wallet.",
        pic: "@/assets/logos/STMX.svg",
      },
    ],
    reefeth: [
      {
        name: "Reef Reddit",
        feed: "https://reddit.com/r/ReefDeFi/.rss",
        site: "https://reddit.com/r/ReefDeFi",
        about: "Reef finance aims to offer multi-chain smart liquidity aggregator and yield engine powered by Polkadot.",
        pic: "@/assets/logos/REEF.svg",
      },
      {
        name: "Reef Medium",
        feed: "https://medium.com/feed/@reefdefi",
        site: "https://medium.com/@reefdefi",
        about: "Reef finance aims to offer multi-chain smart liquidity aggregator and yield engine powered by Polkadot.",
        pic: "@/assets/logos/REEF.svg",
      },
    ],
    ctsieth: [
      {
        name: "Cartesi Reddit",
        feed: "https://www.reddit.com/r/cartesi/.rss",
        site: "https://www.reddit.com/r/cartesi",
        about: "Cartesi aims to solve the problems of scalability and high fees through optimistic roll-ups. Cartesi revolutionizes smart contracts by enabling mainstream software stacks. Noether is Cartesi's Data Availability Oracle which provides low-cost storage to DApp devs.",
        pic: "@/assets/logos/CTSI.svg",
      },
      {
        name: "Cartesi Medium",
        feed: "https://medium.com/feed/cartesi",
        site: "https://medium.com/cartesi",
        about: "Cartesi aims to solve the problems of scalability and high fees through optimistic roll-ups. Cartesi revolutionizes smart contracts by enabling mainstream software stacks. Noether is Cartesi's Data Availability Oracle which provides low-cost storage to DApp devs.",
        pic: "@/assets/logos/CTSI.svg",
      },
    ],
    nkneth: [
      {
        name: "NKN Reddit",
        feed: "https://reddit.com/r/nknblockchain/.rss",
        site: "https://reddit.com/r/nknblockchain",
        about: "NKN is the new kind of P2P network connectivity protocol & ecosystem powered by a novel public blockchain.",
        pic: "@/assets/logos/NKN.svg",
      },
    ],
    maticpolygon: [
      {
        name: "Polygon Reddit",
        feed: "https://www.reddit.com/r/maticnetwork/.rss",
        site: "https://www.reddit.com/r/maticnetwork",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "@/assets/logos/MATIC.svg",
      },
      {
        name: "Polygon Medium",
        feed: "https://medium.com/feed/matic-network",
        site: "https://medium.com/matic-network",
        about: "Matic Network provides scalable, secure and instant Ethereum transactions using Plasma side chains and a Proof-of-Stake network.",
        pic: "@/assets/logos/MATIC.svg",
      },
    ],
    wethpoly: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/ETH.svg",
      },
    ],
    usdtpoly: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    usdcpoly: [
      {
        name: "USD Coin Blog",
        feed: "https://www.circle.com/blog/rss.xml",
        site: "https://www.circle.com/blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
      {
        name: "USD Coin Medium",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    quickpoly: [
      {
        name: "QuickSwap Reddit",
        feed: "https://reddit.com/r/QuickSwap/.rss",
        site: "https://reddit.com/r/QuickSwap",
        about: "QuickSwap is a fork of the originator of Automated Market Makers in the now rapidly expanding DeFi sector of the Cryptocurrency industry, Uniswap.",
        pic: "@/assets/logos/QUICK.svg",
      },
      {
        name: "QuickSwap Medium",
        feed: "https://quickswap-layer2.medium.com/feed",
        site: "https://quickswap-layer2.medium.com",
        about: "QuickSwap is a fork of the originator of Automated Market Makers in the now rapidly expanding DeFi sector of the Cryptocurrency industry, Uniswap.",
        pic: "@/assets/logos/QUICK.svg",
      },
    ],
    unipoly: [
      {
        name: "Uniswap Reddit",
        feed: "https://reddit.com/r/Uniswap/.rss",
        site: "https://reddit.com/r/Uniswap",
        about: "The Uniswap protocol empowers developers, liquidity providers and traders to participate in a financial marketplace that is open and accessible to all.",
        pic: "@/assets/logos/UNI.svg",
      },
    ],
    linkpoly: [
      {
        name: "Chainlink Reddit",
        feed: "https://reddit.com/r/chainlink/.rss",
        site: "https://reddit.com/r/chainlink",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "Chainlink Medium",
        feed: "https://medium.com/feed/chainlink",
        site: "https://medium.com/chainlink",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/feed",
        site: "https://blog.chain.link",
        about: "A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
    ],
    wbtcpoly: [
    ],
    daipoly: [
      {
        name: "Dai Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
        pic: "@/assets/logos/DAI.svg",
      },
      {
        name: "Dai Blog",
        feed: "https://blog.makerdao.com/feed",
        site: "https://blog.makerdao.com",
        about: "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
        pic: "@/assets/logos/DAI.svg",
      },
      {
        name: "Dai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
        pic: "@/assets/logos/DAI.svg",
      },
    ],
    aavepoly: [
      {
        name: "Aave Medium",
        feed: "https://medium.com/feed/aave",
        site: "https://medium.com/aave",
        about: "Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.",
        pic: "@/assets/logos/AAVE.svg",
      },
      {
        name: "Aave Reddit",
        feed: "https://reddit.com/r/Aave_Official/.rss",
        site: "https://reddit.com/r/Aave_Official",
        about: "Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.",
        pic: "@/assets/logos/AAVE.svg",
      },
    ],
    sushipoly: [
      {
        name: "SushiSwap Reddit",
        feed: "https://reddit.com/r/SushiSwap/.rss",
        site: "https://reddit.com/r/SushiSwap",
        about: "Be a DeFi Chef with Sushi. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform.",
        pic: "@/assets/logos/SUSHI.svg",
      },
    ],
    snxpoly: [
      {
        name: "Synthetix Reddit",
        feed: "https://reddit.com/r/synthetix_io/.rss",
        site: "https://reddit.com/r/synthetix_io",
        about: "Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.",
        pic: "@/assets/logos/SNX.svg",
      },
      {
        name: "Synthetix Blog",
        feed: "https://blog.synthetix.io/rss",
        site: "https://blog.synthetix.io",
        about: "Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.",
        pic: "@/assets/logos/SNX.svg",
      },
    ],
    telpoly: [
      {
        name: "Telcoin Reddit",
        feed: "https://reddit.com/r/telcoin/.rss",
        site: "https://reddit.com/r/telcoin",
        about: "A cryptocurrency distributed by your mobile operator and accepted everywhere.",
        pic: "@/assets/logos/TEL.svg",
      },
      {
        name: "Telcoin Medium",
        feed: "https://medium.com/feed/@telcoin",
        site: "https://medium.com/@telcoin",
        about: "A cryptocurrency distributed by your mobile operator and accepted everywhere.",
        pic: "@/assets/logos/TEL.svg",
      },
    ],
    nexopoly: [
      {
        name: "Nexo Reddit",
        feed: "https://reddit.com/r/nexo/.rss",
        site: "https://reddit.com/r/nexo",
        about: "Instant Crypto-backed Loans",
        pic: "@/assets/logos/NEXO.svg",
      },
      {
        name: "Nexo Medium",
        feed: "https://medium.com/feed/nexo",
        site: "https://medium.com/nexo",
        about: "Instant Crypto-backed Loans",
        pic: "@/assets/logos/NEXO.svg",
      },
    ],
    ubtpoly: [
      {
        name: "Unibright Reddit",
        feed: "https://reddit.com/r/Unibright/.rss",
        site: "https://reddit.com/r/Unibright",
        about: "The unified framework for blockchain based business integration",
        pic: "@/assets/logos/UBT.svg",
      },
      {
        name: "Unibright Medium",
        feed: "https://medium.com/feed/@UnibrightIO",
        site: "https://medium.com/@UnibrightIO",
        about: "The unified framework for blockchain based business integration",
        pic: "@/assets/logos/UBT.svg",
      },
    ],
    wrxpoly: [
      {
        name: "WazirX Medium",
        feed: "https://medium.com/feed/@wazirx",
        site: "https://medium.com/@wazirx",
        about: "",
        pic: "@/assets/logos/WRX.svg",
      },
      {
        name: "wazirx Blog",
        feed: "https://wazirx.com/blog/rss",
        site: "https://wazirx.com/blog",
        about: "",
        pic: "@/assets/logos/WRX.svg",
      },
    ],
    ctsipoly: [
      {
        name: "Cartesi Reddit",
        feed: "https://www.reddit.com/r/cartesi/.rss",
        site: "https://www.reddit.com/r/cartesi",
        about: "",
        pic: "@/assets/logos/CTSI.svg",
      },
      {
        name: "Cartesi Medium",
        feed: "https://medium.com/feed/cartesi",
        site: "https://medium.com/cartesi",
        about: "",
        pic: "@/assets/logos/CTSI.svg",
      },
    ],
    woopoly: [
      {
        name: "WOO Network Medium",
        feed: "https://medium.com/feed/woonetwork",
        site: "https://medium.com/woonetwork",
        about: "WOO Network connects global liquidity, quantitative strategies, and top market makers to provide exchanges, institutions, and DeFi platforms with democratized access to deep liquidity.",
        pic: "@/assets/logos/WOO.svg",
      },
    ],
    fishpoly: [
      {
        name: "Polycat Finance Reddit",
        feed: "https://reddit.com/r/PolycatFinance/.rss",
        site: "https://reddit.com/r/PolycatFinance",
        about: "Value-oriented, economically sustainable hybrid yield aggregator on Polygon.",
        pic: "@/assets/logos/FISH.svg",
      },
      {
        name: "Polycat Finance Medium",
        feed: "https://medium.com/feed/@PolycatFinance",
        site: "https://medium.com/@PolycatFinance",
        about: "Value-oriented, economically sustainable hybrid yield aggregator on Polygon.",
        pic: "@/assets/logos/FISH.svg",
      },
    ],
    hexpoly: [
      {
        name: "HEX Reddit",
        feed: "https://reddit.com/r/HEXcrypto/.rss",
        site: "https://reddit.com/r/HEXcrypto",
        about: "HEX.com averages 25% APY interest recently. HEX virtually lends value from stakers to non-stakers as staking reduces supply. The launch ends Nov. 19th, 2020 when HEX stakers get credited ~200B HEX. HEX's total supply is now ~350B. Audited 3 times, 2 security, and 1 economics.",
        pic: "@/assets/logos/HEX.svg",
      },
    ],
    ompoly: [
      {
        name: "MANTRA DAO Medium",
        feed: "https://medium.com/feed/@mantradao",
        site: "https://medium.com/@mantradao",
        about: "MANTRA DAO is a community-governed DeFi platform focusing on Staking, Lending, and Governance.",
        pic: "@/assets/logos/OM.svg",
      },
    ],
    kncpoly: [
      {
        name: "Kyber Network Crystal v2 Reddit",
        feed: "https://reddit.com/r/kybernetwork/.rss",
        site: "https://reddit.com/r/kybernetwork",
        about: "Kyber is a blockchain-based liquidity protocol that aggregates liquidity from a wide range of reserves, powering instant and secure token exchange in any decentralized application.",
        pic: "@/assets/logos/KNC.svg",
      },
      {
        name: "Kyber Network Crystal v2 Blog",
        feed: "https://blog.kyber.network/feed",
        site: "https://blog.kyber.network",
        about: "Kyber is a blockchain-based liquidity protocol that aggregates liquidity from a wide range of reserves, powering instant and secure token exchange in any decentralized application.",
        pic: "@/assets/logos/KNC.svg",
      },
    ],
    tribeeth: [
      {
        name: "Tribe Medium",
        feed: "https://medium.com/feed/@fei-protocol",
        site: "https://medium.com/@fei-protocol",
        about: "Tribe is the governance token for the FEI algorithmic stablecoin. Fei aims to provide a new decentralized solution to the stablecoin market. Existing stablecoins are either fiat-collateralized and, therefore, centralized or crypto-collateralized, making them capital-inefficient.",
        pic: "@/assets/logos/TRIBE.svg",
      },
    ],
    bscprom: [
      {
        name: "Prometeus Network Medium",
        feed: "https://medium.com/feed/prometeus-network",
        site: "https://medium.com/prometeus-network",
        about: "Prometeus Network is a decentralized ecosystem for trustless and anonymous data exchange.",
        pic: "@/assets/logos/PROM.svg",
      },
    ],
    godseth: [
      {
        name: "Gods Unchained Blog",
        feed: "https://blog.godsunchained.com/feed",
        site: "https://blog.godsunchained.com",
        about: "Gods Unchained is a free-to-play tactical card game that gives players true ownership of their in-game items.",
        pic: "@/assets/logos/GODS.svg",
      },
    ],
    bscore: [
    ],
    pbxeth: [
      {
        name: "Paribus Medium",
        feed: "https://medium.com/feed/@paribus_io",
        site: "https://medium.com/@paribus_io",
        about: "A cross-chain borrowing and lending protocol for NFTs, liquidity positions, and synthetic assets, powered by the Cardano blockchain.",
        pic: "@/assets/logos/PBX.svg",
      },
    ],
    straxeth: [
      {
        name: "Stratis Reddit",
        feed: "https://reddit.com/r/Stratisplatform/.rss",
        site: "https://reddit.com/r/Stratisplatform",
        about: "",
        pic: "@/assets/logos/STRAX.svg",
      },
    ],
    ewteth: [
      {
        name: "Energy Web Token Reddit",
        feed: "https://reddit.com/r/EnergyWeb/.rss",
        site: "https://reddit.com/r/EnergyWeb",
        about: "Energy Web Token (EWT) is the native token of the Energy Web Chain, a public, Proof-of-Authority Ethereum Virtual Machine blockchain specifically designed to support enterprise-grade applications in the energy sector.",
        pic: "@/assets/logos/EWT.svg",
      },
      {
        name: "Energy Web Token Medium",
        feed: "https://medium.com/feed/energy-web-insights",
        site: "https://medium.com/energy-web-insights",
        about: "Energy Web Token (EWT) is the native token of the Energy Web Chain, a public, Proof-of-Authority Ethereum Virtual Machine blockchain specifically designed to support enterprise-grade applications in the energy sector.",
        pic: "@/assets/logos/EWT.svg",
      },
    ],
    prometh: [
      {
        name: "Prometeus Medium",
        feed: "https://medium.com/feed/prometeus-network",
        site: "https://medium.com/prometeus-network",
        about: "Prometeus Network fuels people-owned data markets, introducing new ways to interact with data and profit from it. They use a peer-to-peer approach to operate beyond any border or jurisdiction.",
        pic: "@/assets/logos/PROM.svg",
      },
    ],
    wooeth: [
      {
        name: "WOO Network Medium",
        feed: "https://medium.com/feed/woonetwork",
        site: "https://medium.com/woonetwork",
        about: "Wootrade is incubated by Kronos Research, which aims to solve the pain points of the diversified liquidity of the cryptocurrency market, and provides sufficient trading depth for users such as exchanges, wallets, and trading institutions with zero fees.",
        pic: "@/assets/logos/WOO.svg",
      },
    ],
    cotieth: [
      {
        name: "COTI Reddit",
        feed: "https://reddit.com/r/cotinetwork/.rss",
        site: "https://reddit.com/r/cotinetwork",
        about: "COTI is an enterprise-grade fintech platform that enables cross-chain interoperability and is built on its own DAG-based chain. It supports extreme scalability, low transaction costs and is supplemented with payment-specific requirements in the form of COTI Pay.",
        pic: "@/assets/logos/COTI.svg",
      },
      {
        name: "COTI Medium",
        feed: "https://medium.com/feed/cotinetwork",
        site: "https://medium.com/cotinetwork",
        about: "COTI is an enterprise-grade fintech platform that enables cross-chain interoperability and is built on its own DAG-based chain. It supports extreme scalability, low transaction costs and is supplemented with payment-specific requirements in the form of COTI Pay.",
        pic: "@/assets/logos/COTI.svg",
      },
    ],
    oxteth: [
      {
        name: "Orchid Reddit",
        feed: "https://reddit.com/r/orchid/.rss",
        site: "https://reddit.com/r/orchid",
        about: "Orchid enables a decentralized VPN.",
        pic: "@/assets/logos/OXT.svg",
      },
    ],
    tomoeth: [
      {
        name: "TomoChain Reddit",
        feed: "https://reddit.com/r/Tomochain/.rss",
        site: "https://reddit.com/r/Tomochain",
        about: "TomoChain is a scalable blockchain-powered via Proof-of-Stake Voting consensus which is used commercially by companies globally",
        pic: "@/assets/logos/TOMO.svg",
      },
      {
        name: "TomoChain Medium",
        feed: "https://medium.com/feed/tomochain",
        site: "https://medium.com/tomochain",
        about: "TomoChain is a scalable blockchain-powered via Proof-of-Stake Voting consensus which is used commercially by companies globally",
        pic: "@/assets/logos/TOMO.svg",
      },
    ],
    orbseth: [
      {
        name: "Orbs Reddit",
        feed: "https://reddit.com/r/ORBS_Network/.rss",
        site: "https://reddit.com/r/ORBS_Network",
        about: "Orbs is a public blockchain built for the needs of apps with millions of users, from SLAs to adjustable fee models to on-demand capacity.",
        pic: "@/assets/logos/ORBS.svg",
      },
    ],
    uoseth: [
      {
        name: "Ultra Medium",
        feed: "https://medium.com/feed/ultra-io",
        site: "https://medium.com/ultra-io",
        about: "Ultra is a games distribution platform, offering new solutions to both developers and players.",
        pic: "@/assets/logos/UOS.svg",
      },
    ],
    badgereth: [
      {
        name: "Badger DAO Medium",
        feed: "https://badgerdao.medium.com/feed",
        site: "https://badgerdao.medium.com",
        about: "Badger is a decentralized autonomous organization (DAO) with a single purpose: build the products and infrastructure necessary to accelerate Bitcoin as collateral across other blockchains.",
        pic: "@/assets/logos/BADGER.svg",
      },
    ],
    phaeth: [
      {
        name: "Phala Network Medium",
        feed: "https://medium.com/feed/phala-network",
        site: "https://medium.com/phala-network",
        about: "Phala Network is a general-purpose confidential smart contract network on Polkadot. The confidential contracts run inside the hardware TEE enclaves for confidentiality. It acts as a confidential layer for any blockchains via Polkadot cross-chain messaging protocol.",
        pic: "@/assets/logos/PHA.svg",
      },
    ],
    mvleth: [
      {
        name: "MVL Reddit",
        feed: "https://reddit.com/r/MVL/.rss",
        site: "https://reddit.com/r/MVL",
        about: "MVLChain aims to build an incentive-based blockchain mobility ecosystem. MVL Ecosystem breaks away current centralized system. Ecosystem participants get fairly rewarded for data contributions and uses in all-connected mobility services.",
        pic: "@/assets/logos/MVL.svg",
      },
    ],
    nueth: [
      {
        name: "NuCypher Reddit",
        feed: "https://reddit.com/r/nucypher/.rss",
        site: "https://reddit.com/r/nucypher",
        about: "NuCypher is a threshold cryptography network.",
        pic: "@/assets/logos/NU.svg",
      },
      {
        name: "NuCypher Blog",
        feed: "https://blog.nucypher.com/rss",
        site: "https://blog.nucypher.com",
        about: "NuCypher is a threshold cryptography network.",
        pic: "@/assets/logos/NU.svg",
      },
    ],
    anteth: [
      {
        name: "Aragon Reddit",
        feed: "https://www.reddit.com/r/aragonproject/.rss",
        site: "https://www.reddit.com/r/aragonproject",
        about: "Create and manage unstoppable organizations. Aragon lets you manage entire organizations using the blockchain. This makes Aragon organizations more efficient than their traditional counterparties.",
        pic: "@/assets/logos/ANT.svg",
      },
      {
        name: "Aragon Blog",
        feed: "https://blog.aragon.org/rss",
        site: "https://blog.aragon.org",
        about: "Create and manage unstoppable organizations. Aragon lets you manage entire organizations using the blockchain. This makes Aragon organizations more efficient than their traditional counterparties.",
        pic: "@/assets/logos/ANT.svg",
      },
    ],
    dodoeth: [
      {
        name: "DODO Reddit",
        feed: "https://reddit.com/r/DodoEx/.rss",
        site: "https://reddit.com/r/DodoEx",
        about: "DODO is a on-chain liquidity provider, which leverages the Proactive Market Maker algorithm (PMM) to provide pure on-chain and contract-fillable liquidity for everyone.",
        pic: "@/assets/logos/DODO.svg",
      },
    ],
    xyoeth: [
      {
        name: "XYO Reddit",
        feed: "https://reddit.com/r/XYONetwork/.rss",
        site: "https://reddit.com/r/XYONetwork",
        about: "Blockchain's crypto-location oracle network",
        pic: "@/assets/logos/XYO.svg",
      },
      {
        name: "XYO Medium",
        feed: "https://medium.com/feed/xyonetwork",
        site: "https://medium.com/xyonetwork",
        about: "Blockchain's crypto-location oracle network",
        pic: "@/assets/logos/XYO.svg",
      },
    ],
    utketh: [
      {
        name: "Utrust Reddit",
        feed: "https://reddit.com/r/UTRUST_Official/.rss",
        site: "https://reddit.com/r/UTRUST_Official",
        about: "The Utrust platform allows merchants to accept payments in digital currencies and aims to bring digital currencies to mainstream consumers while providing buyer protection and credibility. Utrust stands at the intersection of e-commerce, mobile payments, and cryptocurrency.",
        pic: "@/assets/logos/UTK.svg",
      },
      {
        name: "Utrust Medium",
        feed: "https://medium.com/feed/utrust",
        site: "https://medium.com/utrust",
        about: "The Utrust platform allows merchants to accept payments in digital currencies and aims to bring digital currencies to mainstream consumers while providing buyer protection and credibility. Utrust stands at the intersection of e-commerce, mobile payments, and cryptocurrency.",
        pic: "@/assets/logos/UTK.svg",
      },
    ],
    yfiieth: [
    ],
    mlneth: [
      {
        name: "Enzyme Reddit",
        feed: "https://reddit.com/r/enzymefinance/.rss",
        site: "https://reddit.com/r/enzymefinance",
        about: "Enzyme is a way to build, scale, and monetize investment strategies",
        pic: "@/assets/logos/MLN.svg",
      },
      {
        name: "Enzyme Medium",
        feed: "https://medium.com/feed/enzymefinance",
        site: "https://medium.com/enzymefinance",
        about: "Enzyme is a way to build, scale, and monetize investment strategies",
        pic: "@/assets/logos/MLN.svg",
      },
    ],
    baleth: [
    ],
    boraeth: [
      {
        name: "BORA Medium",
        feed: "https://medium.com/feed/boraecosystem",
        site: "https://medium.com/boraecosystem",
        about: "Decentralized application platform for digital contents distribution",
        pic: "@/assets/logos/BORA.svg",
      },
    ],
    strketh: [
      {
        name: "Strike Medium",
        feed: "https://medium.com/feed/StrikeFinance",
        site: "https://medium.com/StrikeFinance",
        about: "Strike is a decentralized money market that lets users earn and borrow digital assets on Ethereum.",
        pic: "@/assets/logos/STRK.svg",
      },
    ],
    snmeth: [
      {
        name: "SONM (BEP-20) Reddit",
        feed: "https://reddit.com/r/SONM/.rss",
        site: "https://reddit.com/r/SONM",
        about: "SONM's aims to be a secure and cost-effective fog supercomputer for general-purpose computing, from mobile app hosting to video rendering to DNA analysis.",
        pic: "@/assets/logos/SNM.svg",
      },
    ],
    adxeth: [
      {
        name: "Ambire AdEx Reddit",
        feed: "https://reddit.com/r/AdEx/.rss",
        site: "https://reddit.com/r/AdEx",
        about: "Decentralized Ad Network",
        pic: "@/assets/logos/ADX.svg",
      },
      {
        name: "Ambire AdEx Medium",
        feed: "https://ambire.medium.com/feed",
        site: "https://ambire.medium.com",
        about: "Decentralized Ad Network",
        pic: "@/assets/logos/ADX.svg",
      },
    ],
    loometh: [
      {
        name: "Loom Network Reddit",
        feed: "https://reddit.com/r/loomnetwork/.rss",
        site: "https://reddit.com/r/loomnetwork",
        about: "Loom Network is building the zkLoom protocol, based on zkRollup, and secured by Ethereum Mainnet. The zkLoom protocol is at the core of Loom Network's enterprise platform which provides services to healthcare providers and government departments.",
        pic: "@/assets/logos/LOOM.svg",
      },
      {
        name: "Loom Network Medium",
        feed: "https://medium.com/feed/loom-network",
        site: "https://medium.com/loom-network",
        about: "Loom Network is building the zkLoom protocol, based on zkRollup, and secured by Ethereum Mainnet. The zkLoom protocol is at the core of Loom Network's enterprise platform which provides services to healthcare providers and government departments.",
        pic: "@/assets/logos/LOOM.svg",
      },
    ],
    dataeth: [
      {
        name: "Streamr Reddit",
        feed: "https://reddit.com/r/streamr/.rss",
        site: "https://reddit.com/r/streamr",
        about: "Streamr is a decentralized real‑time data network for web3. Create, share and consume data streams on an open, scalable P2P protocol with powerful tools for monetization.",
        pic: "@/assets/logos/DATA.svg",
      },
      {
        name: "Streamr Medium",
        feed: "https://medium.com/feed/streamrblog",
        site: "https://medium.com/streamrblog",
        about: "Streamr is a decentralized real-time data network for web3. Create, share and consume data streams on an open, scalable P2P protocol with powerful tools for monetization.",
        pic: "@/assets/logos/DATA.svg",
      },
    ],
    aergoeth: [
      {
        name: "Aergo Reddit",
        feed: "https://reddit.com/r/Aergo_Official/.rss",
        site: "https://reddit.com/r/Aergo_Official",
        about: "Aergo is an open platform that allows businesses to build innovative applications and services by sharing data on a trustless and distributed IT ecosystem.",
        pic: "@/assets/logos/AERGO.svg",
      },
      {
        name: "Aergo Medium",
        feed: "https://medium.com/feed/aergo",
        site: "https://medium.com/aergo",
        about: "Aergo is an open platform that allows businesses to build innovative applications and services by sharing data on a trustless and distributed IT ecosystem.",
        pic: "@/assets/logos/AERGO.svg",
      },
    ],
    videth: [
      {
        name: "VideoCoin Medium",
        feed: "https://medium.com/feed/videocoin",
        site: "https://medium.com/videocoin",
        about: "VideoCoin - A Decentralized Video Encoding, Storage, and Content Distribution Network",
        pic: "@/assets/logos/VID.svg",
      },
    ],
    ometh: [
      {
        name: "MANTRA DAO Medium",
        feed: "https://medium.com/feed/@mantradao",
        site: "https://medium.com/@mantradao",
        about: "MANTRA DAO is a community-governed DeFi platform focusing on Staking, Lending, and Governance.",
        pic: "@/assets/logos/OM.svg",
      },
    ],
    oxyeth: [
    ],
    rayeth: [
    ],
    alepheth: [
      {
        name: "Aleph.im Reddit",
        feed: "https://reddit.com/r/Aleph_im/.rss",
        site: "https://reddit.com/r/Aleph_im",
        about: "Built for the DeFI ecosystem, aleph.im is a decentralized network that is dedicated to providing secure storage and computing to decentralized applications of all chains.",
        pic: "@/assets/logos/ALEPH.svg",
      },
      {
        name: "Aleph.im Medium",
        feed: "https://medium.com/feed/aleph-im",
        site: "https://medium.com/aleph-im",
        about: "Built for the DeFI ecosystem, aleph.im is a decentralized network that is dedicated to providing secure storage and computing to decentralized applications of all chains.",
        pic: "@/assets/logos/ALEPH.svg",
      },
    ],
    c98eth: [
      {
        name: "Coin98 Blog",
        feed: "https://blog.coin98.com/rss",
        site: "https://blog.coin98.com",
        about: "A project aiming to build an ecosystem of DeFi products that help traditional finance users to access DeFi services easier.",
        pic: "@/assets/logos/C98.svg",
      },
    ],
    wetheth: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/WETH.svg",
      },
    ],
    quicketh: [
      {
        name: "QuickSwap Reddit",
        feed: "https://reddit.com/r/QuickSwap/.rss",
        site: "https://reddit.com/r/QuickSwap",
        about: "QuickSwap is a Layer 2 DEX powered by Matic Network.",
        pic: "@/assets/logos/QUICK.svg",
      },
      {
        name: "QuickSwap Medium",
        feed: "https://quickswap-layer2.medium.com/feed",
        site: "https://quickswap-layer2.medium.com",
        about: "QuickSwap is a Layer 2 DEX powered by Matic Network.",
        pic: "@/assets/logos/QUICK.svg",
      },
    ],
    dydxeth: [
      {
        name: "dYdX Reddit",
        feed: "https://reddit.com/r/dydxprotocol/.rss",
        site: "https://reddit.com/r/dydxprotocol",
        about: "DYDX is a governance token that allows the dYdX community to truly govern the dYdX Layer 2 Protocol. By enabling shared control of the protocol, DYDX allows traders, liquidity providers, and partners of dYdX to work collectively towards an enhanced Protocol.",
        pic: "@/assets/logos/DYDX.svg",
      },
    ],
    xdbeth: [
      {
        name: "DigitalBits Reddit",
        feed: "https://reddit.com/r/DigitalBits_XDB/.rss",
        site: "https://reddit.com/r/DigitalBits_XDB",
        about: "DigitalBits is a protocol and network layer blockchain designed to support consumer digital assets such as brand currencies.",
        pic: "@/assets/logos/XDB.svg",
      },
      {
        name: "DigitalBits Medium",
        feed: "https://medium.com/feed/digitalbitsorg",
        site: "https://medium.com/digitalbitsorg",
        about: "DigitalBits is a protocol and network layer blockchain designed to support consumer digital assets such as brand currencies.",
        pic: "@/assets/logos/XDB.svg",
      },
    ],
    vlxeth: [
      {
        name: "Velas Reddit",
        feed: "https://reddit.com/r/Velas/.rss",
        site: "https://reddit.com/r/Velas",
        about: "Velas is building a decentralized ecosystem of user-friendly, transparent and privacy-preserving products. VLX is a native coin of Velas blockchain that is bridged to Ethereum and other chains.",
        pic: "@/assets/logos/VLX.svg",
      },
      {
        name: "Velas Medium",
        feed: "https://medium.com/feed/velasblockchain",
        site: "https://medium.com/velasblockchain",
        about: "Velas is building a decentralized ecosystem of user-friendly, transparent and privacy-preserving products. VLX is a native coin of Velas blockchain that is bridged to Ethereum and other chains.",
        pic: "@/assets/logos/VLX.svg",
      },
      {
        name: "Velas Blog",
        feed: "https://blog.velas.com/feed",
        site: "https://blog.velas.com",
        about: "Velas is building a decentralized ecosystem of user-friendly, transparent and privacy-preserving products. VLX is a native coin of Velas blockchain that is bridged to Ethereum and other chains.",
        pic: "@/assets/logos/VLX.svg",
      },
    ],
    fxeth: [
      {
        name: "Function X Reddit",
        feed: "https://reddit.com/r/FunctionX/.rss",
        site: "https://reddit.com/r/FunctionX",
        about: "Function X is an ecosystem built entirely on and for the blockchain. It consists of five elements: f(x) OS, f(x) public blockchain, f(x) FXTP, f(x) docker and f(x) IPFS.",
        pic: "@/assets/logos/FX.svg",
      },
      {
        name: "Function X Medium",
        feed: "https://medium.com/feed/functionx",
        site: "https://medium.com/functionx",
        about: "Function X is an ecosystem built entirely on and for the blockchain. It consists of five elements: f(x) OS, f(x) public blockchain, f(x) FXTP, f(x) docker and f(x) IPFS.",
        pic: "@/assets/logos/FX.svg",
      },
    ],
    asdeth: [
      {
        name: "ASD Reddit",
        feed: "https://reddit.com/r/BitMax/.rss",
        site: "https://reddit.com/r/BitMax",
        about: "AscendEX is a global digital asset financial platform founded by a group of Wall Street quantitative trading veterans in 2018, building on core value of “Efficiency, Resilience and Transparency.”",
        pic: "@/assets/logos/ASD.svg",
      },
      {
        name: "ASD Medium",
        feed: "https://medium.com/feed/bitmax-io",
        site: "https://medium.com/bitmax-io",
        about: "AscendEX is a global digital asset financial platform founded by a group of Wall Street quantitative trading veterans in 2018, building on core value of “Efficiency, Resilience and Transparency.”",
        pic: "@/assets/logos/ASD.svg",
      },
    ],
    crwnyeth: [
      {
        name: "Crowny Medium",
        feed: "https://crowny.medium.com/feed",
        site: "https://crowny.medium.com",
        about: "Crowny is a platform that will allow brands to create effective campaigns and reach their target audiences with ease and simplicity.",
        pic: "@/assets/logos/CRWNY.svg",
      },
    ],
    linksol: [
      {
        name: "Chainlink Reddit",
        feed: "https://reddit.com/r/chainlink/.rss",
        site: "https://reddit.com/r/chainlink",
        about: "Chainlink is a blockchain-base middleware, acting as a bridge between cryptocurrency smart contracts and off-chain resources like data feeds, various web APIs, and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "Chainlink Medium",
        feed: "https://medium.com/feed/chainlink",
        site: "https://medium.com/chainlink",
        about: "Chainlink is a blockchain-base middleware, acting as a bridge between cryptocurrency smart contracts and off-chain resources like data feeds, various web APIs, and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/feed",
        site: "https://blog.chain.link",
        about: "Chainlink is a blockchain-base middleware, acting as a bridge between cryptocurrency smart contracts and off-chain resources like data feeds, various web APIs, and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
    ],
    sushisol: [
      {
        name: "SushiSwap Reddit",
        feed: "https://reddit.com/r/SushiSwap/.rss",
        site: "https://reddit.com/r/SushiSwap",
        about: "SushiSwap (SUSHI) is an example of an automated market maker (AMM). An increasingly popular tool among cryptocurrency users, AMMs are decentralized exchanges which use smart contracts to create markets for any given pair of tokens.",
        pic: "@/assets/logos/SUSHI.svg",
      },
      {
        name: "SushiSwap Medium",
        feed: "https://sushichef.medium.com/feed",
        site: "https://sushichef.medium.com",
        about: "SushiSwap (SUSHI) is an example of an automated market maker (AMM). An increasingly popular tool among cryptocurrency users, AMMs are decentralized exchanges which use smart contracts to create markets for any given pair of tokens.",
        pic: "@/assets/logos/SUSHI.svg",
      },
    ],
    woosol: [
      {
        name: "WOO Network Medium",
        feed: "https://medium.com/feed/woonetwork",
        site: "https://medium.com/woonetwork",
        about: "Wootrade features alpha-based market-making abilities via partnerships with the leading quantitative trading teams globally.",
        pic: "@/assets/logos/WOO.svg",
      },
    ],
    c98sol: [
      {
        name: "Coin98 Blog",
        feed: "https://blog.coin98.com/rss",
        site: "https://blog.coin98.com",
        about: "Coin98 enables value transfer as easily as using the Internet by the innovation of Multi-chain Engine, Fully Automatic Liquidity and Space Gate, all in one Super Liquidity Aggregator.",
        pic: "@/assets/logos/C98.svg",
      },
    ],
    samosol: [
      {
        name: "Samoyedcoin Reddit",
        feed: "https://www.reddit.com/r/SamoyedCoin/.rss",
        site: "https://www.reddit.com/r/SamoyedCoin",
        about: "Samoyedcoin ($SAMO) is Solana’s cutest ambassador. It’s community-owned and fun!",
        pic: "@/assets/logos/SAMO.svg",
      },
      {
        name: "Samoyedcoin Medium",
        feed: "https://samoyedcoin.medium.com/feed",
        site: "https://samoyedcoin.medium.com",
        about: "Samoyedcoin ($SAMO) is Solana’s cutest ambassador. It’s community-owned and fun!",
        pic: "@/assets/logos/SAMO.svg",
      },
    ],
    mngosol: [
      {
        name: "Mango Markets Medium",
        feed: "https://medium.com/feed/blockworks-foundation",
        site: "https://medium.com/blockworks-foundation",
        about: "",
        pic: "@/assets/logos/MNGO.svg",
      },
    ],
    atlassol: [
      {
        name: "Star Atlas Reddit",
        feed: "https://reddit.com/r/staratlas/.rss",
        site: "https://reddit.com/r/staratlas",
        about: "Star Atlas is a virtual gaming metaverse based in the year 2620. In this distant future, three major factions have emerged; 1. The MUD Territory governed by humankind, 2. The ONI Region as a consortium of alien races, and 3. Sentient androids control the Ustur Sector.",
        pic: "@/assets/logos/ATLAS.svg",
      },
      {
        name: "Star Atlas Medium",
        feed: "https://medium.com/feed/star-atlas",
        site: "https://medium.com/star-atlas",
        about: "Star Atlas is a virtual gaming metaverse based in the year 2620. In this distant future, three major factions have emerged; 1. The MUD Territory governed by humankind, 2. The ONI Region as a consortium of alien races, and 3. Sentient androids control the Ustur Sector.",
        pic: "@/assets/logos/ATLAS.svg",
      },
    ],
    polissol: [
      {
        name: "Star Atlas DAO Reddit",
        feed: "https://reddit.com/r/staratlas/.rss",
        site: "https://reddit.com/r/staratlas",
        about: "Star Atlas is a next-gen gaming metaverse emerging from the confluence of state of the art blockchain, real-time graphics, multiplayer video games, and decentralized financial technologies.",
        pic: "@/assets/logos/POLIS.svg",
      },
      {
        name: "Star Atlas DAO Medium",
        feed: "https://medium.com/feed/star-atlas",
        site: "https://medium.com/star-atlas",
        about: "Star Atlas is a next-gen gaming metaverse emerging from the confluence of state of the art blockchain, real-time graphics, multiplayer video games, and decentralized financial technologies.",
        pic: "@/assets/logos/POLIS.svg",
      },
    ],
    orcasol: [
      {
        name: "Orca Reddit",
        feed: "https://reddit.com/r/orca_so/.rss",
        site: "https://reddit.com/r/orca_so",
        about: "The DEX for people, not programs.",
        pic: "@/assets/logos/ORCA.svg",
      },
      {
        name: "Orca Medium",
        feed: "https://orca-so.medium.com/feed",
        site: "https://orca-so.medium.com",
        about: "The DEX for people, not programs.",
        pic: "@/assets/logos/ORCA.svg",
      },
    ],
    aurysol: [
      {
        name: "Aurory Medium",
        feed: "https://auroryproject.medium.com/feed",
        site: "https://auroryproject.medium.com",
        about: "Aurory is a JRPG computer game where people will evolve in a rich and diverse universe. In this world, players will discover Antik and Cryptos, two different areas and biomes. They will meet several NPCs and the mystical creatures that are living in this world, called Nefties.",
        pic: "@/assets/logos/AURY.svg",
      },
    ],
    slndsol: [
      {
        name: "Solend Reddit",
        feed: "https://reddit.com/r/solend/.rss",
        site: "https://reddit.com/r/solend",
        about: "Algorithmic, decentralized protocol for lending and borrowing on Solana.",
        pic: "@/assets/logos/SLND.svg",
      },
    ],
    sbrsol: [
      {
        name: "Saber Blog",
        feed: "https://blog.saber.so/feed",
        site: "https://blog.saber.so",
        about: "Saber Labs contributes to Saber, a cross-chain stablecoin exchange on Solana. Saber provides the liquidity foundation for stablecoins, which is a type of cryptocurrency whose value is pegged to another asset, like the US dollar or bitcoin.",
        pic: "@/assets/logos/SBR.svg",
      },
    ],
    liqsol: [
    ],
    snysol: [
    ],
    portsol: [
    ],
    abrsol: [
      {
        name: "Allbridge Reddit",
        feed: "https://reddit.com/r/allbridge/.rss",
        site: "https://reddit.com/r/allbridge",
        about: "Allbridge is a simple, modern, and reliable way to transfer assets between blockchains.",
        pic: "@/assets/logos/ABR.svg",
      },
      {
        name: "Allbridge Medium",
        feed: "https://allbridge.medium.com/feed",
        site: "https://allbridge.medium.com",
        about: "Allbridge is a simple, modern, and reliable way to transfer assets between blockchains.",
        pic: "@/assets/logos/ABR.svg",
      },
    ],
    crpsol: [
      {
        name: "CropperFinance Medium",
        feed: "https://cropperfinance.medium.com/feed",
        site: "https://cropperfinance.medium.com",
        about: "CranePay [CRP] is a cryptocurrency, which is a direct descendant of Bitcoin and based on the ideas of decentralized P2P networks from Satoshi Nakamoto.",
        pic: "@/assets/logos/CRP.svg",
      },
    ],
    ivnsol: [
      {
        name: "Investin Medium",
        feed: "https://medium.com/feed/investin-pro",
        site: "https://medium.com/investin-pro",
        about: "IVN Security is a decentralised security service network aiming for a free and secure Internet using blockchain technology.",
        pic: "@/assets/logos/IVN.svg",
      },
    ],
    grapesol: [
      {
        name: "Grape Network Medium",
        feed: "https://medium.com/feed/great-ape",
        site: "https://medium.com/great-ape",
        about: "",
        pic: "@/assets/logos/GRAPE.svg",
      },
    ],
    ninjasol: [
    ],
    fluxtrx: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    crwnysol: [
      {
        name: "Crowny Medium",
        feed: "https://crowny.medium.com/feed",
        site: "https://crowny.medium.com",
        about: "Crowny is a platform that will allow brands to create effective campaigns and reach their target audiences with ease and simplicity.",
        pic: "@/assets/logos/CRWNY.svg",
      },
    ],
    fluxsol: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    safemoonv2bep: [
      {
        name: "SafeMoon Reddit",
        feed: "https://www.reddit.com/r/SafeMoon/.rss",
        site: "https://www.reddit.com/r/SafeMoon",
        about: "SafeMoon Protocol is a decentralized finance (DeFi) token. According to the SafeMoon website, SafeMoon has three functions that take place during each trade: Reflection, LP Acquisition and Burn.",
        pic: "@/assets/logos/SAFEMOON.svg",
      },
    ],
    msolsol: [
      {
        name: "Marinade staked SOL (mSOL) Medium",
        feed: "https://medium.com/feed/marinade-finance",
        site: "https://medium.com/marinade-finance",
        about: undefined,
        pic: "@/assets/logos/MSOL.svg",
      },
    ],
    stsolsol: [
      {
        name: "Lido Staked SOL Reddit",
        feed: "https://www.reddit.com/r/lidofinance/.rss",
        site: "https://www.reddit.com/r/lidofinance",
        about: undefined,
        pic: "@/assets/logos/STSOL.svg",
      },
    ],
    slimsol: [
      {
        name: "Solanium Medium",
        feed: "https://medium.com/feed/@solanium",
        site: "https://medium.com/@solanium",
        about: undefined,
        pic: "@/assets/logos/SLIM.svg",
      },
    ],
    dflsol: [
      {
        name: "DeFi Land Medium",
        feed: "https://defiland.medium.com/feed",
        site: "https://defiland.medium.com",
        about: undefined,
        pic: "@/assets/logos/DFL.svg",
      },
    ],
    insol: [
      {
        name: "Sol Invictus Medium",
        feed: "https://medium.com/feed/@Sol-Invictus",
        site: "https://medium.com/@Sol-Invictus",
        about: undefined,
        pic: "@/assets/logos/IN.svg",
      },
    ],
    jetsol: [
      {
        name: "Jet Protocol Medium",
        feed: "https://medium.com/feed/jetprotocol",
        site: "https://medium.com/jetprotocol",
        about: undefined,
        pic: "@/assets/logos/JET.svg",
      },
      {
        name: "Jet Protocol Reddit",
        feed: "https://www.reddit.com/r/jetprotocol/.rss",
        site: "https://www.reddit.com/r/jetprotocol",
        about: undefined,
        pic: "@/assets/logos/JET.svg",
      },
    ],
    dxlsol: [
      {
        name: "Dexlab Medium",
        feed: "https://medium.com/feed/dexlab-official",
        site: "https://medium.com/dexlab-official",
        about: undefined,
        pic: "@/assets/logos/DXL.svg",
      },
    ],
    likesol: [
      {
        name: "Only1 (LIKE) Medium",
        feed: "https://only1nft.medium.com/feed",
        site: "https://only1nft.medium.com",
        about: undefined,
        pic: "@/assets/logos/LIKE.svg",
      },
    ],
    mndesol: [
      {
        name: "Marinade Medium",
        feed: "https://medium.com/feed/marinade-finance",
        site: "https://medium.com/marinade-finance",
        about: undefined,
        pic: "@/assets/logos/MNDE.svg",
      },
    ],
    whapisol: [
      {
        name: "Wrapped HAPI Medium",
        feed: "https://medium.com/feed/i-am-hapi",
        site: "https://medium.com/i-am-hapi",
        about: undefined,
        pic: "@/assets/logos/WHAPI.svg",
      },
    ],
    rinsol: [
      {
        name: "Aldrin Medium",
        feed: "https://aldrin-rin.medium.com/feed",
        site: "https://aldrin-rin.medium.com",
        about: undefined,
        pic: "@/assets/logos/RIN.svg",
      },
    ],
    cyssol: [
      {
        name: "Cyclos Medium",
        feed: "https://medium.com/feed/@cyclosfinance",
        site: "https://medium.com/@cyclosfinance",
        about: undefined,
        pic: "@/assets/logos/CYS.svg",
      },
    ],
    fabsol: [
      {
        name: "FABRIC Medium",
        feed: "https://xfabric.medium.com/feed",
        site: "https://xfabric.medium.com",
        about: undefined,
        pic: "@/assets/logos/FAB.svg",
      },
    ],
    wagsol: [
      {
        name: "Waggle Network Medium",
        feed: "https://medium.com/feed/@wagglenetwork",
        site: "https://medium.com/@wagglenetwork",
        about: undefined,
        pic: "@/assets/logos/WAG.svg",
      },
    ],
    molasol: [
      {
        name: "MOONLANA Medium",
        feed: "https://moonlana.medium.com/feed",
        site: "https://moonlana.medium.com",
        about: undefined,
        pic: "@/assets/logos/MOLA.svg",
      },
      {
        name: "MOONLANA Reddit",
        feed: "https://www.reddit.com/r/MoonLana/.rss",
        site: "https://www.reddit.com/r/MoonLana",
        about: undefined,
        pic: "@/assets/logos/MOLA.svg",
      },
    ],
    soldsol: [
      {
        name: "Solanax Medium",
        feed: "https://medium.com/feed/@solanax",
        site: "https://medium.com/@solanax",
        about: undefined,
        pic: "@/assets/logos/SOLD.svg",
      },
      {
        name: "Solanax Reddit",
        feed: "https://www.reddit.com/r/Solanax/.rss",
        site: "https://www.reddit.com/r/Solanax",
        about: undefined,
        pic: "@/assets/logos/SOLD.svg",
      },
    ],
    catosol: [
      {
        name: "CATO Medium",
        feed: "https://medium.com/feed/@solanacato",
        site: "https://medium.com/@solanacato",
        about: undefined,
        pic: "@/assets/logos/CATO.svg",
      },
    ],
    cstrsol: [
      {
        name: "CoreStarter Medium",
        feed: "https://corestarter.medium.com/feed",
        site: "https://corestarter.medium.com",
        about: undefined,
        pic: "@/assets/logos/CSTR.svg",
      },
    ],
    saosol: [
      {
        name: "Sator Medium",
        feed: "https://satortoken.medium.com/feed",
        site: "https://satortoken.medium.com",
        about: undefined,
        pic: "@/assets/logos/SAO.svg",
      },
      {
        name: "Sator Reddit",
        feed: "https://www.reddit.com/r/SatorSAO/.rss",
        site: "https://www.reddit.com/r/SatorSAO",
        about: undefined,
        pic: "@/assets/logos/SAO.svg",
      },
    ],
    apyssol: [
      {
        name: "APYSwap Medium",
        feed: "https://apyswap.medium.com/feed",
        site: "https://apyswap.medium.com",
        about: undefined,
        pic: "@/assets/logos/APYS.svg",
      },
      {
        name: "APYSwap Reddit",
        feed: "https://reddit.com/r/apyswap/.rss",
        site: "https://reddit.com/r/apyswap",
        about: undefined,
        pic: "@/assets/logos/APYS.svg",
      },
    ],
    sunnysol: [
      {
        name: "Sunny Governance Token Medium",
        feed: "https://medium.com/feed/sunny-aggregator",
        site: "https://medium.com/sunny-aggregator",
        about: undefined,
        pic: "@/assets/logos/SUNNY.svg",
      },
      {
        name: "Sunny Governance Token Reddit",
        feed: "https://www.reddit.com/r/SunnyAggregator/.rss",
        site: "https://www.reddit.com/r/SunnyAggregator",
        about: undefined,
        pic: "@/assets/logos/SUNNY.svg",
      },
    ],
    kurosol: [
      {
        name: "Kurobi Medium",
        feed: "https://kurobi.medium.com/feed",
        site: "https://kurobi.medium.com",
        about: undefined,
        pic: "@/assets/logos/KURO.svg",
      },
    ],
    babena: [
      {
        name: "Babena Medium",
        feed: "https://thanos-42.medium.com/feed",
        site: "https://thanos-42.medium.com",
        about: "Babena is a new token on the Kadena network. We took a CEFI concept and turned it into DEFI.",
        pic: "@/assets/logos/BABENA.svg",
      },
    ],
    fio: [
      {
        name: "Fio Medium",
        feed: "https://medium.com/feed/fio-blog",
        site: "https://medium.com/fio-blog",
        about: "FIO Protocol (FIO) is a blockchain protocol that aims to enable a better way of sending/receiving coins and tokens.",
        pic: "@/assets/logos/FIO.svg",
      },
      {
        name: "Fio Reddit",
        feed: "https://www.reddit.com/r/officialFIO/.rss",
        site: "https://www.reddit.com/r/officialFIO",
        about: "FIO Protocol (FIO) is a blockchain protocol that aims to enable a better way of sending/receiving coins and tokens.",
        pic: "@/assets/logos/FIO.svg",
      },
    ],
    kdlaunch: [
      {
        name: "KDLaunch Medium",
        feed: "https://kdlaunch.medium.com/feed",
        site: "https://kdlaunch.medium.com",
        about: "KDLaunch is the premiere launchpad on Kadena, enabling new projects to launch fairly, safely, and securely.",
        pic: "@/assets/logos/KDL.svg",
      },
    ],
    smtfbep: [
      {
        name: "SmartFi Medium",
        feed: "https://medium.com/feed/@SmartFiPortal",
        site: "https://medium.com/@SmartFiPortal",
        about: "SmartFi provides easy to use financial tools to earn, trade and lend crypto.",
        pic: "@/assets/logos/SMTF.svg",
      },
      {
        name: "SmartFi Reddit",
        feed: "https://reddit.com/r/SmartFi/.rss",
        site: "https://reddit.com/r/SmartFi",
        about: "SmartFi provides easy to use financial tools to earn, trade and lend crypto.",
        pic: "@/assets/logos/SMTF.svg",
      },
    ],
    lunaterra: [
      {
        name: "Terra (LUNA) Medium",
        feed: "https://medium.com/feed/terra-money",
        site: "https://medium.com/terra-money",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/LUNA.svg",
      },
      {
        name: "Terra (LUNA) Reddit",
        feed: "https://www.reddit.com/r/terraluna/.rss",
        site: "https://www.reddit.com/r/terraluna",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/LUNA.svg",
      },
    ],
    ustterra: [
      {
        name: "Terra (UST) Medium",
        feed: "https://medium.com/feed/terra-money",
        site: "https://medium.com/terra-money",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/UST.svg",
      },
      {
        name: "Terra (UST) Reddit",
        feed: "https://www.reddit.com/r/terraluna/.rss",
        site: "https://www.reddit.com/r/terraluna",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/UST.svg",
      },
    ],
    sdtterra: [
      {
        name: "Terra (SDT) Medium",
        feed: "https://medium.com/feed/terra-money",
        site: "https://medium.com/terra-money",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/SDT.svg",
      },
      {
        name: "Terra (SDT) Reddit",
        feed: "https://www.reddit.com/r/terraluna/.rss",
        site: "https://www.reddit.com/r/terraluna",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/SDT.svg",
      },
    ],
    krtterra: [
      {
        name: "Terra (KRT) Medium",
        feed: "https://medium.com/feed/terra-money",
        site: "https://medium.com/terra-money",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/KRT.svg",
      },
      {
        name: "Terra (KRT) Reddit",
        feed: "https://www.reddit.com/r/terraluna/.rss",
        site: "https://www.reddit.com/r/terraluna",
        about: "Terra aims to build a new financial infrastructure that works better for everyone.",
        pic: "@/assets/logos/KRT.svg",
      },
    ],
    mamznterra: [
      {
        name: "Mirror (mAMZN) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Amazon (mAMZN) is a synthetic asset tracking the price of an Amazon stock.",
        pic: "@/assets/logos/MAMZN.svg",
      },
    ],
    maaplterra: [
      {
        name: "Mirror (mAAPL) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Apple (mAAPL) is a synthetic asset tracking the price of an Apple stock.",
        pic: "@/assets/logos/MAAPL.svg",
      },
    ],
    mabnbterra: [
      {
        name: "Mirror (mABNB) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Airbnb (mABNB) is a synthetic asset tracking the price of an Airbnb stock.",
        pic: "@/assets/logos/MABNB.svg",
      },
    ],
    mcointerra: [
      {
        name: "Mirror (mCOIN) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Coinbase (mCOIN) is a synthetic asset tracking the price of a Coinbase stock.",
        pic: "@/assets/logos/MCOIN.svg",
      },
    ],
    mmsftterra: [
      {
        name: "Mirror (mMSFT) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Microsoft (mMSFT) is a synthetic asset tracking the price of a Microsoft stock.",
        pic: "@/assets/logos/MMSFT.svg",
      },
    ],
    mgooglterra: [
      {
        name: "Mirror (mGOOGL) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Google (mGOOGL) is a synthetic asset tracking the price of a Google stock.",
        pic: "@/assets/logos/MGOOGL.svg",
      },
    ],
    mtslaterra: [
      {
        name: "Mirror (mTSLA) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Tesla (mTSLA) is a synthetic asset tracking the price of an Tesla stock.",
        pic: "@/assets/logos/MTSLA.svg",
      },
    ],
    mtwtrterra: [
      {
        name: "Mirror (mTWTR) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Twitter (mTWTR) is a synthetic asset tracking the price of a Twitter stock.",
        pic: "@/assets/logos/MTWTR.svg",
      },
    ],
    mnflxterra: [
      {
        name: "Mirror (mNFLX) Medium",
        feed: "https://medium.com/feed/@mirror-protocol",
        site: "https://medium.com/@mirror-protocol",
        about: "Mirrored Netflix (mNFLX) is a synthetic asset tracking the price of a Netflix stock.",
        pic: "@/assets/logos/MNFLX.svg",
      },
    ],
    saito: [
      {
        name: "Saito Blog",
        feed: "https://org.saito.tech/blog/feed",
        site: "https://org.saito.tech/blog",
        about: "Saito is a layer one blockchain that pays nodes in the P2P network instead of miners or stakers.",
        pic: "@/assets/logos/SAITO.svg",
      },
      {
        name: "Saito Reddit",
        feed: "https://www.reddit.com/r/SaitoIO/.rss",
        site: "https://www.reddit.com/r/SaitoIO",
        about: "Saito is a layer one blockchain that pays nodes in the P2P network instead of miners or stakers.",
        pic: "@/assets/logos/SAITO.svg",
      },
      {
        name: "Saito Medium",
        feed: "https://saitoofficial.medium.com/feed",
        site: "https://saitoofficial.medium.com",
        about: "Saito is a layer one blockchain that pays nodes in the P2P network instead of miners or stakers.",
        pic: "@/assets/logos/SAITO.svg",
      },
    ],
    bittorrenttron: [
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "@/assets/logos/BTT.svg",
      },
    ],
    bittorrenteth: [
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "@/assets/logos/BTT.svg",
      },
    ],
    bittorrentbsc: [
      {
        name: "BitTorrent Reddit",
        feed: "https://www.reddit.com/r/bittorrent/.rss",
        site: "https://www.reddit.com/r/bittorrent",
        about: "BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform which has become increasingly decentralized in recent years.",
        pic: "@/assets/logos/BTT.svg",
      },
    ],
    egldbsc: [
      {
        name: "ElrondNetwork Reddit",
        feed: "https://www.reddit.com/r/elrondnetwork/.rss",
        site: "https://www.reddit.com/r/elrondnetwork",
        about: "Elrond is the internet-scale blockchain, designed from scratch that introduces two key innovations: a novel Adaptive State Sharding mechanism, and a Secure Proof of Stake algorithm.",
        pic: "@/assets/logos/EGLD.svg",
      },
      {
        name: "ElrondNetwork Medium",
        feed: "https://medium.com/feed/elrondnetwork",
        site: "https://medium.com/elrondnetwork",
        about: "Elrond is the internet-scale blockchain, designed from scratch that introduces two key innovations: a novel Adaptive State Sharding mechanism, and a Secure Proof of Stake algorithm.",
        pic: "@/assets/logos/EGLD.svg",
      },
    ],
    xhteth: [
      {
        name: "HollaEx Token Reddit",
        feed: "https://www.reddit.com/r/hollaex/.rss",
        site: "https://www.reddit.com/r/hollaex",
        about: "HollaEx Token or XHT is a token issued by HollaEx.",
        pic: "@/assets/logos/XHT.svg",
      },
    ],
    backalleykda: [
      {
        name: "Backalley Medium",
        feed: "https://medium.com/feed/@backalley",
        site: "https://medium.com/@backalley",
        about: "Backalley is a permissionless launchpad built on the Kadena blockchain.",
        pic: "@/assets/logos/BKA.svg",
      },
    ],
    kdswapkda: [
    ],
    avaxavalanchex: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
    ],
    avaxavalanchec: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
    ],
    avaxavalanchep: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
    ],
    ausdc: [
      {
        name: "USD Coin Blog",
        feed: "https://www.circle.com/blog/rss.xml",
        site: "https://www.circle.com/blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
      {
        name: "USD Coin Medium",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    usdce: [
      {
        name: "USD Coin Blog",
        feed: "https://www.circle.com/blog/rss.xml",
        site: "https://www.circle.com/blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
      {
        name: "USD Coin Medium",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    ausdt: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    usdte: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    wethe: [
      {
        name: "Ethereum Reddit",
        feed: "https://www.reddit.com/r/ethereum/.rss",
        site: "https://www.reddit.com/r/ethereum",
        about: "Ethereum Reddit with the latest news and announcements",
        pic: "@/assets/logos/WETH.svg",
      },
    ],
    wbtce: [
    ],
    daie: [
      {
        name: "Dai Reddit",
        feed: "https://www.reddit.com/r/MakerDAO/.rss",
        site: "https://www.reddit.com/r/MakerDAO",
        about: "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
        pic: "@/assets/logos/DAI.svg",
      },
      {
        name: "Dai Blog",
        feed: "https://blog.makerdao.com/feed",
        site: "https://blog.makerdao.com",
        about: "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
        pic: "@/assets/logos/DAI.svg",
      },
      {
        name: "Dai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.",
        pic: "@/assets/logos/DAI.svg",
      },
    ],
    linke: [
      {
        name: "Chainlink Reddit",
        feed: "https://reddit.com/r/chainlink/.rss",
        site: "https://reddit.com/r/chainlink",
        about: "Chainlink is a blockchain-base middleware, acting as a bridge between cryptocurrency smart contracts and off-chain resources like data feeds, various web APIs, and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "Chainlink Medium",
        feed: "https://medium.com/feed/chainlink",
        site: "https://medium.com/chainlink",
        about: "Chainlink is a blockchain-base middleware, acting as a bridge between cryptocurrency smart contracts and off-chain resources like data feeds, various web APIs, and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
      {
        name: "Chainlink Blog",
        feed: "https://blog.chain.link/feed",
        site: "https://blog.chain.link",
        about: "Chainlink is a blockchain-base middleware, acting as a bridge between cryptocurrency smart contracts and off-chain resources like data feeds, various web APIs, and traditional bank account payments.",
        pic: "@/assets/logos/LINK.svg",
      },
    ],
    wavax: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/AVAX.svg",
      },
    ],
    savax: [
      {
        name: "Avalanche Medium",
        feed: "https://medium.com/feed/avalancheavax",
        site: "https://medium.com/avalancheavax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/SAVAX.svg",
      },
      {
        name: "Avalanche Reddit",
        feed: "https://reddit.com/r/Avax/.rss",
        site: "https://reddit.com/r/Avax",
        about: "Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.",
        pic: "@/assets/logos/SAVAX.svg",
      },
    ],
    joe: [
      {
        name: "Joe Reddit",
        feed: "https://reddit.com/r/traderjoe_xyz/.rss",
        site: "https://reddit.com/r/traderjoe_xyz",
        about: "Trader Joe is a one-stop decentralized trading platform on the Avalanche network. It combines DEX services with DeFi lending to offer leveraged trading.",
        pic: "@/assets/logos/JOE.svg",
      },
    ],
    qi: [
      {
        name: "Benqi Medium",
        feed: "https://benqifinance.medium.com/feed",
        site: "https://benqifinance.medium.com",
        about: "BENQI is a non-custodial liquidity market protocol, built on Avalanche.",
        pic: "@/assets/logos/QI.svg",
      },
    ],
    yusd: [
      {
        name: "Yeti USD Medium",
        feed: "https://yetifinance.medium.com/feed",
        site: "https://yetifinance.medium.com",
        about: "Yeti Stablecoin pegged to USD",
        pic: "@/assets/logos/YUSD.svg",
      },
    ],
    mokkda: [
      {
        name: "Miners of Kadenia Medium",
        feed: "https://medium.com/feed/@TheMinersOfKadenia",
        site: "https://medium.com/@TheMinersOfKadenia",
        about: "The Miners of Kadenia is Kadena’s very first Game-Fi protocol and the first Game-Fi to be exclusively hosted on decentralized Flux Nodes",
        pic: "@/assets/logos/MOK.svg",
      },
    ],
    usdctrc: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    fluxavax: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    kdx: [
      {
        name: "eckoDEX Blog",
        feed: "https://blog.ecko.finance/rss",
        site: "https://blog.ecko.finance",
        about: "eckoDEX is end-to-end decentralized trading on Kadena",
        pic: "@/assets/logos/KDX.svg",
      },
    ],
    skdx: [
      {
        name: "eckoDEX Blog",
        feed: "https://blog.ecko.finance/rss",
        site: "https://blog.ecko.finance",
        about: "eckoDEX is end-to-end decentralized trading on Kadena",
        pic: "@/assets/logos/KDX.svg",
      },
    ],
    ergo: [
      {
        name: "Ergo Reddit",
        feed: "https://reddit.com/r/ergonauts/.rss",
        site: "https://reddit.com/r/ergonauts",
        about: "Ergo is a next-generation Proof of Work smart-contract platform that enables new models of financial interaction, underpinned by a safe and rich scripting language built with flexible and powerful Zero-Knowledge proofs (Σ-protocols).",
        pic: "@/assets/logos/ERG.svg",
      },
    ],
    fluxerg: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    sigmausd: [],
    sigmarsv: [],
    erdoge: [
    ],
    ergopad: [
      {
        name: "Ergopad Blog",
        feed: "https://ergopad.medium.com/feed",
        site: "https://ergopad.medium.com",
        about: "Official Ergopad Twitter.",
        pic: "@/assets/logos/ERGOPAD.svg",
      },
    ],
    paideia: [
    ],
    ergoland: [
    ],
    egio: [
    ],
    comet: [
    ],
    noweth: [
      {
        name: "ChangeNOW Token Blog",
        feed: "https://changenow-io.medium.com/feed",
        site: "https://changenow-io.medium.com",
        about: "Official ChangeNOW Blog.",
        pic: "@/assets/logos/NOW.svg",
      },
      {
        name: "ChangeNOW Token Reddit",
        feed: "https://reddit.com/r/ChangeNOW_io/.rss",
        site: "https://www.reddit.com/r/ChangeNOW_io",
        about: "Official ChangeNOW Reddit.",
        pic: "@/assets/logos/NOW.svg",
      },
    ],
    nowbnb: [
      {
        name: "ChangeNOW Token Blog",
        feed: "https://changenow-io.medium.com/feed",
        site: "https://changenow-io.medium.com",
        about: "Official ChangeNOW Blog.",
        pic: "@/assets/logos/NOW.svg",
      },
      {
        name: "ChangeNOW Token Reddit",
        feed: "https://reddit.com/r/ChangeNOW_io/.rss",
        site: "https://www.reddit.com/r/ChangeNOW_io",
        about: "Official ChangeNOW Reddit.",
        pic: "@/assets/logos/NOW.svg",
      },
    ],
    rsrerc: [
      {
        name: "Reserve Rights Medium",
        feed: "https://medium.com/feed/reserve-currency",
        site: "https://medium.com/reserve-currency",
        about: "Reserve Rights is a dual-token stablecoin platform that was launched in May 2019 following a successful initial exchange offering (IEO) on the Huobi Prime platform.",
        pic: "@/assets/logos/RSR.svg",
      },
    ],
    algorand: [
      {
        name: "Algorand Blog",
        feed: "https://medium.com/feed/algorand-foundation",
        site: "https://medium.com/algorand-foundation",
        about: "Official Algorand Blog.",
        pic: "@/assets/logos/ALGO.svg",
      },
      {
        name: "Algorand Reddit",
        feed: "https://reddit.com/r/AlgorandOfficial/.rss",
        site: "https://www.reddit.com/r/AlgorandOfficial",
        about: "Official Algorand Blog.",
        pic: "@/assets/logos/ALGO.svg",
      },
    ],
    usdtalgo: [
      {
        name: "Tether Reddit",
        feed: "https://reddit.com/r/Tether/.rss",
        site: "https://reddit.com/r/Tether",
        about: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
        pic: "@/assets/logos/USDT.svg",
      },
    ],
    usdcalgo: [
      {
        name: "Centre Blog",
        feed: "https://medium.com/feed/centre-blog",
        site: "https://medium.com/centre-blog",
        about: "USDC provides a fully collateralized US dollar stablecoin, and is based on the open source asset-backed stablecoin framework developed by Centre.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    planetsalgo: [
      {
        name: "PlanetWatch Blog",
        feed: "https://medium.com/feed/planet-watch",
        site: "https://medium.com/planet-watch",
        about: "Your planet needs you.",
        pic: "@/assets/logos/Planets.svg",
      },
    ],
    xetalgo: [
      {
        name: "Xfinite Official",
        feed: "https://medium.com/feed/xfiniteofficial",
        site: "https://medium.com/xfiniteofficial",
        about: "Welcome To The World Of Decentralized Entertainment Ecosystem",
        pic: "@/assets/logos/XET.svg",
      },
    ],
    opulalgo: [
      {
        name: "Opulous",
        feed: "https://opulous.medium.com/feed",
        site: "https://opulous.medium.com",
        about: "Bringing Music Assets into DeFi",
        pic: "@/assets/logos/OPUL.svg",
      },
    ],
    stblalgo: [
    ],
    fluxalgo: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    kaspa: [
      {
        name: "Kaspa Blog",
        feed: "https://hashdag.medium.com/feed",
        site: "https://hashdag.medium.com",
        about: "Kaspa is a proof-of-work (PoW) cryptocurrency which implements the GHOSTDAG protocol.",
        pic: "@/assets/logos/KAS.svg",
      },
      {
        name: "Kaspa Reddit",
        feed: "https://www.reddit.com/r/kaspa/.rss",
        site: "https://www.reddit.com/r/kaspa",
        about: "Kaspa is a proof-of-work (PoW) cryptocurrency which implements the GHOSTDAG protocol.",
        pic: "@/assets/logos/KAS.svg",
      },
    ],
    fluxmatic: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    usdcgoerli: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    zusdtestkda: [],
    zusdkda: [],
    developmentkadena: [
      {
        name: "Kadena Medium",
        feed: "https://medium.com/feed/kadena-io",
        site: "https://medium.com/kadena-io",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/KDA.svg",
      },
      {
        name: "Kadena Reddit",
        feed: "https://www.reddit.com/r/kadena/.rss",
        site: "https://www.reddit.com/r/kadena",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/KDA.svg",
      },
    ],
    base: [
      {
        name: "Base Reddit",
        feed: "https://www.reddit.com/r/CoinBase/.rss",
        site: "https://www.reddit.com/r/CoinBase",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/BASE.svg",
      },
    ],
    basegoerli: [
      {
        name: "Base Reddit",
        feed: "https://www.reddit.com/r/CoinBase/.rss",
        site: "https://www.reddit.com/r/CoinBase",
        about: "Kadena offers the fastest, safest and most scalable hybrid blockchain technology stack for entrepreneurs. Smarter contracts//Scaling proof of work securely.",
        pic: "@/assets/logos/BASE.svg",
      },
    ],
    usdcbase: [
      {
        name: "Circle Blog",
        feed: "https://medium.com/feed/circle-blog",
        site: "https://medium.com/circle-blog",
        about: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin created by Coinbase.",
        pic: "@/assets/logos/USDC.svg",
      },
    ],
    daibase: [
      {
        name: "Sai Blog",
        feed: "https://medium.com/feed/@MakerDAO",
        site: "https://medium.com/@MakerDAO",
        about: "Sai is an asset-backed, hard currency for the 21st century. The first decentralized stablecoin on the Ethereum blockchain.",
        pic: "@/assets/logos/SAI.svg",
      },
    ],
    fluxbase: [
      {
        name: "Flux Blog",
        feed: "https://fluxofficial.medium.com/feed",
        site: "https://fluxofficial.medium.com",
        about: "Blog source for all things Flux, officially, from the Zelcore Team.",
        pic: "@/assets/logos/FLUX.svg",
      },
    ],
    clore: [
    ],
  },
};

export default {
  newssources,
};
