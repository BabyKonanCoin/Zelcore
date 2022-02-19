// Implemented exchanges information and stracture
const implementedExchanges = {
  // Coinbase Implementation
  coinbasepro: {
    name: "CoinbasePro",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://help.coinbase.com/en/pro/other-topics/api/how-do-i-create-an-api-key-for-coinbase-pro",
    msgName: "coinbasePro",
    msgDesc: "ex_coinbasePro_text",
    logolink: "static/logos/Exchanges/CoinbasePro.svg",
    hasFlux: false,
    ccxtName: "coinbasepro",
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
        fetchTickerMethod: "publicGetProductsIdStats",
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: true,
      token: false,
    },
    // web socket urls
    klineUri: null, // "wss://ws-feed.exchange.coinbase.com";
    aggregatedOrdersUrl: "wss://ws-feed.exchange.coinbase.com",
    tickerUrl: "wss://ws-feed.exchange.coinbase.com",
    // Bars resolutions
    barsRes: ["1", "5", "15", "60", "360", "1D"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      360: "6h",
      D: "1d",
      "1D": "1d",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      360: "6h",
      D: "1d",
      "1D": "1d",
    },
  },
  kucoin: {
    name: "KuCoin",
    isZelcorePlus: false,
    apiKeyHelpURL: "https://kucoin.zendesk.com/hc/en-us/articles/360015102174-How-to-Create-an-API",
    msgName: "kucoin",
    msgDesc: "ex_kucoin_text",
    logolink: "static/logos/Exchanges/KuCoin.svg",
    ccxtName: "kucoin",
    hasFlux: true,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: true,
      token: false,
    },
    // web socket urls
    klineUri: "wss://push1-v2.kucoin.com/endpoint",
    aggregatedOrdersUrl: "wss://push1-v2.kucoin.com/endpoint",
    tickerUrl: "wss://push1-v2.kucoin.com/endpoint",
    // Bars resolutions
    barsRes: ["1", "3", "5", "15", "30", "60", "120", "240", "360", "480", "720", "1D", "1W"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      360: "6h",
      480: "8h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 20,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1min",
      3: "3min",
      5: "5min",
      15: "15min",
      30: "30min",
      60: "1hour",
      120: "2hour",
      240: "4hour",
      360: "6hour",
      480: "8hour",
      720: "12hour",
      D: "1dy",
      "1D": "1day",
      W: "1week",
      "1W": "1week",
    },
  },
  ftx: {
    name: "FTX",
    isZelcorePlus: false,
    apiKeyHelpURL: "https://help.ftx.com/hc/en-us/articles/360028807171-API-docs",
    msgName: "ftx",
    msgDesc: "ex_ftx_text",
    logolink: "static/logos/Exchanges/FTX.svg",
    ccxtName: "ftx",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null, // "wss://ftx.com/ws";
    aggregatedOrdersUrl: "wss://ftx.com/ws",
    tickerUrl: "wss://ftx.com/ws",
    // Bars resolutions
    barsRes: ["1", "5", "15", "60", "240", "1D", "3D", "1W", "2W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      "2W": "2w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      // TODO no OHLCV
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      "2W": "2w",
      M: "1M",
      "1M": "1M",
    },
  },
  ftxus: {
    name: "FTXUS",
    isZelcorePlus: false,
    apiKeyHelpURL: "https://help.ftx.com/hc/en-us/articles/360028807171-API-docs",
    msgName: "ftx_us",
    msgDesc: "ex_ftx_text",
    logolink: "static/logos/Exchanges/FTXUS.svg",
    ccxtName: "ftx",
    hasFlux: false,
    ccxtOptions: {
      hostname: "ftx.us",
      name: "FTXUS",
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null, // "wss://ftx.us/ws";
    aggregatedOrdersUrl: "wss://ftx.us/ws",
    tickerUrl: "wss://ftx.us/ws",
    // Bars resolutions
    barsRes: ["1", "5", "15", "60", "240", "1D", "3D", "1W", "2W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      "2W": "2w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      // TODO no OHLCV
      1: "1m",
      5: "5m",
      15: "15m",
      60: "1h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      "2W": "2w",
      M: "1M",
      "1M": "1M",
    },
  },
  binance: {
    name: "Binance",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://www.binance.com/en/support/faq/360002502072",
    msgName: "binance",
    msgDesc: "ex_binance_text",
    logolink: "static/logos/Exchanges/Binance.svg",
    ccxtName: "binance",
    hasFlux: true,
    ccxtOptions: {
      // verbose: true,
      options: {
        fetchTradesWarning: false,
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://stream.binance.com:9443/ws/",
    aggregatedOrdersUrl: "wss://stream.binance.com:9443/ws/",
    tickerUrl: "wss://stream.binance.com:9443/ws/",
    // Bars resolutions
    barsRes: ["1", "3", "5", "15", "30", "60", "120", "240", "360", "480", "720", "1D", "3D", "1W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      360: "6h",
      480: "8h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      360: "6h",
      480: "8h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
  },
  binanceus: {
    name: "BinanceUS",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://www.binance.com/en/support/faq/360002502072",
    msgName: "binanceus",
    msgDesc: "ex_binanceus_text",
    logolink: "static/logos/Exchanges/BinanceUS.svg",
    ccxtName: "binanceus",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        fetchTradesWarning: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://stream.binance.us:9443/ws/",
    aggregatedOrdersUrl: "wss://stream.binance.us:9443/ws/",
    tickerUrl: "wss://stream.binance.us:9443/ws/",
    // Bars resolutions
    barsRes: ["1", "3", "5", "15", "30", "60", "120", "240", "360", "480", "720", "1D", "3D", "1W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      360: "6h",
      480: "8h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      360: "6h",
      480: "8h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
  },
  kraken: {
    name: "Kraken",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://support.kraken.com/hc/en-us/articles/360000919966-How-to-generate-an-API-key-pair-",
    msgName: "kraken",
    msgDesc: "ex_kraken_text",
    logolink: "static/logos/Exchanges/Kraken.svg",
    ccxtName: "kraken",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://ws.kraken.com",
    aggregatedOrdersUrl: "wss://ws.kraken.com",
    tickerUrl: "wss://ws.kraken.com",
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "240", "1D", "1W", "2W"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      "2W": "2w",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: 1,
      5: 5,
      15: 15,
      30: 30,
      60: 60,
      240: 240,
      D: 1440,
      "1D": 1440,
      W: 10080,
      "1W": 10080,
      "2W": 21600,
    },
  },
  huobi: {
    name: "Huobi",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://huobiapi.github.io/docs/spot/v1/en/#preparation",
    msgName: "huobi",
    msgDesc: "ex_huobi_text",
    logolink: "static/logos/Exchanges/Huobi.svg",
    ccxtName: "huobi",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://api.huobi.pro/ws",
    aggregatedOrdersUrl: "wss://api.huobi.pro/feed",
    tickerUrl: "wss://api.huobi.pro/ws",
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "240", "1D", "1W", "1M", "1Y"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
      Y: "1y",
      "1Y": "1y",
    },
    klineLimit: 999,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1min",
      5: "5min",
      15: "15min",
      30: "30min",
      60: "60min",
      240: "4hour",
      D: "1day",
      "1D": "1day",
      W: "1week",
      "1W": "1week",
      M: "1mon",
      "1M": "1mon",
      Y: "1year",
      "1Y": "1year",
    },
  },
  gemini: {
    name: "Gemini",
    isZelcorePlus: false,
    apiKeyHelpURL: "https://support.gemini.com/hc/en-us/articles/360031080191-How-do-I-create-an-API-key-",
    msgName: "gemini",
    msgDesc: "ex_gemini_text",
    logolink: "static/logos/Exchanges/Gemini.svg",
    hasFlux: false,
    ccxtName: "gemini",
    ccxtOptions: {
      // verbose: true,
      options: {
        fetchTickerMethod: "fetchTickerV1AndV2",
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://api.gemini.com/v2/marketdata",
    aggregatedOrdersUrl: "wss://api.gemini.com/v2/marketdata",
    tickerUrl: null,
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "360", "1D"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      360: "6h",
      D: "1d",
      "1D": "1d",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      360: "6h",
      D: "1d",
      "1D": "1d",
    },
  },
  bittrex: {
    name: "Bittrex",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://bittrex.zendesk.com/hc/en-us/articles/360031921872-How-to-create-an-API-key-",
    msgName: "bittrex",
    msgDesc: "ex_bittrex_text",
    logolink: "static/logos/Exchanges/Bittrex.svg",
    ccxtName: "bittrex",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null,
    aggregatedOrdersUrl: null,
    tickerUrl: null,
    // Bars resolutions
    barsRes: ["1", "5", "30", "60", "1D"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      30: "30m",
      60: "1h",
      D: "1d",
      "1D": "1d",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 25,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      5: "5m",
      30: "30m",
      60: "1h",
      D: "1d",
      "1D": "1d",
    },
  },
  gateio: {
    name: "Gateio",
    isZelcorePlus: false,
    apiKeyHelpURL: "https://support.gate.io/hc/en-us/articles/900000114363-What-are-APIKey-and-APIV4keys-for-",
    msgName: "gateio",
    msgDesc: "ex_gateio_text",
    logolink: "static/logos/Exchanges/Gateio.svg",
    ccxtName: "gateio",
    hasFlux: true,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://api.gateio.ws/ws/v4/",
    aggregatedOrdersUrl: "wss://api.gateio.ws/ws/v4/",
    tickerUrl: "wss://api.gateio.ws/ws/v4/",
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "240", "480", "1D", "7D"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      240: "4h",
      480: "8h",
      D: "1d",
      "1D": "1d",
      "7D": "7d",
    },
    klineLimit: 999,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      240: "4h",
      480: "8h",
      D: "1d",
      "1D": "1d",
      "7D": "7d",
    },
  },
  stex: {
    name: "Stex",
    isZelcorePlus: false,
    apiKeyHelpURL: "https://help.stex.com/en/articles/3417182-server-to-server-integration",
    msgName: "stex",
    msgDesc: "ex_stex_text",
    logolink: "static/logos/Exchanges/Stex.svg",
    ccxtName: "stex",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: false,
      secret: false,
      password: false,
      token: true,
    },
    // web socket urls
    klineUri: "wss://socket.stex.com/socket.io/?EIO=3&transport=websocket",
    aggregatedOrdersUrl: "wss://socket.stex.com/socket.io/?EIO=3&transport=websocket",
    tickerUrl: "wss://socket.stex.com/socket.io/?EIO=3&transport=websocket",
    // Bars resolutions
    barsRes: ["1", "5", "30", "60", "240", "720", "1D"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      30: "30m",
      60: "1h",
      240: "4h",
      720: "12h",
      D: "1d",
      "1D": "1d",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: 1,
      5: 5,
      30: 30,
      60: 60,
      240: 240,
      720: 720,
      D: "1D",
      "1D": "1D",
    },
  },
  ascendex: {
    name: "AscendEX",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://ascendex.com/en/help-center/articles/4405542558099",
    msgName: "ascendex",
    msgDesc: "ex_ascendex_text",
    logolink: "static/logos/Exchanges/AscendEX.svg",
    ccxtName: "ascendex",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://ascendex.com/0/api/pro/v1/stream",
    aggregatedOrdersUrl: "wss://ascendex.com/0/api/pro/v1/stream",
    tickerUrl: "wss://ascendex.com/0/api/pro/v1/stream",
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "120", "240", "360", "720", "1D", "1W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      360: "6h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1",
      5: "5",
      15: "15",
      30: "30",
      60: "60",
      120: "120",
      240: "240",
      360: "360",
      720: "720",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1m",
    },
  },
};

