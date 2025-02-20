export default function decorate(block) {
    [...block.childern].forEach((row)=>{
        row.classList.add("list");
        
    })
    
        


}