input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    asr.delASRLearn()
    asr.setASRLearn()
    ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
    ESP8266_IoT.connectWifi("your_ssid", "your_pwd")
    OLED.init(128, 64)
    tft24.backlightCtrl(tft24.BlkCmdEnum.BlkOpen)
    tft24.setPenColor(tft24.colorIndexPicker(0xB6C7EA))
    DFRobotMaqueenPlus.PID(PID.ON)
    DFRobotMaqueenPlus.I2CInit()
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGBW)
    for (let index = 0; index < 900; index++) {
        strip.showRainbow(1, 990)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
let strip: neopixel.Strip = null
Environment.ledBrightness(AnalogPin.P0, true, 90)
