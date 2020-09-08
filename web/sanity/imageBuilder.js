import client from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
const urlBuild = (source) => builder.image(source).url();

export default urlBuild;
