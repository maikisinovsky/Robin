import { SerialPort } from 'serialport'

const serialport = new SerialPort({ path: 'COM1', baudRate: 9600 })

export const arduino =(data)=>{
    serialport.write(data.toString())
}