export function getHueColorOfImage(
  imgSrc: string,
  width: number,
  height: number
) {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext && canvas.getContext("2d")
  const averageColor = {
    r: 0,
    g: 0,
    b: 0,
  }

  if (!context) {
    return averageColor
  }

  return new Promise((resolve, reject) => {
    try {
      let image = new Image()
      image.src = imgSrc
      image.onload = () => {
        context.drawImage(image, 0, 0)
        const imageData = context.getImageData(0, 0, width, height).data
        const length = imageData.length

        for (let i = 0; i < length; i += 4) {
          averageColor.r += imageData[i]
          averageColor.g += imageData[i + 1]
          averageColor.b += imageData[i + 2]
        }

        const count = length / 4
        averageColor.r = ~~(averageColor.r / count) // ~~ => convert to int
        averageColor.g = ~~(averageColor.g / count)
        averageColor.b = ~~(averageColor.b / count)

        resolve(averageColor)
      }
    } catch (e) {
      reject(e)
    }
  })
}
