/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

// My Solution
const domainName = (url) => url.replace(/(https?\:\/\/)?(www\.)?/, '').split('.')[0]

// Better Solution
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// Another Solution
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// Another Solution
function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
}
