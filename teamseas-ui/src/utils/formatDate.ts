import {format} from 'date-fns';

//uses local format: https://date-fns.org/v2.22.1/docs/format
const formatDate = (time?: string | number | Date)=>{
    if(!time){
        return;
    }
    return format(new Date(time), 'Pp');
};

export default formatDate