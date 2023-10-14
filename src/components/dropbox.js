export default function Dropbox() {
    return (
        <div>
            <input type="file" onChange={fileSelectedHandler}></input>
        </div>
    );
}

fileSelectedHandler = (event) => {
    console.log(event);
};
