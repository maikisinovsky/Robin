import { SerialPort } from 'serialport'

const serialport = new SerialPort({ path: 'COM4', baudRate: 9600 })

export const arduino =(data)=>{
    serialport.write(data.toString())
}