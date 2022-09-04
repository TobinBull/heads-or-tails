let item: neopixel.Strip = null
let ZIP_LED = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    ZIP_LED.setPixelColor(12, neopixel.colors(NeoPixelColors.Yellow))
    ZIP_LED.show()
})
basic.forever(function () {
    item.setPixelColor(item, neopixel.colors(NeoPixelColors.Red))
    if (item < 24) {
        let Pixel: neopixel.Strip = null
        item += 1
        Pixel.show()
        Pixel.clear()
    } else if (item < 24) {
        item = 0
    }
})
