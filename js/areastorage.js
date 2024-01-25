let serversidearea;

 function setArea(area) {
    serversidearea = area;
    console.log(serversidearea);
 }
 function getArea(area) {
    return serversidearea;
 }

 module.exports = {
    setArea,
    getArea
 };