import { Colors } from "./Constant";

const statusColor = (status) => status.toLowerCase() === 'open' ? Colors.oceanBlue : status.toLowerCase() === 'partially' ? Colors.orange : status.toLowerCase() === 'completed' ? Colors.green : Colors.black;


export {
    statusColor
}