import { SerialPort } from "serialport"
import { sendToFront } from "./server"


export const arduino = (data)=>{
const serialport = new SerialPort({ path: 'COM3', baudRate: 9600 })
serialport.write(JSON.stringify(data))

}

serialport.on("data",(data)=>{
    sendToFront(JSON.parse(data))
})