// eslint-disable-next-line no-unused-vars
const expirimentalExchanges = {
  aax: {
    name: "AAX",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://www.aax.com/apidoc/index.html#api-key",
    msgName: "aax",
    msgDesc: "ex_aax_text",
    logolink: "static/logos/Exchanges/AAX.svg",
    ccxtName: "aax",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null,
    aggregatedOrdersUrl: null,
    tickerUrl: null,
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "120", "240", "720", "1D", "3D", "1W"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      "3D": "3d",
      W: "1w",
      "1W": "1w",
    },
  },
  bitmart: {
    name: "BitMart",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://developer-pro.bitmart.com/en/part1/question/apikey.html",
    msgName: "bitmart",
    msgDesc: "ex_bitmart_text",
    logolink: "static/logos/Exchanges/Bitmart.svg",
    ccxtName: "bitmart",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
        watchOrderBook: {
          depth: "depth400",
        },
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null,
    aggregatedOrdersUrl: null,
    tickerUrl: null,
    // Bars resolutions
    barsRes: ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      45: "45m",
      60: "1h",
      120: "2h",
      180: "3h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      3: "3m",
      5: "5m",
      15: "15m",
      30: "30m",
      45: "45m",
      60: "1h",
      120: "2h",
      180: "3h",
      240: "4h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
  },
  bitmex: {
    name: "Bitmex",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://support.coinigy.com/hc/en-us/articles/360007187634-How-do-I-find-my-API-key-on-Bitmex-com-",
    msgName: "bitmex",
    msgDesc: "ex_bitmex_text",
    logolink: "static/logos/Exchanges/Bitmex.svg",
    ccxtName: "bitmex",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null,
    aggregatedOrdersUrl: null,
    tickerUrl: null,
    // Bars resolutions
    barsRes: ["1", "5", "60", "1D"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      60: "1h",
      D: "1d",
      "1D": "1d",
    },
    klineLimit: 750,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1m",
      5: "5m",
      60: "1h",
      D: "1d",
      "1D": "1d",
    },
  },
  bitforex: {
    name: "BitForex",
    isZelcorePlus: true,
    apiKeyHelpURL: "https://github.com/githubdev2020/API_Doc_en/wiki",
    msgName: "bitforex",
    msgDesc: "ex_bitforex_text",
    logolink: "test",
    ccxtName: "bitforex",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: "wss://www.bitforex.com/mkapi/coinGroup1/ws",
    aggregatedOrdersUrl: "wss://www.bitforex.com/mkapi/coinGroup1/ws",
    tickerUrl: "wss://www.bitforex.com/mkapi/coinGroup1/ws",
    // Bars resolutions
    barsRes: ["1", "5", "15", "30", "60", "120", "240", "720", "1D", "1W", "1M"],
    // OHVL CCXT interval
    intervalArray: {
      1: "1m",
      5: "5m",
      15: "15m",
      30: "30m",
      60: "1h",
      120: "2h",
      240: "4h",
      720: "12h",
      D: "1d",
      "1D": "1d",
      W: "1w",
      "1W": "1w",
      M: "1M",
      "1M": "1M",
    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {
      1: "1min",
      5: "5min",
      15: "15min",
      30: "30min",
      60: "1hour",
      120: "2hour",
      240: "4hour",
      720: "12hour",
      D: "1day",
      "1D": "1day",
      W: "1wwek",
      "1W": "1week",
      M: "1month",
      "1M": "1month",
    },
  },
};
// module.exports = expirimentalExchanges;

/*
test: {
    name: "test",
    isZelcorePlus: true,
    apiKeyHelpURL: "test",
    msgName: "test",
    msgDesc: "test",
    logolink: "test",
    ccxtName: "test",
    hasFlux: false,
    ccxtOptions: {
      // verbose: true,
      options: {
        // adjustForTimeDifference: false,
      },
    },
    apiData: {
      key: true,
      secret: true,
      password: false,
      token: false,
    },
    // web socket urls
    klineUri: null,
    aggregatedOrdersUrl: null,
    tickerUrl: null,
    // Bars resolutions
    barsRes: [],
    // OHVL CCXT interval
    intervalArray: {

    },
    klineLimit: 2500,
    aggregatedOrdersLimit: 50,
    // OHVL websocket interval or manual tv update same as interval
    interval: {

    },
  },

*/

export default {
  implementedExchanges,
};
