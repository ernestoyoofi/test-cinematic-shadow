var video = document.querySelector("video")
var canvas = document.querySelector("canvas")
var select = document.querySelector("select")
var isPlay = false;

video.addEventListener("play", () => { isPlay = true })
video.addEventListener("pause", () => { isPlay = false })

setInterval(() => {
  if(!video || !isPlay) return;
  canvas.width = video.clientWidth
  canvas.height = video.clientHeight
  var ctx = canvas.getContext("2d")
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
}, 100)

select.addEventListener("change", (e) => {
  video.src = e.target.value
  console.log(video.src)
})
