const navLinkItems = ["home", "features", "donate", "how it works"];

export const getHref = (title) => {
  return title.replaceAll(" ", '-');
};

export const isActive = (rawLocation, title) => {
  let location = rawLocation.substring(1, rawLocation.length)
  if(!title.split('').includes(' ')){
    if(location === ''){
      location = 'home'
      return location === title
    }
    return location === title
  }
  return location === title.replaceAll(" ", '-');
};

export default navLinkItems;
