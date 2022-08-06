function printDate(){
let date = Date();
console.log("Today's Date is:",date)

}
function printMonth(){
    let month = "August"
    console.log("The Current Month is",month)

}
function getBatchInfo(){
    let batch="Plutonium"
    let week=3
    let day=5
    let topic="Node Module System"
    console.log("Batch name:", batch, "Week:",week, "Day:",day, "The topic being taught today is:",topic)
    

}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo