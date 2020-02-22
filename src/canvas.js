function canvasComponent() {
    var canvas = document.getElementById('canvas')

    // document.body.style.margin = 0
    canvas.style.position = 'fixed'

    var ctx = canvas.getContext('2d')

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // last known position
    let rect = canvas.getBoundingClientRect()
    var pos = { x: rect.x, y: rect.y }

    // window.addEventListener('resize', resize)
    document.addEventListener('mousemove', draw)
    document.addEventListener('mousedown', setPosition)
    document.addEventListener('mouseenter', setPosition)

    function setPosition(e) {
        pos.x = e.clientX
        pos.y = e.clientY
    }

    function draw(e) {
        // mouse left button must be pressed
        if (e.buttons !== 1) return

        ctx.beginPath() // begin

        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'white'

        ctx.moveTo(pos.x, pos.y) // from
        setPosition(e)
        ctx.lineTo(pos.x, pos.y) // to

        ctx.stroke() // draw it!
    }
}

function clearCanvas() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getCanvasData() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    console.log(imageData)
    let datasetBytesView = []
    for (let j = 0; j < imageData.data.length / 4; j++) {
        // Read the red channel only
        // RGBA
        datasetBytesView[j] = imageData.data[j * 4] / 255
    }
    return datasetBytesView
}

module.exports = { canvasComponent, getCanvasData, clearCanvas }