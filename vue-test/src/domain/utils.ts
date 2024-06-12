function getTimePassed(date:String){
    const currentDate = new Date();
    const dateToCompare = new Date(date);
    const yearDiff = currentDate.getFullYear() - dateToCompare.getFullYear();
    if(yearDiff > 0){
        const yearText = (yearDiff > 1) ? 'years' : 'year';
        return yearDiff+" "+yearText+" ago";
    }else{
        const monthDiff = currentDate.getMonth() - dateToCompare.getMonth();
        if(monthDiff > 0){
            const monthText = (yearDiff > 1) ? 'years' : 'year';
            return monthDiff+" "+monthText+" ago";
        }else{
            const dayDiff = currentDate.getDate() - dateToCompare.getDate();
            if(dayDiff > 0){
                const dayText = (yearDiff > 1) ? 'dias' : 'dia';
                return dayDiff+" "+dayText+" ago";
            }else{
                return "Today";
            }
        
        }
    }
    
}

export {getTimePassed}