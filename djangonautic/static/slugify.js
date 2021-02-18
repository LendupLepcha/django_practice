// const titleInput = document.querySelector('name=title');
// const slugInput = document.querySelector('name=slug');
const titleInput = document.getElementById("id_title");
const slugInput = document.getElementById("id_slug");
const slugify = (val) => {
    return val.toString().toLowerCase().trim()
        .replace(/&/g, '-and-')    // replace & with -and-
        .replace(/[\s\W-]+/g, '-') // replace space and non word char and dash with -
};
titleInput.addEventListener('keyup', (e)=>{
    slugInput.setAttribute('value', slugify(titleInput.value));
});