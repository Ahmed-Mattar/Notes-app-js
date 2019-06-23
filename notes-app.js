let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy:'byEdited'
}

renderNotes(notes,filters);

const timestamp = moment().valueOf();

document.querySelector('#create-note').addEventListener('click',function(e) {
    const note = {
        id: uuidv4(),
        title:'',
        body:'',
        createdAt:timestamp,
        updatedAt:timestamp

    }
    notes.push(note);
    saveNotes(notes);
    renderNotes(notes,filters);
    location.assign(`./edit.html#${note.id}`);
    
});



document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
});

document.querySelector('#filter-by').addEventListener('change',function(e){
    filters.sortBy = e.target.value;
    renderNotes(notes,filters);
});

window.addEventListener('storage',function(e){

    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes,filters);
    }
})


