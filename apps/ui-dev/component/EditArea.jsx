import "./EditArea.scss";

function EditLink ({ filename }) {
    return <div class="edit-link">
        <a href={`https://github.com/elf-framework/editor/apps/ui-dev/${filename}`} target={filename}>[Edit]</a>
    </div>
}

export function EditArea ({ filename, content }) {
    return <div class="edit-area">
        <EditLink filename={filename} />
        {content}
        <EditLink filename={filename} />
    </div>
}