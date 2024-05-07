export default function Interactivity(){
    return(
        <Toolbar
        playMovie={()=> alert('Playing!')}
        uploadImage={()=> alert('Uploading...!')}
        />
    )
}

function Toolbar({playMovie, uploadImage}){
    return(
        <div>
            <Button onClick={playMovie} className="button">
                playMovie 
            </Button>
            <Button onClick={uploadImage} className="button">
                Upload Image
            </Button>
        </div>
    )
}

function Button({onClick, child}){
    return(
        <button onClick={onClick} >
            {child}
        </button>
    )
}