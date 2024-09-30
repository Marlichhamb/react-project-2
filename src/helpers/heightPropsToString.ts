export const heightPropsToString = (height?: number):string => {

    if (!height) {
        return "100px"
    }

    if(height < 26) {
        return "26px"
    } 

    if (height > 100) {
        return "100px"
    }

    return `${height}px`

}