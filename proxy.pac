const proxyhosts = [
    "mega.nz",
    "mega.io",
    "mega.co.nz"
  ]
  
  function FindProxyForURL (url, host) {
    if (proxyhosts.includes(host) || url.includes("mega.co.nz")) {
      return 'PROXY 127.0.0.1:9666';
    }
  
    return 'DIRECT';
  }