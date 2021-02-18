const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('slug[name=slug]');
// const titleInput = document.getElementById("input[name=id_title]");
// const slugInput = document.getElementById("input[name=id_slug]");
const slugify = (val) => {
    return val.toString().toLowerCase().trim()
        .replace(/&/g, '-and-')    // replace & with -and-
        .replace(/[\s\W-]+/g, '-') // replace space and non word char and dash with -
};
titleInput.addEventListener('keyup', (e)=>{
    // slugInput.setAttribute('value', slugify(titleInput.value));
    slugInput.setAttribute('value', slugify(titleInput.value));
});