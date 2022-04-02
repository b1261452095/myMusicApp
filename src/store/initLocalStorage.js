import { playListCategories } from '../utils/staticData'


const enabledPlaylistCategories = playListCategories.filter(a=>a.enable).map(a=>a.name)

console.log('enabledPlaylistCategories',enabledPlaylistCategories)

let localStorage = {
};

export default localStorage;