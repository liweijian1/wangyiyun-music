export default class Song{
  constructor({id, mid, singer, name, album, duration, image, url, aliaName}){
    this.id = id
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
    this.aliaName = aliaName
  }
}

function singerName(arr){
  let name = []
  name = arr.map((item)=>{
    return item.name
  })
  return name.join('/')

}
export function createRecommmendSong(music){
  return new Song({
    id:music.id,
    singer:singerName(music.song.artists),
    name:music.name,
    album:music.song.album.name,
    image:music.song.album.picUrl,
  })
}
