const linkBuild = (link) => link.split(',');
const hrefBuild = (homePageLink) => homePageLink[0].trim();
const nameBuild = (homePageLink) => homePageLink[1].trim();

export { hrefBuild, linkBuild, nameBuild };
