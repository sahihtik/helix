export default function decorate(block) {
    [...block.children].forEach((row)=>{
        [...row.children].forEach((col) => {
        row.classList.add("timeline");
        
    })
})
}
