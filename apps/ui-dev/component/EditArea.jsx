import github from "../constants/github";
import "./EditArea.scss";

function EditLink ({ filename }) {
    return <div class="edit-link">
        <a href={`${github.DOCUMENT_ROOT}/${filename}`} target={filename}>[Edit]</a>
    </div>
}

export function EditArea ({ filename, content }) {
    return <div class="edit-area">
        <EditLink filename={filename} />
        {content}
        <EditLink filename={filename} />
    </div>
}